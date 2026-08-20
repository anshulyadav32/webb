use crate::state::AppState;
use auth_service::PasswordManager;
use axum::{extract::State, http::StatusCode, response::IntoResponse, Json};
use common_types::{ApiResponse, AuthResponse, LoginRequest, RegisterRequest, User, UserProfile, UserRole};
use uuid::Uuid;

pub async fn register(
    State(state): State<AppState>,
    Json(payload): Json<RegisterRequest>,
) -> impl IntoResponse {
    let hashed_pw = match PasswordManager::hash_password(&payload.password) {
        Ok(h) => h,
        Err(e) => return (StatusCode::INTERNAL_SERVER_ERROR, Json(ApiResponse::error(e.to_string()))).into_response(),
    };

    let user_id = Uuid::new_v4();
    let user = User {
        id: user_id,
        email: payload.email.clone(),
        name: payload.name,
        password_hash: hashed_pw,
        phone: payload.phone,
        dob: None,
        profile_image: None,
        role: UserRole::Student,
        subscription_tier: "Pro".to_string(),
        created_at: chrono::Utc::now(),
        updated_at: chrono::Utc::now(),
    };

    let (access, refresh) = match state.jwt_manager.generate_tokens(user.id, &user.email, user.role.clone()) {
        Ok(t) => t,
        Err(e) => return (StatusCode::INTERNAL_SERVER_ERROR, Json(ApiResponse::error(e.to_string()))).into_response(),
    };

    let response = AuthResponse {
        user: UserProfile::from(user),
        access_token: access,
        refresh_token: refresh,
        token_type: "Bearer".to_string(),
        expires_in: 3600,
    };

    (StatusCode::CREATED, Json(ApiResponse::success(response, "User registered successfully"))).into_response()
}

pub async fn login(
    State(state): State<AppState>,
    Json(payload): Json<LoginRequest>,
) -> impl IntoResponse {
    let user_id = Uuid::new_v4();
    let profile = UserProfile {
        id: user_id,
        email: payload.email.clone(),
        name: "Alex Johnson".to_string(),
        role: UserRole::Student,
        subscription_tier: "Pro".to_string(),
        profile_image: Some("https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128".to_string()),
    };

    let (access, refresh) = match state.jwt_manager.generate_tokens(user_id, &payload.email, profile.role.clone()) {
        Ok(t) => t,
        Err(e) => return (StatusCode::INTERNAL_SERVER_ERROR, Json(ApiResponse::error(e.to_string()))).into_response(),
    };

    let response = AuthResponse {
        user: profile,
        access_token: access,
        refresh_token: refresh,
        token_type: "Bearer".to_string(),
        expires_in: 3600,
    };

    (StatusCode::OK, Json(ApiResponse::success(response, "Logged in successfully"))).into_response()
}
