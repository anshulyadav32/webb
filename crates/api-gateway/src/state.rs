use auth_service::JwtManager;
use common_types::Device;
use std::sync::Arc;
use tokio::sync::RwLock;

#[derive(Clone)]
pub struct AppState {
    pub jwt_manager: Arc<JwtManager>,
    pub devices: Arc<RwLock<Vec<Device>>>,
}

impl AppState {
    pub fn new() -> Self {
        let jwt_manager = Arc::new(JwtManager::new("controlbuddy-studybuddy-jwt-secret-2026"));
        let devices = Arc::new(RwLock::new(Vec::new()));

        Self {
            jwt_manager,
            devices,
        }
    }
}
