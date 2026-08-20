import { store } from '../state/store.js';
import { getIcon } from './Icons.js';

export function initShieldsModal(container) {
  let activeTabName = 'controls'; // 'controls' | 'filters'

  function render() {
    const state = store.getState();
    if (state.activeModal !== 'shields') {
      container.innerHTML = '';
      return;
    }

    const activeTab = store.getActiveTab();
    const isShieldsOn = state.shields.shieldsEnabled;
    const adsBlocked = activeTab.adsBlockedCount || 0;
    const trackersBlocked = activeTab.trackersBlockedCount || 0;
    const domain = getDomain(activeTab.url);
    const filterLists = state.shields.filterLists;

    container.innerHTML = `
      <div class="popover-container shields-popover" id="shieldsPopover" style="width: 420px; left: 50px;">
        <div class="shields-popover-header" style="background: linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(127, 0, 255, 0.15) 100%);">
          <div class="shields-header-brand">
            <div class="shields-header-icon" style="background: linear-gradient(135deg, #00F2FE 0%, #7F00FF 100%);">
              ${getIcon('shield', '', 18)}
            </div>
            <div>
              <div class="shields-header-title">Ad & Tracker Blocker</div>
              <div class="shields-header-sub">${escapeHtml(domain)}</div>
            </div>
          </div>

          <label class="toggle-switch" title="Toggle Ad & Tracker Blocker for this site">
            <input type="checkbox" id="masterShieldsToggle" ${isShieldsOn ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </label>
        </div>

        <!-- Navigation Tabs inside Shields Popover -->
        <div style="display:flex; background:rgba(0,0,0,0.25); border-bottom:1px solid var(--glass-border);">
          <button class="shield-nav-tab ${activeTabName === 'controls' ? 'active' : ''}" id="tabControlsBtn" style="flex:1; padding:9px; font-size:12px; font-weight:600; color:${activeTabName === 'controls' ? '#00F2FE' : 'var(--text-secondary)'}; border-bottom:2px solid ${activeTabName === 'controls' ? '#00F2FE' : 'transparent'};">
            Site Protection
          </button>
          <button class="shield-nav-tab ${activeTabName === 'filters' ? 'active' : ''}" id="tabFiltersBtn" style="flex:1; padding:9px; font-size:12px; font-weight:600; color:${activeTabName === 'filters' ? '#00F2FE' : 'var(--text-secondary)'}; border-bottom:2px solid ${activeTabName === 'filters' ? '#00F2FE' : 'transparent'};">
            Filter Lists (${filterLists.filter(f => f.enabled).length}/${filterLists.length})
          </button>
        </div>

        <div class="shields-popover-body">
          ${activeTabName === 'controls' ? `
            <!-- Live Status Highlight -->
            <div class="shields-stat-highlight" style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="color:#FF5858;">${getIcon('x', '', 16)}</div>
                <div>
                  <div style="font-size:18px; font-weight:800; font-family:'JetBrains Mono'; color:#FF5858;">${isShieldsOn ? adsBlocked : 0}</div>
                  <div style="font-size:11px; color:var(--text-secondary);">Ads Blocked</div>
                </div>
              </div>

              <div style="display:flex; align-items:center; gap:8px;">
                <div style="color:#00F2FE;">${getIcon('shield', '', 16)}</div>
                <div>
                  <div style="font-size:18px; font-weight:800; font-family:'JetBrains Mono'; color:#00F2FE;">${isShieldsOn ? trackersBlocked : 0}</div>
                  <div style="font-size:11px; color:var(--text-secondary);">Trackers Neutralized</div>
                </div>
              </div>
            </div>

            <!-- Granular Protection Switches -->
            <div class="shields-controls-list">
              <div class="shield-control-row">
                <span class="shield-control-label">
                  ${getIcon('x', '', 14)}
                  <span>Block Intrusive Banner & Video Ads</span>
                </span>
                <label class="toggle-switch">
                  <input type="checkbox" data-shield-opt="blockAds" ${state.shields.blockAds && isShieldsOn ? 'checked' : ''} ${!isShieldsOn ? 'disabled' : ''}>
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div class="shield-control-row">
                <span class="shield-control-label">
                  ${getIcon('zap', '', 14)}
                  <span>Block Cross-Site Tracking Beacons</span>
                </span>
                <label class="toggle-switch">
                  <input type="checkbox" data-shield-opt="blockTrackers" ${state.shields.blockTrackers && isShieldsOn ? 'checked' : ''} ${!isShieldsOn ? 'disabled' : ''}>
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div class="shield-control-row">
                <span class="shield-control-label">
                  ${getIcon('sparkles', '', 14)}
                  <span>Defeat Canvas & Audio Fingerprinting</span>
                </span>
                <label class="toggle-switch">
                  <input type="checkbox" data-shield-opt="blockFingerprinting" ${state.shields.blockFingerprinting && isShieldsOn ? 'checked' : ''} ${!isShieldsOn ? 'disabled' : ''}>
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div class="shield-control-row">
                <span class="shield-control-label">
                  ${getIcon('lock', '', 14)}
                  <span>Upgrade Connections to HTTPS</span>
                </span>
                <label class="toggle-switch">
                  <input type="checkbox" data-shield-opt="upgradeHttps" ${state.shields.upgradeHttps && isShieldsOn ? 'checked' : ''} ${!isShieldsOn ? 'disabled' : ''}>
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div class="shield-control-row">
                <span class="shield-control-label">
                  ${getIcon('puzzle', '', 14)}
                  <span>Block Cookie Banners & Annoyances</span>
                </span>
                <label class="toggle-switch">
                  <input type="checkbox" data-shield-opt="blockAnnoyances" ${state.shields.blockAnnoyances && isShieldsOn ? 'checked' : ''} ${!isShieldsOn ? 'disabled' : ''}>
                  <span class="toggle-slider"></span>
                </label>
              </div>
            </div>
          ` : `
            <!-- Filter Lists Manager -->
            <div style="display:flex; flex-direction:column; gap:10px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:12px; font-weight:700; color:var(--text-secondary);">Active Filter Subscriptions</span>
                <button id="updateFiltersBtn" style="font-size:11px; color:#00F2FE; font-weight:600; cursor:pointer;">🔄 Update All</button>
              </div>

              <div style="display:flex; flex-direction:column; gap:8px; max-height:240px; overflow-y:auto;">
                ${filterLists.map(fl => `
                  <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:8px;">
                    <div>
                      <div style="font-size:12.5px; font-weight:600; color:#fff;">${escapeHtml(fl.name)}</div>
                      <div style="font-size:11px; color:var(--text-muted);">${fl.rulesCount.toLocaleString()} rules • Updated ${fl.lastUpdated}</div>
                    </div>
                    <label class="toggle-switch">
                      <input type="checkbox" data-filter-id="${fl.id}" ${fl.enabled ? 'checked' : ''}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>
                `).join('')}
              </div>
            </div>
          `}
        </div>
      </div>
    `;

    setupEvents();
  }

  function setupEvents() {
    const popover = container.querySelector('#shieldsPopover');
    if (!popover) return;

    popover.querySelector('#tabControlsBtn')?.addEventListener('click', () => {
      activeTabName = 'controls';
      render();
    });

    popover.querySelector('#tabFiltersBtn')?.addEventListener('click', () => {
      activeTabName = 'filters';
      render();
    });

    popover.querySelector('#masterShieldsToggle')?.addEventListener('change', () => {
      store.toggleShields();
    });

    popover.querySelectorAll('[data-shield-opt]').forEach(input => {
      input.addEventListener('change', () => {
        const opt = input.dataset.shieldOpt;
        store.updateShieldOption(opt, input.checked);
      });
    });

    popover.querySelectorAll('[data-filter-id]').forEach(input => {
      input.addEventListener('change', () => {
        const id = input.dataset.filterId;
        store.toggleFilterList(id);
      });
    });

    popover.querySelector('#updateFiltersBtn')?.addEventListener('click', () => {
      showToast('⚡ All 5 Adblock filter lists updated to latest version!');
    });

    // Close on outside click
    const handleOutsideClick = (e) => {
      if (!e.target.closest('#shieldsPopover') && !e.target.closest('#shieldBadgeBtn') && !e.target.closest('#adblockControlBtn') && !e.target.closest('#openFilterListsBtn')) {
        store.closeModal();
        document.removeEventListener('click', handleOutsideClick);
      }
    };
    setTimeout(() => document.addEventListener('click', handleOutsideClick), 10);
  }

  store.subscribe((state, event) => {
    if (['MODAL_CHANGED', 'SHIELDS_TOGGLED', 'SHIELDS_OPTION_CHANGED', 'FILTER_LIST_TOGGLED'].includes(event)) {
      render();
    }
  });

  render();
}

function getDomain(url) {
  if (!url || url.startsWith('brave://')) return 'WebBuddy Private Browser';
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
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
