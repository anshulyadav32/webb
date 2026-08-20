import { store } from '../state/store.js';
import { getIcon } from './Icons.js';

export function initAddressBar(container) {
  function render() {
    const state = store.getState();
    const activeTab = store.getActiveTab();
    const isNtp = activeTab.type === 'ntp';
    const displayUrl = isNtp ? '' : activeTab.url;
    const isShieldsOn = state.shields.shieldsEnabled;
    const blockedCount = activeTab.totalBlockedCount || 0;
    const defaultEngine = store.getDefaultSearchEngine();

    const currentMode = store.getBrowserMode();
    const isIncognito = currentMode === 'incognito';
    const isSuperPvt = currentMode === 'super-pvt';
    const downloadingCount = (state.motrix?.tasks || []).filter(t => t.status === 'active').length;
    const globalSpeedMB = (state.motrix?.globalDownloadSpeed || 0) / (1024 * 1024);
    const speedFormatted = globalSpeedMB >= 1 ? `${globalSpeedMB.toFixed(1)} MB/s` : `${Math.round((state.motrix?.globalDownloadSpeed || 0) / 1024)} KB/s`;

    const placeholderText = isSuperPvt 
      ? `Search anonymously through ${state.superPvt?.exitCountry || 'Onion Circuit'}...`
      : isIncognito 
        ? `Search privately in Incognito (zero traces saved)...`
        : `Search with ${escapeAttr(defaultEngine.name)} or enter website address...`;

    container.innerHTML = `
      <div class="browser-navbar ${currentMode !== 'standard' ? 'navbar-' + currentMode : ''}">
        <div class="nav-buttons">
          <button class="nav-btn" id="navBackBtn" title="Click to go back" ${activeTab.historyIndex <= 0 ? 'disabled' : ''}>
            ${getIcon('arrow-left', '', 16)}
          </button>
          <button class="nav-btn" id="navForwardBtn" title="Click to go forward" ${activeTab.historyIndex >= activeTab.history.length - 1 ? 'disabled' : ''}>
            ${getIcon('arrow-right', '', 16)}
          </button>
          <button class="nav-btn" id="navReloadBtn" title="Reload this page">
            ${getIcon('refresh', activeTab.isLoading ? 'spin' : '', 15)}
          </button>
          <button class="nav-btn" id="navHomeBtn" title="Open home page">
            ${getIcon('home', '', 15)}
          </button>
        </div>

        <!-- Mode Specific Visual Indicator -->
        ${isIncognito ? `
          <div class="navbar-mode-pill incognito" title="Incognito Mode Active: Zero History & RAM Storage">
            ${getIcon('mask', '', 14)}
            <span>Incognito</span>
          </div>
        ` : ''}

        ${isSuperPvt ? `
          <button class="navbar-mode-pill super-pvt" id="circuitBadgeBtn" title="Tor Onion Circuit Active (${state.superPvt.exitCountry}) • Click to inspect relays">
            ${getIcon('onion', '', 14)}
            <span>Tor: ${escapeHtml(state.superPvt.exitCountry)}</span>
          </button>
        ` : ''}

        <div class="omnibox-wrapper">
          <div class="omnibox ${isSuperPvt ? 'omnibox-super-pvt' : isIncognito ? 'omnibox-incognito' : ''}">
            <!-- WebBuddy Shields Ad & Tracker Blocker Badge -->
            <button class="shield-badge-btn ${!isShieldsOn ? 'shields-down' : ''}" id="shieldBadgeBtn" title="Ad & Tracker Blocker: ${isShieldsOn ? 'PROTECTED' : 'PAUSED'}">
              ${getIcon('shield', '', 14)}
              <span>${isShieldsOn ? `${blockedCount} Blocked` : 'OFF'}</span>
            </button>

            <!-- Video Auto-PiP Overlay Button (Right near Ads Block) -->
            <button class="shield-badge-btn ${state.media?.isPipActive ? '' : 'shields-down'}" id="omniboxPipBtn" style="background:${state.media?.isPipActive ? 'linear-gradient(135deg, #00F2FE 0%, #7F00FF 100%)' : '#2C2F40'}; gap:4px;" title="Video Controls & Auto-PiP Overlay Feature">
              ${getIcon('pip', '', 13)}
              <span>${state.media?.isPipActive ? 'PiP Overlay ON' : 'Auto PiP'}</span>
            </button>

            <!-- Active Search Engine Indicator Badge -->
            <button class="shield-badge-btn" id="activeSearchEngineBadge" style="background:rgba(255,255,255,0.06); gap:5px; border-color:rgba(255,255,255,0.1);" title="Default Search Engine: ${escapeAttr(defaultEngine.name)} (Click to change)">
              ${getIcon(defaultEngine.icon || 'search', '', 14)}
              <span style="color:var(--text-secondary); font-size:11px; font-weight:600;">${escapeHtml(defaultEngine.name)}</span>
            </button>

            <!-- URL / Search Input -->
            <input 
              type="text" 
              class="omnibox-input" 
              id="omniboxInput" 
              placeholder="${escapeAttr(placeholderText)}" 
              value="${escapeAttr(displayUrl)}"
              autocomplete="off"
              spellcheck="false"
            />

            <div class="omnibox-actions">
              <button class="omnibox-action-btn" id="bookmarkBtn" title="Bookmark this tab">
                ${getIcon('star', '', 14)}
              </button>
            </div>
          </div>

          <!-- Autocomplete Dropdown -->
          <div class="omnibox-dropdown" id="omniboxDropdown" style="display: none;"></div>
        </div>

        <!-- Action Buttons: Motrix + Ad Blocker + Video PiP Overlay + Settings -->
        <div class="browser-actions">
          ${(isIncognito || isSuperPvt) ? `
            <button class="action-pill-btn panic-btn" id="panicNukeBtn" title="🚨 EMERGENCY PANIC: Destroy all private tabs & wipe volatile RAM instantly">
              ${getIcon('nuke', '', 14)}
              <span>Nuke Session</span>
            </button>
          ` : ''}

          <!-- Motrix Download Manager Button -->
          <button class="action-pill-btn" id="motrixDownloadBtn" style="border-color:${downloadingCount > 0 ? 'rgba(255,64,129,0.5)' : 'rgba(255,255,255,0.1)'}; color:${downloadingCount > 0 ? '#FF4081' : '#E2E8F0'}; gap:6px; background:${downloadingCount > 0 ? 'rgba(255,64,129,0.12)' : 'rgba(255,255,255,0.03)'};" title="Motrix Download Manager (Cmd+J)">
            ${getIcon('motrix-logo', '', 14)}
            <span>${downloadingCount > 0 ? `${speedFormatted} (${downloadingCount})` : 'Motrix'}</span>
          </button>

          <button class="action-pill-btn" id="adblockControlBtn" style="border-color:rgba(0,242,254,0.3); color:#00F2FE;" title="Adblocker & Filter Lists">
            ${getIcon('shield-check', '', 14)}
            <span>Ad Blocker ON</span>
          </button>

          <button class="action-pill-btn" id="videoControlBtn" style="border-color:${state.media?.isPipActive ? '#00F2FE' : 'rgba(127,0,255,0.4)'}; color:${state.media?.isPipActive ? '#00F2FE' : '#A78BFA'};" title="Control Video, Auto-PiP & Overlay">
            ${getIcon(state.media?.isPlaying ? 'play' : 'pip', '', 14)}
            <span>${state.media?.isPipActive ? 'PiP Active' : 'Auto PiP Overlay'}</span>
          </button>

          <button class="action-icon-btn" id="settingsMenuBtn" title="Settings & Preferences">
            ${getIcon('settings', '', 16)}
          </button>
        </div>
      </div>
    `;

    setupEvents();
  }

  function setupEvents() {
    const input = container.querySelector('#omniboxInput');
    const dropdown = container.querySelector('#omniboxDropdown');

    // Navigation Controls
    container.querySelector('#notesSidebarToggleBtn')?.addEventListener('click', () => {
      store.toggleSidebar();
    });

    container.querySelector('#navBackBtn')?.addEventListener('click', () => store.goBack());
    container.querySelector('#navForwardBtn')?.addEventListener('click', () => store.goForward());
    container.querySelector('#navReloadBtn')?.addEventListener('click', () => store.reloadCurrentTab());
    container.querySelector('#navHomeBtn')?.addEventListener('click', () => store.navigateToUrl('brave://newtab'));

    // Shields & Video popovers
    container.querySelector('#omniboxPipBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      store.openModal('videoControls');
    });

    container.querySelector('#videoControlBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      store.openModal('videoControls');
    });

    container.querySelector('#shieldBadgeBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      store.openModal('shields');
    });

    container.querySelector('#adblockControlBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      store.openModal('shields');
    });

    container.querySelector('#motrixDownloadBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      store.openMotrixModal();
    });

    container.querySelector('#activeSearchEngineBadge')?.addEventListener('click', (e) => {
      e.stopPropagation();
      store.openModal('settings');
    });

    container.querySelector('#settingsMenuBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      store.openModal('settings');
    });

    container.querySelector('#bookmarkBtn')?.addEventListener('click', () => {
      const activeTab = store.getActiveTab();
      if (activeTab && activeTab.type !== 'ntp') {
        store.addBookmark(activeTab.title, activeTab.url);
        showToast('⭐ Bookmark saved!');
      }
    });

    container.querySelector('#circuitBadgeBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      store.openModal('circuit');
    });

    container.querySelector('#panicNukeBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      store.panicNukeSession();
      showToast('🚨 Emergency Panic: Private RAM purged and tabs destroyed!');
    });

    // Omnibox Typing & Autocomplete
    input.addEventListener('focus', () => {
      input.select();
      showSuggestions(input.value);
    });

    input.addEventListener('input', () => {
      showSuggestions(input.value);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = input.value.trim();
        if (val) {
          dropdown.style.display = 'none';
          store.navigateToUrl(val);
          input.blur();
        }
      } else if (e.key === 'Escape') {
        dropdown.style.display = 'none';
      }
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.omnibox-wrapper')) {
        dropdown.style.display = 'none';
      }
    });
  }

  function showSuggestions(val) {
    const dropdown = container.querySelector('#omniboxDropdown');
    const trimmed = val.trim();
    if (!trimmed) {
      dropdown.style.display = 'none';
      return;
    }

    const defaultEngine = store.getDefaultSearchEngine();
    const searchEngines = store.getSearchEngines();

    // Check if user is typing with a shortcut
    let matchedEngine = defaultEngine;
    let queryWithoutShortcut = trimmed;
    const parts = trimmed.split(/\s+/);
    if (parts.length > 0) {
      const firstWord = parts[0].toLowerCase();
      const found = searchEngines.find(e => 
        e.shortcut && (e.shortcut.toLowerCase() === firstWord || e.shortcut.toLowerCase() === ':' + firstWord || e.shortcut.toLowerCase() === '!' + firstWord)
      );
      if (found) {
        matchedEngine = found;
        queryWithoutShortcut = parts.slice(1).join(' ') || trimmed;
      }
    }

    const defaultItems = [
      {
        text: trimmed,
        desc: `Search with ${matchedEngine.name} (Adblock Protected)`,
        type: 'search',
        icon: matchedEngine.icon || 'search',
        action: trimmed
      },
      {
        text: `https://${trimmed}.com`,
        desc: 'Open Website (Tracker Filtering Active)',
        type: 'web',
        icon: 'globe',
        action: `https://${trimmed}.com`
      },
      {
        text: 'Wikipedia: ' + (queryWithoutShortcut || trimmed),
        desc: 'Encyclopedia Reference',
        type: 'web',
        icon: 'book-open',
        action: ':w ' + (queryWithoutShortcut || trimmed)
      },
      {
        text: 'GitHub: ' + (queryWithoutShortcut || trimmed),
        desc: 'Source Code & Repositories',
        type: 'web',
        icon: 'github',
        action: 'https://github.com/search?q=' + encodeURIComponent(queryWithoutShortcut || trimmed)
      }
    ];

    dropdown.innerHTML = `
      <div class="omnibox-suggestions-list">
        ${defaultItems.map(item => `
          <div class="dropdown-item" data-action="${escapeAttr(item.action)}">
            ${getIcon(item.icon, '', 14)}
            <span>${escapeHtml(item.text)}</span>
            <span class="item-type">${item.desc}</span>
          </div>
        `).join('')}
      </div>

      <!-- Quick Search Engine Switcher Footer -->
      <div style="padding:8px 12px; background:rgba(0,0,0,0.3); border-top:1px solid var(--glass-border); display:flex; align-items:center; justify-content:space-between; font-size:11px;">
        <div style="display:flex; align-items:center; gap:6px; color:var(--text-secondary);">
          <span>Search with:</span>
          ${searchEngines.slice(0, 4).map(se => `
            <button class="quick-engine-chip ${se.id === defaultEngine.id ? 'active' : ''}" data-switch-engine="${escapeAttr(se.id)}" style="background:${se.id === defaultEngine.id ? 'rgba(0,242,254,0.15)' : 'rgba(255,255,255,0.06)'}; border:1px solid ${se.id === defaultEngine.id ? '#00F2FE' : 'transparent'}; border-radius:4px; padding:2px 7px; color:${se.id === defaultEngine.id ? '#00F2FE' : '#fff'}; cursor:pointer; font-size:11px; display:inline-flex; align-items:center; gap:4px;">
              ${getIcon(se.icon || 'search', '', 11)}
              <span>${escapeHtml(se.name)}</span>
            </button>
          `).join('')}
        </div>
        <button id="manageEnginesDropdownBtn" style="color:#00F2FE; background:transparent; border:none; cursor:pointer; font-size:11px; font-weight:600;">
          ⚙️ Manage Engines
        </button>
      </div>
    `;

    dropdown.style.display = 'block';

    dropdown.querySelectorAll('.dropdown-item').forEach(el => {
      el.addEventListener('click', () => {
        const action = el.dataset.action;
        store.navigateToUrl(action);
        dropdown.style.display = 'none';
      });
    });

    dropdown.querySelectorAll('[data-switch-engine]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.switchEngine;
        store.setDefaultSearchEngine(id);
        const engine = store.getSearchEngineById(id);
        showToast(`🔍 Search engine changed to ${engine ? engine.name : 'Google'}`);
        showSuggestions(input.value);
      });
    });

    dropdown.querySelector('#manageEnginesDropdownBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.style.display = 'none';
      store.openModal('settings');
    });
  }

  // Subscribe to changes
  store.subscribe((event, payload) => {
    if ([
      'TAB_SWITCHED', 
      'NAVIGATION_COMPLETE', 
      'SHIELDS_TOGGLED', 
      'SHIELDS_STATS_UPDATED', 
      'SEARCH_ENGINE_CHANGED', 
      'SEARCH_ENGINES_UPDATED',
      'BROWSER_MODE_CHANGED',
      'SUPER_PVT_UPDATED',
      'SESSION_NUKED',
      'MOTRIX_SPEED_TICK',
      'MOTRIX_TASKS_UPDATED',
      'MOTRIX_STATUS_CHANGED',
      'SIDEBAR_TOGGLED',
      'NOTES_SIDEBAR_TOGGLED'
    ].includes(event)) {
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
  toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;';
  toast.innerText = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}
