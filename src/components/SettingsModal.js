import { store } from '../state/store.js';
import { getIcon } from './Icons.js';

export function initSettingsModal(container) {
  let activeTab = 'search'; // 'search' | 'shields' | 'appearance'
  let isAddEngineOpen = false;
  let editingEngine = null;

  function render() {
    const state = store.getState();
    if (state.activeModal !== 'settings') {
      container.innerHTML = '';
      return;
    }

    const settings = state.settings;
    const searchEngines = store.getSearchEngines();
    const defaultEngine = store.getDefaultSearchEngine();

    container.innerHTML = `
      <div class="modal-overlay" id="settingsOverlay">
        <div class="center-modal settings-modal-wrapper">
          <!-- Modal Header -->
          <div class="modal-header">
            <div class="modal-title">
              ${getIcon('settings', '', 18)}
              <span>WebBuddy Preferences & Settings</span>
            </div>
            <button class="modal-close-btn" id="closeSettingsBtn" title="Close Settings">
              ${getIcon('close', '', 14)}
            </button>
          </div>

          <!-- Tab Navigation -->
          <div class="settings-nav-tabs">
            <button class="settings-tab-btn ${activeTab === 'search' ? 'active' : ''}" data-tab="search">
              ${getIcon('search', '', 15)}
              <span>Search Engines</span>
            </button>
            <button class="settings-tab-btn ${activeTab === 'shields' ? 'active' : ''}" data-tab="shields">
              ${getIcon('shield', '', 15)}
              <span>Shields & Privacy</span>
            </button>
            <button class="settings-tab-btn ${activeTab === 'appearance' ? 'active' : ''}" data-tab="appearance">
              ${getIcon('sliders', '', 15)}
              <span>Appearance</span>
            </button>
            <button class="settings-tab-btn ${activeTab === 'motrix' ? 'active' : ''}" data-tab="motrix">
              ${getIcon('motrix-logo', '', 15)}
              <span>Motrix & Downloads</span>
            </button>
          </div>

          <div class="modal-body">
            <!-- TAB 1: Search Engines Manager -->
            ${activeTab === 'search' ? `
              <div class="search-manager-section">
                <!-- Section 1: Default Search Engine Selector -->
                <div>
                  <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
                    <div>
                      <h4 style="font-size:14px; font-weight:700; color:#fff; margin-bottom:2px;">Default Search Engine</h4>
                      <p style="font-size:12px; color:var(--text-secondary);">The search engine used when searching from the address bar or new tab page.</p>
                    </div>
                    <span class="engine-tag-default">Active: ${escapeHtml(defaultEngine.name)}</span>
                  </div>

                  <div class="search-engine-selector-grid">
                    ${searchEngines.map(engine => {
                      const isDef = engine.id === defaultEngine.id;
                      return `
                        <div class="search-engine-card ${isDef ? 'active' : ''}" data-set-default="${escapeAttr(engine.id)}" title="Click to set ${escapeHtml(engine.name)} as default">
                          <div class="search-engine-icon-box">
                            ${getIcon(engine.icon || 'search', '', 18)}
                          </div>
                          <div class="search-engine-info">
                            <div class="search-engine-name">${escapeHtml(engine.name)}</div>
                            <div class="search-engine-shortcut-hint">${escapeHtml(engine.shortcut || 'No prefix')}</div>
                          </div>
                          ${isDef ? `<span class="active-default-pill">DEFAULT</span>` : ''}
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>

                <!-- Section 2: Manage Search Engines Table -->
                <div class="engine-table-wrapper">
                  <div class="engine-table-header">
                    <div class="engine-table-title">
                      ${getIcon('search-engine', '', 16)}
                      <span>Manage Search Engines & Shortcuts</span>
                    </div>
                    <div style="display:flex; gap:8px;">
                      <button class="btn-secondary" id="openAddEngineBtn" style="padding:6px 12px; font-size:11px; display:flex; align-items:center; gap:5px;">
                        ${getIcon('plus', '', 12)}
                        <span>Add Search Engine</span>
                      </button>
                      <button class="btn-secondary" id="resetEnginesBtn" style="padding:6px 10px; font-size:11px;" title="Reset all to defaults">
                        ${getIcon('refresh', '', 12)}
                      </button>
                    </div>
                  <div class="engine-list">
                    ${searchEngines.map(engine => {
                      const isDef = engine.id === defaultEngine.id;
                      return `
                        <div class="engine-row">
                          <div class="engine-row-left">
                            <div class="engine-avatar">
                              ${getIcon(engine.icon || 'search', '', 16)}
                            </div>
                            <div class="engine-details">
                              <div class="engine-details-title-row">
                                <span class="engine-title">${escapeHtml(engine.name)}</span>
                                ${isDef ? `<span class="engine-tag-default">Default</span>` : ''}
                                ${!engine.isBuiltin ? `<span class="engine-tag-custom">Custom</span>` : ''}
                              </div>
                              <div class="engine-subtext" title="${escapeAttr(engine.searchUrl)}">
                                <code>${escapeHtml(engine.searchUrl)}</code>
                              </div>
                            </div>
                          </div>

                          <div style="display:flex; align-items:center; gap:10px;">
                            ${engine.shortcut ? `<span class="engine-shortcut-badge" title="Type ${escapeAttr(engine.shortcut)} in address bar to search">${escapeHtml(engine.shortcut)}</span>` : ''}
                            
                            <div class="engine-row-actions">
                              ${!isDef ? `
                                <button class="btn-make-default" data-set-default="${escapeAttr(engine.id)}" title="Make default">
                                  Make Default
                                </button>
                              ` : ''}
                              
                              <button class="btn-engine-icon" data-edit-engine="${escapeAttr(engine.id)}" title="Edit search engine">
                                ${getIcon('edit', '', 13)}
                              </button>

                              ${(!engine.isBuiltin || searchEngines.length > 1) && !isDef ? `
                                <button class="btn-engine-icon delete" data-delete-engine="${escapeAttr(engine.id)}" title="Delete search engine">
                                  ${getIcon('trash', '', 13)}
                                </button>
                              ` : ''}
                            </div>
                          </div>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>

                <!-- Section 3: Shortcut Tips -->
                <div class="search-shortcuts-tips">
                  <strong>💡 Pro-Tip: Fast Omnibox Keyword Searches</strong><br/>
                  Type a shortcut prefix followed by your query directly in the address bar (e.g. <code>:g quantum computing</code>, <code>:ddg async rust</code>, or <code>:w alan turing</code>) to instantly search with that specific search engine!
                </div>
              </div>
            ` : ''}

            <!-- TAB 2: Shields & Privacy -->
            ${activeTab === 'shields' ? `
              <div>
                <h4 style="font-size:13px; font-weight:700; color:var(--text-secondary); margin-bottom:12px;">Visible Dashboard Widgets</h4>
                <div class="shields-controls-list">
                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${getIcon('shield', '', 14)}
                      <span>Ad & Tracker Blocker Metrics Card</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="showShieldsStats" ${settings.showShieldsStats ? 'checked' : ''}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>

                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${getIcon('clock', '', 14)}
                      <span>Digital Clock & Greeting</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="showClock" ${settings.showClock ? 'checked' : ''}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>

                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${getIcon('zap', '', 14)}
                      <span>Top Sites & Shortcuts Grid</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="showTopSites" ${settings.showTopSites ? 'checked' : ''}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>

                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${getIcon('star', '', 14)}
                      <span>Show Bookmarks Bar</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="bookmarksBarVisible" ${settings.bookmarksBarVisible ? 'checked' : ''}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            ` : ''}

            <!-- TAB 3: Appearance & Wallpapers -->
            ${activeTab === 'appearance' ? `
              <div style="display:flex; flex-direction:column; gap:16px;">
                <div class="shields-controls-list">
                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${getIcon('image', '', 14)}
                      <span>Blur Background Wallpaper on Dashboard</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="blurWallpaper" ${settings.blurWallpaper ? 'checked' : ''}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 style="font-size:13px; font-weight:700; color:var(--text-secondary); margin-bottom:10px;">Background Wallpaper</h4>
                  <div class="wallpaper-gallery-grid">
                    ${state.wallpapers.map((wp, idx) => `
                      <div class="wallpaper-thumb ${state.activeWallpaperIndex === idx ? 'selected' : ''}" data-wallpaper-index="${idx}">
                        <img src="${wp.thumbnail || wp.url}" alt="${escapeHtml(wp.name)}" loading="lazy" />
                        <div class="wallpaper-thumb-label">${escapeHtml(wp.name)}</div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            ` : ''}

            <!-- TAB 4: Motrix & Downloads Integration -->
            ${activeTab === 'motrix' ? `
              <div style="display:flex; flex-direction:column; gap:20px;">
                <!-- Header Banner -->
                <div style="background:linear-gradient(135deg, rgba(255,82,82,0.12) 0%, rgba(124,77,255,0.12) 100%); border:1px solid rgba(255,64,129,0.3); border-radius:12px; padding:16px; display:flex; align-items:center; justify-content:space-between; gap:16px;">
                  <div style="display:flex; align-items:center; gap:12px;">
                    <div style="width:40px; height:40px; border-radius:10px; background:rgba(255,64,129,0.2); display:flex; align-items:center; justify-content:center;">
                      ${getIcon('motrix-logo', '', 28)}
                    </div>
                    <div>
                      <h4 style="font-size:15px; font-weight:700; color:#FFF; margin:0;">Motrix Aria2 RPC Download Hub</h4>
                      <p style="font-size:12px; color:#94A3B8; margin:2px 0 0 0;">High-speed multi-threaded acceleration (1–64 connections), Torrent & Magnet management.</p>
                    </div>
                  </div>

                  <button class="btn-primary" id="openMotrixDirectBtn" style="background:linear-gradient(135deg, #FF5252 0%, #FF4081 50%, #7C4DFF 100%); border:none; padding:8px 14px; font-size:12px; display:flex; align-items:center; gap:6px;">
                    ${getIcon('download', '', 14)}
                    <span>Open Download Manager</span>
                  </button>
                </div>

                <!-- RPC Connection Settings -->
                <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:18px; display:flex; flex-direction:column; gap:14px;">
                  <div style="display:flex; align-items:center; justify-content:space-between;">
                    <h5 style="font-size:13px; font-weight:700; color:#FFF; margin:0;">Aria2 / Motrix RPC Endpoint</h5>
                    <span class="motrix-status-pill ${state.motrix?.isConnected ? 'online' : 'offline'}">
                      <span class="motrix-status-dot"></span>
                      ${state.motrix?.isConnected ? 'RPC ONLINE' : 'TURBO ENGINE (STANDALONE)'}
                    </span>
                  </div>

                  <div style="display:grid; grid-template-columns: 2fr 1fr 2fr; gap:12px;">
                    <div class="form-group">
                      <label style="font-size:11px; font-weight:600; color:#94A3B8; margin-bottom:4px;">RPC Host</label>
                      <input type="text" class="form-input" id="motrixHostInput" value="${escapeAttr(state.motrix?.rpcHost || '127.0.0.1')}" />
                    </div>
                    <div class="form-group">
                      <label style="font-size:11px; font-weight:600; color:#94A3B8; margin-bottom:4px;">RPC Port</label>
                      <input type="number" class="form-input" id="motrixPortInput" value="${escapeAttr(state.motrix?.rpcPort || 16800)}" />
                    </div>
                    <div class="form-group">
                      <label style="font-size:11px; font-weight:600; color:#94A3B8; margin-bottom:4px;">RPC Secret Token (Optional)</label>
                      <input type="password" class="form-input" id="motrixSecretInput" placeholder="Leave blank if none" value="${escapeAttr(state.motrix?.rpcSecret || '')}" />
                    </div>
                  </div>

                  <div style="display:flex; justify-content:flex-end; gap:8px;">
                    <button class="btn-secondary" id="testMotrixRpcBtn" style="padding:6px 12px; font-size:11px; display:flex; align-items:center; gap:5px;">
                      ${getIcon('refresh', '', 12)}
                      <span>Test Connection</span>
                    </button>
                    <button class="btn-primary" id="saveMotrixConfigBtn" style="padding:6px 14px; font-size:11px;">
                      <span>Save RPC Settings</span>
                    </button>
                  </div>
                </div>

                <!-- Downloader Preferences -->
                <div class="shields-controls-list">
                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${getIcon('download', '', 14)}
                      <span>Automatically Intercept Browser Downloads</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" id="motrixAutoInterceptToggle" ${state.motrix?.autoInterceptDownloads ? 'checked' : ''}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>

                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${getIcon('speed-down', '', 14)}
                      <span>Max Concurrent Connections per Task (Speed Acceleration)</span>
                    </span>
                    <select id="motrixMaxConnsSelect" style="background:#1A1B29; border:1px solid rgba(255,255,255,0.12); color:#FFF; padding:5px 10px; border-radius:6px; font-size:12px; outline:none;">
                      <option value="4" ${state.motrix?.maxConnections === 4 ? 'selected' : ''}>4 Connections</option>
                      <option value="8" ${state.motrix?.maxConnections === 8 ? 'selected' : ''}>8 Connections</option>
                      <option value="16" ${state.motrix?.maxConnections === 16 ? 'selected' : ''}>16 Connections (Standard)</option>
                      <option value="32" ${state.motrix?.maxConnections === 32 ? 'selected' : ''}>32 Connections (Turbo)</option>
                      <option value="64" ${state.motrix?.maxConnections === 64 ? 'selected' : ''}>64 Connections (Extreme)</option>
                    </select>
                  </div>

                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${getIcon('folder-open', '', 14)}
                      <span>Default Download Save Location</span>
                    </span>
                    <input type="text" class="form-input" id="motrixSaveDirInput" style="max-width:260px; padding:4px 10px; font-size:12px;" value="${escapeAttr(state.motrix?.downloadDir || '~/Downloads')}" />
                  </div>
                </div>

                <!-- Launch Native App Button -->
                <div style="display:flex; align-items:center; justify-content:space-between; padding:12px 16px; background:rgba(255,255,255,0.02); border-radius:10px; border:1px solid rgba(255,255,255,0.05);">
                  <div>
                    <span style="font-size:13px; font-weight:600; color:#FFF; display:block;">External Motrix Desktop Client</span>
                    <span style="font-size:11px; color:#94A3B8;">Launch the standalone Motrix application via system scheme (<code>motrix://</code>)</span>
                  </div>
                  <button class="btn-secondary" id="launchMotrixNativeBtn" style="display:flex; align-items:center; gap:6px; font-size:12px;">
                    ${getIcon('external-link', '', 13)}
                    <span>Launch Motrix App</span>
                  </button>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    setupEvents();
  }

  function setupEvents() {
    const overlay = container.querySelector('#settingsOverlay');
    if (!overlay) return;

    // Close Modal
    overlay.querySelector('#closeSettingsBtn')?.addEventListener('click', () => {
      isAddEngineOpen = false;
      editingEngine = null;
      store.closeModal();
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        isAddEngineOpen = false;
        editingEngine = null;
        store.closeModal();
      }
    });

    // Tab Navigation
    overlay.querySelectorAll('.settings-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.dataset.tab;
        isAddEngineOpen = false;
        editingEngine = null;
        render();
      });
    });

    // Set Default Search Engine
    overlay.querySelectorAll('[data-set-default]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const engineId = el.dataset.setDefault;
        store.setDefaultSearchEngine(engineId);
        const eng = store.getSearchEngineById(engineId);
        showToast(`🔍 Default search engine set to ${eng ? eng.name : 'Google'}`);
        render();
      });
    });

    // Add / Edit Custom Engine Drawer
    overlay.querySelector('#openAddEngineBtn')?.addEventListener('click', () => {
      isAddEngineOpen = true;
      editingEngine = null;
      render();
      overlay.querySelector('#engineNameInput')?.focus();
    });

    overlay.querySelector('#cancelAddEngineBtn')?.addEventListener('click', () => {
      isAddEngineOpen = false;
      editingEngine = null;
      render();
    });

    overlay.querySelector('#cancelAddEngineBtn2')?.addEventListener('click', () => {
      isAddEngineOpen = false;
      editingEngine = null;
      render();
    });

    overlay.querySelector('#resetEnginesBtn')?.addEventListener('click', () => {
      if (confirm('Reset search engines to default settings (Google as default)?')) {
        store.resetSearchEnginesToDefault();
        showToast('✓ Search engines reset to defaults');
        render();
      }
    });

    // Save New / Edited Engine
    overlay.querySelector('#saveEngineBtn')?.addEventListener('click', () => {
      const nameInput = overlay.querySelector('#engineNameInput');
      const shortcutInput = overlay.querySelector('#engineShortcutInput');
      const urlInput = overlay.querySelector('#engineUrlInput');

      const name = nameInput?.value.trim();
      const shortcut = shortcutInput?.value.trim();
      const searchUrl = urlInput?.value.trim();

      if (!name) {
        nameInput?.focus();
        showToast('⚠️ Please enter a search engine name');
        return;
      }

      if (!searchUrl || !searchUrl.includes('%s')) {
        urlInput?.focus();
        showToast('⚠️ URL must include %s for the search query parameter');
        return;
      }

      if (editingEngine) {
        store.updateSearchEngine(editingEngine.id, { name, shortcut, searchUrl });
        showToast(`✓ Updated ${name} search engine`);
      } else {
        store.addSearchEngine({ name, shortcut, searchUrl });
        showToast(`✓ Added ${name} to search engines`);
      }

      isAddEngineOpen = false;
      editingEngine = null;
      render();
    });

    // Edit Engine Button Click
    overlay.querySelectorAll('[data-edit-engine]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.editEngine;
        const engine = store.getSearchEngineById(id);
        if (engine) {
          editingEngine = engine;
          isAddEngineOpen = true;
          render();
          overlay.querySelector('#engineNameInput')?.focus();
        }
      });
    });

    // Delete Engine Button Click
    overlay.querySelectorAll('[data-delete-engine]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.deleteEngine;
        const engine = store.getSearchEngineById(id);
        if (confirm(`Remove "${engine ? engine.name : 'this search engine'}"?`)) {
          store.deleteSearchEngine(id);
          showToast('🗑️ Search engine removed');
          render();
        }
      });
    });

    // Generic Settings Toggles
    overlay.querySelectorAll('[data-setting]').forEach(input => {
      input.addEventListener('change', () => {
        const key = input.dataset.setting;
        store.updateSetting(key, input.checked);
      });
    });

    // Wallpapers
    overlay.querySelectorAll('[data-wallpaper-index]').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.wallpaperIndex, 10);
        store.selectWallpaper(idx);
        render();
      });
    });

    // Motrix Tab Actions
    overlay.querySelector('#openMotrixDirectBtn')?.addEventListener('click', () => {
      store.closeModal();
      store.openMotrixModal();
    });

    overlay.querySelector('#launchMotrixNativeBtn')?.addEventListener('click', () => {
      store.launchMotrixApp();
    });

    overlay.querySelector('#testMotrixRpcBtn')?.addEventListener('click', async () => {
      const btn = overlay.querySelector('#testMotrixRpcBtn');
      if (btn) btn.innerText = 'Testing...';
      const host = overlay.querySelector('#motrixHostInput')?.value.trim() || '127.0.0.1';
      const port = parseInt(overlay.querySelector('#motrixPortInput')?.value || '16800', 10);
      const secret = overlay.querySelector('#motrixSecretInput')?.value.trim() || '';

      store.updateMotrixConfig({ rpcHost: host, rpcPort: port, rpcSecret: secret });

      setTimeout(() => {
        const isOnline = store.getState().motrix.isConnected;
        if (isOnline) {
          showToast(`⚡ Motrix Aria2 RPC connected on :${port}`);
        } else {
          showToast(`⚠️ Motrix daemon not detected on :${port}. Using Turbo Engine.`);
        }
        render();
      }, 800);
    });

    overlay.querySelector('#saveMotrixConfigBtn')?.addEventListener('click', () => {
      const host = overlay.querySelector('#motrixHostInput')?.value.trim() || '127.0.0.1';
      const port = parseInt(overlay.querySelector('#motrixPortInput')?.value || '16800', 10);
      const secret = overlay.querySelector('#motrixSecretInput')?.value.trim() || '';
      const autoIntercept = overlay.querySelector('#motrixAutoInterceptToggle')?.checked ?? true;
      const maxConns = parseInt(overlay.querySelector('#motrixMaxConnsSelect')?.value || '16', 10);
      const dir = overlay.querySelector('#motrixSaveDirInput')?.value.trim() || '~/Downloads';

      store.updateMotrixConfig({
        rpcHost: host,
        rpcPort: port,
        rpcSecret: secret,
        autoInterceptDownloads: autoIntercept,
        maxConnections: maxConns,
        downloadDir: dir
      });
      showToast('✓ Motrix settings saved successfully!');
      render();
    });
  }

  store.subscribe((event, payload) => {
    if (['MODAL_CHANGED', 'SETTINGS_UPDATED', 'WALLPAPER_CHANGED', 'SEARCH_ENGINES_UPDATED', 'SEARCH_ENGINE_CHANGED', 'MOTRIX_STATUS_CHANGED', 'MOTRIX_CONFIG_UPDATED'].includes(event)) {
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
  setTimeout(() => toast.remove(), 2400);
}
