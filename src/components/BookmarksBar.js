import { store } from '../state/store.js';
import { getIcon } from './Icons.js';

export function initBookmarksBar(container) {
  function render() {
    const state = store.getState();
    if (!state.settings.bookmarksBarVisible) {
      container.style.display = 'none';
      return;
    }
    container.style.display = 'flex';

    container.innerHTML = `
      <div class="bookmarks-bar">
        ${state.bookmarks.map(bm => `
          <button class="bookmark-item" data-url="${escapeAttr(bm.url)}" title="${escapeAttr(bm.title)} (${escapeAttr(bm.url)})">
            ${getIcon(bm.icon || 'globe', '', 12)}
            <span>${escapeHtml(bm.title)}</span>
          </button>
        `).join('')}
      </div>
    `;

    container.querySelectorAll('.bookmark-item').forEach(el => {
      el.addEventListener('click', () => {
        const url = el.dataset.url;
        store.navigateToUrl(url);
      });
    });
  }

  store.subscribe((state, event) => {
    if (['BOOKMARKS_UPDATED', 'SETTINGS_UPDATED'].includes(event)) {
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
