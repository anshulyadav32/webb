use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize, Clone, PartialEq, Eq)]
pub enum UserRole {
    User,
    Student,
    Instructor,
    Admin,
}

impl Default for UserRole {
    fn default() -> Self {
        UserRole::User
    }
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct User {
    pub id: Uuid,
    pub email: String,
    pub name: String,
    #[serde(skip_serializing)]
    pub password_hash: String,
    pub phone: Option<String>,
    pub dob: Option<String>,
    pub profile_image: Option<String>,
    pub role: UserRole,
    pub subscription_tier: String,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct AuthClaims {
    pub sub: Uuid, // User ID
    pub email: String,
    pub role: UserRole,
    pub exp: usize, // Expiration timestamp
    pub iat: usize, // Issued-at timestamp
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct LoginRequest {
    pub email: String,
    pub password: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct RegisterRequest {
    pub email: String,
    pub password: String,
    pub name: String,
    pub phone: Option<String>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct AuthResponse {
    pub user: UserProfile,
    pub access_token: String,
    pub refresh_token: String,
    pub token_type: String,
    pub expires_in: usize,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct UserProfile {
    pub id: Uuid,
    pub email: String,
    pub name: String,
    pub role: UserRole,
    pub subscription_tier: String,
    pub profile_image: Option<String>,
}

impl From<User> for UserProfile {
    fn from(u: User) -> Self {
        UserProfile {
            id: u.id,
            email: u.email,
            name: u.name,
            role: u.role,
            subscription_tier: u.subscription_tier,
            profile_image: u.profile_image,
        }
    }
}
