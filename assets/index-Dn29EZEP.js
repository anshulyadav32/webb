(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const U=[{id:"aurora",name:"Arctic Aurora Borealis",author:"Vincent Guth",location:"Tromsø, Norway",url:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=2560&q=85",thumbnail:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=400&q=75"},{id:"fuji",name:"Mount Fuji Sunrise",author:"Tomek Baginski",location:"Honshu, Japan",url:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2560&q=85",thumbnail:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=75"},{id:"cosmic",name:"Orion Deep Nebula",author:"NASA Hubble",location:"Orion Constellation",url:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2560&q=85",thumbnail:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=75"},{id:"dolomites",name:"Dolomites Alpine Peak",author:"Luca Bravo",location:"South Tyrol, Italy",url:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2560&q=85",thumbnail:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=75"},{id:"cyberpunk",name:"Neo Tokyo Rain",author:"Aleksandar Pasaric",location:"Shinjuku, Tokyo",url:"https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=2560&q=85",thumbnail:"https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=75"}],W=[{id:"1",title:"YouTube",url:"https://youtube.com",icon:"youtube",color:"#FF0000"},{id:"2",title:"Reddit",url:"https://reddit.com",icon:"message-square",color:"#FF4500"},{id:"3",title:"GitHub",url:"https://github.com",icon:"github",color:"#24292e"},{id:"4",title:"X / Twitter",url:"https://x.com",icon:"twitter",color:"#000000"},{id:"5",title:"Wikipedia",url:"https://wikipedia.org",icon:"book-open",color:"#636466"},{id:"6",title:"Hacker News",url:"https://news.ycombinator.com",icon:"terminal",color:"#FF6600"}],R=[{id:"b1",title:"WebBuddy Search",url:"brave://newtab",icon:"search"},{id:"b2",title:"GitHub",url:"https://github.com",icon:"github"},{id:"b3",title:"Hacker News",url:"https://news.ycombinator.com",icon:"terminal"},{id:"b4",title:"Wikipedia",url:"https://wikipedia.org",icon:"book-open"}],j=[{id:"note-1",title:"Adblock & Filter Rule Syntax",content:"Common Adblock syntax:\n- `||doubleclick.net^` : Block domain & subdomains\n- `##.ad-banner` : Hide CSS element on all domains\n- `@@||example.com^$document` : Whitelist domain exception",createdAt:"Aug 20, 2026",updatedAt:"Just now",pinned:!0,url:"https://github.com/webbuddy/adblock-core",color:"#00F2FE"},{id:"note-2",title:"Web Privacy Checklist",content:`1. Keep EasyList and EasyPrivacy filter subscriptions active.
2. Enable Canvas FARBLE anti-fingerprinting.
3. Force HTTPS encryption.
4. Isolate third-party cookie jars.`,createdAt:"Aug 20, 2026",updatedAt:"2h ago",pinned:!1,url:"https://en.wikipedia.org/wiki/Ad_blocking",color:"#7F00FF"},{id:"note-3",title:"Interesting Tech Articles to Read",content:`- Sub-millisecond Rust packet filtering benchmarks
- WebAssembly SIMD hardware acceleration
- Post-Quantum TLS 1.3 Key Encapsulation`,createdAt:"Aug 19, 2026",updatedAt:"Yesterday",pinned:!1,url:"https://news.ycombinator.com",color:"#10B981"}],V=[{id:"fl-easylist",name:"EasyList Primary Ad Blocker",rulesCount:78420,enabled:!0,lastUpdated:"Today"},{id:"fl-easyprivacy",name:"EasyPrivacy Tracker Shield",rulesCount:42190,enabled:!0,lastUpdated:"Today"},{id:"fl-ublock",name:"uBlock Network Filters",rulesCount:36800,enabled:!0,lastUpdated:"Today"},{id:"fl-fanboy",name:"Fanboy Annoyances & Cookie Banners",rulesCount:28540,enabled:!0,lastUpdated:"Yesterday"},{id:"fl-fingerprint",name:"WebBuddy Anti-Fingerprint FARBLE Engine",rulesCount:15300,enabled:!0,lastUpdated:"Today"}],D=[{id:"google",name:"Google",shortcut:":g",searchUrl:"https://www.google.com/search?q=%s",suggestUrl:"https://suggestqueries.google.com/complete/search?client=chrome&q=%s",icon:"google",color:"#4285F4",badgeColor:"#4285F4",isDefault:!0,isBuiltin:!0,description:"Default search engine • Fast & Comprehensive"},{id:"duckduckgo",name:"DuckDuckGo",shortcut:":ddg",searchUrl:"https://duckduckgo.com/?q=%s",suggestUrl:"",icon:"duckduckgo",color:"#DE5833",badgeColor:"#DE5833",isDefault:!1,isBuiltin:!0,description:"Privacy-focused search without user profiling"},{id:"bing",name:"Microsoft Bing",shortcut:":b",searchUrl:"https://www.bing.com/search?q=%s",suggestUrl:"",icon:"bing",color:"#008373",badgeColor:"#008373",isDefault:!1,isBuiltin:!0,description:"Microsoft intelligent search engine"},{id:"brave",name:"Brave Search",shortcut:":br",searchUrl:"https://search.brave.com/search?q=%s",suggestUrl:"",icon:"brave",color:"#FB542B",badgeColor:"#FB542B",isDefault:!1,isBuiltin:!0,description:"Independent index with anti-tracking privacy"},{id:"ecosia",name:"Ecosia",shortcut:":e",searchUrl:"https://www.ecosia.org/search?q=%s",suggestUrl:"",icon:"ecosia",color:"#008477",badgeColor:"#008477",isDefault:!1,isBuiltin:!0,description:"Green search engine that plants trees"},{id:"wikipedia",name:"Wikipedia",shortcut:":w",searchUrl:"https://en.wikipedia.org/wiki/Special:Search?search=%s",suggestUrl:"",icon:"book-open",color:"#636466",badgeColor:"#636466",isDefault:!1,isBuiltin:!0,description:"Direct search in Wikipedia encyclopedia"}],C={"google.com":{title:"Google Search",url:"https://www.google.com",domain:"google.com",favicon:"google",adsBlocked:7,trackersBlocked:14,content:`
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
    `},"wikipedia.org":{title:"Wikipedia, the free encyclopedia",url:"https://en.wikipedia.org/wiki/Ad_blocking",domain:"en.wikipedia.org",favicon:"book-open",adsBlocked:4,trackersBlocked:8,content:`
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
    `},"github.com":{title:"webbuddy/adblock-core: High-speed Rust network adblock & tracker engine",url:"https://github.com/webbuddy/adblock-core",domain:"github.com",favicon:"github",adsBlocked:2,trackersBlocked:11,content:`
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
    `},"news.ycombinator.com":{title:"Hacker News",url:"https://news.ycombinator.com",domain:"news.ycombinator.com",favicon:"terminal",adsBlocked:0,trackersBlocked:3,content:`
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
    `},"reddit.com":{title:"r/privacy - Adblocking and Digital Defense",url:"https://reddit.com/r/privacy",domain:"reddit.com",favicon:"message-square",adsBlocked:9,trackersBlocked:16,content:`
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
    `}},K={default:{organicResults:[{title:"WebBuddy Ad & Tracker Blocker: Clean, Fast & Private Browsing",url:"https://webbuddy.org",snippet:"WebBuddy automatically blocks third-party ads, tracking scripts, and surveillance cookies without slowing down your system."},{title:"How Native Ad Blocking Protects Web Privacy",url:"https://privacyguides.org/adblocking",snippet:"Detailed breakdown of filter lists, EasyList rules, network request interception, and anti-fingerprinting farbling."},{title:"Electronic Frontier Foundation (EFF) - Surveillance Tracker Defense",url:"https://eff.org",snippet:"Defending digital privacy and fighting against pervasive cross-site advertising networks."}]}};class J{constructor(){this.listeners=new Set;const s=this.loadFromStorage("webbuddy_top_sites",W),e=this.loadFromStorage("webbuddy_bookmarks",R),t=this.loadFromStorage("webbuddy_saved_notes",j),i=this.loadFromStorage("webbuddy_filter_lists",V),o=this.loadFromStorage("webbuddy_search_engines",D),r=this.loadFromStorage("webbuddy_settings",{showShieldsStats:!0,showTopSites:!0,showClock:!0,clockFormat:"12h",theme:"dark",blurWallpaper:!1,bookmarksBarVisible:!0,notesSidebarOpen:!1,defaultSearchEngine:"google"});this.state={searchEngines:o,defaultSearchEngine:r.defaultSearchEngine||"google",tabs:[{id:"tab-1",title:"New Tab",url:"brave://newtab",type:"ntp",favicon:"shield",pinned:!1,active:!0,adsBlockedCount:0,trackersBlockedCount:0,totalBlockedCount:0,history:["brave://newtab"],historyIndex:0,isLoading:!1}],activeTabId:"tab-1",wallpapers:U,activeWallpaperIndex:0,notes:t,isNotesSidebarOpen:r.notesSidebarOpen||!1,activeNoteId:t.length>0?t[0].id:null,shields:{shieldsEnabled:!0,adsBlockedTotal:5842,trackersBlockedTotal:12940,popupsBlockedTotal:342,bandwidthSavedMB:184.5,timeSavedMin:8.6,blockAds:!0,blockTrackers:!0,blockFingerprinting:!0,blockAnnoyances:!0,blockScripts:!1,upgradeHttps:!0,filterLists:i},topSites:s,bookmarks:e,media:{isPlaying:!1,isPipActive:!1,isOverlapping:!1,autoPip:!0,autoHideControls:!0,playbackSpeed:1,volume:.85,isMuted:!1,currentTime:38,duration:180,videoTitle:"WebBuddy Ad & Tracker Blocker: Sub-Millisecond Packet Filtering",videoUrl:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",adAutoskip:!0,loop:!1},activeModal:null,settings:r}}loadFromStorage(s,e){try{const t=localStorage.getItem(s);return t?JSON.parse(t):e}catch{return e}}saveToStorage(s,e){try{localStorage.setItem(s,JSON.stringify(e))}catch(t){console.warn("Storage save failed",t)}}subscribe(s){return this.listeners.add(s),()=>this.listeners.delete(s)}notify(s,e){for(const t of this.listeners)t(this.state,s,e)}getState(){return this.state}getActiveTab(){return this.state.tabs.find(s=>s.id===this.state.activeTabId)||this.state.tabs[0]}getActiveWallpaper(){return this.state.wallpapers[this.state.activeWallpaperIndex%this.state.wallpapers.length]}getTotalFilterRulesCount(){return this.state.shields.filterLists.filter(s=>s.enabled).reduce((s,e)=>s+e.rulesCount,0)}createTab(s="brave://newtab",e="New Tab"){const t=s==="brave://newtab",i="tab-"+Date.now(),o=t?0:Math.floor(Math.random()*8)+3,r=t?0:Math.floor(Math.random()*12)+6,d={id:i,title:e,url:s,type:t?"ntp":this.resolveUrlType(s),favicon:t?"shield":"globe",pinned:!1,active:!0,adsBlockedCount:o,trackersBlockedCount:r,totalBlockedCount:o+r,history:[s],historyIndex:0,isLoading:!1};this.state.tabs.forEach(c=>c.active=!1),this.state.tabs.push(d),this.state.activeTabId=i,t||this.incrementShieldStats(o,r),this.notify("TAB_CREATED",d)}switchTab(s){const e=this.state.tabs.find(t=>t.id===s);e&&(this.state.tabs.forEach(t=>t.active=t.id===s),this.state.activeTabId=s,this.notify("TAB_SWITCHED",e))}closeTab(s){if(this.state.tabs.length===1){this.navigateToUrl("brave://newtab");return}const e=this.state.tabs.findIndex(i=>i.id===s);if(e===-1)return;const t=this.state.tabs[e].active;if(this.state.tabs.splice(e,1),t){const i=this.state.tabs[Math.max(0,e-1)];i.active=!0,this.state.activeTabId=i.id}this.notify("TAB_CLOSED",{tabId:s,activeTabId:this.state.activeTabId})}togglePinTab(s){const e=this.state.tabs.find(t=>t.id===s);e&&(e.pinned=!e.pinned,this.state.tabs.sort((t,i)=>(i.pinned?1:0)-(t.pinned?1:0)),this.notify("TAB_PINNED",e))}getDefaultSearchEngine(){const s=this.state.settings.defaultSearchEngine||this.state.defaultSearchEngine||"google";return this.state.searchEngines.find(e=>e.id===s)||this.state.searchEngines.find(e=>e.isDefault)||this.state.searchEngines[0]||D[0]}getSearchEngines(){return this.state.searchEngines}getSearchEngineById(s){return this.state.searchEngines.find(e=>e.id===s)}setDefaultSearchEngine(s){const e=this.state.searchEngines.find(t=>t.id===s);e&&(this.state.searchEngines.forEach(t=>{t.isDefault=t.id===s}),this.state.defaultSearchEngine=s,this.state.settings.defaultSearchEngine=s,this.saveToStorage("webbuddy_search_engines",this.state.searchEngines),this.saveToStorage("webbuddy_settings",this.state.settings),this.notify("SEARCH_ENGINE_CHANGED",e),this.notify("SEARCH_ENGINES_UPDATED",this.state.searchEngines),this.notify("SETTINGS_UPDATED",this.state.settings))}addSearchEngine({name:s,shortcut:e,searchUrl:t,icon:i="search"}){if(!s||!t)return null;let o=e?e.trim():"";o&&!o.startsWith(":")&&!o.startsWith("!")&&(o=":"+o);const d={id:"se-"+Date.now(),name:s.trim(),shortcut:o,searchUrl:t.trim(),suggestUrl:"",icon:i||"search",color:"#4FACFE",badgeColor:"#4FACFE",isDefault:!1,isBuiltin:!1,description:`Custom search engine (${s.trim()})`};return this.state.searchEngines.push(d),this.saveToStorage("webbuddy_search_engines",this.state.searchEngines),this.notify("SEARCH_ENGINES_UPDATED",this.state.searchEngines),d}updateSearchEngine(s,{name:e,shortcut:t,searchUrl:i}){const o=this.state.searchEngines.findIndex(d=>d.id===s);if(o===-1)return;let r=t?t.trim():"";r&&!r.startsWith(":")&&!r.startsWith("!")&&(r=":"+r),this.state.searchEngines[o]={...this.state.searchEngines[o],name:e.trim()||this.state.searchEngines[o].name,shortcut:r,searchUrl:i.trim()||this.state.searchEngines[o].searchUrl},this.saveToStorage("webbuddy_search_engines",this.state.searchEngines),this.notify("SEARCH_ENGINES_UPDATED",this.state.searchEngines)}deleteSearchEngine(s){const e=this.state.searchEngines.findIndex(i=>i.id===s);if(e===-1)return;const t=this.state.searchEngines[e].isDefault||this.state.defaultSearchEngine===s;if(this.state.searchEngines.splice(e,1),t){const i=this.state.searchEngines.find(o=>o.id==="google")||this.state.searchEngines[0];i&&this.setDefaultSearchEngine(i.id)}this.saveToStorage("webbuddy_search_engines",this.state.searchEngines),this.notify("SEARCH_ENGINES_UPDATED",this.state.searchEngines)}resetSearchEnginesToDefault(){this.state.searchEngines=JSON.parse(JSON.stringify(D)),this.state.defaultSearchEngine="google",this.state.settings.defaultSearchEngine="google",this.saveToStorage("webbuddy_search_engines",this.state.searchEngines),this.saveToStorage("webbuddy_settings",this.state.settings),this.notify("SEARCH_ENGINES_UPDATED",this.state.searchEngines),this.notify("SEARCH_ENGINE_CHANGED",this.getDefaultSearchEngine()),this.notify("SETTINGS_UPDATED",this.state.settings)}resolveSearchQuery(s){let e=s.trim(),t=this.getDefaultSearchEngine();const i=e.split(/\s+/);if(i.length>1){const r=i[0].toLowerCase(),d=this.state.searchEngines.find(c=>{if(!c.shortcut)return!1;const b=c.shortcut.toLowerCase();return b===r||b===":"+r||b==="!"+r||":"+b===r});d&&(t=d,e=i.slice(1).join(" "))}let o=t.searchUrl;return o.includes("%s")?o=o.replace("%s",encodeURIComponent(e)):o=o+(o.includes("?")?"&q=":"?q=")+encodeURIComponent(e),{engine:t,query:e,url:o}}resolveUrlType(s){const e=s.trim();return e==="brave://newtab"||e==="newtab"?"ntp":e.startsWith("brave://search")?"search":(!e.includes(".")&&!e.startsWith("http://")&&!e.startsWith("https://")&&!e.startsWith("brave://"),"web")}navigateToUrl(s){const e=this.getActiveTab();if(!e)return;let t=s.trim(),i="web",o="Web Page",r="globe";if(!t||t==="brave://newtab"||t==="newtab")t="brave://newtab",i="ntp",o="New Tab",r="shield";else if(t.startsWith("brave://search"))i="search",o=`${new URLSearchParams(t.split("?")[1]||"").get("q")||"Search"} - WebBuddy Search`,r="search";else if(!t.includes(".")&&!t.startsWith("http://")&&!t.startsWith("https://")&&!t.startsWith("brave://")){const d=this.resolveSearchQuery(t);i="web",o=`${d.query} - ${d.engine.name} Search`,t=d.url,r=d.engine.icon||"search"}else{!t.startsWith("http://")&&!t.startsWith("https://")&&(t="https://"+t);try{o=new URL(t).hostname.replace("www.",""),C[o]&&(o=C[o].title,r=C[o].favicon||"globe")}catch{o=t}}e.isLoading=!0,this.notify("TAB_LOADING",e),setTimeout(()=>{if(e.url=t,e.type=i,e.title=o,e.favicon=r,e.isLoading=!1,e.history[e.historyIndex]!==t&&(e.history=e.history.slice(0,e.historyIndex+1),e.history.push(t),e.historyIndex=e.history.length-1),i==="web"||i==="search"){const d=Math.floor(Math.random()*6)+2,c=Math.floor(Math.random()*10)+5;e.adsBlockedCount=d,e.trackersBlockedCount=c,e.totalBlockedCount=d+c,this.incrementShieldStats(d,c)}else e.adsBlockedCount=0,e.trackersBlockedCount=0,e.totalBlockedCount=0;this.notify("NAVIGATION_COMPLETE",e)},250)}goBack(){const s=this.getActiveTab();s&&s.historyIndex>0&&(s.historyIndex--,this.navigateToUrl(s.history[s.historyIndex]))}goForward(){const s=this.getActiveTab();s&&s.historyIndex<s.history.length-1&&(s.historyIndex++,this.navigateToUrl(s.history[s.historyIndex]))}reloadCurrentTab(){const s=this.getActiveTab();s&&this.navigateToUrl(s.url)}nextWallpaper(){this.state.activeWallpaperIndex=(this.state.activeWallpaperIndex+1)%this.state.wallpapers.length,this.notify("WALLPAPER_CHANGED",this.getActiveWallpaper())}selectWallpaper(s){s>=0&&s<this.state.wallpapers.length&&(this.state.activeWallpaperIndex=s,this.notify("WALLPAPER_CHANGED",this.getActiveWallpaper()))}toggleShields(){this.state.shields.shieldsEnabled=!this.state.shields.shieldsEnabled,this.notify("SHIELDS_TOGGLED",this.state.shields)}updateShieldOption(s,e){this.state.shields.hasOwnProperty(s)&&(this.state.shields[s]=e,this.notify("SHIELDS_OPTION_CHANGED",{key:s,value:e}))}toggleFilterList(s){const e=this.state.shields.filterLists.find(t=>t.id===s);e&&(e.enabled=!e.enabled,this.saveToStorage("webbuddy_filter_lists",this.state.shields.filterLists),this.notify("FILTER_LIST_TOGGLED",e))}incrementShieldStats(s=1,e=1){this.state.shields.shieldsEnabled&&(this.state.shields.adsBlockedTotal+=s,this.state.shields.trackersBlockedTotal+=e,this.state.shields.bandwidthSavedMB=parseFloat((this.state.shields.bandwidthSavedMB+(s+e)*.024).toFixed(1)),this.state.shields.timeSavedMin=parseFloat((this.state.shields.timeSavedMin+(s+e)*.002).toFixed(1)),this.notify("SHIELDS_STATS_UPDATED",this.state.shields))}addTopSite(s,e,t="globe"){const i={id:"site-"+Date.now(),title:s,url:e.startsWith("http")?e:"https://"+e,icon:t,color:"#00F2FE"};this.state.topSites.push(i),this.saveToStorage("webbuddy_top_sites",this.state.topSites),this.notify("TOP_SITES_UPDATED",this.state.topSites)}removeTopSite(s){this.state.topSites=this.state.topSites.filter(e=>e.id!==s),this.saveToStorage("webbuddy_top_sites",this.state.topSites),this.notify("TOP_SITES_UPDATED",this.state.topSites)}addBookmark(s,e){const t={id:"bm-"+Date.now(),title:s,url:e.startsWith("http")?e:"https://"+e,icon:"bookmark"};this.state.bookmarks.push(t),this.saveToStorage("webbuddy_bookmarks",this.state.bookmarks),this.notify("BOOKMARKS_UPDATED",this.state.bookmarks)}toggleNotesSidebar(s){this.state.isNotesSidebarOpen=s!==void 0?s:!this.state.isNotesSidebarOpen,this.state.settings.notesSidebarOpen=this.state.isNotesSidebarOpen,this.saveToStorage("webbuddy_settings",this.state.settings),this.notify("NOTES_SIDEBAR_TOGGLED",this.state.isNotesSidebarOpen)}selectNote(s){this.state.activeNoteId=s,this.notify("NOTE_SELECTED",s)}addNote(s="Untitled Note",e="",t="",i="#00F2FE"){const o={id:"note-"+Date.now(),title:s.trim()||"Untitled Note",content:e,url:t||(this.getActiveTab().type==="web"?this.getActiveTab().url:""),color:i,pinned:!1,createdAt:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),updatedAt:"Just now"};return this.state.notes.unshift(o),this.state.activeNoteId=o.id,this.saveToStorage("webbuddy_saved_notes",this.state.notes),this.notify("NOTE_ADDED",o),o}updateNote(s,e){const t=this.state.notes.find(i=>i.id===s);t&&(Object.assign(t,e,{updatedAt:"Just now"}),this.saveToStorage("webbuddy_saved_notes",this.state.notes),this.notify("NOTE_UPDATED",t))}deleteNote(s){this.state.notes=this.state.notes.filter(e=>e.id!==s),this.state.activeNoteId===s&&(this.state.activeNoteId=this.state.notes.length>0?this.state.notes[0].id:null),this.saveToStorage("webbuddy_saved_notes",this.state.notes),this.notify("NOTE_DELETED",s)}togglePinNote(s){const e=this.state.notes.find(t=>t.id===s);e&&(e.pinned=!e.pinned,this.state.notes.sort((t,i)=>(i.pinned?1:0)-(t.pinned?1:0)),this.saveToStorage("webbuddy_saved_notes",this.state.notes),this.notify("NOTE_UPDATED",e))}getNotesCapacityStats(){const e=JSON.stringify(this.state.notes||[]),t=new Blob([e]).size,i=(t/1024).toFixed(2),o=(t/(1024*1024)).toFixed(3),r=Math.min(100,parseFloat((t/5242880*100).toFixed(2)));return{usedBytes:t,usedKb:i,usedMb:o,maxBytes:5242880,maxMb:5,percentUsed:r,notesCount:this.state.notes.length,maxNotesLimit:500,remainingKb:((5242880-t)/1024).toFixed(1)}}exportNotesJson(){const s="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.state.notes,null,2)),e=document.createElement("a");e.setAttribute("href",s),e.setAttribute("download",`webbuddy_notes_backup_${Date.now()}.json`),e.click()}togglePlayPause(){this.state.media.isPlaying=!this.state.media.isPlaying,this.notify("MEDIA_PLAY_STATE_CHANGED",this.state.media.isPlaying)}togglePip(s){this.state.media.isPipActive=s!==void 0?s:!this.state.media.isPipActive,this.notify("MEDIA_PIP_TOGGLED",this.state.media.isPipActive)}toggleAutoPip(){this.state.media.autoPip=!this.state.media.autoPip,this.notify("MEDIA_AUTOPIP_TOGGLED",this.state.media.autoPip)}toggleOverlapping(s){this.state.media.isOverlapping=s!==void 0?s:!this.state.media.isOverlapping,this.notify("MEDIA_OVERLAPPING_TOGGLED",this.state.media.isOverlapping)}toggleAutoHideControls(){this.state.media.autoHideControls=!this.state.media.autoHideControls,this.notify("MEDIA_AUTOHIDE_TOGGLED",this.state.media.autoHideControls)}setPlaybackSpeed(s){this.state.media.playbackSpeed=s,this.notify("MEDIA_SPEED_CHANGED",s)}setMediaVolume(s){this.state.media.volume=Math.max(0,Math.min(1,s)),this.state.media.isMuted=this.state.media.volume===0,this.notify("MEDIA_VOLUME_CHANGED",this.state.media.volume)}toggleMediaMute(){this.state.media.isMuted=!this.state.media.isMuted,this.notify("MEDIA_MUTE_TOGGLED",this.state.media.isMuted)}seekMedia(s){this.state.media.currentTime=Math.max(0,Math.min(this.state.media.duration,s)),this.notify("MEDIA_TIME_SEEKED",this.state.media.currentTime)}skipMediaTime(s){this.seekMedia(this.state.media.currentTime+s)}toggleMediaLoop(){this.state.media.loop=!this.state.media.loop,this.notify("MEDIA_LOOP_TOGGLED",this.state.media.loop)}openModal(s){this.state.activeModal=this.state.activeModal===s?null:s,this.notify("MODAL_CHANGED",this.state.activeModal)}closeModal(){this.state.activeModal=null,this.notify("MODAL_CHANGED",null)}updateSetting(s,e){this.state.settings[s]=e,this.saveToStorage("webbuddy_settings",this.state.settings),this.notify("SETTINGS_UPDATED",{key:s,val:e,settings:this.state.settings})}}const n=new J,Y=`
<svg class="webbuddy-logo-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Primary Neon Gradient: Cyan to Electric Violet & Magenta -->
    <linearGradient id="wbGradNeon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F2FE" />
      <stop offset="35%" stop-color="#38BDF8" />
      <stop offset="70%" stop-color="#818CF8" />
      <stop offset="100%" stop-color="#C084FC" />
    </linearGradient>

    <!-- Deep Cyber Prism Gradient -->
    <linearGradient id="wbGradPrism" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="50%" stop-color="#161B33" />
      <stop offset="100%" stop-color="#241442" />
    </linearGradient>

    <!-- Orbital Energy Ring Gradient -->
    <linearGradient id="wbGradRing" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F2FE" stop-opacity="0.9" />
      <stop offset="50%" stop-color="#818CF8" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#C084FC" stop-opacity="0.9" />
    </linearGradient>

    <!-- Glowing Aura Filter -->
    <filter id="wbGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="4" result="glowBlur" />
      <feMerge>
        <feMergeNode in="glowBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <radialGradient id="wbCoreGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00F2FE" stop-opacity="0.5" />
      <stop offset="50%" stop-color="#818CF8" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Ambient Glow Behind -->
  <circle cx="50" cy="50" r="40" fill="url(#wbCoreGlow)" />

  <!-- Background Orbital Ring Segment -->
  <ellipse cx="50" cy="50" rx="43" ry="17" transform="rotate(-25 50 50)" 
           stroke="url(#wbGradRing)" stroke-width="1.8" stroke-dasharray="6 4" opacity="0.65" />

  <!-- Futuristic Hexagonal Prism Base Shell -->
  <polygon points="50,7 87,27 87,73 50,93 13,73 13,27" 
           fill="url(#wbGradPrism)" stroke="url(#wbGradNeon)" stroke-width="2.5" stroke-linejoin="round" />

  <!-- Prism Facets Refraction Shading -->
  <polygon points="50,7 87,27 50,50" fill="#00F2FE" opacity="0.08" />
  <polygon points="13,27 50,7 50,50" fill="#818CF8" opacity="0.06" />
  <polygon points="50,93 87,73 50,50" fill="#C084FC" opacity="0.09" />
  <polygon points="13,73 50,93 50,50" fill="#38BDF8" opacity="0.06" />

  <!-- Glowing Geometric 'W' Prism Glyph -->
  <!-- Left Facet Wing -->
  <path d="M26 34 L38 72 L46 53 L39 37 Z" fill="url(#wbGradNeon)" opacity="0.85" />
  <!-- Right Facet Wing -->
  <path d="M74 34 L62 72 L54 53 L61 37 Z" fill="url(#wbGradNeon)" opacity="0.85" />
  <!-- Central Glowing Apex -->
  <polygon points="50,33 56,54 50,49 44,54" fill="#00F2FE" filter="url(#wbGlowFilter)" />

  <!-- Razor Crisp Vector Path Strokes -->
  <polyline points="26,34 38,72 50,47 62,72 74,34" 
            stroke="url(#wbGradNeon)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#wbGlowFilter)" />
  <polyline points="26,34 38,72 50,47 62,72 74,34" 
            stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" />

  <!-- Foreground Orbital Sweeping Arc -->
  <path d="M12 60 C24 77 74 84 88 50" 
        stroke="url(#wbGradNeon)" stroke-width="2" stroke-linecap="round" opacity="0.9" />
  <circle cx="88" cy="50" r="3.2" fill="#00F2FE" filter="url(#wbGlowFilter)" />
  <circle cx="88" cy="50" r="1.5" fill="#FFFFFF" />

  <!-- Quantum Core Sparkle Node -->
  <circle cx="50" cy="24" r="2.5" fill="#FFFFFF" filter="url(#wbGlowFilter)" />
  <path d="M50 16 V32 M42 24 H58" stroke="#00F2FE" stroke-width="1.8" stroke-linecap="round" />
</svg>
`;function p(a,s="",e=16){const t=`icon ${s}`;switch(a){case"webbuddy-logo":return`<div class="${t} wb-logo-wrapper" style="width:${e}px; height:${e}px;">${Y}</div>`;case"shield":case"shield-check":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`;case"sparkles":case"leo":case"ai":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>`;case"rewards":case"bat":case"triangle":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 20 2 20 12 2"></polygon></svg>`;case"wallet":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>`;case"search":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;case"plus":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;case"x":case"close":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;case"arrow-left":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`;case"arrow-right":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;case"rotate-cw":case"refresh":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>`;case"home":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;case"lock":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;case"star":case"bookmark":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;case"pin":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="17" x2="12" y2="22"></line><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path></svg>`;case"settings":case"sliders":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`;case"image":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`;case"chevron-down":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;case"chevron-up":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`;case"link":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;case"wifi":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`;case"bluetooth":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline></svg>`;case"globe":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;case"send":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;case"zap":case"bolt":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;case"coins":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>`;case"circle-dollar-sign":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>`;case"clock":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;case"check":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;case"copy":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;case"file-text":case"notes":case"notepad":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>`;case"trash":case"trash-2":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`;case"edit":case"pen":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`;case"download":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`;case"hard-drive":case"database":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;case"play":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;case"pause":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;case"pip":case"picture-in-picture":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><rect x="12" y="11" width="8" height="7" rx="1" fill="currentColor" fill-opacity="0.3"></rect></svg>`;case"skip-back":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>`;case"skip-forward":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>`;case"volume-2":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;case"volume-x":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;case"maximize-2":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`;case"repeat":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>`;case"layers":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`;case"puzzle":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.439 7.85c-.049-.322.059-.648.289-.878l1.568-1.568c.47-.47.704-1.096.704-1.704s-.234-1.234-.704-1.704a2.41 2.41 0 0 0-3.408 0l-1.568 1.568c-.23.23-.556.338-.878.289A5.003 5.003 0 0 0 10.5 4a5 5 0 0 0-4.945 4.095c-.049.322-.338.556-.66.605L3.327 8.989c-.61.092-1.157.433-1.523.948a2.406 2.406 0 0 0 .285 2.871l1.568 1.568c.23.23.338.556.289.878A5.003 5.003 0 0 0 4 20.5a5 5 0 0 0 4.095 4.945c.322.049.556-.23.605-.552l.289-1.568c.092-.61.433-1.157.948-1.523a2.406 2.406 0 0 1 2.871.285l1.568 1.568c.47.47 1.096.704 1.704.704s1.234-.234 1.704-.704a2.41 2.41 0 0 0 0-3.408l-1.568-1.568c-.23-.23-.338-.556-.289-.878A5.003 5.003 0 0 0 20.5 15.5a5 5 0 0 0 4.945-4.095c.049-.322-.23-.556-.552-.605l-1.568-.289c-.61-.092-1.157-.433-1.523-.948a2.406 2.406 0 0 1 .285-2.871z"></path></svg>`;case"menu":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;case"external-link":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;case"google":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>`;case"duckduckgo":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor"><path fill="#DE5833" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c4.686 0 8.57 3.37 9.4 7.82-1.3-.87-2.88-1.39-4.57-1.43l1.1-3.32c.1-.31-.07-.65-.38-.75-.31-.1-.65.07-.75.38l-1.18 3.55c-1.15-.02-2.31.11-3.41.4-1.16-.76-2.5-1.22-3.95-1.31l1.45-3.37c.13-.3-.02-.66-.32-.79-.3-.13-.66.02-.79.32L7.02 7.78C5.23 8.35 3.73 9.53 2.8 11.08 3.79 6.18 8.44 2.4 12 2.4zM6.9 11.2c.88 0 1.6.72 1.6 1.6s-.72 1.6-1.6 1.6-1.6-.72-1.6-1.6.72-1.6 1.6-1.6zm10.2 0c.88 0 1.6.72 1.6 1.6s-.72 1.6-1.6 1.6-1.6-.72-1.6-1.6.72-1.6 1.6-1.6zm-5.1 3.2c1.77 0 3.3.99 4.08 2.44-.45.31-1.02.5-1.63.5h-4.9c-.61 0-1.18-.19-1.63-.5.78-1.45 2.31-2.44 4.08-2.44z"/></svg>`;case"bing":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor"><path fill="#008373" d="M4 2v19.46l5.77 3.33 9.45-5.46v-6.38l-6.15 3.55v-7.8l-4.1 2.37V2H4zm4.97 4.95l4.1-2.37v5.27l-4.1 2.37V6.95z"/></svg>`;case"brave":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor"><path fill="#FB542B" d="M12 2L4 5.5v6.2c0 5.4 3.4 10.4 8 11.8 4.6-1.4 8-6.4 8-11.8V5.5L12 2zm0 3.3l5.5 2.4v4.5c0 3.9-2.4 7.5-5.5 8.6-3.1-1.1-5.5-4.7-5.5-8.6V7.7l5.5-2.4zm-2 5.2l-1.5 1.5 3.5 3.5 6-6-1.5-1.5-4.5 4.5-2-2z"/></svg>`;case"ecosia":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor"><path fill="#008477" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V19h-2v-.07C7.61 18.52 5 15.57 5 12c0-.34.03-.67.08-1 .6 2.83 3.08 5 6.07 5s5.47-2.17 6.07-5c.05.33.08.66.08 1 0 3.57-2.61 6.52-6.3 6.93zM12 5c2.76 0 5 2.24 5 5 0 .34-.03.67-.08 1-.6-2.83-3.08-5-6.07-5s-5.47 2.17-6.07 5c-.05-.33-.08-.66-.08-1 0-2.76 2.24-5 5-5z"/></svg>`;case"yahoo":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor"><path fill="#6001D2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.65 14.5h-2.3l.03-3.75-3.32-6.5h2.47l2.03 4.4 2-4.4h2.44l-3.35 6.5v3.75z"/></svg>`;case"search-engine":case"search-settings":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><path d="M11 8v6M8 11h6"></path></svg>`;case"check-circle":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;case"more-vertical":return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>`;default:return`<svg class="${t}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>`}}function Q(a){function s(){var t;const e=n.getState();n.getActiveTab(),a.innerHTML=`
      <div class="window-top-bar">
        <div class="traffic-lights">
          <div class="traffic-light close" title="Close Window"></div>
          <div class="traffic-light minimize" title="Minimize"></div>
          <div class="traffic-light maximize" title="Zoom"></div>
        </div>

        <div class="brand-top-badge" id="brandHomeBtn" title="WebBuddy Browser - Open New Tab">
          ${p("webbuddy-logo","",18)}
          <span class="brand-top-name">WebBuddy</span>
        </div>

        <div class="tab-strip" id="tabStrip">
          ${e.tabs.map(i=>`
            <div class="browser-tab ${i.active?"active":""} ${i.pinned?"pinned":""}" data-tab-id="${i.id}" title="${i.title}">
              <div class="tab-favicon">
                ${p(i.favicon||"globe","",14)}
              </div>
              <span class="tab-title">${X(i.title)}</span>
              <button class="tab-close-btn" data-close-tab="${i.id}" title="Close Tab">
                ${p("close","",11)}
              </button>
            </div>
          `).join("")}

          <button class="new-tab-btn" id="newTabBtn" title="New Tab (Ctrl+T)">
            ${p("plus","",14)}
          </button>
        </div>
      </div>
    `,(t=a.querySelector("#brandHomeBtn"))==null||t.addEventListener("click",()=>{n.navigateToUrl("brave://newtab")}),a.querySelector("#newTabBtn").addEventListener("click",()=>{n.createTab()}),a.querySelectorAll(".browser-tab").forEach(i=>{i.addEventListener("click",o=>{if(o.target.closest("[data-close-tab]"))return;const r=i.dataset.tabId;n.switchTab(r)}),i.addEventListener("dblclick",o=>{o.preventDefault();const r=i.dataset.tabId;n.togglePinTab(r)})}),a.querySelectorAll("[data-close-tab]").forEach(i=>{i.addEventListener("click",o=>{o.stopPropagation();const r=i.dataset.closeTab;n.closeTab(r)})})}n.subscribe((e,t)=>{["TAB_CREATED","TAB_SWITCHED","TAB_CLOSED","TAB_PINNED","NAVIGATION_COMPLETE"].includes(t)&&s()}),s()}function X(a){return a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function Z(a){function s(){var f,k,h,u,v,g,m;const i=n.getState(),o=n.getActiveTab(),d=o.type==="ntp"?"":o.url,c=i.shields.shieldsEnabled,b=o.totalBlockedCount||0,l=n.getDefaultSearchEngine();a.innerHTML=`
      <div class="browser-navbar">
        <div class="nav-buttons">
          <button class="nav-btn" id="notesSidebarToggleBtn" title="Toggle Notes Sidebar (Cmd+N)">
            ${p("file-text","",15)}
          </button>
          <button class="nav-btn" id="navBackBtn" title="Click to go back" ${o.historyIndex<=0?"disabled":""}>
            ${p("arrow-left","",16)}
          </button>
          <button class="nav-btn" id="navForwardBtn" title="Click to go forward" ${o.historyIndex>=o.history.length-1?"disabled":""}>
            ${p("arrow-right","",16)}
          </button>
          <button class="nav-btn" id="navReloadBtn" title="Reload this page">
            ${p("refresh",o.isLoading?"spin":"",15)}
          </button>
          <button class="nav-btn" id="navHomeBtn" title="Open home page">
            ${p("home","",15)}
          </button>
        </div>

        <div class="omnibox-wrapper">
          <div class="omnibox">
            <!-- WebBuddy Shields Ad & Tracker Blocker Badge -->
            <button class="shield-badge-btn ${c?"":"shields-down"}" id="shieldBadgeBtn" title="Ad & Tracker Blocker: ${c?"PROTECTED":"PAUSED"}">
              ${p("shield","",14)}
              <span>${c?`${b} Blocked`:"OFF"}</span>
            </button>

            <!-- Video Auto-PiP Overlay Button (Right near Ads Block) -->
            <button class="shield-badge-btn ${(f=i.media)!=null&&f.isPipActive?"":"shields-down"}" id="omniboxPipBtn" style="background:${(k=i.media)!=null&&k.isPipActive?"linear-gradient(135deg, #00F2FE 0%, #7F00FF 100%)":"#2C2F40"}; gap:4px;" title="Video Controls & Auto-PiP Overlay Feature">
              ${p("pip","",13)}
              <span>${(h=i.media)!=null&&h.isPipActive?"PiP Overlay ON":"Auto PiP"}</span>
            </button>

            <!-- Active Search Engine Indicator Badge -->
            <button class="shield-badge-btn" id="activeSearchEngineBadge" style="background:rgba(255,255,255,0.06); gap:5px; border-color:rgba(255,255,255,0.1);" title="Default Search Engine: ${B(l.name)} (Click to change)">
              ${p(l.icon||"search","",14)}
              <span style="color:var(--text-secondary); font-size:11px; font-weight:600;">${M(l.name)}</span>
            </button>

            <!-- URL / Search Input -->
            <input 
              type="text" 
              class="omnibox-input" 
              id="omniboxInput" 
              placeholder="Search with ${B(l.name)} or enter website address..." 
              value="${B(d)}"
              autocomplete="off"
              spellcheck="false"
            />

            <div class="omnibox-actions">
              <button class="omnibox-action-btn" id="bookmarkBtn" title="Bookmark this tab">
                ${p("star","",14)}
              </button>
            </div>
          </div>

          <!-- Autocomplete Dropdown -->
          <div class="omnibox-dropdown" id="omniboxDropdown" style="display: none;"></div>
        </div>

        <!-- Action Buttons: Ad Blocker + Video PiP Overlay -->
        <div class="browser-actions">
          <button class="action-pill-btn" id="adblockControlBtn" style="border-color:rgba(0,242,254,0.3); color:#00F2FE;" title="Adblocker & Filter Lists">
            ${p("shield-check","",14)}
            <span>Ad Blocker ON</span>
          </button>

          <button class="action-pill-btn" id="videoControlBtn" style="border-color:${(u=i.media)!=null&&u.isPipActive?"#00F2FE":"rgba(127,0,255,0.4)"}; color:${(v=i.media)!=null&&v.isPipActive?"#00F2FE":"#A78BFA"};" title="Control Video, Auto-PiP & Overlay">
            ${p((g=i.media)!=null&&g.isPlaying?"play":"pip","",14)}
            <span>${(m=i.media)!=null&&m.isPipActive?"PiP Active":"Auto PiP Overlay"}</span>
          </button>

          <button class="action-icon-btn" id="settingsMenuBtn" title="Settings & Search Engines">
            ${p("settings","",16)}
          </button>
        </div>
      </div>
    `,e()}function e(){var r,d,c,b,l,f,k,h,u,v,g,m;const i=a.querySelector("#omniboxInput"),o=a.querySelector("#omniboxDropdown");(r=a.querySelector("#notesSidebarToggleBtn"))==null||r.addEventListener("click",()=>{n.toggleNotesSidebar()}),(d=a.querySelector("#navBackBtn"))==null||d.addEventListener("click",()=>n.goBack()),(c=a.querySelector("#navForwardBtn"))==null||c.addEventListener("click",()=>n.goForward()),(b=a.querySelector("#navReloadBtn"))==null||b.addEventListener("click",()=>n.reloadCurrentTab()),(l=a.querySelector("#navHomeBtn"))==null||l.addEventListener("click",()=>n.navigateToUrl("brave://newtab")),(f=a.querySelector("#omniboxPipBtn"))==null||f.addEventListener("click",y=>{y.stopPropagation(),n.openModal("videoControls")}),(k=a.querySelector("#videoControlBtn"))==null||k.addEventListener("click",y=>{y.stopPropagation(),n.openModal("videoControls")}),(h=a.querySelector("#shieldBadgeBtn"))==null||h.addEventListener("click",y=>{y.stopPropagation(),n.openModal("shields")}),(u=a.querySelector("#adblockControlBtn"))==null||u.addEventListener("click",y=>{y.stopPropagation(),n.openModal("shields")}),(v=a.querySelector("#activeSearchEngineBadge"))==null||v.addEventListener("click",y=>{y.stopPropagation(),n.openModal("settings")}),(g=a.querySelector("#settingsMenuBtn"))==null||g.addEventListener("click",y=>{y.stopPropagation(),n.openModal("settings")}),(m=a.querySelector("#bookmarkBtn"))==null||m.addEventListener("click",()=>{const y=n.getActiveTab();y&&y.type!=="ntp"&&(n.addBookmark(y.title,y.url),I("⭐ Bookmark saved!"))}),i.addEventListener("focus",()=>{i.select(),t(i.value)}),i.addEventListener("input",()=>{t(i.value)}),i.addEventListener("keydown",y=>{if(y.key==="Enter"){const L=i.value.trim();L&&(o.style.display="none",n.navigateToUrl(L),i.blur())}else y.key==="Escape"&&(o.style.display="none")}),document.addEventListener("click",y=>{y.target.closest(".omnibox-wrapper")||(o.style.display="none")})}function t(i){var h;const o=a.querySelector("#omniboxDropdown"),r=i.trim();if(!r){o.style.display="none";return}const d=n.getDefaultSearchEngine(),c=n.getSearchEngines();let b=d,l=r;const f=r.split(/\s+/);if(f.length>0){const u=f[0].toLowerCase(),v=c.find(g=>g.shortcut&&(g.shortcut.toLowerCase()===u||g.shortcut.toLowerCase()===":"+u||g.shortcut.toLowerCase()==="!"+u));v&&(b=v,l=f.slice(1).join(" ")||r)}const k=[{text:r,desc:`Search with ${b.name} (Adblock Protected)`,type:"search",icon:b.icon||"search",action:r},{text:`https://${r}.com`,desc:"Open Website (Tracker Filtering Active)",type:"web",icon:"globe",action:`https://${r}.com`},{text:"Wikipedia: "+(l||r),desc:"Encyclopedia Reference",type:"web",icon:"book-open",action:":w "+(l||r)},{text:"GitHub: "+(l||r),desc:"Source Code & Repositories",type:"web",icon:"github",action:"https://github.com/search?q="+encodeURIComponent(l||r)}];o.innerHTML=`
      <div class="omnibox-suggestions-list">
        ${k.map(u=>`
          <div class="dropdown-item" data-action="${B(u.action)}">
            ${p(u.icon,"",14)}
            <span>${M(u.text)}</span>
            <span class="item-type">${u.desc}</span>
          </div>
        `).join("")}
      </div>

      <!-- Quick Search Engine Switcher Footer -->
      <div style="padding:8px 12px; background:rgba(0,0,0,0.3); border-top:1px solid var(--glass-border); display:flex; align-items:center; justify-content:space-between; font-size:11px;">
        <div style="display:flex; align-items:center; gap:6px; color:var(--text-secondary);">
          <span>Search with:</span>
          ${c.slice(0,4).map(u=>`
            <button class="quick-engine-chip ${u.id===d.id?"active":""}" data-switch-engine="${B(u.id)}" style="background:${u.id===d.id?"rgba(0,242,254,0.15)":"rgba(255,255,255,0.06)"}; border:1px solid ${u.id===d.id?"#00F2FE":"transparent"}; border-radius:4px; padding:2px 7px; color:${u.id===d.id?"#00F2FE":"#fff"}; cursor:pointer; font-size:11px; display:inline-flex; align-items:center; gap:4px;">
              ${p(u.icon||"search","",11)}
              <span>${M(u.name)}</span>
            </button>
          `).join("")}
        </div>
        <button id="manageEnginesDropdownBtn" style="color:#00F2FE; background:transparent; border:none; cursor:pointer; font-size:11px; font-weight:600;">
          ⚙️ Manage Engines
        </button>
      </div>
    `,o.style.display="block",o.querySelectorAll(".dropdown-item").forEach(u=>{u.addEventListener("click",()=>{const v=u.dataset.action;n.navigateToUrl(v),o.style.display="none"})}),o.querySelectorAll("[data-switch-engine]").forEach(u=>{u.addEventListener("click",v=>{v.stopPropagation();const g=u.dataset.switchEngine;n.setDefaultSearchEngine(g);const m=n.getSearchEngineById(g);I(`🔍 Search engine changed to ${m?m.name:"Google"}`),t(input.value)})}),(h=o.querySelector("#manageEnginesDropdownBtn"))==null||h.addEventListener("click",u=>{u.stopPropagation(),o.style.display="none",n.openModal("settings")})}n.subscribe((i,o)=>{["TAB_SWITCHED","NAVIGATION_COMPLETE","SHIELDS_TOGGLED","SHIELDS_STATS_UPDATED","SEARCH_ENGINE_CHANGED","SEARCH_ENGINES_UPDATED"].includes(o)&&s()}),s()}function M(a){return a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function B(a){return a?a.replace(/"/g,"&quot;"):""}function I(a){const s=document.createElement("div");s.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",s.innerText=a,document.body.appendChild(s),setTimeout(()=>s.remove(),2200)}function z(a){function s(){const e=n.getState();if(!e.settings.bookmarksBarVisible){a.style.display="none";return}a.style.display="flex",a.innerHTML=`
      <div class="bookmarks-bar">
        ${e.bookmarks.map(t=>`
          <button class="bookmark-item" data-url="${F(t.url)}" title="${F(t.title)} (${F(t.url)})">
            ${p(t.icon||"globe","",12)}
            <span>${ee(t.title)}</span>
          </button>
        `).join("")}
      </div>
    `,a.querySelectorAll(".bookmark-item").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.url;n.navigateToUrl(i)})})}n.subscribe((e,t)=>{["BOOKMARKS_UPDATED","SETTINGS_UPDATED"].includes(t)&&s()}),s()}function ee(a){return a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function F(a){return a?a.replace(/"/g,"&quot;"):""}function te(a){let s=null,e=!1;function t(){var k;const o=n.getState();if(n.getActiveTab().type!=="ntp"){a.style.display="none";return}a.style.display="flex";const d=n.getActiveWallpaper(),c=o.settings.blurWallpaper,b=n.getTotalFilterRulesCount(),l=n.getDefaultSearchEngine(),f=n.getSearchEngines();a.style.backgroundImage=`url("${d.url}")`,a.innerHTML=`
      <div class="ntp-overlay ${c?"blurred":""}"></div>
      
      <div class="ntp-content" style="justify-content:center; gap:36px;">
        <!-- Center Section: Clock, Search, Adblock Stats, Top Sites -->
        <div class="ntp-center-section">
          <!-- Digital Clock & Greeting -->
          ${o.settings.showClock?`
            <div class="clock-container">
              <div class="digital-time" id="ntpClock">
                ${_(o.settings.clockFormat)}
              </div>
              <div class="greeting-text" id="ntpGreeting">
                ${se()}
              </div>
            </div>
          `:""}

          <!-- Center Private Search Bar with Search Engine Selector -->
          <div class="ntp-search-box" style="position:relative;">
            <form class="ntp-search-form" id="ntpSearchForm">
              <!-- Quick Search Engine Switcher Button -->
              <button type="button" class="ntp-engine-select-btn" id="ntpEngineSelectBtn" title="Default Engine: ${A(l.name)} (Click to switch or manage)">
                <span class="ntp-engine-icon">${p(l.icon||"search","",18)}</span>
                <span class="ntp-engine-label">${x(l.name)}</span>
                <span style="opacity:0.6; display:flex;">${p("chevron-down","",12)}</span>
              </button>

              <input 
                type="text" 
                class="ntp-search-input" 
                id="ntpSearchInput" 
                placeholder="Search with ${A(l.name)} privately or enter URL..."
                autocomplete="off"
              />
              <button type="submit" class="ntp-search-submit-btn" title="Search">
                ${p("search","",16)}
              </button>
            </form>

            <!-- Quick Engine Dropdown Menu -->
            <div class="ntp-engine-menu" id="ntpEngineMenu" style="display:${e?"block":"none"};">
              <div class="ntp-engine-menu-header">
                <span>Select Search Engine</span>
                <span style="font-size:10px; color:var(--text-muted);">Default: ${x(l.name)}</span>
              </div>
              <div class="ntp-engine-list">
                ${f.map(h=>`
                  <div class="ntp-engine-item ${h.id===l.id?"active":""}" data-ntp-engine="${A(h.id)}">
                    <span class="ntp-item-icon">${p(h.icon||"search","",16)}</span>
                    <span class="ntp-item-name">${x(h.name)}</span>
                    ${h.shortcut?`<span class="ntp-item-shortcut">${x(h.shortcut)}</span>`:""}
                    ${h.id===l.id?`<span class="ntp-item-check">${p("check","",14)}</span>`:""}
                  </div>
                `).join("")}
              </div>
              <div class="ntp-engine-menu-footer" id="ntpManageEnginesBtn">
                ${p("settings","",13)}
                <span>Manage Search Engines & Shortcuts...</span>
              </div>
            </div>
          </div>

          <!-- WebBuddy Ad & Tracker Blocker Privacy Metrics Card -->
          ${o.settings.showShieldsStats?`
            <div class="shields-stats-card" style="max-width:880px;">
              <div class="shield-stat-item">
                <div class="shield-stat-icon" style="background:rgba(255,88,88,0.15); border-color:rgba(255,88,88,0.3); color:#FF5858;">
                  ${p("x","",20)}
                </div>
                <div class="shield-stat-info">
                  <span class="stat-value" id="adsCount">${o.shields.adsBlockedTotal.toLocaleString()}</span>
                  <span class="stat-label">Ads Blocked</span>
                </div>
              </div>

              <div class="stat-divider"></div>

              <div class="shield-stat-item">
                <div class="shield-stat-icon" style="background:rgba(0,242,254,0.15); border-color:rgba(0,242,254,0.3); color:#00F2FE;">
                  ${p("shield","",20)}
                </div>
                <div class="shield-stat-info">
                  <span class="stat-value" id="trackersCount">${o.shields.trackersBlockedTotal.toLocaleString()}</span>
                  <span class="stat-label">Trackers Blocked</span>
                </div>
              </div>

              <div class="stat-divider"></div>

              <div class="shield-stat-item">
                <div class="shield-stat-icon" style="background:rgba(16,185,129,0.15); border-color:rgba(16,185,129,0.3); color:#10B981;">
                  ${p("zap","",20)}
                </div>
                <div class="shield-stat-info">
                  <span class="stat-value" id="bandwidthSaved">${o.shields.bandwidthSavedMB} MB</span>
                  <span class="stat-label">Bandwidth Saved</span>
                </div>
              </div>

              <div class="stat-divider"></div>

              <div class="shield-stat-item">
                <div class="shield-stat-icon" style="background:rgba(127,0,255,0.15); border-color:rgba(127,0,255,0.3); color:#A78BFA;">
                  ${p("clock","",20)}
                </div>
                <div class="shield-stat-info">
                  <span class="stat-value" id="timeSaved">${o.shields.timeSavedMin} min</span>
                  <span class="stat-label">Time Saved</span>
                </div>
              </div>
            </div>

            <!-- Active Adblock Engine Status Banner & Video PiP Overlay Quick Button -->
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; justify-content:center;">
              <div style="display:flex; align-items:center; gap:8px; background:rgba(20,22,33,0.75); backdrop-filter:blur(16px); border:1px solid var(--glass-border); padding:8px 18px; border-radius:var(--radius-full); font-size:12px; color:var(--text-secondary); cursor:pointer;" id="openFilterListsBtn" title="Click to view and configure Filter Lists">
                <span style="width:7px; height:7px; background:#10B981; border-radius:50%; box-shadow:0 0 8px #10B981;"></span>
                <span><strong>${b.toLocaleString()}</strong> Active Filter Rules (EasyList, EasyPrivacy, uBlock)</span>
                <span style="color:#00F2FE; font-weight:600; margin-left:4px;">Configure →</span>
              </div>

              <div style="display:flex; align-items:center; gap:6px; background:linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(127, 0, 255, 0.15) 100%); backdrop-filter:blur(16px); border:1px solid rgba(0, 242, 254, 0.3); padding:8px 16px; border-radius:var(--radius-full); font-size:12px; color:#fff; cursor:pointer;" id="dashboardPipControlBtn" title="Open Video Controls & Auto-PiP Overlay">
                ${p("pip","",14)}
                <span style="font-weight:700;">Auto PiP Overlay: <span style="color:#00F2FE;">${(k=o.media)!=null&&k.isPipActive?"ACTIVE":"READY"}</span></span>
              </div>
            </div>
          `:""}

          <!-- Top Sites / Shortcuts Grid -->
          ${o.settings.showTopSites?`
            <div class="top-sites-grid">
              ${o.topSites.map(h=>`
                <div class="top-site-tile" data-site-url="${A(h.url)}" title="${A(h.title)}">
                  <button class="delete-site-btn" data-delete-site="${h.id}" title="Remove Shortcut">
                    ${p("x","",10)}
                  </button>
                  <div class="site-icon-box" style="background:${h.color||"#232636"}">
                    ${p(h.icon||"globe","",20)}
                  </div>
                  <span class="site-title">${x(h.title)}</span>
                </div>
              `).join("")}

              <!-- Add Shortcut Tile -->
              <div class="top-site-tile add-site-tile" id="addShortcutBtn" title="Add Shortcut">
                <div class="site-icon-box" style="background:transparent; border:1px dashed rgba(255,255,255,0.2);">
                  ${p("plus","",20)}
                </div>
                <span class="site-title">Add Site</span>
              </div>
            </div>
          `:""}
        </div>

        <!-- NTP Bottom Bar -->
        <div class="ntp-bottom-bar">
          <div class="photo-credit">
            <span>📷 Photo by <strong>${x(d.author)}</strong> • ${x(d.location)}</span>
            <button class="change-wallpaper-btn" id="nextWallpaperBtn" title="Change Background Wallpaper">
              ${p("refresh","",13)}
            </button>
          </div>

          <button class="customize-btn" id="customizeDashboardBtn">
            ${p("sliders","",14)}
            <span>Dashboard Settings</span>
          </button>
        </div>
      </div>
    `,i()}function i(){var c,b,l,f,k,h;const o=a.querySelector("#ntpSearchForm"),r=a.querySelector("#ntpSearchInput");o==null||o.addEventListener("submit",u=>{u.preventDefault();const v=r.value.trim();v&&n.navigateToUrl(v)});const d=a.querySelector("#ntpEngineSelectBtn");d==null||d.addEventListener("click",u=>{u.stopPropagation(),e=!e,t()}),a.querySelectorAll("[data-ntp-engine]").forEach(u=>{u.addEventListener("click",v=>{v.stopPropagation();const g=u.dataset.ntpEngine;n.setDefaultSearchEngine(g);const m=n.getSearchEngineById(g);ie(`🔍 Default search engine set to ${m?m.name:"Google"}`),e=!1,t()})}),(c=a.querySelector("#ntpManageEnginesBtn"))==null||c.addEventListener("click",u=>{u.stopPropagation(),e=!1,n.openModal("settings")}),document.addEventListener("click",u=>{e&&!u.target.closest(".ntp-search-box")&&(e=!1,t())}),(b=a.querySelector("#openFilterListsBtn"))==null||b.addEventListener("click",()=>{n.openModal("shields")}),(l=a.querySelector("#dashboardPipControlBtn"))==null||l.addEventListener("click",()=>{n.openModal("videoControls")}),a.querySelectorAll(".top-site-tile[data-site-url]").forEach(u=>{u.addEventListener("click",v=>{if(v.target.closest(".delete-site-btn"))return;const g=u.dataset.siteUrl;n.navigateToUrl(g)})}),a.querySelectorAll(".delete-site-btn").forEach(u=>{u.addEventListener("click",v=>{v.stopPropagation();const g=u.dataset.deleteSite;n.removeTopSite(g)})}),(f=a.querySelector("#addShortcutBtn"))==null||f.addEventListener("click",()=>{n.openModal("addShortcut")}),(k=a.querySelector("#nextWallpaperBtn"))==null||k.addEventListener("click",()=>{n.nextWallpaper()}),(h=a.querySelector("#customizeDashboardBtn"))==null||h.addEventListener("click",()=>{n.openModal("settings")})}s||(s=setInterval(()=>{const o=a.querySelector("#ntpClock");if(o){const r=n.getState().settings.clockFormat;o.innerHTML=_(r)}},1e3)),n.subscribe((o,r)=>{["TAB_SWITCHED","NAVIGATION_COMPLETE","WALLPAPER_CHANGED","SHIELDS_STATS_UPDATED","TOP_SITES_UPDATED","SETTINGS_UPDATED","FILTER_LIST_TOGGLED","SEARCH_ENGINE_CHANGED","SEARCH_ENGINES_UPDATED"].includes(r)&&t()}),t()}function _(a="12h"){const s=new Date;if(a==="24h"){const o=String(s.getHours()).padStart(2,"0"),r=String(s.getMinutes()).padStart(2,"0");return`${o}:${r}`}let e=s.getHours();const t=String(s.getMinutes()).padStart(2,"0"),i=e>=12?"PM":"AM";return e=e%12||12,`${e}:${t} <span style="font-size:16px; font-weight:500; opacity:0.8;">${i}</span>`}function se(){const a=new Date().getHours();return a<12?"Good Morning, WebBuddy Explorer":a<18?"Good Afternoon, WebBuddy Explorer":"Good Evening, WebBuddy Explorer"}function x(a){return a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function A(a){return a?a.replace(/"/g,"&quot;"):""}function ie(a){const s=document.createElement("div");s.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",s.innerText=a,document.body.appendChild(s),setTimeout(()=>s.remove(),2200)}function ae(a){function s(){const t=n.getActiveTab();if(t.type!=="search"){a.style.display="none";return}a.style.display="flex";let i="ad blocking";try{t.url.includes("?q=")?i=decodeURIComponent(t.url.split("?q=")[1].split("&")[0]):i=t.title.replace(" - WebBuddy Search","")}catch{i="search"}const o=K.default;a.className="search-view-container",a.innerHTML=`
      <div class="search-view-header">
        <div class="search-logo-link" id="searchLogoHome">
          ${p("webbuddy-logo","",28)}
          <span>WebBuddy <span style="font-weight:400; color:var(--text-secondary);">Search</span></span>
        </div>

        <form class="search-page-input-form" id="searchPageForm">
          <input type="text" class="search-page-input" id="searchPageInput" value="${O(i)}" />
          <button type="submit" style="color:#00F2FE;">
            ${p("search","",16)}
          </button>
        </form>
      </div>

      <div class="search-filter-tabs">
        <button class="search-filter-tab active">${p("search","",12)} All Results</button>
        <button class="search-filter-tab">${p("image","",12)} Images</button>
        <button class="search-filter-tab">${p("video","",12)} Videos</button>
      </div>

      <div class="search-results-layout">
        <div class="search-results-main">
          <!-- Privacy Shield Active Notification -->
          <div style="display:flex; align-items:center; gap:8px; padding:10px 14px; background:rgba(0,242,254,0.06); border:1px solid rgba(0,242,254,0.2); border-radius:8px; font-size:12px; color:var(--text-secondary);">
            ${p("shield-check","",16)}
            <span><strong>Tracker-Free Search:</strong> No search query logs, no profiling, and zero sponsored tracking pixels.</span>
          </div>

          <!-- Organic Search Results -->
          ${o.organicResults.map(r=>`
            <div class="search-result-item">
              <div class="result-cite">
                ${p("globe","",12)}
                <span>${N(r.url)}</span>
              </div>
              <h3 class="result-title" data-visit-url="${O(r.url)}">${N(r.title)}</h3>
              <p class="result-snippet">${N(r.snippet)}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `,e()}function e(){var o;(o=a.querySelector("#searchLogoHome"))==null||o.addEventListener("click",()=>{n.navigateToUrl("brave://newtab")});const t=a.querySelector("#searchPageForm"),i=a.querySelector("#searchPageInput");t==null||t.addEventListener("submit",r=>{r.preventDefault();const d=i.value.trim();d&&n.navigateToUrl(d)}),a.querySelectorAll("[data-visit-url]").forEach(r=>{r.addEventListener("click",()=>{const d=r.dataset.visitUrl;n.navigateToUrl(d)})})}n.subscribe((t,i)=>{["TAB_SWITCHED","NAVIGATION_COMPLETE"].includes(i)&&s()}),s()}function N(a){return a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function O(a){return a?a.replace(/"/g,"&quot;"):""}function oe(a){function s(){const t=n.getActiveTab();if(t.type!=="web"){a.style.display="none";return}a.style.display="flex";let i="google.com",o="";try{const c=new URL(t.url);i=c.hostname.replace("www.",""),o=c.searchParams.get("q")||c.searchParams.get("query")||c.searchParams.get("search")||""}catch{i="google.com"}const r=t.totalBlockedCount||t.adsBlockedCount+t.trackersBlockedCount||8;let d=null;if(i.includes("google.com")||t.url.includes("google.com")){const c=o||"WebBuddy Adblock & Privacy Protection";d={title:`${c} - Google Search`,url:t.url,domain:"google.com",trackersBlocked:7,content:`
          <div class="google-container">
            <header class="google-header">
              <div class="google-logo-row">
                <span class="g-blue">G</span><span class="g-red">o</span><span class="g-yellow">o</span><span class="g-blue">g</span><span class="g-green">l</span><span class="g-red">e</span>
              </div>
              <form class="google-search-bar-mock" id="googleSearchForm">
                <input type="text" class="google-input-mock" id="googleSearchInput" value="${ne(c)}" />
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
              <span>About ${(Math.floor(Math.random()*4e3)+1200).toLocaleString()},000 results (0.28 seconds) • WebBuddy Shields blocked 7 trackers</span>
            </div>

            <div class="google-results-list">
              <div class="google-result-card">
                <div class="g-cite">
                  ${p("globe","",12)}
                  <span>https://webbuddy.org › search › ${encodeURIComponent(c)}</span>
                </div>
                <a href="https://webbuddy.org" class="g-title">${w(c)} — WebBuddy Private Browsing & Shields</a>
                <p class="g-snippet">WebBuddy automatically stops third-party ads, invisible trackers, fingerprinting scripts, and cryptominers with sub-millisecond network filtering.</p>
              </div>

              <div class="google-result-card">
                <div class="g-cite">
                  ${p("book-open","",12)}
                  <span>https://en.wikipedia.org › wiki › ${encodeURIComponent(c)}</span>
                </div>
                <a href="https://wikipedia.org" class="g-title">${w(c)} - Wikipedia, the free encyclopedia</a>
                <p class="g-snippet">Explore comprehensive encyclopedia references, technical documentation, history, and peer-reviewed articles regarding ${w(c)}.</p>
              </div>

              <div class="google-result-card">
                <div class="g-cite">
                  ${p("github","",12)}
                  <span>https://github.com › search › ${encodeURIComponent(c)}</span>
                </div>
                <a href="https://github.com" class="g-title">GitHub Repositories and Open Source: ${w(c)}</a>
                <p class="g-snippet">Explore trending source code, high-performance implementations, and developer discussions related to ${w(c)}.</p>
              </div>

              <div class="google-result-card">
                <div class="g-cite">
                  ${p("terminal","",12)}
                  <span>https://news.ycombinator.com › ${encodeURIComponent(c)}</span>
                </div>
                <a href="https://news.ycombinator.com" class="g-title">Hacker News Discussion: Breakthroughs in ${w(c)}</a>
                <p class="g-snippet">Top engineering comments, benchmarks, and community discussions on Hacker News.</p>
              </div>
            </div>
          </div>
        `}}else for(const c of Object.keys(C))if(i.includes(c)||t.url.includes(c)){d=C[c];break}d||(d={title:t.title||i,url:t.url,domain:i,trackersBlocked:6,content:`
          <div style="background:#181A26; border-radius:12px; border:1px solid rgba(255,255,255,0.08); padding:36px; text-align:center;">
            <div style="font-size:42px; margin-bottom:16px;">🌐</div>
            <h2 style="font-size:24px; margin-bottom:10px;">${w(t.title||i)}</h2>
            <p style="color:var(--text-secondary); max-width:500px; margin:0 auto 24px; line-height:1.6;">
              Connected securely to <code>${w(t.url)}</code> via WebBuddy Privacy Tunnel with HTTPS upgrading enabled.
            </p>
            <div style="display:inline-flex; gap:12px; background:rgba(255,255,255,0.04); padding:12px 20px; border-radius:8px; border:1px solid rgba(255,255,255,0.06); font-size:13px;">
              <span>🛡️ <strong>${r} trackers blocked</strong></span>
              <span>🔒 <strong>TLS 1.3 Encrypted</strong></span>
            </div>
          </div>
        `}),a.className="web-viewer-container",a.innerHTML=`
      <div class="web-viewer-banner">
        <div class="shields-active-indicator">
          <div class="shields-pulse-dot"></div>
          <span>WebBuddy Shields Active • ${r} ad networks & trackers blocked on ${w(d.domain||i)}</span>
        </div>
        <div style="color:var(--text-muted); font-size:11px;">
          Protected by Sub-Millisecond Network Filtering & Farbling
        </div>
      </div>

      <div class="web-viewer-content">
        ${d.content}
      </div>
    `,e()}function e(){a.querySelectorAll("a").forEach(o=>{o.addEventListener("click",r=>{r.preventDefault();const d=o.getAttribute("href");d&&d!=="#"&&n.navigateToUrl(d)})});const t=a.querySelector("#googleSearchForm"),i=a.querySelector("#googleSearchInput");t==null||t.addEventListener("submit",o=>{o.preventDefault();const r=i==null?void 0:i.value.trim();r&&n.navigateToUrl(r)})}n.subscribe((t,i)=>{["TAB_SWITCHED","NAVIGATION_COMPLETE","SHIELDS_STATS_UPDATED"].includes(i)&&s()}),s()}function w(a){return a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function ne(a){return a.replace(/"/g,"&quot;")}function re(a){let s="controls";function e(){const i=n.getState();if(i.activeModal!=="shields"){a.innerHTML="";return}const o=n.getActiveTab(),r=i.shields.shieldsEnabled,d=o.adsBlockedCount||0,c=o.trackersBlockedCount||0,b=le(o.url),l=i.shields.filterLists;a.innerHTML=`
      <div class="popover-container shields-popover" id="shieldsPopover" style="width: 420px; left: 50px;">
        <div class="shields-popover-header" style="background: linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(127, 0, 255, 0.15) 100%);">
          <div class="shields-header-brand">
            <div class="shields-header-icon" style="background: linear-gradient(135deg, #00F2FE 0%, #7F00FF 100%);">
              ${p("shield","",18)}
            </div>
            <div>
              <div class="shields-header-title">Ad & Tracker Blocker</div>
              <div class="shields-header-sub">${G(b)}</div>
            </div>
          </div>

          <label class="toggle-switch" title="Toggle Ad & Tracker Blocker for this site">
            <input type="checkbox" id="masterShieldsToggle" ${r?"checked":""}>
            <span class="toggle-slider"></span>
          </label>
        </div>

        <!-- Navigation Tabs inside Shields Popover -->
        <div style="display:flex; background:rgba(0,0,0,0.25); border-bottom:1px solid var(--glass-border);">
          <button class="shield-nav-tab ${s==="controls"?"active":""}" id="tabControlsBtn" style="flex:1; padding:9px; font-size:12px; font-weight:600; color:${s==="controls"?"#00F2FE":"var(--text-secondary)"}; border-bottom:2px solid ${s==="controls"?"#00F2FE":"transparent"};">
            Site Protection
          </button>
          <button class="shield-nav-tab ${s==="filters"?"active":""}" id="tabFiltersBtn" style="flex:1; padding:9px; font-size:12px; font-weight:600; color:${s==="filters"?"#00F2FE":"var(--text-secondary)"}; border-bottom:2px solid ${s==="filters"?"#00F2FE":"transparent"};">
            Filter Lists (${l.filter(f=>f.enabled).length}/${l.length})
          </button>
        </div>

        <div class="shields-popover-body">
          ${s==="controls"?`
            <!-- Live Status Highlight -->
            <div class="shields-stat-highlight" style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="color:#FF5858;">${p("x","",16)}</div>
                <div>
                  <div style="font-size:18px; font-weight:800; font-family:'JetBrains Mono'; color:#FF5858;">${r?d:0}</div>
                  <div style="font-size:11px; color:var(--text-secondary);">Ads Blocked</div>
                </div>
              </div>

              <div style="display:flex; align-items:center; gap:8px;">
                <div style="color:#00F2FE;">${p("shield","",16)}</div>
                <div>
                  <div style="font-size:18px; font-weight:800; font-family:'JetBrains Mono'; color:#00F2FE;">${r?c:0}</div>
                  <div style="font-size:11px; color:var(--text-secondary);">Trackers Neutralized</div>
                </div>
              </div>
            </div>

            <!-- Granular Protection Switches -->
            <div class="shields-controls-list">
              <div class="shield-control-row">
                <span class="shield-control-label">
                  ${p("x","",14)}
                  <span>Block Intrusive Banner & Video Ads</span>
                </span>
                <label class="toggle-switch">
                  <input type="checkbox" data-shield-opt="blockAds" ${i.shields.blockAds&&r?"checked":""} ${r?"":"disabled"}>
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div class="shield-control-row">
                <span class="shield-control-label">
                  ${p("zap","",14)}
                  <span>Block Cross-Site Tracking Beacons</span>
                </span>
                <label class="toggle-switch">
                  <input type="checkbox" data-shield-opt="blockTrackers" ${i.shields.blockTrackers&&r?"checked":""} ${r?"":"disabled"}>
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div class="shield-control-row">
                <span class="shield-control-label">
                  ${p("sparkles","",14)}
                  <span>Defeat Canvas & Audio Fingerprinting</span>
                </span>
                <label class="toggle-switch">
                  <input type="checkbox" data-shield-opt="blockFingerprinting" ${i.shields.blockFingerprinting&&r?"checked":""} ${r?"":"disabled"}>
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div class="shield-control-row">
                <span class="shield-control-label">
                  ${p("lock","",14)}
                  <span>Upgrade Connections to HTTPS</span>
                </span>
                <label class="toggle-switch">
                  <input type="checkbox" data-shield-opt="upgradeHttps" ${i.shields.upgradeHttps&&r?"checked":""} ${r?"":"disabled"}>
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div class="shield-control-row">
                <span class="shield-control-label">
                  ${p("puzzle","",14)}
                  <span>Block Cookie Banners & Annoyances</span>
                </span>
                <label class="toggle-switch">
                  <input type="checkbox" data-shield-opt="blockAnnoyances" ${i.shields.blockAnnoyances&&r?"checked":""} ${r?"":"disabled"}>
                  <span class="toggle-slider"></span>
                </label>
              </div>
            </div>
          `:`
            <!-- Filter Lists Manager -->
            <div style="display:flex; flex-direction:column; gap:10px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:12px; font-weight:700; color:var(--text-secondary);">Active Filter Subscriptions</span>
                <button id="updateFiltersBtn" style="font-size:11px; color:#00F2FE; font-weight:600; cursor:pointer;">🔄 Update All</button>
              </div>

              <div style="display:flex; flex-direction:column; gap:8px; max-height:240px; overflow-y:auto;">
                ${l.map(f=>`
                  <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:8px;">
                    <div>
                      <div style="font-size:12.5px; font-weight:600; color:#fff;">${G(f.name)}</div>
                      <div style="font-size:11px; color:var(--text-muted);">${f.rulesCount.toLocaleString()} rules • Updated ${f.lastUpdated}</div>
                    </div>
                    <label class="toggle-switch">
                      <input type="checkbox" data-filter-id="${f.id}" ${f.enabled?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>
                `).join("")}
              </div>
            </div>
          `}
        </div>
      </div>
    `,t()}function t(){var r,d,c,b;const i=a.querySelector("#shieldsPopover");if(!i)return;(r=i.querySelector("#tabControlsBtn"))==null||r.addEventListener("click",()=>{s="controls",e()}),(d=i.querySelector("#tabFiltersBtn"))==null||d.addEventListener("click",()=>{s="filters",e()}),(c=i.querySelector("#masterShieldsToggle"))==null||c.addEventListener("change",()=>{n.toggleShields()}),i.querySelectorAll("[data-shield-opt]").forEach(l=>{l.addEventListener("change",()=>{const f=l.dataset.shieldOpt;n.updateShieldOption(f,l.checked)})}),i.querySelectorAll("[data-filter-id]").forEach(l=>{l.addEventListener("change",()=>{const f=l.dataset.filterId;n.toggleFilterList(f)})}),(b=i.querySelector("#updateFiltersBtn"))==null||b.addEventListener("click",()=>{de("⚡ All 5 Adblock filter lists updated to latest version!")});const o=l=>{!l.target.closest("#shieldsPopover")&&!l.target.closest("#shieldBadgeBtn")&&!l.target.closest("#adblockControlBtn")&&!l.target.closest("#openFilterListsBtn")&&(n.closeModal(),document.removeEventListener("click",o))};setTimeout(()=>document.addEventListener("click",o),10)}n.subscribe((i,o)=>{["MODAL_CHANGED","SHIELDS_TOGGLED","SHIELDS_OPTION_CHANGED","FILTER_LIST_TOGGLED"].includes(o)&&e()}),e()}function le(a){if(!a||a.startsWith("brave://"))return"WebBuddy Private Browser";try{return new URL(a).hostname}catch{return a}}function G(a){return a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function de(a){const s=document.createElement("div");s.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",s.innerText=a,document.body.appendChild(s),setTimeout(()=>s.remove(),2200)}function ce(a){let s="search",e=!1,t=null;function i(){const r=n.getState();if(r.activeModal!=="settings"){a.innerHTML="";return}const d=r.settings,c=n.getSearchEngines(),b=n.getDefaultSearchEngine();a.innerHTML=`
      <div class="modal-overlay" id="settingsOverlay">
        <div class="center-modal settings-modal-wrapper">
          <!-- Modal Header -->
          <div class="modal-header">
            <div class="modal-title">
              ${p("settings","",18)}
              <span>WebBuddy Preferences & Settings</span>
            </div>
            <button class="modal-close-btn" id="closeSettingsBtn" title="Close Settings">
              ${p("close","",14)}
            </button>
          </div>

          <!-- Tab Navigation -->
          <div class="settings-nav-tabs">
            <button class="settings-tab-btn ${s==="search"?"active":""}" data-tab="search">
              ${p("search","",15)}
              <span>Search Engines</span>
            </button>
            <button class="settings-tab-btn ${s==="shields"?"active":""}" data-tab="shields">
              ${p("shield","",15)}
              <span>Shields & Privacy</span>
            </button>
            <button class="settings-tab-btn ${s==="appearance"?"active":""}" data-tab="appearance">
              ${p("sliders","",15)}
              <span>Appearance</span>
            </button>
          </div>

          <div class="modal-body">
            <!-- TAB 1: Search Engines Manager -->
            ${s==="search"?`
              <div class="search-manager-section">
                <!-- Section 1: Default Search Engine Selector -->
                <div>
                  <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
                    <div>
                      <h4 style="font-size:14px; font-weight:700; color:#fff; margin-bottom:2px;">Default Search Engine</h4>
                      <p style="font-size:12px; color:var(--text-secondary);">The search engine used when searching from the address bar or new tab page.</p>
                    </div>
                    <span class="engine-tag-default">Active: ${E(b.name)}</span>
                  </div>

                  <div class="search-engine-selector-grid">
                    ${c.map(l=>{const f=l.id===b.id;return`
                        <div class="search-engine-card ${f?"active":""}" data-set-default="${S(l.id)}" title="Click to set ${E(l.name)} as default">
                          <div class="search-engine-icon-box">
                            ${p(l.icon||"search","",18)}
                          </div>
                          <div class="search-engine-info">
                            <div class="search-engine-name">${E(l.name)}</div>
                            <div class="search-engine-shortcut-hint">${E(l.shortcut||"No prefix")}</div>
                          </div>
                          ${f?'<span class="active-default-pill">DEFAULT</span>':""}
                        </div>
                      `}).join("")}
                  </div>
                </div>

                <!-- Section 2: Manage Search Engines Table -->
                <div class="engine-table-wrapper">
                  <div class="engine-table-header">
                    <div class="engine-table-title">
                      ${p("search-engine","",16)}
                      <span>Manage Search Engines & Shortcuts</span>
                    </div>
                    <div style="display:flex; gap:8px;">
                      <button class="btn-secondary" id="openAddEngineBtn" style="padding:6px 12px; font-size:11px; display:flex; align-items:center; gap:5px;">
                        ${p("plus","",12)}
                        <span>Add Search Engine</span>
                      </button>
                      <button class="btn-secondary" id="resetEnginesBtn" style="padding:6px 10px; font-size:11px;" title="Reset all to defaults">
                        ${p("refresh","",12)}
                      </button>
                    </div>
                  </div>

                  <!-- Add / Edit Search Engine Form Drawer -->
                  ${e?`
                    <div class="add-engine-card" id="addEngineCard">
                      <div class="add-engine-header">
                        <span>${t?"Edit Search Engine":"Add Custom Search Engine"}</span>
                        <button class="btn-engine-icon" id="cancelAddEngineBtn">${p("close","",12)}</button>
                      </div>
                      
                      <div class="add-engine-grid">
                        <div class="form-group">
                          <label class="form-label">Search Engine Name *</label>
                          <input type="text" class="form-input" id="engineNameInput" placeholder="e.g. YouTube, GitHub" value="${S((t==null?void 0:t.name)||"")}" />
                        </div>
                        <div class="form-group">
                          <label class="form-label">Shortcut / Keyword (optional)</label>
                          <input type="text" class="form-input" id="engineShortcutInput" placeholder="e.g. :yt, :gh, !r" value="${S((t==null?void 0:t.shortcut)||"")}" />
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="form-label">URL with %s in place of query *</label>
                        <input type="text" class="form-input" id="engineUrlInput" placeholder="e.g. https://www.youtube.com/results?search_query=%s" value="${S((t==null?void 0:t.searchUrl)||"")}" />
                        <span style="font-size:11px; color:var(--text-muted); margin-top:2px;">Use <code>%s</code> wherever the search terms should go.</span>
                      </div>

                      <div class="engine-form-actions">
                        <button class="btn-secondary" id="cancelAddEngineBtn2">Cancel</button>
                        <button class="btn-primary" id="saveEngineBtn">
                          ${t?"Update Search Engine":"Save Search Engine"}
                        </button>
                      </div>
                    </div>
                  `:""}

                  <!-- List of engines -->
                  <div class="engine-list">
                    ${c.map(l=>{const f=l.id===b.id;return`
                        <div class="engine-row">
                          <div class="engine-row-left">
                            <div class="engine-avatar">
                              ${p(l.icon||"search","",16)}
                            </div>
                            <div class="engine-details">
                              <div class="engine-details-title-row">
                                <span class="engine-title">${E(l.name)}</span>
                                ${f?'<span class="engine-tag-default">Default</span>':""}
                                ${l.isBuiltin?"":'<span class="engine-tag-custom">Custom</span>'}
                              </div>
                              <div class="engine-subtext" title="${S(l.searchUrl)}">
                                <code>${E(l.searchUrl)}</code>
                              </div>
                            </div>
                          </div>

                          <div style="display:flex; align-items:center; gap:10px;">
                            ${l.shortcut?`<span class="engine-shortcut-badge" title="Type ${S(l.shortcut)} in address bar to search">${E(l.shortcut)}</span>`:""}
                            
                            <div class="engine-row-actions">
                              ${f?"":`
                                <button class="btn-make-default" data-set-default="${S(l.id)}" title="Make default">
                                  Make Default
                                </button>
                              `}
                              
                              <button class="btn-engine-icon" data-edit-engine="${S(l.id)}" title="Edit search engine">
                                ${p("edit","",13)}
                              </button>

                              ${(!l.isBuiltin||c.length>1)&&!f?`
                                <button class="btn-engine-icon delete" data-delete-engine="${S(l.id)}" title="Delete search engine">
                                  ${p("trash","",13)}
                                </button>
                              `:""}
                            </div>
                          </div>
                        </div>
                      `}).join("")}
                  </div>
                </div>

                <!-- Section 3: Shortcut Tips -->
                <div class="search-shortcuts-tips">
                  <strong>💡 Pro-Tip: Fast Omnibox Keyword Searches</strong><br/>
                  Type a shortcut prefix followed by your query directly in the address bar (e.g. <code>:g quantum computing</code>, <code>:ddg async rust</code>, or <code>:w alan turing</code>) to instantly search with that specific search engine!
                </div>
              </div>
            `:""}

            <!-- TAB 2: Shields & Privacy -->
            ${s==="shields"?`
              <div>
                <h4 style="font-size:13px; font-weight:700; color:var(--text-secondary); margin-bottom:12px;">Visible Dashboard Widgets</h4>
                <div class="shields-controls-list">
                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${p("shield","",14)}
                      <span>Ad & Tracker Blocker Metrics Card</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="showShieldsStats" ${d.showShieldsStats?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>

                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${p("clock","",14)}
                      <span>Digital Clock & Greeting</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="showClock" ${d.showClock?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>

                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${p("zap","",14)}
                      <span>Top Sites & Shortcuts Grid</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="showTopSites" ${d.showTopSites?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>

                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${p("star","",14)}
                      <span>Show Bookmarks Bar</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="bookmarksBarVisible" ${d.bookmarksBarVisible?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            `:""}

            <!-- TAB 3: Appearance & Wallpapers -->
            ${s==="appearance"?`
              <div style="display:flex; flex-direction:column; gap:16px;">
                <div class="shields-controls-list">
                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${p("image","",14)}
                      <span>Blur Background Wallpaper on Dashboard</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="blurWallpaper" ${d.blurWallpaper?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 style="font-size:13px; font-weight:700; color:var(--text-secondary); margin-bottom:10px;">Background Wallpaper</h4>
                  <div class="wallpaper-gallery-grid">
                    ${r.wallpapers.map((l,f)=>`
                      <div class="wallpaper-thumb ${r.activeWallpaperIndex===f?"selected":""}" data-wallpaper-index="${f}">
                        <img src="${l.thumbnail||l.url}" alt="${E(l.name)}" loading="lazy" />
                        <div class="wallpaper-thumb-label">${E(l.name)}</div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </div>
            `:""}
          </div>
        </div>
      </div>
    `,o()}function o(){var d,c,b,l,f,k;const r=a.querySelector("#settingsOverlay");r&&((d=r.querySelector("#closeSettingsBtn"))==null||d.addEventListener("click",()=>{e=!1,t=null,n.closeModal()}),r.addEventListener("click",h=>{h.target===r&&(e=!1,t=null,n.closeModal())}),r.querySelectorAll(".settings-tab-btn").forEach(h=>{h.addEventListener("click",()=>{s=h.dataset.tab,e=!1,t=null,i()})}),r.querySelectorAll("[data-set-default]").forEach(h=>{h.addEventListener("click",u=>{u.stopPropagation();const v=h.dataset.setDefault;n.setDefaultSearchEngine(v);const g=n.getSearchEngineById(v);$(`🔍 Default search engine set to ${g?g.name:"Google"}`),i()})}),(c=r.querySelector("#openAddEngineBtn"))==null||c.addEventListener("click",()=>{var h;e=!0,t=null,i(),(h=r.querySelector("#engineNameInput"))==null||h.focus()}),(b=r.querySelector("#cancelAddEngineBtn"))==null||b.addEventListener("click",()=>{e=!1,t=null,i()}),(l=r.querySelector("#cancelAddEngineBtn2"))==null||l.addEventListener("click",()=>{e=!1,t=null,i()}),(f=r.querySelector("#resetEnginesBtn"))==null||f.addEventListener("click",()=>{confirm("Reset search engines to default settings (Google as default)?")&&(n.resetSearchEnginesToDefault(),$("✓ Search engines reset to defaults"),i())}),(k=r.querySelector("#saveEngineBtn"))==null||k.addEventListener("click",()=>{const h=r.querySelector("#engineNameInput"),u=r.querySelector("#engineShortcutInput"),v=r.querySelector("#engineUrlInput"),g=h==null?void 0:h.value.trim(),m=u==null?void 0:u.value.trim(),y=v==null?void 0:v.value.trim();if(!g){h==null||h.focus(),$("⚠️ Please enter a search engine name");return}if(!y||!y.includes("%s")){v==null||v.focus(),$("⚠️ URL must include %s for the search query parameter");return}t?(n.updateSearchEngine(t.id,{name:g,shortcut:m,searchUrl:y}),$(`✓ Updated ${g} search engine`)):(n.addSearchEngine({name:g,shortcut:m,searchUrl:y}),$(`✓ Added ${g} to search engines`)),e=!1,t=null,i()}),r.querySelectorAll("[data-edit-engine]").forEach(h=>{h.addEventListener("click",u=>{var m;u.stopPropagation();const v=h.dataset.editEngine,g=n.getSearchEngineById(v);g&&(t=g,e=!0,i(),(m=r.querySelector("#engineNameInput"))==null||m.focus())})}),r.querySelectorAll("[data-delete-engine]").forEach(h=>{h.addEventListener("click",u=>{u.stopPropagation();const v=h.dataset.deleteEngine,g=n.getSearchEngineById(v);confirm(`Remove "${g?g.name:"this search engine"}"?`)&&(n.deleteSearchEngine(v),$("🗑️ Search engine removed"),i())})}),r.querySelectorAll("[data-setting]").forEach(h=>{h.addEventListener("change",()=>{const u=h.dataset.setting;n.updateSetting(u,h.checked)})}),r.querySelectorAll("[data-wallpaper-index]").forEach(h=>{h.addEventListener("click",()=>{const u=parseInt(h.dataset.wallpaperIndex,10);n.selectWallpaper(u),i()})}))}n.subscribe((r,d)=>{["MODAL_CHANGED","SETTINGS_UPDATED","WALLPAPER_CHANGED","SEARCH_ENGINES_UPDATED","SEARCH_ENGINE_CHANGED"].includes(d)&&i()}),i()}function E(a){return a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function S(a){return a?a.replace(/"/g,"&quot;"):""}function $(a){const s=document.createElement("div");s.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",s.innerText=a,document.body.appendChild(s),setTimeout(()=>s.remove(),2400)}function pe(a){function s(){if(n.getState().activeModal!=="addShortcut"){a.innerHTML="";return}a.innerHTML=`
      <div class="modal-overlay" id="addShortcutOverlay">
        <div class="center-modal" style="max-width: 420px;">
          <div class="modal-header">
            <div class="modal-title">
              ${p("plus","",18)}
              <span>Add Top Site Shortcut</span>
            </div>
            <button class="modal-close-btn" id="closeAddShortcutBtn">
              ${p("close","",14)}
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
    `,e()}function e(){var o;const t=a.querySelector("#addShortcutOverlay");if(!t)return;(o=t.querySelector("#closeAddShortcutBtn"))==null||o.addEventListener("click",()=>{n.closeModal()}),t.addEventListener("click",r=>{r.target===t&&n.closeModal()});const i=t.querySelector("#addShortcutForm");i==null||i.addEventListener("submit",r=>{r.preventDefault();const d=t.querySelector("#shortcutNameInput").value.trim(),c=t.querySelector("#shortcutUrlInput").value.trim();d&&c&&(n.addTopSite(d,c),n.closeModal())})}n.subscribe((t,i)=>{["MODAL_CHANGED"].includes(i)&&s()}),s()}function ue(a){let s="",e="list";function t(){const o=n.getState(),r=o.isNotesSidebarOpen,d=n.getNotesCapacityStats(),c=o.notes.find(l=>l.id===o.activeNoteId)||o.notes[0];a.className=`notes-sidebar ${r?"open":""}`;const b=o.notes.filter(l=>{const f=s.toLowerCase();return l.title.toLowerCase().includes(f)||l.content.toLowerCase().includes(f)});a.innerHTML=`
      <!-- Notes Header -->
      <div class="notes-header">
        <div class="notes-brand">
          <div class="notes-badge-icon">
            ${p("file-text","",16)}
          </div>
          <div class="notes-title-box">
            <span class="notes-title">Quick Notes</span>
            <span class="notes-sub">${o.notes.length} saved notes</span>
          </div>
        </div>

        <button class="action-icon-btn" id="closeNotesSidebarBtn" title="Close Notes Sidebar">
          ${p("close","",14)}
        </button>
      </div>

      <!-- Notes Toolbar & Actions -->
      <div class="notes-toolbar">
        <div class="notes-actions-row">
          <button class="new-note-btn" id="createNewNoteBtn">
            ${p("plus","",13)}
            <span>New Note</span>
          </button>
          <button class="clip-page-btn" id="clipCurrentPageBtn" title="Save current webpage link & title">
            ${p("link","",13)}
            <span>Clip Page</span>
          </button>
        </div>

        <input 
          type="text" 
          class="notes-search-input" 
          id="notesSearchInput" 
          placeholder="Search saved notes..." 
          value="${H(s)}"
        />
      </div>

      <!-- Main Content: List or Editor -->
      ${e==="list"?`
        <div class="notes-list-container">
          ${b.length===0?`
            <div style="text-align:center; padding:30px 10px; color:var(--text-muted); font-size:12px;">
              ${s?"No matching notes found.":'No notes saved yet. Click "+ New Note" to create one!'}
            </div>
          `:b.map(l=>`
            <div class="note-card ${l.id===o.activeNoteId?"active":""}" data-note-id="${l.id}">
              <div class="note-card-top">
                <div style="display:flex; align-items:center; gap:6px;">
                  <span class="note-color-dot" style="background:${l.color||"#00F2FE"};"></span>
                  <span class="note-card-title">${P(l.title)}</span>
                </div>
                <div style="display:flex; align-items:center; gap:4px;">
                  <button class="action-icon-btn" style="width:20px; height:20px;" data-pin-note="${l.id}" title="${l.pinned?"Unpin":"Pin to top"}">
                    ${p("pin",l.pinned?"note-pin-indicator":"",12)}
                  </button>
                  <button class="action-icon-btn" style="width:20px; height:20px; color:var(--text-muted);" data-delete-note="${l.id}" title="Delete Note">
                    ${p("trash","",12)}
                  </button>
                </div>
              </div>

              <div class="note-card-snippet">
                ${P(l.content||"Empty note...")}
              </div>

              <div class="note-card-meta">
                <span>${l.updatedAt||l.createdAt}</span>
                ${l.url?`<span style="color:#00F2FE; display:flex; align-items:center; gap:2px;">${p("link","",10)} Attached Link</span>`:""}
              </div>
            </div>
          `).join("")}
        </div>
      `:`
        <!-- Note Editor View -->
        <div class="note-editor-view">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <button id="backToListBtn" style="font-size:11.5px; color:#00F2FE; font-weight:600; cursor:pointer;">
              ← Back to Notes List
            </button>
            <div style="display:flex; gap:6px;">
              ${["#00F2FE","#7F00FF","#10B981","#FF5858","#FFBD2E"].map(l=>`
                <span class="color-picker-dot" data-set-color="${l}" style="width:12px; height:12px; border-radius:50%; background:${l}; cursor:pointer; border:1px solid ${c&&c.color===l?"#fff":"transparent"};"></span>
              `).join("")}
            </div>
          </div>

          <input 
            type="text" 
            class="editor-title-input" 
            id="editorTitleInput" 
            placeholder="Note title..." 
            value="${H(c?c.title:"")}" 
          />

          ${c&&c.url?`
            <div style="font-size:11px; color:var(--text-secondary); display:flex; align-items:center; gap:6px; background:rgba(255,255,255,0.04); padding:6px 10px; border-radius:6px;">
              ${p("link","",12)}
              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:260px;">${P(c.url)}</span>
              <button id="openAttachedUrlBtn" style="margin-left:auto; color:#00F2FE; font-weight:600;">Open →</button>
            </div>
          `:""}

          <textarea 
            class="editor-textarea" 
            id="editorContentInput" 
            placeholder="Type your notes, ideas, code snippets, or research here..."
          >${P(c?c.content:"")}</textarea>

          <div class="editor-actions-bottom">
            <span style="font-size:10.5px; color:var(--text-muted);">Auto-saved locally</span>
            <button class="action-icon-btn" id="deleteCurrentNoteBtn" title="Delete Note" style="color:#FF5858;">
              ${p("trash","",14)}
            </button>
          </div>
        </div>
      `}

      <!-- Save Capacity Storage Footer -->
      <div class="notes-capacity-footer">
        <div class="capacity-header-row">
          <span style="display:flex; align-items:center; gap:5px; color:var(--text-secondary);">
            ${p("hard-drive","",12)} Save Capacity
          </span>
          <span style="color:#00F2FE; font-family:'JetBrains Mono'; font-size:10.5px;">
            ${d.usedKb} KB / ${d.maxMb}.0 MB (${d.percentUsed}%)
          </span>
        </div>

        <div class="capacity-progress-track">
          <div class="capacity-progress-fill" style="width: ${Math.max(1,d.percentUsed)}%;"></div>
        </div>

        <div class="capacity-subtext">
          <span>${d.notesCount} / ${d.maxNotesLimit} max notes</span>
          <span class="export-notes-link" id="exportNotesBtn" title="Download backup of all saved notes">
            ${p("download","",11)} Export Backup
          </span>
        </div>
      </div>
    `,i()}function i(){var b,l,f,k,h,u,v;(b=a.querySelector("#closeNotesSidebarBtn"))==null||b.addEventListener("click",()=>{n.toggleNotesSidebar(!1)}),(l=a.querySelector("#createNewNoteBtn"))==null||l.addEventListener("click",()=>{n.addNote("New Note",""),e="editor",t(),setTimeout(()=>{const g=a.querySelector("#editorTitleInput");g&&(g.focus(),g.select())},50)}),(f=a.querySelector("#clipCurrentPageBtn"))==null||f.addEventListener("click",()=>{const g=n.getActiveTab(),m=g.type==="web"?`Clip: ${g.title}`:"Page Note",y=g.type==="web"?g.url:"",L=`Captured from: ${y}

Key takeaways:
- `;n.addNote(m,L,y),q("📎 Webpage clipped to your Notes!"),e="list",t()});const o=a.querySelector("#notesSearchInput");o==null||o.addEventListener("input",g=>{s=g.target.value,t()}),a.querySelectorAll(".note-card").forEach(g=>{g.addEventListener("click",m=>{if(m.target.closest("[data-pin-note]")||m.target.closest("[data-delete-note]"))return;const y=g.dataset.noteId;n.selectNote(y),e="editor",t()})}),a.querySelectorAll("[data-pin-note]").forEach(g=>{g.addEventListener("click",m=>{m.stopPropagation();const y=g.dataset.pinNote;n.togglePinNote(y)})}),a.querySelectorAll("[data-delete-note]").forEach(g=>{g.addEventListener("click",m=>{m.stopPropagation();const y=g.dataset.deleteNote;n.deleteNote(y)})}),(k=a.querySelector("#backToListBtn"))==null||k.addEventListener("click",()=>{e="list",t()});const r=a.querySelector("#editorTitleInput"),d=a.querySelector("#editorContentInput"),c=n.getState().activeNoteId;r==null||r.addEventListener("input",()=>{n.updateNote(c,{title:r.value})}),d==null||d.addEventListener("input",()=>{n.updateNote(c,{content:d.value})}),a.querySelectorAll("[data-set-color]").forEach(g=>{g.addEventListener("click",()=>{const m=g.dataset.setColor;n.updateNote(c,{color:m}),t()})}),(h=a.querySelector("#openAttachedUrlBtn"))==null||h.addEventListener("click",()=>{const g=n.getState().notes.find(m=>m.id===c);g&&g.url&&n.navigateToUrl(g.url)}),(u=a.querySelector("#deleteCurrentNoteBtn"))==null||u.addEventListener("click",()=>{n.deleteNote(c),e="list",t()}),(v=a.querySelector("#exportNotesBtn"))==null||v.addEventListener("click",()=>{n.exportNotesJson(),q("📥 Notes backup exported successfully!")})}n.subscribe((o,r)=>{["NOTES_SIDEBAR_TOGGLED","NOTE_ADDED","NOTE_UPDATED","NOTE_DELETED","NOTE_SELECTED"].includes(r)&&t()}),t()}function P(a){return a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function H(a){return a?a.replace(/"/g,"&quot;"):""}function q(a){const s=document.createElement("div");s.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",s.innerText=a,document.body.appendChild(s),setTimeout(()=>s.remove(),2200)}function he(a){function s(){const t=n.getState();if(t.activeModal!=="videoControls"){a.innerHTML="";return}const i=t.media,o=Math.floor(i.currentTime/60),r=String(Math.floor(i.currentTime%60)).padStart(2,"0"),d=Math.floor(i.duration/60),c=String(Math.floor(i.duration%60)).padStart(2,"0");a.innerHTML=`
      <div class="video-control-popover" id="videoControlPopover">
        <div class="video-popover-header">
          <div class="video-header-brand">
            <div class="video-header-icon">
              ${p("play","",16)}
            </div>
            <div>
              <div class="video-header-title">Video & Media Controls</div>
              <div class="video-header-sub">PiP, Overlap & Shortcuts Hub</div>
            </div>
          </div>

          <button class="action-icon-btn" id="closeVideoControlsBtn" title="Close">
            ${p("close","",14)}
          </button>
        </div>

        <div class="video-popover-body">
          <!-- Active Media Control Card -->
          <div class="media-preview-card">
            <div class="media-card-top">
              <span class="media-video-title" title="${ve(i.videoTitle)}">${ge(i.videoTitle)}</span>
              <span class="media-badge">1080p HD</span>
            </div>

            <!-- Seek Slider -->
            <div class="media-seek-bar-container">
              <input 
                type="range" 
                class="media-seek-slider" 
                id="mediaSeekSlider" 
                min="0" 
                max="${i.duration}" 
                value="${i.currentTime}" 
              />
              <div class="media-time-row">
                <span>${o}:${r}</span>
                <span>${d}:${c}</span>
              </div>
            </div>

            <!-- Main Playback Actions -->
            <div class="media-controls-row">
              <button class="media-ctrl-btn" id="rewind10Btn" title="Rewind 10s (J or ←)">
                ${p("skip-back","",16)}
              </button>

              <button class="media-ctrl-btn play-btn" id="mainPlayPauseBtn" title="Play / Pause (Space or K)">
                ${p(i.isPlaying?"pause":"play","",18)}
              </button>

              <button class="media-ctrl-btn" id="forward10Btn" title="Forward 10s (L or →)">
                ${p("skip-forward","",16)}
              </button>

              <button class="media-ctrl-btn" id="toggleMuteBtn" title="Mute / Unmute (M)">
                ${p(i.isMuted?"volume-x":"volume-2","",16)}
              </button>
            </div>

            <!-- Speed Pills -->
            <div class="speed-pills-row">
              <span style="font-size:10.5px; color:var(--text-muted); padding-left:4px;">Speed:</span>
              ${[.5,.75,1,1.25,1.5,2].map(b=>`
                <button class="speed-pill-btn ${i.playbackSpeed===b?"active":""}" data-set-speed="${b}">
                  ${b}x
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Feature Action Cards -->
          <div class="video-features-grid">
            <button class="video-feature-card-btn ${i.isPipActive?"active":""}" id="togglePipBtn">
              <div class="feature-btn-top">
                ${p("pip","",18)}
                <span style="font-size:11px; font-weight:700;">${i.isPipActive?"ON":"OFF"}</span>
              </div>
              <div class="feature-btn-title">Picture-in-Picture</div>
              <div class="feature-btn-sub">Floating persistent window (P)</div>
            </button>

            <button class="video-feature-card-btn ${i.isOverlapping?"active":""}" id="toggleOverlappingBtn">
              <div class="feature-btn-top">
                ${p("layers","",18)}
                <span style="font-size:11px; font-weight:700;">${i.isOverlapping?"ON":"OFF"}</span>
              </div>
              <div class="feature-btn-title">Overlapping View</div>
              <div class="feature-btn-sub">Corner dock across all tabs</div>
            </button>

            <button class="video-feature-card-btn ${i.autoHideControls?"active":""}" id="toggleAutoHideBtn">
              <div class="feature-btn-top">
                ${p("sparkles","",18)}
                <span style="font-size:11px; font-weight:700;">${i.autoHideControls?"ON":"OFF"}</span>
              </div>
              <div class="feature-btn-title">Auto-Hide Controls</div>
              <div class="feature-btn-sub">Fade controls when idle</div>
            </button>

            <button class="video-feature-card-btn active" id="videoAdblockInfoBtn">
              <div class="feature-btn-top">
                ${p("shield-check","",18)}
                <span style="font-size:11px; font-weight:700; color:#10B981;">ACTIVE</span>
              </div>
              <div class="feature-btn-title">Video Ad Blocker</div>
              <div class="feature-btn-sub">Zero pre-roll & mid-roll ads</div>
            </button>
          </div>

          <!-- Shortcuts Cheat Sheet -->
          <div class="shortcuts-cheat-section">
            <div class="shortcuts-title-row">
              <span>KEYBOARD SHORTCUTS</span>
              <span style="color:#00F2FE;">Quick Trigger</span>
            </div>

            <div class="shortcut-row">
              <span>Play / Pause Video</span>
              <span class="shortcut-key">Space</span>
            </div>
            <div class="shortcut-row">
              <span>Rewind 10s / Forward 10s</span>
              <span><span class="shortcut-key">J</span> / <span class="shortcut-key">L</span></span>
            </div>
            <div class="shortcut-row">
              <span>Picture-in-Picture (PiP)</span>
              <span class="shortcut-key">P</span>
            </div>
            <div class="shortcut-row">
              <span>Mute / Unmute Audio</span>
              <span class="shortcut-key">M</span>
            </div>
            <div class="shortcut-row">
              <span>Toggle Fullscreen</span>
              <span class="shortcut-key">F</span>
            </div>
          </div>
        </div>
      </div>
    `,e()}function e(){var o,r,d,c,b,l,f,k,h;const t=a.querySelector("#videoControlPopover");if(!t)return;(o=t.querySelector("#closeVideoControlsBtn"))==null||o.addEventListener("click",()=>{n.closeModal()}),(r=t.querySelector("#mainPlayPauseBtn"))==null||r.addEventListener("click",()=>{n.togglePlayPause()}),(d=t.querySelector("#rewind10Btn"))==null||d.addEventListener("click",()=>{n.skipMediaTime(-10),T("⏪ Rewound 10s")}),(c=t.querySelector("#forward10Btn"))==null||c.addEventListener("click",()=>{n.skipMediaTime(10),T("⏩ Forward 10s")}),(b=t.querySelector("#toggleMuteBtn"))==null||b.addEventListener("click",()=>{n.toggleMediaMute()}),(l=t.querySelector("#mediaSeekSlider"))==null||l.addEventListener("input",u=>{n.seekMedia(parseFloat(u.target.value))}),t.querySelectorAll("[data-set-speed]").forEach(u=>{u.addEventListener("click",()=>{const v=parseFloat(u.dataset.setSpeed);n.setPlaybackSpeed(v),T(`⚡ Playback speed: ${v}x`)})}),(f=t.querySelector("#togglePipBtn"))==null||f.addEventListener("click",()=>{n.togglePip(),T(n.getState().media.isPipActive?"🖼️ Picture-in-Picture Activated!":"🖼️ Picture-in-Picture Closed")}),(k=t.querySelector("#toggleOverlappingBtn"))==null||k.addEventListener("click",()=>{n.toggleOverlapping(),T(n.getState().media.isOverlapping?"📑 Overlapping Corner Dock Enabled":"📑 Overlapping View Disabled")}),(h=t.querySelector("#toggleAutoHideBtn"))==null||h.addEventListener("click",()=>{n.toggleAutoHideControls(),T(n.getState().media.autoHideControls?"✨ Auto-Hide Controls: Enabled":"✨ Auto-Hide Controls: Always Visible")});const i=u=>{!u.target.closest("#videoControlPopover")&&!u.target.closest("#videoControlBtn")&&(n.closeModal(),document.removeEventListener("click",i))};setTimeout(()=>document.addEventListener("click",i),10)}n.subscribe((t,i)=>{["MODAL_CHANGED","MEDIA_PLAY_STATE_CHANGED","MEDIA_PIP_TOGGLED","MEDIA_OVERLAPPING_TOGGLED","MEDIA_AUTOHIDE_TOGGLED","MEDIA_SPEED_CHANGED","MEDIA_VOLUME_CHANGED","MEDIA_MUTE_TOGGLED","MEDIA_TIME_SEEKED"].includes(i)&&s()}),s()}function ge(a){return a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function ve(a){return a?a.replace(/"/g,"&quot;"):""}function T(a){const s=document.createElement("div");s.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg, #00F2FE, #7F00FF);color:#fff;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",s.innerText=a,document.body.appendChild(s),setTimeout(()=>s.remove(),2200)}function be(a){let s=null;function e(){const o=n.getState().media;if(!o.isPipActive){a.innerHTML="";return}const r=Math.floor(o.currentTime/60),d=String(Math.floor(o.currentTime%60)).padStart(2,"0"),c=Math.floor(o.duration/60),b=String(Math.floor(o.duration%60)).padStart(2,"0");a.innerHTML=`
      <div class="floating-pip-container ${o.isOverlapping?"overlapping":""}" id="floatingPipBox">
        <!-- Video Stream Player Canvas / Video -->
        <div style="position:relative; width:100%; height:200px; background:#0A0B10; overflow:hidden;">
          <video 
            id="pipVideoTag" 
            class="pip-video-element" 
            src="${o.videoUrl}" 
            preload="metadata" 
            playsinline 
            ${o.loop?"loop":""}
          ></video>

          <!-- Fallback animated visualizer if external video network stream is offline -->
          <div id="pipCanvasFallback" style="position:absolute; inset:0; display:none; align-items:center; justify-content:center; background:linear-gradient(135deg, #090A10 0%, #151828 100%);">
            <div style="text-align:center;">
              <div style="font-size:36px; animation:pulseGlow 2s infinite;">🎬</div>
              <div style="font-size:11px; color:#00F2FE; font-weight:700; margin-top:4px;">WebBuddy PiP Active</div>
            </div>
          </div>

          <!-- Overlay Controls (Auto-Hiding) -->
          <div class="pip-overlay-controls" id="pipOverlayControls">
            <div class="pip-top-bar">
              <span class="pip-title-text">${fe(o.videoTitle)}</span>
              <div class="pip-header-actions">
                <button class="pip-icon-btn" id="pipOverlapToggleBtn" title="Toggle Overlapping / Corner Dock">
                  ${p("layers","",12)}
                </button>
                <button class="pip-icon-btn" id="pipCloseBtn" title="Close PiP Window">
                  ${p("close","",12)}
                </button>
              </div>
            </div>

            <!-- Big Center Play/Pause Button -->
            <button class="pip-center-play-btn" id="pipCenterPlayBtn" title="Play/Pause (Space)">
              ${p(o.isPlaying?"pause":"play","",20)}
            </button>

            <!-- Bottom Controls Bar -->
            <div class="pip-bottom-controls">
              <input 
                type="range" 
                class="media-seek-slider" 
                id="pipSeekSlider" 
                min="0" 
                max="${o.duration}" 
                value="${o.currentTime}" 
              />

              <div class="pip-actions-row">
                <div style="display:flex; align-items:center; gap:8px;">
                  <button class="pip-icon-btn" id="pipPlayPauseBottomBtn" title="Play/Pause">
                    ${p(o.isPlaying?"pause":"play","",12)}
                  </button>
                  <button class="pip-icon-btn" id="pipMuteBtn" title="Mute/Unmute (M)">
                    ${p(o.isMuted?"volume-x":"volume-2","",12)}
                  </button>
                  <span style="font-size:10px; color:#fff; font-family:'JetBrains Mono';">${r}:${d} / ${c}:${b}</span>
                </div>

                <div style="display:flex; align-items:center; gap:4px;">
                  <span style="font-size:10px; color:#00F2FE; font-weight:700; background:rgba(0,242,254,0.15); padding:1px 5px; border-radius:3px;">
                    ${o.playbackSpeed}x
                  </span>
                  <button class="pip-icon-btn" id="pipFullscreenBtn" title="Fullscreen (F)">
                    ${p("maximize-2","",11)}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,t()}function t(){var c,b,l,f,k,h,u;const i=a.querySelector("#floatingPipBox");if(!i)return;const o=a.querySelector("#pipVideoTag"),r=a.querySelector("#pipCanvasFallback");o&&(o.muted=n.getState().media.isMuted,o.playbackRate=n.getState().media.playbackSpeed,n.getState().media.isPlaying?o.play().catch(()=>{r.style.display="flex"}):o.pause(),o.onerror=()=>{r.style.display="flex"});const d=()=>{i.classList.remove("autohide-inactive"),clearTimeout(s),n.getState().media.autoHideControls&&n.getState().media.isPlaying&&(s=setTimeout(()=>{i.classList.add("autohide-inactive")},2200))};i.addEventListener("mousemove",d),i.addEventListener("mouseenter",d),d(),(c=a.querySelector("#pipCenterPlayBtn"))==null||c.addEventListener("click",v=>{v.stopPropagation(),n.togglePlayPause()}),(b=a.querySelector("#pipPlayPauseBottomBtn"))==null||b.addEventListener("click",v=>{v.stopPropagation(),n.togglePlayPause()}),(l=a.querySelector("#pipCloseBtn"))==null||l.addEventListener("click",v=>{v.stopPropagation(),n.togglePip(!1)}),(f=a.querySelector("#pipOverlapToggleBtn"))==null||f.addEventListener("click",v=>{v.stopPropagation(),n.toggleOverlapping()}),(k=a.querySelector("#pipMuteBtn"))==null||k.addEventListener("click",v=>{v.stopPropagation(),n.toggleMediaMute()}),(h=a.querySelector("#pipSeekSlider"))==null||h.addEventListener("input",v=>{n.seekMedia(parseFloat(v.target.value)),o&&(o.currentTime=parseFloat(v.target.value))}),(u=a.querySelector("#pipFullscreenBtn"))==null||u.addEventListener("click",()=>{var v,g;document.fullscreenElement?(g=document.exitFullscreen)==null||g.call(document):(v=i.requestFullscreen)==null||v.call(i)})}n.subscribe((i,o)=>{["MEDIA_PIP_TOGGLED","MEDIA_PLAY_STATE_CHANGED","MEDIA_OVERLAPPING_TOGGLED","MEDIA_AUTOHIDE_TOGGLED","MEDIA_SPEED_CHANGED","MEDIA_VOLUME_CHANGED","MEDIA_MUTE_TOGGLED","MEDIA_TIME_SEEKED"].includes(o)&&e()}),e()}function fe(a){return a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("app");a.innerHTML=`
    <!-- Top Chrome: Tabs + Omnibox + Bookmarks -->
    <header class="browser-chrome">
      <div id="tabBarContainer"></div>
      <div id="addressBarContainer"></div>
      <div id="bookmarksBarContainer"></div>
    </header>

    <!-- Main Viewport Router Container -->
    <main id="mainViewport" style="flex:1; display:flex; position:relative; overflow:hidden;">
      <!-- Left Notes Sidebar -->
      <aside id="notesSidebarContainer" class="notes-sidebar"></aside>

      <!-- Main Center Content -->
      <div id="ntpContainer" style="width:100%; height:100%; display:flex;"></div>
      <div id="searchContainer" style="width:100%; height:100%; display:none;"></div>
      <div id="webViewerContainer" style="width:100%; height:100%; display:none;"></div>

      <!-- Floating Picture-in-Picture Player Overlay -->
      <div id="floatingPipContainer"></div>
    </main>

    <!-- Popovers and Modals -->
    <div id="shieldsModalContainer"></div>
    <div id="videoControlModalContainer"></div>
    <div id="settingsModalContainer"></div>
    <div id="addShortcutModalContainer"></div>
  `,Q(document.getElementById("tabBarContainer")),Z(document.getElementById("addressBarContainer")),z(document.getElementById("bookmarksBarContainer")),te(document.getElementById("ntpContainer")),ae(document.getElementById("searchContainer")),oe(document.getElementById("webViewerContainer")),re(document.getElementById("shieldsModalContainer")),ce(document.getElementById("settingsModalContainer")),pe(document.getElementById("addShortcutModalContainer")),ue(document.getElementById("notesSidebarContainer")),he(document.getElementById("videoControlModalContainer")),be(document.getElementById("floatingPipContainer")),window.addEventListener("keydown",s=>{var r,d;const t=navigator.platform.toUpperCase().indexOf("MAC")>=0?s.metaKey:s.ctrlKey,i=document.activeElement,o=i&&(i.tagName==="INPUT"||i.tagName==="TEXTAREA");if(t&&s.key.toLowerCase()==="t"){s.preventDefault(),n.createTab();return}if(t&&s.key.toLowerCase()==="w"){s.preventDefault();const c=n.getActiveTab();c&&n.closeTab(c.id);return}if(t&&s.key.toLowerCase()==="l"){s.preventDefault();const c=document.getElementById("omniboxInput");c&&(c.focus(),c.select());return}if(t&&s.key.toLowerCase()==="n"&&!s.shiftKey){s.preventDefault(),n.toggleNotesSidebar();return}if(t&&s.key.toLowerCase()==="s"){s.preventDefault(),n.openModal("shields");return}if(s.key==="Escape"){n.closeModal();return}if(!o){if(s.code==="Space"||s.key.toLowerCase()==="k")s.preventDefault(),n.togglePlayPause();else if(s.key.toLowerCase()==="j"||s.key==="ArrowLeft")s.preventDefault(),n.skipMediaTime(-10);else if(s.key.toLowerCase()==="l"||s.key==="ArrowRight")s.preventDefault(),n.skipMediaTime(10);else if(s.key.toLowerCase()==="p")s.preventDefault(),n.togglePip();else if(s.key.toLowerCase()==="m")s.preventDefault(),n.toggleMediaMute();else if(s.key.toLowerCase()==="f"){s.preventDefault();const c=document.getElementById("floatingPipBox");c&&(document.fullscreenElement?(d=document.exitFullscreen)==null||d.call(document):(r=c.requestFullscreen)==null||r.call(c))}else if(s.key===">"){s.preventDefault();const c=n.getState().media.playbackSpeed,b=[.5,.75,1,1.25,1.5,2],l=Math.min(b.length-1,b.indexOf(c)+1);n.setPlaybackSpeed(b[l])}else if(s.key==="<"){s.preventDefault();const c=n.getState().media.playbackSpeed,b=[.5,.75,1,1.25,1.5,2],l=Math.max(0,b.indexOf(c)-1);n.setPlaybackSpeed(b[l])}}}),console.log("🎬 WebBuddy Video Controls & Media Hub initialized successfully!")});
