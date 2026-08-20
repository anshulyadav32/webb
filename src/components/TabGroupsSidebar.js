import { store } from '../state/store.js';
import { getIcon } from './Icons.js';

export function initTabGroupsSidebar(container) {
  let editingGroupId = null;
  let dragTabId = null;

  function render() {
    const state = store.getState();
    const isOpen = state.isSidebarOpen;
    const mode = state.sidebarMode || 'groups'; // 'groups' | 'notes'
    const tabGroups = store.getTabGroups();
    const allModeTabs = store.getAllModeTabs();
    const activeGroupId = state.activeTabGroupId;
    const activeTab = store.getActiveTab();

    container.className = `unified-sidebar-drawer ${isOpen ? 'open' : ''}`;

    // Compute tab count per group
    const groupedTabsMap = {};
    const unGroupedTabs = [];

    allModeTabs.forEach(tab => {
      if (tab.groupId) {
        if (!groupedTabsMap[tab.groupId]) groupedTabsMap[tab.groupId] = [];
        groupedTabsMap[tab.groupId].push(tab);
      } else {
        unGroupedTabs.push(tab);
      }
    });

    if (mode === 'notes') {
      renderNotesMode(container, state);
      return;
    }

    // Tab Groups Mode
    container.innerHTML = `
      <!-- Sidebar Header -->
      <div class="sidebar-header-bar">
        <div class="sidebar-header-top-row">
          <div class="sidebar-title-badge">
            <div class="sidebar-title-icon">
              ${getIcon('safari-sidebar', '', 14)}
            </div>
            <span>Safari Tab Management</span>
          </div>

          <button class="sidebar-close-btn" id="closeSidebarBtn" title="Close Sidebar (Esc)">
            ${getIcon('close', '', 13)}
          </button>
        </div>

        <!-- Segmented Control: Tab Groups vs Notes -->
        <div class="sidebar-segmented-control">
          <button class="sidebar-segment-btn ${mode === 'groups' ? 'active' : ''}" id="switchModeGroupsBtn">
            ${getIcon('safari-tabs', '', 13)}
            <span>Tab Groups</span>
            <span class="sidebar-segment-count">${tabGroups.length}</span>
          </button>
          <button class="sidebar-segment-btn ${mode === 'notes' ? 'active' : ''}" id="switchModeNotesBtn">
            ${getIcon('file-text', '', 13)}
            <span>Notes</span>
            <span class="sidebar-segment-count">${state.notes.length}</span>
          </button>
        </div>
      </div>

      <!-- Tab Groups Body -->
      <div class="tab-groups-sidebar-body">
        
        <!-- Workspaces Section -->
        <div class="sidebar-section-header">
          <span>WORKSPACES</span>
          <button class="sidebar-quick-add-btn" id="sidebarQuickAddGroupBtn" title="New Empty Tab Group">
            ${getIcon('plus', '', 13)}
          </button>
        </div>

        <!-- All Open Tabs (Default Unfiltered View) -->
        <div 
          class="all-tabs-item-row ${!activeGroupId ? 'active' : ''}" 
          id="viewAllTabsRow" 
          data-drop-group="all"
          title="View all tabs in current window"
        >
          <div class="all-tabs-icon">
            ${getIcon('globe', '', 15)}
          </div>
          <span class="all-tabs-label">All Open Tabs</span>
          <span class="all-tabs-count-badge">${allModeTabs.length}</span>
        </div>

        <!-- Group Tree Section -->
        <div class="sidebar-section-header" style="margin-top: 4px;">
          <span>SAVED TAB GROUPS (${tabGroups.length})</span>
        </div>

        <div class="group-tree-container" id="groupTreeContainer">
          ${tabGroups.length === 0 ? `
            <div class="group-empty-dropzone">
              No custom tab groups yet.<br>Click "+ New Empty Tab Group" below or drag tabs here!
            </div>
          ` : tabGroups.map(group => {
            const tabsInGroup = groupedTabsMap[group.id] || [];
            const isActiveGroup = activeGroupId === group.id;
            const isEditing = editingGroupId === group.id;
            const isCollapsed = !!group.collapsed;

            return `
              <div 
                class="group-tree-card ${isActiveGroup ? 'active-workspace' : ''} ${isCollapsed ? 'collapsed' : ''}" 
                style="--group-color: ${group.color || '#00F2FE'}; --group-glow: ${group.color || '#00F2FE'}33;"
                data-group-card-id="${group.id}"
                data-drop-group="${group.id}"
              >
                <!-- Group Header -->
                <div class="group-tree-header" data-select-group="${group.id}">
                  <span class="group-collapse-icon" data-toggle-collapse="${group.id}" title="${isCollapsed ? 'Expand' : 'Collapse'}">
                    ${getIcon('chevron-down', '', 12)}
                  </span>
                  
                  <span class="group-color-dot-indicator" style="background: ${group.color || '#00F2FE'}; color: ${group.color || '#00F2FE'};"></span>
                  
                  ${isEditing ? `
                    <input 
                      type="text" 
                      class="group-rename-input" 
                      id="groupRenameInput-${group.id}" 
                      value="${escapeAttr(group.name)}" 
                      data-rename-group-id="${group.id}"
                    />
                  ` : `
                    <span class="group-title-text" title="Double click to rename (${escapeHtml(group.name)})">${escapeHtml(group.name)}</span>
                  `}

                  <span class="all-tabs-count-badge" style="background: rgba(255,255,255,0.08);">${tabsInGroup.length}</span>

                  <div class="group-header-actions">
                    <button class="group-tree-action-btn" data-add-tab-to-group="${group.id}" title="Add New Tab to this Group">
                      ${getIcon('plus', '', 11)}
                    </button>
                    <button class="group-tree-action-btn" data-edit-group-modal="${group.id}" title="Edit Group Color & Name">
                      ${getIcon('edit', '', 11)}
                    </button>
                    <button class="group-tree-action-btn delete-btn" data-delete-group-id="${group.id}" title="Delete Group">
                      ${getIcon('trash', '', 11)}
                    </button>
                  </div>
                </div>

                <!-- Nested Tabs List -->
                <div class="group-nested-tabs-list" data-nested-list-group="${group.id}">
                  ${tabsInGroup.length === 0 ? `
                    <div class="group-empty-dropzone">
                      Empty group. Drag tabs here or click "+" to add.
                    </div>
                  ` : tabsInGroup.map(tab => {
                    const isTabActive = activeTab && activeTab.id === tab.id;
                    return `
                      <div 
                        class="group-nested-tab-item ${isTabActive ? 'active-tab' : ''}" 
                        data-tab-id="${tab.id}"
                        draggable="true"
                        title="${escapeAttr(tab.title)} (${escapeAttr(tab.url)})"
                      >
                        <span class="nested-tab-favicon">
                          ${getIcon(tab.favicon || 'globe', '', 13)}
                        </span>
                        <span class="nested-tab-title">${escapeHtml(tab.title)}</span>
                        <button class="nested-tab-close-btn" data-close-nested-tab="${tab.id}" title="Close Tab">
                          ${getIcon('close', '', 10)}
                        </button>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Ungrouped Tabs Section (if any exist when a group is active) -->
        ${unGroupedTabs.length > 0 ? `
          <div class="sidebar-section-header" style="margin-top: 6px;">
            <span>UNGROUPED TABS (${unGroupedTabs.length})</span>
          </div>
          <div class="group-tree-card" style="--group-color: #64748B;" data-drop-group="ungrouped">
            <div class="group-nested-tabs-list" style="padding-left: 8px;">
              ${unGroupedTabs.map(tab => {
                const isTabActive = activeTab && activeTab.id === tab.id;
                return `
                  <div 
                    class="group-nested-tab-item ${isTabActive ? 'active-tab' : ''}" 
                    data-tab-id="${tab.id}"
                    draggable="true"
                    title="${escapeAttr(tab.title)}"
                  >
                    <span class="nested-tab-favicon">
                      ${getIcon(tab.favicon || 'globe', '', 13)}
                    </span>
                    <span class="nested-tab-title">${escapeHtml(tab.title)}</span>
                    <button class="nested-tab-close-btn" data-close-nested-tab="${tab.id}" title="Close Tab">
                      ${getIcon('close', '', 10)}
                    </button>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        ` : ''}

      </div>

      <!-- Sidebar Bottom Action Buttons -->
      <div class="tab-groups-sidebar-footer">
        <button class="sidebar-footer-btn primary" id="sidebarNewEmptyGroupBtn">
          ${getIcon('plus', '', 14)}
          <span>New Empty Tab Group</span>
        </button>
        <button class="sidebar-footer-btn secondary" id="sidebarGroupCurrentTabsBtn" title="Group all current open tabs into a new workspace">
          ${getIcon('tab-group', '', 13)}
          <span>Group Current Tabs (${allModeTabs.length})</span>
        </button>
      </div>
    `;

    setupTabGroupsEvents();
  }

  function renderNotesMode(cnt, state) {
    const capacity = store.getNotesCapacityStats();
    cnt.innerHTML = `
      <div class="sidebar-header-bar">
        <div class="sidebar-header-top-row">
          <div class="sidebar-title-badge">
            <div class="sidebar-title-icon" style="background: linear-gradient(135deg, #FF5858 0%, #F59E0B 100%); color:#fff;">
              ${getIcon('file-text', '', 14)}
            </div>
            <span>Quick Notes & Clippings</span>
          </div>

          <button class="sidebar-close-btn" id="closeSidebarBtn" title="Close Sidebar (Esc)">
            ${getIcon('close', '', 13)}
          </button>
        </div>

        <div class="sidebar-segmented-control">
          <button class="sidebar-segment-btn" id="switchModeGroupsBtn">
            ${getIcon('safari-tabs', '', 13)}
            <span>Tab Groups</span>
            <span class="sidebar-segment-count">${store.getTabGroups().length}</span>
          </button>
          <button class="sidebar-segment-btn active" id="switchModeNotesBtn">
            ${getIcon('file-text', '', 13)}
            <span>Notes</span>
            <span class="sidebar-segment-count">${state.notes.length}</span>
          </button>
        </div>
      </div>

      <div class="notes-toolbar" style="padding: 10px 12px; display:flex; flex-direction:column; gap:8px;">
        <div class="notes-actions-row" style="display:flex; gap:8px;">
          <button class="sidebar-footer-btn primary" id="createNewNoteBtn" style="height:30px; font-size:11.5px;">
            ${getIcon('plus', '', 12)}
            <span>New Note</span>
          </button>
          <button class="sidebar-footer-btn secondary" id="clipCurrentPageBtn" style="height:30px; font-size:11.5px;" title="Clip current tab URL & title">
            ${getIcon('link', '', 12)}
            <span>Clip Tab</span>
          </button>
        </div>
      </div>

      <div class="notes-list-container" style="flex:1; overflow-y:auto; padding:8px 12px; display:flex; flex-direction:column; gap:8px;">
        ${state.notes.length === 0 ? `
          <div style="text-align:center; padding:30px 10px; color:var(--text-muted); font-size:12px;">
            No notes saved yet. Click "+ New Note" to create one!
          </div>
        ` : state.notes.map(note => `
          <div class="note-card ${note.id === state.activeNoteId ? 'active' : ''}" data-note-id="${note.id}">
            <div class="note-card-top" style="display:flex; justify-content:space-between; align-items:center;">
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="note-color-dot" style="background:${note.color || '#00F2FE'}; width:7px; height:7px; border-radius:50%;"></span>
                <span class="note-card-title" style="font-size:12.5px; font-weight:700; color:#fff;">${escapeHtml(note.title)}</span>
              </div>
              <button class="sidebar-close-btn" style="width:18px; height:18px;" data-delete-note="${note.id}" title="Delete Note">
                ${getIcon('trash', '', 11)}
              </button>
            </div>
            <div class="note-card-snippet" style="font-size:11px; color:var(--text-secondary); line-height:1.4; margin-top:4px;">
              ${escapeHtml(note.content || 'Empty note...')}
            </div>
            <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--text-muted); margin-top:4px;">
              <span>${note.updatedAt || note.createdAt}</span>
              ${note.url ? `<span style="color:#00F2FE;">🔗 Attached Link</span>` : ''}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="tab-groups-sidebar-footer" style="padding:10px 12px;">
        <div style="display:flex; justify-content:space-between; font-size:10.5px; color:var(--text-secondary);">
          <span>${capacity.notesCount} / ${capacity.maxNotesLimit} saved notes</span>
          <span style="color:#00F2FE;">${capacity.usedKb} KB</span>
        </div>
      </div>
    `;

    setupNotesEvents();
  }

  function setupTabGroupsEvents() {
    // Close sidebar
    container.querySelector('#closeSidebarBtn')?.addEventListener('click', () => {
      store.toggleSidebar(false);
    });

    // Switch to Notes mode
    container.querySelector('#switchModeNotesBtn')?.addEventListener('click', () => {
      store.setSidebarMode('notes');
    });

    // Switch to All Tabs view
    container.querySelector('#viewAllTabsRow')?.addEventListener('click', () => {
      store.setActiveTabGroup(null);
    });

    // New Empty Tab Group
    const newEmptyHandler = () => {
      const groupCount = store.getTabGroups().length + 1;
      const defaultColors = ['#00F2FE', '#7F00FF', '#10B981', '#F59E0B', '#EF4444', '#EC4899', '#38BDF8'];
      const color = defaultColors[groupCount % defaultColors.length];
      store.createEmptyTabGroup(`Group ${groupCount}`, color);
    };

    container.querySelector('#sidebarNewEmptyGroupBtn')?.addEventListener('click', newEmptyHandler);
    container.querySelector('#sidebarQuickAddGroupBtn')?.addEventListener('click', newEmptyHandler);

    // Group Current Tabs
    container.querySelector('#sidebarGroupCurrentTabsBtn')?.addEventListener('click', () => {
      const groupCount = store.getTabGroups().length + 1;
      store.createTabGroupFromOpenTabs(`Workspace ${groupCount}`, '#00F2FE');
    });

    // Select Tab Group
    container.querySelectorAll('[data-select-group]').forEach(header => {
      header.addEventListener('click', (e) => {
        if (e.target.closest('[data-toggle-collapse]') || e.target.closest('.group-header-actions') || e.target.tagName === 'INPUT') {
          return;
        }
        const groupId = header.dataset.selectGroup;
        store.setActiveTabGroup(groupId);
      });
    });

    // Double click to rename group inline
    container.querySelectorAll('.group-title-text').forEach(titleSpan => {
      titleSpan.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        const card = titleSpan.closest('[data-group-card-id]');
        if (card) {
          editingGroupId = card.dataset.groupCardId;
          render();
          const input = container.querySelector(`[data-rename-group-id="${editingGroupId}"]`);
          if (input) {
            input.focus();
            input.select();
          }
        }
      });
    });

    // Rename input submit / blur
    container.querySelectorAll('.group-rename-input').forEach(input => {
      const commitRename = () => {
        const id = input.dataset.renameGroupId;
        const val = input.value.trim();
        if (val) {
          store.renameTabGroup(id, val);
        }
        editingGroupId = null;
        render();
      };

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') commitRename();
        if (e.key === 'Escape') {
          editingGroupId = null;
          render();
        }
      });

      input.addEventListener('blur', commitRename);
    });

    // Toggle Collapse
    container.querySelectorAll('[data-toggle-collapse]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const groupId = btn.dataset.toggleCollapse;
        store.toggleGroupCollapse(groupId);
      });
    });

    // Add Tab to specific group
    container.querySelectorAll('[data-add-tab-to-group]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const groupId = btn.dataset.addTabToGroup;
        store.setActiveTabGroup(groupId);
        store.createTab('brave://newtab', 'New Tab', groupId);
      });
    });

    // Edit Group Modal
    container.querySelectorAll('[data-edit-group-modal]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const groupId = btn.dataset.editGroupModal;
        store.openTabGroupModal(groupId);
      });
    });

    // Delete Group
    container.querySelectorAll('[data-delete-group-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const groupId = btn.dataset.deleteGroupId;
        store.deleteTabGroup(groupId, false);
      });
    });

    // Switch Tab from nested list
    container.querySelectorAll('.group-nested-tab-item').forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target.closest('[data-close-nested-tab]')) return;
        const tabId = item.dataset.tabId;
        store.switchTab(tabId);
      });

      // HTML5 Drag and Drop from Sidebar
      item.addEventListener('dragstart', (e) => {
        dragTabId = item.dataset.tabId;
        e.dataTransfer.setData('text/plain', dragTabId);
        e.dataTransfer.effectAllowed = 'move';
        item.style.opacity = '0.5';
      });

      item.addEventListener('dragend', () => {
        item.style.opacity = '1';
        dragTabId = null;
      });
    });

    // Close Nested Tab
    container.querySelectorAll('[data-close-nested-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tabId = btn.dataset.closeNestedTab;
        store.closeTab(tabId);
      });
    });

    // Dropzones for Group Cards & All Tabs
    container.querySelectorAll('[data-drop-group]').forEach(zone => {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        zone.classList.add('drag-over');
      });

      zone.addEventListener('dragleave', () => {
        zone.classList.remove('drag-over');
      });

      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        const tabId = e.dataTransfer.getData('text/plain') || dragTabId;
        const targetGroup = zone.dataset.dropGroup;

        if (tabId) {
          const targetGroupId = (targetGroup === 'all' || targetGroup === 'ungrouped') ? null : targetGroup;
          store.moveTabToGroup(tabId, targetGroupId);
        }
      });
    });
  }

  function setupNotesEvents() {
    container.querySelector('#closeSidebarBtn')?.addEventListener('click', () => {
      store.toggleSidebar(false);
    });

    container.querySelector('#switchModeGroupsBtn')?.addEventListener('click', () => {
      store.setSidebarMode('groups');
    });

    container.querySelector('#createNewNoteBtn')?.addEventListener('click', () => {
      store.addNote('New Note', '');
    });

    container.querySelector('#clipCurrentPageBtn')?.addEventListener('click', () => {
      const activeTab = store.getActiveTab();
      const title = activeTab.type === 'web' ? `Clip: ${activeTab.title}` : 'Page Note';
      const url = activeTab.type === 'web' ? activeTab.url : '';
      store.addNote(title, `Captured from: ${url}\n\nKey notes:\n- `, url);
    });

    container.querySelectorAll('[data-delete-note]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.deleteNote;
        store.deleteNote(id);
      });
    });

    container.querySelectorAll('.note-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('[data-delete-note]')) return;
        const noteId = card.dataset.noteId;
        store.selectNote(noteId);
      });
    });
  }

  // Outside click handler to dismiss sidebar
  document.addEventListener('pointerdown', (e) => {
    const state = store.getState();
    if (!state.isSidebarOpen) return;

    const isInside = container.contains(e.target);
    const isTopToggle = e.target.closest('#topBarSidebarToggleBtn');
    const isNavToggle = e.target.closest('#notesSidebarToggleBtn');
    const isGroupModal = e.target.closest('#tabGroupModalContainer');

    if (!isInside && !isTopToggle && !isNavToggle && !isGroupModal) {
      store.toggleSidebar(false);
    }
  });

  // Store Event Subscriptions
  store.subscribe((state, event) => {
    const relevantEvents = [
      'SIDEBAR_TOGGLED',
      'NOTES_SIDEBAR_TOGGLED',
      'TAB_GROUPS_UPDATED',
      'TAB_CREATED',
      'TAB_CLOSED',
      'TAB_SWITCHED',
      'TAB_MOVED_GROUP',
      'TABS_REORDERED',
      'TAB_PINNED',
      'NOTE_ADDED',
      'NOTE_DELETED',
      'NOTE_SELECTED',
      'BROWSER_MODE_CHANGED'
    ];

    if (relevantEvents.includes(event)) {
      render();
    }
  });

  render();
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  if (!str) return '';
  return String(str).replace(/"/g, '&quot;');
}
