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

    const currentMode = store.getBrowserMode();

    if (currentMode === 'incognito') {
      renderIncognitoNtp(state, activeTab);
    } else if (currentMode === 'super-pvt') {
      renderSuperPrivateNtp(state, activeTab);
    } else {
      renderStandardNtp(state, activeTab);
    }
  }

  // --- 1. Standard NTP ---
  function renderStandardNtp(state, activeTab) {
    const wallpaper = store.getActiveWallpaper();
    const isBlurred = state.settings.blurWallpaper;
    const totalRules = store.getTotalFilterRulesCount();
    const defaultEngine = store.getDefaultSearchEngine();
    const searchEngines = store.getSearchEngines();

    container.style.backgroundImage = `url("${wallpaper.url}")`;
    container.className = 'ntp-container standard-ntp';

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

    setupCommonEvents();
  }

  // --- 2. Incognito NTP ("ingoti section") ---
  function renderIncognitoNtp(state, activeTab) {
    const defaultEngine = store.getDefaultSearchEngine();
    container.style.backgroundImage = 'none';
    container.className = 'ntp-container incognito-ntp';

    container.innerHTML = `
      <div class="incognito-dashboard-content">
        <!-- Incognito Header Visor -->
        <div class="incognito-header-badge">
          <div class="incognito-visor-icon">
            ${getIcon('mask', '', 48)}
          </div>
          <h1 class="incognito-title">Incognito Browsing Session Active</h1>
          <p class="incognito-subtitle">
            WebBuddy isolates your browsing session exclusively in volatile memory (RAM).
            Your browsing history, cookies, search queries, and cache are destroyed automatically upon close.
          </p>
        </div>

        <!-- Incognito Search Box -->
        <div class="ntp-search-box incognito-search-box" style="max-width:680px; width:100%; margin:0 auto 28px;">
          <form class="ntp-search-form" id="ntpSearchForm">
            <span class="incognito-search-icon" style="padding-left:16px; color:#A78BFA; display:flex; align-items:center;">
              ${getIcon('mask', '', 18)}
            </span>
            <input 
              type="text" 
              class="ntp-search-input" 
              id="ntpSearchInput" 
              placeholder="Search in Incognito Mode with ${escapeAttr(defaultEngine.name)} or enter URL..."
              autocomplete="off"
              autofocus
            />
            <button type="submit" class="ntp-search-submit-btn" title="Search privately" style="background:#7F00FF; color:#fff;">
              ${getIcon('search', '', 16)}
            </button>
          </form>
        </div>

        <!-- 4 Security Guarantees Cards -->
        <div class="incognito-guarantees-grid">
          <div class="guarantee-card">
            <div class="guarantee-icon" style="background:rgba(127,0,255,0.18); color:#A78BFA; border-color:rgba(127,0,255,0.35);">
              ${getIcon('eye-off', '', 22)}
            </div>
            <div class="guarantee-info">
              <h3>Zero History Logged</h3>
              <p>Pages you visit, search terms, and download logs are never stored to disk.</p>
            </div>
          </div>

          <div class="guarantee-card">
            <div class="guarantee-icon" style="background:rgba(0,242,254,0.18); color:#00F2FE; border-color:rgba(0,242,254,0.35);">
              ${getIcon('shield-check', '', 22)}
            </div>
            <div class="guarantee-info">
              <h3>Shields Adblock Max</h3>
              <p>Ad networks, telemetry beacons, and fingerprint scripts are rejected before socket load.</p>
            </div>
          </div>

          <div class="guarantee-card">
            <div class="guarantee-icon" style="background:rgba(16,185,129,0.18); color:#10B981; border-color:rgba(16,185,129,0.35);">
              ${getIcon('lock', '', 22)}
            </div>
            <div class="guarantee-info">
              <h3>Isolated Cookie Jar</h3>
              <p>Third-party cookies and local storage tokens are sandboxed and wiped instantly.</p>
            </div>
          </div>

          <div class="guarantee-card">
            <div class="guarantee-icon" style="background:rgba(245,158,11,0.18); color:#F59E0B; border-color:rgba(245,158,11,0.35);">
              ${getIcon('hard-drive', '', 22)}
            </div>
            <div class="guarantee-info">
              <h3>Ephemeral RAM Storage</h3>
              <p>Session keys reside only in active RAM. Zero residue persists across system restarts.</p>
            </div>
          </div>
        </div>

        <!-- Action Bar: Switch to Tor Super Pvt or Panic Nuke -->
        <div class="incognito-actions-bar">
          <button class="incognito-action-btn tor-bridge-btn" id="switchToTorBtn" title="Switch to Super Private Tor Mode">
            ${getIcon('onion', '', 16)}
            <span>Upgrade to Super Private (Tor Onion Circuit) →</span>
          </button>

          <button class="incognito-action-btn panic-nuke-action-btn" id="incognitoPanicBtn" title="Close all private tabs immediately">
            ${getIcon('nuke', '', 15)}
            <span>🚨 Close Incognito Session</span>
          </button>
        </div>
      </div>
    `;

    setupCommonEvents();

    container.querySelector('#switchToTorBtn')?.addEventListener('click', () => {
      store.setBrowserMode('super-pvt');
    });

    container.querySelector('#incognitoPanicBtn')?.addEventListener('click', () => {
      store.panicNukeSession();
    });
  }

  // --- 3. Super Private NTP ("super pvt" Tor Circuit) ---
  function renderSuperPrivateNtp(state, activeTab) {
    const defaultEngine = store.getDefaultSearchEngine();
    const pvt = state.superPvt || {};
    const circuit = pvt.circuit || [];

    container.style.backgroundImage = 'none';
    container.className = 'ntp-container super-pvt-ntp';

    container.innerHTML = `
      <div class="super-pvt-dashboard-content">
        <!-- Super Private Cyber Header -->
        <div class="super-pvt-header-badge">
          <div class="super-pvt-onion-hologram">
            ${getIcon('onion', '', 54)}
          </div>
          <div class="onion-mode-pill-glow">TOR ONION ROUTING ACTIVE</div>
          <h1 class="super-pvt-title">Super Private Browsing Window</h1>
          <p class="super-pvt-subtitle">
            Your network traffic is encapsulated in 3-layer AES-256 onion encryption and routed through randomized global relays.
            Your real IP address and device fingerprint are completely masked.
          </p>
        </div>

        <!-- Super Private Search Form -->
        <div class="ntp-search-box super-pvt-search-box" style="max-width:720px; width:100%; margin:0 auto 28px;">
          <form class="ntp-search-form" id="ntpSearchForm">
            <span class="super-pvt-search-icon" style="padding-left:16px; color:#C084FC; display:flex; align-items:center;">
              ${getIcon('onion', '', 18)}
            </span>
            <input 
              type="text" 
              class="ntp-search-input" 
              id="ntpSearchInput" 
              placeholder="Search onion & web anonymously (routed via ${escapeAttr(pvt.exitCountry || 'Tor')})..."
              autocomplete="off"
              autofocus
            />
            <button type="submit" class="ntp-search-submit-btn" title="Search via Tor" style="background:linear-gradient(135deg, #7F00FF 0%, #00F2FE 100%); color:#fff;">
              ${getIcon('search', '', 16)}
            </button>
          </form>
        </div>

        <!-- Live Onion Multi-Hop Circuit Visualizer Strip -->
        <div class="circuit-route-card" id="circuitRouteCard" title="Click to open Circuit Relays Inspector">
          <div class="circuit-route-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="circuit-pulse-beacon"></span>
              <span class="circuit-title">Live 3-Hop Encrypted Onion Circuit</span>
            </div>
            <div style="display:flex; align-items:center; gap:12px; font-size:12px;">
              <span style="color:#10B981; font-weight:700;">● ${pvt.anonymityScore || '100% Ultra Stealth'}</span>
              <span style="color:var(--text-muted);">Ping: ${pvt.circuitPing || '28ms'}</span>
              <button class="reroute-circuit-mini-btn" id="rerouteCircuitBtn" title="Rotate Tor Identity (Get new Relay Circuit & IP)">
                ${getIcon('refresh', '', 12)}
                <span>New Identity</span>
              </button>
            </div>
          </div>

          <div class="circuit-hops-row">
            <!-- Client Hop -->
            <div class="circuit-hop-node client-node">
              <div class="hop-icon-box">${getIcon('home', '', 16)}</div>
              <div class="hop-node-meta">
                <span class="hop-role">This Computer</span>
                <span class="hop-location">Origin Sandbox</span>
              </div>
            </div>

            <div class="circuit-hop-connector">
              <span class="connector-line"></span>
              <span class="connector-badge">AES-256</span>
            </div>

            <!-- Guard Node -->
            <div class="circuit-hop-node">
              <div class="hop-icon-box guard">${getIcon('shield', '', 16)}</div>
              <div class="hop-node-meta">
                <span class="hop-role">${circuit[0]?.role || 'Guard Node'}</span>
                <span class="hop-location">${circuit[0]?.location || 'Frankfurt, Germany 🇩🇪'}</span>
              </div>
            </div>

            <div class="circuit-hop-connector">
              <span class="connector-line"></span>
              <span class="connector-badge">Hop 2</span>
            </div>

            <!-- Middle Relay -->
            <div class="circuit-hop-node">
              <div class="hop-icon-box relay">${getIcon('circuit', '', 16)}</div>
              <div class="hop-node-meta">
                <span class="hop-role">${circuit[1]?.role || 'Middle Relay'}</span>
                <span class="hop-location">${circuit[1]?.location || 'Amsterdam, Netherlands 🇳🇱'}</span>
              </div>
            </div>

            <div class="circuit-hop-connector">
              <span class="connector-line"></span>
              <span class="connector-badge">Exit Hop</span>
            </div>

            <!-- Exit Node -->
            <div class="circuit-hop-node exit-node">
              <div class="hop-icon-box exit">${getIcon('globe', '', 16)}</div>
              <div class="hop-node-meta">
                <span class="hop-role">${circuit[2]?.role || 'Exit Relay'}</span>
                <span class="hop-location" style="color:#00F2FE; font-weight:700;">${circuit[2]?.location || 'Zurich, Switzerland 🇨🇭'}</span>
                <span class="hop-ip">IP: ${pvt.exitIp || '185.220.101.42'}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Super Private Shield Controls -->
        <div class="super-pvt-features-row">
          <div class="pvt-feature-pill">
            <span class="feature-dot green"></span>
            <span>FARBLE 2.0 Max Anti-Fingerprint (Canvas/WebGL/Audio Noise)</span>
          </div>
          <div class="pvt-feature-pill">
            <span class="feature-dot cyan"></span>
            <span>Zero WebRTC & DNS Packet Leaks Sandbox</span>
          </div>
          <div class="pvt-feature-pill">
            <span class="feature-dot purple"></span>
            <span>TLS 1.3 Key Encapsulation</span>
          </div>
        </div>

        <!-- Action Bar: Inspect Circuit + Panic Nuke -->
        <div class="super-pvt-actions-bar">
          <button class="super-pvt-action-btn inspect-circuit-btn" id="openCircuitModalBtn">
            ${getIcon('circuit', '', 16)}
            <span>Inspect Full Onion Relays & Encryption Handshake →</span>
          </button>

          <button class="super-pvt-action-btn panic-nuke-btn-lg" id="superPvtPanicBtn" title="🚨 Panic Button: Instantly purge all private tabs and RAM">
            ${getIcon('nuke', '', 16)}
            <span>🚨 Emergency Panic: Nuke RAM & Tabs</span>
          </button>
        </div>
      </div>
    `;

    setupCommonEvents();

    container.querySelector('#rerouteCircuitBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      store.refreshOnionIdentity();
      showToast('🧅 Tor Identity Rotated: New relay circuit & exit IP established!');
      render();
    });

    container.querySelector('#openCircuitModalBtn')?.addEventListener('click', () => {
      store.openModal('circuit');
    });

    container.querySelector('#circuitRouteCard')?.addEventListener('click', () => {
      store.openModal('circuit');
    });

    container.querySelector('#superPvtPanicBtn')?.addEventListener('click', () => {
      store.panicNukeSession();
    });
  }

  function setupCommonEvents() {
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

    // Filter Lists Modal open
    container.querySelector('#openFilterListsBtn')?.addEventListener('click', () => {
      store.openModal('shields');
    });

    // Dashboard PiP Control Click
    container.querySelector('#dashboardPipControlBtn')?.addEventListener('click', () => {
      store.openModal('videoControls');
    });

    // Top Sites Clicks
    container.querySelectorAll('[data-site-url]').forEach(tile => {
      tile.addEventListener('click', (e) => {
        if (e.target.closest('[data-delete-site]')) return;
        const url = tile.dataset.siteUrl;
        store.navigateToUrl(url);
      });
    });

    // Delete Top Site
    container.querySelectorAll('[data-delete-site]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.deleteSite;
        store.removeTopSite(id);
      });
    });

    // Add Shortcut Button
    container.querySelector('#addShortcutBtn')?.addEventListener('click', () => {
      store.openModal('addShortcut');
    });

    // Next Wallpaper Button
    container.querySelector('#nextWallpaperBtn')?.addEventListener('click', () => {
      store.nextWallpaper();
    });

    // Customize Dashboard Button
    container.querySelector('#customizeDashboardBtn')?.addEventListener('click', () => {
      store.openModal('settings');
    });
  }

  function startClock() {
    if (clockTimer) clearInterval(clockTimer);
    clockTimer = setInterval(() => {
      const clockEl = container.querySelector('#ntpClock');
      const greetingEl = container.querySelector('#ntpGreeting');
      const state = store.getState();
      if (clockEl && state.settings.showClock) {
        clockEl.textContent = getFormattedTime(state.settings.clockFormat);
      }
      if (greetingEl && state.settings.showClock) {
        greetingEl.textContent = getGreeting();
      }
    }, 1000);
  }

  function getFormattedTime(format = '12h') {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    if (format === '12h') {
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 should be 12
      return `${hours}:${minutes} ${ampm}`;
    }

    return `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
  }

  function getGreeting() {
    const hours = new Date().getHours();
    const mode = store.getBrowserMode();

    if (mode === 'super-pvt') return 'Super Private Onion Terminal • 100% Encrypted';
    if (mode === 'incognito') return 'Incognito Private Space • No History Saved';

    if (hours < 12) return 'Good Morning, WebBuddy Explorer';
    if (hours < 18) return 'Good Afternoon, WebBuddy Explorer';
    return 'Good Evening, WebBuddy Explorer';
  }

  store.subscribe((state, event) => {
    if ([
      'TAB_SWITCHED', 
      'WALLPAPER_CHANGED', 
      'SETTINGS_UPDATED', 
      'TOP_SITES_UPDATED', 
      'SHIELDS_STATS_UPDATED', 
      'SEARCH_ENGINE_CHANGED', 
      'SEARCH_ENGINES_UPDATED',
      'BROWSER_MODE_CHANGED',
      'SUPER_PVT_UPDATED',
      'SESSION_NUKED',
      'MEDIA_PIP_TOGGLED'
    ].includes(event)) {
      render();
    }
  });

  render();
  startClock();
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
