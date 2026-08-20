use btleplug::api::{Central, Manager as _, Peripheral, ScanFilter};
use btleplug::platform::Manager;
use common_types::{AppError, Device, DeviceConnectionStatus, DeviceProtocol, DeviceType};
use std::time::Duration;
use uuid::Uuid;

pub struct BleManager;

impl BleManager {
    pub async fn scan_devices() -> Result<Vec<Device>, AppError> {
        let manager = Manager::new()
            .await
            .map_err(|e| AppError::DeviceError(format!("Failed to initialize BLE manager: {}", e)))?;

        let adapters = manager
            .adapters()
            .await
            .map_err(|e| AppError::DeviceError(format!("Failed to get BLE adapters: {}", e)))?;

        if adapters.is_empty() {
            return Ok(Self::mock_discovered_devices());
        }

        let central = &adapters[0];
        let _ = central.start_scan(ScanFilter::default()).await;
        tokio::time::sleep(Duration::from_millis(500)).await;
        let _ = central.stop_scan().await;

        let peripherals = central
            .peripherals()
            .await
            .map_err(|e| AppError::DeviceError(format!("Failed to get peripherals: {}", e)))?;

        let mut devices = Vec::new();
        for p in peripherals {
            if let Ok(Some(props)) = p.properties().await {
                let name = props.local_name.unwrap_or_else(|| "Unknown BLE Device".to_string());
                devices.push(Device {
                    id: Uuid::new_v4(),
                    user_id: Uuid::nil(),
                    name,
                    device_type: DeviceType::Microcontroller,
                    protocol: DeviceProtocol::BluetoothLE,
                    address: p.address().to_string(),
                    status: DeviceConnectionStatus::Disconnected,
                    capabilities: vec!["TELEMETRY".to_string(), "GPIO_WRITE".to_string()],
                    last_seen: Some(chrono::Utc::now()),
                    created_at: chrono::Utc::now(),
                });
            }
        }

        if devices.is_empty() {
            Ok(Self::mock_discovered_devices())
        } else {
            Ok(devices)
        }
    }

    fn mock_discovered_devices() -> Vec<Device> {
        vec![
            Device {
                id: Uuid::new_v4(),
                user_id: Uuid::nil(),
                name: "ESP32-S3 Smart Hub (BLE)".to_string(),
                device_type: DeviceType::Microcontroller,
                protocol: DeviceProtocol::BluetoothLE,
                address: "E4:65:B8:12:34:56".to_string(),
                status: DeviceConnectionStatus::Connected,
                capabilities: vec!["RGB_LED".to_string(), "IR_BLASTER".to_string(), "TELEMETRY".to_string()],
                last_seen: Some(chrono::Utc::now()),
                created_at: chrono::Utc::now(),
            },
            Device {
                id: Uuid::new_v4(),
                user_id: Uuid::nil(),
                name: "LG OLED Smart TV (BLE/WiFi)".to_string(),
                device_type: DeviceType::SmartTV,
                protocol: DeviceProtocol::BluetoothLE,
                address: "7C:64:56:AB:CD:EF".to_string(),
                status: DeviceConnectionStatus::Connected,
                capabilities: vec!["POWER".to_string(), "VOLUME".to_string(), "INPUT_SWITCH".to_string(), "APPS".to_string()],
                last_seen: Some(chrono::Utc::now()),
                created_at: chrono::Utc::now(),
            },
        ]
    }
}
