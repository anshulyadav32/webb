import { store } from '../state/store.js';
import { getIcon } from './Icons.js';

export function initAddShortcutModal(container) {
  function render() {
    const state = store.getState();
    if (state.activeModal !== 'addShortcut') {
      container.innerHTML = '';
      return;
    }

    container.innerHTML = `
      <div class="modal-overlay" id="addShortcutOverlay">
        <div class="center-modal" style="max-width: 420px;">
          <div class="modal-header">
            <div class="modal-title">
              ${getIcon('plus', '', 18)}
              <span>Add Top Site Shortcut</span>
            </div>
            <button class="modal-close-btn" id="closeAddShortcutBtn">
              ${getIcon('close', '', 14)}
            </button>
          </div>

          <form class="modal-body" id="addShortcutForm">
            <div class="form-group">
              <label class="form-label">Name</label>
              <input type="text" class="form-input" id="shortcutNameInput" placeholder="e.g. Hacker News, GitHub" required />
            </div>

            <div class="form-group">
              <label class="form-label">URL Address</label>
              <input type="text" class="form-input" id="shortcutUrlInput" placeholder="https://example.com" required />
            </div>

            <button type="submit" class="modal-submit-btn">
              Add to Top Sites
            </button>
          </form>
        </div>
      </div>
    `;

    setupEvents();
  }

  function setupEvents() {
    const overlay = container.querySelector('#addShortcutOverlay');
    if (!overlay) return;

    overlay.querySelector('#closeAddShortcutBtn')?.addEventListener('click', () => {
      store.closeModal();
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        store.closeModal();
      }
    });

    const form = overlay.querySelector('#addShortcutForm');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = overlay.querySelector('#shortcutNameInput').value.trim();
      const url = overlay.querySelector('#shortcutUrlInput').value.trim();
      if (name && url) {
        store.addTopSite(name, url);
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
