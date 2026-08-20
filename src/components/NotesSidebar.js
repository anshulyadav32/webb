import { store } from '../state/store.js';
import { getIcon } from './Icons.js';

export function initNotesSidebar(container) {
  let searchQuery = '';
  let viewMode = 'list'; // 'list' | 'editor'

  function render() {
    const state = store.getState();
    const isOpen = state.isNotesSidebarOpen;
    const capacity = store.getNotesCapacityStats();
    const activeNote = state.notes.find(n => n.id === state.activeNoteId) || state.notes[0];

    container.className = `notes-sidebar ${isOpen ? 'open' : ''}`;

    // Filter notes
    const filteredNotes = state.notes.filter(n => {
      const q = searchQuery.toLowerCase();
      return n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q);
    });

    container.innerHTML = `
      <!-- Notes Header -->
      <div class="notes-header">
        <div class="notes-brand">
          <div class="notes-badge-icon">
            ${getIcon('file-text', '', 16)}
          </div>
          <div class="notes-title-box">
            <span class="notes-title">Quick Notes</span>
            <span class="notes-sub">${state.notes.length} saved notes</span>
          </div>
        </div>

        <button class="action-icon-btn" id="closeNotesSidebarBtn" title="Close Notes Sidebar">
          ${getIcon('close', '', 14)}
        </button>
      </div>

      <!-- Notes Toolbar & Actions -->
      <div class="notes-toolbar">
        <div class="notes-actions-row">
          <button class="new-note-btn" id="createNewNoteBtn">
            ${getIcon('plus', '', 13)}
            <span>New Note</span>
          </button>
          <button class="clip-page-btn" id="clipCurrentPageBtn" title="Save current webpage link & title">
            ${getIcon('link', '', 13)}
            <span>Clip Page</span>
          </button>
        </div>

        <input 
          type="text" 
          class="notes-search-input" 
          id="notesSearchInput" 
          placeholder="Search saved notes..." 
          value="${escapeAttr(searchQuery)}"
        />
      </div>

      <!-- Main Content: List or Editor -->
      ${viewMode === 'list' ? `
        <div class="notes-list-container">
          ${filteredNotes.length === 0 ? `
            <div style="text-align:center; padding:30px 10px; color:var(--text-muted); font-size:12px;">
              ${searchQuery ? 'No matching notes found.' : 'No notes saved yet. Click "+ New Note" to create one!'}
            </div>
          ` : filteredNotes.map(note => `
            <div class="note-card ${note.id === state.activeNoteId ? 'active' : ''}" data-note-id="${note.id}">
              <div class="note-card-top">
                <div style="display:flex; align-items:center; gap:6px;">
                  <span class="note-color-dot" style="background:${note.color || '#00F2FE'};"></span>
                  <span class="note-card-title">${escapeHtml(note.title)}</span>
                </div>
                <div style="display:flex; align-items:center; gap:4px;">
                  <button class="action-icon-btn" style="width:20px; height:20px;" data-pin-note="${note.id}" title="${note.pinned ? 'Unpin' : 'Pin to top'}">
                    ${getIcon('pin', note.pinned ? 'note-pin-indicator' : '', 12)}
                  </button>
                  <button class="action-icon-btn" style="width:20px; height:20px; color:var(--text-muted);" data-delete-note="${note.id}" title="Delete Note">
                    ${getIcon('trash', '', 12)}
                  </button>
                </div>
              </div>

              <div class="note-card-snippet">
                ${escapeHtml(note.content || 'Empty note...')}
              </div>

              <div class="note-card-meta">
                <span>${note.updatedAt || note.createdAt}</span>
                ${note.url ? `<span style="color:#00F2FE; display:flex; align-items:center; gap:2px;">${getIcon('link', '', 10)} Attached Link</span>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <!-- Note Editor View -->
        <div class="note-editor-view">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <button id="backToListBtn" style="font-size:11.5px; color:#00F2FE; font-weight:600; cursor:pointer;">
              ← Back to Notes List
            </button>
            <div style="display:flex; gap:6px;">
              ${['#00F2FE', '#7F00FF', '#10B981', '#FF5858', '#FFBD2E'].map(col => `
                <span class="color-picker-dot" data-set-color="${col}" style="width:12px; height:12px; border-radius:50%; background:${col}; cursor:pointer; border:1px solid ${activeNote && activeNote.color === col ? '#fff' : 'transparent'};"></span>
              `).join('')}
            </div>
          </div>

          <input 
            type="text" 
            class="editor-title-input" 
            id="editorTitleInput" 
            placeholder="Note title..." 
            value="${escapeAttr(activeNote ? activeNote.title : '')}" 
          />

          ${activeNote && activeNote.url ? `
            <div style="font-size:11px; color:var(--text-secondary); display:flex; align-items:center; gap:6px; background:rgba(255,255,255,0.04); padding:6px 10px; border-radius:6px;">
              ${getIcon('link', '', 12)}
              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:260px;">${escapeHtml(activeNote.url)}</span>
              <button id="openAttachedUrlBtn" style="margin-left:auto; color:#00F2FE; font-weight:600;">Open →</button>
            </div>
          ` : ''}

          <textarea 
            class="editor-textarea" 
            id="editorContentInput" 
            placeholder="Type your notes, ideas, code snippets, or research here..."
          >${escapeHtml(activeNote ? activeNote.content : '')}</textarea>

          <div class="editor-actions-bottom">
            <span style="font-size:10.5px; color:var(--text-muted);">Auto-saved locally</span>
            <button class="action-icon-btn" id="deleteCurrentNoteBtn" title="Delete Note" style="color:#FF5858;">
              ${getIcon('trash', '', 14)}
            </button>
          </div>
        </div>
      `}

      <!-- Save Capacity Storage Footer -->
      <div class="notes-capacity-footer">
        <div class="capacity-header-row">
          <span style="display:flex; align-items:center; gap:5px; color:var(--text-secondary);">
            ${getIcon('hard-drive', '', 12)} Save Capacity
          </span>
          <span style="color:#00F2FE; font-family:'JetBrains Mono'; font-size:10.5px;">
            ${capacity.usedKb} KB / ${capacity.maxMb}.0 MB (${capacity.percentUsed}%)
          </span>
        </div>

        <div class="capacity-progress-track">
          <div class="capacity-progress-fill" style="width: ${Math.max(1, capacity.percentUsed)}%;"></div>
        </div>

        <div class="capacity-subtext">
          <span>${capacity.notesCount} / ${capacity.maxNotesLimit} max notes</span>
          <span class="export-notes-link" id="exportNotesBtn" title="Download backup of all saved notes">
            ${getIcon('download', '', 11)} Export Backup
          </span>
        </div>
      </div>
    `;

    setupEvents();
  }

  function setupEvents() {
    // Close sidebar
    container.querySelector('#closeNotesSidebarBtn')?.addEventListener('click', () => {
      store.toggleNotesSidebar(false);
    });

    // Create Note
    container.querySelector('#createNewNoteBtn')?.addEventListener('click', () => {
      const newNote = store.addNote('New Note', '');
      viewMode = 'editor';
      render();
      setTimeout(() => {
        const input = container.querySelector('#editorTitleInput');
        if (input) {
          input.focus();
          input.select();
        }
      }, 50);
    });

    // Clip Current Page
    container.querySelector('#clipCurrentPageBtn')?.addEventListener('click', () => {
      const activeTab = store.getActiveTab();
      const title = activeTab.type === 'web' ? `Clip: ${activeTab.title}` : 'Page Note';
      const url = activeTab.type === 'web' ? activeTab.url : '';
      const content = `Captured from: ${url}\n\nKey takeaways:\n- `;
      store.addNote(title, content, url);
      showToast('📎 Webpage clipped to your Notes!');
      viewMode = 'list';
      render();
    });

    // Search Input
    const searchInput = container.querySelector('#notesSearchInput');
    searchInput?.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      render();
    });

    // Note Card Click -> Open Editor
    container.querySelectorAll('.note-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('[data-pin-note]') || e.target.closest('[data-delete-note]')) return;
        const noteId = card.dataset.noteId;
        store.selectNote(noteId);
        viewMode = 'editor';
        render();
      });
    });

    // Pin Note
    container.querySelectorAll('[data-pin-note]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.pinNote;
        store.togglePinNote(id);
      });
    });

    // Delete Note
    container.querySelectorAll('[data-delete-note]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.deleteNote;
        store.deleteNote(id);
      });
    });

    // Back to List
    container.querySelector('#backToListBtn')?.addEventListener('click', () => {
      viewMode = 'list';
      render();
    });

    // Editor Inputs auto-save
    const titleInput = container.querySelector('#editorTitleInput');
    const contentInput = container.querySelector('#editorContentInput');
    const activeNoteId = store.getState().activeNoteId;

    titleInput?.addEventListener('input', () => {
      store.updateNote(activeNoteId, { title: titleInput.value });
    });

    contentInput?.addEventListener('input', () => {
      store.updateNote(activeNoteId, { content: contentInput.value });
    });

    // Color Pickers
    container.querySelectorAll('[data-set-color]').forEach(dot => {
      dot.addEventListener('click', () => {
        const col = dot.dataset.setColor;
        store.updateNote(activeNoteId, { color: col });
        render();
      });
    });

    // Open attached URL
    container.querySelector('#openAttachedUrlBtn')?.addEventListener('click', () => {
      const note = store.getState().notes.find(n => n.id === activeNoteId);
      if (note && note.url) {
        store.navigateToUrl(note.url);
      }
    });

    // Delete in editor
    container.querySelector('#deleteCurrentNoteBtn')?.addEventListener('click', () => {
      store.deleteNote(activeNoteId);
      viewMode = 'list';
      render();
    });

    // Export Notes JSON
    container.querySelector('#exportNotesBtn')?.addEventListener('click', () => {
      store.exportNotesJson();
      showToast('📥 Notes backup exported successfully!');
    });
  }

  store.subscribe((state, event) => {
    if (['NOTES_SIDEBAR_TOGGLED', 'NOTE_ADDED', 'NOTE_UPDATED', 'NOTE_DELETED', 'NOTE_SELECTED'].includes(event)) {
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
