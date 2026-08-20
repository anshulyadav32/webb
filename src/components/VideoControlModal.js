import { store } from '../state/store.js';
import { getIcon } from './Icons.js';

export function initVideoControlModal(container) {
  function render() {
    const state = store.getState();
    if (state.activeModal !== 'videoControls') {
      container.innerHTML = '';
      return;
    }

    const media = state.media;
    const currentMin = Math.floor(media.currentTime / 60);
    const currentSec = String(Math.floor(media.currentTime % 60)).padStart(2, '0');
    const durMin = Math.floor(media.duration / 60);
    const durSec = String(Math.floor(media.duration % 60)).padStart(2, '0');

    container.innerHTML = `
      <div class="video-control-popover" id="videoControlPopover">
        <div class="video-popover-header">
          <div class="video-header-brand">
            <div class="video-header-icon">
              ${getIcon('play', '', 16)}
            </div>
            <div>
              <div class="video-header-title">Video & Media Controls</div>
              <div class="video-header-sub">PiP, Overlap & Shortcuts Hub</div>
            </div>
          </div>

          <button class="action-icon-btn" id="closeVideoControlsBtn" title="Close">
            ${getIcon('close', '', 14)}
          </button>
        </div>

        <div class="video-popover-body">
          <!-- Active Media Control Card -->
          <div class="media-preview-card">
            <div class="media-card-top">
              <span class="media-video-title" title="${escapeAttr(media.videoTitle)}">${escapeHtml(media.videoTitle)}</span>
              <span class="media-badge">1080p HD</span>
            </div>

            <!-- Seek Slider -->
            <div class="media-seek-bar-container">
              <input 
                type="range" 
                class="media-seek-slider" 
                id="mediaSeekSlider" 
                min="0" 
                max="${media.duration}" 
                value="${media.currentTime}" 
              />
              <div class="media-time-row">
                <span>${currentMin}:${currentSec}</span>
                <span>${durMin}:${durSec}</span>
              </div>
            </div>

            <!-- Main Playback Actions -->
            <div class="media-controls-row">
              <button class="media-ctrl-btn" id="rewind10Btn" title="Rewind 10s (J or ←)">
                ${getIcon('skip-back', '', 16)}
              </button>

              <button class="media-ctrl-btn play-btn" id="mainPlayPauseBtn" title="Play / Pause (Space or K)">
                ${getIcon(media.isPlaying ? 'pause' : 'play', '', 18)}
              </button>

              <button class="media-ctrl-btn" id="forward10Btn" title="Forward 10s (L or →)">
                ${getIcon('skip-forward', '', 16)}
              </button>

              <button class="media-ctrl-btn" id="toggleMuteBtn" title="Mute / Unmute (M)">
                ${getIcon(media.isMuted ? 'volume-x' : 'volume-2', '', 16)}
              </button>
            </div>

            <!-- Speed Pills -->
            <div class="speed-pills-row">
              <span style="font-size:10.5px; color:var(--text-muted); padding-left:4px;">Speed:</span>
              ${[0.5, 0.75, 1.0, 1.25, 1.5, 2.0].map(spd => `
                <button class="speed-pill-btn ${media.playbackSpeed === spd ? 'active' : ''}" data-set-speed="${spd}">
                  ${spd}x
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Feature Action Cards -->
          <div class="video-features-grid">
            <button class="video-feature-card-btn ${media.isPipActive ? 'active' : ''}" id="togglePipBtn">
              <div class="feature-btn-top">
                ${getIcon('pip', '', 18)}
                <span style="font-size:11px; font-weight:700;">${media.isPipActive ? 'ON' : 'OFF'}</span>
              </div>
              <div class="feature-btn-title">Picture-in-Picture</div>
              <div class="feature-btn-sub">Floating persistent window (P)</div>
            </button>

            <button class="video-feature-card-btn ${media.isOverlapping ? 'active' : ''}" id="toggleOverlappingBtn">
              <div class="feature-btn-top">
                ${getIcon('layers', '', 18)}
                <span style="font-size:11px; font-weight:700;">${media.isOverlapping ? 'ON' : 'OFF'}</span>
              </div>
              <div class="feature-btn-title">Overlapping View</div>
              <div class="feature-btn-sub">Corner dock across all tabs</div>
            </button>

            <button class="video-feature-card-btn ${media.autoHideControls ? 'active' : ''}" id="toggleAutoHideBtn">
              <div class="feature-btn-top">
                ${getIcon('sparkles', '', 18)}
                <span style="font-size:11px; font-weight:700;">${media.autoHideControls ? 'ON' : 'OFF'}</span>
              </div>
              <div class="feature-btn-title">Auto-Hide Controls</div>
              <div class="feature-btn-sub">Fade controls when idle</div>
            </button>

            <button class="video-feature-card-btn active" id="videoAdblockInfoBtn">
              <div class="feature-btn-top">
                ${getIcon('shield-check', '', 18)}
                <span style="font-size:11px; font-weight:700; color:#10B981;">ACTIVE</span>
              </div>
              <div class="feature-btn-title">Video Ad Blocker</div>
              <div class="feature-btn-sub">Zero pre-roll & mid-roll ads</div>
            </button>
          </div>

          <!-- Shortcuts Cheat Sheet -->
          <div class="shortcuts-cheat-section">
            <div class="shortcuts-title-row">
              <span>KEYBOARD SHORTCUTS</span>
              <span style="color:#00F2FE;">Quick Trigger</span>
            </div>

            <div class="shortcut-row">
              <span>Play / Pause Video</span>
              <span class="shortcut-key">Space</span>
            </div>
            <div class="shortcut-row">
              <span>Rewind 10s / Forward 10s</span>
              <span><span class="shortcut-key">J</span> / <span class="shortcut-key">L</span></span>
            </div>
            <div class="shortcut-row">
              <span>Picture-in-Picture (PiP)</span>
              <span class="shortcut-key">P</span>
            </div>
            <div class="shortcut-row">
              <span>Mute / Unmute Audio</span>
              <span class="shortcut-key">M</span>
            </div>
            <div class="shortcut-row">
              <span>Toggle Fullscreen</span>
              <span class="shortcut-key">F</span>
            </div>
          </div>
        </div>
      </div>
    `;

    setupEvents();
  }

  function setupEvents() {
    const popover = container.querySelector('#videoControlPopover');
    if (!popover) return;

    popover.querySelector('#closeVideoControlsBtn')?.addEventListener('click', () => {
      store.closeModal();
    });

    popover.querySelector('#mainPlayPauseBtn')?.addEventListener('click', () => {
      store.togglePlayPause();
    });

    popover.querySelector('#rewind10Btn')?.addEventListener('click', () => {
      store.skipMediaTime(-10);
      showToast('⏪ Rewound 10s');
    });

    popover.querySelector('#forward10Btn')?.addEventListener('click', () => {
      store.skipMediaTime(10);
      showToast('⏩ Forward 10s');
    });

    popover.querySelector('#toggleMuteBtn')?.addEventListener('click', () => {
      store.toggleMediaMute();
    });

    popover.querySelector('#mediaSeekSlider')?.addEventListener('input', (e) => {
      store.seekMedia(parseFloat(e.target.value));
    });

    popover.querySelectorAll('[data-set-speed]').forEach(btn => {
      btn.addEventListener('click', () => {
        const spd = parseFloat(btn.dataset.setSpeed);
        store.setPlaybackSpeed(spd);
        showToast(`⚡ Playback speed: ${spd}x`);
      });
    });

    popover.querySelector('#togglePipBtn')?.addEventListener('click', () => {
      store.togglePip();
      showToast(store.getState().media.isPipActive ? '🖼️ Picture-in-Picture Activated!' : '🖼️ Picture-in-Picture Closed');
    });

    popover.querySelector('#toggleOverlappingBtn')?.addEventListener('click', () => {
      store.toggleOverlapping();
      showToast(store.getState().media.isOverlapping ? '📑 Overlapping Corner Dock Enabled' : '📑 Overlapping View Disabled');
    });

    popover.querySelector('#toggleAutoHideBtn')?.addEventListener('click', () => {
      store.toggleAutoHideControls();
      showToast(store.getState().media.autoHideControls ? '✨ Auto-Hide Controls: Enabled' : '✨ Auto-Hide Controls: Always Visible');
    });

    // Close on outside click
    const handleOutsideClick = (e) => {
      if (!e.target.closest('#videoControlPopover') && !e.target.closest('#videoControlBtn')) {
        store.closeModal();
        document.removeEventListener('click', handleOutsideClick);
      }
    };
    setTimeout(() => document.addEventListener('click', handleOutsideClick), 10);
  }

  store.subscribe((state, event) => {
    if (['MODAL_CHANGED', 'MEDIA_PLAY_STATE_CHANGED', 'MEDIA_PIP_TOGGLED', 'MEDIA_OVERLAPPING_TOGGLED', 'MEDIA_AUTOHIDE_TOGGLED', 'MEDIA_SPEED_CHANGED', 'MEDIA_VOLUME_CHANGED', 'MEDIA_MUTE_TOGGLED', 'MEDIA_TIME_SEEKED'].includes(event)) {
      render();
    }
  });

  render();
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  if (!str) return '';
  return str.replace(/"/g, '&quot;');
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg, #00F2FE, #7F00FF);color:#fff;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;';
  toast.innerText = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}
