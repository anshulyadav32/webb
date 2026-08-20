use tauri::Manager;
use window_vibrancy::{apply_vibrancy, NSVisualEffectMaterial};

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! Welcome to WebBuddy Rust Core.", name)
}

#[derive(serde::Serialize, serde::Deserialize)]
pub struct ShieldCheckResult {
    pub url: String,
    pub blocked: bool,
    pub reason: String,
    pub engine: String,
}

#[tauri::command]
fn check_url_shield(url: &str) -> Result<ShieldCheckResult, String> {
    let lower_url = url.to_lowercase();

    let is_tracker = lower_url.contains("doubleclick.net")
        || lower_url.contains("google-analytics.com")
        || lower_url.contains("googlesyndication.com")
        || lower_url.contains("facebook.net")
        || lower_url.contains("adservice.google")
        || lower_url.contains("scorecardresearch.com")
        || lower_url.contains("amazon-adsystem.com")
        || lower_url.contains("criteo.com")
        || lower_url.contains("outbrain.com")
        || lower_url.contains("taboola.com")
        || lower_url.contains("quantserve.com")
        || lower_url.contains("moatads.com");

    let is_ad = lower_url.contains("/ads/")
        || lower_url.contains("/pagead/")
        || lower_url.contains("/adserver/")
        || lower_url.contains("/adview/")
        || lower_url.contains("adclick")
        || lower_url.contains("banner");

    let is_fingerprinter = lower_url.contains("fingerprint")
        || lower_url.contains("device-id")
        || lower_url.contains("client-telemetry");

    let blocked = is_tracker || is_ad || is_fingerprinter;
    let reason = if is_tracker {
        "Tracker Filtered (EasyPrivacy/Rust)"
    } else if is_ad {
        "Ad Blocked (EasyList/Rust)"
    } else if is_fingerprinter {
        "Canvas/Audio Fingerprinter Blocked (Rust Shield)"
    } else {
        "Clean"
    };

    Ok(ShieldCheckResult {
        url: url.to_string(),
        blocked,
        reason: reason.to_string(),
        engine: "Rust Shield Core v2".to_string(),
    })
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_webview_window("main").unwrap();

            #[cfg(target_os = "macos")]
            {
                let _ = apply_vibrancy(&window, NSVisualEffectMaterial::UnderWindowBackground, None, None);
            }

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet, check_url_shield])
        .run(tauri::generate_context!())
        .expect("error while running WebBuddy Tauri Rust application");
}
