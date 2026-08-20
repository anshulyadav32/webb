import { store } from '../state/store.js';
import { getIcon } from './Icons.js';

export function initTabBar(container) {
  let activeContextMenu = null;
  let activeGroupMenuId = null;

  function render() {
    const state = store.getState();
    const currentMode = store.getBrowserMode();
    const visibleTabs = store.getVisibleTabs();
    const tabGroups = store.getTabGroups();

    // Group tabs by groupId
    const groupedTabs = {};
    const ungroupedTabs = [];

    tabGroups.forEach(g => {
      groupedTabs[g.id] = [];
    });

    visibleTabs.forEach(tab => {
      if (tab.groupId && groupedTabs[tab.groupId]) {
        groupedTabs[tab.groupId].push(tab);
      } else {
        ungroupedTabs.push(tab);
      }
    });

    container.innerHTML = `
      <div class="window-top-bar ${currentMode !== 'standard' ? 'mode-' + currentMode : ''}">
        <div class="traffic-lights">
          <div class="traffic-light close" title="Close Window"></div>
          <div class="traffic-light minimize" title="Minimize"></div>
          <div class="traffic-light maximize" title="Zoom"></div>
        </div>

        <div class="brand-top-badge" id="brandHomeBtn" title="WebBuddy Browser - Home">
          ${getIcon('webbuddy-logo', '', 18)}
          <span class="brand-top-name">WebBuddy</span>
        </div>

        <!-- Mode Switcher: Standard / Incognito / Super Private -->
        <div class="browser-mode-switcher" id="modeSwitcher">
          <button class="mode-tab-btn ${currentMode === 'standard' ? 'active' : ''}" data-set-mode="standard" title="Standard Browsing Workspace">
            ${getIcon('globe', '', 12)}
            <span>Standard</span>
          </button>

          <button class="mode-tab-btn incognito-btn ${currentMode === 'incognito' ? 'active' : ''}" data-set-mode="incognito" title="Incognito Mode - Ephemeral RAM, Zero History (Cmd+Shift+N)">
            ${getIcon('mask', '', 12)}
            <span>Incognito</span>
          </button>

          <button class="mode-tab-btn super-pvt-btn ${currentMode === 'super-pvt' ? 'active' : ''}" data-set-mode="super-pvt" title="Super Private Tor Mode - Onion Encrypted Multi-Hop (Cmd+Shift+P)">
            ${getIcon('onion', '', 12)}
            <span>Super Pvt</span>
          </button>
        </div>

        <!-- Tab Strip -->
        <div class="tab-strip" id="tabStrip">
          <!-- Render Tab Groups with their Tabs -->
          ${tabGroups.map(group => {
            const tabsInGroup = groupedTabs[group.id] || [];
            const isCollapsed = group.collapsed;
            const hasActiveTab = tabsInGroup.some(t => t.active);

            return `
              <div class="tab-group-container ${isCollapsed ? 'collapsed' : ''}" data-group-id="${group.id}" style="--group-color: ${group.color};">
                <div class="tab-group-header-pill" data-toggle-collapse="${group.id}" title="${escapeAttr(group.name)} (${tabsInGroup.length} tabs) • Click to ${isCollapsed ? 'expand' : 'collapse'}">
                  <span class="group-dot" style="background: ${group.color}; box-shadow: 0 0 6px ${group.color};"></span>
                  <span class="group-name-label">${escapeHtml(group.name)}</span>
                  <span class="group-count-badge">${tabsInGroup.length}</span>
                  <span class="group-arrow-icon">${getIcon(isCollapsed ? 'chevron-down' : 'chevron-up', '', 10)}</span>
                  <button class="group-menu-trigger-btn" data-group-menu="${group.id}" title="Group Options">
                    ${getIcon('more-vertical', '', 11)}
                  </button>
                </div>

                <div class="tab-group-tabs ${isCollapsed && !hasActiveTab ? 'hidden-group-tabs' : ''}">
                  ${tabsInGroup.map(tab => renderSingleTab(tab, group)).join('')}
                </div>
              </div>
            `;
          }).join('')}

          <!-- Render Ungrouped Tabs -->
          ${ungroupedTabs.map(tab => renderSingleTab(tab, null)).join('')}

          <!-- Action Buttons -->
          <div class="tab-strip-actions">
            <button class="new-group-btn" id="newGroupBtn" title="Create Tab Group">
              ${getIcon('folder-plus', '', 13)}
              <span>+ Group</span>
            </button>
            <button class="new-tab-btn" id="newTabBtn" title="New Tab (Cmd+T)">
              ${getIcon('plus', '', 14)}
            </button>
          </div>
        </div>
      </div>

      <!-- Context Menu Container -->
      <div id="tabContextMenu" class="tab-context-menu" style="display:none;"></div>
      
      <!-- Group Menu Popover -->
      <div id="groupMenuPopover" class="group-menu-popover" style="display:none;"></div>
    `;

    setupEvents();
  }

  function renderSingleTab(tab, group) {
    const isGrouped = !!group;
    const accentStyle = isGrouped ? `border-bottom: 2px solid ${group.color};` : '';

    return `
      <div 
        class="browser-tab ${tab.active ? 'active' : ''} ${tab.pinned ? 'pinned' : ''} ${isGrouped ? 'grouped-tab' : ''}" 
        data-tab-id="${tab.id}" 
        style="${accentStyle}"
        title="${escapeAttr(tab.title)}"
      >
        <div class="tab-favicon">
          ${getIcon(tab.favicon || 'globe', '', 14)}
        </div>
        <span class="tab-title">${escapeHtml(tab.title)}</span>
        <button class="tab-close-btn" data-close-tab="${tab.id}" title="Close Tab">
          ${getIcon('close', '', 11)}
        </button>
      </div>
    `;
  }

  function setupEvents() {
    // Mode Switcher Clicks
    container.querySelectorAll('[data-set-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.setMode;
        store.setBrowserMode(mode);
      });
    });

    // Brand Home Click
    container.querySelector('#brandHomeBtn')?.addEventListener('click', () => {
      store.navigateToUrl('brave://newtab');
    });

    // New Tab Button
    container.querySelector('#newTabBtn')?.addEventListener('click', () => {
      store.createTab();
    });

    // New Group Button
    container.querySelector('#newGroupBtn')?.addEventListener('click', () => {
      store.openTabGroupModal(null);
    });

    // Group Collapse Toggle
    container.querySelectorAll('[data-toggle-collapse]').forEach(header => {
      header.addEventListener('click', (e) => {
        if (e.target.closest('[data-group-menu]')) return;
        const groupId = header.dataset.toggleCollapse;
        store.toggleGroupCollapse(groupId);
      });
    });

    // Group Menu Trigger
    container.querySelectorAll('[data-group-menu]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const groupId = btn.dataset.groupMenu;
        openGroupMenu(groupId, btn);
      });
    });

    // Tab Clicks & Context Menu
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
    closeMenus();
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
        <span>Add Tab to New Group...</span>
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
                <span class="color-dot" style="background:${g.color};"></span>
                <span>${escapeHtml(g.name)}</span>
                ${g.id === tab.groupId ? `<span style="margin-left:auto;">✓</span>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${currentGroup ? `
        <div class="context-menu-item" id="ctxRemoveFromGroup">
          ${getIcon('x', '', 14)}
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
      closeMenus();
      store.openTabGroupModal(null);
      store.state.pendingTabForGroup = tabId;
    });

    menu.querySelectorAll('[data-move-to-group]').forEach(item => {
      item.addEventListener('click', () => {
        const groupId = item.dataset.moveToGroup;
        store.addTabToGroup(tabId, groupId);
        closeMenus();
      });
    });

    menu.querySelector('#ctxRemoveFromGroup')?.addEventListener('click', () => {
      store.removeTabFromGroup(tabId);
      closeMenus();
    });

    menu.querySelector('#ctxMoveIncognito')?.addEventListener('click', () => {
      store.moveTabToMode(tabId, 'incognito');
      closeMenus();
    });

    menu.querySelector('#ctxMoveSuperPvt')?.addEventListener('click', () => {
      store.moveTabToMode(tabId, 'super-pvt');
      closeMenus();
    });

    menu.querySelector('#ctxDuplicate')?.addEventListener('click', () => {
      store.duplicateTab(tabId);
      closeMenus();
    });

    menu.querySelector('#ctxPin')?.addEventListener('click', () => {
      store.togglePinTab(tabId);
      closeMenus();
    });

    menu.querySelector('#ctxClose')?.addEventListener('click', () => {
      store.closeTab(tabId);
      closeMenus();
    });
  }

  function openGroupMenu(groupId, anchorEl) {
    closeMenus();
    const group = store.getTabGroupById(groupId);
    if (!group) return;

    const popover = container.querySelector('#groupMenuPopover');
    if (!popover) return;

    const rect = anchorEl.getBoundingClientRect();

    popover.innerHTML = `
      <div class="group-popover-header" style="border-left: 3px solid ${group.color};">
        <span class="group-popover-title">${escapeHtml(group.name)}</span>
        <button class="popover-close-btn" id="popoverCloseBtn">${getIcon('close', '', 12)}</button>
      </div>

      <div class="group-popover-actions">
        <div class="group-popover-item" id="grpEditBtn">
          ${getIcon('edit', '', 14)}
          <span>Edit Group Name & Color...</span>
        </div>

        <div class="group-popover-item" id="grpNewTabBtn">
          ${getIcon('plus', '', 14)}
          <span>New Tab in this Group</span>
        </div>

        <div class="group-popover-item" id="grpToggleCollapseBtn">
          ${getIcon(group.collapsed ? 'chevron-down' : 'chevron-up', '', 14)}
          <span>${group.collapsed ? 'Expand Group' : 'Collapse Group'}</span>
        </div>

        <div class="group-popover-divider"></div>

        <div class="group-popover-item" id="grpUngroupBtn">
          ${getIcon('layers', '', 14)}
          <span>Ungroup All Tabs</span>
        </div>

        <div class="group-popover-item danger" id="grpCloseTabsBtn">
          ${getIcon('trash-2', '', 14)}
          <span>Close All Tabs in Group</span>
        </div>
      </div>
    `;

    popover.style.left = `${Math.min(rect.left, window.innerWidth - 220)}px`;
    popover.style.top = `${rect.bottom + 6}px`;
    popover.style.display = 'block';
    activeContextMenu = popover;

    // Popover Events
    popover.querySelector('#popoverCloseBtn')?.addEventListener('click', () => closeMenus());

    popover.querySelector('#grpEditBtn')?.addEventListener('click', () => {
      closeMenus();
      store.openTabGroupModal(groupId);
    });

    popover.querySelector('#grpNewTabBtn')?.addEventListener('click', () => {
      closeMenus();
      store.createTab('brave://newtab', 'New Tab', groupId);
    });

    popover.querySelector('#grpToggleCollapseBtn')?.addEventListener('click', () => {
      closeMenus();
      store.toggleGroupCollapse(groupId);
    });

    popover.querySelector('#grpUngroupBtn')?.addEventListener('click', () => {
      closeMenus();
      store.deleteTabGroup(groupId, false);
    });

    popover.querySelector('#grpCloseTabsBtn')?.addEventListener('click', () => {
      closeMenus();
      store.deleteTabGroup(groupId, true);
    });
  }

  function closeMenus() {
    if (activeContextMenu) {
      activeContextMenu.style.display = 'none';
      activeContextMenu = null;
    }
  }

  // Global listener to close context menus when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.tab-context-menu') && !e.target.closest('.group-menu-popover') && !e.target.closest('.group-menu-trigger-btn')) {
      closeMenus();
    }
  });

  // Subscribe to changes
  store.subscribe((state, event) => {
    if ([
      'TAB_CREATED',
      'TAB_SWITCHED',
      'TAB_CLOSED',
      'TAB_PINNED',
      'BROWSER_MODE_CHANGED',
      'TAB_GROUPS_UPDATED',
      'NAVIGATION_COMPLETE',
      'SESSION_NUKED'
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
