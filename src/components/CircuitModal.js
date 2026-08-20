import { store } from '../state/store.js';
import { getIcon } from './Icons.js';

export function initCircuitModal(container) {
  function render() {
    const state = store.getState();
    if (state.activeModal !== 'circuit') {
      container.style.display = 'none';
      return;
    }
    container.style.display = 'flex';

    const pvt = state.superPvt || {};
    const circuit = pvt.circuit || [];

    container.className = 'modal-backdrop';
    container.innerHTML = `
      <div class="modal-card circuit-modal-card" style="max-width: 680px; width: 100%;">
        <div class="modal-header" style="border-bottom: 1px solid rgba(127, 0, 255, 0.25);">
          <div class="modal-title-row">
            <span class="modal-icon" style="background: rgba(127, 0, 255, 0.2); color: #C084FC;">
              ${getIcon('onion', '', 20)}
            </span>
            <div>
              <h2 class="modal-title">Tor Onion Circuit & Security Inspector</h2>
              <p class="modal-subtitle">Real-time multi-hop encrypted network topology & identity protection</p>
            </div>
          </div>
          <button class="modal-close-btn" id="closeCircuitModalBtn">${getIcon('close', '', 14)}</button>
        </div>

        <div class="modal-body" style="gap: 20px;">
          <!-- Top Security Status Bar -->
          <div class="circuit-status-banner">
            <div class="status-badge-item">
              <span class="status-dot green"></span>
              <span>Anonymity: <strong>${pvt.anonymityScore || '100% Ultra Stealth'}</strong></span>
            </div>
            <div class="status-badge-item">
              <span class="status-dot cyan"></span>
              <span>Exit IP: <strong>${pvt.exitIp || '185.220.101.42'}</strong> (${escapeHtml(pvt.exitCountry || 'Zurich, Switzerland')})</span>
            </div>
            <div class="status-badge-item">
              <span class="status-dot purple"></span>
              <span>Circuit Latency: <strong>${pvt.circuitPing || '28ms'}</strong></span>
            </div>
          </div>

          <!-- Relays Diagram Node Flow -->
          <div class="relays-diagram-container">
            <div class="relay-card client">
              <div class="relay-badge origin">Origin</div>
              <div class="relay-icon">${getIcon('home', '', 22)}</div>
              <div class="relay-name">Your Local Sandbox</div>
              <div class="relay-sub">Ephemeral RAM</div>
            </div>

            <div class="relay-arrow">
              <span class="arrow-line"></span>
              <span class="arrow-enc">AES-256</span>
            </div>

            <div class="relay-card">
              <div class="relay-badge guard">Guard Hop</div>
              <div class="relay-icon" style="color:#00F2FE;">${getIcon('shield', '', 22)}</div>
              <div class="relay-name">${escapeHtml(circuit[0]?.location || 'Frankfurt, Germany 🇩🇪')}</div>
              <div class="relay-sub">${circuit[0]?.ip || '141.95.12.8'}</div>
              <div class="relay-ping">Ping: ${circuit[0]?.ping || '14ms'}</div>
            </div>

            <div class="relay-arrow">
              <span class="arrow-line"></span>
              <span class="arrow-enc">Layer 2</span>
            </div>

            <div class="relay-card">
              <div class="relay-badge relay">Middle Relay</div>
              <div class="relay-icon" style="color:#A78BFA;">${getIcon('circuit', '', 22)}</div>
              <div class="relay-name">${escapeHtml(circuit[1]?.location || 'Amsterdam, Netherlands 🇳🇱')}</div>
              <div class="relay-sub">${circuit[1]?.ip || '194.26.29.112'}</div>
              <div class="relay-ping">Ping: ${circuit[1]?.ping || '21ms'}</div>
            </div>

            <div class="relay-arrow">
              <span class="arrow-line"></span>
              <span class="arrow-enc">Exit</span>
            </div>

            <div class="relay-card exit">
              <div class="relay-badge exit">Exit Gateway</div>
              <div class="relay-icon" style="color:#10B981;">${getIcon('globe', '', 22)}</div>
              <div class="relay-name" style="color:#10B981; font-weight:700;">${escapeHtml(circuit[2]?.location || 'Zurich, Switzerland 🇨🇭')}</div>
              <div class="relay-sub">${circuit[2]?.ip || '185.220.101.42'}</div>
              <div class="relay-ping">Ping: ${circuit[2]?.ping || '28ms'}</div>
            </div>
          </div>

          <!-- Active Protections Matrix -->
          <div class="protections-matrix">
            <div class="protection-row">
              <div class="prot-info">
                <span class="prot-title">🎭 FARBLE 2.0 Canvas & WebGL Farbling</span>
                <span class="prot-desc">Injects cryptographic pseudo-random noise into HTML5 Canvas readbacks to defeat browser fingerprinting.</span>
              </div>
              <span class="prot-badge active">ENFORCED</span>
            </div>

            <div class="protection-row">
              <div class="prot-info">
                <span class="prot-title">🛡️ WebRTC ICE & STUN Leak Isolation</span>
                <span class="prot-desc">Blocks direct peer-to-peer UDP queries that could reveal local or public ISP gateway addresses.</span>
              </div>
              <span class="prot-badge active">SHIELDED</span>
            </div>

            <div class="protection-row">
              <div class="prot-info">
                <span class="prot-title">🔒 DNS-over-HTTPS (DoH) Multi-Relay Resolution</span>
                <span class="prot-desc">All hostname queries are routed through encrypted Cloudflare/Quad9 DoH endpoints with zero logging.</span>
              </div>
              <span class="prot-badge active">ACTIVE</span>
            </div>

            <div class="protection-row">
              <div class="prot-info">
                <span class="prot-title">🚨 Ephemeral RAM Sandboxing & Panic Destruction</span>
                <span class="prot-desc">Destroy all active private cookies, socket states, and caches with 1 click.</span>
              </div>
              <span class="prot-badge ready">READY</span>
            </div>
          </div>
        </div>

        <div class="modal-footer" style="justify-content: space-between; border-top: 1px solid rgba(127, 0, 255, 0.25);">
          <button class="modal-btn" id="rotateIdentityModalBtn" style="background: linear-gradient(135deg, #7F00FF 0%, #00F2FE 100%); color:#fff; border:none;">
            ${getIcon('refresh', '', 14)}
            <span>Rotate Tor Identity & New Circuit</span>
          </button>

          <div style="display:flex; gap:10px;">
            <button class="modal-btn" id="panicFromModalBtn" style="background: rgba(239,68,68,0.2); border: 1px solid rgba(239,68,68,0.4); color: #EF4444;">
              ${getIcon('nuke', '', 14)}
              <span>🚨 Panic Nuke</span>
            </button>
            <button class="modal-btn secondary" id="closeCircuitModalBtn2">Done</button>
          </div>
        </div>
      </div>
    `;

    setupEvents();
  }

  function setupEvents() {
    container.querySelector('#closeCircuitModalBtn')?.addEventListener('click', () => store.closeModal());
    container.querySelector('#closeCircuitModalBtn2')?.addEventListener('click', () => store.closeModal());

    container.querySelector('#rotateIdentityModalBtn')?.addEventListener('click', () => {
      store.refreshOnionIdentity();
      showToast('🧅 New Onion Circuit & Exit IP assigned!');
      render();
    });

    container.querySelector('#panicFromModalBtn')?.addEventListener('click', () => {
      store.closeModal();
      store.panicNukeSession();
      showToast('🚨 Emergency Panic: RAM flushed and private tabs destroyed!');
    });

    container.addEventListener('click', (e) => {
      if (e.target === container) {
        store.closeModal();
      }
    });
  }

  store.subscribe((state, event) => {
    if (['MODAL_CHANGED', 'SUPER_PVT_UPDATED'].includes(event)) {
      render();
    }
  });

  render();
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;';
  toast.innerText = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}
