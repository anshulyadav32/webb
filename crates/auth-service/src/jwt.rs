use chrono::{Duration, Utc};
use common_types::{AppError, AuthClaims, UserRole};
use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, Validation};
use uuid::Uuid;

pub struct JwtManager {
    secret: String,
    access_token_duration_mins: i64,
    refresh_token_duration_days: i64,
}

impl JwtManager {
    pub fn new(secret: impl Into<String>) -> Self {
        Self {
            secret: secret.into(),
            access_token_duration_mins: 60,   // 1 hour access token
            refresh_token_duration_days: 30,  // 30 days refresh token
        }
    }

    pub fn generate_tokens(&self, user_id: Uuid, email: &str, role: UserRole) -> Result<(String, String), AppError> {
        let now = Utc::now();
        let exp_access = (now + Duration::minutes(self.access_token_duration_mins)).timestamp() as usize;
        let exp_refresh = (now + Duration::days(self.refresh_token_duration_days)).timestamp() as usize;

        let access_claims = AuthClaims {
            sub: user_id,
            email: email.to_string(),
            role: role.clone(),
            exp: exp_access,
            iat: now.timestamp() as usize,
        };

        let refresh_claims = AuthClaims {
            sub: user_id,
            email: email.to_string(),
            role,
            exp: exp_refresh,
            iat: now.timestamp() as usize,
        };

        let encoding_key = EncodingKey::from_secret(self.secret.as_bytes());

        let access_token = encode(&Header::default(), &access_claims, &encoding_key)
            .map_err(|e| AppError::InternalError(format!("Access token generation failed: {}", e)))?;

        let refresh_token = encode(&Header::default(), &refresh_claims, &encoding_key)
            .map_err(|e| AppError::InternalError(format!("Refresh token generation failed: {}", e)))?;

        Ok((access_token, refresh_token))
    }

    pub fn validate_token(&self, token: &str) -> Result<AuthClaims, AppError> {
        let decoding_key = DecodingKey::from_secret(self.secret.as_bytes());
        let validation = Validation::default();

        let token_data = decode::<AuthClaims>(token, &decoding_key, &validation)
            .map_err(|e| AppError::Unauthorized(format!("Invalid or expired token: {}", e)))?;

        Ok(token_data.claims)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_jwt_generation_and_validation() {
        let manager = JwtManager::new("super-secret-jwt-key-2026");
        let user_id = Uuid::new_v4();
        let email = "alex@studybuddy.io";

        let (access, _refresh) = manager
            .generate_tokens(user_id, email, UserRole::Student)
            .expect("Token generation should succeed");

        let claims = manager.validate_token(&access).expect("Validation should pass");
        assert_eq!(claims.sub, user_id);
        assert_eq!(claims.email, email);
        assert_eq!(claims.role, UserRole::Student);
    }
}
