import { store } from '../state/store.js';
import { getIcon } from './Icons.js';

export function initNewTabPage(container) {
  let clockTimer = null;
  let isEngineDropdownOpen = false;

  function render() {
    const state = store.getState();
    const activeTab = store.getActiveTab();
    if (activeTab.type !== 'ntp') {
      container.style.display = 'none';
      return;
    }
    container.style.display = 'flex';

    const wallpaper = store.getActiveWallpaper();
    const isBlurred = state.settings.blurWallpaper;
    const totalRules = store.getTotalFilterRulesCount();
    const defaultEngine = store.getDefaultSearchEngine();
    const searchEngines = store.getSearchEngines();

    container.style.backgroundImage = `url("${wallpaper.url}")`;

    container.innerHTML = `
      <div class="ntp-overlay ${isBlurred ? 'blurred' : ''}"></div>
      
      <div class="ntp-content" style="justify-content:center; gap:36px;">
        <!-- Center Section: Clock, Search, Adblock Stats, Top Sites -->
        <div class="ntp-center-section">
          <!-- Digital Clock & Greeting -->
          ${state.settings.showClock ? `
            <div class="clock-container">
              <div class="digital-time" id="ntpClock">
                ${getFormattedTime(state.settings.clockFormat)}
              </div>
              <div class="greeting-text" id="ntpGreeting">
                ${getGreeting()}
              </div>
            </div>
          ` : ''}

          <!-- Center Private Search Bar with Search Engine Selector -->
          <div class="ntp-search-box" style="position:relative;">
            <form class="ntp-search-form" id="ntpSearchForm">
              <!-- Quick Search Engine Switcher Button -->
              <button type="button" class="ntp-engine-select-btn" id="ntpEngineSelectBtn" title="Default Engine: ${escapeAttr(defaultEngine.name)} (Click to switch or manage)">
                <span class="ntp-engine-icon">${getIcon(defaultEngine.icon || 'search', '', 18)}</span>
                <span class="ntp-engine-label">${escapeHtml(defaultEngine.name)}</span>
                <span style="opacity:0.6; display:flex;">${getIcon('chevron-down', '', 12)}</span>
              </button>

              <input 
                type="text" 
                class="ntp-search-input" 
                id="ntpSearchInput" 
                placeholder="Search with ${escapeAttr(defaultEngine.name)} privately or enter URL..."
                autocomplete="off"
              />
              <button type="submit" class="ntp-search-submit-btn" title="Search">
                ${getIcon('search', '', 16)}
              </button>
            </form>

            <!-- Quick Engine Dropdown Menu -->
            <div class="ntp-engine-menu" id="ntpEngineMenu" style="display:${isEngineDropdownOpen ? 'block' : 'none'};">
              <div class="ntp-engine-menu-header">
                <span>Select Search Engine</span>
                <span style="font-size:10px; color:var(--text-muted);">Default: ${escapeHtml(defaultEngine.name)}</span>
              </div>
              <div class="ntp-engine-list">
                ${searchEngines.map(se => `
                  <div class="ntp-engine-item ${se.id === defaultEngine.id ? 'active' : ''}" data-ntp-engine="${escapeAttr(se.id)}">
                    <span class="ntp-item-icon">${getIcon(se.icon || 'search', '', 16)}</span>
                    <span class="ntp-item-name">${escapeHtml(se.name)}</span>
                    ${se.shortcut ? `<span class="ntp-item-shortcut">${escapeHtml(se.shortcut)}</span>` : ''}
                    ${se.id === defaultEngine.id ? `<span class="ntp-item-check">${getIcon('check', '', 14)}</span>` : ''}
                  </div>
                `).join('')}
              </div>
              <div class="ntp-engine-menu-footer" id="ntpManageEnginesBtn">
                ${getIcon('settings', '', 13)}
                <span>Manage Search Engines & Shortcuts...</span>
              </div>
            </div>
          </div>

          <!-- WebBuddy Ad & Tracker Blocker Privacy Metrics Card -->
          ${state.settings.showShieldsStats ? `
            <div class="shields-stats-card" style="max-width:880px;">
              <div class="shield-stat-item">
                <div class="shield-stat-icon" style="background:rgba(255,88,88,0.15); border-color:rgba(255,88,88,0.3); color:#FF5858;">
                  ${getIcon('x', '', 20)}
                </div>
                <div class="shield-stat-info">
                  <span class="stat-value" id="adsCount">${state.shields.adsBlockedTotal.toLocaleString()}</span>
                  <span class="stat-label">Ads Blocked</span>
                </div>
              </div>

              <div class="stat-divider"></div>

              <div class="shield-stat-item">
                <div class="shield-stat-icon" style="background:rgba(0,242,254,0.15); border-color:rgba(0,242,254,0.3); color:#00F2FE;">
                  ${getIcon('shield', '', 20)}
                </div>
                <div class="shield-stat-info">
                  <span class="stat-value" id="trackersCount">${state.shields.trackersBlockedTotal.toLocaleString()}</span>
                  <span class="stat-label">Trackers Blocked</span>
                </div>
              </div>

              <div class="stat-divider"></div>

              <div class="shield-stat-item">
                <div class="shield-stat-icon" style="background:rgba(16,185,129,0.15); border-color:rgba(16,185,129,0.3); color:#10B981;">
                  ${getIcon('zap', '', 20)}
                </div>
                <div class="shield-stat-info">
                  <span class="stat-value" id="bandwidthSaved">${state.shields.bandwidthSavedMB} MB</span>
                  <span class="stat-label">Bandwidth Saved</span>
                </div>
              </div>

              <div class="stat-divider"></div>

              <div class="shield-stat-item">
                <div class="shield-stat-icon" style="background:rgba(127,0,255,0.15); border-color:rgba(127,0,255,0.3); color:#A78BFA;">
                  ${getIcon('clock', '', 20)}
                </div>
                <div class="shield-stat-info">
                  <span class="stat-value" id="timeSaved">${state.shields.timeSavedMin} min</span>
                  <span class="stat-label">Time Saved</span>
                </div>
              </div>
            </div>

            <!-- Active Adblock Engine Status Banner & Video PiP Overlay Quick Button -->
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; justify-content:center;">
              <div style="display:flex; align-items:center; gap:8px; background:rgba(20,22,33,0.75); backdrop-filter:blur(16px); border:1px solid var(--glass-border); padding:8px 18px; border-radius:var(--radius-full); font-size:12px; color:var(--text-secondary); cursor:pointer;" id="openFilterListsBtn" title="Click to view and configure Filter Lists">
                <span style="width:7px; height:7px; background:#10B981; border-radius:50%; box-shadow:0 0 8px #10B981;"></span>
                <span><strong>${totalRules.toLocaleString()}</strong> Active Filter Rules (EasyList, EasyPrivacy, uBlock)</span>
                <span style="color:#00F2FE; font-weight:600; margin-left:4px;">Configure →</span>
              </div>

              <div style="display:flex; align-items:center; gap:6px; background:linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(127, 0, 255, 0.15) 100%); backdrop-filter:blur(16px); border:1px solid rgba(0, 242, 254, 0.3); padding:8px 16px; border-radius:var(--radius-full); font-size:12px; color:#fff; cursor:pointer;" id="dashboardPipControlBtn" title="Open Video Controls & Auto-PiP Overlay">
                ${getIcon('pip', '', 14)}
                <span style="font-weight:700;">Auto PiP Overlay: <span style="color:#00F2FE;">${state.media?.isPipActive ? 'ACTIVE' : 'READY'}</span></span>
              </div>
            </div>
          ` : ''}

          <!-- Top Sites / Shortcuts Grid -->
          ${state.settings.showTopSites ? `
            <div class="top-sites-grid">
              ${state.topSites.map(site => `
                <div class="top-site-tile" data-site-url="${escapeAttr(site.url)}" title="${escapeAttr(site.title)}">
                  <button class="delete-site-btn" data-delete-site="${site.id}" title="Remove Shortcut">
                    ${getIcon('x', '', 10)}
                  </button>
                  <div class="site-icon-box" style="background:${site.color || '#232636'}">
                    ${getIcon(site.icon || 'globe', '', 20)}
                  </div>
                  <span class="site-title">${escapeHtml(site.title)}</span>
                </div>
              `).join('')}

              <!-- Add Shortcut Tile -->
              <div class="top-site-tile add-site-tile" id="addShortcutBtn" title="Add Shortcut">
                <div class="site-icon-box" style="background:transparent; border:1px dashed rgba(255,255,255,0.2);">
                  ${getIcon('plus', '', 20)}
                </div>
                <span class="site-title">Add Site</span>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- NTP Bottom Bar -->
        <div class="ntp-bottom-bar">
          <div class="photo-credit">
            <span>📷 Photo by <strong>${escapeHtml(wallpaper.author)}</strong> • ${escapeHtml(wallpaper.location)}</span>
            <button class="change-wallpaper-btn" id="nextWallpaperBtn" title="Change Background Wallpaper">
              ${getIcon('refresh', '', 13)}
            </button>
          </div>

          <button class="customize-btn" id="customizeDashboardBtn">
            ${getIcon('sliders', '', 14)}
            <span>Dashboard Settings</span>
          </button>
        </div>
      </div>
    `;

    setupEvents();
  }

  function setupEvents() {
    // Search Form Submit
    const form = container.querySelector('#ntpSearchForm');
    const input = container.querySelector('#ntpSearchInput');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (val) {
        store.navigateToUrl(val);
      }
    });

    // Toggle Quick Search Engine Menu
    const selectBtn = container.querySelector('#ntpEngineSelectBtn');
    selectBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      isEngineDropdownOpen = !isEngineDropdownOpen;
      render();
    });

    // Select Engine from quick menu
    container.querySelectorAll('[data-ntp-engine]').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = item.dataset.ntpEngine;
        store.setDefaultSearchEngine(id);
        const engine = store.getSearchEngineById(id);
        showToast(`🔍 Default search engine set to ${engine ? engine.name : 'Google'}`);
        isEngineDropdownOpen = false;
        render();
      });
    });

    // Manage Engines Click from menu
    container.querySelector('#ntpManageEnginesBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      isEngineDropdownOpen = false;
      store.openModal('settings');
    });

    // Close menu on click outside
    document.addEventListener('click', (e) => {
      if (isEngineDropdownOpen && !e.target.closest('.ntp-search-box')) {
        isEngineDropdownOpen = false;
        render();
      }
    });

    // Filter Lists Modal open
    container.querySelector('#openFilterListsBtn')?.addEventListener('click', () => {
      store.openModal('shields');
    });

    // Auto-PiP Video Control Modal open
    container.querySelector('#dashboardPipControlBtn')?.addEventListener('click', () => {
      store.openModal('videoControls');
    });

    // Top Sites Clicks & Deletion
    container.querySelectorAll('.top-site-tile[data-site-url]').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.closest('.delete-site-btn')) return;
        const url = el.dataset.siteUrl;
        store.navigateToUrl(url);
      });
    });

    container.querySelectorAll('.delete-site-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.deleteSite;
        store.removeTopSite(id);
      });
    });

    container.querySelector('#addShortcutBtn')?.addEventListener('click', () => {
      store.openModal('addShortcut');
    });

    // Wallpaper switch & Customization
    container.querySelector('#nextWallpaperBtn')?.addEventListener('click', () => {
      store.nextWallpaper();
    });

    container.querySelector('#customizeDashboardBtn')?.addEventListener('click', () => {
      store.openModal('settings');
    });
  }

  // Live Clock Updater
  if (!clockTimer) {
    clockTimer = setInterval(() => {
      const clockEl = container.querySelector('#ntpClock');
      if (clockEl) {
        const format = store.getState().settings.clockFormat;
        clockEl.innerHTML = getFormattedTime(format);
      }
    }, 1000);
  }

  // Subscribe to changes
  store.subscribe((state, event) => {
    if (['TAB_SWITCHED', 'NAVIGATION_COMPLETE', 'WALLPAPER_CHANGED', 'SHIELDS_STATS_UPDATED', 'TOP_SITES_UPDATED', 'SETTINGS_UPDATED', 'FILTER_LIST_TOGGLED', 'SEARCH_ENGINE_CHANGED', 'SEARCH_ENGINES_UPDATED'].includes(event)) {
      render();
    }
  });

  render();
}

function getFormattedTime(format = '12h') {
  const now = new Date();
  if (format === '24h') {
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const period = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${hours}:${minutes} <span style="font-size:16px; font-weight:500; opacity:0.8;">${period}</span>`;
}

function getGreeting() {
  const hours = new Date().getHours();
  if (hours < 12) return 'Good Morning, WebBuddy Explorer';
  if (hours < 18) return 'Good Afternoon, WebBuddy Explorer';
  return 'Good Evening, WebBuddy Explorer';
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
