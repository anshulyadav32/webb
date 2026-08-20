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
                  </div>

                  <!-- Add / Edit Search Engine Form Drawer -->
                  ${isAddEngineOpen ? `
                    <div class="add-engine-card" id="addEngineCard">
                      <div class="add-engine-header">
                        <span>${editingEngine ? 'Edit Search Engine' : 'Add Custom Search Engine'}</span>
                        <button class="btn-engine-icon" id="cancelAddEngineBtn">${getIcon('close', '', 12)}</button>
                      </div>
                      
                      <div class="add-engine-grid">
                        <div class="form-group">
                          <label class="form-label">Search Engine Name *</label>
                          <input type="text" class="form-input" id="engineNameInput" placeholder="e.g. YouTube, GitHub" value="${escapeAttr(editingEngine?.name || '')}" />
                        </div>
                        <div class="form-group">
                          <label class="form-label">Shortcut / Keyword (optional)</label>
                          <input type="text" class="form-input" id="engineShortcutInput" placeholder="e.g. :yt, :gh, !r" value="${escapeAttr(editingEngine?.shortcut || '')}" />
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="form-label">URL with %s in place of query *</label>
                        <input type="text" class="form-input" id="engineUrlInput" placeholder="e.g. https://www.youtube.com/results?search_query=%s" value="${escapeAttr(editingEngine?.searchUrl || '')}" />
                        <span style="font-size:11px; color:var(--text-muted); margin-top:2px;">Use <code>%s</code> wherever the search terms should go.</span>
                      </div>

                      <div class="engine-form-actions">
                        <button class="btn-secondary" id="cancelAddEngineBtn2">Cancel</button>
                        <button class="btn-primary" id="saveEngineBtn">
                          ${editingEngine ? 'Update Search Engine' : 'Save Search Engine'}
                        </button>
                      </div>
                    </div>
                  ` : ''}

                  <!-- List of engines -->
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
  }

  store.subscribe((state, event) => {
    if (['MODAL_CHANGED', 'SETTINGS_UPDATED', 'WALLPAPER_CHANGED', 'SEARCH_ENGINES_UPDATED', 'SEARCH_ENGINE_CHANGED'].includes(event)) {
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
