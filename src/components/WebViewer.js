import { store } from '../state/store.js';
import { getIcon } from './Icons.js';
import { MOCK_WEB_PAGES } from '../state/defaultData.js';
import { generateRealisticSearchResults } from '../state/searchEngineService.js';

export function initWebViewer(container) {
  let openFaqIndex = null;

  function render() {
    const activeTab = store.getActiveTab();
    if (activeTab.type !== 'web') {
      container.style.display = 'none';
      return;
    }
    container.style.display = 'flex';

    // Find matching mock page or create fallback
    let domain = 'google.com';
    let query = '';
    try {
      const parsed = new URL(activeTab.url);
      domain = parsed.hostname.replace('www.', '');
      query = parsed.searchParams.get('q') || parsed.searchParams.get('query') || parsed.searchParams.get('search') || '';
    } catch {
      domain = 'google.com';
    }

    const blockedCount = activeTab.totalBlockedCount || (activeTab.adsBlockedCount + activeTab.trackersBlockedCount) || 8;

    let pageData = null;

    // Check if this URL is a Search Engine Results Page (SERP)
    const isSearchEngineUrl = domain.includes('google.com') || 
                              domain.includes('duckduckgo.com') || 
                              domain.includes('bing.com') || 
                              domain.includes('search.brave.com') || 
                              domain.includes('ecosia.org');

    if (isSearchEngineUrl) {
      const engineId = domain.includes('duckduckgo') ? 'duckduckgo' 
                     : domain.includes('bing') ? 'bing'
                     : domain.includes('brave') ? 'brave'
                     : domain.includes('ecosia') ? 'ecosia'
                     : 'google';

      const searchQuery = query || 'WebBuddy Adblock & Privacy Protection';
      const serp = generateRealisticSearchResults(searchQuery, engineId);

      pageData = {
        title: `${searchQuery} - ${getEngineDisplayName(engineId)} Search`,
        url: activeTab.url,
        domain: domain,
        trackersBlocked: 7,
        content: renderEngineSerpHtml(engineId, searchQuery, serp)
      };
    } else {
      for (const key of Object.keys(MOCK_WEB_PAGES)) {
        if (domain.includes(key) || activeTab.url.includes(key)) {
          pageData = MOCK_WEB_PAGES[key];
          break;
        }
      }
    }

    if (!pageData) {
      pageData = {
        title: activeTab.title || domain,
        url: activeTab.url,
        domain: domain,
        trackersBlocked: 6,
        content: `
          <div style="background:#181A26; border-radius:12px; border:1px solid rgba(255,255,255,0.08); padding:40px 24px; text-align:center; max-width:760px; margin:20px auto;">
            <div style="font-size:48px; margin-bottom:16px;">🌐</div>
            <h2 style="font-size:24px; margin-bottom:12px; color:#fff;">${escapeHtml(activeTab.title || domain)}</h2>
            <p style="color:var(--text-secondary); max-width:540px; margin:0 auto 24px; line-height:1.6; font-size:14px;">
              Connected securely to <code>${escapeHtml(activeTab.url)}</code> via WebBuddy Privacy Tunnel with sub-millisecond filtering and HTTPS upgrading enabled.
            </p>
            <div style="display:inline-flex; gap:14px; background:rgba(255,255,255,0.04); padding:12px 24px; border-radius:10px; border:1px solid rgba(255,255,255,0.08); font-size:13px;">
              <span style="color:#00F2FE;">🛡️ <strong>${blockedCount} trackers blocked</strong></span>
              <span style="color:#10B981;">🔒 <strong>TLS 1.3 AES-GCM Encrypted</strong></span>
              <span style="color:#A78BFA;">⚡ <strong>0.3ms Response</strong></span>
            </div>
          </div>
        `
      };
    }

    container.className = 'web-viewer-container';
    container.innerHTML = `
      <div class="web-viewer-banner">
        <div class="shields-active-indicator">
          <div class="shields-pulse-dot"></div>
          <span>WebBuddy Shields Active • ${blockedCount} ad networks & telemetry beacons blocked on ${escapeHtml(pageData.domain || domain)}</span>
        </div>
        <div style="color:var(--text-muted); font-size:11px;">
          Protected by Sub-Millisecond Network Filtering & Farbling Max
        </div>
      </div>

      <div class="web-viewer-content">
        ${pageData.content}
      </div>
    `;

    setupEvents();
  }

  function getEngineDisplayName(id) {
    switch (id) {
      case 'duckduckgo': return 'DuckDuckGo';
      case 'bing': return 'Bing';
      case 'brave': return 'Brave';
      case 'ecosia': return 'Ecosia';
      default: return 'Google';
    }
  }

  function renderEngineSerpHtml(engineId, searchQuery, serp) {
    const isGoogle = engineId === 'google';
    const isDdg = engineId === 'duckduckgo';
    const isBing = engineId === 'bing';
    const isBrave = engineId === 'brave';
    const isEcosia = engineId === 'ecosia';

    return `
      <div class="serp-engine-container engine-${engineId}">
        <!-- Search Engine Header -->
        <header class="serp-engine-header">
          <div class="serp-brand-logo">
            ${isGoogle ? `
              <span class="g-blue">G</span><span class="g-red">o</span><span class="g-yellow">o</span><span class="g-blue">g</span><span class="g-green">l</span><span class="g-red">e</span>
            ` : isDdg ? `
              <span style="display:flex; align-items:center; gap:8px; color:#DE5833; font-weight:800; font-size:20px;">
                ${getIcon('duckduckgo', '', 26)} DuckDuckGo
              </span>
            ` : isBing ? `
              <span style="display:flex; align-items:center; gap:8px; color:#008373; font-weight:800; font-size:20px;">
                ${getIcon('bing', '', 24)} Microsoft Bing
              </span>
            ` : isBrave ? `
              <span style="display:flex; align-items:center; gap:8px; color:#FB542B; font-weight:800; font-size:20px;">
                ${getIcon('brave', '', 24)} Brave Search
              </span>
            ` : isEcosia ? `
              <span style="display:flex; align-items:center; gap:8px; color:#008477; font-weight:800; font-size:20px;">
                ${getIcon('ecosia', '', 24)} Ecosia 🌳
              </span>
            ` : `
              <span style="font-weight:800; color:#00F2FE;">WebBuddy Search</span>
            `}
          </div>

          <form class="serp-search-bar-mock" id="serpSearchForm">
            <input type="text" class="serp-input-mock" id="serpSearchInput" value="${escapeAttr(searchQuery)}" />
            <button type="submit" class="serp-submit-btn" title="Search">🔍</button>
          </form>

          ${isEcosia ? `
            <div class="ecosia-tree-counter">
              <span>🌳 <strong>182,410,290</strong> trees planted</span>
            </div>
          ` : ''}
        </header>

        <!-- Search Navigation Tabs -->
        <div class="serp-tabs-row">
          <span class="serp-tab active">${getIcon('search', '', 12)} All</span>
          <span class="serp-tab">${getIcon('image', '', 12)} Images</span>
          <span class="serp-tab">${getIcon('play', '', 12)} Videos</span>
          <span class="serp-tab">${getIcon('zap', '', 12)} News</span>
          <span class="serp-tab">${getIcon('globe', '', 12)} Maps</span>
          <span class="serp-tab">${getIcon('sliders', '', 12)} Tools</span>
        </div>

        <div class="serp-stats-bar">
          <span>About ${serp.totalResults} results (${serp.searchTime} seconds) • WebBuddy Shields blocked 7 trackers</span>
        </div>

        <!-- SERP Dual-Column Results Grid -->
        <div class="serp-dual-grid">
          <!-- Main Results Column -->
          <div class="serp-main-column">
            <!-- PAA Expandable Accordion -->
            ${serp.peopleAlsoAsk && serp.peopleAlsoAsk.length > 0 ? `
              <div class="serp-paa-box">
                <div class="paa-box-title">People also ask</div>
                <div class="paa-box-list">
                  ${serp.peopleAlsoAsk.map((item, idx) => `
                    <div class="paa-box-item ${openFaqIndex === idx ? 'open' : ''}" data-serp-paa="${idx}">
                      <div class="paa-box-question">
                        <span>${escapeHtml(item.question)}</span>
                        <span class="paa-arrow">${getIcon(openFaqIndex === idx ? 'chevron-up' : 'chevron-down', '', 12)}</span>
                      </div>
                      <div class="paa-box-answer" style="display:${openFaqIndex === idx ? 'block' : 'none'};">
                        <p>${escapeHtml(item.answer)}</p>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Organic Results Cards -->
            <div class="serp-results-list">
              ${serp.organicResults.map(res => `
                <div class="serp-result-card">
                  <div class="g-cite">
                    <span class="cite-icon-box">${getIcon(res.icon || 'globe', '', 12)}</span>
                    <span>${escapeHtml(res.displayUrl || res.url)}</span>
                    ${res.badge ? `<span class="res-badge">${escapeHtml(res.badge)}</span>` : ''}
                  </div>

                  <a href="${escapeAttr(res.url)}" class="g-title" data-visit-url="${escapeAttr(res.url)}">${escapeHtml(res.title)}</a>

                  <p class="g-snippet">
                    ${res.date ? `<span style="color:var(--text-muted); font-size:12px;">${escapeHtml(res.date)} — </span>` : ''}
                    ${escapeHtml(res.snippet)}
                  </p>

                  ${res.sitelinks && res.sitelinks.length > 0 ? `
                    <div class="serp-sitelinks-row">
                      ${res.sitelinks.map(sl => `
                        <a href="${escapeAttr(sl.url)}" class="serp-sitelink-tag" data-visit-url="${escapeAttr(sl.url)}">
                          ${escapeHtml(sl.label)}
                        </a>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>

            <!-- Related Searches -->
            <div class="serp-related-box">
              <div class="related-box-title">Related searches</div>
              <div class="related-pills-row">
                ${serp.relatedSearches.map(rel => `
                  <button class="related-pill-btn" data-search-query="${escapeAttr(rel)}">
                    ${getIcon('search', '', 12)}
                    <span>${escapeHtml(rel)}</span>
                  </button>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Right Sidebar: Knowledge Panel -->
          ${serp.knowledgePanel ? `
            <div class="serp-sidebar-column">
              <div class="serp-knowledge-panel">
                <div class="skp-badge">${escapeHtml(serp.knowledgePanel.badge || 'Overview')}</div>
                <h3 class="skp-title">${escapeHtml(serp.knowledgePanel.title)}</h3>
                <div class="skp-sub">${escapeHtml(serp.knowledgePanel.subtitle)}</div>
                
                <p class="skp-desc">${escapeHtml(serp.knowledgePanel.description)}</p>

                <div class="skp-divider"></div>

                <div class="skp-facts">
                  ${serp.knowledgePanel.facts.map(f => `
                    <div class="skp-fact-item">
                      <span class="skp-fact-label">${escapeHtml(f.label)}:</span>
                      <span class="skp-fact-val">${escapeHtml(f.value)}</span>
                    </div>
                  `).join('')}
                </div>

                <div class="skp-shield-note">
                  ${getIcon('shield-check', '', 14)}
                  <span>Verified Safe by WebBuddy Farble Shields</span>
                </div>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  function setupEvents() {
    // Intercept internal mock clicks
    container.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href !== '#') {
          store.navigateToUrl(href);
        }
      });
    });

    // Handle search forms in web viewer
    const form = container.querySelector('#serpSearchForm') || container.querySelector('#googleSearchForm');
    const input = container.querySelector('#serpSearchInput') || container.querySelector('#googleSearchInput');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = input?.value.trim();
      if (val) {
        store.navigateToUrl(val);
      }
    });

    // PAA Toggle Accordions in SERP
    container.querySelectorAll('[data-serp-paa]').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.serpPaa, 10);
        openFaqIndex = openFaqIndex === idx ? null : idx;
        render();
      });
    });

    // Related search queries
    container.querySelectorAll('[data-search-query]').forEach(btn => {
      btn.addEventListener('click', () => {
        const q = btn.dataset.searchQuery;
        store.navigateToUrl(q);
      });
    });

    // Visit URL click
    container.querySelectorAll('[data-visit-url]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const url = el.dataset.visitUrl;
        if (url) {
          store.navigateToUrl(url);
        }
      });
    });
  }

  store.subscribe((state, event) => {
    if (['TAB_SWITCHED', 'NAVIGATION_COMPLETE', 'SHIELDS_STATS_UPDATED'].includes(event)) {
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
