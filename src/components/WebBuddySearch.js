import { store } from '../state/store.js';
import { getIcon } from './Icons.js';
import { SEARCH_RESULTS_MOCK } from '../state/defaultData.js';

export function initWebBuddySearch(container) {
  function render() {
    const activeTab = store.getActiveTab();
    if (activeTab.type !== 'search') {
      container.style.display = 'none';
      return;
    }
    container.style.display = 'flex';

    // Extract query from URL
    let query = 'ad blocking';
    try {
      if (activeTab.url.includes('?q=')) {
        query = decodeURIComponent(activeTab.url.split('?q=')[1].split('&')[0]);
      } else {
        query = activeTab.title.replace(' - WebBuddy Search', '');
      }
    } catch {
      query = 'search';
    }

    const mockData = SEARCH_RESULTS_MOCK['default'];

    container.className = 'search-view-container';
    container.innerHTML = `
      <div class="search-view-header">
        <div class="search-logo-link" id="searchLogoHome">
          ${getIcon('webbuddy-logo', '', 28)}
          <span>WebBuddy <span style="font-weight:400; color:var(--text-secondary);">Search</span></span>
        </div>

        <form class="search-page-input-form" id="searchPageForm">
          <input type="text" class="search-page-input" id="searchPageInput" value="${escapeAttr(query)}" />
          <button type="submit" style="color:#00F2FE;">
            ${getIcon('search', '', 16)}
          </button>
        </form>
      </div>

      <div class="search-filter-tabs">
        <button class="search-filter-tab active">${getIcon('search', '', 12)} All Results</button>
        <button class="search-filter-tab">${getIcon('image', '', 12)} Images</button>
        <button class="search-filter-tab">${getIcon('video', '', 12)} Videos</button>
      </div>

      <div class="search-results-layout">
        <div class="search-results-main">
          <!-- Privacy Shield Active Notification -->
          <div style="display:flex; align-items:center; gap:8px; padding:10px 14px; background:rgba(0,242,254,0.06); border:1px solid rgba(0,242,254,0.2); border-radius:8px; font-size:12px; color:var(--text-secondary);">
            ${getIcon('shield-check', '', 16)}
            <span><strong>Tracker-Free Search:</strong> No search query logs, no profiling, and zero sponsored tracking pixels.</span>
          </div>

          <!-- Organic Search Results -->
          ${mockData.organicResults.map(res => `
            <div class="search-result-item">
              <div class="result-cite">
                ${getIcon('globe', '', 12)}
                <span>${escapeHtml(res.url)}</span>
              </div>
              <h3 class="result-title" data-visit-url="${escapeAttr(res.url)}">${escapeHtml(res.title)}</h3>
              <p class="result-snippet">${escapeHtml(res.snippet)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    setupEvents();
  }

  function setupEvents() {
    container.querySelector('#searchLogoHome')?.addEventListener('click', () => {
      store.navigateToUrl('brave://newtab');
    });

    const form = container.querySelector('#searchPageForm');
    const input = container.querySelector('#searchPageInput');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (val) {
        store.navigateToUrl(val);
      }
    });

    container.querySelectorAll('[data-visit-url]').forEach(el => {
      el.addEventListener('click', () => {
        const url = el.dataset.visitUrl;
        store.navigateToUrl(url);
      });
    });
  }

  store.subscribe((state, event) => {
    if (['TAB_SWITCHED', 'NAVIGATION_COMPLETE'].includes(event)) {
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
