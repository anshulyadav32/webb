use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize, Clone, PartialEq, Eq)]
pub enum DeviceProtocol {
    BluetoothLE,
    SerialUSB,
    MQTT,
    WiFiTCP,
    IRRemote,
}

#[derive(Debug, Serialize, Deserialize, Clone, PartialEq, Eq)]
pub enum DeviceType {
    SmartTV,
    SetTopBox,
    Microcontroller, // ESP32 / Arduino / Raspberry Pi
    AudioReceiver,
    SmartLight,
    CustomIoT,
}

#[derive(Debug, Serialize, Deserialize, Clone, PartialEq, Eq)]
pub enum DeviceConnectionStatus {
    Connected,
    Connecting,
    Disconnected,
    Error(String),
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Device {
    pub id: Uuid,
    pub user_id: Uuid,
    pub name: String,
    pub device_type: DeviceType,
    pub protocol: DeviceProtocol,
    pub address: String, // MAC address, COM port, or IP address
    pub status: DeviceConnectionStatus,
    pub capabilities: Vec<String>,
    pub last_seen: Option<DateTime<Utc>>,
    pub created_at: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct DeviceCommand {
    pub device_id: Uuid,
    pub command_name: String, // e.g., "POWER_TOGGLE", "VOLUME_UP", "CHANNEL_SET"
    pub payload: serde_json::Value,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct CommandResult {
    pub success: bool,
    pub message: String,
    pub latency_ms: u64,
    pub response_data: Option<serde_json::Value>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct DeviceTelemetry {
    pub device_id: Uuid,
    pub timestamp: DateTime<Utc>,
    pub metric_name: String, // e.g., "temperature", "voltage", "rssi", "status"
    pub value: f64,
    pub unit: String,
}
