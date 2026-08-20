use serde::{Deserialize, Serialize};
use thiserror::Error;

#[derive(Error, Debug, Serialize, Deserialize, Clone)]
pub enum AppError {
    #[error("Authentication failed: {0}")]
    AuthError(String),

    #[error("Unauthorized access: {0}")]
    Unauthorized(String),

    #[error("Forbidden: {0}")]
    Forbidden(String),

    #[error("Resource not found: {0}")]
    NotFound(String),

    #[error("Validation error: {0}")]
    ValidationError(String),

    #[error("Database error: {0}")]
    DatabaseError(String),

    #[error("Hardware/Device error: {0}")]
    DeviceError(String),

    #[error("Communication error: {0}")]
    CommunicationError(String),

    #[error("Internal server error: {0}")]
    InternalError(String),
}

pub type Result<T> = std::result::Result<T, AppError>;
