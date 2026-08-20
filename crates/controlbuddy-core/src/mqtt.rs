use common_types::{AppError, CommandResult};
use rumqttc::{AsyncClient, MqttOptions, QoS};
use std::time::Duration;
use uuid::Uuid;

pub struct MqttBridge {
    client: AsyncClient,
}

impl MqttBridge {
    pub fn new(host: &str, port: u16, client_id: &str) -> (Self, rumqttc::EventLoop) {
        let mut mqttoptions = MqttOptions::new(client_id, host, port);
        mqttoptions.set_keep_alive(Duration::from_secs(15));

        let (client, eventloop) = AsyncClient::new(mqttoptions, 10);
        (Self { client }, eventloop)
    }

    pub async fn publish_command(&self, topic: &str, payload: &str) -> Result<CommandResult, AppError> {
        self.client
            .publish(topic, QoS::AtLeastOnce, false, payload.as_bytes())
            .await
            .map_err(|e| AppError::CommunicationError(format!("MQTT publish error: {}", e)))?;

        Ok(CommandResult {
            success: true,
            message: format!("Published message to MQTT topic '{}'", topic),
            latency_ms: 5,
            response_data: Some(serde_json::json!({
                "topic": topic,
                "qos": 1,
                "payload_len": payload.len()
            })),
        })
    }

    pub async fn subscribe_telemetry(&self, device_id: Uuid) -> Result<(), AppError> {
        let topic = format!("controlbuddy/devices/{}/telemetry", device_id);
        self.client
            .subscribe(&topic, QoS::AtMostOnce)
            .await
            .map_err(|e| AppError::CommunicationError(format!("MQTT subscribe error: {}", e)))?;

        Ok(())
    }
}
