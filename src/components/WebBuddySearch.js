import { store } from '../state/store.js';
import { getIcon } from './Icons.js';
import { generateRealisticSearchResults } from '../state/searchEngineService.js';

export function initWebBuddySearch(container) {
  let openFaqIndex = null;
  let activeFilterTab = 'all';

  function render() {
    const activeTab = store.getActiveTab();
    if (activeTab.type !== 'search') {
      container.style.display = 'none';
      return;
    }
    container.style.display = 'flex';

    // Extract query from URL
    let query = 'artificial intelligence';
    try {
      if (activeTab.url.includes('?q=')) {
        query = decodeURIComponent(activeTab.url.split('?q=')[1].split('&')[0]);
      } else if (activeTab.url.includes('search?')) {
        const parsed = new URLSearchParams(activeTab.url.split('?')[1] || '');
        query = parsed.get('q') || parsed.get('query') || parsed.get('search') || 'search';
      } else {
        query = activeTab.title.replace(' - WebBuddy Search', '').replace(' - Search', '');
      }
    } catch {
      query = 'search';
    }

    const defaultEngine = store.getDefaultSearchEngine();
    const serpData = generateRealisticSearchResults(query, defaultEngine.id);

    container.className = 'search-view-container';
    container.innerHTML = `
      <!-- Search View Header -->
      <div class="search-view-header">
        <div class="search-logo-link" id="searchLogoHome" title="WebBuddy Home">
          ${getIcon('webbuddy-logo', '', 28)}
          <span>WebBuddy <span style="font-weight:400; color:var(--text-secondary);">Search</span></span>
        </div>

        <form class="search-page-input-form" id="searchPageForm">
          <input type="text" class="search-page-input" id="searchPageInput" value="${escapeAttr(query)}" autofocus />
          <button type="submit" style="color:#00F2FE;" title="Search">
            ${getIcon('search', '', 16)}
          </button>
        </form>

        <div class="search-header-meta">
          <div class="search-engine-tag" id="switchSearchEngineBtn" title="Default Engine: ${escapeAttr(defaultEngine.name)} (Click to configure)">
            ${getIcon(defaultEngine.icon || 'search', '', 14)}
            <span>${escapeHtml(defaultEngine.name)}</span>
          </div>
        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="search-filter-tabs">
        <button class="search-filter-tab ${activeFilterTab === 'all' ? 'active' : ''}" data-filter="all">
          ${getIcon('search', '', 13)} All Results
        </button>
        <button class="search-filter-tab ${activeFilterTab === 'images' ? 'active' : ''}" data-filter="images">
          ${getIcon('image', '', 13)} Images
        </button>
        <button class="search-filter-tab ${activeFilterTab === 'videos' ? 'active' : ''}" data-filter="videos">
          ${getIcon('play', '', 13)} Videos
        </button>
        <button class="search-filter-tab ${activeFilterTab === 'news' ? 'active' : ''}" data-filter="news">
          ${getIcon('zap', '', 13)} News
        </button>
        <button class="search-filter-tab ${activeFilterTab === 'code' ? 'active' : ''}" data-filter="code">
          ${getIcon('circuit', '', 13)} Developer Code
        </button>
      </div>

      <div class="search-stats-bar">
        <span>About ${serpData.totalResults} results (${serpData.searchTime} seconds) • WebBuddy Shields blocked 12 trackers</span>
      </div>

      <!-- Results Layout -->
      <div class="search-results-layout">
        <div class="search-results-main">
          <!-- Privacy Shield Active Banner -->
          <div class="search-privacy-banner">
            ${getIcon('shield-check', '', 16)}
            <span><strong>Private Search Enforced:</strong> Zero query profiling, no tracking cookies, and sub-millisecond network filtering.</span>
          </div>

          <!-- People Also Ask Section -->
          ${serpData.peopleAlsoAsk && serpData.peopleAlsoAsk.length > 0 ? `
            <div class="serp-paa-card">
              <h3 class="paa-heading">People also ask</h3>
              <div class="paa-list">
                ${serpData.peopleAlsoAsk.map((item, idx) => `
                  <div class="paa-item ${openFaqIndex === idx ? 'open' : ''}" data-paa-index="${idx}">
                    <div class="paa-question-row">
                      <span>${escapeHtml(item.question)}</span>
                      <span class="paa-icon">${getIcon(openFaqIndex === idx ? 'chevron-up' : 'chevron-down', '', 14)}</span>
                    </div>
                    <div class="paa-answer-row" style="display: ${openFaqIndex === idx ? 'block' : 'none'};">
                      <p>${escapeHtml(item.answer)}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Organic Search Results List -->
          <div class="organic-results-list">
            ${serpData.organicResults.map(res => `
              <div class="search-result-item">
                <div class="result-cite">
                  <span class="cite-icon">${getIcon(res.icon || 'globe', '', 13)}</span>
                  <span class="cite-url">${escapeHtml(res.displayUrl || res.url)}</span>
                  ${res.badge ? `<span class="cite-badge">${escapeHtml(res.badge)}</span>` : ''}
                </div>

                <h3 class="result-title" data-visit-url="${escapeAttr(res.url)}">${escapeHtml(res.title)}</h3>

                <div class="result-meta-row">
                  ${res.date ? `<span class="result-date">${escapeHtml(res.date)} — </span>` : ''}
                  <span class="result-snippet-text">${escapeHtml(res.snippet)}</span>
                </div>

                <!-- Sitelinks Sub-grid -->
                ${res.sitelinks && res.sitelinks.length > 0 ? `
                  <div class="result-sitelinks-grid">
                    ${res.sitelinks.map(sl => `
                      <a href="${escapeAttr(sl.url)}" class="sitelink-pill" data-visit-url="${escapeAttr(sl.url)}">
                        ${escapeHtml(sl.label)}
                      </a>
                    `).join('')}
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>

          <!-- Related Searches Pills List -->
          <div class="serp-related-card">
            <h3 class="related-heading">Related Searches</h3>
            <div class="related-tags-grid">
              ${serpData.relatedSearches.map(rel => `
                <button class="related-tag-btn" data-search-query="${escapeAttr(rel)}">
                  ${getIcon('search', '', 12)}
                  <span>${escapeHtml(rel)}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Pagination Bar -->
          <div class="serp-pagination-bar">
            <button class="pagination-btn active">1</button>
            <button class="pagination-btn" data-page="2">2</button>
            <button class="pagination-btn" data-page="3">3</button>
            <button class="pagination-btn" data-page="4">4</button>
            <button class="pagination-btn" data-page="5">5</button>
            <button class="pagination-btn next-btn" data-page="2">Next →</button>
          </div>
        </div>

        <!-- Sidebar Knowledge Panel -->
        <div class="search-results-sidebar">
          ${serpData.knowledgePanel ? `
            <div class="knowledge-panel-card">
              <div class="kp-badge">${escapeHtml(serpData.knowledgePanel.badge || 'Overview')}</div>
              <h2 class="kp-title">${escapeHtml(serpData.knowledgePanel.title)}</h2>
              <div class="kp-subtitle">${escapeHtml(serpData.knowledgePanel.subtitle)}</div>
              
              <p class="kp-description">${escapeHtml(serpData.knowledgePanel.description)}</p>

              <div class="kp-divider"></div>

              <div class="kp-facts-list">
                ${serpData.knowledgePanel.facts.map(fact => `
                  <div class="kp-fact-row">
                    <span class="fact-label">${escapeHtml(fact.label)}</span>
                    <span class="fact-value">${escapeHtml(fact.value)}</span>
                  </div>
                `).join('')}
              </div>

              <div class="kp-footer-btn" data-visit-url="https://en.wikipedia.org/wiki/${encodeURIComponent(query)}">
                <span>View Full Knowledge Profile on Wikipedia</span>
                ${getIcon('external-link', '', 12)}
              </div>
            </div>
          ` : ''}

          <!-- Shields Protection Live Telemetry Widget -->
          <div class="kp-shield-widget">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
              <span style="width:8px; height:8px; border-radius:50%; background:#10B981; box-shadow:0 0 8px #10B981;"></span>
              <strong style="color:#fff; font-size:12.5px;">WebBuddy Privacy Core</strong>
            </div>
            <p style="font-size:11.5px; color:var(--text-secondary); line-height:1.5; margin:0 0 10px;">
              All ${serpData.organicResults.length} result destinations are pre-inspected. Malicious telemetry and intrusive redirects are neutralized.
            </p>
            <div style="display:flex; gap:6px;">
              <span style="background:rgba(0,242,254,0.1); color:#00F2FE; padding:3px 8px; border-radius:4px; font-size:10.5px; font-weight:700;">Zero Logged</span>
              <span style="background:rgba(16,185,129,0.1); color:#10B981; padding:3px 8px; border-radius:4px; font-size:10.5px; font-weight:700;">TLS 1.3</span>
            </div>
          </div>
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

    // Switch Search Engine from Header
    container.querySelector('#switchSearchEngineBtn')?.addEventListener('click', () => {
      store.openModal('settings');
    });

    // Filter Tabs
    container.querySelectorAll('[data-filter]').forEach(tab => {
      tab.addEventListener('click', () => {
        activeFilterTab = tab.dataset.filter;
        render();
      });
    });

    // PAA Toggle Accordions
    container.querySelectorAll('[data-paa-index]').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.paaIndex, 10);
        openFaqIndex = openFaqIndex === idx ? null : idx;
        render();
      });
    });

    // Related Search Query clicks
    container.querySelectorAll('[data-search-query]').forEach(btn => {
      btn.addEventListener('click', () => {
        const q = btn.dataset.searchQuery;
        store.navigateToUrl(q);
      });
    });

    // Organic Result / Sitelink Click
    container.querySelectorAll('[data-visit-url]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const url = el.dataset.visitUrl;
        if (url) {
          store.navigateToUrl(url);
        }
      });
    });

    // Pagination
    container.querySelectorAll('.pagination-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showToast('📄 Navigated to page of search results');
      });
    });
  }

  store.subscribe((state, event) => {
    if (['TAB_SWITCHED', 'NAVIGATION_COMPLETE', 'SEARCH_ENGINE_CHANGED'].includes(event)) {
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
