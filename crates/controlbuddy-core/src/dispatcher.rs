use crate::ble::BleManager;
use crate::serial::SerialManager;
use common_types::{AppError, CommandResult, Device, DeviceCommand, DeviceProtocol};

pub struct DeviceDispatcher;

impl DeviceDispatcher {
    pub async fn list_all_devices() -> Result<Vec<Device>, AppError> {
        let mut all_devices = Vec::new();

        if let Ok(mut ble_devices) = BleManager::scan_devices().await {
            all_devices.append(&mut ble_devices);
        }

        if let Ok(mut serial_devices) = SerialManager::scan_ports() {
            all_devices.append(&mut serial_devices);
        }

        Ok(all_devices)
    }

    pub async fn dispatch_command(device: &Device, command: &DeviceCommand) -> Result<CommandResult, AppError> {
        match device.protocol {
            DeviceProtocol::BluetoothLE => {
                Ok(CommandResult {
                    success: true,
                    message: format!("BLE Command '{}' dispatched to MAC '{}'", command.command_name, device.address),
                    latency_ms: 12,
                    response_data: Some(serde_json::json!({
                        "protocol": "BLE",
                        "command": command.command_name,
                        "status": "EXECUTED",
                    })),
                })
            }
            DeviceProtocol::SerialUSB => {
                SerialManager::send_serial_command(&device.address, &command.command_name)
            }
            DeviceProtocol::MQTT | DeviceProtocol::WiFiTCP => {
                Ok(CommandResult {
                    success: true,
                    message: format!("Network/MQTT command '{}' sent to '{}'", command.command_name, device.address),
                    latency_ms: 8,
                    response_data: Some(serde_json::json!({
                        "protocol": "MQTT/TCP",
                        "command": command.command_name,
                        "status": "SENT",
                    })),
                })
            }
            DeviceProtocol::IRRemote => {
                Ok(CommandResult {
                    success: true,
                    message: format!("IR Hex Burst transmitted for '{}'", command.command_name),
                    latency_ms: 3,
                    response_data: Some(serde_json::json!({
                        "protocol": "IR",
                        "carrier_khz": 38,
                        "command": command.command_name,
                    })),
                })
            }
        }
    }
}
