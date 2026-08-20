import { store } from '../state/store.js';
import { getIcon } from './Icons.js';
import { MOCK_WEB_PAGES } from '../state/defaultData.js';

export function initWebViewer(container) {
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

    // Special dynamic handler for Google Search
    if (domain.includes('google.com') || activeTab.url.includes('google.com')) {
      const searchQuery = query || 'WebBuddy Adblock & Privacy Protection';
      pageData = {
        title: `${searchQuery} - Google Search`,
        url: activeTab.url,
        domain: 'google.com',
        trackersBlocked: 7,
        content: `
          <div class="google-container">
            <header class="google-header">
              <div class="google-logo-row">
                <span class="g-blue">G</span><span class="g-red">o</span><span class="g-yellow">o</span><span class="g-blue">g</span><span class="g-green">l</span><span class="g-red">e</span>
              </div>
              <form class="google-search-bar-mock" id="googleSearchForm">
                <input type="text" class="google-input-mock" id="googleSearchInput" value="${escapeAttr(searchQuery)}" />
                <button type="submit" class="google-mic-btn" title="Search with Google">🔍</button>
              </form>
            </header>

            <div class="google-tabs-row">
              <span class="g-tab active">All</span>
              <span class="g-tab">Images</span>
              <span class="g-tab">Videos</span>
              <span class="g-tab">News</span>
              <span class="g-tab">Maps</span>
              <span class="g-tab">Shopping</span>
              <span class="g-tab">Tools</span>
            </div>

            <div class="google-stats-bar">
              <span>About ${(Math.floor(Math.random() * 4000) + 1200).toLocaleString()},000 results (0.28 seconds) • WebBuddy Shields blocked 7 trackers</span>
            </div>

            <div class="google-results-list">
              <div class="google-result-card">
                <div class="g-cite">
                  ${getIcon('globe', '', 12)}
                  <span>https://webbuddy.org › search › ${encodeURIComponent(searchQuery)}</span>
                </div>
                <a href="https://webbuddy.org" class="g-title">${escapeHtml(searchQuery)} — WebBuddy Private Browsing & Shields</a>
                <p class="g-snippet">WebBuddy automatically stops third-party ads, invisible trackers, fingerprinting scripts, and cryptominers with sub-millisecond network filtering.</p>
              </div>

              <div class="google-result-card">
                <div class="g-cite">
                  ${getIcon('book-open', '', 12)}
                  <span>https://en.wikipedia.org › wiki › ${encodeURIComponent(searchQuery)}</span>
                </div>
                <a href="https://wikipedia.org" class="g-title">${escapeHtml(searchQuery)} - Wikipedia, the free encyclopedia</a>
                <p class="g-snippet">Explore comprehensive encyclopedia references, technical documentation, history, and peer-reviewed articles regarding ${escapeHtml(searchQuery)}.</p>
              </div>

              <div class="google-result-card">
                <div class="g-cite">
                  ${getIcon('github', '', 12)}
                  <span>https://github.com › search › ${encodeURIComponent(searchQuery)}</span>
                </div>
                <a href="https://github.com" class="g-title">GitHub Repositories and Open Source: ${escapeHtml(searchQuery)}</a>
                <p class="g-snippet">Explore trending source code, high-performance implementations, and developer discussions related to ${escapeHtml(searchQuery)}.</p>
              </div>

              <div class="google-result-card">
                <div class="g-cite">
                  ${getIcon('terminal', '', 12)}
                  <span>https://news.ycombinator.com › ${encodeURIComponent(searchQuery)}</span>
                </div>
                <a href="https://news.ycombinator.com" class="g-title">Hacker News Discussion: Breakthroughs in ${escapeHtml(searchQuery)}</a>
                <p class="g-snippet">Top engineering comments, benchmarks, and community discussions on Hacker News.</p>
              </div>
            </div>
          </div>
        `
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
          <div style="background:#181A26; border-radius:12px; border:1px solid rgba(255,255,255,0.08); padding:36px; text-align:center;">
            <div style="font-size:42px; margin-bottom:16px;">🌐</div>
            <h2 style="font-size:24px; margin-bottom:10px;">${escapeHtml(activeTab.title || domain)}</h2>
            <p style="color:var(--text-secondary); max-width:500px; margin:0 auto 24px; line-height:1.6;">
              Connected securely to <code>${escapeHtml(activeTab.url)}</code> via WebBuddy Privacy Tunnel with HTTPS upgrading enabled.
            </p>
            <div style="display:inline-flex; gap:12px; background:rgba(255,255,255,0.04); padding:12px 20px; border-radius:8px; border:1px solid rgba(255,255,255,0.06); font-size:13px;">
              <span>🛡️ <strong>${blockedCount} trackers blocked</strong></span>
              <span>🔒 <strong>TLS 1.3 Encrypted</strong></span>
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
          <span>WebBuddy Shields Active • ${blockedCount} ad networks & trackers blocked on ${escapeHtml(pageData.domain || domain)}</span>
        </div>
        <div style="color:var(--text-muted); font-size:11px;">
          Protected by Sub-Millisecond Network Filtering & Farbling
        </div>
      </div>

      <div class="web-viewer-content">
        ${pageData.content}
      </div>
    `;

    setupEvents();
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

    // Handle Google search form in web viewer
    const googleForm = container.querySelector('#googleSearchForm');
    const googleInput = container.querySelector('#googleSearchInput');
    googleForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = googleInput?.value.trim();
      if (val) {
        store.navigateToUrl(val);
      }
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
