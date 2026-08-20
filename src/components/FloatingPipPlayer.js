import { store } from '../state/store.js';
import { getIcon } from './Icons.js';

export function initFloatingPipPlayer(container) {
  let hideTimer = null;

  function render() {
    const state = store.getState();
    const media = state.media;
    if (!media.isPipActive) {
      container.innerHTML = '';
      return;
    }

    const currentMin = Math.floor(media.currentTime / 60);
    const currentSec = String(Math.floor(media.currentTime % 60)).padStart(2, '0');
    const durMin = Math.floor(media.duration / 60);
    const durSec = String(Math.floor(media.duration % 60)).padStart(2, '0');

    container.innerHTML = `
      <div class="floating-pip-container ${media.isOverlapping ? 'overlapping' : ''}" id="floatingPipBox">
        <!-- Video Stream Player Canvas / Video -->
        <div style="position:relative; width:100%; height:200px; background:#0A0B10; overflow:hidden;">
          <video 
            id="pipVideoTag" 
            class="pip-video-element" 
            src="${media.videoUrl}" 
            preload="metadata" 
            playsinline 
            ${media.loop ? 'loop' : ''}
          ></video>

          <!-- Fallback animated visualizer if external video network stream is offline -->
          <div id="pipCanvasFallback" style="position:absolute; inset:0; display:none; align-items:center; justify-content:center; background:linear-gradient(135deg, #090A10 0%, #151828 100%);">
            <div style="text-align:center;">
              <div style="font-size:36px; animation:pulseGlow 2s infinite;">🎬</div>
              <div style="font-size:11px; color:#00F2FE; font-weight:700; margin-top:4px;">WebBuddy PiP Active</div>
            </div>
          </div>

          <!-- Overlay Controls (Auto-Hiding) -->
          <div class="pip-overlay-controls" id="pipOverlayControls">
            <div class="pip-top-bar">
              <span class="pip-title-text">${escapeHtml(media.videoTitle)}</span>
              <div class="pip-header-actions">
                <button class="pip-icon-btn" id="pipOverlapToggleBtn" title="Toggle Overlapping / Corner Dock">
                  ${getIcon('layers', '', 12)}
                </button>
                <button class="pip-icon-btn" id="pipCloseBtn" title="Close PiP Window">
                  ${getIcon('close', '', 12)}
                </button>
              </div>
            </div>

            <!-- Big Center Play/Pause Button -->
            <button class="pip-center-play-btn" id="pipCenterPlayBtn" title="Play/Pause (Space)">
              ${getIcon(media.isPlaying ? 'pause' : 'play', '', 20)}
            </button>

            <!-- Bottom Controls Bar -->
            <div class="pip-bottom-controls">
              <input 
                type="range" 
                class="media-seek-slider" 
                id="pipSeekSlider" 
                min="0" 
                max="${media.duration}" 
                value="${media.currentTime}" 
              />

              <div class="pip-actions-row">
                <div style="display:flex; align-items:center; gap:8px;">
                  <button class="pip-icon-btn" id="pipPlayPauseBottomBtn" title="Play/Pause">
                    ${getIcon(media.isPlaying ? 'pause' : 'play', '', 12)}
                  </button>
                  <button class="pip-icon-btn" id="pipMuteBtn" title="Mute/Unmute (M)">
                    ${getIcon(media.isMuted ? 'volume-x' : 'volume-2', '', 12)}
                  </button>
                  <span style="font-size:10px; color:#fff; font-family:'JetBrains Mono';">${currentMin}:${currentSec} / ${durMin}:${durSec}</span>
                </div>

                <div style="display:flex; align-items:center; gap:4px;">
                  <span style="font-size:10px; color:#00F2FE; font-weight:700; background:rgba(0,242,254,0.15); padding:1px 5px; border-radius:3px;">
                    ${media.playbackSpeed}x
                  </span>
                  <button class="pip-icon-btn" id="pipFullscreenBtn" title="Fullscreen (F)">
                    ${getIcon('maximize-2', '', 11)}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    setupEvents();
  }

  function setupEvents() {
    const box = container.querySelector('#floatingPipBox');
    if (!box) return;

    const video = container.querySelector('#pipVideoTag');
    const fallback = container.querySelector('#pipCanvasFallback');

    if (video) {
      video.muted = store.getState().media.isMuted;
      video.playbackRate = store.getState().media.playbackSpeed;

      if (store.getState().media.isPlaying) {
        video.play().catch(() => {
          fallback.style.display = 'flex';
        });
      } else {
        video.pause();
      }

      video.onerror = () => {
        fallback.style.display = 'flex';
      };
    }

    // Auto-Hide Controls on Mouse Idle
    const resetAutoHideTimer = () => {
      box.classList.remove('autohide-inactive');
      clearTimeout(hideTimer);
      if (store.getState().media.autoHideControls && store.getState().media.isPlaying) {
        hideTimer = setTimeout(() => {
          box.classList.add('autohide-inactive');
        }, 2200);
      }
    };

    box.addEventListener('mousemove', resetAutoHideTimer);
    box.addEventListener('mouseenter', resetAutoHideTimer);
    resetAutoHideTimer();

    // Play / Pause
    container.querySelector('#pipCenterPlayBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      store.togglePlayPause();
    });

    container.querySelector('#pipPlayPauseBottomBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      store.togglePlayPause();
    });

    // Close PiP
    container.querySelector('#pipCloseBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      store.togglePip(false);
    });

    // Overlapping Toggle
    container.querySelector('#pipOverlapToggleBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      store.toggleOverlapping();
    });

    // Mute
    container.querySelector('#pipMuteBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      store.toggleMediaMute();
    });

    // Seek
    container.querySelector('#pipSeekSlider')?.addEventListener('input', (e) => {
      store.seekMedia(parseFloat(e.target.value));
      if (video) video.currentTime = parseFloat(e.target.value);
    });

    // Fullscreen
    container.querySelector('#pipFullscreenBtn')?.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        box.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    });
  }

  store.subscribe((state, event) => {
    if (['MEDIA_PIP_TOGGLED', 'MEDIA_PLAY_STATE_CHANGED', 'MEDIA_OVERLAPPING_TOGGLED', 'MEDIA_AUTOHIDE_TOGGLED', 'MEDIA_SPEED_CHANGED', 'MEDIA_VOLUME_CHANGED', 'MEDIA_MUTE_TOGGLED', 'MEDIA_TIME_SEEKED'].includes(event)) {
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
