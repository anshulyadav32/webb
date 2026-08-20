import { store } from '../state/store.js';
import { getIcon } from './Icons.js';

export function initTabBar(container) {
  let activeContextMenu = null;
  let isSafariMenuOpen = false;

  function render() {
    const state = store.getState();
    const currentMode = store.getBrowserMode();
    const visibleTabs = store.getVisibleTabs();
    const allModeTabs = store.getAllModeTabs();
    const tabGroups = store.getTabGroups();
    const activeGroup = store.getActiveTabGroup();
    const activeTab = store.getActiveTab();

    // Group tabs by groupId for stats
    const groupedTabsCount = {};
    tabGroups.forEach(g => {
      groupedTabsCount[g.id] = 0;
    });
    allModeTabs.forEach(tab => {
      if (tab.groupId && groupedTabsCount[tab.groupId] !== undefined) {
        groupedTabsCount[tab.groupId]++;
      }
    });

    const activeGroupColor = activeGroup ? activeGroup.color : '#00F2FE';
    const activeGroupTabsCount = activeGroup ? (groupedTabsCount[activeGroup.id] || 0) : allModeTabs.length;

    container.innerHTML = `
      <div class="window-top-bar ${currentMode !== 'standard' ? 'mode-' + currentMode : ''}">
        <div class="traffic-lights">
          <div class="traffic-light close" title="Close Window"></div>
          <div class="traffic-light minimize" title="Minimize"></div>
          <div class="traffic-light maximize" title="Zoom"></div>
        </div>

        <button class="safari-sidebar-toggle-btn ${state.isSidebarOpen ? 'active' : ''}" id="topBarSidebarToggleBtn" title="Toggle Safari Tab Groups Sidebar (Cmd+N)">
          ${getIcon('safari-sidebar', '', 14)}
        </button>

        <div class="brand-top-badge" id="brandHomeBtn" title="WebBuddy Browser - Home">
          ${getIcon('webbuddy-logo', '', 18)}
          <span class="brand-top-name">WebBuddy</span>
        </div>

        <!-- Safari-Style Unified Single Tab Group & Mode Button -->
        <div class="safari-group-wrapper">
          <button 
            class="safari-tab-group-btn ${activeGroup ? 'active-group-mode' : ''} ${isSafariMenuOpen ? 'open' : ''}" 
            id="safariTabGroupBtn" 
            style="${activeGroup ? `--active-group-color: ${activeGroup.color}; --active-group-glow: ${activeGroup.color}40;` : ''}"
            title="Safari Workspaces & Browsing Modes: Click to switch modes or tab groups"
          >
            <span class="safari-btn-icon">
              ${activeGroup 
                ? `<span class="group-color-dot" style="background:${activeGroup.color}; box-shadow:0 0 8px ${activeGroup.color};"></span>` 
                : currentMode === 'incognito'
                ? getIcon('mask', '', 13)
                : currentMode === 'super-pvt'
                ? getIcon('onion', '', 13)
                : getIcon('safari-tabs', '', 13)}
            </span>
            <span class="safari-group-name">${activeGroup ? escapeHtml(activeGroup.name) : currentMode === 'incognito' ? 'Incognito' : currentMode === 'super-pvt' ? 'Super Private' : 'All Tabs'}</span>
            <span class="safari-group-badge">${activeGroup ? `${activeGroupTabsCount}` : `${allModeTabs.length}`}</span>
            <span class="safari-chevron">${getIcon('chevron-down', '', 10)}</span>
          </button>

          <!-- Safari Dropdown Popover Menu -->
          <div class="safari-group-menu" id="safariGroupMenu" style="display: ${isSafariMenuOpen ? 'block' : 'none'};">
            
            <!-- Browsing Privacy Modes -->
            <div class="safari-menu-section-title">BROWSING PRIVACY MODES</div>
            <div class="safari-menu-item ${currentMode === 'standard' ? 'selected' : ''}" data-set-mode="standard">
              <span class="safari-item-icon">${getIcon('globe', '', 14)}</span>
              <div class="safari-item-info">
                <span class="safari-item-title">Standard Browsing</span>
                <span class="safari-item-sub">Default persistent session</span>
              </div>
              ${currentMode === 'standard' ? `<span class="safari-check-mark">${getIcon('check', '', 13)}</span>` : ''}
            </div>

            <div class="safari-menu-item incognito-item ${currentMode === 'incognito' ? 'selected' : ''}" data-set-mode="incognito">
              <span class="safari-item-icon" style="color:#A78BFA;">${getIcon('mask', '', 14)}</span>
              <div class="safari-item-info">
                <span class="safari-item-title">Incognito Mode</span>
                <span class="safari-item-sub">Ephemeral RAM, zero history</span>
              </div>
              <span class="safari-shortcut-badge">Cmd+Shift+N</span>
              ${currentMode === 'incognito' ? `<span class="safari-check-mark">${getIcon('check', '', 13)}</span>` : ''}
            </div>

            <div class="safari-menu-item super-pvt-item ${currentMode === 'super-pvt' ? 'selected' : ''}" data-set-mode="super-pvt">
              <span class="safari-item-icon" style="color:#C084FC;">${getIcon('onion', '', 14)}</span>
              <div class="safari-item-info">
                <span class="safari-item-title">Super Private (Tor)</span>
                <span class="safari-item-sub">Onion encrypted multi-hop</span>
              </div>
              <span class="safari-shortcut-badge">Cmd+Shift+P</span>
              ${currentMode === 'super-pvt' ? `<span class="safari-check-mark">${getIcon('check', '', 13)}</span>` : ''}
            </div>

            <div class="safari-menu-divider"></div>

            <div class="safari-menu-section-title">TAB WORKSPACES & GROUPS</div>

            <!-- All Open Tabs Option -->
            <div class="safari-menu-item ${!activeGroup ? 'selected' : ''}" data-switch-group="all">
              <span class="safari-item-icon">${getIcon('globe', '', 14)}</span>
              <div class="safari-item-info">
                <span class="safari-item-title">All Open Tabs</span>
                <span class="safari-item-sub">${allModeTabs.length} ${allModeTabs.length === 1 ? 'tab' : 'tabs'} total</span>
              </div>
              ${!activeGroup ? `<span class="safari-check-mark">${getIcon('check', '', 13)}</span>` : ''}
            </div>

            <div class="safari-menu-divider"></div>

            <!-- Tab Groups List -->
            ${tabGroups.length > 0 ? `
              <div class="safari-menu-group-list">
                ${tabGroups.map(group => {
                  const count = groupedTabsCount[group.id] || 0;
                  const isSelected = activeGroup && activeGroup.id === group.id;
                  return `
                    <div class="safari-menu-item group-item ${isSelected ? 'selected' : ''}" data-switch-group="${group.id}">
                      <span class="group-color-dot" style="background:${group.color}; box-shadow: 0 0 6px ${group.color};"></span>
                      <div class="safari-item-info">
                        <span class="safari-item-title">${escapeHtml(group.name)}</span>
                        <span class="safari-item-sub">${count} ${count === 1 ? 'tab' : 'tabs'}</span>
                      </div>
                      ${isSelected ? `<span class="safari-check-mark">${getIcon('check', '', 13)}</span>` : ''}
                      <div class="safari-item-actions">
                        <button class="safari-action-icon edit-grp-btn" data-edit-group="${group.id}" title="Edit Group Name & Color">
                          ${getIcon('edit', '', 12)}
                        </button>
                        <button class="safari-action-icon delete-grp-btn" data-delete-group="${group.id}" title="Delete / Ungroup">
                          ${getIcon('close', '', 12)}
                        </button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            ` : `
              <div class="safari-menu-empty-hint">No tab groups yet</div>
            `}

            <div class="safari-menu-divider"></div>

            <!-- Actions -->
            <div class="safari-menu-item action-item" id="safariNewEmptyGroupBtn">
              <span class="safari-item-icon plus-icon">${getIcon('plus', '', 14)}</span>
              <span>New Empty Tab Group...</span>
              <span class="safari-shortcut-badge">Cmd+Shift+G</span>
            </div>

            <div class="safari-menu-item action-item" id="safariNewGroupWithCurrentBtn">
              <span class="safari-item-icon">${getIcon('folder-plus', '', 14)}</span>
              <span>New Group with Current Tab</span>
            </div>

            <div class="safari-menu-item action-item" id="safariNewGroupWithAllBtn">
              <span class="safari-item-icon">${getIcon('tab-groups', '', 14)}</span>
              <span>New Group with All Open Tabs (${allModeTabs.length})</span>
            </div>

            ${activeTab && tabGroups.length > 0 ? `
              <div class="safari-menu-submenu-wrapper">
                <div class="safari-menu-item action-item">
                  <span class="safari-item-icon">${getIcon('layers', '', 14)}</span>
                  <span>Move Current Tab to</span>
                  <span style="margin-left:auto; font-size:12px; opacity:0.6;">›</span>
                </div>
                <div class="safari-submenu">
                  ${tabGroups.map(g => `
                    <div class="safari-menu-item ${activeTab.groupId === g.id ? 'selected' : ''}" data-move-current-to="${g.id}">
                      <span class="group-color-dot" style="background:${g.color};"></span>
                      <span>${escapeHtml(g.name)}</span>
                      ${activeTab.groupId === g.id ? `<span class="safari-check-mark">${getIcon('check', '', 12)}</span>` : ''}
                    </div>
                  `).join('')}
                  ${activeTab.groupId ? `
                    <div class="safari-menu-divider"></div>
                    <div class="safari-menu-item danger" id="safariRemoveCurrentFromGroup">
                      ${getIcon('close', '', 12)}
                      <span>Remove from Group</span>
                    </div>
                  ` : ''}
                </div>
              </div>
            ` : ''}

            ${activeGroup ? `
              <div class="safari-menu-divider"></div>
              <div class="safari-menu-item danger" id="safariUngroupCurrentGroupBtn">
                <span class="safari-item-icon">${getIcon('layers', '', 14)}</span>
                <span>Ungroup Tabs in "${escapeHtml(activeGroup.name)}"</span>
              </div>
              <div class="safari-menu-item danger" id="safariCloseGroupTabsBtn">
                <span class="safari-item-icon">${getIcon('trash-2', '', 14)}</span>
                <span>Close All Tabs in Group</span>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Tab Strip -->
        <div class="tab-strip" id="tabStrip">
          ${visibleTabs.map(tab => {
            const group = tab.groupId ? store.getTabGroupById(tab.groupId) : null;
            return renderSingleTab(tab, group, !activeGroup && !!group);
          }).join('')}

          <!-- New Tab Action Button -->
          <div class="tab-strip-actions">
            <button class="new-tab-btn" id="newTabBtn" title="${activeGroup ? `New Tab in ${activeGroup.name} (Cmd+T)` : 'New Tab (Cmd+T)'}">
              ${getIcon('plus', '', 14)}
            </button>
          </div>
        </div>
      </div>

      <!-- Tab Context Menu Container -->
      <div id="tabContextMenu" class="tab-context-menu" style="display:none;"></div>
    `;

    setupEvents();
  }

  function renderSingleTab(tab, group, showGroupBadge = false) {
    const accentStyle = group ? `--tab-group-accent: ${group.color};` : '';

    return `
      <div 
        class="browser-tab ${tab.active ? 'active' : ''} ${tab.pinned ? 'pinned' : ''} ${group ? 'grouped-tab' : ''}" 
        data-tab-id="${tab.id}" 
        draggable="true"
        style="${accentStyle}"
        title="${escapeAttr(tab.title)}${group ? ` (${escapeAttr(group.name)})` : ''}"
      >
        <div class="tab-favicon">
          ${getIcon(tab.favicon || 'globe', '', 14)}
        </div>
        <span class="tab-title">${escapeHtml(tab.title)}</span>
        ${showGroupBadge && group ? `
          <span 
            class="tab-group-indicator-badge" 
            style="--group-tag-bg: ${group.color}22; --group-tag-color: ${group.color}; --group-tag-border: ${group.color}55;"
            title="Tab Group: ${escapeAttr(group.name)}"
          >
            ${escapeHtml(group.name)}
          </span>
        ` : ''}
        <button class="tab-close-btn" data-close-tab="${tab.id}" title="Close Tab">
          ${getIcon('close', '', 11)}
        </button>
      </div>
    `;
  }

  function setupEvents() {
    // Mode Switcher Clicks inside Safari Popover Menu
    container.querySelectorAll('[data-set-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.setMode;
        store.setBrowserMode(mode);
        isSafariMenuOpen = false;
        render();
      });
    });

    // Brand Home Click
    container.querySelector('#brandHomeBtn')?.addEventListener('click', () => {
      store.navigateToUrl('brave://newtab');
    });

    // Top Bar Sidebar Toggle
    container.querySelector('#topBarSidebarToggleBtn')?.addEventListener('click', () => {
      store.toggleSidebar();
    });

    // Safari Tab Group Main Button Toggle
    const safariBtn = container.querySelector('#safariTabGroupBtn');
    safariBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeTabContextMenu();
      isSafariMenuOpen = !isSafariMenuOpen;
      render();
    });

    // Safari Menu - Switch Group / Workspace
    container.querySelectorAll('[data-switch-group]').forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target.closest('.safari-item-actions')) return;
        const target = item.dataset.switchGroup;
        store.setActiveTabGroup(target === 'all' ? null : target);
        isSafariMenuOpen = false;
        render();
      });
    });

    // Safari Menu - Edit Group
    container.querySelectorAll('[data-edit-group]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const groupId = btn.dataset.editGroup;
        isSafariMenuOpen = false;
        render();
        store.openTabGroupModal(groupId);
      });
    });

    // Safari Menu - Delete Group
    container.querySelectorAll('[data-delete-group]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const groupId = btn.dataset.deleteGroup;
        store.deleteTabGroup(groupId, false);
      });
    });

    // Safari Menu - New Empty Group
    container.querySelector('#safariNewEmptyGroupBtn')?.addEventListener('click', () => {
      isSafariMenuOpen = false;
      render();
      store.openTabGroupModal(null);
    });

    // Safari Menu - New Group with Current Tab
    container.querySelector('#safariNewGroupWithCurrentBtn')?.addEventListener('click', () => {
      isSafariMenuOpen = false;
      const activeTab = store.getActiveTab();
      store.state.pendingTabForGroup = activeTab ? activeTab.id : null;
      render();
      store.openTabGroupModal(null);
    });

    // Safari Menu - New Group with All Open Tabs (Safari Feature)
    container.querySelector('#safariNewGroupWithAllBtn')?.addEventListener('click', () => {
      isSafariMenuOpen = false;
      const tabGroups = store.getTabGroups();
      const newGroupName = `Group ${tabGroups.length + 1} 📁`;
      store.createTabGroupFromOpenTabs(newGroupName, '#00F2FE');
      render();
    });

    // Safari Menu - Ungroup Current Group
    container.querySelector('#safariUngroupCurrentGroupBtn')?.addEventListener('click', () => {
      const activeGroup = store.getActiveTabGroup();
      if (activeGroup) {
        store.deleteTabGroup(activeGroup.id, false);
      }
      isSafariMenuOpen = false;
      render();
    });

    // Safari Menu - Close All Tabs in Group
    container.querySelector('#safariCloseGroupTabsBtn')?.addEventListener('click', () => {
      const activeGroup = store.getActiveTabGroup();
      if (activeGroup) {
        store.deleteTabGroup(activeGroup.id, true);
      }
      isSafariMenuOpen = false;
      render();
    });

    // Safari Menu - Move Current Tab to Group
    container.querySelectorAll('[data-move-current-to]').forEach(item => {
      item.addEventListener('click', () => {
        const groupId = item.dataset.moveCurrentTo;
        const activeTab = store.getActiveTab();
        if (activeTab) {
          store.addTabToGroup(activeTab.id, groupId);
        }
        isSafariMenuOpen = false;
        render();
      });
    });

    // Safari Menu - Remove Current Tab from Group
    container.querySelector('#safariRemoveCurrentFromGroup')?.addEventListener('click', () => {
      const activeTab = store.getActiveTab();
      if (activeTab) {
        store.removeTabFromGroup(activeTab.id);
      }
      isSafariMenuOpen = false;
      render();
    });

    // New Tab Button
    container.querySelector('#newTabBtn')?.addEventListener('click', () => {
      store.createTab();
    });

    // Tab Clicks, Context Menu & Drag-Drop
    container.querySelectorAll('.browser-tab').forEach(tabEl => {
      tabEl.addEventListener('click', (e) => {
        if (e.target.closest('[data-close-tab]')) return;
        const tabId = tabEl.dataset.tabId;
        store.switchTab(tabId);
      });

      tabEl.addEventListener('dblclick', (e) => {
        e.preventDefault();
        const tabId = tabEl.dataset.tabId;
        store.togglePinTab(tabId);
      });

      tabEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const tabId = tabEl.dataset.tabId;
        openTabContextMenu(tabId, e.clientX, e.clientY);
      });

      // HTML5 Drag and Drop for Tab Reordering & Moving to Groups
      tabEl.addEventListener('dragstart', (e) => {
        const tabId = tabEl.dataset.tabId;
        e.dataTransfer.setData('text/plain', tabId);
        e.dataTransfer.effectAllowed = 'move';
        tabEl.style.opacity = '0.5';
      });

      tabEl.addEventListener('dragend', () => {
        tabEl.style.opacity = '1';
      });

      tabEl.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      });

      tabEl.addEventListener('drop', (e) => {
        e.preventDefault();
        const sourceTabId = e.dataTransfer.getData('text/plain');
        const targetTabId = tabEl.dataset.tabId;
        if (sourceTabId && targetTabId && sourceTabId !== targetTabId) {
          store.reorderTabs(sourceTabId, targetTabId);
        }
      });
    });

    // Tab Close Buttons
    container.querySelectorAll('[data-close-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tabId = btn.dataset.closeTab;
        store.closeTab(tabId);
      });
    });
  }

  function openTabContextMenu(tabId, x, y) {
    closeTabContextMenu();
    isSafariMenuOpen = false;

    const tab = store.getState().tabs.find(t => t.id === tabId);
    if (!tab) return;

    const menu = container.querySelector('#tabContextMenu');
    if (!menu) return;

    const tabGroups = store.getTabGroups();
    const currentGroup = tab.groupId ? store.getTabGroupById(tab.groupId) : null;

    menu.innerHTML = `
      <div class="context-menu-header">
        <span class="context-menu-title">${escapeHtml(tab.title)}</span>
      </div>
      <div class="context-menu-divider"></div>

      <!-- Add to New Group -->
      <div class="context-menu-item" id="ctxAddToNewGroup">
        ${getIcon('folder-plus', '', 14)}
        <span>New Tab Group with This Tab...</span>
      </div>

      <!-- Existing Groups Submenu -->
      ${tabGroups.length > 0 ? `
        <div class="context-menu-submenu-item">
          <div class="submenu-label">
            ${getIcon('tab-group', '', 14)}
            <span>Move to Group</span>
            <span style="margin-left:auto;">›</span>
          </div>
          <div class="context-submenu">
            ${tabGroups.map(g => `
              <div class="context-menu-item ${g.id === tab.groupId ? 'active-group' : ''}" data-move-to-group="${g.id}">
                <span class="group-color-dot" style="background:${g.color};"></span>
                <span>${escapeHtml(g.name)}</span>
                ${g.id === tab.groupId ? `<span style="margin-left:auto;">✓</span>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${currentGroup ? `
        <div class="context-menu-item" id="ctxRemoveFromGroup">
          ${getIcon('close', '', 14)}
          <span>Remove from Group ("${escapeHtml(currentGroup.name)}")</span>
        </div>
      ` : ''}

      <div class="context-menu-divider"></div>

      <!-- Mode Moves -->
      <div class="context-menu-item" id="ctxMoveIncognito">
        ${getIcon('mask', '', 14)}
        <span>Open in Incognito Mode</span>
      </div>
      <div class="context-menu-item" id="ctxMoveSuperPvt">
        ${getIcon('onion', '', 14)}
        <span>Open in Super Private (Tor)</span>
      </div>

      <div class="context-menu-divider"></div>

      <!-- Actions -->
      <div class="context-menu-item" id="ctxDuplicate">
        ${getIcon('copy', '', 14)}
        <span>Duplicate Tab</span>
      </div>
      <div class="context-menu-item" id="ctxPin">
        ${getIcon('pin', '', 14)}
        <span>${tab.pinned ? 'Unpin Tab' : 'Pin Tab'}</span>
      </div>
      <div class="context-menu-item danger" id="ctxClose">
        ${getIcon('close', '', 14)}
        <span>Close Tab</span>
      </div>
    `;

    // Position menu on screen
    const menuWidth = 240;
    const menuHeight = 320;
    const posX = Math.min(x, window.innerWidth - menuWidth - 10);
    const posY = Math.min(y, window.innerHeight - menuHeight - 10);

    menu.style.left = `${posX}px`;
    menu.style.top = `${posY}px`;
    menu.style.display = 'block';
    activeContextMenu = menu;

    // Events in Context Menu
    menu.querySelector('#ctxAddToNewGroup')?.addEventListener('click', () => {
      closeTabContextMenu();
      store.state.pendingTabForGroup = tabId;
      store.openTabGroupModal(null);
    });

    menu.querySelectorAll('[data-move-to-group]').forEach(item => {
      item.addEventListener('click', () => {
        const groupId = item.dataset.moveToGroup;
        store.moveTabToGroup(tabId, groupId);
        closeTabContextMenu();
        render();
      });
    });

    menu.querySelector('#ctxRemoveFromGroup')?.addEventListener('click', () => {
      store.removeTabFromGroup(tabId);
      closeTabContextMenu();
      render();
    });

    menu.querySelector('#ctxMoveIncognito')?.addEventListener('click', () => {
      store.moveTabToMode(tabId, 'incognito');
      closeTabContextMenu();
    });

    menu.querySelector('#ctxMoveSuperPvt')?.addEventListener('click', () => {
      store.moveTabToMode(tabId, 'super-pvt');
      closeTabContextMenu();
    });

    menu.querySelector('#ctxDuplicate')?.addEventListener('click', () => {
      store.duplicateTab(tabId);
      closeTabContextMenu();
    });

    menu.querySelector('#ctxPin')?.addEventListener('click', () => {
      store.togglePinTab(tabId);
      closeTabContextMenu();
    });

    menu.querySelector('#ctxClose')?.addEventListener('click', () => {
      store.closeTab(tabId);
      closeTabContextMenu();
    });
  }

  function closeTabContextMenu() {
    if (activeContextMenu) {
      activeContextMenu.style.display = 'none';
      activeContextMenu = null;
    }
  }

  // Global click outside handler
  document.addEventListener('click', (e) => {
    if (isSafariMenuOpen && !e.target.closest('.safari-group-wrapper')) {
      isSafariMenuOpen = false;
      const menu = container.querySelector('#safariGroupMenu');
      const btn = container.querySelector('#safariTabGroupBtn');
      if (menu) menu.style.display = 'none';
      if (btn) btn.classList.remove('open');
    }
    if (activeContextMenu && !e.target.closest('.tab-context-menu')) {
      closeTabContextMenu();
    }
  });

  // Subscribe to store events
  store.subscribe((state, event) => {
    if ([
      'TAB_CREATED',
      'TAB_SWITCHED',
      'TAB_CLOSED',
      'TAB_PINNED',
      'BROWSER_MODE_CHANGED',
      'TAB_GROUPS_UPDATED',
      'TAB_MOVED_GROUP',
      'TABS_REORDERED',
      'NAVIGATION_COMPLETE',
      'SESSION_NUKED',
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
