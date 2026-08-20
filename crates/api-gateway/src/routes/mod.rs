pub mod auth_routes;
pub mod control_routes;
pub mod study_routes;
pub mod ws_routes;

use crate::state::AppState;
use axum::{
    routing::{get, post},
    Router,
};

pub fn create_router(state: AppState) -> Router {
    let api_v1 = Router::new()
        // Auth Endpoints
        .route("/auth/register", post(auth_routes::register))
        .route("/auth/login", post(auth_routes::login))
        // ControlBuddy Hardware & IoT Endpoints
        .route("/controlbuddy/devices", get(control_routes::list_devices))
        .route("/controlbuddy/command", post(control_routes::send_device_command))
        // StudyBuddy Learning Platform Endpoints
        .route("/studybuddy/courses", get(study_routes::list_courses))
        .route("/studybuddy/courses/:id/exam", post(study_routes::start_exam))
        .route("/studybuddy/courses/:id/exam/submit", post(study_routes::submit_exam))
        .route("/studybuddy/users/:user_id/progress/:course_id", get(study_routes::get_user_progress))
        // WebSocket Live Telemetry Stream
        .route("/ws", get(ws_routes::ws_handler));

    Router::new()
        .route("/health", get(health_check))
        .nest("/api/v1", api_v1)
        .with_state(state)
}

async fn health_check() -> axum::Json<common_types::ApiResponse<serde_json::Value>> {
    axum::Json(common_types::ApiResponse::success(
        serde_json::json!({
            "status": "healthy",
            "version": "1.0.0",
            "service": "ControlBuddy + StudyBuddy Rust Core",
            "engine": "Axum 0.7 + Tokio + SQLx"
        }),
        "API Gateway Operational",
    ))
}
