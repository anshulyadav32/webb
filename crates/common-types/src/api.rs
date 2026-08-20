use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct ApiResponse<T = ()> {
    pub success: bool,
    pub message: String,
    pub data: Option<T>,
    pub timestamp: String,
}

impl<T> ApiResponse<T> {
    pub fn success(data: T, message: impl Into<String>) -> Self {
        Self {
            success: true,
            message: message.into(),
            data: Some(data),
            timestamp: chrono::Utc::now().to_rfc3339(),
        }
    }

    pub fn ok(data: T) -> Self {
        Self::success(data, "Success")
    }
}

impl ApiResponse<()> {
    pub fn error(message: impl Into<String>) -> Self {
        ApiResponse {
            success: false,
            message: message.into(),
            data: None,
            timestamp: chrono::Utc::now().to_rfc3339(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(tag = "type", content = "payload")]
pub enum WsMessage {
    DeviceTelemetry(crate::device::DeviceTelemetry),
    DeviceStatusChanged { device_id: uuid::Uuid, status: crate::device::DeviceConnectionStatus },
    StudyProgressUpdate(crate::study::StudyProgress),
    Ping,
    Pong,
}
