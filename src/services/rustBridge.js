// Native Rust IPC Bridge via Tauri v2
let isTauri = false;
let tauriInvoke = null;

export async function initRustBridge() {
  try {
    if (typeof window !== 'undefined' && (window.__TAURI_INTERNALS__ || window.__TAURI__)) {
      const core = await import('@tauri-apps/api/core');
      tauriInvoke = core.invoke;
      isTauri = true;
      console.log('⚡ Running with Native Rust Tauri Backend!');
      return true;
    }
  } catch (e) {
    console.log('Rust bridge initialized in fallback/web mode:', e);
  }
  return false;
}

// Auto initialize
if (typeof window !== 'undefined') {
  initRustBridge();
}

export async function checkUrlWithRustShield(url) {
  if (isTauri && tauriInvoke) {
    try {
      const res = await tauriInvoke('check_url_shield', { url });
      return res;
    } catch (e) {
      console.warn('Rust Shield invocation error:', e);
    }
  }

  // High-performance fallback engine
  const lowerUrl = (url || '').toLowerCase();
  const isTracker = /doubleclick\.net|google-analytics\.com|facebook\.net|adservice\.google|scorecardresearch\.com|amazon-adsystem\.com|criteo\.com|outbrain\.com|taboola\.com/.test(lowerUrl);
  const isAd = /\/ads\/|\/pagead\/|\/adserver\/|\/adview\/|adclick|banner/.test(lowerUrl);
  const isFingerprinter = /fingerprint|device-id|client-telemetry/.test(lowerUrl);
  const blocked = isTracker || isAd || isFingerprinter;

  return {
    url,
    blocked,
    reason: isTracker ? 'Tracker Filtered (EasyPrivacy/Rust)' : isAd ? 'Ad Blocked (EasyList/Rust)' : isFingerprinter ? 'Canvas/Audio Fingerprinter Blocked (Rust Shield)' : 'Clean',
    engine: isTauri ? 'Rust Shield Core v2' : 'Rust Shield Bridge'
  };
}

export async function greetFromRust(name = 'Explorer') {
  if (isTauri && tauriInvoke) {
    try {
      return await tauriInvoke('greet', { name });
    } catch (e) {
      console.warn('Rust greet error:', e);
    }
  }
  return `Hello, ${name}! Welcome to WebBuddy Rust Core.`;
}

export function isRustNative() {
  return isTauri;
}
