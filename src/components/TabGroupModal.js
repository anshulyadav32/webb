import { store } from '../state/store.js';
import { getIcon } from './Icons.js';

const GROUP_COLORS = [
  { name: 'Cyan Glow', hex: '#00F2FE' },
  { name: 'Electric Violet', hex: '#7F00FF' },
  { name: 'Emerald Green', hex: '#10B981' },
  { name: 'Amber Gold', hex: '#F59E0B' },
  { name: 'Ruby Crimson', hex: '#EF4444' },
  { name: 'Hot Pink', hex: '#EC4899' },
  { name: 'Deep Sky', hex: '#38BDF8' },
  { name: 'Purple Lavender', hex: '#A855F7' }
];

export function initTabGroupModal(container) {
  let selectedColor = '#00F2FE';

  function render() {
    const state = store.getState();
    if (state.activeModal !== 'tabGroup') {
      container.style.display = 'none';
      return;
    }
    container.style.display = 'flex';

    const isEditing = !!state.activeGroupEditing;
    const group = isEditing ? store.getTabGroupById(state.activeGroupEditing) : null;
    const initialName = group ? group.name : 'Research 🔬';
    selectedColor = group ? group.color : '#00F2FE';

    container.className = 'modal-backdrop';
    container.innerHTML = `
      <div class="modal-card" style="max-width: 480px; width: 100%;">
        <div class="modal-header">
          <div class="modal-title-row">
            <span class="modal-icon" style="background: rgba(0, 242, 254, 0.15); color: #00F2FE;">
              ${getIcon('tab-group', '', 20)}
            </span>
            <div>
              <h2 class="modal-title">${isEditing ? 'Edit Tab Group' : 'Create New Tab Group'}</h2>
              <p class="modal-subtitle">Organize and color-code your tabs for maximum focus</p>
            </div>
          </div>
          <button class="modal-close-btn" id="closeGroupModalBtn">${getIcon('close', '', 14)}</button>
        </div>

        <form id="tabGroupForm" class="modal-body" style="gap: 18px;">
          <!-- Group Name Field -->
          <div class="form-group">
            <label class="form-label">Tab Group Name</label>
            <input 
              type="text" 
              class="form-input" 
              id="groupNameInput" 
              placeholder="e.g., Work 💼, Privacy 🛡️, Shopping 🛍️" 
              value="${escapeAttr(initialName)}" 
              required
              autofocus
            />
          </div>

          <!-- Color Palette Picker -->
          <div class="form-group">
            <label class="form-label">Group Color Accent</label>
            <div class="group-color-picker-grid">
              ${GROUP_COLORS.map(c => `
                <div 
                  class="color-swatch-item ${c.hex.toLowerCase() === selectedColor.toLowerCase() ? 'active' : ''}" 
                  data-color-hex="${c.hex}" 
                  style="background:${c.hex};"
                  title="${c.name}"
                >
                  ${c.hex.toLowerCase() === selectedColor.toLowerCase() ? getIcon('check', '', 14) : ''}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Group Preview Pill -->
          <div class="form-group">
            <label class="form-label">Live Appearance Preview</label>
            <div class="group-preview-box">
              <div class="tab-group-header-pill preview-pill" id="groupPreviewPill" style="border-color:${selectedColor}; background:rgba(255,255,255,0.05); color:#fff; display:inline-flex; align-items:center; gap:8px; padding:5px 14px; border-radius:14px; font-size:12px; font-weight:700;">
                <span class="group-dot" id="previewDot" style="width:8px; height:8px; border-radius:50%; background:${selectedColor}; box-shadow:0 0 8px ${selectedColor};"></span>
                <span id="previewName">${escapeHtml(initialName)}</span>
                <span style="opacity:0.6; font-size:10px; background:rgba(255,255,255,0.1); padding:1px 6px; border-radius:10px;">3 tabs</span>
              </div>
            </div>
          </div>

          <div class="modal-footer" style="padding:0; margin-top:8px; justify-content: ${isEditing ? 'space-between' : 'flex-end'};">
            ${isEditing ? `
              <button type="button" class="modal-btn" id="deleteGroupFromModalBtn" style="background:rgba(239,68,68,0.2); border:1px solid rgba(239,68,68,0.4); color:#EF4444;">
                ${getIcon('trash-2', '', 14)}
                <span>Delete Group</span>
              </button>
            ` : ''}

            <div style="display:flex; gap:10px;">
              <button type="button" class="modal-btn secondary" id="cancelGroupModalBtn">Cancel</button>
              <button type="submit" class="modal-btn primary" style="background: linear-gradient(135deg, #00F2FE 0%, #7F00FF 100%); color:#000; font-weight:700;">
                ${getIcon('check', '', 14)}
                <span>${isEditing ? 'Save Group' : 'Create Group'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    `;

    setupEvents(isEditing, group);
  }

  function setupEvents(isEditing, group) {
    const form = container.querySelector('#tabGroupForm');
    const nameInput = container.querySelector('#groupNameInput');
    const previewName = container.querySelector('#previewName');
    const previewDot = container.querySelector('#previewDot');
    const previewPill = container.querySelector('#groupPreviewPill');

    // Live typing preview
    nameInput?.addEventListener('input', () => {
      const val = nameInput.value.trim() || 'New Group';
      if (previewName) previewName.textContent = val;
    });

    // Swatch clicks
    container.querySelectorAll('[data-color-hex]').forEach(swatch => {
      swatch.addEventListener('click', () => {
        selectedColor = swatch.dataset.colorHex;
        container.querySelectorAll('[data-color-hex]').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        if (previewDot) {
          previewDot.style.background = selectedColor;
          previewDot.style.boxShadow = `0 0 8px ${selectedColor}`;
        }
        if (previewPill) {
          previewPill.style.borderColor = selectedColor;
        }
      });
    });

    // Form Submit
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = nameInput.value.trim() || 'New Group';

      if (isEditing && group) {
        store.updateTabGroup(group.id, { name, color: selectedColor });
        showToast(`🏷️ Tab group "${name}" updated!`);
      } else {
        const pendingTabId = store.state.pendingTabForGroup || null;
        store.createTabGroup(name, selectedColor, pendingTabId);
        store.state.pendingTabForGroup = null;
        showToast(`📁 Created tab group "${name}"!`);
      }

      store.closeModal();
    });

    // Delete group
    container.querySelector('#deleteGroupFromModalBtn')?.addEventListener('click', () => {
      if (group) {
        store.deleteTabGroup(group.id, false);
        showToast(`🗑️ Ungrouped "${group.name}"`);
        store.closeModal();
      }
    });

    container.querySelector('#closeGroupModalBtn')?.addEventListener('click', () => store.closeModal());
    container.querySelector('#cancelGroupModalBtn')?.addEventListener('click', () => store.closeModal());

    container.addEventListener('click', (e) => {
      if (e.target === container) {
        store.closeModal();
      }
    });
  }

  store.subscribe((state, event) => {
    if (['MODAL_CHANGED'].includes(event)) {
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
