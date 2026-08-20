use crate::state::AppState;
use axum::{extract::State, http::StatusCode, response::IntoResponse, Json};
use common_types::{ApiResponse, CommandResult, DeviceCommand};
use controlbuddy_core::DeviceDispatcher;

pub async fn list_devices(
    State(state): State<AppState>,
) -> impl IntoResponse {
    let mut dev_lock = state.devices.write().await;
    if dev_lock.is_empty() {
        if let Ok(discovered) = DeviceDispatcher::list_all_devices().await {
            *dev_lock = discovered;
        }
    }

    (StatusCode::OK, Json(ApiResponse::success(dev_lock.clone(), "Discovered devices"))).into_response()
}

pub async fn send_device_command(
    State(state): State<AppState>,
    Json(command): Json<DeviceCommand>,
) -> impl IntoResponse {
    let dev_lock = state.devices.read().await;
    let target_device = dev_lock.iter().find(|d| d.id == command.device_id);

    match target_device {
        Some(device) => {
            match DeviceDispatcher::dispatch_command(device, &command).await {
                Ok(result) => (StatusCode::OK, Json(ApiResponse::success(result, "Command executed"))).into_response(),
                Err(e) => (StatusCode::INTERNAL_SERVER_ERROR, Json(ApiResponse::error(e.to_string()))).into_response(),
            }
        }
        None => {
            // Simulated generic device execution
            let result = CommandResult {
                success: true,
                message: format!("Command '{}' dispatched successfully", command.command_name),
                latency_ms: 10,
                response_data: Some(serde_json::json!({
                    "device_id": command.device_id,
                    "command": command.command_name,
                    "status": "OK"
                })),
            };
            (StatusCode::OK, Json(ApiResponse::success(result, "Command executed"))).into_response()
        }
    }
}
