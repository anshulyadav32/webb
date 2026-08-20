import { store } from '../state/store.js';
import { getIcon } from './Icons.js';

export function initTabBar(container) {
  function render() {
    const state = store.getState();
    const activeTab = store.getActiveTab();

    container.innerHTML = `
      <div class="window-top-bar">
        <div class="traffic-lights">
          <div class="traffic-light close" title="Close Window"></div>
          <div class="traffic-light minimize" title="Minimize"></div>
          <div class="traffic-light maximize" title="Zoom"></div>
        </div>

        <div class="brand-top-badge" id="brandHomeBtn" title="WebBuddy Browser - Open New Tab">
          ${getIcon('webbuddy-logo', '', 18)}
          <span class="brand-top-name">WebBuddy</span>
        </div>

        <div class="tab-strip" id="tabStrip">
          ${state.tabs.map(tab => `
            <div class="browser-tab ${tab.active ? 'active' : ''} ${tab.pinned ? 'pinned' : ''}" data-tab-id="${tab.id}" title="${tab.title}">
              <div class="tab-favicon">
                ${getIcon(tab.favicon || 'globe', '', 14)}
              </div>
              <span class="tab-title">${escapeHtml(tab.title)}</span>
              <button class="tab-close-btn" data-close-tab="${tab.id}" title="Close Tab">
                ${getIcon('close', '', 11)}
              </button>
            </div>
          `).join('')}

          <button class="new-tab-btn" id="newTabBtn" title="New Tab (Ctrl+T)">
            ${getIcon('plus', '', 14)}
          </button>
        </div>
      </div>
    `;

    // Event Listeners
    container.querySelector('#brandHomeBtn')?.addEventListener('click', () => {
      store.navigateToUrl('brave://newtab');
    });

    container.querySelector('#newTabBtn').addEventListener('click', () => {
      store.createTab();
    });

    container.querySelectorAll('.browser-tab').forEach(tabEl => {
      tabEl.addEventListener('click', (e) => {
        if (e.target.closest('[data-close-tab]')) return;
        const tabId = tabEl.dataset.tabId;
        store.switchTab(tabId);
      });

      // Context menu or double click to pin
      tabEl.addEventListener('dblclick', (e) => {
        e.preventDefault();
        const tabId = tabEl.dataset.tabId;
        store.togglePinTab(tabId);
      });
    });

    container.querySelectorAll('[data-close-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tabId = btn.dataset.closeTab;
        store.closeTab(tabId);
      });
    });
  }

  // Subscribe to changes
  store.subscribe((state, event) => {
    if (['TAB_CREATED', 'TAB_SWITCHED', 'TAB_CLOSED', 'TAB_PINNED', 'NAVIGATION_COMPLETE'].includes(event)) {
      render();
    }
  });

  render();
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
