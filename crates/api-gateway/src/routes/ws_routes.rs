use axum::{
    extract::{
        ws::{Message, WebSocket, WebSocketUpgrade},
        State,
    },
    response::IntoResponse,
};
use crate::state::AppState;
use common_types::{DeviceTelemetry, WsMessage};
use futures::StreamExt;
use std::time::Duration;
use uuid::Uuid;

pub async fn ws_handler(
    ws: WebSocketUpgrade,
    State(state): State<AppState>,
) -> impl IntoResponse {
    ws.on_upgrade(move |socket| handle_socket(socket, state))
}

async fn handle_socket(mut socket: WebSocket, _state: AppState) {
    let mut interval = tokio::time::interval(Duration::from_secs(3));

    loop {
        tokio::select! {
            _ = interval.tick() => {
                let telemetry = DeviceTelemetry {
                    device_id: Uuid::new_v4(),
                    timestamp: chrono::Utc::now(),
                    metric_name: "voltage_rssi".to_string(),
                    value: 3.3,
                    unit: "V".to_string(),
                };

                let msg = WsMessage::DeviceTelemetry(telemetry);
                if let Ok(serialized) = serde_json::to_string(&msg) {
                    if socket.send(Message::Text(serialized)).await.is_err() {
                        break;
                    }
                }
            }
            msg = socket.next() => {
                match msg {
                    Some(Ok(Message::Text(text))) => {
                        if text == "PING" {
                            let _ = socket.send(Message::Text("PONG".to_string())).await;
                        }
                    }
                    Some(Ok(Message::Close(_))) | None => {
                        break;
                    }
                    _ => {}
                }
            }
        }
    }
}
