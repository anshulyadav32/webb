(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();const ie=[{id:"aurora",name:"Arctic Aurora Borealis",author:"Vincent Guth",location:"Tromsø, Norway",url:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=2560&q=85",thumbnail:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=400&q=75"},{id:"fuji",name:"Mount Fuji Sunrise",author:"Tomek Baginski",location:"Honshu, Japan",url:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2560&q=85",thumbnail:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=75"},{id:"cosmic",name:"Orion Deep Nebula",author:"NASA Hubble",location:"Orion Constellation",url:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2560&q=85",thumbnail:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=75"},{id:"dolomites",name:"Dolomites Alpine Peak",author:"Luca Bravo",location:"South Tyrol, Italy",url:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2560&q=85",thumbnail:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=75"},{id:"cyberpunk",name:"Neo Tokyo Rain",author:"Aleksandar Pasaric",location:"Shinjuku, Tokyo",url:"https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=2560&q=85",thumbnail:"https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=75"}],ae=[{id:"1",title:"YouTube",url:"https://youtube.com",icon:"youtube",color:"#FF0000"},{id:"2",title:"Reddit",url:"https://reddit.com",icon:"message-square",color:"#FF4500"},{id:"3",title:"GitHub",url:"https://github.com",icon:"github",color:"#24292e"},{id:"4",title:"X / Twitter",url:"https://x.com",icon:"twitter",color:"#000000"},{id:"5",title:"Wikipedia",url:"https://wikipedia.org",icon:"book-open",color:"#636466"},{id:"6",title:"Hacker News",url:"https://news.ycombinator.com",icon:"terminal",color:"#FF6600"}],oe=[{id:"b1",title:"WebBuddy Search",url:"brave://newtab",icon:"search"},{id:"b2",title:"GitHub",url:"https://github.com",icon:"github"},{id:"b3",title:"Hacker News",url:"https://news.ycombinator.com",icon:"terminal"},{id:"b4",title:"Wikipedia",url:"https://wikipedia.org",icon:"book-open"}],ne=[{id:"note-1",title:"Adblock & Filter Rule Syntax",content:"Common Adblock syntax:\n- `||doubleclick.net^` : Block domain & subdomains\n- `##.ad-banner` : Hide CSS element on all domains\n- `@@||example.com^$document` : Whitelist domain exception",createdAt:"Aug 20, 2026",updatedAt:"Just now",pinned:!0,url:"https://github.com/webbuddy/adblock-core",color:"#00F2FE"},{id:"note-2",title:"Web Privacy Checklist",content:`1. Keep EasyList and EasyPrivacy filter subscriptions active.
2. Enable Canvas FARBLE anti-fingerprinting.
3. Force HTTPS encryption.
4. Isolate third-party cookie jars.`,createdAt:"Aug 20, 2026",updatedAt:"2h ago",pinned:!1,url:"https://en.wikipedia.org/wiki/Ad_blocking",color:"#7F00FF"},{id:"note-3",title:"Interesting Tech Articles to Read",content:`- Sub-millisecond Rust packet filtering benchmarks
- WebAssembly SIMD hardware acceleration
- Post-Quantum TLS 1.3 Key Encapsulation`,createdAt:"Aug 19, 2026",updatedAt:"Yesterday",pinned:!1,url:"https://news.ycombinator.com",color:"#10B981"}],re=[{id:"fl-easylist",name:"EasyList Primary Ad Blocker",rulesCount:78420,enabled:!0,lastUpdated:"Today"},{id:"fl-easyprivacy",name:"EasyPrivacy Tracker Shield",rulesCount:42190,enabled:!0,lastUpdated:"Today"},{id:"fl-ublock",name:"uBlock Network Filters",rulesCount:36800,enabled:!0,lastUpdated:"Today"},{id:"fl-fanboy",name:"Fanboy Annoyances & Cookie Banners",rulesCount:28540,enabled:!0,lastUpdated:"Yesterday"},{id:"fl-fingerprint",name:"WebBuddy Anti-Fingerprint FARBLE Engine",rulesCount:15300,enabled:!0,lastUpdated:"Today"}],j=[{id:"google",name:"Google",shortcut:":g",searchUrl:"https://www.google.com/search?q=%s",suggestUrl:"https://suggestqueries.google.com/complete/search?client=chrome&q=%s",icon:"google",color:"#4285F4",badgeColor:"#4285F4",isDefault:!0,isBuiltin:!0,description:"Default search engine • Fast & Comprehensive"},{id:"duckduckgo",name:"DuckDuckGo",shortcut:":ddg",searchUrl:"https://duckduckgo.com/?q=%s",suggestUrl:"",icon:"duckduckgo",color:"#DE5833",badgeColor:"#DE5833",isDefault:!1,isBuiltin:!0,description:"Privacy-focused search without user profiling"},{id:"bing",name:"Microsoft Bing",shortcut:":b",searchUrl:"https://www.bing.com/search?q=%s",suggestUrl:"",icon:"bing",color:"#008373",badgeColor:"#008373",isDefault:!1,isBuiltin:!0,description:"Microsoft intelligent search engine"},{id:"brave",name:"Brave Search",shortcut:":br",searchUrl:"https://search.brave.com/search?q=%s",suggestUrl:"",icon:"brave",color:"#FB542B",badgeColor:"#FB542B",isDefault:!1,isBuiltin:!0,description:"Independent index with anti-tracking privacy"},{id:"ecosia",name:"Ecosia",shortcut:":e",searchUrl:"https://www.ecosia.org/search?q=%s",suggestUrl:"",icon:"ecosia",color:"#008477",badgeColor:"#008477",isDefault:!1,isBuiltin:!0,description:"Green search engine that plants trees"},{id:"wikipedia",name:"Wikipedia",shortcut:":w",searchUrl:"https://en.wikipedia.org/wiki/Special:Search?search=%s",suggestUrl:"",icon:"book-open",color:"#636466",badgeColor:"#636466",isDefault:!1,isBuiltin:!0,description:"Direct search in Wikipedia encyclopedia"}],q={"google.com":{title:"Google Search",url:"https://www.google.com",domain:"google.com",favicon:"google",adsBlocked:7,trackersBlocked:14,content:`
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
    `}};class le{constructor(){this.listeners=new Set;const e=this.loadFromStorage("webbuddy_top_sites",ae),t=this.loadFromStorage("webbuddy_bookmarks",oe),s=this.loadFromStorage("webbuddy_saved_notes",ne),a=this.loadFromStorage("webbuddy_filter_lists",re),n=this.loadFromStorage("webbuddy_search_engines",j),r=this.loadFromStorage("webbuddy_tab_groups",[{id:"group-work",name:"Work 💼",color:"#00F2FE",collapsed:!1,mode:"standard"},{id:"group-privacy",name:"Privacy & Tech 🛡️",color:"#7F00FF",collapsed:!1,mode:"standard"}]),p=this.loadFromStorage("webbuddy_settings",{showShieldsStats:!0,showTopSites:!0,showClock:!0,clockFormat:"12h",theme:"dark",blurWallpaper:!1,bookmarksBarVisible:!0,notesSidebarOpen:!1,defaultSearchEngine:"google"});this.state={browserMode:"standard",tabGroups:r,superPvt:{onionConnected:!0,exitCountry:"Zurich, Switzerland 🇨🇭",exitIp:"185.220.101.42",circuitPing:"28ms",anonymityScore:"100% Ultra Stealth",circuit:[{role:"Guard Node",location:"Frankfurt, Germany 🇩🇪",ip:"141.95.12.8",ping:"14ms",status:"Active (Layer 1 AES-256)"},{role:"Middle Relay",location:"Amsterdam, Netherlands 🇳🇱",ip:"194.26.29.112",ping:"21ms",status:"Active (Layer 2 AES-256)"},{role:"Exit Relay",location:"Zurich, Switzerland 🇨🇭",ip:"185.220.101.42",ping:"28ms",status:"Active (Layer 3 Decrypted Hop)"}],fingerprintDefense:"MAX (Farbling 2.0)",canvasNoise:!0,audioNoise:!0,webRtcLeakBlocked:!0,dnsOverHttps:!0,cookiesPurgedOnClose:!0},searchEngines:n,defaultSearchEngine:p.defaultSearchEngine||"google",tabs:[{id:"tab-1",title:"New Tab",url:"brave://newtab",type:"ntp",favicon:"shield",pinned:!1,active:!0,mode:"standard",groupId:null,adsBlockedCount:0,trackersBlockedCount:0,totalBlockedCount:0,history:["brave://newtab"],historyIndex:0,isLoading:!1}],activeTabId:"tab-1",wallpapers:ie,activeWallpaperIndex:0,notes:s,isNotesSidebarOpen:p.notesSidebarOpen||!1,activeNoteId:s.length>0?s[0].id:null,shields:{shieldsEnabled:!0,adsBlockedTotal:5842,trackersBlockedTotal:12940,popupsBlockedTotal:342,bandwidthSavedMB:184.5,timeSavedMin:8.6,blockAds:!0,blockTrackers:!0,blockFingerprinting:!0,blockAnnoyances:!0,blockScripts:!1,upgradeHttps:!0,filterLists:a},topSites:e,bookmarks:t,media:{isPlaying:!1,isPipActive:!1,isOverlapping:!1,autoPip:!0,autoHideControls:!0,playbackSpeed:1,volume:.85,isMuted:!1,currentTime:38,duration:180,videoTitle:"WebBuddy Ad & Tracker Blocker: Sub-Millisecond Packet Filtering",videoUrl:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",adAutoskip:!0,loop:!1},activeModal:null,activeGroupEditing:null,settings:p}}loadFromStorage(e,t){try{const s=localStorage.getItem(e);return s?JSON.parse(s):t}catch{return t}}saveToStorage(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(s){console.warn("Storage save failed",s)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(e,t){for(const s of this.listeners)s(this.state,e,t)}getState(){return this.state}getBrowserMode(){return this.state.browserMode||"standard"}getVisibleTabs(){const e=this.state.browserMode||"standard";return this.state.tabs.filter(t=>(t.mode||"standard")===e)}getActiveTab(){const e=this.getVisibleTabs();return e.find(t=>t.id===this.state.activeTabId)||e[0]||this.state.tabs[0]}getTabGroups(){const e=this.state.browserMode||"standard";return this.state.tabGroups.filter(t=>(t.mode||"standard")===e)}getTabGroupById(e){return this.state.tabGroups.find(t=>t.id===e)}getActiveWallpaper(){return this.state.wallpapers[this.state.activeWallpaperIndex%this.state.wallpapers.length]}getTotalFilterRulesCount(){return this.state.shields.filterLists.filter(e=>e.enabled).reduce((e,t)=>e+t.rulesCount,0)}setBrowserMode(e){if(!["standard","incognito","super-pvt"].includes(e))return;this.state.browserMode=e;const t=this.state.tabs.filter(s=>(s.mode||"standard")===e);if(t.length===0){const s=e==="super-pvt",a=e==="incognito",n="tab-"+e+"-"+Date.now(),r={id:n,title:s?"Super Private Tab (Tor)":a?"Incognito Tab":"New Tab",url:"brave://newtab",type:"ntp",favicon:s?"onion":a?"mask":"shield",pinned:!1,active:!0,mode:e,groupId:null,adsBlockedCount:s?12:a?8:0,trackersBlockedCount:s?24:a?16:0,totalBlockedCount:s?36:a?24:0,history:["brave://newtab"],historyIndex:0,isLoading:!1};this.state.tabs.push(r),this.state.activeTabId=n}else{const s=t.find(a=>a.active)||t[0];this.state.tabs.forEach(a=>{a.active=a.id===s.id}),this.state.activeTabId=s.id}this.notify("BROWSER_MODE_CHANGED",e),this.notify("TAB_SWITCHED",this.getActiveTab())}createTab(e="brave://newtab",t="New Tab",s=null){const a=e==="brave://newtab",n="tab-"+Date.now(),r=this.state.browserMode||"standard",p=r==="super-pvt",l=r==="incognito",h=a?p?6:l?3:0:Math.floor(Math.random()*8)+3,c=a?p?14:l?8:0:Math.floor(Math.random()*12)+6;let u="globe";a&&(u=p?"onion":l?"mask":"shield");let b=t;a&&(b=p?"Super Private Tab":l?"Incognito Tab":"New Tab");const g={id:n,title:b,url:e,type:a?"ntp":this.resolveUrlType(e),favicon:u,pinned:!1,active:!0,mode:r,groupId:s,adsBlockedCount:h,trackersBlockedCount:c,totalBlockedCount:h+c,history:[e],historyIndex:0,isLoading:!1};this.state.tabs.forEach(v=>{(v.mode||"standard")===r&&(v.active=!1)}),this.state.tabs.push(g),this.state.activeTabId=n,a||this.incrementShieldStats(h,c),this.notify("TAB_CREATED",g)}switchTab(e){const t=this.state.tabs.find(s=>s.id===e);t&&(t.mode&&t.mode!==this.state.browserMode&&(this.state.browserMode=t.mode,this.notify("BROWSER_MODE_CHANGED",t.mode)),this.state.tabs.forEach(s=>s.active=s.id===e),this.state.activeTabId=e,this.notify("TAB_SWITCHED",t))}closeTab(e){this.state.browserMode;const t=this.getVisibleTabs();if(t.length===1&&t[0].id===e){this.navigateToUrl("brave://newtab");return}const s=this.state.tabs.findIndex(n=>n.id===e);if(s===-1)return;const a=this.state.tabs[s].active;if(this.state.tabs.splice(s,1),a){const n=this.getVisibleTabs();if(n.length>0){const r=n[Math.max(0,n.length-1)];r.active=!0,this.state.activeTabId=r.id}else this.createTab()}this.notify("TAB_CLOSED",{tabId:e,activeTabId:this.state.activeTabId})}togglePinTab(e){const t=this.state.tabs.find(s=>s.id===e);t&&(t.pinned=!t.pinned,this.state.tabs.sort((s,a)=>(a.pinned?1:0)-(s.pinned?1:0)),this.notify("TAB_PINNED",t))}duplicateTab(e){const t=this.state.tabs.find(s=>s.id===e);t&&this.createTab(t.url,t.title,t.groupId)}moveTabToMode(e,t){const s=this.state.tabs.find(a=>a.id===e);s&&(s.mode=t,s.groupId=null,this.setBrowserMode(t),this.switchTab(e))}createTabGroup(e="New Group",t="#00F2FE",s=null){const a=this.state.browserMode||"standard",n="group-"+Date.now(),r={id:n,name:e.trim()||"New Group",color:t||"#00F2FE",collapsed:!1,mode:a};if(this.state.tabGroups.push(r),s){const p=this.state.tabs.find(l=>l.id===s);p&&(p.groupId=n)}return this.saveToStorage("webbuddy_tab_groups",this.state.tabGroups),this.notify("TAB_GROUPS_UPDATED",this.state.tabGroups),r}updateTabGroup(e,t){const s=this.state.tabGroups.find(a=>a.id===e);s&&(t.name!==void 0&&(s.name=t.name.trim()||s.name),t.color!==void 0&&(s.color=t.color),t.collapsed!==void 0&&(s.collapsed=t.collapsed),this.saveToStorage("webbuddy_tab_groups",this.state.tabGroups),this.notify("TAB_GROUPS_UPDATED",this.state.tabGroups))}toggleGroupCollapse(e){const t=this.state.tabGroups.find(s=>s.id===e);t&&(t.collapsed=!t.collapsed,this.saveToStorage("webbuddy_tab_groups",this.state.tabGroups),this.notify("TAB_GROUPS_UPDATED",this.state.tabGroups))}deleteTabGroup(e,t=!1){const s=this.state.tabGroups.findIndex(a=>a.id===e);if(s!==-1){if(this.state.tabGroups.splice(s,1),t)if(this.state.tabs=this.state.tabs.filter(a=>a.groupId!==e),this.getVisibleTabs().length===0)this.createTab();else{const a=this.getActiveTab();a&&this.switchTab(a.id)}else this.state.tabs.forEach(a=>{a.groupId===e&&(a.groupId=null)});this.saveToStorage("webbuddy_tab_groups",this.state.tabGroups),this.notify("TAB_GROUPS_UPDATED",this.state.tabGroups),this.notify("TAB_CLOSED",{})}}addTabToGroup(e,t){const s=this.state.tabs.find(a=>a.id===e);s&&(s.groupId=t,this.notify("TAB_GROUPS_UPDATED",this.state.tabGroups))}removeTabFromGroup(e){const t=this.state.tabs.find(s=>s.id===e);t&&(t.groupId=null,this.notify("TAB_GROUPS_UPDATED",this.state.tabGroups))}refreshOnionIdentity(){const t=[...[{location:"Zurich, Switzerland 🇨🇭",ip:"185.220.101.42"},{location:"Reykjavik, Iceland 🇮🇸",ip:"185.246.188.67"},{location:"Stockholm, Sweden 🇸🇪",ip:"193.189.100.18"},{location:"Frankfurt, Germany 🇩🇪",ip:"141.95.12.8"},{location:"Amsterdam, Netherlands 🇳🇱",ip:"194.26.29.112"},{location:"Helsinki, Finland 🇫🇮",ip:"95.217.163.24"},{location:"Toronto, Canada 🇨🇦",ip:"198.98.51.109"},{location:"Singapore 🇸🇬",ip:"139.99.120.45"}]].sort(()=>.5-Math.random()),s=t[0],a=t[1],n=t[2],r=Math.floor(Math.random()*25)+18;this.state.superPvt={...this.state.superPvt,exitCountry:n.location,exitIp:n.ip,circuitPing:`${r}ms`,circuit:[{role:"Guard Node",location:s.location,ip:s.ip,ping:`${Math.floor(r*.4)}ms`,status:"Active (Layer 1 AES-256)"},{role:"Middle Relay",location:a.location,ip:a.ip,ping:`${Math.floor(r*.7)}ms`,status:"Active (Layer 2 AES-256)"},{role:"Exit Relay",location:n.location,ip:n.ip,ping:`${r}ms`,status:"Active (Layer 3 Decrypted Hop)"}]},this.notify("SUPER_PVT_UPDATED",this.state.superPvt)}panicNukeSession(){this.state.tabs=this.state.tabs.filter(t=>(t.mode||"standard")==="standard"),this.state.tabs.length===0&&this.createTab("brave://newtab","New Tab",null),this.state.browserMode="standard";const e=this.state.tabs[0];e.active=!0,this.state.activeTabId=e.id,this.refreshOnionIdentity(),this.notify("SESSION_NUKED",{message:"All private tabs, cookies & RAM caches destroyed."}),this.notify("BROWSER_MODE_CHANGED","standard"),this.notify("TAB_SWITCHED",e)}getDefaultSearchEngine(){const e=this.state.settings.defaultSearchEngine||this.state.defaultSearchEngine||"google";return this.state.searchEngines.find(t=>t.id===e)||this.state.searchEngines.find(t=>t.isDefault)||this.state.searchEngines[0]||j[0]}getSearchEngines(){return this.state.searchEngines}getSearchEngineById(e){return this.state.searchEngines.find(t=>t.id===e)}setDefaultSearchEngine(e){const t=this.state.searchEngines.find(s=>s.id===e);t&&(this.state.searchEngines.forEach(s=>{s.isDefault=s.id===e}),this.state.defaultSearchEngine=e,this.state.settings.defaultSearchEngine=e,this.saveToStorage("webbuddy_search_engines",this.state.searchEngines),this.saveToStorage("webbuddy_settings",this.state.settings),this.notify("SEARCH_ENGINE_CHANGED",t),this.notify("SEARCH_ENGINES_UPDATED",this.state.searchEngines),this.notify("SETTINGS_UPDATED",this.state.settings))}addSearchEngine({name:e,shortcut:t,searchUrl:s,icon:a="search"}){if(!e||!s)return null;let n=t?t.trim():"";n&&!n.startsWith(":")&&!n.startsWith("!")&&(n=":"+n);const p={id:"se-"+Date.now(),name:e.trim(),shortcut:n,searchUrl:s.trim(),suggestUrl:"",icon:a||"search",color:"#4FACFE",badgeColor:"#4FACFE",isDefault:!1,isBuiltin:!1,description:`Custom search engine (${e.trim()})`};return this.state.searchEngines.push(p),this.saveToStorage("webbuddy_search_engines",this.state.searchEngines),this.notify("SEARCH_ENGINES_UPDATED",this.state.searchEngines),p}updateSearchEngine(e,{name:t,shortcut:s,searchUrl:a}){const n=this.state.searchEngines.findIndex(p=>p.id===e);if(n===-1)return;let r=s?s.trim():"";r&&!r.startsWith(":")&&!r.startsWith("!")&&(r=":"+r),this.state.searchEngines[n]={...this.state.searchEngines[n],name:t.trim()||this.state.searchEngines[n].name,shortcut:r,searchUrl:a.trim()||this.state.searchEngines[n].searchUrl},this.saveToStorage("webbuddy_search_engines",this.state.searchEngines),this.notify("SEARCH_ENGINES_UPDATED",this.state.searchEngines)}deleteSearchEngine(e){const t=this.state.searchEngines.findIndex(a=>a.id===e);if(t===-1)return;const s=this.state.searchEngines[t].isDefault||this.state.defaultSearchEngine===e;if(this.state.searchEngines.splice(t,1),s){const a=this.state.searchEngines.find(n=>n.id==="google")||this.state.searchEngines[0];a&&this.setDefaultSearchEngine(a.id)}this.saveToStorage("webbuddy_search_engines",this.state.searchEngines),this.notify("SEARCH_ENGINES_UPDATED",this.state.searchEngines)}resetSearchEnginesToDefault(){this.state.searchEngines=JSON.parse(JSON.stringify(j)),this.state.defaultSearchEngine="google",this.state.settings.defaultSearchEngine="google",this.saveToStorage("webbuddy_search_engines",this.state.searchEngines),this.saveToStorage("webbuddy_settings",this.state.settings),this.notify("SEARCH_ENGINES_UPDATED",this.state.searchEngines),this.notify("SEARCH_ENGINE_CHANGED",this.getDefaultSearchEngine()),this.notify("SETTINGS_UPDATED",this.state.settings)}resolveSearchQuery(e){let t=e.trim(),s=this.getDefaultSearchEngine();const a=t.split(/\s+/);if(a.length>1){const r=a[0].toLowerCase(),p=this.state.searchEngines.find(l=>{if(!l.shortcut)return!1;const h=l.shortcut.toLowerCase();return h===r||h===":"+r||h==="!"+r||":"+h===r});p&&(s=p,t=a.slice(1).join(" "))}let n=s.searchUrl;return n.includes("%s")?n=n.replace("%s",encodeURIComponent(t)):n=n+(n.includes("?")?"&q=":"?q=")+encodeURIComponent(t),{engine:s,query:t,url:n}}resolveUrlType(e){const t=e.trim();return t==="brave://newtab"||t==="newtab"?"ntp":t.startsWith("brave://search")?"search":(!t.includes(".")&&!t.startsWith("http://")&&!t.startsWith("https://")&&!t.startsWith("brave://"),"web")}navigateToUrl(e){const t=this.getActiveTab();if(!t)return;let s=e.trim(),a="web",n="Web Page",r="globe";if(!s||s==="brave://newtab"||s==="newtab")s="brave://newtab",a="ntp",n="New Tab",r="shield";else if(s.startsWith("brave://search"))a="search",n=`${new URLSearchParams(s.split("?")[1]||"").get("q")||"Search"} - WebBuddy Search`,r="search";else if(!s.includes(".")&&!s.startsWith("http://")&&!s.startsWith("https://")&&!s.startsWith("brave://")){const p=this.resolveSearchQuery(s);a="web",n=`${p.query} - ${p.engine.name} Search`,s=p.url,r=p.engine.icon||"search"}else{!s.startsWith("http://")&&!s.startsWith("https://")&&(s="https://"+s);try{n=new URL(s).hostname.replace("www.",""),q[n]&&(n=q[n].title,r=q[n].favicon||"globe")}catch{n=s}}t.isLoading=!0,this.notify("TAB_LOADING",t),setTimeout(()=>{if(t.url=s,t.type=a,t.title=n,t.favicon=r,t.isLoading=!1,t.history[t.historyIndex]!==s&&(t.history=t.history.slice(0,t.historyIndex+1),t.history.push(s),t.historyIndex=t.history.length-1),a==="web"||a==="search"){const p=Math.floor(Math.random()*6)+2,l=Math.floor(Math.random()*10)+5;t.adsBlockedCount=p,t.trackersBlockedCount=l,t.totalBlockedCount=p+l,this.incrementShieldStats(p,l)}else t.adsBlockedCount=0,t.trackersBlockedCount=0,t.totalBlockedCount=0;this.notify("NAVIGATION_COMPLETE",t)},250)}goBack(){const e=this.getActiveTab();e&&e.historyIndex>0&&(e.historyIndex--,this.navigateToUrl(e.history[e.historyIndex]))}goForward(){const e=this.getActiveTab();e&&e.historyIndex<e.history.length-1&&(e.historyIndex++,this.navigateToUrl(e.history[e.historyIndex]))}reloadCurrentTab(){const e=this.getActiveTab();e&&this.navigateToUrl(e.url)}nextWallpaper(){this.state.activeWallpaperIndex=(this.state.activeWallpaperIndex+1)%this.state.wallpapers.length,this.notify("WALLPAPER_CHANGED",this.getActiveWallpaper())}selectWallpaper(e){e>=0&&e<this.state.wallpapers.length&&(this.state.activeWallpaperIndex=e,this.notify("WALLPAPER_CHANGED",this.getActiveWallpaper()))}toggleShields(){this.state.shields.shieldsEnabled=!this.state.shields.shieldsEnabled,this.notify("SHIELDS_TOGGLED",this.state.shields)}updateShieldOption(e,t){this.state.shields.hasOwnProperty(e)&&(this.state.shields[e]=t,this.notify("SHIELDS_OPTION_CHANGED",{key:e,value:t}))}toggleFilterList(e){const t=this.state.shields.filterLists.find(s=>s.id===e);t&&(t.enabled=!t.enabled,this.saveToStorage("webbuddy_filter_lists",this.state.shields.filterLists),this.notify("FILTER_LIST_TOGGLED",t))}incrementShieldStats(e=1,t=1){this.state.shields.shieldsEnabled&&(this.state.shields.adsBlockedTotal+=e,this.state.shields.trackersBlockedTotal+=t,this.state.shields.bandwidthSavedMB=parseFloat((this.state.shields.bandwidthSavedMB+(e+t)*.024).toFixed(1)),this.state.shields.timeSavedMin=parseFloat((this.state.shields.timeSavedMin+(e+t)*.002).toFixed(1)),this.notify("SHIELDS_STATS_UPDATED",this.state.shields))}addTopSite(e,t,s="globe"){const a={id:"site-"+Date.now(),title:e,url:t.startsWith("http")?t:"https://"+t,icon:s,color:"#00F2FE"};this.state.topSites.push(a),this.saveToStorage("webbuddy_top_sites",this.state.topSites),this.notify("TOP_SITES_UPDATED",this.state.topSites)}removeTopSite(e){this.state.topSites=this.state.topSites.filter(t=>t.id!==e),this.saveToStorage("webbuddy_top_sites",this.state.topSites),this.notify("TOP_SITES_UPDATED",this.state.topSites)}addBookmark(e,t){const s={id:"bm-"+Date.now(),title:e,url:t.startsWith("http")?t:"https://"+t,icon:"bookmark"};this.state.bookmarks.push(s),this.saveToStorage("webbuddy_bookmarks",this.state.bookmarks),this.notify("BOOKMARKS_UPDATED",this.state.bookmarks)}toggleNotesSidebar(e){this.state.isNotesSidebarOpen=e!==void 0?e:!this.state.isNotesSidebarOpen,this.state.settings.notesSidebarOpen=this.state.isNotesSidebarOpen,this.saveToStorage("webbuddy_settings",this.state.settings),this.notify("NOTES_SIDEBAR_TOGGLED",this.state.isNotesSidebarOpen)}selectNote(e){this.state.activeNoteId=e,this.notify("NOTE_SELECTED",e)}addNote(e="Untitled Note",t="",s="",a="#00F2FE"){const n={id:"note-"+Date.now(),title:e.trim()||"Untitled Note",content:t,url:s||(this.getActiveTab().type==="web"?this.getActiveTab().url:""),color:a,pinned:!1,createdAt:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),updatedAt:"Just now"};return this.state.notes.unshift(n),this.state.activeNoteId=n.id,this.saveToStorage("webbuddy_saved_notes",this.state.notes),this.notify("NOTE_ADDED",n),n}updateNote(e,t){const s=this.state.notes.find(a=>a.id===e);s&&(Object.assign(s,t,{updatedAt:"Just now"}),this.saveToStorage("webbuddy_saved_notes",this.state.notes),this.notify("NOTE_UPDATED",s))}deleteNote(e){this.state.notes=this.state.notes.filter(t=>t.id!==e),this.state.activeNoteId===e&&(this.state.activeNoteId=this.state.notes.length>0?this.state.notes[0].id:null),this.saveToStorage("webbuddy_saved_notes",this.state.notes),this.notify("NOTE_DELETED",e)}togglePinNote(e){const t=this.state.notes.find(s=>s.id===e);t&&(t.pinned=!t.pinned,this.state.notes.sort((s,a)=>(a.pinned?1:0)-(s.pinned?1:0)),this.saveToStorage("webbuddy_saved_notes",this.state.notes),this.notify("NOTE_UPDATED",t))}getNotesCapacityStats(){const t=JSON.stringify(this.state.notes||[]),s=new Blob([t]).size,a=(s/1024).toFixed(2),n=(s/(1024*1024)).toFixed(3),r=Math.min(100,parseFloat((s/5242880*100).toFixed(2)));return{usedBytes:s,usedKb:a,usedMb:n,maxBytes:5242880,maxMb:5,percentUsed:r,notesCount:this.state.notes.length,maxNotesLimit:500,remainingKb:((5242880-s)/1024).toFixed(1)}}exportNotesJson(){const e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.state.notes,null,2)),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download",`webbuddy_notes_backup_${Date.now()}.json`),t.click()}togglePlayPause(){this.state.media.isPlaying=!this.state.media.isPlaying,this.notify("MEDIA_PLAY_STATE_CHANGED",this.state.media.isPlaying)}togglePip(e){this.state.media.isPipActive=e!==void 0?e:!this.state.media.isPipActive,this.notify("MEDIA_PIP_TOGGLED",this.state.media.isPipActive)}toggleAutoPip(){this.state.media.autoPip=!this.state.media.autoPip,this.notify("MEDIA_AUTOPIP_TOGGLED",this.state.media.autoPip)}toggleOverlapping(e){this.state.media.isOverlapping=e!==void 0?e:!this.state.media.isOverlapping,this.notify("MEDIA_OVERLAPPING_TOGGLED",this.state.media.isOverlapping)}toggleAutoHideControls(){this.state.media.autoHideControls=!this.state.media.autoHideControls,this.notify("MEDIA_AUTOHIDE_TOGGLED",this.state.media.autoHideControls)}setPlaybackSpeed(e){this.state.media.playbackSpeed=e,this.notify("MEDIA_SPEED_CHANGED",e)}setMediaVolume(e){this.state.media.volume=Math.max(0,Math.min(1,e)),this.state.media.isMuted=this.state.media.volume===0,this.notify("MEDIA_VOLUME_CHANGED",this.state.media.volume)}toggleMediaMute(){this.state.media.isMuted=!this.state.media.isMuted,this.notify("MEDIA_MUTE_TOGGLED",this.state.media.isMuted)}seekMedia(e){this.state.media.currentTime=Math.max(0,Math.min(this.state.media.duration,e)),this.notify("MEDIA_TIME_SEEKED",this.state.media.currentTime)}skipMediaTime(e){this.seekMedia(this.state.media.currentTime+e)}toggleMediaLoop(){this.state.media.loop=!this.state.media.loop,this.notify("MEDIA_LOOP_TOGGLED",this.state.media.loop)}openModal(e){this.state.activeModal=this.state.activeModal===e?null:e,this.notify("MODAL_CHANGED",this.state.activeModal)}openTabGroupModal(e=null){this.state.activeGroupEditing=e,this.state.activeModal="tabGroup",this.notify("MODAL_CHANGED","tabGroup")}closeModal(){this.state.activeModal=null,this.state.activeGroupEditing=null,this.notify("MODAL_CHANGED",null)}updateSetting(e,t){this.state.settings[e]=t,this.saveToStorage("webbuddy_settings",this.state.settings),this.notify("SETTINGS_UPDATED",{key:e,val:t,settings:this.state.settings})}}const o=new le,de=`
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
`;function d(i,e="",t=16){const s=`icon ${e}`;switch(i){case"webbuddy-logo":return`<div class="${s} wb-logo-wrapper" style="width:${t}px; height:${t}px;">${de}</div>`;case"shield":case"shield-check":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`;case"sparkles":case"leo":case"ai":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>`;case"rewards":case"bat":case"triangle":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 20 2 20 12 2"></polygon></svg>`;case"wallet":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>`;case"search":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;case"plus":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;case"x":case"close":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;case"arrow-left":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`;case"arrow-right":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;case"rotate-cw":case"refresh":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>`;case"home":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;case"lock":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;case"star":case"bookmark":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;case"pin":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="17" x2="12" y2="22"></line><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path></svg>`;case"settings":case"sliders":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`;case"image":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`;case"chevron-down":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;case"chevron-up":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`;case"link":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;case"wifi":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`;case"bluetooth":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline></svg>`;case"globe":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;case"send":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;case"zap":case"bolt":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;case"coins":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>`;case"circle-dollar-sign":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>`;case"clock":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;case"check":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;case"copy":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;case"file-text":case"notes":case"notepad":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>`;case"trash":case"trash-2":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`;case"edit":case"pen":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`;case"download":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`;case"hard-drive":case"database":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;case"play":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;case"pause":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;case"pip":case"picture-in-picture":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><rect x="12" y="11" width="8" height="7" rx="1" fill="currentColor" fill-opacity="0.3"></rect></svg>`;case"skip-back":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>`;case"skip-forward":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>`;case"volume-2":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;case"volume-x":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;case"maximize-2":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`;case"repeat":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>`;case"layers":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`;case"puzzle":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.439 7.85c-.049-.322.059-.648.289-.878l1.568-1.568c.47-.47.704-1.096.704-1.704s-.234-1.234-.704-1.704a2.41 2.41 0 0 0-3.408 0l-1.568 1.568c-.23.23-.556.338-.878.289A5.003 5.003 0 0 0 10.5 4a5 5 0 0 0-4.945 4.095c-.049.322-.338.556-.66.605L3.327 8.989c-.61.092-1.157.433-1.523.948a2.406 2.406 0 0 0 .285 2.871l1.568 1.568c.23.23.338.556.289.878A5.003 5.003 0 0 0 4 20.5a5 5 0 0 0 4.095 4.945c.322.049.556-.23.605-.552l.289-1.568c.092-.61.433-1.157.948-1.523a2.406 2.406 0 0 1 2.871.285l1.568 1.568c.47.47 1.096.704 1.704.704s1.234-.234 1.704-.704a2.41 2.41 0 0 0 0-3.408l-1.568-1.568c-.23-.23-.338-.556-.289-.878A5.003 5.003 0 0 0 20.5 15.5a5 5 0 0 0 4.945-4.095c.049-.322-.23-.556-.552-.605l-1.568-.289c-.61-.092-1.157-.433-1.523-.948a2.406 2.406 0 0 1 .285-2.871z"></path></svg>`;case"menu":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;case"external-link":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;case"google":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>`;case"duckduckgo":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="currentColor"><path fill="#DE5833" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c4.686 0 8.57 3.37 9.4 7.82-1.3-.87-2.88-1.39-4.57-1.43l1.1-3.32c.1-.31-.07-.65-.38-.75-.31-.1-.65.07-.75.38l-1.18 3.55c-1.15-.02-2.31.11-3.41.4-1.16-.76-2.5-1.22-3.95-1.31l1.45-3.37c.13-.3-.02-.66-.32-.79-.3-.13-.66.02-.79.32L7.02 7.78C5.23 8.35 3.73 9.53 2.8 11.08 3.79 6.18 8.44 2.4 12 2.4zM6.9 11.2c.88 0 1.6.72 1.6 1.6s-.72 1.6-1.6 1.6-1.6-.72-1.6-1.6.72-1.6 1.6-1.6zm10.2 0c.88 0 1.6.72 1.6 1.6s-.72 1.6-1.6 1.6-1.6-.72-1.6-1.6.72-1.6 1.6-1.6zm-5.1 3.2c1.77 0 3.3.99 4.08 2.44-.45.31-1.02.5-1.63.5h-4.9c-.61 0-1.18-.19-1.63-.5.78-1.45 2.31-2.44 4.08-2.44z"/></svg>`;case"bing":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="currentColor"><path fill="#008373" d="M4 2v19.46l5.77 3.33 9.45-5.46v-6.38l-6.15 3.55v-7.8l-4.1 2.37V2H4zm4.97 4.95l4.1-2.37v5.27l-4.1 2.37V6.95z"/></svg>`;case"brave":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="currentColor"><path fill="#FB542B" d="M12 2L4 5.5v6.2c0 5.4 3.4 10.4 8 11.8 4.6-1.4 8-6.4 8-11.8V5.5L12 2zm0 3.3l5.5 2.4v4.5c0 3.9-2.4 7.5-5.5 8.6-3.1-1.1-5.5-4.7-5.5-8.6V7.7l5.5-2.4zm-2 5.2l-1.5 1.5 3.5 3.5 6-6-1.5-1.5-4.5 4.5-2-2z"/></svg>`;case"ecosia":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="currentColor"><path fill="#008477" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V19h-2v-.07C7.61 18.52 5 15.57 5 12c0-.34.03-.67.08-1 .6 2.83 3.08 5 6.07 5s5.47-2.17 6.07-5c.05.33.08.66.08 1 0 3.57-2.61 6.52-6.3 6.93zM12 5c2.76 0 5 2.24 5 5 0 .34-.03.67-.08 1-.6-2.83-3.08-5-6.07-5s-5.47 2.17-6.07 5c-.05-.33-.08-.66-.08-1 0-2.76 2.24-5 5-5z"/></svg>`;case"yahoo":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="currentColor"><path fill="#6001D2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.65 14.5h-2.3l.03-3.75-3.32-6.5h2.47l2.03 4.4 2-4.4h2.44l-3.35 6.5v3.75z"/></svg>`;case"search-engine":case"search-settings":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><path d="M11 8v6M8 11h6"></path></svg>`;case"check-circle":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;case"more-vertical":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>`;case"incognito":case"glasses":case"mask":case"spy":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 10s3-4 10-4 10 4 10 4"></path><path d="M2 10v1a5 5 0 0 0 5 5h1a5 5 0 0 0 4-2 5 5 0 0 0 4 2h1a5 5 0 0 0 5-5v-1"></path><circle cx="7" cy="14" r="3"></circle><circle cx="17" cy="14" r="3"></circle><path d="M10 14h4"></path><path d="M4 6h16"></path></svg>`;case"onion":case"tor":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.5 9 8 9.8V22h4v-.2c4.5-.8 8-4.8 8-9.8 0-5.5-4.5-10-10-10z"></path><path d="M12 6c-3.3 0-6 2.7-6 6 0 3.2 2.2 5.9 5.2 6.4"></path><path d="M12 9c-1.7 0-3 1.3-3 3 0 1.6 1.1 2.9 2.6 3"></path><circle cx="12" cy="12" r="1"></circle></svg>`;case"circuit":case"network":case"nodes":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>`;case"tab-group":case"folder-plus":case"group":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path><line x1="12" y1="10" x2="12" y2="16"></line><line x1="9" y1="13" x2="15" y2="13"></line></svg>`;case"palette":case"color":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>`;case"nuke":case"flame":case"panic":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`;case"eye-off":case"stealth":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" y1="2" x2="22" y2="22"></line></svg>`;case"fingerprint":return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path><path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"></path><path d="M17.29 21.02c.12-.6.14-1.2.07-1.83a8 8 0 0 0-.8-2.61"></path><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M14 13.12c0 2.38 0 4.38-.14 6.88"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>`;default:return`<svg class="${s}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>`}}function ce(i){let e=null;function t(){o.getState();const l=o.getBrowserMode(),h=o.getVisibleTabs(),c=o.getTabGroups(),u={},b=[];c.forEach(g=>{u[g.id]=[]}),h.forEach(g=>{g.groupId&&u[g.groupId]?u[g.groupId].push(g):b.push(g)}),i.innerHTML=`
      <div class="window-top-bar ${l!=="standard"?"mode-"+l:""}">
        <div class="traffic-lights">
          <div class="traffic-light close" title="Close Window"></div>
          <div class="traffic-light minimize" title="Minimize"></div>
          <div class="traffic-light maximize" title="Zoom"></div>
        </div>

        <div class="brand-top-badge" id="brandHomeBtn" title="WebBuddy Browser - Home">
          ${d("webbuddy-logo","",18)}
          <span class="brand-top-name">WebBuddy</span>
        </div>

        <!-- Mode Switcher: Standard / Incognito / Super Private -->
        <div class="browser-mode-switcher" id="modeSwitcher">
          <button class="mode-tab-btn ${l==="standard"?"active":""}" data-set-mode="standard" title="Standard Browsing Workspace">
            ${d("globe","",12)}
            <span>Standard</span>
          </button>

          <button class="mode-tab-btn incognito-btn ${l==="incognito"?"active":""}" data-set-mode="incognito" title="Incognito Mode - Ephemeral RAM, Zero History (Cmd+Shift+N)">
            ${d("mask","",12)}
            <span>Incognito</span>
          </button>

          <button class="mode-tab-btn super-pvt-btn ${l==="super-pvt"?"active":""}" data-set-mode="super-pvt" title="Super Private Tor Mode - Onion Encrypted Multi-Hop (Cmd+Shift+P)">
            ${d("onion","",12)}
            <span>Super Pvt</span>
          </button>
        </div>

        <!-- Tab Strip -->
        <div class="tab-strip" id="tabStrip">
          <!-- Render Tab Groups with their Tabs -->
          ${c.map(g=>{const v=u[g.id]||[],y=g.collapsed,f=v.some(k=>k.active);return`
              <div class="tab-group-container ${y?"collapsed":""}" data-group-id="${g.id}" style="--group-color: ${g.color};">
                <div class="tab-group-header-pill" data-toggle-collapse="${g.id}" title="${z(g.name)} (${v.length} tabs) • Click to ${y?"expand":"collapse"}">
                  <span class="group-dot" style="background: ${g.color}; box-shadow: 0 0 6px ${g.color};"></span>
                  <span class="group-name-label">${F(g.name)}</span>
                  <span class="group-count-badge">${v.length}</span>
                  <span class="group-arrow-icon">${d(y?"chevron-down":"chevron-up","",10)}</span>
                  <button class="group-menu-trigger-btn" data-group-menu="${g.id}" title="Group Options">
                    ${d("more-vertical","",11)}
                  </button>
                </div>

                <div class="tab-group-tabs ${y&&!f?"hidden-group-tabs":""}">
                  ${v.map(k=>s(k,g)).join("")}
                </div>
              </div>
            `}).join("")}

          <!-- Render Ungrouped Tabs -->
          ${b.map(g=>s(g,null)).join("")}

          <!-- Action Buttons -->
          <div class="tab-strip-actions">
            <button class="new-group-btn" id="newGroupBtn" title="Create Tab Group">
              ${d("folder-plus","",13)}
              <span>+ Group</span>
            </button>
            <button class="new-tab-btn" id="newTabBtn" title="New Tab (Cmd+T)">
              ${d("plus","",14)}
            </button>
          </div>
        </div>
      </div>

      <!-- Context Menu Container -->
      <div id="tabContextMenu" class="tab-context-menu" style="display:none;"></div>
      
      <!-- Group Menu Popover -->
      <div id="groupMenuPopover" class="group-menu-popover" style="display:none;"></div>
    `,a()}function s(l,h){const c=!!h,u=c?`border-bottom: 2px solid ${h.color};`:"";return`
      <div 
        class="browser-tab ${l.active?"active":""} ${l.pinned?"pinned":""} ${c?"grouped-tab":""}" 
        data-tab-id="${l.id}" 
        style="${u}"
        title="${z(l.title)}"
      >
        <div class="tab-favicon">
          ${d(l.favicon||"globe","",14)}
        </div>
        <span class="tab-title">${F(l.title)}</span>
        <button class="tab-close-btn" data-close-tab="${l.id}" title="Close Tab">
          ${d("close","",11)}
        </button>
      </div>
    `}function a(){var l,h,c;i.querySelectorAll("[data-set-mode]").forEach(u=>{u.addEventListener("click",()=>{const b=u.dataset.setMode;o.setBrowserMode(b)})}),(l=i.querySelector("#brandHomeBtn"))==null||l.addEventListener("click",()=>{o.navigateToUrl("brave://newtab")}),(h=i.querySelector("#newTabBtn"))==null||h.addEventListener("click",()=>{o.createTab()}),(c=i.querySelector("#newGroupBtn"))==null||c.addEventListener("click",()=>{o.openTabGroupModal(null)}),i.querySelectorAll("[data-toggle-collapse]").forEach(u=>{u.addEventListener("click",b=>{if(b.target.closest("[data-group-menu]"))return;const g=u.dataset.toggleCollapse;o.toggleGroupCollapse(g)})}),i.querySelectorAll("[data-group-menu]").forEach(u=>{u.addEventListener("click",b=>{b.stopPropagation();const g=u.dataset.groupMenu;r(g,u)})}),i.querySelectorAll(".browser-tab").forEach(u=>{u.addEventListener("click",b=>{if(b.target.closest("[data-close-tab]"))return;const g=u.dataset.tabId;o.switchTab(g)}),u.addEventListener("dblclick",b=>{b.preventDefault();const g=u.dataset.tabId;o.togglePinTab(g)}),u.addEventListener("contextmenu",b=>{b.preventDefault();const g=u.dataset.tabId;n(g,b.clientX,b.clientY)})}),i.querySelectorAll("[data-close-tab]").forEach(u=>{u.addEventListener("click",b=>{b.stopPropagation();const g=u.dataset.closeTab;o.closeTab(g)})})}function n(l,h,c){var x,m,E,T,M,O,R;p();const u=o.getState().tabs.find(A=>A.id===l);if(!u)return;const b=i.querySelector("#tabContextMenu");if(!b)return;const g=o.getTabGroups(),v=u.groupId?o.getTabGroupById(u.groupId):null;b.innerHTML=`
      <div class="context-menu-header">
        <span class="context-menu-title">${F(u.title)}</span>
      </div>
      <div class="context-menu-divider"></div>

      <!-- Add to New Group -->
      <div class="context-menu-item" id="ctxAddToNewGroup">
        ${d("folder-plus","",14)}
        <span>Add Tab to New Group...</span>
      </div>

      <!-- Existing Groups Submenu -->
      ${g.length>0?`
        <div class="context-menu-submenu-item">
          <div class="submenu-label">
            ${d("tab-group","",14)}
            <span>Move to Group</span>
            <span style="margin-left:auto;">›</span>
          </div>
          <div class="context-submenu">
            ${g.map(A=>`
              <div class="context-menu-item ${A.id===u.groupId?"active-group":""}" data-move-to-group="${A.id}">
                <span class="color-dot" style="background:${A.color};"></span>
                <span>${F(A.name)}</span>
                ${A.id===u.groupId?'<span style="margin-left:auto;">✓</span>':""}
              </div>
            `).join("")}
          </div>
        </div>
      `:""}

      ${v?`
        <div class="context-menu-item" id="ctxRemoveFromGroup">
          ${d("x","",14)}
          <span>Remove from Group ("${F(v.name)}")</span>
        </div>
      `:""}

      <div class="context-menu-divider"></div>

      <!-- Mode Moves -->
      <div class="context-menu-item" id="ctxMoveIncognito">
        ${d("mask","",14)}
        <span>Open in Incognito Mode</span>
      </div>
      <div class="context-menu-item" id="ctxMoveSuperPvt">
        ${d("onion","",14)}
        <span>Open in Super Private (Tor)</span>
      </div>

      <div class="context-menu-divider"></div>

      <!-- Actions -->
      <div class="context-menu-item" id="ctxDuplicate">
        ${d("copy","",14)}
        <span>Duplicate Tab</span>
      </div>
      <div class="context-menu-item" id="ctxPin">
        ${d("pin","",14)}
        <span>${u.pinned?"Unpin Tab":"Pin Tab"}</span>
      </div>
      <div class="context-menu-item danger" id="ctxClose">
        ${d("close","",14)}
        <span>Close Tab</span>
      </div>
    `;const y=240,f=320,k=Math.min(h,window.innerWidth-y-10),w=Math.min(c,window.innerHeight-f-10);b.style.left=`${k}px`,b.style.top=`${w}px`,b.style.display="block",e=b,(x=b.querySelector("#ctxAddToNewGroup"))==null||x.addEventListener("click",()=>{p(),o.openTabGroupModal(null),o.state.pendingTabForGroup=l}),b.querySelectorAll("[data-move-to-group]").forEach(A=>{A.addEventListener("click",()=>{const se=A.dataset.moveToGroup;o.addTabToGroup(l,se),p()})}),(m=b.querySelector("#ctxRemoveFromGroup"))==null||m.addEventListener("click",()=>{o.removeTabFromGroup(l),p()}),(E=b.querySelector("#ctxMoveIncognito"))==null||E.addEventListener("click",()=>{o.moveTabToMode(l,"incognito"),p()}),(T=b.querySelector("#ctxMoveSuperPvt"))==null||T.addEventListener("click",()=>{o.moveTabToMode(l,"super-pvt"),p()}),(M=b.querySelector("#ctxDuplicate"))==null||M.addEventListener("click",()=>{o.duplicateTab(l),p()}),(O=b.querySelector("#ctxPin"))==null||O.addEventListener("click",()=>{o.togglePinTab(l),p()}),(R=b.querySelector("#ctxClose"))==null||R.addEventListener("click",()=>{o.closeTab(l),p()})}function r(l,h){var g,v,y,f,k,w;p();const c=o.getTabGroupById(l);if(!c)return;const u=i.querySelector("#groupMenuPopover");if(!u)return;const b=h.getBoundingClientRect();u.innerHTML=`
      <div class="group-popover-header" style="border-left: 3px solid ${c.color};">
        <span class="group-popover-title">${F(c.name)}</span>
        <button class="popover-close-btn" id="popoverCloseBtn">${d("close","",12)}</button>
      </div>

      <div class="group-popover-actions">
        <div class="group-popover-item" id="grpEditBtn">
          ${d("edit","",14)}
          <span>Edit Group Name & Color...</span>
        </div>

        <div class="group-popover-item" id="grpNewTabBtn">
          ${d("plus","",14)}
          <span>New Tab in this Group</span>
        </div>

        <div class="group-popover-item" id="grpToggleCollapseBtn">
          ${d(c.collapsed?"chevron-down":"chevron-up","",14)}
          <span>${c.collapsed?"Expand Group":"Collapse Group"}</span>
        </div>

        <div class="group-popover-divider"></div>

        <div class="group-popover-item" id="grpUngroupBtn">
          ${d("layers","",14)}
          <span>Ungroup All Tabs</span>
        </div>

        <div class="group-popover-item danger" id="grpCloseTabsBtn">
          ${d("trash-2","",14)}
          <span>Close All Tabs in Group</span>
        </div>
      </div>
    `,u.style.left=`${Math.min(b.left,window.innerWidth-220)}px`,u.style.top=`${b.bottom+6}px`,u.style.display="block",e=u,(g=u.querySelector("#popoverCloseBtn"))==null||g.addEventListener("click",()=>p()),(v=u.querySelector("#grpEditBtn"))==null||v.addEventListener("click",()=>{p(),o.openTabGroupModal(l)}),(y=u.querySelector("#grpNewTabBtn"))==null||y.addEventListener("click",()=>{p(),o.createTab("brave://newtab","New Tab",l)}),(f=u.querySelector("#grpToggleCollapseBtn"))==null||f.addEventListener("click",()=>{p(),o.toggleGroupCollapse(l)}),(k=u.querySelector("#grpUngroupBtn"))==null||k.addEventListener("click",()=>{p(),o.deleteTabGroup(l,!1)}),(w=u.querySelector("#grpCloseTabsBtn"))==null||w.addEventListener("click",()=>{p(),o.deleteTabGroup(l,!0)})}function p(){e&&(e.style.display="none",e=null)}document.addEventListener("click",l=>{!l.target.closest(".tab-context-menu")&&!l.target.closest(".group-menu-popover")&&!l.target.closest(".group-menu-trigger-btn")&&p()}),o.subscribe((l,h)=>{["TAB_CREATED","TAB_SWITCHED","TAB_CLOSED","TAB_PINNED","BROWSER_MODE_CHANGED","TAB_GROUPS_UPDATED","NAVIGATION_COMPLETE","SESSION_NUKED"].includes(h)&&t()}),t()}function F(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function z(i){return i?i.replace(/"/g,"&quot;"):""}function pe(i){function e(){var y,f,k,w,x,m,E,T;const a=o.getState(),n=o.getActiveTab(),p=n.type==="ntp"?"":n.url,l=a.shields.shieldsEnabled,h=n.totalBlockedCount||0,c=o.getDefaultSearchEngine(),u=o.getBrowserMode(),b=u==="incognito",g=u==="super-pvt",v=g?`Search anonymously through ${((y=a.superPvt)==null?void 0:y.exitCountry)||"Onion Circuit"}...`:b?"Search privately in Incognito (zero traces saved)...":`Search with ${I(c.name)} or enter website address...`;i.innerHTML=`
      <div class="browser-navbar ${u!=="standard"?"navbar-"+u:""}">
        <div class="nav-buttons">
          <button class="nav-btn" id="notesSidebarToggleBtn" title="Toggle Notes Sidebar (Cmd+N)">
            ${d("file-text","",15)}
          </button>
          <button class="nav-btn" id="navBackBtn" title="Click to go back" ${n.historyIndex<=0?"disabled":""}>
            ${d("arrow-left","",16)}
          </button>
          <button class="nav-btn" id="navForwardBtn" title="Click to go forward" ${n.historyIndex>=n.history.length-1?"disabled":""}>
            ${d("arrow-right","",16)}
          </button>
          <button class="nav-btn" id="navReloadBtn" title="Reload this page">
            ${d("refresh",n.isLoading?"spin":"",15)}
          </button>
          <button class="nav-btn" id="navHomeBtn" title="Open home page">
            ${d("home","",15)}
          </button>
        </div>

        <!-- Mode Specific Visual Indicator -->
        ${b?`
          <div class="navbar-mode-pill incognito" title="Incognito Mode Active: Zero History & RAM Storage">
            ${d("mask","",14)}
            <span>Incognito</span>
          </div>
        `:""}

        ${g?`
          <button class="navbar-mode-pill super-pvt" id="circuitBadgeBtn" title="Tor Onion Circuit Active (${a.superPvt.exitCountry}) • Click to inspect relays">
            ${d("onion","",14)}
            <span>Tor: ${H(a.superPvt.exitCountry)}</span>
          </button>
        `:""}

        <div class="omnibox-wrapper">
          <div class="omnibox ${g?"omnibox-super-pvt":b?"omnibox-incognito":""}">
            <!-- WebBuddy Shields Ad & Tracker Blocker Badge -->
            <button class="shield-badge-btn ${l?"":"shields-down"}" id="shieldBadgeBtn" title="Ad & Tracker Blocker: ${l?"PROTECTED":"PAUSED"}">
              ${d("shield","",14)}
              <span>${l?`${h} Blocked`:"OFF"}</span>
            </button>

            <!-- Video Auto-PiP Overlay Button (Right near Ads Block) -->
            <button class="shield-badge-btn ${(f=a.media)!=null&&f.isPipActive?"":"shields-down"}" id="omniboxPipBtn" style="background:${(k=a.media)!=null&&k.isPipActive?"linear-gradient(135deg, #00F2FE 0%, #7F00FF 100%)":"#2C2F40"}; gap:4px;" title="Video Controls & Auto-PiP Overlay Feature">
              ${d("pip","",13)}
              <span>${(w=a.media)!=null&&w.isPipActive?"PiP Overlay ON":"Auto PiP"}</span>
            </button>

            <!-- Active Search Engine Indicator Badge -->
            <button class="shield-badge-btn" id="activeSearchEngineBadge" style="background:rgba(255,255,255,0.06); gap:5px; border-color:rgba(255,255,255,0.1);" title="Default Search Engine: ${I(c.name)} (Click to change)">
              ${d(c.icon||"search","",14)}
              <span style="color:var(--text-secondary); font-size:11px; font-weight:600;">${H(c.name)}</span>
            </button>

            <!-- URL / Search Input -->
            <input 
              type="text" 
              class="omnibox-input" 
              id="omniboxInput" 
              placeholder="${I(v)}" 
              value="${I(p)}"
              autocomplete="off"
              spellcheck="false"
            />

            <div class="omnibox-actions">
              <button class="omnibox-action-btn" id="bookmarkBtn" title="Bookmark this tab">
                ${d("star","",14)}
              </button>
            </div>
          </div>

          <!-- Autocomplete Dropdown -->
          <div class="omnibox-dropdown" id="omniboxDropdown" style="display: none;"></div>
        </div>

        <!-- Action Buttons: Ad Blocker + Video PiP Overlay + Panic Button -->
        <div class="browser-actions">
          ${b||g?`
            <button class="action-pill-btn panic-btn" id="panicNukeBtn" title="🚨 EMERGENCY PANIC: Destroy all private tabs & wipe volatile RAM instantly">
              ${d("nuke","",14)}
              <span>Nuke Session</span>
            </button>
          `:""}

          <button class="action-pill-btn" id="adblockControlBtn" style="border-color:rgba(0,242,254,0.3); color:#00F2FE;" title="Adblocker & Filter Lists">
            ${d("shield-check","",14)}
            <span>Ad Blocker ON</span>
          </button>

          <button class="action-pill-btn" id="videoControlBtn" style="border-color:${(x=a.media)!=null&&x.isPipActive?"#00F2FE":"rgba(127,0,255,0.4)"}; color:${(m=a.media)!=null&&m.isPipActive?"#00F2FE":"#A78BFA"};" title="Control Video, Auto-PiP & Overlay">
            ${d((E=a.media)!=null&&E.isPlaying?"play":"pip","",14)}
            <span>${(T=a.media)!=null&&T.isPipActive?"PiP Active":"Auto PiP Overlay"}</span>
          </button>

          <button class="action-icon-btn" id="settingsMenuBtn" title="Settings & Search Engines">
            ${d("settings","",16)}
          </button>
        </div>
      </div>
    `,t()}function t(){var r,p,l,h,c,u,b,g,v,y,f,k,w,x;const a=i.querySelector("#omniboxInput"),n=i.querySelector("#omniboxDropdown");(r=i.querySelector("#notesSidebarToggleBtn"))==null||r.addEventListener("click",()=>{o.toggleNotesSidebar()}),(p=i.querySelector("#navBackBtn"))==null||p.addEventListener("click",()=>o.goBack()),(l=i.querySelector("#navForwardBtn"))==null||l.addEventListener("click",()=>o.goForward()),(h=i.querySelector("#navReloadBtn"))==null||h.addEventListener("click",()=>o.reloadCurrentTab()),(c=i.querySelector("#navHomeBtn"))==null||c.addEventListener("click",()=>o.navigateToUrl("brave://newtab")),(u=i.querySelector("#omniboxPipBtn"))==null||u.addEventListener("click",m=>{m.stopPropagation(),o.openModal("videoControls")}),(b=i.querySelector("#videoControlBtn"))==null||b.addEventListener("click",m=>{m.stopPropagation(),o.openModal("videoControls")}),(g=i.querySelector("#shieldBadgeBtn"))==null||g.addEventListener("click",m=>{m.stopPropagation(),o.openModal("shields")}),(v=i.querySelector("#adblockControlBtn"))==null||v.addEventListener("click",m=>{m.stopPropagation(),o.openModal("shields")}),(y=i.querySelector("#activeSearchEngineBadge"))==null||y.addEventListener("click",m=>{m.stopPropagation(),o.openModal("settings")}),(f=i.querySelector("#settingsMenuBtn"))==null||f.addEventListener("click",m=>{m.stopPropagation(),o.openModal("settings")}),(k=i.querySelector("#bookmarkBtn"))==null||k.addEventListener("click",()=>{const m=o.getActiveTab();m&&m.type!=="ntp"&&(o.addBookmark(m.title,m.url),V("⭐ Bookmark saved!"))}),(w=i.querySelector("#circuitBadgeBtn"))==null||w.addEventListener("click",m=>{m.stopPropagation(),o.openModal("circuit")}),(x=i.querySelector("#panicNukeBtn"))==null||x.addEventListener("click",m=>{m.stopPropagation(),o.panicNukeSession(),V("🚨 Emergency Panic: Private RAM purged and tabs destroyed!")}),a.addEventListener("focus",()=>{a.select(),s(a.value)}),a.addEventListener("input",()=>{s(a.value)}),a.addEventListener("keydown",m=>{if(m.key==="Enter"){const E=a.value.trim();E&&(n.style.display="none",o.navigateToUrl(E),a.blur())}else m.key==="Escape"&&(n.style.display="none")}),document.addEventListener("click",m=>{m.target.closest(".omnibox-wrapper")||(n.style.display="none")})}function s(a){var g;const n=i.querySelector("#omniboxDropdown"),r=a.trim();if(!r){n.style.display="none";return}const p=o.getDefaultSearchEngine(),l=o.getSearchEngines();let h=p,c=r;const u=r.split(/\s+/);if(u.length>0){const v=u[0].toLowerCase(),y=l.find(f=>f.shortcut&&(f.shortcut.toLowerCase()===v||f.shortcut.toLowerCase()===":"+v||f.shortcut.toLowerCase()==="!"+v));y&&(h=y,c=u.slice(1).join(" ")||r)}const b=[{text:r,desc:`Search with ${h.name} (Adblock Protected)`,type:"search",icon:h.icon||"search",action:r},{text:`https://${r}.com`,desc:"Open Website (Tracker Filtering Active)",type:"web",icon:"globe",action:`https://${r}.com`},{text:"Wikipedia: "+(c||r),desc:"Encyclopedia Reference",type:"web",icon:"book-open",action:":w "+(c||r)},{text:"GitHub: "+(c||r),desc:"Source Code & Repositories",type:"web",icon:"github",action:"https://github.com/search?q="+encodeURIComponent(c||r)}];n.innerHTML=`
      <div class="omnibox-suggestions-list">
        ${b.map(v=>`
          <div class="dropdown-item" data-action="${I(v.action)}">
            ${d(v.icon,"",14)}
            <span>${H(v.text)}</span>
            <span class="item-type">${v.desc}</span>
          </div>
        `).join("")}
      </div>

      <!-- Quick Search Engine Switcher Footer -->
      <div style="padding:8px 12px; background:rgba(0,0,0,0.3); border-top:1px solid var(--glass-border); display:flex; align-items:center; justify-content:space-between; font-size:11px;">
        <div style="display:flex; align-items:center; gap:6px; color:var(--text-secondary);">
          <span>Search with:</span>
          ${l.slice(0,4).map(v=>`
            <button class="quick-engine-chip ${v.id===p.id?"active":""}" data-switch-engine="${I(v.id)}" style="background:${v.id===p.id?"rgba(0,242,254,0.15)":"rgba(255,255,255,0.06)"}; border:1px solid ${v.id===p.id?"#00F2FE":"transparent"}; border-radius:4px; padding:2px 7px; color:${v.id===p.id?"#00F2FE":"#fff"}; cursor:pointer; font-size:11px; display:inline-flex; align-items:center; gap:4px;">
              ${d(v.icon||"search","",11)}
              <span>${H(v.name)}</span>
            </button>
          `).join("")}
        </div>
        <button id="manageEnginesDropdownBtn" style="color:#00F2FE; background:transparent; border:none; cursor:pointer; font-size:11px; font-weight:600;">
          ⚙️ Manage Engines
        </button>
      </div>
    `,n.style.display="block",n.querySelectorAll(".dropdown-item").forEach(v=>{v.addEventListener("click",()=>{const y=v.dataset.action;o.navigateToUrl(y),n.style.display="none"})}),n.querySelectorAll("[data-switch-engine]").forEach(v=>{v.addEventListener("click",y=>{y.stopPropagation();const f=v.dataset.switchEngine;o.setDefaultSearchEngine(f);const k=o.getSearchEngineById(f);V(`🔍 Search engine changed to ${k?k.name:"Google"}`),s(input.value)})}),(g=n.querySelector("#manageEnginesDropdownBtn"))==null||g.addEventListener("click",v=>{v.stopPropagation(),n.style.display="none",o.openModal("settings")})}o.subscribe((a,n)=>{["TAB_SWITCHED","NAVIGATION_COMPLETE","SHIELDS_TOGGLED","SHIELDS_STATS_UPDATED","SEARCH_ENGINE_CHANGED","SEARCH_ENGINES_UPDATED","BROWSER_MODE_CHANGED","SUPER_PVT_UPDATED","SESSION_NUKED"].includes(n)&&e()}),e()}function H(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function I(i){return i?i.replace(/"/g,"&quot;"):""}function V(i){const e=document.createElement("div");e.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",e.innerText=i,document.body.appendChild(e),setTimeout(()=>e.remove(),2200)}function ue(i){function e(){const t=o.getState();if(!t.settings.bookmarksBarVisible){i.style.display="none";return}i.style.display="flex",i.innerHTML=`
      <div class="bookmarks-bar">
        ${t.bookmarks.map(s=>`
          <button class="bookmark-item" data-url="${K(s.url)}" title="${K(s.title)} (${K(s.url)})">
            ${d(s.icon||"globe","",12)}
            <span>${ge(s.title)}</span>
          </button>
        `).join("")}
      </div>
    `,i.querySelectorAll(".bookmark-item").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.url;o.navigateToUrl(a)})})}o.subscribe((t,s)=>{["BOOKMARKS_UPDATED","SETTINGS_UPDATED"].includes(s)&&e()}),e()}function ge(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function K(i){return i?i.replace(/"/g,"&quot;"):""}function he(i){let e=null,t=!1;function s(){const u=o.getState();if(o.getActiveTab().type!=="ntp"){i.style.display="none";return}i.style.display="flex";const g=o.getBrowserMode();g==="incognito"?n():g==="super-pvt"?r(u):a(u)}function a(u,b){var w;const g=o.getActiveWallpaper(),v=u.settings.blurWallpaper,y=o.getTotalFilterRulesCount(),f=o.getDefaultSearchEngine(),k=o.getSearchEngines();i.style.backgroundImage=`url("${g.url}")`,i.className="ntp-container standard-ntp",i.innerHTML=`
      <div class="ntp-overlay ${v?"blurred":""}"></div>
      
      <div class="ntp-content" style="justify-content:center; gap:36px;">
        <!-- Center Section: Clock, Search, Adblock Stats, Top Sites -->
        <div class="ntp-center-section">
          <!-- Digital Clock & Greeting -->
          ${u.settings.showClock?`
            <div class="clock-container">
              <div class="digital-time" id="ntpClock">
                ${h(u.settings.clockFormat)}
              </div>
              <div class="greeting-text" id="ntpGreeting">
                ${c()}
              </div>
            </div>
          `:""}

          <!-- Center Private Search Bar with Search Engine Selector -->
          <div class="ntp-search-box" style="position:relative;">
            <form class="ntp-search-form" id="ntpSearchForm">
              <!-- Quick Search Engine Switcher Button -->
              <button type="button" class="ntp-engine-select-btn" id="ntpEngineSelectBtn" title="Default Engine: ${D(f.name)} (Click to switch or manage)">
                <span class="ntp-engine-icon">${d(f.icon||"search","",18)}</span>
                <span class="ntp-engine-label">${P(f.name)}</span>
                <span style="opacity:0.6; display:flex;">${d("chevron-down","",12)}</span>
              </button>

              <input 
                type="text" 
                class="ntp-search-input" 
                id="ntpSearchInput" 
                placeholder="Search with ${D(f.name)} privately or enter URL..."
                autocomplete="off"
              />
              <button type="submit" class="ntp-search-submit-btn" title="Search">
                ${d("search","",16)}
              </button>
            </form>

            <!-- Quick Engine Dropdown Menu -->
            <div class="ntp-engine-menu" id="ntpEngineMenu" style="display:${t?"block":"none"};">
              <div class="ntp-engine-menu-header">
                <span>Select Search Engine</span>
                <span style="font-size:10px; color:var(--text-muted);">Default: ${P(f.name)}</span>
              </div>
              <div class="ntp-engine-list">
                ${k.map(x=>`
                  <div class="ntp-engine-item ${x.id===f.id?"active":""}" data-ntp-engine="${D(x.id)}">
                    <span class="ntp-item-icon">${d(x.icon||"search","",16)}</span>
                    <span class="ntp-item-name">${P(x.name)}</span>
                    ${x.shortcut?`<span class="ntp-item-shortcut">${P(x.shortcut)}</span>`:""}
                    ${x.id===f.id?`<span class="ntp-item-check">${d("check","",14)}</span>`:""}
                  </div>
                `).join("")}
              </div>
              <div class="ntp-engine-menu-footer" id="ntpManageEnginesBtn">
                ${d("settings","",13)}
                <span>Manage Search Engines & Shortcuts...</span>
              </div>
            </div>
          </div>

          <!-- WebBuddy Ad & Tracker Blocker Privacy Metrics Card -->
          ${u.settings.showShieldsStats?`
            <div class="shields-stats-card" style="max-width:880px;">
              <div class="shield-stat-item">
                <div class="shield-stat-icon" style="background:rgba(255,88,88,0.15); border-color:rgba(255,88,88,0.3); color:#FF5858;">
                  ${d("x","",20)}
                </div>
                <div class="shield-stat-info">
                  <span class="stat-value" id="adsCount">${u.shields.adsBlockedTotal.toLocaleString()}</span>
                  <span class="stat-label">Ads Blocked</span>
                </div>
              </div>

              <div class="stat-divider"></div>

              <div class="shield-stat-item">
                <div class="shield-stat-icon" style="background:rgba(0,242,254,0.15); border-color:rgba(0,242,254,0.3); color:#00F2FE;">
                  ${d("shield","",20)}
                </div>
                <div class="shield-stat-info">
                  <span class="stat-value" id="trackersCount">${u.shields.trackersBlockedTotal.toLocaleString()}</span>
                  <span class="stat-label">Trackers Blocked</span>
                </div>
              </div>

              <div class="stat-divider"></div>

              <div class="shield-stat-item">
                <div class="shield-stat-icon" style="background:rgba(16,185,129,0.15); border-color:rgba(16,185,129,0.3); color:#10B981;">
                  ${d("zap","",20)}
                </div>
                <div class="shield-stat-info">
                  <span class="stat-value" id="bandwidthSaved">${u.shields.bandwidthSavedMB} MB</span>
                  <span class="stat-label">Bandwidth Saved</span>
                </div>
              </div>

              <div class="stat-divider"></div>

              <div class="shield-stat-item">
                <div class="shield-stat-icon" style="background:rgba(127,0,255,0.15); border-color:rgba(127,0,255,0.3); color:#A78BFA;">
                  ${d("clock","",20)}
                </div>
                <div class="shield-stat-info">
                  <span class="stat-value" id="timeSaved">${u.shields.timeSavedMin} min</span>
                  <span class="stat-label">Time Saved</span>
                </div>
              </div>
            </div>

            <!-- Active Adblock Engine Status Banner & Video PiP Overlay Quick Button -->
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; justify-content:center;">
              <div style="display:flex; align-items:center; gap:8px; background:rgba(20,22,33,0.75); backdrop-filter:blur(16px); border:1px solid var(--glass-border); padding:8px 18px; border-radius:var(--radius-full); font-size:12px; color:var(--text-secondary); cursor:pointer;" id="openFilterListsBtn" title="Click to view and configure Filter Lists">
                <span style="width:7px; height:7px; background:#10B981; border-radius:50%; box-shadow:0 0 8px #10B981;"></span>
                <span><strong>${y.toLocaleString()}</strong> Active Filter Rules (EasyList, EasyPrivacy, uBlock)</span>
                <span style="color:#00F2FE; font-weight:600; margin-left:4px;">Configure →</span>
              </div>

              <div style="display:flex; align-items:center; gap:6px; background:linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(127, 0, 255, 0.15) 100%); backdrop-filter:blur(16px); border:1px solid rgba(0, 242, 254, 0.3); padding:8px 16px; border-radius:var(--radius-full); font-size:12px; color:#fff; cursor:pointer;" id="dashboardPipControlBtn" title="Open Video Controls & Auto-PiP Overlay">
                ${d("pip","",14)}
                <span style="font-weight:700;">Auto PiP Overlay: <span style="color:#00F2FE;">${(w=u.media)!=null&&w.isPipActive?"ACTIVE":"READY"}</span></span>
              </div>
            </div>
          `:""}

          <!-- Top Sites / Shortcuts Grid -->
          ${u.settings.showTopSites?`
            <div class="top-sites-grid">
              ${u.topSites.map(x=>`
                <div class="top-site-tile" data-site-url="${D(x.url)}" title="${D(x.title)}">
                  <button class="delete-site-btn" data-delete-site="${x.id}" title="Remove Shortcut">
                    ${d("x","",10)}
                  </button>
                  <div class="site-icon-box" style="background:${x.color||"#232636"}">
                    ${d(x.icon||"globe","",20)}
                  </div>
                  <span class="site-title">${P(x.title)}</span>
                </div>
              `).join("")}

              <!-- Add Shortcut Tile -->
              <div class="top-site-tile add-site-tile" id="addShortcutBtn" title="Add Shortcut">
                <div class="site-icon-box" style="background:transparent; border:1px dashed rgba(255,255,255,0.2);">
                  ${d("plus","",20)}
                </div>
                <span class="site-title">Add Site</span>
              </div>
            </div>
          `:""}
        </div>

        <!-- NTP Bottom Bar -->
        <div class="ntp-bottom-bar">
          <div class="photo-credit">
            <span>📷 Photo by <strong>${P(g.author)}</strong> • ${P(g.location)}</span>
            <button class="change-wallpaper-btn" id="nextWallpaperBtn" title="Change Background Wallpaper">
              ${d("refresh","",13)}
            </button>
          </div>

          <button class="customize-btn" id="customizeDashboardBtn">
            ${d("sliders","",14)}
            <span>Dashboard Settings</span>
          </button>
        </div>
      </div>
    `,p()}function n(u,b){var v,y;const g=o.getDefaultSearchEngine();i.style.backgroundImage="none",i.className="ntp-container incognito-ntp",i.innerHTML=`
      <div class="incognito-dashboard-content">
        <!-- Incognito Header Visor -->
        <div class="incognito-header-badge">
          <div class="incognito-visor-icon">
            ${d("mask","",48)}
          </div>
          <h1 class="incognito-title">Incognito Browsing Session Active</h1>
          <p class="incognito-subtitle">
            WebBuddy isolates your browsing session exclusively in volatile memory (RAM).
            Your browsing history, cookies, search queries, and cache are destroyed automatically upon close.
          </p>
        </div>

        <!-- Incognito Search Box -->
        <div class="ntp-search-box incognito-search-box" style="max-width:680px; width:100%; margin:0 auto 28px;">
          <form class="ntp-search-form" id="ntpSearchForm">
            <span class="incognito-search-icon" style="padding-left:16px; color:#A78BFA; display:flex; align-items:center;">
              ${d("mask","",18)}
            </span>
            <input 
              type="text" 
              class="ntp-search-input" 
              id="ntpSearchInput" 
              placeholder="Search in Incognito Mode with ${D(g.name)} or enter URL..."
              autocomplete="off"
              autofocus
            />
            <button type="submit" class="ntp-search-submit-btn" title="Search privately" style="background:#7F00FF; color:#fff;">
              ${d("search","",16)}
            </button>
          </form>
        </div>

        <!-- 4 Security Guarantees Cards -->
        <div class="incognito-guarantees-grid">
          <div class="guarantee-card">
            <div class="guarantee-icon" style="background:rgba(127,0,255,0.18); color:#A78BFA; border-color:rgba(127,0,255,0.35);">
              ${d("eye-off","",22)}
            </div>
            <div class="guarantee-info">
              <h3>Zero History Logged</h3>
              <p>Pages you visit, search terms, and download logs are never stored to disk.</p>
            </div>
          </div>

          <div class="guarantee-card">
            <div class="guarantee-icon" style="background:rgba(0,242,254,0.18); color:#00F2FE; border-color:rgba(0,242,254,0.35);">
              ${d("shield-check","",22)}
            </div>
            <div class="guarantee-info">
              <h3>Shields Adblock Max</h3>
              <p>Ad networks, telemetry beacons, and fingerprint scripts are rejected before socket load.</p>
            </div>
          </div>

          <div class="guarantee-card">
            <div class="guarantee-icon" style="background:rgba(16,185,129,0.18); color:#10B981; border-color:rgba(16,185,129,0.35);">
              ${d("lock","",22)}
            </div>
            <div class="guarantee-info">
              <h3>Isolated Cookie Jar</h3>
              <p>Third-party cookies and local storage tokens are sandboxed and wiped instantly.</p>
            </div>
          </div>

          <div class="guarantee-card">
            <div class="guarantee-icon" style="background:rgba(245,158,11,0.18); color:#F59E0B; border-color:rgba(245,158,11,0.35);">
              ${d("hard-drive","",22)}
            </div>
            <div class="guarantee-info">
              <h3>Ephemeral RAM Storage</h3>
              <p>Session keys reside only in active RAM. Zero residue persists across system restarts.</p>
            </div>
          </div>
        </div>

        <!-- Action Bar: Switch to Tor Super Pvt or Panic Nuke -->
        <div class="incognito-actions-bar">
          <button class="incognito-action-btn tor-bridge-btn" id="switchToTorBtn" title="Switch to Super Private Tor Mode">
            ${d("onion","",16)}
            <span>Upgrade to Super Private (Tor Onion Circuit) →</span>
          </button>

          <button class="incognito-action-btn panic-nuke-action-btn" id="incognitoPanicBtn" title="Close all private tabs immediately">
            ${d("nuke","",15)}
            <span>🚨 Close Incognito Session</span>
          </button>
        </div>
      </div>
    `,p(),(v=i.querySelector("#switchToTorBtn"))==null||v.addEventListener("click",()=>{o.setBrowserMode("super-pvt")}),(y=i.querySelector("#incognitoPanicBtn"))==null||y.addEventListener("click",()=>{o.panicNukeSession()})}function r(u,b){var y,f,k,w,x,m,E,T,M,O;o.getDefaultSearchEngine();const g=u.superPvt||{},v=g.circuit||[];i.style.backgroundImage="none",i.className="ntp-container super-pvt-ntp",i.innerHTML=`
      <div class="super-pvt-dashboard-content">
        <!-- Super Private Cyber Header -->
        <div class="super-pvt-header-badge">
          <div class="super-pvt-onion-hologram">
            ${d("onion","",54)}
          </div>
          <div class="onion-mode-pill-glow">TOR ONION ROUTING ACTIVE</div>
          <h1 class="super-pvt-title">Super Private Browsing Window</h1>
          <p class="super-pvt-subtitle">
            Your network traffic is encapsulated in 3-layer AES-256 onion encryption and routed through randomized global relays.
            Your real IP address and device fingerprint are completely masked.
          </p>
        </div>

        <!-- Super Private Search Form -->
        <div class="ntp-search-box super-pvt-search-box" style="max-width:720px; width:100%; margin:0 auto 28px;">
          <form class="ntp-search-form" id="ntpSearchForm">
            <span class="super-pvt-search-icon" style="padding-left:16px; color:#C084FC; display:flex; align-items:center;">
              ${d("onion","",18)}
            </span>
            <input 
              type="text" 
              class="ntp-search-input" 
              id="ntpSearchInput" 
              placeholder="Search onion & web anonymously (routed via ${D(g.exitCountry||"Tor")})..."
              autocomplete="off"
              autofocus
            />
            <button type="submit" class="ntp-search-submit-btn" title="Search via Tor" style="background:linear-gradient(135deg, #7F00FF 0%, #00F2FE 100%); color:#fff;">
              ${d("search","",16)}
            </button>
          </form>
        </div>

        <!-- Live Onion Multi-Hop Circuit Visualizer Strip -->
        <div class="circuit-route-card" id="circuitRouteCard" title="Click to open Circuit Relays Inspector">
          <div class="circuit-route-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="circuit-pulse-beacon"></span>
              <span class="circuit-title">Live 3-Hop Encrypted Onion Circuit</span>
            </div>
            <div style="display:flex; align-items:center; gap:12px; font-size:12px;">
              <span style="color:#10B981; font-weight:700;">● ${g.anonymityScore||"100% Ultra Stealth"}</span>
              <span style="color:var(--text-muted);">Ping: ${g.circuitPing||"28ms"}</span>
              <button class="reroute-circuit-mini-btn" id="rerouteCircuitBtn" title="Rotate Tor Identity (Get new Relay Circuit & IP)">
                ${d("refresh","",12)}
                <span>New Identity</span>
              </button>
            </div>
          </div>

          <div class="circuit-hops-row">
            <!-- Client Hop -->
            <div class="circuit-hop-node client-node">
              <div class="hop-icon-box">${d("home","",16)}</div>
              <div class="hop-node-meta">
                <span class="hop-role">This Computer</span>
                <span class="hop-location">Origin Sandbox</span>
              </div>
            </div>

            <div class="circuit-hop-connector">
              <span class="connector-line"></span>
              <span class="connector-badge">AES-256</span>
            </div>

            <!-- Guard Node -->
            <div class="circuit-hop-node">
              <div class="hop-icon-box guard">${d("shield","",16)}</div>
              <div class="hop-node-meta">
                <span class="hop-role">${((y=v[0])==null?void 0:y.role)||"Guard Node"}</span>
                <span class="hop-location">${((f=v[0])==null?void 0:f.location)||"Frankfurt, Germany 🇩🇪"}</span>
              </div>
            </div>

            <div class="circuit-hop-connector">
              <span class="connector-line"></span>
              <span class="connector-badge">Hop 2</span>
            </div>

            <!-- Middle Relay -->
            <div class="circuit-hop-node">
              <div class="hop-icon-box relay">${d("circuit","",16)}</div>
              <div class="hop-node-meta">
                <span class="hop-role">${((k=v[1])==null?void 0:k.role)||"Middle Relay"}</span>
                <span class="hop-location">${((w=v[1])==null?void 0:w.location)||"Amsterdam, Netherlands 🇳🇱"}</span>
              </div>
            </div>

            <div class="circuit-hop-connector">
              <span class="connector-line"></span>
              <span class="connector-badge">Exit Hop</span>
            </div>

            <!-- Exit Node -->
            <div class="circuit-hop-node exit-node">
              <div class="hop-icon-box exit">${d("globe","",16)}</div>
              <div class="hop-node-meta">
                <span class="hop-role">${((x=v[2])==null?void 0:x.role)||"Exit Relay"}</span>
                <span class="hop-location" style="color:#00F2FE; font-weight:700;">${((m=v[2])==null?void 0:m.location)||"Zurich, Switzerland 🇨🇭"}</span>
                <span class="hop-ip">IP: ${g.exitIp||"185.220.101.42"}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Super Private Shield Controls -->
        <div class="super-pvt-features-row">
          <div class="pvt-feature-pill">
            <span class="feature-dot green"></span>
            <span>FARBLE 2.0 Max Anti-Fingerprint (Canvas/WebGL/Audio Noise)</span>
          </div>
          <div class="pvt-feature-pill">
            <span class="feature-dot cyan"></span>
            <span>Zero WebRTC & DNS Packet Leaks Sandbox</span>
          </div>
          <div class="pvt-feature-pill">
            <span class="feature-dot purple"></span>
            <span>TLS 1.3 Key Encapsulation</span>
          </div>
        </div>

        <!-- Action Bar: Inspect Circuit + Panic Nuke -->
        <div class="super-pvt-actions-bar">
          <button class="super-pvt-action-btn inspect-circuit-btn" id="openCircuitModalBtn">
            ${d("circuit","",16)}
            <span>Inspect Full Onion Relays & Encryption Handshake →</span>
          </button>

          <button class="super-pvt-action-btn panic-nuke-btn-lg" id="superPvtPanicBtn" title="🚨 Panic Button: Instantly purge all private tabs and RAM">
            ${d("nuke","",16)}
            <span>🚨 Emergency Panic: Nuke RAM & Tabs</span>
          </button>
        </div>
      </div>
    `,p(),(E=i.querySelector("#rerouteCircuitBtn"))==null||E.addEventListener("click",R=>{R.stopPropagation(),o.refreshOnionIdentity(),Z("🧅 Tor Identity Rotated: New relay circuit & exit IP established!"),s()}),(T=i.querySelector("#openCircuitModalBtn"))==null||T.addEventListener("click",()=>{o.openModal("circuit")}),(M=i.querySelector("#circuitRouteCard"))==null||M.addEventListener("click",()=>{o.openModal("circuit")}),(O=i.querySelector("#superPvtPanicBtn"))==null||O.addEventListener("click",()=>{o.panicNukeSession()})}function p(){var v,y,f,k,w,x;const u=i.querySelector("#ntpSearchForm"),b=i.querySelector("#ntpSearchInput");u==null||u.addEventListener("submit",m=>{m.preventDefault();const E=b.value.trim();E&&o.navigateToUrl(E)});const g=i.querySelector("#ntpEngineSelectBtn");g==null||g.addEventListener("click",m=>{m.stopPropagation(),t=!t,s()}),i.querySelectorAll("[data-ntp-engine]").forEach(m=>{m.addEventListener("click",E=>{E.stopPropagation();const T=m.dataset.ntpEngine;o.setDefaultSearchEngine(T);const M=o.getSearchEngineById(T);Z(`🔍 Default search engine set to ${M?M.name:"Google"}`),t=!1,s()})}),(v=i.querySelector("#ntpManageEnginesBtn"))==null||v.addEventListener("click",m=>{m.stopPropagation(),t=!1,o.openModal("settings")}),(y=i.querySelector("#openFilterListsBtn"))==null||y.addEventListener("click",()=>{o.openModal("shields")}),(f=i.querySelector("#dashboardPipControlBtn"))==null||f.addEventListener("click",()=>{o.openModal("videoControls")}),i.querySelectorAll("[data-site-url]").forEach(m=>{m.addEventListener("click",E=>{if(E.target.closest("[data-delete-site]"))return;const T=m.dataset.siteUrl;o.navigateToUrl(T)})}),i.querySelectorAll("[data-delete-site]").forEach(m=>{m.addEventListener("click",E=>{E.stopPropagation();const T=m.dataset.deleteSite;o.removeTopSite(T)})}),(k=i.querySelector("#addShortcutBtn"))==null||k.addEventListener("click",()=>{o.openModal("addShortcut")}),(w=i.querySelector("#nextWallpaperBtn"))==null||w.addEventListener("click",()=>{o.nextWallpaper()}),(x=i.querySelector("#customizeDashboardBtn"))==null||x.addEventListener("click",()=>{o.openModal("settings")})}function l(){e&&clearInterval(e),e=setInterval(()=>{const u=i.querySelector("#ntpClock"),b=i.querySelector("#ntpGreeting"),g=o.getState();u&&g.settings.showClock&&(u.textContent=h(g.settings.clockFormat)),b&&g.settings.showClock&&(b.textContent=c())},1e3)}function h(u="12h"){const b=new Date;let g=b.getHours();const v=String(b.getMinutes()).padStart(2,"0"),y=String(b.getSeconds()).padStart(2,"0");if(u==="12h"){const f=g>=12?"PM":"AM";return g=g%12,g=g||12,`${g}:${v} ${f}`}return`${String(g).padStart(2,"0")}:${v}:${y}`}function c(){const u=new Date().getHours(),b=o.getBrowserMode();return b==="super-pvt"?"Super Private Onion Terminal • 100% Encrypted":b==="incognito"?"Incognito Private Space • No History Saved":u<12?"Good Morning, WebBuddy Explorer":u<18?"Good Afternoon, WebBuddy Explorer":"Good Evening, WebBuddy Explorer"}o.subscribe((u,b)=>{["TAB_SWITCHED","WALLPAPER_CHANGED","SETTINGS_UPDATED","TOP_SITES_UPDATED","SHIELDS_STATS_UPDATED","SEARCH_ENGINE_CHANGED","SEARCH_ENGINES_UPDATED","BROWSER_MODE_CHANGED","SUPER_PVT_UPDATED","SESSION_NUKED","MEDIA_PIP_TOGGLED"].includes(b)&&s()}),s(),l()}function P(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function D(i){return i?i.replace(/"/g,"&quot;"):""}function Z(i){const e=document.createElement("div");e.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",e.innerText=i,document.body.appendChild(e),setTimeout(()=>e.remove(),2200)}function te(i,e="google"){const t=(i||"web browsing").trim(),s=t.toLowerCase();let a="general";s.includes("js")||s.includes("javascript")||s.includes("python")||s.includes("code")||s.includes("react")||s.includes("flutter")||s.includes("rust")||s.includes("api")||s.includes("css")||s.includes("html")||s.includes("git")||s.includes("npm")?a="programming":s.includes("ai")||s.includes("gpt")||s.includes("intelligence")||s.includes("gemini")||s.includes("claude")||s.includes("model")||s.includes("neural")?a="ai":s.includes("apple")||s.includes("google")||s.includes("microsoft")||s.includes("amazon")||s.includes("meta")||s.includes("nvidia")||s.includes("tesla")?a="tech-company":s.includes("privacy")||s.includes("tor")||s.includes("vpn")||s.includes("adblock")||s.includes("security")||s.includes("encryption")||s.includes("shields")?a="privacy":s.includes("btc")||s.includes("crypto")||s.includes("bitcoin")||s.includes("ethereum")||s.includes("wallet")||s.includes("blockchain")||s.includes("solana")?a="crypto":s.includes("news")||s.includes("today")||s.includes("weather")||s.includes("election")||s.includes("market")?a="news":(s.includes("movie")||s.includes("song")||s.includes("music")||s.includes("video")||s.includes("game")||s.includes("steam"))&&(a="media");const n=t.split(" ").map(g=>g.charAt(0).toUpperCase()+g.slice(1)).join(" "),r=ve(t,n,a),p=be(t,n),l=ye(t,n),h=fe(t),c=me(t,n),u=(Math.floor(Math.random()*4500)+1200)*1e6,b=(Math.random()*.25+.18).toFixed(2);return{query:t,engineId:e,totalResults:u.toLocaleString(),searchTime:b,knowledgePanel:r,peopleAlsoAsk:p,organicResults:l,relatedSearches:h,mediaPreviews:c}}function ve(i,e,t){switch(t){case"programming":return{title:e,subtitle:"Programming Technology & Development Framework",description:`${e} is a high-performance software technology and ecosystem widely adopted for modern application engineering, cloud infrastructure, and developer toolchains worldwide.`,facts:[{label:"Initial Release",value:"1995 • Active LTS 2026"},{label:"Type System",value:"Dynamic & Static Typing options"},{label:"License",value:"Open Source (MIT / Apache 2.0)"},{label:"Official Hub",value:`https://github.com/topics/${encodeURIComponent(i.toLowerCase())}`}],badge:"Technology Standard"};case"ai":return{title:e,subtitle:"Artificial Intelligence & Neural Computing Architecture",description:`${e} encompasses state-of-the-art transformer models, machine intelligence, multimodal reasoning, and automated cognitive workflows transforming modern digital technology.`,facts:[{label:"Domain",value:"Generative AI & Deep Learning"},{label:"Architecture",value:"Mixture of Experts (MoE) & Attention Transformers"},{label:"Applications",value:"Autonomous Coding, Vision, Real-time Reasoning"},{label:"Safety Rating",value:"High Alignment & Sandboxed"}],badge:"AI Intelligence Hub"};case"tech-company":return{title:e,subtitle:"Global Technology Enterprise & Ecosystem",description:`${e} is one of the world's leading technology powerhouses, specializing in high-performance hardware, operating systems, cloud networks, and developer platforms.`,facts:[{label:"Industry",value:"Consumer Electronics & Cloud Services"},{label:"Global Rank",value:"Top Global Market Capitalization"},{label:"Products",value:"Operating Systems, Hardware, AI Services"},{label:"Customer Base",value:"2+ Billion Active Users"}],badge:"Enterprise Leader"};case"privacy":return{title:e,subtitle:"Digital Privacy, Cryptography & Network Defense",description:`${e} provides cryptographic packet filtering, multi-hop onion routing, and anti-surveillance mechanisms to safeguard personal digital identity across the global web.`,facts:[{label:"Core Mechanism",value:"Sub-millisecond Packet Filtering & TLS 1.3"},{label:"Data Retention",value:"Zero Logging • Ephemeral RAM only"},{label:"Tracker Defense",value:"100% Third-Party Script Neutralization"},{label:"Standard",value:"EasyList, EasyPrivacy, FARBLE 2.0"}],badge:"Privacy Shield"};case"crypto":return{title:e,subtitle:"Decentralized Blockchain Protocol & Digital Asset",description:`${e} is a decentralized cryptographic protocol built on distributed consensus, enabling peer-to-peer value transfer, smart contract execution, and censorship-resistant ledgers.`,facts:[{label:"Consensus",value:"Proof-of-Stake / Proof-of-Work"},{label:"Network Type",value:"Layer 1 Decentralized Ledger"},{label:"Block Time",value:"~400ms - 10s confirmation"},{label:"Ecosystem",value:"Web3, DeFi, Zero-Knowledge Proofs"}],badge:"Crypto Asset"};default:return{title:e,subtitle:"Verified Topic Overview & Reference",description:`Explore authoritative articles, technical benchmarks, encyclopedic summaries, and community discussions regarding ${e}.`,facts:[{label:"Primary Category",value:"Encyclopedia Reference"},{label:"Global Coverage",value:"Worldwide & Real-Time"},{label:"Source Verification",value:"Cross-Referenced via WebBuddy Shields"}],badge:"Knowledge Hub"}}}function be(i,e,t){return[{question:`What is ${e} and how does it work?`,answer:`${e} is a comprehensive solution engineered to deliver high performance, reliable standards, and streamlined workflows. It operates by breaking down complex interactions into modular, optimized stages with automated safeguards.`},{question:`What are the top benefits and key features of ${e}?`,answer:"The primary advantages include speed, privacy protection, cross-platform compatibility, active community support, and extensive documentation across official channels and open-source repositories."},{question:`How to get started with ${e} in 2026?`,answer:"You can begin by reviewing the official quickstart guides, installing the latest release packages, and exploring interactive code examples and tutorial sandboxes available on GitHub and documentation portals."},{question:`Is ${e} secure and privacy-friendly?`,answer:"Yes, modern implementations emphasize end-to-end encryption, strict sandboxing, zero-knowledge telemetry, and granular permission controls verified by independent security audits."}]}function ye(i,e,t){const s=encodeURIComponent(i.toLowerCase().replace(/\s+/g,"-"));return[{title:`${e} — Official Overview, Documentation & Latest Updates`,url:`https://www.${s}.org`,displayUrl:`https://www.${s}.org › overview`,domain:`${s}.org`,icon:"globe",snippet:`Explore official guides, feature roadmaps, developer documentation, release notes, and community announcements for ${e}. Get started with the latest tools and best practices.`,sitelinks:[{label:"Getting Started Guide",url:`https://www.${s}.org/docs/quickstart`},{label:"API Reference",url:`https://www.${s}.org/api`},{label:"Downloads & Releases",url:`https://www.${s}.org/downloads`},{label:"Community Forum",url:`https://www.${s}.org/community`}],date:"Updated today",badge:"Official Website"},{title:`${e} - Wikipedia, the free encyclopedia`,url:`https://en.wikipedia.org/wiki/${encodeURIComponent(e)}`,displayUrl:`https://en.wikipedia.org › wiki › ${encodeURIComponent(e)}`,domain:"wikipedia.org",icon:"book-open",snippet:`Comprehensive encyclopedia article detailing the history, technical architecture, timeline, governance, and global impact of ${e}. Includes peer-reviewed references and citations.`,sitelinks:[{label:"History & Background",url:`https://en.wikipedia.org/wiki/${encodeURIComponent(e)}#History`},{label:"Architecture & Specifications",url:`https://en.wikipedia.org/wiki/${encodeURIComponent(e)}#Design`},{label:"See Also & References",url:`https://en.wikipedia.org/wiki/${encodeURIComponent(e)}#References`}],date:"Aug 18, 2026",badge:"Encyclopedia"},{title:`GitHub - Trending Repositories and Open Source: ${e}`,url:`https://github.com/topics/${s}`,displayUrl:`https://github.com › topics › ${s}`,domain:"github.com",icon:"github",snippet:`Browse trending source code repositories, high-performance implementations, starter kits, and active contributor issues related to ${e}. Starred by over 45,000 developers.`,sitelinks:[{label:"Trending Repositories",url:`https://github.com/topics/${s}?o=desc&s=stars`},{label:"Developer SDKs",url:`https://github.com/topics/${s}-sdk`},{label:"Discussions",url:`https://github.com/topics/${s}/discussions`}],date:"★ 38.4k stars",badge:"Open Source"},{title:`Reddit Community Discussion: Everything you need to know about ${e}`,url:`https://www.reddit.com/r/${s}`,displayUrl:`https://reddit.com › r › ${s}`,domain:"reddit.com",icon:"message-square",snippet:`Join 280,000+ members discussing real-world benchmarks, troubleshooting tips, hidden gems, and honest user reviews about ${e}.`,sitelinks:[],date:"3 hours ago",badge:"Community"},{title:`Hacker News: Breakthroughs and Deep Dive into ${e}`,url:"https://news.ycombinator.com/item?id=38492019",displayUrl:`https://news.ycombinator.com › item › ${s}`,domain:"news.ycombinator.com",icon:"terminal",snippet:`In-depth engineering discussions, performance comparisons, and architecture evaluations of ${e} written by senior software engineers and researchers.`,sitelinks:[],date:"512 points • 148 comments",badge:"HN Discussion"},{title:`TechCrunch & The Verge: Comprehensive Review & Future Outlook on ${e}`,url:`https://techcrunch.com/tag/${s}`,displayUrl:`https://techcrunch.com › tag › ${s}`,domain:"techcrunch.com",icon:"zap",snippet:`Industry analysis and expert editorial on why ${e} is gaining major traction this year. Analysis covers performance metrics, enterprise adoption, and next-generation innovations.`,sitelinks:[],date:"Yesterday",badge:"Tech News"},{title:`YouTube: Full Masterclass & Deep Dive Tutorial for ${e}`,url:`https://www.youtube.com/results?search_query=${encodeURIComponent(i)}`,displayUrl:`https://youtube.com › results › ${s}`,domain:"youtube.com",icon:"play",snippet:`Watch full HD video walk-throughs, step-by-step masterclasses, and visual benchmarks explaining ${e} in detail. Features code examples and timestamps.`,sitelinks:[],date:"🎬 420K views • 4K 60fps",badge:"Video Masterclass"}]}function fe(i,e,t){return[`${i} tutorial and examples`,`${i} best practices 2026`,`${i} vs alternatives comparison`,`${i} documentation github`,`${i} download latest version`,`${i} tips and performance benchmarks`,`${i} community discord reddit`,`free ${i} beginner guide`]}function me(i,e,t){return[{title:`${e} Architecture Diagram`,source:"Tech Docs",type:"Image"},{title:`${e} Benchmark Results (2026)`,source:"Performance Labs",type:"Chart"},{title:`${e} Setup & Installation Walkthrough`,source:"DevHub",type:"Video"}]}function ke(i){let e=null,t="all";function s(){const n=o.getActiveTab();if(n.type!=="search"){i.style.display="none";return}i.style.display="flex";let r="artificial intelligence";try{if(n.url.includes("?q="))r=decodeURIComponent(n.url.split("?q=")[1].split("&")[0]);else if(n.url.includes("search?")){const h=new URLSearchParams(n.url.split("?")[1]||"");r=h.get("q")||h.get("query")||h.get("search")||"search"}else r=n.title.replace(" - WebBuddy Search","").replace(" - Search","")}catch{r="search"}const p=o.getDefaultSearchEngine(),l=te(r,p.id);i.className="search-view-container",i.innerHTML=`
      <!-- Search View Header -->
      <div class="search-view-header">
        <div class="search-logo-link" id="searchLogoHome" title="WebBuddy Home">
          ${d("webbuddy-logo","",28)}
          <span>WebBuddy <span style="font-weight:400; color:var(--text-secondary);">Search</span></span>
        </div>

        <form class="search-page-input-form" id="searchPageForm">
          <input type="text" class="search-page-input" id="searchPageInput" value="${N(r)}" autofocus />
          <button type="submit" style="color:#00F2FE;" title="Search">
            ${d("search","",16)}
          </button>
        </form>

        <div class="search-header-meta">
          <div class="search-engine-tag" id="switchSearchEngineBtn" title="Default Engine: ${N(p.name)} (Click to configure)">
            ${d(p.icon||"search","",14)}
            <span>${$(p.name)}</span>
          </div>
        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="search-filter-tabs">
        <button class="search-filter-tab ${t==="all"?"active":""}" data-filter="all">
          ${d("search","",13)} All Results
        </button>
        <button class="search-filter-tab ${t==="images"?"active":""}" data-filter="images">
          ${d("image","",13)} Images
        </button>
        <button class="search-filter-tab ${t==="videos"?"active":""}" data-filter="videos">
          ${d("play","",13)} Videos
        </button>
        <button class="search-filter-tab ${t==="news"?"active":""}" data-filter="news">
          ${d("zap","",13)} News
        </button>
        <button class="search-filter-tab ${t==="code"?"active":""}" data-filter="code">
          ${d("circuit","",13)} Developer Code
        </button>
      </div>

      <div class="search-stats-bar">
        <span>About ${l.totalResults} results (${l.searchTime} seconds) • WebBuddy Shields blocked 12 trackers</span>
      </div>

      <!-- Results Layout -->
      <div class="search-results-layout">
        <div class="search-results-main">
          <!-- Privacy Shield Active Banner -->
          <div class="search-privacy-banner">
            ${d("shield-check","",16)}
            <span><strong>Private Search Enforced:</strong> Zero query profiling, no tracking cookies, and sub-millisecond network filtering.</span>
          </div>

          <!-- People Also Ask Section -->
          ${l.peopleAlsoAsk&&l.peopleAlsoAsk.length>0?`
            <div class="serp-paa-card">
              <h3 class="paa-heading">People also ask</h3>
              <div class="paa-list">
                ${l.peopleAlsoAsk.map((h,c)=>`
                  <div class="paa-item ${e===c?"open":""}" data-paa-index="${c}">
                    <div class="paa-question-row">
                      <span>${$(h.question)}</span>
                      <span class="paa-icon">${d(e===c?"chevron-up":"chevron-down","",14)}</span>
                    </div>
                    <div class="paa-answer-row" style="display: ${e===c?"block":"none"};">
                      <p>${$(h.answer)}</p>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          `:""}

          <!-- Organic Search Results List -->
          <div class="organic-results-list">
            ${l.organicResults.map(h=>`
              <div class="search-result-item">
                <div class="result-cite">
                  <span class="cite-icon">${d(h.icon||"globe","",13)}</span>
                  <span class="cite-url">${$(h.displayUrl||h.url)}</span>
                  ${h.badge?`<span class="cite-badge">${$(h.badge)}</span>`:""}
                </div>

                <h3 class="result-title" data-visit-url="${N(h.url)}">${$(h.title)}</h3>

                <div class="result-meta-row">
                  ${h.date?`<span class="result-date">${$(h.date)} — </span>`:""}
                  <span class="result-snippet-text">${$(h.snippet)}</span>
                </div>

                <!-- Sitelinks Sub-grid -->
                ${h.sitelinks&&h.sitelinks.length>0?`
                  <div class="result-sitelinks-grid">
                    ${h.sitelinks.map(c=>`
                      <a href="${N(c.url)}" class="sitelink-pill" data-visit-url="${N(c.url)}">
                        ${$(c.label)}
                      </a>
                    `).join("")}
                  </div>
                `:""}
              </div>
            `).join("")}
          </div>

          <!-- Related Searches Pills List -->
          <div class="serp-related-card">
            <h3 class="related-heading">Related Searches</h3>
            <div class="related-tags-grid">
              ${l.relatedSearches.map(h=>`
                <button class="related-tag-btn" data-search-query="${N(h)}">
                  ${d("search","",12)}
                  <span>${$(h)}</span>
                </button>
              `).join("")}
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
          ${l.knowledgePanel?`
            <div class="knowledge-panel-card">
              <div class="kp-badge">${$(l.knowledgePanel.badge||"Overview")}</div>
              <h2 class="kp-title">${$(l.knowledgePanel.title)}</h2>
              <div class="kp-subtitle">${$(l.knowledgePanel.subtitle)}</div>
              
              <p class="kp-description">${$(l.knowledgePanel.description)}</p>

              <div class="kp-divider"></div>

              <div class="kp-facts-list">
                ${l.knowledgePanel.facts.map(h=>`
                  <div class="kp-fact-row">
                    <span class="fact-label">${$(h.label)}</span>
                    <span class="fact-value">${$(h.value)}</span>
                  </div>
                `).join("")}
              </div>

              <div class="kp-footer-btn" data-visit-url="https://en.wikipedia.org/wiki/${encodeURIComponent(r)}">
                <span>View Full Knowledge Profile on Wikipedia</span>
                ${d("external-link","",12)}
              </div>
            </div>
          `:""}

          <!-- Shields Protection Live Telemetry Widget -->
          <div class="kp-shield-widget">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
              <span style="width:8px; height:8px; border-radius:50%; background:#10B981; box-shadow:0 0 8px #10B981;"></span>
              <strong style="color:#fff; font-size:12.5px;">WebBuddy Privacy Core</strong>
            </div>
            <p style="font-size:11.5px; color:var(--text-secondary); line-height:1.5; margin:0 0 10px;">
              All ${l.organicResults.length} result destinations are pre-inspected. Malicious telemetry and intrusive redirects are neutralized.
            </p>
            <div style="display:flex; gap:6px;">
              <span style="background:rgba(0,242,254,0.1); color:#00F2FE; padding:3px 8px; border-radius:4px; font-size:10.5px; font-weight:700;">Zero Logged</span>
              <span style="background:rgba(16,185,129,0.1); color:#10B981; padding:3px 8px; border-radius:4px; font-size:10.5px; font-weight:700;">TLS 1.3</span>
            </div>
          </div>
        </div>
      </div>
    `,a()}function a(){var p,l;(p=i.querySelector("#searchLogoHome"))==null||p.addEventListener("click",()=>{o.navigateToUrl("brave://newtab")});const n=i.querySelector("#searchPageForm"),r=i.querySelector("#searchPageInput");n==null||n.addEventListener("submit",h=>{h.preventDefault();const c=r.value.trim();c&&o.navigateToUrl(c)}),(l=i.querySelector("#switchSearchEngineBtn"))==null||l.addEventListener("click",()=>{o.openModal("settings")}),i.querySelectorAll("[data-filter]").forEach(h=>{h.addEventListener("click",()=>{t=h.dataset.filter,s()})}),i.querySelectorAll("[data-paa-index]").forEach(h=>{h.addEventListener("click",()=>{const c=parseInt(h.dataset.paaIndex,10);e=e===c?null:c,s()})}),i.querySelectorAll("[data-search-query]").forEach(h=>{h.addEventListener("click",()=>{const c=h.dataset.searchQuery;o.navigateToUrl(c)})}),i.querySelectorAll("[data-visit-url]").forEach(h=>{h.addEventListener("click",c=>{c.preventDefault();const u=h.dataset.visitUrl;u&&o.navigateToUrl(u)})}),i.querySelectorAll(".pagination-btn").forEach(h=>{h.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"}),we("📄 Navigated to page of search results")})})}o.subscribe((n,r)=>{["TAB_SWITCHED","NAVIGATION_COMPLETE","SEARCH_ENGINE_CHANGED"].includes(r)&&s()}),s()}function $(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function N(i){return i?i.replace(/"/g,"&quot;"):""}function we(i){const e=document.createElement("div");e.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",e.innerText=i,document.body.appendChild(e),setTimeout(()=>e.remove(),2200)}function xe(i){let e=null;function t(){const r=o.getActiveTab();if(r.type!=="web"){i.style.display="none";return}i.style.display="flex";let p="google.com",l="";try{const b=new URL(r.url);p=b.hostname.replace("www.",""),l=b.searchParams.get("q")||b.searchParams.get("query")||b.searchParams.get("search")||""}catch{p="google.com"}const h=r.totalBlockedCount||r.adsBlockedCount+r.trackersBlockedCount||8;let c=null;if(p.includes("google.com")||p.includes("duckduckgo.com")||p.includes("bing.com")||p.includes("search.brave.com")||p.includes("ecosia.org")){const b=p.includes("duckduckgo")?"duckduckgo":p.includes("bing")?"bing":p.includes("brave")?"brave":p.includes("ecosia")?"ecosia":"google",g=l||"WebBuddy Adblock & Privacy Protection",v=te(g,b);c={title:`${g} - ${s(b)} Search`,url:r.url,domain:p,trackersBlocked:7,content:a(b,g,v)}}else for(const b of Object.keys(q))if(p.includes(b)||r.url.includes(b)){c=q[b];break}c||(c={title:r.title||p,url:r.url,domain:p,trackersBlocked:6,content:`
          <div style="background:#181A26; border-radius:12px; border:1px solid rgba(255,255,255,0.08); padding:40px 24px; text-align:center; max-width:760px; margin:20px auto;">
            <div style="font-size:48px; margin-bottom:16px;">🌐</div>
            <h2 style="font-size:24px; margin-bottom:12px; color:#fff;">${S(r.title||p)}</h2>
            <p style="color:var(--text-secondary); max-width:540px; margin:0 auto 24px; line-height:1.6; font-size:14px;">
              Connected securely to <code>${S(r.url)}</code> via WebBuddy Privacy Tunnel with sub-millisecond filtering and HTTPS upgrading enabled.
            </p>
            <div style="display:inline-flex; gap:14px; background:rgba(255,255,255,0.04); padding:12px 24px; border-radius:10px; border:1px solid rgba(255,255,255,0.08); font-size:13px;">
              <span style="color:#00F2FE;">🛡️ <strong>${h} trackers blocked</strong></span>
              <span style="color:#10B981;">🔒 <strong>TLS 1.3 AES-GCM Encrypted</strong></span>
              <span style="color:#A78BFA;">⚡ <strong>0.3ms Response</strong></span>
            </div>
          </div>
        `}),i.className="web-viewer-container",i.innerHTML=`
      <div class="web-viewer-banner">
        <div class="shields-active-indicator">
          <div class="shields-pulse-dot"></div>
          <span>WebBuddy Shields Active • ${h} ad networks & telemetry beacons blocked on ${S(c.domain||p)}</span>
        </div>
        <div style="color:var(--text-muted); font-size:11px;">
          Protected by Sub-Millisecond Network Filtering & Farbling Max
        </div>
      </div>

      <div class="web-viewer-content">
        ${c.content}
      </div>
    `,n()}function s(r){switch(r){case"duckduckgo":return"DuckDuckGo";case"bing":return"Bing";case"brave":return"Brave";case"ecosia":return"Ecosia";default:return"Google"}}function a(r,p,l){const h=r==="google",c=r==="duckduckgo",u=r==="bing",b=r==="brave",g=r==="ecosia";return`
      <div class="serp-engine-container engine-${r}">
        <!-- Search Engine Header -->
        <header class="serp-engine-header">
          <div class="serp-brand-logo">
            ${h?`
              <span class="g-blue">G</span><span class="g-red">o</span><span class="g-yellow">o</span><span class="g-blue">g</span><span class="g-green">l</span><span class="g-red">e</span>
            `:c?`
              <span style="display:flex; align-items:center; gap:8px; color:#DE5833; font-weight:800; font-size:20px;">
                ${d("duckduckgo","",26)} DuckDuckGo
              </span>
            `:u?`
              <span style="display:flex; align-items:center; gap:8px; color:#008373; font-weight:800; font-size:20px;">
                ${d("bing","",24)} Microsoft Bing
              </span>
            `:b?`
              <span style="display:flex; align-items:center; gap:8px; color:#FB542B; font-weight:800; font-size:20px;">
                ${d("brave","",24)} Brave Search
              </span>
            `:g?`
              <span style="display:flex; align-items:center; gap:8px; color:#008477; font-weight:800; font-size:20px;">
                ${d("ecosia","",24)} Ecosia 🌳
              </span>
            `:`
              <span style="font-weight:800; color:#00F2FE;">WebBuddy Search</span>
            `}
          </div>

          <form class="serp-search-bar-mock" id="serpSearchForm">
            <input type="text" class="serp-input-mock" id="serpSearchInput" value="${G(p)}" />
            <button type="submit" class="serp-submit-btn" title="Search">🔍</button>
          </form>

          ${g?`
            <div class="ecosia-tree-counter">
              <span>🌳 <strong>182,410,290</strong> trees planted</span>
            </div>
          `:""}
        </header>

        <!-- Search Navigation Tabs -->
        <div class="serp-tabs-row">
          <span class="serp-tab active">${d("search","",12)} All</span>
          <span class="serp-tab">${d("image","",12)} Images</span>
          <span class="serp-tab">${d("play","",12)} Videos</span>
          <span class="serp-tab">${d("zap","",12)} News</span>
          <span class="serp-tab">${d("globe","",12)} Maps</span>
          <span class="serp-tab">${d("sliders","",12)} Tools</span>
        </div>

        <div class="serp-stats-bar">
          <span>About ${l.totalResults} results (${l.searchTime} seconds) • WebBuddy Shields blocked 7 trackers</span>
        </div>

        <!-- SERP Dual-Column Results Grid -->
        <div class="serp-dual-grid">
          <!-- Main Results Column -->
          <div class="serp-main-column">
            <!-- PAA Expandable Accordion -->
            ${l.peopleAlsoAsk&&l.peopleAlsoAsk.length>0?`
              <div class="serp-paa-box">
                <div class="paa-box-title">People also ask</div>
                <div class="paa-box-list">
                  ${l.peopleAlsoAsk.map((v,y)=>`
                    <div class="paa-box-item ${e===y?"open":""}" data-serp-paa="${y}">
                      <div class="paa-box-question">
                        <span>${S(v.question)}</span>
                        <span class="paa-arrow">${d(e===y?"chevron-up":"chevron-down","",12)}</span>
                      </div>
                      <div class="paa-box-answer" style="display:${e===y?"block":"none"};">
                        <p>${S(v.answer)}</p>
                      </div>
                    </div>
                  `).join("")}
                </div>
              </div>
            `:""}

            <!-- Organic Results Cards -->
            <div class="serp-results-list">
              ${l.organicResults.map(v=>`
                <div class="serp-result-card">
                  <div class="g-cite">
                    <span class="cite-icon-box">${d(v.icon||"globe","",12)}</span>
                    <span>${S(v.displayUrl||v.url)}</span>
                    ${v.badge?`<span class="res-badge">${S(v.badge)}</span>`:""}
                  </div>

                  <a href="${G(v.url)}" class="g-title" data-visit-url="${G(v.url)}">${S(v.title)}</a>

                  <p class="g-snippet">
                    ${v.date?`<span style="color:var(--text-muted); font-size:12px;">${S(v.date)} — </span>`:""}
                    ${S(v.snippet)}
                  </p>

                  ${v.sitelinks&&v.sitelinks.length>0?`
                    <div class="serp-sitelinks-row">
                      ${v.sitelinks.map(y=>`
                        <a href="${G(y.url)}" class="serp-sitelink-tag" data-visit-url="${G(y.url)}">
                          ${S(y.label)}
                        </a>
                      `).join("")}
                    </div>
                  `:""}
                </div>
              `).join("")}
            </div>

            <!-- Related Searches -->
            <div class="serp-related-box">
              <div class="related-box-title">Related searches</div>
              <div class="related-pills-row">
                ${l.relatedSearches.map(v=>`
                  <button class="related-pill-btn" data-search-query="${G(v)}">
                    ${d("search","",12)}
                    <span>${S(v)}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- Right Sidebar: Knowledge Panel -->
          ${l.knowledgePanel?`
            <div class="serp-sidebar-column">
              <div class="serp-knowledge-panel">
                <div class="skp-badge">${S(l.knowledgePanel.badge||"Overview")}</div>
                <h3 class="skp-title">${S(l.knowledgePanel.title)}</h3>
                <div class="skp-sub">${S(l.knowledgePanel.subtitle)}</div>
                
                <p class="skp-desc">${S(l.knowledgePanel.description)}</p>

                <div class="skp-divider"></div>

                <div class="skp-facts">
                  ${l.knowledgePanel.facts.map(v=>`
                    <div class="skp-fact-item">
                      <span class="skp-fact-label">${S(v.label)}:</span>
                      <span class="skp-fact-val">${S(v.value)}</span>
                    </div>
                  `).join("")}
                </div>

                <div class="skp-shield-note">
                  ${d("shield-check","",14)}
                  <span>Verified Safe by WebBuddy Farble Shields</span>
                </div>
              </div>
            </div>
          `:""}
        </div>
      </div>
    `}function n(){i.querySelectorAll("a").forEach(l=>{l.addEventListener("click",h=>{h.preventDefault();const c=l.getAttribute("href");c&&c!=="#"&&o.navigateToUrl(c)})});const r=i.querySelector("#serpSearchForm")||i.querySelector("#googleSearchForm"),p=i.querySelector("#serpSearchInput")||i.querySelector("#googleSearchInput");r==null||r.addEventListener("submit",l=>{l.preventDefault();const h=p==null?void 0:p.value.trim();h&&o.navigateToUrl(h)}),i.querySelectorAll("[data-serp-paa]").forEach(l=>{l.addEventListener("click",()=>{const h=parseInt(l.dataset.serpPaa,10);e=e===h?null:h,t()})}),i.querySelectorAll("[data-search-query]").forEach(l=>{l.addEventListener("click",()=>{const h=l.dataset.searchQuery;o.navigateToUrl(h)})}),i.querySelectorAll("[data-visit-url]").forEach(l=>{l.addEventListener("click",h=>{h.preventDefault();const c=l.dataset.visitUrl;c&&o.navigateToUrl(c)})})}o.subscribe((r,p)=>{["TAB_SWITCHED","NAVIGATION_COMPLETE","SHIELDS_STATS_UPDATED"].includes(p)&&t()}),t()}function S(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function G(i){return i?i.replace(/"/g,"&quot;"):""}function Ee(i){let e="controls";function t(){const a=o.getState();if(a.activeModal!=="shields"){i.innerHTML="";return}const n=o.getActiveTab(),r=a.shields.shieldsEnabled,p=n.adsBlockedCount||0,l=n.trackersBlockedCount||0,h=Se(n.url),c=a.shields.filterLists;i.innerHTML=`
      <div class="popover-container shields-popover" id="shieldsPopover" style="width: 420px; left: 50px;">
        <div class="shields-popover-header" style="background: linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(127, 0, 255, 0.15) 100%);">
          <div class="shields-header-brand">
            <div class="shields-header-icon" style="background: linear-gradient(135deg, #00F2FE 0%, #7F00FF 100%);">
              ${d("shield","",18)}
            </div>
            <div>
              <div class="shields-header-title">Ad & Tracker Blocker</div>
              <div class="shields-header-sub">${J(h)}</div>
            </div>
          </div>

          <label class="toggle-switch" title="Toggle Ad & Tracker Blocker for this site">
            <input type="checkbox" id="masterShieldsToggle" ${r?"checked":""}>
            <span class="toggle-slider"></span>
          </label>
        </div>

        <!-- Navigation Tabs inside Shields Popover -->
        <div style="display:flex; background:rgba(0,0,0,0.25); border-bottom:1px solid var(--glass-border);">
          <button class="shield-nav-tab ${e==="controls"?"active":""}" id="tabControlsBtn" style="flex:1; padding:9px; font-size:12px; font-weight:600; color:${e==="controls"?"#00F2FE":"var(--text-secondary)"}; border-bottom:2px solid ${e==="controls"?"#00F2FE":"transparent"};">
            Site Protection
          </button>
          <button class="shield-nav-tab ${e==="filters"?"active":""}" id="tabFiltersBtn" style="flex:1; padding:9px; font-size:12px; font-weight:600; color:${e==="filters"?"#00F2FE":"var(--text-secondary)"}; border-bottom:2px solid ${e==="filters"?"#00F2FE":"transparent"};">
            Filter Lists (${c.filter(u=>u.enabled).length}/${c.length})
          </button>
        </div>

        <div class="shields-popover-body">
          ${e==="controls"?`
            <!-- Live Status Highlight -->
            <div class="shields-stat-highlight" style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="color:#FF5858;">${d("x","",16)}</div>
                <div>
                  <div style="font-size:18px; font-weight:800; font-family:'JetBrains Mono'; color:#FF5858;">${r?p:0}</div>
                  <div style="font-size:11px; color:var(--text-secondary);">Ads Blocked</div>
                </div>
              </div>

              <div style="display:flex; align-items:center; gap:8px;">
                <div style="color:#00F2FE;">${d("shield","",16)}</div>
                <div>
                  <div style="font-size:18px; font-weight:800; font-family:'JetBrains Mono'; color:#00F2FE;">${r?l:0}</div>
                  <div style="font-size:11px; color:var(--text-secondary);">Trackers Neutralized</div>
                </div>
              </div>
            </div>

            <!-- Granular Protection Switches -->
            <div class="shields-controls-list">
              <div class="shield-control-row">
                <span class="shield-control-label">
                  ${d("x","",14)}
                  <span>Block Intrusive Banner & Video Ads</span>
                </span>
                <label class="toggle-switch">
                  <input type="checkbox" data-shield-opt="blockAds" ${a.shields.blockAds&&r?"checked":""} ${r?"":"disabled"}>
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div class="shield-control-row">
                <span class="shield-control-label">
                  ${d("zap","",14)}
                  <span>Block Cross-Site Tracking Beacons</span>
                </span>
                <label class="toggle-switch">
                  <input type="checkbox" data-shield-opt="blockTrackers" ${a.shields.blockTrackers&&r?"checked":""} ${r?"":"disabled"}>
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div class="shield-control-row">
                <span class="shield-control-label">
                  ${d("sparkles","",14)}
                  <span>Defeat Canvas & Audio Fingerprinting</span>
                </span>
                <label class="toggle-switch">
                  <input type="checkbox" data-shield-opt="blockFingerprinting" ${a.shields.blockFingerprinting&&r?"checked":""} ${r?"":"disabled"}>
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div class="shield-control-row">
                <span class="shield-control-label">
                  ${d("lock","",14)}
                  <span>Upgrade Connections to HTTPS</span>
                </span>
                <label class="toggle-switch">
                  <input type="checkbox" data-shield-opt="upgradeHttps" ${a.shields.upgradeHttps&&r?"checked":""} ${r?"":"disabled"}>
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div class="shield-control-row">
                <span class="shield-control-label">
                  ${d("puzzle","",14)}
                  <span>Block Cookie Banners & Annoyances</span>
                </span>
                <label class="toggle-switch">
                  <input type="checkbox" data-shield-opt="blockAnnoyances" ${a.shields.blockAnnoyances&&r?"checked":""} ${r?"":"disabled"}>
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
                ${c.map(u=>`
                  <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:8px;">
                    <div>
                      <div style="font-size:12.5px; font-weight:600; color:#fff;">${J(u.name)}</div>
                      <div style="font-size:11px; color:var(--text-muted);">${u.rulesCount.toLocaleString()} rules • Updated ${u.lastUpdated}</div>
                    </div>
                    <label class="toggle-switch">
                      <input type="checkbox" data-filter-id="${u.id}" ${u.enabled?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>
                `).join("")}
              </div>
            </div>
          `}
        </div>
      </div>
    `,s()}function s(){var r,p,l,h;const a=i.querySelector("#shieldsPopover");if(!a)return;(r=a.querySelector("#tabControlsBtn"))==null||r.addEventListener("click",()=>{e="controls",t()}),(p=a.querySelector("#tabFiltersBtn"))==null||p.addEventListener("click",()=>{e="filters",t()}),(l=a.querySelector("#masterShieldsToggle"))==null||l.addEventListener("change",()=>{o.toggleShields()}),a.querySelectorAll("[data-shield-opt]").forEach(c=>{c.addEventListener("change",()=>{const u=c.dataset.shieldOpt;o.updateShieldOption(u,c.checked)})}),a.querySelectorAll("[data-filter-id]").forEach(c=>{c.addEventListener("change",()=>{const u=c.dataset.filterId;o.toggleFilterList(u)})}),(h=a.querySelector("#updateFiltersBtn"))==null||h.addEventListener("click",()=>{$e("⚡ All 5 Adblock filter lists updated to latest version!")});const n=c=>{!c.target.closest("#shieldsPopover")&&!c.target.closest("#shieldBadgeBtn")&&!c.target.closest("#adblockControlBtn")&&!c.target.closest("#openFilterListsBtn")&&(o.closeModal(),document.removeEventListener("click",n))};setTimeout(()=>document.addEventListener("click",n),10)}o.subscribe((a,n)=>{["MODAL_CHANGED","SHIELDS_TOGGLED","SHIELDS_OPTION_CHANGED","FILTER_LIST_TOGGLED"].includes(n)&&t()}),t()}function Se(i){if(!i||i.startsWith("brave://"))return"WebBuddy Private Browser";try{return new URL(i).hostname}catch{return i}}function J(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function $e(i){const e=document.createElement("div");e.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",e.innerText=i,document.body.appendChild(e),setTimeout(()=>e.remove(),2200)}function Te(i){let e="search",t=!1,s=null;function a(){const r=o.getState();if(r.activeModal!=="settings"){i.innerHTML="";return}const p=r.settings,l=o.getSearchEngines(),h=o.getDefaultSearchEngine();i.innerHTML=`
      <div class="modal-overlay" id="settingsOverlay">
        <div class="center-modal settings-modal-wrapper">
          <!-- Modal Header -->
          <div class="modal-header">
            <div class="modal-title">
              ${d("settings","",18)}
              <span>WebBuddy Preferences & Settings</span>
            </div>
            <button class="modal-close-btn" id="closeSettingsBtn" title="Close Settings">
              ${d("close","",14)}
            </button>
          </div>

          <!-- Tab Navigation -->
          <div class="settings-nav-tabs">
            <button class="settings-tab-btn ${e==="search"?"active":""}" data-tab="search">
              ${d("search","",15)}
              <span>Search Engines</span>
            </button>
            <button class="settings-tab-btn ${e==="shields"?"active":""}" data-tab="shields">
              ${d("shield","",15)}
              <span>Shields & Privacy</span>
            </button>
            <button class="settings-tab-btn ${e==="appearance"?"active":""}" data-tab="appearance">
              ${d("sliders","",15)}
              <span>Appearance</span>
            </button>
          </div>

          <div class="modal-body">
            <!-- TAB 1: Search Engines Manager -->
            ${e==="search"?`
              <div class="search-manager-section">
                <!-- Section 1: Default Search Engine Selector -->
                <div>
                  <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
                    <div>
                      <h4 style="font-size:14px; font-weight:700; color:#fff; margin-bottom:2px;">Default Search Engine</h4>
                      <p style="font-size:12px; color:var(--text-secondary);">The search engine used when searching from the address bar or new tab page.</p>
                    </div>
                    <span class="engine-tag-default">Active: ${B(h.name)}</span>
                  </div>

                  <div class="search-engine-selector-grid">
                    ${l.map(c=>{const u=c.id===h.id;return`
                        <div class="search-engine-card ${u?"active":""}" data-set-default="${C(c.id)}" title="Click to set ${B(c.name)} as default">
                          <div class="search-engine-icon-box">
                            ${d(c.icon||"search","",18)}
                          </div>
                          <div class="search-engine-info">
                            <div class="search-engine-name">${B(c.name)}</div>
                            <div class="search-engine-shortcut-hint">${B(c.shortcut||"No prefix")}</div>
                          </div>
                          ${u?'<span class="active-default-pill">DEFAULT</span>':""}
                        </div>
                      `}).join("")}
                  </div>
                </div>

                <!-- Section 2: Manage Search Engines Table -->
                <div class="engine-table-wrapper">
                  <div class="engine-table-header">
                    <div class="engine-table-title">
                      ${d("search-engine","",16)}
                      <span>Manage Search Engines & Shortcuts</span>
                    </div>
                    <div style="display:flex; gap:8px;">
                      <button class="btn-secondary" id="openAddEngineBtn" style="padding:6px 12px; font-size:11px; display:flex; align-items:center; gap:5px;">
                        ${d("plus","",12)}
                        <span>Add Search Engine</span>
                      </button>
                      <button class="btn-secondary" id="resetEnginesBtn" style="padding:6px 10px; font-size:11px;" title="Reset all to defaults">
                        ${d("refresh","",12)}
                      </button>
                    </div>
                  </div>

                  <!-- Add / Edit Search Engine Form Drawer -->
                  ${t?`
                    <div class="add-engine-card" id="addEngineCard">
                      <div class="add-engine-header">
                        <span>${s?"Edit Search Engine":"Add Custom Search Engine"}</span>
                        <button class="btn-engine-icon" id="cancelAddEngineBtn">${d("close","",12)}</button>
                      </div>
                      
                      <div class="add-engine-grid">
                        <div class="form-group">
                          <label class="form-label">Search Engine Name *</label>
                          <input type="text" class="form-input" id="engineNameInput" placeholder="e.g. YouTube, GitHub" value="${C((s==null?void 0:s.name)||"")}" />
                        </div>
                        <div class="form-group">
                          <label class="form-label">Shortcut / Keyword (optional)</label>
                          <input type="text" class="form-input" id="engineShortcutInput" placeholder="e.g. :yt, :gh, !r" value="${C((s==null?void 0:s.shortcut)||"")}" />
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="form-label">URL with %s in place of query *</label>
                        <input type="text" class="form-input" id="engineUrlInput" placeholder="e.g. https://www.youtube.com/results?search_query=%s" value="${C((s==null?void 0:s.searchUrl)||"")}" />
                        <span style="font-size:11px; color:var(--text-muted); margin-top:2px;">Use <code>%s</code> wherever the search terms should go.</span>
                      </div>

                      <div class="engine-form-actions">
                        <button class="btn-secondary" id="cancelAddEngineBtn2">Cancel</button>
                        <button class="btn-primary" id="saveEngineBtn">
                          ${s?"Update Search Engine":"Save Search Engine"}
                        </button>
                      </div>
                    </div>
                  `:""}

                  <!-- List of engines -->
                  <div class="engine-list">
                    ${l.map(c=>{const u=c.id===h.id;return`
                        <div class="engine-row">
                          <div class="engine-row-left">
                            <div class="engine-avatar">
                              ${d(c.icon||"search","",16)}
                            </div>
                            <div class="engine-details">
                              <div class="engine-details-title-row">
                                <span class="engine-title">${B(c.name)}</span>
                                ${u?'<span class="engine-tag-default">Default</span>':""}
                                ${c.isBuiltin?"":'<span class="engine-tag-custom">Custom</span>'}
                              </div>
                              <div class="engine-subtext" title="${C(c.searchUrl)}">
                                <code>${B(c.searchUrl)}</code>
                              </div>
                            </div>
                          </div>

                          <div style="display:flex; align-items:center; gap:10px;">
                            ${c.shortcut?`<span class="engine-shortcut-badge" title="Type ${C(c.shortcut)} in address bar to search">${B(c.shortcut)}</span>`:""}
                            
                            <div class="engine-row-actions">
                              ${u?"":`
                                <button class="btn-make-default" data-set-default="${C(c.id)}" title="Make default">
                                  Make Default
                                </button>
                              `}
                              
                              <button class="btn-engine-icon" data-edit-engine="${C(c.id)}" title="Edit search engine">
                                ${d("edit","",13)}
                              </button>

                              ${(!c.isBuiltin||l.length>1)&&!u?`
                                <button class="btn-engine-icon delete" data-delete-engine="${C(c.id)}" title="Delete search engine">
                                  ${d("trash","",13)}
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
            ${e==="shields"?`
              <div>
                <h4 style="font-size:13px; font-weight:700; color:var(--text-secondary); margin-bottom:12px;">Visible Dashboard Widgets</h4>
                <div class="shields-controls-list">
                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${d("shield","",14)}
                      <span>Ad & Tracker Blocker Metrics Card</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="showShieldsStats" ${p.showShieldsStats?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>

                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${d("clock","",14)}
                      <span>Digital Clock & Greeting</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="showClock" ${p.showClock?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>

                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${d("zap","",14)}
                      <span>Top Sites & Shortcuts Grid</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="showTopSites" ${p.showTopSites?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>

                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${d("star","",14)}
                      <span>Show Bookmarks Bar</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="bookmarksBarVisible" ${p.bookmarksBarVisible?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            `:""}

            <!-- TAB 3: Appearance & Wallpapers -->
            ${e==="appearance"?`
              <div style="display:flex; flex-direction:column; gap:16px;">
                <div class="shields-controls-list">
                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${d("image","",14)}
                      <span>Blur Background Wallpaper on Dashboard</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="blurWallpaper" ${p.blurWallpaper?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 style="font-size:13px; font-weight:700; color:var(--text-secondary); margin-bottom:10px;">Background Wallpaper</h4>
                  <div class="wallpaper-gallery-grid">
                    ${r.wallpapers.map((c,u)=>`
                      <div class="wallpaper-thumb ${r.activeWallpaperIndex===u?"selected":""}" data-wallpaper-index="${u}">
                        <img src="${c.thumbnail||c.url}" alt="${B(c.name)}" loading="lazy" />
                        <div class="wallpaper-thumb-label">${B(c.name)}</div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </div>
            `:""}
          </div>
        </div>
      </div>
    `,n()}function n(){var p,l,h,c,u,b;const r=i.querySelector("#settingsOverlay");r&&((p=r.querySelector("#closeSettingsBtn"))==null||p.addEventListener("click",()=>{t=!1,s=null,o.closeModal()}),r.addEventListener("click",g=>{g.target===r&&(t=!1,s=null,o.closeModal())}),r.querySelectorAll(".settings-tab-btn").forEach(g=>{g.addEventListener("click",()=>{e=g.dataset.tab,t=!1,s=null,a()})}),r.querySelectorAll("[data-set-default]").forEach(g=>{g.addEventListener("click",v=>{v.stopPropagation();const y=g.dataset.setDefault;o.setDefaultSearchEngine(y);const f=o.getSearchEngineById(y);L(`🔍 Default search engine set to ${f?f.name:"Google"}`),a()})}),(l=r.querySelector("#openAddEngineBtn"))==null||l.addEventListener("click",()=>{var g;t=!0,s=null,a(),(g=r.querySelector("#engineNameInput"))==null||g.focus()}),(h=r.querySelector("#cancelAddEngineBtn"))==null||h.addEventListener("click",()=>{t=!1,s=null,a()}),(c=r.querySelector("#cancelAddEngineBtn2"))==null||c.addEventListener("click",()=>{t=!1,s=null,a()}),(u=r.querySelector("#resetEnginesBtn"))==null||u.addEventListener("click",()=>{confirm("Reset search engines to default settings (Google as default)?")&&(o.resetSearchEnginesToDefault(),L("✓ Search engines reset to defaults"),a())}),(b=r.querySelector("#saveEngineBtn"))==null||b.addEventListener("click",()=>{const g=r.querySelector("#engineNameInput"),v=r.querySelector("#engineShortcutInput"),y=r.querySelector("#engineUrlInput"),f=g==null?void 0:g.value.trim(),k=v==null?void 0:v.value.trim(),w=y==null?void 0:y.value.trim();if(!f){g==null||g.focus(),L("⚠️ Please enter a search engine name");return}if(!w||!w.includes("%s")){y==null||y.focus(),L("⚠️ URL must include %s for the search query parameter");return}s?(o.updateSearchEngine(s.id,{name:f,shortcut:k,searchUrl:w}),L(`✓ Updated ${f} search engine`)):(o.addSearchEngine({name:f,shortcut:k,searchUrl:w}),L(`✓ Added ${f} to search engines`)),t=!1,s=null,a()}),r.querySelectorAll("[data-edit-engine]").forEach(g=>{g.addEventListener("click",v=>{var k;v.stopPropagation();const y=g.dataset.editEngine,f=o.getSearchEngineById(y);f&&(s=f,t=!0,a(),(k=r.querySelector("#engineNameInput"))==null||k.focus())})}),r.querySelectorAll("[data-delete-engine]").forEach(g=>{g.addEventListener("click",v=>{v.stopPropagation();const y=g.dataset.deleteEngine,f=o.getSearchEngineById(y);confirm(`Remove "${f?f.name:"this search engine"}"?`)&&(o.deleteSearchEngine(y),L("🗑️ Search engine removed"),a())})}),r.querySelectorAll("[data-setting]").forEach(g=>{g.addEventListener("change",()=>{const v=g.dataset.setting;o.updateSetting(v,g.checked)})}),r.querySelectorAll("[data-wallpaper-index]").forEach(g=>{g.addEventListener("click",()=>{const v=parseInt(g.dataset.wallpaperIndex,10);o.selectWallpaper(v),a()})}))}o.subscribe((r,p)=>{["MODAL_CHANGED","SETTINGS_UPDATED","WALLPAPER_CHANGED","SEARCH_ENGINES_UPDATED","SEARCH_ENGINE_CHANGED"].includes(p)&&a()}),a()}function B(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function C(i){return i?i.replace(/"/g,"&quot;"):""}function L(i){const e=document.createElement("div");e.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",e.innerText=i,document.body.appendChild(e),setTimeout(()=>e.remove(),2400)}function Ae(i){function e(){if(o.getState().activeModal!=="addShortcut"){i.innerHTML="";return}i.innerHTML=`
      <div class="modal-overlay" id="addShortcutOverlay">
        <div class="center-modal" style="max-width: 420px;">
          <div class="modal-header">
            <div class="modal-title">
              ${d("plus","",18)}
              <span>Add Top Site Shortcut</span>
            </div>
            <button class="modal-close-btn" id="closeAddShortcutBtn">
              ${d("close","",14)}
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
    `,t()}function t(){var n;const s=i.querySelector("#addShortcutOverlay");if(!s)return;(n=s.querySelector("#closeAddShortcutBtn"))==null||n.addEventListener("click",()=>{o.closeModal()}),s.addEventListener("click",r=>{r.target===s&&o.closeModal()});const a=s.querySelector("#addShortcutForm");a==null||a.addEventListener("submit",r=>{r.preventDefault();const p=s.querySelector("#shortcutNameInput").value.trim(),l=s.querySelector("#shortcutUrlInput").value.trim();p&&l&&(o.addTopSite(p,l),o.closeModal())})}o.subscribe((s,a)=>{["MODAL_CHANGED"].includes(a)&&e()}),e()}function Be(i){let e="",t="list";function s(){const n=o.getState(),r=n.isNotesSidebarOpen,p=o.getNotesCapacityStats(),l=n.notes.find(c=>c.id===n.activeNoteId)||n.notes[0];i.className=`notes-sidebar ${r?"open":""}`;const h=n.notes.filter(c=>{const u=e.toLowerCase();return c.title.toLowerCase().includes(u)||c.content.toLowerCase().includes(u)});i.innerHTML=`
      <!-- Notes Header -->
      <div class="notes-header">
        <div class="notes-brand">
          <div class="notes-badge-icon">
            ${d("file-text","",16)}
          </div>
          <div class="notes-title-box">
            <span class="notes-title">Quick Notes</span>
            <span class="notes-sub">${n.notes.length} saved notes</span>
          </div>
        </div>

        <button class="action-icon-btn" id="closeNotesSidebarBtn" title="Close Notes Sidebar">
          ${d("close","",14)}
        </button>
      </div>

      <!-- Notes Toolbar & Actions -->
      <div class="notes-toolbar">
        <div class="notes-actions-row">
          <button class="new-note-btn" id="createNewNoteBtn">
            ${d("plus","",13)}
            <span>New Note</span>
          </button>
          <button class="clip-page-btn" id="clipCurrentPageBtn" title="Save current webpage link & title">
            ${d("link","",13)}
            <span>Clip Page</span>
          </button>
        </div>

        <input 
          type="text" 
          class="notes-search-input" 
          id="notesSearchInput" 
          placeholder="Search saved notes..." 
          value="${X(e)}"
        />
      </div>

      <!-- Main Content: List or Editor -->
      ${t==="list"?`
        <div class="notes-list-container">
          ${h.length===0?`
            <div style="text-align:center; padding:30px 10px; color:var(--text-muted); font-size:12px;">
              ${e?"No matching notes found.":'No notes saved yet. Click "+ New Note" to create one!'}
            </div>
          `:h.map(c=>`
            <div class="note-card ${c.id===n.activeNoteId?"active":""}" data-note-id="${c.id}">
              <div class="note-card-top">
                <div style="display:flex; align-items:center; gap:6px;">
                  <span class="note-color-dot" style="background:${c.color||"#00F2FE"};"></span>
                  <span class="note-card-title">${U(c.title)}</span>
                </div>
                <div style="display:flex; align-items:center; gap:4px;">
                  <button class="action-icon-btn" style="width:20px; height:20px;" data-pin-note="${c.id}" title="${c.pinned?"Unpin":"Pin to top"}">
                    ${d("pin",c.pinned?"note-pin-indicator":"",12)}
                  </button>
                  <button class="action-icon-btn" style="width:20px; height:20px; color:var(--text-muted);" data-delete-note="${c.id}" title="Delete Note">
                    ${d("trash","",12)}
                  </button>
                </div>
              </div>

              <div class="note-card-snippet">
                ${U(c.content||"Empty note...")}
              </div>

              <div class="note-card-meta">
                <span>${c.updatedAt||c.createdAt}</span>
                ${c.url?`<span style="color:#00F2FE; display:flex; align-items:center; gap:2px;">${d("link","",10)} Attached Link</span>`:""}
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
              ${["#00F2FE","#7F00FF","#10B981","#FF5858","#FFBD2E"].map(c=>`
                <span class="color-picker-dot" data-set-color="${c}" style="width:12px; height:12px; border-radius:50%; background:${c}; cursor:pointer; border:1px solid ${l&&l.color===c?"#fff":"transparent"};"></span>
              `).join("")}
            </div>
          </div>

          <input 
            type="text" 
            class="editor-title-input" 
            id="editorTitleInput" 
            placeholder="Note title..." 
            value="${X(l?l.title:"")}" 
          />

          ${l&&l.url?`
            <div style="font-size:11px; color:var(--text-secondary); display:flex; align-items:center; gap:6px; background:rgba(255,255,255,0.04); padding:6px 10px; border-radius:6px;">
              ${d("link","",12)}
              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:260px;">${U(l.url)}</span>
              <button id="openAttachedUrlBtn" style="margin-left:auto; color:#00F2FE; font-weight:600;">Open →</button>
            </div>
          `:""}

          <textarea 
            class="editor-textarea" 
            id="editorContentInput" 
            placeholder="Type your notes, ideas, code snippets, or research here..."
          >${U(l?l.content:"")}</textarea>

          <div class="editor-actions-bottom">
            <span style="font-size:10.5px; color:var(--text-muted);">Auto-saved locally</span>
            <button class="action-icon-btn" id="deleteCurrentNoteBtn" title="Delete Note" style="color:#FF5858;">
              ${d("trash","",14)}
            </button>
          </div>
        </div>
      `}

      <!-- Save Capacity Storage Footer -->
      <div class="notes-capacity-footer">
        <div class="capacity-header-row">
          <span style="display:flex; align-items:center; gap:5px; color:var(--text-secondary);">
            ${d("hard-drive","",12)} Save Capacity
          </span>
          <span style="color:#00F2FE; font-family:'JetBrains Mono'; font-size:10.5px;">
            ${p.usedKb} KB / ${p.maxMb}.0 MB (${p.percentUsed}%)
          </span>
        </div>

        <div class="capacity-progress-track">
          <div class="capacity-progress-fill" style="width: ${Math.max(1,p.percentUsed)}%;"></div>
        </div>

        <div class="capacity-subtext">
          <span>${p.notesCount} / ${p.maxNotesLimit} max notes</span>
          <span class="export-notes-link" id="exportNotesBtn" title="Download backup of all saved notes">
            ${d("download","",11)} Export Backup
          </span>
        </div>
      </div>
    `,a()}function a(){var h,c,u,b,g,v,y;(h=i.querySelector("#closeNotesSidebarBtn"))==null||h.addEventListener("click",()=>{o.toggleNotesSidebar(!1)}),(c=i.querySelector("#createNewNoteBtn"))==null||c.addEventListener("click",()=>{o.addNote("New Note",""),t="editor",s(),setTimeout(()=>{const f=i.querySelector("#editorTitleInput");f&&(f.focus(),f.select())},50)}),(u=i.querySelector("#clipCurrentPageBtn"))==null||u.addEventListener("click",()=>{const f=o.getActiveTab(),k=f.type==="web"?`Clip: ${f.title}`:"Page Note",w=f.type==="web"?f.url:"",x=`Captured from: ${w}

Key takeaways:
- `;o.addNote(k,x,w),Q("📎 Webpage clipped to your Notes!"),t="list",s()});const n=i.querySelector("#notesSearchInput");n==null||n.addEventListener("input",f=>{e=f.target.value,s()}),i.querySelectorAll(".note-card").forEach(f=>{f.addEventListener("click",k=>{if(k.target.closest("[data-pin-note]")||k.target.closest("[data-delete-note]"))return;const w=f.dataset.noteId;o.selectNote(w),t="editor",s()})}),i.querySelectorAll("[data-pin-note]").forEach(f=>{f.addEventListener("click",k=>{k.stopPropagation();const w=f.dataset.pinNote;o.togglePinNote(w)})}),i.querySelectorAll("[data-delete-note]").forEach(f=>{f.addEventListener("click",k=>{k.stopPropagation();const w=f.dataset.deleteNote;o.deleteNote(w)})}),(b=i.querySelector("#backToListBtn"))==null||b.addEventListener("click",()=>{t="list",s()});const r=i.querySelector("#editorTitleInput"),p=i.querySelector("#editorContentInput"),l=o.getState().activeNoteId;r==null||r.addEventListener("input",()=>{o.updateNote(l,{title:r.value})}),p==null||p.addEventListener("input",()=>{o.updateNote(l,{content:p.value})}),i.querySelectorAll("[data-set-color]").forEach(f=>{f.addEventListener("click",()=>{const k=f.dataset.setColor;o.updateNote(l,{color:k}),s()})}),(g=i.querySelector("#openAttachedUrlBtn"))==null||g.addEventListener("click",()=>{const f=o.getState().notes.find(k=>k.id===l);f&&f.url&&o.navigateToUrl(f.url)}),(v=i.querySelector("#deleteCurrentNoteBtn"))==null||v.addEventListener("click",()=>{o.deleteNote(l),t="list",s()}),(y=i.querySelector("#exportNotesBtn"))==null||y.addEventListener("click",()=>{o.exportNotesJson(),Q("📥 Notes backup exported successfully!")})}o.subscribe((n,r)=>{["NOTES_SIDEBAR_TOGGLED","NOTE_ADDED","NOTE_UPDATED","NOTE_DELETED","NOTE_SELECTED"].includes(r)&&s()}),s()}function U(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function X(i){return i?i.replace(/"/g,"&quot;"):""}function Q(i){const e=document.createElement("div");e.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",e.innerText=i,document.body.appendChild(e),setTimeout(()=>e.remove(),2200)}function Ce(i){function e(){const s=o.getState();if(s.activeModal!=="videoControls"){i.innerHTML="";return}const a=s.media,n=Math.floor(a.currentTime/60),r=String(Math.floor(a.currentTime%60)).padStart(2,"0"),p=Math.floor(a.duration/60),l=String(Math.floor(a.duration%60)).padStart(2,"0");i.innerHTML=`
      <div class="video-control-popover" id="videoControlPopover">
        <div class="video-popover-header">
          <div class="video-header-brand">
            <div class="video-header-icon">
              ${d("play","",16)}
            </div>
            <div>
              <div class="video-header-title">Video & Media Controls</div>
              <div class="video-header-sub">PiP, Overlap & Shortcuts Hub</div>
            </div>
          </div>

          <button class="action-icon-btn" id="closeVideoControlsBtn" title="Close">
            ${d("close","",14)}
          </button>
        </div>

        <div class="video-popover-body">
          <!-- Active Media Control Card -->
          <div class="media-preview-card">
            <div class="media-card-top">
              <span class="media-video-title" title="${Pe(a.videoTitle)}">${Me(a.videoTitle)}</span>
              <span class="media-badge">1080p HD</span>
            </div>

            <!-- Seek Slider -->
            <div class="media-seek-bar-container">
              <input 
                type="range" 
                class="media-seek-slider" 
                id="mediaSeekSlider" 
                min="0" 
                max="${a.duration}" 
                value="${a.currentTime}" 
              />
              <div class="media-time-row">
                <span>${n}:${r}</span>
                <span>${p}:${l}</span>
              </div>
            </div>

            <!-- Main Playback Actions -->
            <div class="media-controls-row">
              <button class="media-ctrl-btn" id="rewind10Btn" title="Rewind 10s (J or ←)">
                ${d("skip-back","",16)}
              </button>

              <button class="media-ctrl-btn play-btn" id="mainPlayPauseBtn" title="Play / Pause (Space or K)">
                ${d(a.isPlaying?"pause":"play","",18)}
              </button>

              <button class="media-ctrl-btn" id="forward10Btn" title="Forward 10s (L or →)">
                ${d("skip-forward","",16)}
              </button>

              <button class="media-ctrl-btn" id="toggleMuteBtn" title="Mute / Unmute (M)">
                ${d(a.isMuted?"volume-x":"volume-2","",16)}
              </button>
            </div>

            <!-- Speed Pills -->
            <div class="speed-pills-row">
              <span style="font-size:10.5px; color:var(--text-muted); padding-left:4px;">Speed:</span>
              ${[.5,.75,1,1.25,1.5,2].map(h=>`
                <button class="speed-pill-btn ${a.playbackSpeed===h?"active":""}" data-set-speed="${h}">
                  ${h}x
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Feature Action Cards -->
          <div class="video-features-grid">
            <button class="video-feature-card-btn ${a.isPipActive?"active":""}" id="togglePipBtn">
              <div class="feature-btn-top">
                ${d("pip","",18)}
                <span style="font-size:11px; font-weight:700;">${a.isPipActive?"ON":"OFF"}</span>
              </div>
              <div class="feature-btn-title">Picture-in-Picture</div>
              <div class="feature-btn-sub">Floating persistent window (P)</div>
            </button>

            <button class="video-feature-card-btn ${a.isOverlapping?"active":""}" id="toggleOverlappingBtn">
              <div class="feature-btn-top">
                ${d("layers","",18)}
                <span style="font-size:11px; font-weight:700;">${a.isOverlapping?"ON":"OFF"}</span>
              </div>
              <div class="feature-btn-title">Overlapping View</div>
              <div class="feature-btn-sub">Corner dock across all tabs</div>
            </button>

            <button class="video-feature-card-btn ${a.autoHideControls?"active":""}" id="toggleAutoHideBtn">
              <div class="feature-btn-top">
                ${d("sparkles","",18)}
                <span style="font-size:11px; font-weight:700;">${a.autoHideControls?"ON":"OFF"}</span>
              </div>
              <div class="feature-btn-title">Auto-Hide Controls</div>
              <div class="feature-btn-sub">Fade controls when idle</div>
            </button>

            <button class="video-feature-card-btn active" id="videoAdblockInfoBtn">
              <div class="feature-btn-top">
                ${d("shield-check","",18)}
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
    `,t()}function t(){var n,r,p,l,h,c,u,b,g;const s=i.querySelector("#videoControlPopover");if(!s)return;(n=s.querySelector("#closeVideoControlsBtn"))==null||n.addEventListener("click",()=>{o.closeModal()}),(r=s.querySelector("#mainPlayPauseBtn"))==null||r.addEventListener("click",()=>{o.togglePlayPause()}),(p=s.querySelector("#rewind10Btn"))==null||p.addEventListener("click",()=>{o.skipMediaTime(-10),_("⏪ Rewound 10s")}),(l=s.querySelector("#forward10Btn"))==null||l.addEventListener("click",()=>{o.skipMediaTime(10),_("⏩ Forward 10s")}),(h=s.querySelector("#toggleMuteBtn"))==null||h.addEventListener("click",()=>{o.toggleMediaMute()}),(c=s.querySelector("#mediaSeekSlider"))==null||c.addEventListener("input",v=>{o.seekMedia(parseFloat(v.target.value))}),s.querySelectorAll("[data-set-speed]").forEach(v=>{v.addEventListener("click",()=>{const y=parseFloat(v.dataset.setSpeed);o.setPlaybackSpeed(y),_(`⚡ Playback speed: ${y}x`)})}),(u=s.querySelector("#togglePipBtn"))==null||u.addEventListener("click",()=>{o.togglePip(),_(o.getState().media.isPipActive?"🖼️ Picture-in-Picture Activated!":"🖼️ Picture-in-Picture Closed")}),(b=s.querySelector("#toggleOverlappingBtn"))==null||b.addEventListener("click",()=>{o.toggleOverlapping(),_(o.getState().media.isOverlapping?"📑 Overlapping Corner Dock Enabled":"📑 Overlapping View Disabled")}),(g=s.querySelector("#toggleAutoHideBtn"))==null||g.addEventListener("click",()=>{o.toggleAutoHideControls(),_(o.getState().media.autoHideControls?"✨ Auto-Hide Controls: Enabled":"✨ Auto-Hide Controls: Always Visible")});const a=v=>{!v.target.closest("#videoControlPopover")&&!v.target.closest("#videoControlBtn")&&(o.closeModal(),document.removeEventListener("click",a))};setTimeout(()=>document.addEventListener("click",a),10)}o.subscribe((s,a)=>{["MODAL_CHANGED","MEDIA_PLAY_STATE_CHANGED","MEDIA_PIP_TOGGLED","MEDIA_OVERLAPPING_TOGGLED","MEDIA_AUTOHIDE_TOGGLED","MEDIA_SPEED_CHANGED","MEDIA_VOLUME_CHANGED","MEDIA_MUTE_TOGGLED","MEDIA_TIME_SEEKED"].includes(a)&&e()}),e()}function Me(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function Pe(i){return i?i.replace(/"/g,"&quot;"):""}function _(i){const e=document.createElement("div");e.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg, #00F2FE, #7F00FF);color:#fff;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",e.innerText=i,document.body.appendChild(e),setTimeout(()=>e.remove(),2200)}function De(i){let e=null;function t(){const n=o.getState().media;if(!n.isPipActive){i.innerHTML="";return}const r=Math.floor(n.currentTime/60),p=String(Math.floor(n.currentTime%60)).padStart(2,"0"),l=Math.floor(n.duration/60),h=String(Math.floor(n.duration%60)).padStart(2,"0");i.innerHTML=`
      <div class="floating-pip-container ${n.isOverlapping?"overlapping":""}" id="floatingPipBox">
        <!-- Video Stream Player Canvas / Video -->
        <div style="position:relative; width:100%; height:200px; background:#0A0B10; overflow:hidden;">
          <video 
            id="pipVideoTag" 
            class="pip-video-element" 
            src="${n.videoUrl}" 
            preload="metadata" 
            playsinline 
            ${n.loop?"loop":""}
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
              <span class="pip-title-text">${Le(n.videoTitle)}</span>
              <div class="pip-header-actions">
                <button class="pip-icon-btn" id="pipOverlapToggleBtn" title="Toggle Overlapping / Corner Dock">
                  ${d("layers","",12)}
                </button>
                <button class="pip-icon-btn" id="pipCloseBtn" title="Close PiP Window">
                  ${d("close","",12)}
                </button>
              </div>
            </div>

            <!-- Big Center Play/Pause Button -->
            <button class="pip-center-play-btn" id="pipCenterPlayBtn" title="Play/Pause (Space)">
              ${d(n.isPlaying?"pause":"play","",20)}
            </button>

            <!-- Bottom Controls Bar -->
            <div class="pip-bottom-controls">
              <input 
                type="range" 
                class="media-seek-slider" 
                id="pipSeekSlider" 
                min="0" 
                max="${n.duration}" 
                value="${n.currentTime}" 
              />

              <div class="pip-actions-row">
                <div style="display:flex; align-items:center; gap:8px;">
                  <button class="pip-icon-btn" id="pipPlayPauseBottomBtn" title="Play/Pause">
                    ${d(n.isPlaying?"pause":"play","",12)}
                  </button>
                  <button class="pip-icon-btn" id="pipMuteBtn" title="Mute/Unmute (M)">
                    ${d(n.isMuted?"volume-x":"volume-2","",12)}
                  </button>
                  <span style="font-size:10px; color:#fff; font-family:'JetBrains Mono';">${r}:${p} / ${l}:${h}</span>
                </div>

                <div style="display:flex; align-items:center; gap:4px;">
                  <span style="font-size:10px; color:#00F2FE; font-weight:700; background:rgba(0,242,254,0.15); padding:1px 5px; border-radius:3px;">
                    ${n.playbackSpeed}x
                  </span>
                  <button class="pip-icon-btn" id="pipFullscreenBtn" title="Fullscreen (F)">
                    ${d("maximize-2","",11)}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,s()}function s(){var l,h,c,u,b,g,v;const a=i.querySelector("#floatingPipBox");if(!a)return;const n=i.querySelector("#pipVideoTag"),r=i.querySelector("#pipCanvasFallback");n&&(n.muted=o.getState().media.isMuted,n.playbackRate=o.getState().media.playbackSpeed,o.getState().media.isPlaying?n.play().catch(()=>{r.style.display="flex"}):n.pause(),n.onerror=()=>{r.style.display="flex"});const p=()=>{a.classList.remove("autohide-inactive"),clearTimeout(e),o.getState().media.autoHideControls&&o.getState().media.isPlaying&&(e=setTimeout(()=>{a.classList.add("autohide-inactive")},2200))};a.addEventListener("mousemove",p),a.addEventListener("mouseenter",p),p(),(l=i.querySelector("#pipCenterPlayBtn"))==null||l.addEventListener("click",y=>{y.stopPropagation(),o.togglePlayPause()}),(h=i.querySelector("#pipPlayPauseBottomBtn"))==null||h.addEventListener("click",y=>{y.stopPropagation(),o.togglePlayPause()}),(c=i.querySelector("#pipCloseBtn"))==null||c.addEventListener("click",y=>{y.stopPropagation(),o.togglePip(!1)}),(u=i.querySelector("#pipOverlapToggleBtn"))==null||u.addEventListener("click",y=>{y.stopPropagation(),o.toggleOverlapping()}),(b=i.querySelector("#pipMuteBtn"))==null||b.addEventListener("click",y=>{y.stopPropagation(),o.toggleMediaMute()}),(g=i.querySelector("#pipSeekSlider"))==null||g.addEventListener("input",y=>{o.seekMedia(parseFloat(y.target.value)),n&&(n.currentTime=parseFloat(y.target.value))}),(v=i.querySelector("#pipFullscreenBtn"))==null||v.addEventListener("click",()=>{var y,f;document.fullscreenElement?(f=document.exitFullscreen)==null||f.call(document):(y=a.requestFullscreen)==null||y.call(a)})}o.subscribe((a,n)=>{["MEDIA_PIP_TOGGLED","MEDIA_PLAY_STATE_CHANGED","MEDIA_OVERLAPPING_TOGGLED","MEDIA_AUTOHIDE_TOGGLED","MEDIA_SPEED_CHANGED","MEDIA_VOLUME_CHANGED","MEDIA_MUTE_TOGGLED","MEDIA_TIME_SEEKED"].includes(n)&&t()}),t()}function Le(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function Fe(i){function e(){var r,p,l,h,c,u,b,g,v;const s=o.getState();if(s.activeModal!=="circuit"){i.style.display="none";return}i.style.display="flex";const a=s.superPvt||{},n=a.circuit||[];i.className="modal-backdrop",i.innerHTML=`
      <div class="modal-card circuit-modal-card" style="max-width: 680px; width: 100%;">
        <div class="modal-header" style="border-bottom: 1px solid rgba(127, 0, 255, 0.25);">
          <div class="modal-title-row">
            <span class="modal-icon" style="background: rgba(127, 0, 255, 0.2); color: #C084FC;">
              ${d("onion","",20)}
            </span>
            <div>
              <h2 class="modal-title">Tor Onion Circuit & Security Inspector</h2>
              <p class="modal-subtitle">Real-time multi-hop encrypted network topology & identity protection</p>
            </div>
          </div>
          <button class="modal-close-btn" id="closeCircuitModalBtn">${d("close","",14)}</button>
        </div>

        <div class="modal-body" style="gap: 20px;">
          <!-- Top Security Status Bar -->
          <div class="circuit-status-banner">
            <div class="status-badge-item">
              <span class="status-dot green"></span>
              <span>Anonymity: <strong>${a.anonymityScore||"100% Ultra Stealth"}</strong></span>
            </div>
            <div class="status-badge-item">
              <span class="status-dot cyan"></span>
              <span>Exit IP: <strong>${a.exitIp||"185.220.101.42"}</strong> (${W(a.exitCountry||"Zurich, Switzerland")})</span>
            </div>
            <div class="status-badge-item">
              <span class="status-dot purple"></span>
              <span>Circuit Latency: <strong>${a.circuitPing||"28ms"}</strong></span>
            </div>
          </div>

          <!-- Relays Diagram Node Flow -->
          <div class="relays-diagram-container">
            <div class="relay-card client">
              <div class="relay-badge origin">Origin</div>
              <div class="relay-icon">${d("home","",22)}</div>
              <div class="relay-name">Your Local Sandbox</div>
              <div class="relay-sub">Ephemeral RAM</div>
            </div>

            <div class="relay-arrow">
              <span class="arrow-line"></span>
              <span class="arrow-enc">AES-256</span>
            </div>

            <div class="relay-card">
              <div class="relay-badge guard">Guard Hop</div>
              <div class="relay-icon" style="color:#00F2FE;">${d("shield","",22)}</div>
              <div class="relay-name">${W(((r=n[0])==null?void 0:r.location)||"Frankfurt, Germany 🇩🇪")}</div>
              <div class="relay-sub">${((p=n[0])==null?void 0:p.ip)||"141.95.12.8"}</div>
              <div class="relay-ping">Ping: ${((l=n[0])==null?void 0:l.ping)||"14ms"}</div>
            </div>

            <div class="relay-arrow">
              <span class="arrow-line"></span>
              <span class="arrow-enc">Layer 2</span>
            </div>

            <div class="relay-card">
              <div class="relay-badge relay">Middle Relay</div>
              <div class="relay-icon" style="color:#A78BFA;">${d("circuit","",22)}</div>
              <div class="relay-name">${W(((h=n[1])==null?void 0:h.location)||"Amsterdam, Netherlands 🇳🇱")}</div>
              <div class="relay-sub">${((c=n[1])==null?void 0:c.ip)||"194.26.29.112"}</div>
              <div class="relay-ping">Ping: ${((u=n[1])==null?void 0:u.ping)||"21ms"}</div>
            </div>

            <div class="relay-arrow">
              <span class="arrow-line"></span>
              <span class="arrow-enc">Exit</span>
            </div>

            <div class="relay-card exit">
              <div class="relay-badge exit">Exit Gateway</div>
              <div class="relay-icon" style="color:#10B981;">${d("globe","",22)}</div>
              <div class="relay-name" style="color:#10B981; font-weight:700;">${W(((b=n[2])==null?void 0:b.location)||"Zurich, Switzerland 🇨🇭")}</div>
              <div class="relay-sub">${((g=n[2])==null?void 0:g.ip)||"185.220.101.42"}</div>
              <div class="relay-ping">Ping: ${((v=n[2])==null?void 0:v.ping)||"28ms"}</div>
            </div>
          </div>

          <!-- Active Protections Matrix -->
          <div class="protections-matrix">
            <div class="protection-row">
              <div class="prot-info">
                <span class="prot-title">🎭 FARBLE 2.0 Canvas & WebGL Farbling</span>
                <span class="prot-desc">Injects cryptographic pseudo-random noise into HTML5 Canvas readbacks to defeat browser fingerprinting.</span>
              </div>
              <span class="prot-badge active">ENFORCED</span>
            </div>

            <div class="protection-row">
              <div class="prot-info">
                <span class="prot-title">🛡️ WebRTC ICE & STUN Leak Isolation</span>
                <span class="prot-desc">Blocks direct peer-to-peer UDP queries that could reveal local or public ISP gateway addresses.</span>
              </div>
              <span class="prot-badge active">SHIELDED</span>
            </div>

            <div class="protection-row">
              <div class="prot-info">
                <span class="prot-title">🔒 DNS-over-HTTPS (DoH) Multi-Relay Resolution</span>
                <span class="prot-desc">All hostname queries are routed through encrypted Cloudflare/Quad9 DoH endpoints with zero logging.</span>
              </div>
              <span class="prot-badge active">ACTIVE</span>
            </div>

            <div class="protection-row">
              <div class="prot-info">
                <span class="prot-title">🚨 Ephemeral RAM Sandboxing & Panic Destruction</span>
                <span class="prot-desc">Destroy all active private cookies, socket states, and caches with 1 click.</span>
              </div>
              <span class="prot-badge ready">READY</span>
            </div>
          </div>
        </div>

        <div class="modal-footer" style="justify-content: space-between; border-top: 1px solid rgba(127, 0, 255, 0.25);">
          <button class="modal-btn" id="rotateIdentityModalBtn" style="background: linear-gradient(135deg, #7F00FF 0%, #00F2FE 100%); color:#fff; border:none;">
            ${d("refresh","",14)}
            <span>Rotate Tor Identity & New Circuit</span>
          </button>

          <div style="display:flex; gap:10px;">
            <button class="modal-btn" id="panicFromModalBtn" style="background: rgba(239,68,68,0.2); border: 1px solid rgba(239,68,68,0.4); color: #EF4444;">
              ${d("nuke","",14)}
              <span>🚨 Panic Nuke</span>
            </button>
            <button class="modal-btn secondary" id="closeCircuitModalBtn2">Done</button>
          </div>
        </div>
      </div>
    `,t()}function t(){var s,a,n,r;(s=i.querySelector("#closeCircuitModalBtn"))==null||s.addEventListener("click",()=>o.closeModal()),(a=i.querySelector("#closeCircuitModalBtn2"))==null||a.addEventListener("click",()=>o.closeModal()),(n=i.querySelector("#rotateIdentityModalBtn"))==null||n.addEventListener("click",()=>{o.refreshOnionIdentity(),ee("🧅 New Onion Circuit & Exit IP assigned!"),e()}),(r=i.querySelector("#panicFromModalBtn"))==null||r.addEventListener("click",()=>{o.closeModal(),o.panicNukeSession(),ee("🚨 Emergency Panic: RAM flushed and private tabs destroyed!")}),i.addEventListener("click",p=>{p.target===i&&o.closeModal()})}o.subscribe((s,a)=>{["MODAL_CHANGED","SUPER_PVT_UPDATED"].includes(a)&&e()}),e()}function W(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function ee(i){const e=document.createElement("div");e.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",e.innerText=i,document.body.appendChild(e),setTimeout(()=>e.remove(),2200)}const Ie=[{name:"Cyan Glow",hex:"#00F2FE"},{name:"Electric Violet",hex:"#7F00FF"},{name:"Emerald Green",hex:"#10B981"},{name:"Amber Gold",hex:"#F59E0B"},{name:"Ruby Crimson",hex:"#EF4444"},{name:"Hot Pink",hex:"#EC4899"},{name:"Deep Sky",hex:"#38BDF8"},{name:"Purple Lavender",hex:"#A855F7"}];function Ne(i){let e="#00F2FE";function t(){const a=o.getState();if(a.activeModal!=="tabGroup"){i.style.display="none";return}i.style.display="flex";const n=!!a.activeGroupEditing,r=n?o.getTabGroupById(a.activeGroupEditing):null,p=r?r.name:"Research 🔬";e=r?r.color:"#00F2FE",i.className="modal-backdrop",i.innerHTML=`
      <div class="modal-card" style="max-width: 480px; width: 100%;">
        <div class="modal-header">
          <div class="modal-title-row">
            <span class="modal-icon" style="background: rgba(0, 242, 254, 0.15); color: #00F2FE;">
              ${d("tab-group","",20)}
            </span>
            <div>
              <h2 class="modal-title">${n?"Edit Tab Group":"Create New Tab Group"}</h2>
              <p class="modal-subtitle">Organize and color-code your tabs for maximum focus</p>
            </div>
          </div>
          <button class="modal-close-btn" id="closeGroupModalBtn">${d("close","",14)}</button>
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
              value="${_e(p)}" 
              required
              autofocus
            />
          </div>

          <!-- Color Palette Picker -->
          <div class="form-group">
            <label class="form-label">Group Color Accent</label>
            <div class="group-color-picker-grid">
              ${Ie.map(l=>`
                <div 
                  class="color-swatch-item ${l.hex.toLowerCase()===e.toLowerCase()?"active":""}" 
                  data-color-hex="${l.hex}" 
                  style="background:${l.hex};"
                  title="${l.name}"
                >
                  ${l.hex.toLowerCase()===e.toLowerCase()?d("check","",14):""}
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Group Preview Pill -->
          <div class="form-group">
            <label class="form-label">Live Appearance Preview</label>
            <div class="group-preview-box">
              <div class="tab-group-header-pill preview-pill" id="groupPreviewPill" style="border-color:${e}; background:rgba(255,255,255,0.05); color:#fff; display:inline-flex; align-items:center; gap:8px; padding:5px 14px; border-radius:14px; font-size:12px; font-weight:700;">
                <span class="group-dot" id="previewDot" style="width:8px; height:8px; border-radius:50%; background:${e}; box-shadow:0 0 8px ${e};"></span>
                <span id="previewName">${Ge(p)}</span>
                <span style="opacity:0.6; font-size:10px; background:rgba(255,255,255,0.1); padding:1px 6px; border-radius:10px;">3 tabs</span>
              </div>
            </div>
          </div>

          <div class="modal-footer" style="padding:0; margin-top:8px; justify-content: ${n?"space-between":"flex-end"};">
            ${n?`
              <button type="button" class="modal-btn" id="deleteGroupFromModalBtn" style="background:rgba(239,68,68,0.2); border:1px solid rgba(239,68,68,0.4); color:#EF4444;">
                ${d("trash-2","",14)}
                <span>Delete Group</span>
              </button>
            `:""}

            <div style="display:flex; gap:10px;">
              <button type="button" class="modal-btn secondary" id="cancelGroupModalBtn">Cancel</button>
              <button type="submit" class="modal-btn primary" style="background: linear-gradient(135deg, #00F2FE 0%, #7F00FF 100%); color:#000; font-weight:700;">
                ${d("check","",14)}
                <span>${n?"Save Group":"Create Group"}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    `,s(n,r)}function s(a,n){var u,b,g;const r=i.querySelector("#tabGroupForm"),p=i.querySelector("#groupNameInput"),l=i.querySelector("#previewName"),h=i.querySelector("#previewDot"),c=i.querySelector("#groupPreviewPill");p==null||p.addEventListener("input",()=>{const v=p.value.trim()||"New Group";l&&(l.textContent=v)}),i.querySelectorAll("[data-color-hex]").forEach(v=>{v.addEventListener("click",()=>{e=v.dataset.colorHex,i.querySelectorAll("[data-color-hex]").forEach(y=>y.classList.remove("active")),v.classList.add("active"),h&&(h.style.background=e,h.style.boxShadow=`0 0 8px ${e}`),c&&(c.style.borderColor=e)})}),r==null||r.addEventListener("submit",v=>{v.preventDefault();const y=p.value.trim()||"New Group";if(a&&n)o.updateTabGroup(n.id,{name:y,color:e}),Y(`🏷️ Tab group "${y}" updated!`);else{const f=o.state.pendingTabForGroup||null;o.createTabGroup(y,e,f),o.state.pendingTabForGroup=null,Y(`📁 Created tab group "${y}"!`)}o.closeModal()}),(u=i.querySelector("#deleteGroupFromModalBtn"))==null||u.addEventListener("click",()=>{n&&(o.deleteTabGroup(n.id,!1),Y(`🗑️ Ungrouped "${n.name}"`),o.closeModal())}),(b=i.querySelector("#closeGroupModalBtn"))==null||b.addEventListener("click",()=>o.closeModal()),(g=i.querySelector("#cancelGroupModalBtn"))==null||g.addEventListener("click",()=>o.closeModal()),i.addEventListener("click",v=>{v.target===i&&o.closeModal()})}o.subscribe((a,n)=>{["MODAL_CHANGED"].includes(n)&&t()}),t()}function Ge(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function _e(i){return i?i.replace(/"/g,"&quot;"):""}function Y(i){const e=document.createElement("div");e.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",e.innerText=i,document.body.appendChild(e),setTimeout(()=>e.remove(),2200)}document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("app");i.innerHTML=`
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
    <div id="circuitModalContainer"></div>
    <div id="tabGroupModalContainer"></div>
  `,ce(document.getElementById("tabBarContainer")),pe(document.getElementById("addressBarContainer")),ue(document.getElementById("bookmarksBarContainer")),he(document.getElementById("ntpContainer")),ke(document.getElementById("searchContainer")),xe(document.getElementById("webViewerContainer")),Ee(document.getElementById("shieldsModalContainer")),Te(document.getElementById("settingsModalContainer")),Ae(document.getElementById("addShortcutModalContainer")),Be(document.getElementById("notesSidebarContainer")),Ce(document.getElementById("videoControlModalContainer")),De(document.getElementById("floatingPipContainer")),Fe(document.getElementById("circuitModalContainer")),Ne(document.getElementById("tabGroupModalContainer")),window.addEventListener("keydown",e=>{var r,p;const s=navigator.platform.toUpperCase().indexOf("MAC")>=0?e.metaKey:e.ctrlKey,a=document.activeElement,n=a&&(a.tagName==="INPUT"||a.tagName==="TEXTAREA");if(s&&e.shiftKey&&e.key.toLowerCase()==="n"){e.preventDefault();const l=o.getBrowserMode();o.setBrowserMode(l==="incognito"?"standard":"incognito");return}if(s&&e.shiftKey&&e.key.toLowerCase()==="p"){e.preventDefault();const l=o.getBrowserMode();o.setBrowserMode(l==="super-pvt"?"standard":"super-pvt");return}if(s&&e.shiftKey&&e.key.toLowerCase()==="g"){e.preventDefault(),o.openTabGroupModal(null);return}if(s&&!e.shiftKey&&e.key.toLowerCase()==="t"){e.preventDefault(),o.createTab();return}if(s&&!e.shiftKey&&e.key.toLowerCase()==="w"){e.preventDefault();const l=o.getActiveTab();l&&o.closeTab(l.id);return}if(s&&!e.shiftKey&&e.key.toLowerCase()==="l"){e.preventDefault();const l=document.getElementById("omniboxInput");l&&(l.focus(),l.select());return}if(s&&!e.shiftKey&&e.key.toLowerCase()==="n"){e.preventDefault(),o.toggleNotesSidebar();return}if(s&&!e.shiftKey&&e.key.toLowerCase()==="s"){e.preventDefault(),o.openModal("shields");return}if(e.key==="Escape"){o.closeModal();return}if(!n){if(e.code==="Space"||e.key.toLowerCase()==="k")e.preventDefault(),o.togglePlayPause();else if(e.key.toLowerCase()==="j"||e.key==="ArrowLeft")e.preventDefault(),o.skipMediaTime(-10);else if(e.key.toLowerCase()==="l"||e.key==="ArrowRight")e.preventDefault(),o.skipMediaTime(10);else if(e.key.toLowerCase()==="p")e.preventDefault(),o.togglePip();else if(e.key.toLowerCase()==="m")e.preventDefault(),o.toggleMediaMute();else if(e.key.toLowerCase()==="f"){e.preventDefault();const l=document.getElementById("floatingPipBox");l&&(document.fullscreenElement?(p=document.exitFullscreen)==null||p.call(document):(r=l.requestFullscreen)==null||r.call(l))}else if(e.key===">"){e.preventDefault();const l=o.getState().media.playbackSpeed,h=[.5,.75,1,1.25,1.5,2],c=Math.min(h.length-1,h.indexOf(l)+1);o.setPlaybackSpeed(h[c])}else if(e.key==="<"){e.preventDefault();const l=o.getState().media.playbackSpeed,h=[.5,.75,1,1.25,1.5,2],c=Math.max(0,h.indexOf(l)-1);o.setPlaybackSpeed(h[c])}}}),console.log("🎬 WebBuddy with Incognito, Tab Groups & Super Private Tor initialized successfully!")});
