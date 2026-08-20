// Default data for WebBuddy Ad & Tracker Blocker

export const DEFAULT_WALLPAPERS = [
  {
    id: 'aurora',
    name: 'Arctic Aurora Borealis',
    author: 'Vincent Guth',
    location: 'Tromsø, Norway',
    url: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=2560&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=400&q=75'
  },
  {
    id: 'fuji',
    name: 'Mount Fuji Sunrise',
    author: 'Tomek Baginski',
    location: 'Honshu, Japan',
    url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2560&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=75'
  },
  {
    id: 'cosmic',
    name: 'Orion Deep Nebula',
    author: 'NASA Hubble',
    location: 'Orion Constellation',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2560&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=75'
  },
  {
    id: 'dolomites',
    name: 'Dolomites Alpine Peak',
    author: 'Luca Bravo',
    location: 'South Tyrol, Italy',
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2560&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=75'
  },
  {
    id: 'cyberpunk',
    name: 'Neo Tokyo Rain',
    author: 'Aleksandar Pasaric',
    location: 'Shinjuku, Tokyo',
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=2560&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=75'
  }
];

export const DEFAULT_TOP_SITES = [
  { id: '1', title: 'YouTube', url: 'https://youtube.com', icon: 'youtube', color: '#FF0000' },
  { id: '2', title: 'Reddit', url: 'https://reddit.com', icon: 'message-square', color: '#FF4500' },
  { id: '3', title: 'GitHub', url: 'https://github.com', icon: 'github', color: '#24292e' },
  { id: '4', title: 'X / Twitter', url: 'https://x.com', icon: 'twitter', color: '#000000' },
  { id: '5', title: 'Wikipedia', url: 'https://wikipedia.org', icon: 'book-open', color: '#636466' },
  { id: '6', title: 'Hacker News', url: 'https://news.ycombinator.com', icon: 'terminal', color: '#FF6600' }
];

export const DEFAULT_BOOKMARKS = [
  { id: 'b1', title: 'WebBuddy Search', url: 'brave://newtab', icon: 'search' },
  { id: 'b2', title: 'GitHub', url: 'https://github.com', icon: 'github' },
  { id: 'b3', title: 'Hacker News', url: 'https://news.ycombinator.com', icon: 'terminal' },
  { id: 'b4', title: 'Wikipedia', url: 'https://wikipedia.org', icon: 'book-open' }
];

export const DEFAULT_NOTES = [
  {
    id: 'note-1',
    title: 'Adblock & Filter Rule Syntax',
    content: 'Common Adblock syntax:\n- `||doubleclick.net^` : Block domain & subdomains\n- `##.ad-banner` : Hide CSS element on all domains\n- `@@||example.com^$document` : Whitelist domain exception',
    createdAt: 'Aug 20, 2026',
    updatedAt: 'Just now',
    pinned: true,
    url: 'https://github.com/webbuddy/adblock-core',
    color: '#00F2FE'
  },
  {
    id: 'note-2',
    title: 'Web Privacy Checklist',
    content: '1. Keep EasyList and EasyPrivacy filter subscriptions active.\n2. Enable Canvas FARBLE anti-fingerprinting.\n3. Force HTTPS encryption.\n4. Isolate third-party cookie jars.',
    createdAt: 'Aug 20, 2026',
    updatedAt: '2h ago',
    pinned: false,
    url: 'https://en.wikipedia.org/wiki/Ad_blocking',
    color: '#7F00FF'
  },
  {
    id: 'note-3',
    title: 'Interesting Tech Articles to Read',
    content: '- Sub-millisecond Rust packet filtering benchmarks\n- WebAssembly SIMD hardware acceleration\n- Post-Quantum TLS 1.3 Key Encapsulation',
    createdAt: 'Aug 19, 2026',
    updatedAt: 'Yesterday',
    pinned: false,
    url: 'https://news.ycombinator.com',
    color: '#10B981'
  }
];

export const DEFAULT_FILTER_LISTS = [
  { id: 'fl-easylist', name: 'EasyList Primary Ad Blocker', rulesCount: 78420, enabled: true, lastUpdated: 'Today' },
  { id: 'fl-easyprivacy', name: 'EasyPrivacy Tracker Shield', rulesCount: 42190, enabled: true, lastUpdated: 'Today' },
  { id: 'fl-ublock', name: 'uBlock Network Filters', rulesCount: 36800, enabled: true, lastUpdated: 'Today' },
  { id: 'fl-fanboy', name: 'Fanboy Annoyances & Cookie Banners', rulesCount: 28540, enabled: true, lastUpdated: 'Yesterday' },
  { id: 'fl-fingerprint', name: 'WebBuddy Anti-Fingerprint FARBLE Engine', rulesCount: 15300, enabled: true, lastUpdated: 'Today' }
];

export const DEFAULT_SEARCH_ENGINES = [
  {
    id: 'google',
    name: 'Google',
    shortcut: ':g',
    searchUrl: 'https://www.google.com/search?q=%s',
    suggestUrl: 'https://suggestqueries.google.com/complete/search?client=chrome&q=%s',
    icon: 'google',
    color: '#4285F4',
    badgeColor: '#4285F4',
    isDefault: true,
    isBuiltin: true,
    description: 'Default search engine • Fast & Comprehensive'
  },
  {
    id: 'duckduckgo',
    name: 'DuckDuckGo',
    shortcut: ':ddg',
    searchUrl: 'https://duckduckgo.com/?q=%s',
    suggestUrl: '',
    icon: 'duckduckgo',
    color: '#DE5833',
    badgeColor: '#DE5833',
    isDefault: false,
    isBuiltin: true,
    description: 'Privacy-focused search without user profiling'
  },
  {
    id: 'bing',
    name: 'Microsoft Bing',
    shortcut: ':b',
    searchUrl: 'https://www.bing.com/search?q=%s',
    suggestUrl: '',
    icon: 'bing',
    color: '#008373',
    badgeColor: '#008373',
    isDefault: false,
    isBuiltin: true,
    description: 'Microsoft intelligent search engine'
  },
  {
    id: 'brave',
    name: 'Brave Search',
    shortcut: ':br',
    searchUrl: 'https://search.brave.com/search?q=%s',
    suggestUrl: '',
    icon: 'brave',
    color: '#FB542B',
    badgeColor: '#FB542B',
    isDefault: false,
    isBuiltin: true,
    description: 'Independent index with anti-tracking privacy'
  },
  {
    id: 'ecosia',
    name: 'Ecosia',
    shortcut: ':e',
    searchUrl: 'https://www.ecosia.org/search?q=%s',
    suggestUrl: '',
    icon: 'ecosia',
    color: '#008477',
    badgeColor: '#008477',
    isDefault: false,
    isBuiltin: true,
    description: 'Green search engine that plants trees'
  },
  {
    id: 'wikipedia',
    name: 'Wikipedia',
    shortcut: ':w',
    searchUrl: 'https://en.wikipedia.org/wiki/Special:Search?search=%s',
    suggestUrl: '',
    icon: 'book-open',
    color: '#636466',
    badgeColor: '#636466',
    isDefault: false,
    isBuiltin: true,
    description: 'Direct search in Wikipedia encyclopedia'
  }
];

export const MOCK_WEB_PAGES = {
  'youtube.com': {
    title: 'YouTube - High-Speed Rust Microservices & IoT Engineering',
    url: 'https://youtube.com',
    domain: 'youtube.com',
    favicon: 'youtube',
    adsBlocked: 2,
    trackersBlocked: 16,
    content: `
      <div class="yt-container" style="display:flex; flex-direction:column; gap:20px;">
        <!-- YouTube Header Banner -->
        <div style="display:flex; align-items:center; justify-content:space-between; background:#181818; padding:12px 20px; border-radius:10px; border:1px solid rgba(255,255,255,0.08);">
          <div style="display:flex; align-items:center; gap:12px;">
            <div style="background:#FF0000; width:32px; height:24px; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:12px;">▶</div>
            <span style="font-size:18px; font-weight:800; color:#fff; letter-spacing:-0.5px;">YouTube</span>
            <span style="background:rgba(0,242,254,0.15); color:#00F2FE; font-size:11px; padding:2px 8px; border-radius:12px; font-weight:700;">🛡️ AdBlock Protected (0 Ads)</span>
          </div>
          <div style="display:flex; gap:10px; align-items:center;">
            <span style="color:#10B981; font-size:12px; font-weight:600;">⚡ 2 Pre-Roll Video Ads Skipped</span>
          </div>
        </div>

        <!-- Main Video & Sidebar Grid -->
        <div style="display:grid; grid-template-columns: 1fr 340px; gap:24px;">
          <!-- Left: Video Player & Details -->
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div style="position:relative; width:100%; aspect-ratio:16/9; background:#000; border-radius:12px; overflow:hidden; box-shadow:0 12px 36px rgba(0,0,0,0.6);">
              <video 
                id="mainYtVideoPlayer" 
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
                controls 
                autoplay 
                muted
                style="width:100%; height:100%; object-fit:cover;"
              ></video>
              <div style="position:absolute; top:12px; left:12px; background:rgba(0,0,0,0.75); backdrop-filter:blur(8px); padding:4px 10px; border-radius:6px; font-size:11px; color:#10B981; font-weight:700; border:1px solid rgba(16,185,129,0.3);">
                ✓ WebBuddy Ad Shield: No Video Ads
              </div>
            </div>

            <!-- Video Info -->
            <div style="display:flex; flex-direction:column; gap:8px;">
              <h1 style="font-size:20px; font-weight:700; color:#fff; line-height:1.4;">
                Full Rust Platform Architecture: Axum 0.7 API Gateway, Tokio Concurrency & IoT BLE
              </h1>
              
              <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.08);">
                <!-- Channel Info -->
                <div style="display:flex; align-items:center; gap:12px;">
                  <div style="width:40px; height:40px; border-radius:50%; background:linear-gradient(135deg, #00F2FE 0%, #7F00FF 100%); display:flex; align-items:center; justify-content:center; font-weight:800; color:#fff;">WB</div>
                  <div>
                    <div style="font-size:14px; font-weight:700; color:#fff;">WebBuddy Tech Labs</div>
                    <div style="font-size:12px; color:var(--text-muted);">248K subscribers</div>
                  </div>
                  <button style="margin-left:8px; background:#fff; color:#000; border:none; padding:8px 16px; border-radius:20px; font-weight:700; font-size:13px; cursor:pointer;">Subscribe</button>
                </div>

                <!-- Video Action Buttons -->
                <div style="display:flex; align-items:center; gap:8px;">
                  <button style="display:flex; align-items:center; gap:6px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.1); padding:8px 16px; border-radius:20px; color:#fff; font-size:13px; font-weight:600; cursor:pointer;">
                    👍 18.4K
                  </button>
                  <button style="display:flex; align-items:center; gap:6px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.1); padding:8px 16px; border-radius:20px; color:#fff; font-size:13px; font-weight:600; cursor:pointer;">
                    ↗ Share
                  </button>
                  <button style="display:flex; align-items:center; gap:6px; background:rgba(255,64,129,0.15); border:1px solid rgba(255,64,129,0.3); padding:8px 16px; border-radius:20px; color:#FF4081; font-size:13px; font-weight:700; cursor:pointer;" id="ytDownloadBtn" title="Download video with Motrix">
                    📥 Download (Motrix)
                  </button>
                </div>
              </div>

              <!-- Description Box -->
              <div style="background:#1F1F1F; padding:14px; border-radius:10px; font-size:13px; color:var(--text-secondary); line-height:1.6;">
                <div style="font-weight:700; color:#fff; margin-bottom:4px;">142,890 views • Streamed live in 4K HDR</div>
                Deep dive into high-performance backend architecture using Rust, Axum 0.7, PostgreSQL 16 SQLx, Redis caching, Bluetooth BLE hardware control, and SuperMemo SM-2 spaced repetition algorithms.
              </div>
            </div>
          </div>

          <!-- Right: Recommended Videos Feed -->
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div style="font-size:14px; font-weight:700; color:#fff; margin-bottom:4px;">Recommended for You</div>
            
            <div style="display:flex; gap:10px; cursor:pointer;">
              <div style="width:120px; aspect-ratio:16/9; background:#222; border-radius:6px; overflow:hidden; position:relative; flex-shrink:0;">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=240" style="width:100%; height:100%; object-fit:cover;" />
                <span style="position:absolute; bottom:4px; right:4px; background:rgba(0,0,0,0.8); font-size:10px; padding:1px 4px; border-radius:3px; color:#fff;">14:20</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:2px;">
                <div style="font-size:12px; font-weight:600; color:#fff; line-height:1.3;">Bluetooth Low Energy & ESP32-S3 in Rust</div>
                <div style="font-size:11px; color:var(--text-muted);">IoT Masters • 48K views</div>
              </div>
            </div>

            <div style="display:flex; gap:10px; cursor:pointer;">
              <div style="width:120px; aspect-ratio:16/9; background:#222; border-radius:6px; overflow:hidden; position:relative; flex-shrink:0;">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=240" style="width:100%; height:100%; object-fit:cover;" />
                <span style="position:absolute; bottom:4px; right:4px; background:rgba(0,0,0,0.8); font-size:10px; padding:1px 4px; border-radius:3px; color:#fff;">22:45</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:2px;">
                <div style="font-size:12px; font-weight:600; color:#fff; line-height:1.3;">Building Next-Gen Adaptive Exam Engines</div>
                <div style="font-size:11px; color:var(--text-muted);">StudyBuddy Engineering • 92K views</div>
              </div>
            </div>

            <div style="display:flex; gap:10px; cursor:pointer;">
              <div style="width:120px; aspect-ratio:16/9; background:#222; border-radius:6px; overflow:hidden; position:relative; flex-shrink:0;">
                <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=240" style="width:100%; height:100%; object-fit:cover;" />
                <span style="position:absolute; bottom:4px; right:4px; background:rgba(0,0,0,0.8); font-size:10px; padding:1px 4px; border-radius:3px; color:#fff;">18:10</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:2px;">
                <div style="font-size:12px; font-weight:600; color:#fff; line-height:1.3;">Sub-Millisecond Packet Filtering with Aho-Corasick</div>
                <div style="font-size:11px; color:var(--text-muted);">Privacy Labs • 110K views</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  'google.com': {
    title: 'Google Search',
    url: 'https://www.google.com',
    domain: 'google.com',
    favicon: 'google',
    adsBlocked: 7,
    trackersBlocked: 14,
    content: `
      <div class="google-container">
        <header class="google-header">
          <div class="google-logo-row">
            <span class="g-blue">G</span><span class="g-red">o</span><span class="g-yellow">o</span><span class="g-blue">g</span><span class="g-green">l</span><span class="g-red">e</span>
          </div>
          <div class="google-search-bar-mock">
            <input type="text" class="google-input-mock" value="WebBuddy Adblock & Privacy Protection" readonly />
            <button class="google-mic-btn" title="Search">🔍</button>
          </div>
        </header>

        <div class="google-tabs-row">
          <span class="g-tab active">All</span>
          <span class="g-tab">Images</span>
          <span class="g-tab">Videos</span>
          <span class="g-tab">News</span>
          <span class="g-tab">Tools</span>
        </div>

        <div class="google-stats-bar">
          <span>About 4,820,000,000 results (0.28 seconds) • WebBuddy Shields blocked 7 sponsored trackers</span>
        </div>

        <div class="google-results-list">
          <div class="google-result-card">
            <div class="g-cite">https://webbuddy.org › privacy › shields</div>
            <a href="https://webbuddy.org" class="g-title">WebBuddy Ad & Tracker Blocker: Faster, Safer Web Browsing</a>
            <p class="g-snippet">WebBuddy automatically stops third-party ads, invisible trackers, fingerprinting scripts, and cryptominers with zero speed penalty.</p>
          </div>

          <div class="google-result-card">
            <div class="g-cite">https://en.wikipedia.org › wiki › Ad_blocking</div>
            <a href="https://wikipedia.org" class="g-title">Ad blocking - Wikipedia, the free encyclopedia</a>
            <p class="g-snippet">Ad blocking or ad filtering is a software capability for altering the content of web pages by removing intrusive online advertisements...</p>
          </div>

          <div class="google-result-card">
            <div class="g-cite">https://github.com › webbuddy › adblock-core</div>
            <a href="https://github.com" class="g-title">GitHub - webbuddy/adblock-core: Sub-millisecond packet filtering engine</a>
            <p class="g-snippet">High-performance native Rust ad blocking and tracker elimination library. Supports EasyList, EasyPrivacy, and uBlock filters.</p>
          </div>
        </div>
      </div>
    `
  },
  'wikipedia.org': {
    title: 'Wikipedia, the free encyclopedia',
    url: 'https://en.wikipedia.org/wiki/Ad_blocking',
    domain: 'en.wikipedia.org',
    favicon: 'book-open',
    adsBlocked: 4,
    trackersBlocked: 8,
    content: `
      <div class="wiki-container">
        <header class="wiki-header">
          <div class="wiki-logo"><span class="w-mark">W</span> <strong>WIKIPEDIA</strong> <em>The Free Encyclopedia</em></div>
          <div class="wiki-tag">Privacy • Content Filtering</div>
        </header>
        <div class="wiki-body">
          <h1>Ad blocking and Privacy Protection</h1>
          <p class="wiki-lead"><strong>Ad blocking</strong> and <strong>tracker neutralizing</strong> is a software capability for altering the content of web pages by removing intrusive online advertisements, surveillance tracking beacons, cross-site cookies, and cryptojacking scripts.</p>
          
          <div class="wiki-infobox">
            <div class="infobox-title">WebBuddy Shields Engine</div>
            <div class="infobox-row"><span>Type:</span> <strong>Native Network Packet Filter</strong></div>
            <div class="infobox-row"><span>Filter Rule Engine:</span> <strong>Rust Aho-Corasick</strong></div>
            <div class="infobox-row"><span>Active Rules:</span> <strong>201,250 rules</strong></div>
            <div class="infobox-row"><span>Overhead:</span> <strong>&lt; 0.5ms per request</strong></div>
          </div>

          <h2>How WebBuddy Shields Protects You</h2>
          <ul>
            <li><strong>Intrusive Video & Banner Ad Interception:</strong> Blocks video roll ads, intrusive banner overlays, and auto-playing media before network payload downloads.</li>
            <li><strong>Cross-Site Tracker Neutralization:</strong> Disarms tracking pixels, Google Analytics, telemetry pings, and surveillance beacons.</li>
            <li><strong>Cookie Sandbox Isolation:</strong> Isolates cookie jars per domain to stop companies from following you across websites.</li>
            <li><strong>Canvas & Hardware Fingerprint Protection:</strong> Injects pseudo-random farbling noise into Canvas and Web Audio APIs so your device cannot be secretly profiled.</li>
          </ul>
        </div>
      </div>
    `
  },
  'github.com': {
    title: 'webbuddy/adblock-core: High-speed Rust network adblock & tracker engine',
    url: 'https://github.com/webbuddy/adblock-core',
    domain: 'github.com',
    favicon: 'github',
    adsBlocked: 2,
    trackersBlocked: 11,
    content: `
      <div class="gh-container">
        <header class="gh-header">
          <div class="gh-repo-title">
            <span class="gh-org">webbuddy</span> / <span class="gh-name">adblock-core</span>
            <span class="gh-badge">High Performance</span>
          </div>
          <div class="gh-stats">
            <span class="gh-btn">★ 14.8k</span>
            <span class="gh-btn">⑂ 1.2k</span>
          </div>
        </header>
        <div class="gh-content">
          <div class="gh-readme">
            <div class="readme-header">📖 README.md</div>
            <div class="readme-body">
              <h2>🛡️ WebBuddy Ad & Tracker Blocker Engine</h2>
              <p>Ultra-fast native content filter that blocks 200,000+ ad and tracking domains with zero latency.</p>
              <div class="gh-badges">
                <span class="badge green">EasyList: Active</span>
                <span class="badge blue">EasyPrivacy: Active</span>
                <span class="badge red">Telemetry: Neutralized</span>
              </div>
              <pre class="code-block"><code>// High-performance filter lookup in sub-millisecond Rust
let engine = AdblockEngine::load_rules(&easylist_rules);
assert!(engine.should_block("https://doubleclick.net/ad.js")); // Blocked!
assert!(engine.should_block("https://facebook.com/tr/"));       // Blocked!</code></pre>
            </div>
          </div>
        </div>
      </div>
    `
  },
  'news.ycombinator.com': {
    title: 'Hacker News',
    url: 'https://news.ycombinator.com',
    domain: 'news.ycombinator.com',
    favicon: 'terminal',
    adsBlocked: 0,
    trackersBlocked: 3,
    content: `
      <div class="hn-container">
        <header class="hn-header">
          <span class="hn-logo">Y</span>
          <span class="hn-brand">Hacker News</span>
        </header>
        <ol class="hn-list">
          <li>
            <div class="hn-item">
              <span class="hn-title"><a href="#">Empirical benchmark: Native ad blocking saves 64% battery and 75% data</a></span>
              <div class="hn-subtext">512 points by privacy_engineer 2 hours ago | 164 comments</div>
            </div>
          </li>
          <li>
            <div class="hn-item">
              <span class="hn-title"><a href="#">How canvas fingerprinting works and how browser farbling defeats it</a></span>
              <div class="hn-subtext">328 points by cryptodev 4 hours ago | 88 comments</div>
            </div>
          </li>
        </ol>
      </div>
    `
  },
  'reddit.com': {
    title: 'r/privacy - Adblocking and Digital Defense',
    url: 'https://reddit.com/r/privacy',
    domain: 'reddit.com',
    favicon: 'message-square',
    adsBlocked: 9,
    trackersBlocked: 16,
    content: `
      <div class="reddit-container">
        <header class="reddit-header">
          <div class="reddit-banner">r/privacy</div>
          <div class="reddit-meta">Online Privacy & Ad Neutralization Community</div>
        </header>
        <div class="reddit-feed">
          <div class="reddit-post">
            <div class="post-votes">▲ 742 ▼</div>
            <div class="post-body">
              <div class="post-author">Posted by u/clean_web • 3 hours ago</div>
              <h3 class="post-title">WebBuddy Shields blocked 18 trackers and 6 video ads on this page alone</h3>
              <p class="post-text">Web pages load instantaneously without clunky ad banners, popups, or tracking cookies slowing down the browser.</p>
            </div>
          </div>
        </div>
      </div>
    `
  }
};

export const DEFAULT_MOTRIX_TASKS = [
  {
    gid: 'm-task-1',
    filename: 'ubuntu-24.04-desktop-amd64.iso',
    url: 'https://releases.ubuntu.com/24.04/ubuntu-24.04-desktop-amd64.iso',
    type: 'direct', // 'direct' | 'torrent' | 'magnet'
    status: 'active', // 'active' | 'paused' | 'complete' | 'error'
    totalLength: 6144000000, // 5.72 GB
    completedLength: 4210000000, // 3.92 GB
    downloadSpeed: 18450000, // 17.6 MB/s
    uploadSpeed: 0,
    connections: 16,
    eta: 104, // seconds
    progress: 68.5,
    addedAt: Date.now() - 120000
  },
  {
    gid: 'm-task-2',
    filename: 'blender-4.2.0-macos-arm64.dmg',
    url: 'https://download.blender.org/release/Blender4.2/blender-4.2.0-macos-arm64.dmg',
    type: 'direct',
    status: 'complete',
    totalLength: 346000000, // 330 MB
    completedLength: 346000000,
    downloadSpeed: 0,
    uploadSpeed: 0,
    connections: 16,
    eta: 0,
    progress: 100,
    addedAt: Date.now() - 900000
  },
  {
    gid: 'm-task-3',
    filename: 'archlinux-2024.08.01-x86_64.iso',
    url: 'magnet:?xt=urn:btih:archlinux-2024-08-01&dn=archlinux-2024.08.01-x86_64.iso',
    type: 'torrent',
    status: 'active',
    totalLength: 1180000000, // 1.1 GB
    completedLength: 512000000, // 488 MB
    downloadSpeed: 12800000, // 12.2 MB/s
    uploadSpeed: 2100000, // 2.0 MB/s
    seeders: 84,
    peers: 142,
    connections: 32,
    eta: 52,
    progress: 43.4,
    addedAt: Date.now() - 60000
  }
];

export const SEARCH_RESULTS_MOCK = {
  'default': {
    query: 'search',
    organicResults: [
      {
        title: 'WebBuddy Ad & Tracker Blocker: Clean, Fast & Private Browsing',
        url: 'https://webbuddy.org',
        snippet: 'WebBuddy automatically blocks third-party ads, tracking scripts, and surveillance cookies without slowing down your system.'
      },
      {
        title: 'How Native Ad Blocking Protects Web Privacy',
        url: 'https://privacyguides.org/adblocking',
        snippet: 'Detailed breakdown of filter lists, EasyList rules, network request interception, and anti-fingerprinting farbling.'
      }
    ]
  }
};


