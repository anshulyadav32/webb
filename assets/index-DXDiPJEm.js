(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=e(a);fetch(a.href,n)}})();const te=[{id:"aurora",name:"Arctic Aurora Borealis",author:"Vincent Guth",location:"Tromsø, Norway",url:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=2560&q=85",thumbnail:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=400&q=75"},{id:"fuji",name:"Mount Fuji Sunrise",author:"Tomek Baginski",location:"Honshu, Japan",url:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2560&q=85",thumbnail:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=75"},{id:"cosmic",name:"Orion Deep Nebula",author:"NASA Hubble",location:"Orion Constellation",url:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2560&q=85",thumbnail:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=75"},{id:"dolomites",name:"Dolomites Alpine Peak",author:"Luca Bravo",location:"South Tyrol, Italy",url:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2560&q=85",thumbnail:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=75"},{id:"cyberpunk",name:"Neo Tokyo Rain",author:"Aleksandar Pasaric",location:"Shinjuku, Tokyo",url:"https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=2560&q=85",thumbnail:"https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=75"}],se=[{id:"1",title:"YouTube",url:"https://youtube.com",icon:"youtube",color:"#FF0000"},{id:"2",title:"Reddit",url:"https://reddit.com",icon:"message-square",color:"#FF4500"},{id:"3",title:"GitHub",url:"https://github.com",icon:"github",color:"#24292e"},{id:"4",title:"X / Twitter",url:"https://x.com",icon:"twitter",color:"#000000"},{id:"5",title:"Wikipedia",url:"https://wikipedia.org",icon:"book-open",color:"#636466"},{id:"6",title:"Hacker News",url:"https://news.ycombinator.com",icon:"terminal",color:"#FF6600"}],ie=[{id:"b1",title:"WebBuddy Search",url:"brave://newtab",icon:"search"},{id:"b2",title:"GitHub",url:"https://github.com",icon:"github"},{id:"b3",title:"Hacker News",url:"https://news.ycombinator.com",icon:"terminal"},{id:"b4",title:"Wikipedia",url:"https://wikipedia.org",icon:"book-open"}],ae=[{id:"note-1",title:"Adblock & Filter Rule Syntax",content:"Common Adblock syntax:\n- `||doubleclick.net^` : Block domain & subdomains\n- `##.ad-banner` : Hide CSS element on all domains\n- `@@||example.com^$document` : Whitelist domain exception",createdAt:"Aug 20, 2026",updatedAt:"Just now",pinned:!0,url:"https://github.com/webbuddy/adblock-core",color:"#00F2FE"},{id:"note-2",title:"Web Privacy Checklist",content:`1. Keep EasyList and EasyPrivacy filter subscriptions active.
2. Enable Canvas FARBLE anti-fingerprinting.
3. Force HTTPS encryption.
4. Isolate third-party cookie jars.`,createdAt:"Aug 20, 2026",updatedAt:"2h ago",pinned:!1,url:"https://en.wikipedia.org/wiki/Ad_blocking",color:"#7F00FF"},{id:"note-3",title:"Interesting Tech Articles to Read",content:`- Sub-millisecond Rust packet filtering benchmarks
- WebAssembly SIMD hardware acceleration
- Post-Quantum TLS 1.3 Key Encapsulation`,createdAt:"Aug 19, 2026",updatedAt:"Yesterday",pinned:!1,url:"https://news.ycombinator.com",color:"#10B981"}],oe=[{id:"fl-easylist",name:"EasyList Primary Ad Blocker",rulesCount:78420,enabled:!0,lastUpdated:"Today"},{id:"fl-easyprivacy",name:"EasyPrivacy Tracker Shield",rulesCount:42190,enabled:!0,lastUpdated:"Today"},{id:"fl-ublock",name:"uBlock Network Filters",rulesCount:36800,enabled:!0,lastUpdated:"Today"},{id:"fl-fanboy",name:"Fanboy Annoyances & Cookie Banners",rulesCount:28540,enabled:!0,lastUpdated:"Yesterday"},{id:"fl-fingerprint",name:"WebBuddy Anti-Fingerprint FARBLE Engine",rulesCount:15300,enabled:!0,lastUpdated:"Today"}],R=[{id:"google",name:"Google",shortcut:":g",searchUrl:"https://www.google.com/search?q=%s",suggestUrl:"https://suggestqueries.google.com/complete/search?client=chrome&q=%s",icon:"google",color:"#4285F4",badgeColor:"#4285F4",isDefault:!0,isBuiltin:!0,description:"Default search engine • Fast & Comprehensive"},{id:"duckduckgo",name:"DuckDuckGo",shortcut:":ddg",searchUrl:"https://duckduckgo.com/?q=%s",suggestUrl:"",icon:"duckduckgo",color:"#DE5833",badgeColor:"#DE5833",isDefault:!1,isBuiltin:!0,description:"Privacy-focused search without user profiling"},{id:"bing",name:"Microsoft Bing",shortcut:":b",searchUrl:"https://www.bing.com/search?q=%s",suggestUrl:"",icon:"bing",color:"#008373",badgeColor:"#008373",isDefault:!1,isBuiltin:!0,description:"Microsoft intelligent search engine"},{id:"brave",name:"Brave Search",shortcut:":br",searchUrl:"https://search.brave.com/search?q=%s",suggestUrl:"",icon:"brave",color:"#FB542B",badgeColor:"#FB542B",isDefault:!1,isBuiltin:!0,description:"Independent index with anti-tracking privacy"},{id:"ecosia",name:"Ecosia",shortcut:":e",searchUrl:"https://www.ecosia.org/search?q=%s",suggestUrl:"",icon:"ecosia",color:"#008477",badgeColor:"#008477",isDefault:!1,isBuiltin:!0,description:"Green search engine that plants trees"},{id:"wikipedia",name:"Wikipedia",shortcut:":w",searchUrl:"https://en.wikipedia.org/wiki/Special:Search?search=%s",suggestUrl:"",icon:"book-open",color:"#636466",badgeColor:"#636466",isDefault:!1,isBuiltin:!0,description:"Direct search in Wikipedia encyclopedia"}],G={"google.com":{title:"Google Search",url:"https://www.google.com",domain:"google.com",favicon:"google",adsBlocked:7,trackersBlocked:14,content:`
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
    `}},ne={default:{organicResults:[{title:"WebBuddy Ad & Tracker Blocker: Clean, Fast & Private Browsing",url:"https://webbuddy.org",snippet:"WebBuddy automatically blocks third-party ads, tracking scripts, and surveillance cookies without slowing down your system."},{title:"How Native Ad Blocking Protects Web Privacy",url:"https://privacyguides.org/adblocking",snippet:"Detailed breakdown of filter lists, EasyList rules, network request interception, and anti-fingerprinting farbling."},{title:"Electronic Frontier Foundation (EFF) - Surveillance Tracker Defense",url:"https://eff.org",snippet:"Defending digital privacy and fighting against pervasive cross-site advertising networks."}]}};class re{constructor(){this.listeners=new Set;const t=this.loadFromStorage("webbuddy_top_sites",se),e=this.loadFromStorage("webbuddy_bookmarks",ie),s=this.loadFromStorage("webbuddy_saved_notes",ae),a=this.loadFromStorage("webbuddy_filter_lists",oe),n=this.loadFromStorage("webbuddy_search_engines",R),r=this.loadFromStorage("webbuddy_tab_groups",[{id:"group-work",name:"Work 💼",color:"#00F2FE",collapsed:!1,mode:"standard"},{id:"group-privacy",name:"Privacy & Tech 🛡️",color:"#7F00FF",collapsed:!1,mode:"standard"}]),c=this.loadFromStorage("webbuddy_settings",{showShieldsStats:!0,showTopSites:!0,showClock:!0,clockFormat:"12h",theme:"dark",blurWallpaper:!1,bookmarksBarVisible:!0,notesSidebarOpen:!1,defaultSearchEngine:"google"});this.state={browserMode:"standard",tabGroups:r,superPvt:{onionConnected:!0,exitCountry:"Zurich, Switzerland 🇨🇭",exitIp:"185.220.101.42",circuitPing:"28ms",anonymityScore:"100% Ultra Stealth",circuit:[{role:"Guard Node",location:"Frankfurt, Germany 🇩🇪",ip:"141.95.12.8",ping:"14ms",status:"Active (Layer 1 AES-256)"},{role:"Middle Relay",location:"Amsterdam, Netherlands 🇳🇱",ip:"194.26.29.112",ping:"21ms",status:"Active (Layer 2 AES-256)"},{role:"Exit Relay",location:"Zurich, Switzerland 🇨🇭",ip:"185.220.101.42",ping:"28ms",status:"Active (Layer 3 Decrypted Hop)"}],fingerprintDefense:"MAX (Farbling 2.0)",canvasNoise:!0,audioNoise:!0,webRtcLeakBlocked:!0,dnsOverHttps:!0,cookiesPurgedOnClose:!0},searchEngines:n,defaultSearchEngine:c.defaultSearchEngine||"google",tabs:[{id:"tab-1",title:"New Tab",url:"brave://newtab",type:"ntp",favicon:"shield",pinned:!1,active:!0,mode:"standard",groupId:null,adsBlockedCount:0,trackersBlockedCount:0,totalBlockedCount:0,history:["brave://newtab"],historyIndex:0,isLoading:!1}],activeTabId:"tab-1",wallpapers:te,activeWallpaperIndex:0,notes:s,isNotesSidebarOpen:c.notesSidebarOpen||!1,activeNoteId:s.length>0?s[0].id:null,shields:{shieldsEnabled:!0,adsBlockedTotal:5842,trackersBlockedTotal:12940,popupsBlockedTotal:342,bandwidthSavedMB:184.5,timeSavedMin:8.6,blockAds:!0,blockTrackers:!0,blockFingerprinting:!0,blockAnnoyances:!0,blockScripts:!1,upgradeHttps:!0,filterLists:a},topSites:t,bookmarks:e,media:{isPlaying:!1,isPipActive:!1,isOverlapping:!1,autoPip:!0,autoHideControls:!0,playbackSpeed:1,volume:.85,isMuted:!1,currentTime:38,duration:180,videoTitle:"WebBuddy Ad & Tracker Blocker: Sub-Millisecond Packet Filtering",videoUrl:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",adAutoskip:!0,loop:!1},activeModal:null,activeGroupEditing:null,settings:c}}loadFromStorage(t,e){try{const s=localStorage.getItem(t);return s?JSON.parse(s):e}catch{return e}}saveToStorage(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(s){console.warn("Storage save failed",s)}}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notify(t,e){for(const s of this.listeners)s(this.state,t,e)}getState(){return this.state}getBrowserMode(){return this.state.browserMode||"standard"}getVisibleTabs(){const t=this.state.browserMode||"standard";return this.state.tabs.filter(e=>(e.mode||"standard")===t)}getActiveTab(){const t=this.getVisibleTabs();return t.find(e=>e.id===this.state.activeTabId)||t[0]||this.state.tabs[0]}getTabGroups(){const t=this.state.browserMode||"standard";return this.state.tabGroups.filter(e=>(e.mode||"standard")===t)}getTabGroupById(t){return this.state.tabGroups.find(e=>e.id===t)}getActiveWallpaper(){return this.state.wallpapers[this.state.activeWallpaperIndex%this.state.wallpapers.length]}getTotalFilterRulesCount(){return this.state.shields.filterLists.filter(t=>t.enabled).reduce((t,e)=>t+e.rulesCount,0)}setBrowserMode(t){if(!["standard","incognito","super-pvt"].includes(t))return;this.state.browserMode=t;const e=this.state.tabs.filter(s=>(s.mode||"standard")===t);if(e.length===0){const s=t==="super-pvt",a=t==="incognito",n="tab-"+t+"-"+Date.now(),r={id:n,title:s?"Super Private Tab (Tor)":a?"Incognito Tab":"New Tab",url:"brave://newtab",type:"ntp",favicon:s?"onion":a?"mask":"shield",pinned:!1,active:!0,mode:t,groupId:null,adsBlockedCount:s?12:a?8:0,trackersBlockedCount:s?24:a?16:0,totalBlockedCount:s?36:a?24:0,history:["brave://newtab"],historyIndex:0,isLoading:!1};this.state.tabs.push(r),this.state.activeTabId=n}else{const s=e.find(a=>a.active)||e[0];this.state.tabs.forEach(a=>{a.active=a.id===s.id}),this.state.activeTabId=s.id}this.notify("BROWSER_MODE_CHANGED",t),this.notify("TAB_SWITCHED",this.getActiveTab())}createTab(t="brave://newtab",e="New Tab",s=null){const a=t==="brave://newtab",n="tab-"+Date.now(),r=this.state.browserMode||"standard",c=r==="super-pvt",l=r==="incognito",f=a?c?6:l?3:0:Math.floor(Math.random()*8)+3,h=a?c?14:l?8:0:Math.floor(Math.random()*12)+6;let p="globe";a&&(p=c?"onion":l?"mask":"shield");let v=e;a&&(v=c?"Super Private Tab":l?"Incognito Tab":"New Tab");const u={id:n,title:v,url:t,type:a?"ntp":this.resolveUrlType(t),favicon:p,pinned:!1,active:!0,mode:r,groupId:s,adsBlockedCount:f,trackersBlockedCount:h,totalBlockedCount:f+h,history:[t],historyIndex:0,isLoading:!1};this.state.tabs.forEach(g=>{(g.mode||"standard")===r&&(g.active=!1)}),this.state.tabs.push(u),this.state.activeTabId=n,a||this.incrementShieldStats(f,h),this.notify("TAB_CREATED",u)}switchTab(t){const e=this.state.tabs.find(s=>s.id===t);e&&(e.mode&&e.mode!==this.state.browserMode&&(this.state.browserMode=e.mode,this.notify("BROWSER_MODE_CHANGED",e.mode)),this.state.tabs.forEach(s=>s.active=s.id===t),this.state.activeTabId=t,this.notify("TAB_SWITCHED",e))}closeTab(t){this.state.browserMode;const e=this.getVisibleTabs();if(e.length===1&&e[0].id===t){this.navigateToUrl("brave://newtab");return}const s=this.state.tabs.findIndex(n=>n.id===t);if(s===-1)return;const a=this.state.tabs[s].active;if(this.state.tabs.splice(s,1),a){const n=this.getVisibleTabs();if(n.length>0){const r=n[Math.max(0,n.length-1)];r.active=!0,this.state.activeTabId=r.id}else this.createTab()}this.notify("TAB_CLOSED",{tabId:t,activeTabId:this.state.activeTabId})}togglePinTab(t){const e=this.state.tabs.find(s=>s.id===t);e&&(e.pinned=!e.pinned,this.state.tabs.sort((s,a)=>(a.pinned?1:0)-(s.pinned?1:0)),this.notify("TAB_PINNED",e))}duplicateTab(t){const e=this.state.tabs.find(s=>s.id===t);e&&this.createTab(e.url,e.title,e.groupId)}moveTabToMode(t,e){const s=this.state.tabs.find(a=>a.id===t);s&&(s.mode=e,s.groupId=null,this.setBrowserMode(e),this.switchTab(t))}createTabGroup(t="New Group",e="#00F2FE",s=null){const a=this.state.browserMode||"standard",n="group-"+Date.now(),r={id:n,name:t.trim()||"New Group",color:e||"#00F2FE",collapsed:!1,mode:a};if(this.state.tabGroups.push(r),s){const c=this.state.tabs.find(l=>l.id===s);c&&(c.groupId=n)}return this.saveToStorage("webbuddy_tab_groups",this.state.tabGroups),this.notify("TAB_GROUPS_UPDATED",this.state.tabGroups),r}updateTabGroup(t,e){const s=this.state.tabGroups.find(a=>a.id===t);s&&(e.name!==void 0&&(s.name=e.name.trim()||s.name),e.color!==void 0&&(s.color=e.color),e.collapsed!==void 0&&(s.collapsed=e.collapsed),this.saveToStorage("webbuddy_tab_groups",this.state.tabGroups),this.notify("TAB_GROUPS_UPDATED",this.state.tabGroups))}toggleGroupCollapse(t){const e=this.state.tabGroups.find(s=>s.id===t);e&&(e.collapsed=!e.collapsed,this.saveToStorage("webbuddy_tab_groups",this.state.tabGroups),this.notify("TAB_GROUPS_UPDATED",this.state.tabGroups))}deleteTabGroup(t,e=!1){const s=this.state.tabGroups.findIndex(a=>a.id===t);if(s!==-1){if(this.state.tabGroups.splice(s,1),e)if(this.state.tabs=this.state.tabs.filter(a=>a.groupId!==t),this.getVisibleTabs().length===0)this.createTab();else{const a=this.getActiveTab();a&&this.switchTab(a.id)}else this.state.tabs.forEach(a=>{a.groupId===t&&(a.groupId=null)});this.saveToStorage("webbuddy_tab_groups",this.state.tabGroups),this.notify("TAB_GROUPS_UPDATED",this.state.tabGroups),this.notify("TAB_CLOSED",{})}}addTabToGroup(t,e){const s=this.state.tabs.find(a=>a.id===t);s&&(s.groupId=e,this.notify("TAB_GROUPS_UPDATED",this.state.tabGroups))}removeTabFromGroup(t){const e=this.state.tabs.find(s=>s.id===t);e&&(e.groupId=null,this.notify("TAB_GROUPS_UPDATED",this.state.tabGroups))}refreshOnionIdentity(){const e=[...[{location:"Zurich, Switzerland 🇨🇭",ip:"185.220.101.42"},{location:"Reykjavik, Iceland 🇮🇸",ip:"185.246.188.67"},{location:"Stockholm, Sweden 🇸🇪",ip:"193.189.100.18"},{location:"Frankfurt, Germany 🇩🇪",ip:"141.95.12.8"},{location:"Amsterdam, Netherlands 🇳🇱",ip:"194.26.29.112"},{location:"Helsinki, Finland 🇫🇮",ip:"95.217.163.24"},{location:"Toronto, Canada 🇨🇦",ip:"198.98.51.109"},{location:"Singapore 🇸🇬",ip:"139.99.120.45"}]].sort(()=>.5-Math.random()),s=e[0],a=e[1],n=e[2],r=Math.floor(Math.random()*25)+18;this.state.superPvt={...this.state.superPvt,exitCountry:n.location,exitIp:n.ip,circuitPing:`${r}ms`,circuit:[{role:"Guard Node",location:s.location,ip:s.ip,ping:`${Math.floor(r*.4)}ms`,status:"Active (Layer 1 AES-256)"},{role:"Middle Relay",location:a.location,ip:a.ip,ping:`${Math.floor(r*.7)}ms`,status:"Active (Layer 2 AES-256)"},{role:"Exit Relay",location:n.location,ip:n.ip,ping:`${r}ms`,status:"Active (Layer 3 Decrypted Hop)"}]},this.notify("SUPER_PVT_UPDATED",this.state.superPvt)}panicNukeSession(){this.state.tabs=this.state.tabs.filter(e=>(e.mode||"standard")==="standard"),this.state.tabs.length===0&&this.createTab("brave://newtab","New Tab",null),this.state.browserMode="standard";const t=this.state.tabs[0];t.active=!0,this.state.activeTabId=t.id,this.refreshOnionIdentity(),this.notify("SESSION_NUKED",{message:"All private tabs, cookies & RAM caches destroyed."}),this.notify("BROWSER_MODE_CHANGED","standard"),this.notify("TAB_SWITCHED",t)}getDefaultSearchEngine(){const t=this.state.settings.defaultSearchEngine||this.state.defaultSearchEngine||"google";return this.state.searchEngines.find(e=>e.id===t)||this.state.searchEngines.find(e=>e.isDefault)||this.state.searchEngines[0]||R[0]}getSearchEngines(){return this.state.searchEngines}getSearchEngineById(t){return this.state.searchEngines.find(e=>e.id===t)}setDefaultSearchEngine(t){const e=this.state.searchEngines.find(s=>s.id===t);e&&(this.state.searchEngines.forEach(s=>{s.isDefault=s.id===t}),this.state.defaultSearchEngine=t,this.state.settings.defaultSearchEngine=t,this.saveToStorage("webbuddy_search_engines",this.state.searchEngines),this.saveToStorage("webbuddy_settings",this.state.settings),this.notify("SEARCH_ENGINE_CHANGED",e),this.notify("SEARCH_ENGINES_UPDATED",this.state.searchEngines),this.notify("SETTINGS_UPDATED",this.state.settings))}addSearchEngine({name:t,shortcut:e,searchUrl:s,icon:a="search"}){if(!t||!s)return null;let n=e?e.trim():"";n&&!n.startsWith(":")&&!n.startsWith("!")&&(n=":"+n);const c={id:"se-"+Date.now(),name:t.trim(),shortcut:n,searchUrl:s.trim(),suggestUrl:"",icon:a||"search",color:"#4FACFE",badgeColor:"#4FACFE",isDefault:!1,isBuiltin:!1,description:`Custom search engine (${t.trim()})`};return this.state.searchEngines.push(c),this.saveToStorage("webbuddy_search_engines",this.state.searchEngines),this.notify("SEARCH_ENGINES_UPDATED",this.state.searchEngines),c}updateSearchEngine(t,{name:e,shortcut:s,searchUrl:a}){const n=this.state.searchEngines.findIndex(c=>c.id===t);if(n===-1)return;let r=s?s.trim():"";r&&!r.startsWith(":")&&!r.startsWith("!")&&(r=":"+r),this.state.searchEngines[n]={...this.state.searchEngines[n],name:e.trim()||this.state.searchEngines[n].name,shortcut:r,searchUrl:a.trim()||this.state.searchEngines[n].searchUrl},this.saveToStorage("webbuddy_search_engines",this.state.searchEngines),this.notify("SEARCH_ENGINES_UPDATED",this.state.searchEngines)}deleteSearchEngine(t){const e=this.state.searchEngines.findIndex(a=>a.id===t);if(e===-1)return;const s=this.state.searchEngines[e].isDefault||this.state.defaultSearchEngine===t;if(this.state.searchEngines.splice(e,1),s){const a=this.state.searchEngines.find(n=>n.id==="google")||this.state.searchEngines[0];a&&this.setDefaultSearchEngine(a.id)}this.saveToStorage("webbuddy_search_engines",this.state.searchEngines),this.notify("SEARCH_ENGINES_UPDATED",this.state.searchEngines)}resetSearchEnginesToDefault(){this.state.searchEngines=JSON.parse(JSON.stringify(R)),this.state.defaultSearchEngine="google",this.state.settings.defaultSearchEngine="google",this.saveToStorage("webbuddy_search_engines",this.state.searchEngines),this.saveToStorage("webbuddy_settings",this.state.settings),this.notify("SEARCH_ENGINES_UPDATED",this.state.searchEngines),this.notify("SEARCH_ENGINE_CHANGED",this.getDefaultSearchEngine()),this.notify("SETTINGS_UPDATED",this.state.settings)}resolveSearchQuery(t){let e=t.trim(),s=this.getDefaultSearchEngine();const a=e.split(/\s+/);if(a.length>1){const r=a[0].toLowerCase(),c=this.state.searchEngines.find(l=>{if(!l.shortcut)return!1;const f=l.shortcut.toLowerCase();return f===r||f===":"+r||f==="!"+r||":"+f===r});c&&(s=c,e=a.slice(1).join(" "))}let n=s.searchUrl;return n.includes("%s")?n=n.replace("%s",encodeURIComponent(e)):n=n+(n.includes("?")?"&q=":"?q=")+encodeURIComponent(e),{engine:s,query:e,url:n}}resolveUrlType(t){const e=t.trim();return e==="brave://newtab"||e==="newtab"?"ntp":e.startsWith("brave://search")?"search":(!e.includes(".")&&!e.startsWith("http://")&&!e.startsWith("https://")&&!e.startsWith("brave://"),"web")}navigateToUrl(t){const e=this.getActiveTab();if(!e)return;let s=t.trim(),a="web",n="Web Page",r="globe";if(!s||s==="brave://newtab"||s==="newtab")s="brave://newtab",a="ntp",n="New Tab",r="shield";else if(s.startsWith("brave://search"))a="search",n=`${new URLSearchParams(s.split("?")[1]||"").get("q")||"Search"} - WebBuddy Search`,r="search";else if(!s.includes(".")&&!s.startsWith("http://")&&!s.startsWith("https://")&&!s.startsWith("brave://")){const c=this.resolveSearchQuery(s);a="web",n=`${c.query} - ${c.engine.name} Search`,s=c.url,r=c.engine.icon||"search"}else{!s.startsWith("http://")&&!s.startsWith("https://")&&(s="https://"+s);try{n=new URL(s).hostname.replace("www.",""),G[n]&&(n=G[n].title,r=G[n].favicon||"globe")}catch{n=s}}e.isLoading=!0,this.notify("TAB_LOADING",e),setTimeout(()=>{if(e.url=s,e.type=a,e.title=n,e.favicon=r,e.isLoading=!1,e.history[e.historyIndex]!==s&&(e.history=e.history.slice(0,e.historyIndex+1),e.history.push(s),e.historyIndex=e.history.length-1),a==="web"||a==="search"){const c=Math.floor(Math.random()*6)+2,l=Math.floor(Math.random()*10)+5;e.adsBlockedCount=c,e.trackersBlockedCount=l,e.totalBlockedCount=c+l,this.incrementShieldStats(c,l)}else e.adsBlockedCount=0,e.trackersBlockedCount=0,e.totalBlockedCount=0;this.notify("NAVIGATION_COMPLETE",e)},250)}goBack(){const t=this.getActiveTab();t&&t.historyIndex>0&&(t.historyIndex--,this.navigateToUrl(t.history[t.historyIndex]))}goForward(){const t=this.getActiveTab();t&&t.historyIndex<t.history.length-1&&(t.historyIndex++,this.navigateToUrl(t.history[t.historyIndex]))}reloadCurrentTab(){const t=this.getActiveTab();t&&this.navigateToUrl(t.url)}nextWallpaper(){this.state.activeWallpaperIndex=(this.state.activeWallpaperIndex+1)%this.state.wallpapers.length,this.notify("WALLPAPER_CHANGED",this.getActiveWallpaper())}selectWallpaper(t){t>=0&&t<this.state.wallpapers.length&&(this.state.activeWallpaperIndex=t,this.notify("WALLPAPER_CHANGED",this.getActiveWallpaper()))}toggleShields(){this.state.shields.shieldsEnabled=!this.state.shields.shieldsEnabled,this.notify("SHIELDS_TOGGLED",this.state.shields)}updateShieldOption(t,e){this.state.shields.hasOwnProperty(t)&&(this.state.shields[t]=e,this.notify("SHIELDS_OPTION_CHANGED",{key:t,value:e}))}toggleFilterList(t){const e=this.state.shields.filterLists.find(s=>s.id===t);e&&(e.enabled=!e.enabled,this.saveToStorage("webbuddy_filter_lists",this.state.shields.filterLists),this.notify("FILTER_LIST_TOGGLED",e))}incrementShieldStats(t=1,e=1){this.state.shields.shieldsEnabled&&(this.state.shields.adsBlockedTotal+=t,this.state.shields.trackersBlockedTotal+=e,this.state.shields.bandwidthSavedMB=parseFloat((this.state.shields.bandwidthSavedMB+(t+e)*.024).toFixed(1)),this.state.shields.timeSavedMin=parseFloat((this.state.shields.timeSavedMin+(t+e)*.002).toFixed(1)),this.notify("SHIELDS_STATS_UPDATED",this.state.shields))}addTopSite(t,e,s="globe"){const a={id:"site-"+Date.now(),title:t,url:e.startsWith("http")?e:"https://"+e,icon:s,color:"#00F2FE"};this.state.topSites.push(a),this.saveToStorage("webbuddy_top_sites",this.state.topSites),this.notify("TOP_SITES_UPDATED",this.state.topSites)}removeTopSite(t){this.state.topSites=this.state.topSites.filter(e=>e.id!==t),this.saveToStorage("webbuddy_top_sites",this.state.topSites),this.notify("TOP_SITES_UPDATED",this.state.topSites)}addBookmark(t,e){const s={id:"bm-"+Date.now(),title:t,url:e.startsWith("http")?e:"https://"+e,icon:"bookmark"};this.state.bookmarks.push(s),this.saveToStorage("webbuddy_bookmarks",this.state.bookmarks),this.notify("BOOKMARKS_UPDATED",this.state.bookmarks)}toggleNotesSidebar(t){this.state.isNotesSidebarOpen=t!==void 0?t:!this.state.isNotesSidebarOpen,this.state.settings.notesSidebarOpen=this.state.isNotesSidebarOpen,this.saveToStorage("webbuddy_settings",this.state.settings),this.notify("NOTES_SIDEBAR_TOGGLED",this.state.isNotesSidebarOpen)}selectNote(t){this.state.activeNoteId=t,this.notify("NOTE_SELECTED",t)}addNote(t="Untitled Note",e="",s="",a="#00F2FE"){const n={id:"note-"+Date.now(),title:t.trim()||"Untitled Note",content:e,url:s||(this.getActiveTab().type==="web"?this.getActiveTab().url:""),color:a,pinned:!1,createdAt:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),updatedAt:"Just now"};return this.state.notes.unshift(n),this.state.activeNoteId=n.id,this.saveToStorage("webbuddy_saved_notes",this.state.notes),this.notify("NOTE_ADDED",n),n}updateNote(t,e){const s=this.state.notes.find(a=>a.id===t);s&&(Object.assign(s,e,{updatedAt:"Just now"}),this.saveToStorage("webbuddy_saved_notes",this.state.notes),this.notify("NOTE_UPDATED",s))}deleteNote(t){this.state.notes=this.state.notes.filter(e=>e.id!==t),this.state.activeNoteId===t&&(this.state.activeNoteId=this.state.notes.length>0?this.state.notes[0].id:null),this.saveToStorage("webbuddy_saved_notes",this.state.notes),this.notify("NOTE_DELETED",t)}togglePinNote(t){const e=this.state.notes.find(s=>s.id===t);e&&(e.pinned=!e.pinned,this.state.notes.sort((s,a)=>(a.pinned?1:0)-(s.pinned?1:0)),this.saveToStorage("webbuddy_saved_notes",this.state.notes),this.notify("NOTE_UPDATED",e))}getNotesCapacityStats(){const e=JSON.stringify(this.state.notes||[]),s=new Blob([e]).size,a=(s/1024).toFixed(2),n=(s/(1024*1024)).toFixed(3),r=Math.min(100,parseFloat((s/5242880*100).toFixed(2)));return{usedBytes:s,usedKb:a,usedMb:n,maxBytes:5242880,maxMb:5,percentUsed:r,notesCount:this.state.notes.length,maxNotesLimit:500,remainingKb:((5242880-s)/1024).toFixed(1)}}exportNotesJson(){const t="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.state.notes,null,2)),e=document.createElement("a");e.setAttribute("href",t),e.setAttribute("download",`webbuddy_notes_backup_${Date.now()}.json`),e.click()}togglePlayPause(){this.state.media.isPlaying=!this.state.media.isPlaying,this.notify("MEDIA_PLAY_STATE_CHANGED",this.state.media.isPlaying)}togglePip(t){this.state.media.isPipActive=t!==void 0?t:!this.state.media.isPipActive,this.notify("MEDIA_PIP_TOGGLED",this.state.media.isPipActive)}toggleAutoPip(){this.state.media.autoPip=!this.state.media.autoPip,this.notify("MEDIA_AUTOPIP_TOGGLED",this.state.media.autoPip)}toggleOverlapping(t){this.state.media.isOverlapping=t!==void 0?t:!this.state.media.isOverlapping,this.notify("MEDIA_OVERLAPPING_TOGGLED",this.state.media.isOverlapping)}toggleAutoHideControls(){this.state.media.autoHideControls=!this.state.media.autoHideControls,this.notify("MEDIA_AUTOHIDE_TOGGLED",this.state.media.autoHideControls)}setPlaybackSpeed(t){this.state.media.playbackSpeed=t,this.notify("MEDIA_SPEED_CHANGED",t)}setMediaVolume(t){this.state.media.volume=Math.max(0,Math.min(1,t)),this.state.media.isMuted=this.state.media.volume===0,this.notify("MEDIA_VOLUME_CHANGED",this.state.media.volume)}toggleMediaMute(){this.state.media.isMuted=!this.state.media.isMuted,this.notify("MEDIA_MUTE_TOGGLED",this.state.media.isMuted)}seekMedia(t){this.state.media.currentTime=Math.max(0,Math.min(this.state.media.duration,t)),this.notify("MEDIA_TIME_SEEKED",this.state.media.currentTime)}skipMediaTime(t){this.seekMedia(this.state.media.currentTime+t)}toggleMediaLoop(){this.state.media.loop=!this.state.media.loop,this.notify("MEDIA_LOOP_TOGGLED",this.state.media.loop)}openModal(t){this.state.activeModal=this.state.activeModal===t?null:t,this.notify("MODAL_CHANGED",this.state.activeModal)}openTabGroupModal(t=null){this.state.activeGroupEditing=t,this.state.activeModal="tabGroup",this.notify("MODAL_CHANGED","tabGroup")}closeModal(){this.state.activeModal=null,this.state.activeGroupEditing=null,this.notify("MODAL_CHANGED",null)}updateSetting(t,e){this.state.settings[t]=e,this.saveToStorage("webbuddy_settings",this.state.settings),this.notify("SETTINGS_UPDATED",{key:t,val:e,settings:this.state.settings})}}const o=new re,le=`
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
`;function d(i,t="",e=16){const s=`icon ${t}`;switch(i){case"webbuddy-logo":return`<div class="${s} wb-logo-wrapper" style="width:${e}px; height:${e}px;">${le}</div>`;case"shield":case"shield-check":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`;case"sparkles":case"leo":case"ai":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>`;case"rewards":case"bat":case"triangle":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 20 2 20 12 2"></polygon></svg>`;case"wallet":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>`;case"search":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;case"plus":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;case"x":case"close":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;case"arrow-left":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`;case"arrow-right":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;case"rotate-cw":case"refresh":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>`;case"home":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;case"lock":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;case"star":case"bookmark":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;case"pin":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="17" x2="12" y2="22"></line><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path></svg>`;case"settings":case"sliders":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`;case"image":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`;case"chevron-down":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;case"chevron-up":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`;case"link":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;case"wifi":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`;case"bluetooth":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline></svg>`;case"globe":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;case"send":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;case"zap":case"bolt":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;case"coins":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>`;case"circle-dollar-sign":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>`;case"clock":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;case"check":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;case"copy":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;case"file-text":case"notes":case"notepad":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>`;case"trash":case"trash-2":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`;case"edit":case"pen":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`;case"download":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`;case"hard-drive":case"database":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;case"play":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;case"pause":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;case"pip":case"picture-in-picture":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><rect x="12" y="11" width="8" height="7" rx="1" fill="currentColor" fill-opacity="0.3"></rect></svg>`;case"skip-back":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>`;case"skip-forward":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>`;case"volume-2":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;case"volume-x":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;case"maximize-2":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`;case"repeat":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>`;case"layers":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`;case"puzzle":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.439 7.85c-.049-.322.059-.648.289-.878l1.568-1.568c.47-.47.704-1.096.704-1.704s-.234-1.234-.704-1.704a2.41 2.41 0 0 0-3.408 0l-1.568 1.568c-.23.23-.556.338-.878.289A5.003 5.003 0 0 0 10.5 4a5 5 0 0 0-4.945 4.095c-.049.322-.338.556-.66.605L3.327 8.989c-.61.092-1.157.433-1.523.948a2.406 2.406 0 0 0 .285 2.871l1.568 1.568c.23.23.338.556.289.878A5.003 5.003 0 0 0 4 20.5a5 5 0 0 0 4.095 4.945c.322.049.556-.23.605-.552l.289-1.568c.092-.61.433-1.157.948-1.523a2.406 2.406 0 0 1 2.871.285l1.568 1.568c.47.47 1.096.704 1.704.704s1.234-.234 1.704-.704a2.41 2.41 0 0 0 0-3.408l-1.568-1.568c-.23-.23-.338-.556-.289-.878A5.003 5.003 0 0 0 20.5 15.5a5 5 0 0 0 4.945-4.095c.049-.322-.23-.556-.552-.605l-1.568-.289c-.61-.092-1.157-.433-1.523-.948a2.406 2.406 0 0 1 .285-2.871z"></path></svg>`;case"menu":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;case"external-link":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;case"google":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>`;case"duckduckgo":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor"><path fill="#DE5833" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c4.686 0 8.57 3.37 9.4 7.82-1.3-.87-2.88-1.39-4.57-1.43l1.1-3.32c.1-.31-.07-.65-.38-.75-.31-.1-.65.07-.75.38l-1.18 3.55c-1.15-.02-2.31.11-3.41.4-1.16-.76-2.5-1.22-3.95-1.31l1.45-3.37c.13-.3-.02-.66-.32-.79-.3-.13-.66.02-.79.32L7.02 7.78C5.23 8.35 3.73 9.53 2.8 11.08 3.79 6.18 8.44 2.4 12 2.4zM6.9 11.2c.88 0 1.6.72 1.6 1.6s-.72 1.6-1.6 1.6-1.6-.72-1.6-1.6.72-1.6 1.6-1.6zm10.2 0c.88 0 1.6.72 1.6 1.6s-.72 1.6-1.6 1.6-1.6-.72-1.6-1.6.72-1.6 1.6-1.6zm-5.1 3.2c1.77 0 3.3.99 4.08 2.44-.45.31-1.02.5-1.63.5h-4.9c-.61 0-1.18-.19-1.63-.5.78-1.45 2.31-2.44 4.08-2.44z"/></svg>`;case"bing":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor"><path fill="#008373" d="M4 2v19.46l5.77 3.33 9.45-5.46v-6.38l-6.15 3.55v-7.8l-4.1 2.37V2H4zm4.97 4.95l4.1-2.37v5.27l-4.1 2.37V6.95z"/></svg>`;case"brave":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor"><path fill="#FB542B" d="M12 2L4 5.5v6.2c0 5.4 3.4 10.4 8 11.8 4.6-1.4 8-6.4 8-11.8V5.5L12 2zm0 3.3l5.5 2.4v4.5c0 3.9-2.4 7.5-5.5 8.6-3.1-1.1-5.5-4.7-5.5-8.6V7.7l5.5-2.4zm-2 5.2l-1.5 1.5 3.5 3.5 6-6-1.5-1.5-4.5 4.5-2-2z"/></svg>`;case"ecosia":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor"><path fill="#008477" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V19h-2v-.07C7.61 18.52 5 15.57 5 12c0-.34.03-.67.08-1 .6 2.83 3.08 5 6.07 5s5.47-2.17 6.07-5c.05.33.08.66.08 1 0 3.57-2.61 6.52-6.3 6.93zM12 5c2.76 0 5 2.24 5 5 0 .34-.03.67-.08 1-.6-2.83-3.08-5-6.07-5s-5.47 2.17-6.07 5c-.05-.33-.08-.66-.08-1 0-2.76 2.24-5 5-5z"/></svg>`;case"yahoo":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor"><path fill="#6001D2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.65 14.5h-2.3l.03-3.75-3.32-6.5h2.47l2.03 4.4 2-4.4h2.44l-3.35 6.5v3.75z"/></svg>`;case"search-engine":case"search-settings":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><path d="M11 8v6M8 11h6"></path></svg>`;case"check-circle":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;case"more-vertical":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>`;case"incognito":case"glasses":case"mask":case"spy":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 10s3-4 10-4 10 4 10 4"></path><path d="M2 10v1a5 5 0 0 0 5 5h1a5 5 0 0 0 4-2 5 5 0 0 0 4 2h1a5 5 0 0 0 5-5v-1"></path><circle cx="7" cy="14" r="3"></circle><circle cx="17" cy="14" r="3"></circle><path d="M10 14h4"></path><path d="M4 6h16"></path></svg>`;case"onion":case"tor":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.5 9 8 9.8V22h4v-.2c4.5-.8 8-4.8 8-9.8 0-5.5-4.5-10-10-10z"></path><path d="M12 6c-3.3 0-6 2.7-6 6 0 3.2 2.2 5.9 5.2 6.4"></path><path d="M12 9c-1.7 0-3 1.3-3 3 0 1.6 1.1 2.9 2.6 3"></path><circle cx="12" cy="12" r="1"></circle></svg>`;case"circuit":case"network":case"nodes":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>`;case"tab-group":case"folder-plus":case"group":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path><line x1="12" y1="10" x2="12" y2="16"></line><line x1="9" y1="13" x2="15" y2="13"></line></svg>`;case"palette":case"color":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>`;case"nuke":case"flame":case"panic":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`;case"eye-off":case"stealth":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" y1="2" x2="22" y2="22"></line></svg>`;case"fingerprint":return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path><path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"></path><path d="M17.29 21.02c.12-.6.14-1.2.07-1.83a8 8 0 0 0-.8-2.61"></path><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M14 13.12c0 2.38 0 4.38-.14 6.88"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>`;default:return`<svg class="${s}" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>`}}function de(i){let t=null;function e(){o.getState();const l=o.getBrowserMode(),f=o.getVisibleTabs(),h=o.getTabGroups(),p={},v=[];h.forEach(u=>{p[u.id]=[]}),f.forEach(u=>{u.groupId&&p[u.groupId]?p[u.groupId].push(u):v.push(u)}),i.innerHTML=`
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
          ${h.map(u=>{const g=p[u.id]||[],y=u.collapsed,b=g.some(k=>k.active);return`
              <div class="tab-group-container ${y?"collapsed":""}" data-group-id="${u.id}" style="--group-color: ${u.color};">
                <div class="tab-group-header-pill" data-toggle-collapse="${u.id}" title="${K(u.name)} (${g.length} tabs) • Click to ${y?"expand":"collapse"}">
                  <span class="group-dot" style="background: ${u.color}; box-shadow: 0 0 6px ${u.color};"></span>
                  <span class="group-name-label">${F(u.name)}</span>
                  <span class="group-count-badge">${g.length}</span>
                  <span class="group-arrow-icon">${d(y?"chevron-down":"chevron-up","",10)}</span>
                  <button class="group-menu-trigger-btn" data-group-menu="${u.id}" title="Group Options">
                    ${d("more-vertical","",11)}
                  </button>
                </div>

                <div class="tab-group-tabs ${y&&!b?"hidden-group-tabs":""}">
                  ${g.map(k=>s(k,u)).join("")}
                </div>
              </div>
            `}).join("")}

          <!-- Render Ungrouped Tabs -->
          ${v.map(u=>s(u,null)).join("")}

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
    `,a()}function s(l,f){const h=!!f,p=h?`border-bottom: 2px solid ${f.color};`:"";return`
      <div 
        class="browser-tab ${l.active?"active":""} ${l.pinned?"pinned":""} ${h?"grouped-tab":""}" 
        data-tab-id="${l.id}" 
        style="${p}"
        title="${K(l.title)}"
      >
        <div class="tab-favicon">
          ${d(l.favicon||"globe","",14)}
        </div>
        <span class="tab-title">${F(l.title)}</span>
        <button class="tab-close-btn" data-close-tab="${l.id}" title="Close Tab">
          ${d("close","",11)}
        </button>
      </div>
    `}function a(){var l,f,h;i.querySelectorAll("[data-set-mode]").forEach(p=>{p.addEventListener("click",()=>{const v=p.dataset.setMode;o.setBrowserMode(v)})}),(l=i.querySelector("#brandHomeBtn"))==null||l.addEventListener("click",()=>{o.navigateToUrl("brave://newtab")}),(f=i.querySelector("#newTabBtn"))==null||f.addEventListener("click",()=>{o.createTab()}),(h=i.querySelector("#newGroupBtn"))==null||h.addEventListener("click",()=>{o.openTabGroupModal(null)}),i.querySelectorAll("[data-toggle-collapse]").forEach(p=>{p.addEventListener("click",v=>{if(v.target.closest("[data-group-menu]"))return;const u=p.dataset.toggleCollapse;o.toggleGroupCollapse(u)})}),i.querySelectorAll("[data-group-menu]").forEach(p=>{p.addEventListener("click",v=>{v.stopPropagation();const u=p.dataset.groupMenu;r(u,p)})}),i.querySelectorAll(".browser-tab").forEach(p=>{p.addEventListener("click",v=>{if(v.target.closest("[data-close-tab]"))return;const u=p.dataset.tabId;o.switchTab(u)}),p.addEventListener("dblclick",v=>{v.preventDefault();const u=p.dataset.tabId;o.togglePinTab(u)}),p.addEventListener("contextmenu",v=>{v.preventDefault();const u=p.dataset.tabId;n(u,v.clientX,v.clientY)})}),i.querySelectorAll("[data-close-tab]").forEach(p=>{p.addEventListener("click",v=>{v.stopPropagation();const u=p.dataset.closeTab;o.closeTab(u)})})}function n(l,f,h){var E,m,x,S,C,I,_;c();const p=o.getState().tabs.find($=>$.id===l);if(!p)return;const v=i.querySelector("#tabContextMenu");if(!v)return;const u=o.getTabGroups(),g=p.groupId?o.getTabGroupById(p.groupId):null;v.innerHTML=`
      <div class="context-menu-header">
        <span class="context-menu-title">${F(p.title)}</span>
      </div>
      <div class="context-menu-divider"></div>

      <!-- Add to New Group -->
      <div class="context-menu-item" id="ctxAddToNewGroup">
        ${d("folder-plus","",14)}
        <span>Add Tab to New Group...</span>
      </div>

      <!-- Existing Groups Submenu -->
      ${u.length>0?`
        <div class="context-menu-submenu-item">
          <div class="submenu-label">
            ${d("tab-group","",14)}
            <span>Move to Group</span>
            <span style="margin-left:auto;">›</span>
          </div>
          <div class="context-submenu">
            ${u.map($=>`
              <div class="context-menu-item ${$.id===p.groupId?"active-group":""}" data-move-to-group="${$.id}">
                <span class="color-dot" style="background:${$.color};"></span>
                <span>${F($.name)}</span>
                ${$.id===p.groupId?'<span style="margin-left:auto;">✓</span>':""}
              </div>
            `).join("")}
          </div>
        </div>
      `:""}

      ${g?`
        <div class="context-menu-item" id="ctxRemoveFromGroup">
          ${d("x","",14)}
          <span>Remove from Group ("${F(g.name)}")</span>
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
        <span>${p.pinned?"Unpin Tab":"Pin Tab"}</span>
      </div>
      <div class="context-menu-item danger" id="ctxClose">
        ${d("close","",14)}
        <span>Close Tab</span>
      </div>
    `;const y=240,b=320,k=Math.min(f,window.innerWidth-y-10),w=Math.min(h,window.innerHeight-b-10);v.style.left=`${k}px`,v.style.top=`${w}px`,v.style.display="block",t=v,(E=v.querySelector("#ctxAddToNewGroup"))==null||E.addEventListener("click",()=>{c(),o.openTabGroupModal(null),o.state.pendingTabForGroup=l}),v.querySelectorAll("[data-move-to-group]").forEach($=>{$.addEventListener("click",()=>{const ee=$.dataset.moveToGroup;o.addTabToGroup(l,ee),c()})}),(m=v.querySelector("#ctxRemoveFromGroup"))==null||m.addEventListener("click",()=>{o.removeTabFromGroup(l),c()}),(x=v.querySelector("#ctxMoveIncognito"))==null||x.addEventListener("click",()=>{o.moveTabToMode(l,"incognito"),c()}),(S=v.querySelector("#ctxMoveSuperPvt"))==null||S.addEventListener("click",()=>{o.moveTabToMode(l,"super-pvt"),c()}),(C=v.querySelector("#ctxDuplicate"))==null||C.addEventListener("click",()=>{o.duplicateTab(l),c()}),(I=v.querySelector("#ctxPin"))==null||I.addEventListener("click",()=>{o.togglePinTab(l),c()}),(_=v.querySelector("#ctxClose"))==null||_.addEventListener("click",()=>{o.closeTab(l),c()})}function r(l,f){var u,g,y,b,k,w;c();const h=o.getTabGroupById(l);if(!h)return;const p=i.querySelector("#groupMenuPopover");if(!p)return;const v=f.getBoundingClientRect();p.innerHTML=`
      <div class="group-popover-header" style="border-left: 3px solid ${h.color};">
        <span class="group-popover-title">${F(h.name)}</span>
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
          ${d(h.collapsed?"chevron-down":"chevron-up","",14)}
          <span>${h.collapsed?"Expand Group":"Collapse Group"}</span>
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
    `,p.style.left=`${Math.min(v.left,window.innerWidth-220)}px`,p.style.top=`${v.bottom+6}px`,p.style.display="block",t=p,(u=p.querySelector("#popoverCloseBtn"))==null||u.addEventListener("click",()=>c()),(g=p.querySelector("#grpEditBtn"))==null||g.addEventListener("click",()=>{c(),o.openTabGroupModal(l)}),(y=p.querySelector("#grpNewTabBtn"))==null||y.addEventListener("click",()=>{c(),o.createTab("brave://newtab","New Tab",l)}),(b=p.querySelector("#grpToggleCollapseBtn"))==null||b.addEventListener("click",()=>{c(),o.toggleGroupCollapse(l)}),(k=p.querySelector("#grpUngroupBtn"))==null||k.addEventListener("click",()=>{c(),o.deleteTabGroup(l,!1)}),(w=p.querySelector("#grpCloseTabsBtn"))==null||w.addEventListener("click",()=>{c(),o.deleteTabGroup(l,!0)})}function c(){t&&(t.style.display="none",t=null)}document.addEventListener("click",l=>{!l.target.closest(".tab-context-menu")&&!l.target.closest(".group-menu-popover")&&!l.target.closest(".group-menu-trigger-btn")&&c()}),o.subscribe((l,f)=>{["TAB_CREATED","TAB_SWITCHED","TAB_CLOSED","TAB_PINNED","BROWSER_MODE_CHANGED","TAB_GROUPS_UPDATED","NAVIGATION_COMPLETE","SESSION_NUKED"].includes(f)&&e()}),e()}function F(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function K(i){return i?i.replace(/"/g,"&quot;"):""}function ce(i){function t(){var y,b,k,w,E,m,x,S;const a=o.getState(),n=o.getActiveTab(),c=n.type==="ntp"?"":n.url,l=a.shields.shieldsEnabled,f=n.totalBlockedCount||0,h=o.getDefaultSearchEngine(),p=o.getBrowserMode(),v=p==="incognito",u=p==="super-pvt",g=u?`Search anonymously through ${((y=a.superPvt)==null?void 0:y.exitCountry)||"Onion Circuit"}...`:v?"Search privately in Incognito (zero traces saved)...":`Search with ${D(h.name)} or enter website address...`;i.innerHTML=`
      <div class="browser-navbar ${p!=="standard"?"navbar-"+p:""}">
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
        ${v?`
          <div class="navbar-mode-pill incognito" title="Incognito Mode Active: Zero History & RAM Storage">
            ${d("mask","",14)}
            <span>Incognito</span>
          </div>
        `:""}

        ${u?`
          <button class="navbar-mode-pill super-pvt" id="circuitBadgeBtn" title="Tor Onion Circuit Active (${a.superPvt.exitCountry}) • Click to inspect relays">
            ${d("onion","",14)}
            <span>Tor: ${O(a.superPvt.exitCountry)}</span>
          </button>
        `:""}

        <div class="omnibox-wrapper">
          <div class="omnibox ${u?"omnibox-super-pvt":v?"omnibox-incognito":""}">
            <!-- WebBuddy Shields Ad & Tracker Blocker Badge -->
            <button class="shield-badge-btn ${l?"":"shields-down"}" id="shieldBadgeBtn" title="Ad & Tracker Blocker: ${l?"PROTECTED":"PAUSED"}">
              ${d("shield","",14)}
              <span>${l?`${f} Blocked`:"OFF"}</span>
            </button>

            <!-- Video Auto-PiP Overlay Button (Right near Ads Block) -->
            <button class="shield-badge-btn ${(b=a.media)!=null&&b.isPipActive?"":"shields-down"}" id="omniboxPipBtn" style="background:${(k=a.media)!=null&&k.isPipActive?"linear-gradient(135deg, #00F2FE 0%, #7F00FF 100%)":"#2C2F40"}; gap:4px;" title="Video Controls & Auto-PiP Overlay Feature">
              ${d("pip","",13)}
              <span>${(w=a.media)!=null&&w.isPipActive?"PiP Overlay ON":"Auto PiP"}</span>
            </button>

            <!-- Active Search Engine Indicator Badge -->
            <button class="shield-badge-btn" id="activeSearchEngineBadge" style="background:rgba(255,255,255,0.06); gap:5px; border-color:rgba(255,255,255,0.1);" title="Default Search Engine: ${D(h.name)} (Click to change)">
              ${d(h.icon||"search","",14)}
              <span style="color:var(--text-secondary); font-size:11px; font-weight:600;">${O(h.name)}</span>
            </button>

            <!-- URL / Search Input -->
            <input 
              type="text" 
              class="omnibox-input" 
              id="omniboxInput" 
              placeholder="${D(g)}" 
              value="${D(c)}"
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
          ${v||u?`
            <button class="action-pill-btn panic-btn" id="panicNukeBtn" title="🚨 EMERGENCY PANIC: Destroy all private tabs & wipe volatile RAM instantly">
              ${d("nuke","",14)}
              <span>Nuke Session</span>
            </button>
          `:""}

          <button class="action-pill-btn" id="adblockControlBtn" style="border-color:rgba(0,242,254,0.3); color:#00F2FE;" title="Adblocker & Filter Lists">
            ${d("shield-check","",14)}
            <span>Ad Blocker ON</span>
          </button>

          <button class="action-pill-btn" id="videoControlBtn" style="border-color:${(E=a.media)!=null&&E.isPipActive?"#00F2FE":"rgba(127,0,255,0.4)"}; color:${(m=a.media)!=null&&m.isPipActive?"#00F2FE":"#A78BFA"};" title="Control Video, Auto-PiP & Overlay">
            ${d((x=a.media)!=null&&x.isPlaying?"play":"pip","",14)}
            <span>${(S=a.media)!=null&&S.isPipActive?"PiP Active":"Auto PiP Overlay"}</span>
          </button>

          <button class="action-icon-btn" id="settingsMenuBtn" title="Settings & Search Engines">
            ${d("settings","",16)}
          </button>
        </div>
      </div>
    `,e()}function e(){var r,c,l,f,h,p,v,u,g,y,b,k,w,E;const a=i.querySelector("#omniboxInput"),n=i.querySelector("#omniboxDropdown");(r=i.querySelector("#notesSidebarToggleBtn"))==null||r.addEventListener("click",()=>{o.toggleNotesSidebar()}),(c=i.querySelector("#navBackBtn"))==null||c.addEventListener("click",()=>o.goBack()),(l=i.querySelector("#navForwardBtn"))==null||l.addEventListener("click",()=>o.goForward()),(f=i.querySelector("#navReloadBtn"))==null||f.addEventListener("click",()=>o.reloadCurrentTab()),(h=i.querySelector("#navHomeBtn"))==null||h.addEventListener("click",()=>o.navigateToUrl("brave://newtab")),(p=i.querySelector("#omniboxPipBtn"))==null||p.addEventListener("click",m=>{m.stopPropagation(),o.openModal("videoControls")}),(v=i.querySelector("#videoControlBtn"))==null||v.addEventListener("click",m=>{m.stopPropagation(),o.openModal("videoControls")}),(u=i.querySelector("#shieldBadgeBtn"))==null||u.addEventListener("click",m=>{m.stopPropagation(),o.openModal("shields")}),(g=i.querySelector("#adblockControlBtn"))==null||g.addEventListener("click",m=>{m.stopPropagation(),o.openModal("shields")}),(y=i.querySelector("#activeSearchEngineBadge"))==null||y.addEventListener("click",m=>{m.stopPropagation(),o.openModal("settings")}),(b=i.querySelector("#settingsMenuBtn"))==null||b.addEventListener("click",m=>{m.stopPropagation(),o.openModal("settings")}),(k=i.querySelector("#bookmarkBtn"))==null||k.addEventListener("click",()=>{const m=o.getActiveTab();m&&m.type!=="ntp"&&(o.addBookmark(m.title,m.url),U("⭐ Bookmark saved!"))}),(w=i.querySelector("#circuitBadgeBtn"))==null||w.addEventListener("click",m=>{m.stopPropagation(),o.openModal("circuit")}),(E=i.querySelector("#panicNukeBtn"))==null||E.addEventListener("click",m=>{m.stopPropagation(),o.panicNukeSession(),U("🚨 Emergency Panic: Private RAM purged and tabs destroyed!")}),a.addEventListener("focus",()=>{a.select(),s(a.value)}),a.addEventListener("input",()=>{s(a.value)}),a.addEventListener("keydown",m=>{if(m.key==="Enter"){const x=a.value.trim();x&&(n.style.display="none",o.navigateToUrl(x),a.blur())}else m.key==="Escape"&&(n.style.display="none")}),document.addEventListener("click",m=>{m.target.closest(".omnibox-wrapper")||(n.style.display="none")})}function s(a){var u;const n=i.querySelector("#omniboxDropdown"),r=a.trim();if(!r){n.style.display="none";return}const c=o.getDefaultSearchEngine(),l=o.getSearchEngines();let f=c,h=r;const p=r.split(/\s+/);if(p.length>0){const g=p[0].toLowerCase(),y=l.find(b=>b.shortcut&&(b.shortcut.toLowerCase()===g||b.shortcut.toLowerCase()===":"+g||b.shortcut.toLowerCase()==="!"+g));y&&(f=y,h=p.slice(1).join(" ")||r)}const v=[{text:r,desc:`Search with ${f.name} (Adblock Protected)`,type:"search",icon:f.icon||"search",action:r},{text:`https://${r}.com`,desc:"Open Website (Tracker Filtering Active)",type:"web",icon:"globe",action:`https://${r}.com`},{text:"Wikipedia: "+(h||r),desc:"Encyclopedia Reference",type:"web",icon:"book-open",action:":w "+(h||r)},{text:"GitHub: "+(h||r),desc:"Source Code & Repositories",type:"web",icon:"github",action:"https://github.com/search?q="+encodeURIComponent(h||r)}];n.innerHTML=`
      <div class="omnibox-suggestions-list">
        ${v.map(g=>`
          <div class="dropdown-item" data-action="${D(g.action)}">
            ${d(g.icon,"",14)}
            <span>${O(g.text)}</span>
            <span class="item-type">${g.desc}</span>
          </div>
        `).join("")}
      </div>

      <!-- Quick Search Engine Switcher Footer -->
      <div style="padding:8px 12px; background:rgba(0,0,0,0.3); border-top:1px solid var(--glass-border); display:flex; align-items:center; justify-content:space-between; font-size:11px;">
        <div style="display:flex; align-items:center; gap:6px; color:var(--text-secondary);">
          <span>Search with:</span>
          ${l.slice(0,4).map(g=>`
            <button class="quick-engine-chip ${g.id===c.id?"active":""}" data-switch-engine="${D(g.id)}" style="background:${g.id===c.id?"rgba(0,242,254,0.15)":"rgba(255,255,255,0.06)"}; border:1px solid ${g.id===c.id?"#00F2FE":"transparent"}; border-radius:4px; padding:2px 7px; color:${g.id===c.id?"#00F2FE":"#fff"}; cursor:pointer; font-size:11px; display:inline-flex; align-items:center; gap:4px;">
              ${d(g.icon||"search","",11)}
              <span>${O(g.name)}</span>
            </button>
          `).join("")}
        </div>
        <button id="manageEnginesDropdownBtn" style="color:#00F2FE; background:transparent; border:none; cursor:pointer; font-size:11px; font-weight:600;">
          ⚙️ Manage Engines
        </button>
      </div>
    `,n.style.display="block",n.querySelectorAll(".dropdown-item").forEach(g=>{g.addEventListener("click",()=>{const y=g.dataset.action;o.navigateToUrl(y),n.style.display="none"})}),n.querySelectorAll("[data-switch-engine]").forEach(g=>{g.addEventListener("click",y=>{y.stopPropagation();const b=g.dataset.switchEngine;o.setDefaultSearchEngine(b);const k=o.getSearchEngineById(b);U(`🔍 Search engine changed to ${k?k.name:"Google"}`),s(input.value)})}),(u=n.querySelector("#manageEnginesDropdownBtn"))==null||u.addEventListener("click",g=>{g.stopPropagation(),n.style.display="none",o.openModal("settings")})}o.subscribe((a,n)=>{["TAB_SWITCHED","NAVIGATION_COMPLETE","SHIELDS_TOGGLED","SHIELDS_STATS_UPDATED","SEARCH_ENGINE_CHANGED","SEARCH_ENGINES_UPDATED","BROWSER_MODE_CHANGED","SUPER_PVT_UPDATED","SESSION_NUKED"].includes(n)&&t()}),t()}function O(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function D(i){return i?i.replace(/"/g,"&quot;"):""}function U(i){const t=document.createElement("div");t.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",t.innerText=i,document.body.appendChild(t),setTimeout(()=>t.remove(),2200)}function pe(i){function t(){const e=o.getState();if(!e.settings.bookmarksBarVisible){i.style.display="none";return}i.style.display="flex",i.innerHTML=`
      <div class="bookmarks-bar">
        ${e.bookmarks.map(s=>`
          <button class="bookmark-item" data-url="${W(s.url)}" title="${W(s.title)} (${W(s.url)})">
            ${d(s.icon||"globe","",12)}
            <span>${ue(s.title)}</span>
          </button>
        `).join("")}
      </div>
    `,i.querySelectorAll(".bookmark-item").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.url;o.navigateToUrl(a)})})}o.subscribe((e,s)=>{["BOOKMARKS_UPDATED","SETTINGS_UPDATED"].includes(s)&&t()}),t()}function ue(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function W(i){return i?i.replace(/"/g,"&quot;"):""}function he(i){let t=null,e=!1;function s(){const p=o.getState();if(o.getActiveTab().type!=="ntp"){i.style.display="none";return}i.style.display="flex";const u=o.getBrowserMode();u==="incognito"?n():u==="super-pvt"?r(p):a(p)}function a(p,v){var w;const u=o.getActiveWallpaper(),g=p.settings.blurWallpaper,y=o.getTotalFilterRulesCount(),b=o.getDefaultSearchEngine(),k=o.getSearchEngines();i.style.backgroundImage=`url("${u.url}")`,i.className="ntp-container standard-ntp",i.innerHTML=`
      <div class="ntp-overlay ${g?"blurred":""}"></div>
      
      <div class="ntp-content" style="justify-content:center; gap:36px;">
        <!-- Center Section: Clock, Search, Adblock Stats, Top Sites -->
        <div class="ntp-center-section">
          <!-- Digital Clock & Greeting -->
          ${p.settings.showClock?`
            <div class="clock-container">
              <div class="digital-time" id="ntpClock">
                ${f(p.settings.clockFormat)}
              </div>
              <div class="greeting-text" id="ntpGreeting">
                ${h()}
              </div>
            </div>
          `:""}

          <!-- Center Private Search Bar with Search Engine Selector -->
          <div class="ntp-search-box" style="position:relative;">
            <form class="ntp-search-form" id="ntpSearchForm">
              <!-- Quick Search Engine Switcher Button -->
              <button type="button" class="ntp-engine-select-btn" id="ntpEngineSelectBtn" title="Default Engine: ${P(b.name)} (Click to switch or manage)">
                <span class="ntp-engine-icon">${d(b.icon||"search","",18)}</span>
                <span class="ntp-engine-label">${M(b.name)}</span>
                <span style="opacity:0.6; display:flex;">${d("chevron-down","",12)}</span>
              </button>

              <input 
                type="text" 
                class="ntp-search-input" 
                id="ntpSearchInput" 
                placeholder="Search with ${P(b.name)} privately or enter URL..."
                autocomplete="off"
              />
              <button type="submit" class="ntp-search-submit-btn" title="Search">
                ${d("search","",16)}
              </button>
            </form>

            <!-- Quick Engine Dropdown Menu -->
            <div class="ntp-engine-menu" id="ntpEngineMenu" style="display:${e?"block":"none"};">
              <div class="ntp-engine-menu-header">
                <span>Select Search Engine</span>
                <span style="font-size:10px; color:var(--text-muted);">Default: ${M(b.name)}</span>
              </div>
              <div class="ntp-engine-list">
                ${k.map(E=>`
                  <div class="ntp-engine-item ${E.id===b.id?"active":""}" data-ntp-engine="${P(E.id)}">
                    <span class="ntp-item-icon">${d(E.icon||"search","",16)}</span>
                    <span class="ntp-item-name">${M(E.name)}</span>
                    ${E.shortcut?`<span class="ntp-item-shortcut">${M(E.shortcut)}</span>`:""}
                    ${E.id===b.id?`<span class="ntp-item-check">${d("check","",14)}</span>`:""}
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
          ${p.settings.showShieldsStats?`
            <div class="shields-stats-card" style="max-width:880px;">
              <div class="shield-stat-item">
                <div class="shield-stat-icon" style="background:rgba(255,88,88,0.15); border-color:rgba(255,88,88,0.3); color:#FF5858;">
                  ${d("x","",20)}
                </div>
                <div class="shield-stat-info">
                  <span class="stat-value" id="adsCount">${p.shields.adsBlockedTotal.toLocaleString()}</span>
                  <span class="stat-label">Ads Blocked</span>
                </div>
              </div>

              <div class="stat-divider"></div>

              <div class="shield-stat-item">
                <div class="shield-stat-icon" style="background:rgba(0,242,254,0.15); border-color:rgba(0,242,254,0.3); color:#00F2FE;">
                  ${d("shield","",20)}
                </div>
                <div class="shield-stat-info">
                  <span class="stat-value" id="trackersCount">${p.shields.trackersBlockedTotal.toLocaleString()}</span>
                  <span class="stat-label">Trackers Blocked</span>
                </div>
              </div>

              <div class="stat-divider"></div>

              <div class="shield-stat-item">
                <div class="shield-stat-icon" style="background:rgba(16,185,129,0.15); border-color:rgba(16,185,129,0.3); color:#10B981;">
                  ${d("zap","",20)}
                </div>
                <div class="shield-stat-info">
                  <span class="stat-value" id="bandwidthSaved">${p.shields.bandwidthSavedMB} MB</span>
                  <span class="stat-label">Bandwidth Saved</span>
                </div>
              </div>

              <div class="stat-divider"></div>

              <div class="shield-stat-item">
                <div class="shield-stat-icon" style="background:rgba(127,0,255,0.15); border-color:rgba(127,0,255,0.3); color:#A78BFA;">
                  ${d("clock","",20)}
                </div>
                <div class="shield-stat-info">
                  <span class="stat-value" id="timeSaved">${p.shields.timeSavedMin} min</span>
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
                <span style="font-weight:700;">Auto PiP Overlay: <span style="color:#00F2FE;">${(w=p.media)!=null&&w.isPipActive?"ACTIVE":"READY"}</span></span>
              </div>
            </div>
          `:""}

          <!-- Top Sites / Shortcuts Grid -->
          ${p.settings.showTopSites?`
            <div class="top-sites-grid">
              ${p.topSites.map(E=>`
                <div class="top-site-tile" data-site-url="${P(E.url)}" title="${P(E.title)}">
                  <button class="delete-site-btn" data-delete-site="${E.id}" title="Remove Shortcut">
                    ${d("x","",10)}
                  </button>
                  <div class="site-icon-box" style="background:${E.color||"#232636"}">
                    ${d(E.icon||"globe","",20)}
                  </div>
                  <span class="site-title">${M(E.title)}</span>
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
            <span>📷 Photo by <strong>${M(u.author)}</strong> • ${M(u.location)}</span>
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
    `,c()}function n(p,v){var g,y;const u=o.getDefaultSearchEngine();i.style.backgroundImage="none",i.className="ntp-container incognito-ntp",i.innerHTML=`
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
              placeholder="Search in Incognito Mode with ${P(u.name)} or enter URL..."
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
    `,c(),(g=i.querySelector("#switchToTorBtn"))==null||g.addEventListener("click",()=>{o.setBrowserMode("super-pvt")}),(y=i.querySelector("#incognitoPanicBtn"))==null||y.addEventListener("click",()=>{o.panicNukeSession()})}function r(p,v){var y,b,k,w,E,m,x,S,C,I;o.getDefaultSearchEngine();const u=p.superPvt||{},g=u.circuit||[];i.style.backgroundImage="none",i.className="ntp-container super-pvt-ntp",i.innerHTML=`
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
              placeholder="Search onion & web anonymously (routed via ${P(u.exitCountry||"Tor")})..."
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
              <span style="color:#10B981; font-weight:700;">● ${u.anonymityScore||"100% Ultra Stealth"}</span>
              <span style="color:var(--text-muted);">Ping: ${u.circuitPing||"28ms"}</span>
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
                <span class="hop-role">${((y=g[0])==null?void 0:y.role)||"Guard Node"}</span>
                <span class="hop-location">${((b=g[0])==null?void 0:b.location)||"Frankfurt, Germany 🇩🇪"}</span>
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
                <span class="hop-role">${((k=g[1])==null?void 0:k.role)||"Middle Relay"}</span>
                <span class="hop-location">${((w=g[1])==null?void 0:w.location)||"Amsterdam, Netherlands 🇳🇱"}</span>
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
                <span class="hop-role">${((E=g[2])==null?void 0:E.role)||"Exit Relay"}</span>
                <span class="hop-location" style="color:#00F2FE; font-weight:700;">${((m=g[2])==null?void 0:m.location)||"Zurich, Switzerland 🇨🇭"}</span>
                <span class="hop-ip">IP: ${u.exitIp||"185.220.101.42"}</span>
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
    `,c(),(x=i.querySelector("#rerouteCircuitBtn"))==null||x.addEventListener("click",_=>{_.stopPropagation(),o.refreshOnionIdentity(),Y("🧅 Tor Identity Rotated: New relay circuit & exit IP established!"),s()}),(S=i.querySelector("#openCircuitModalBtn"))==null||S.addEventListener("click",()=>{o.openModal("circuit")}),(C=i.querySelector("#circuitRouteCard"))==null||C.addEventListener("click",()=>{o.openModal("circuit")}),(I=i.querySelector("#superPvtPanicBtn"))==null||I.addEventListener("click",()=>{o.panicNukeSession()})}function c(){var g,y,b,k,w,E;const p=i.querySelector("#ntpSearchForm"),v=i.querySelector("#ntpSearchInput");p==null||p.addEventListener("submit",m=>{m.preventDefault();const x=v.value.trim();x&&o.navigateToUrl(x)});const u=i.querySelector("#ntpEngineSelectBtn");u==null||u.addEventListener("click",m=>{m.stopPropagation(),e=!e,s()}),i.querySelectorAll("[data-ntp-engine]").forEach(m=>{m.addEventListener("click",x=>{x.stopPropagation();const S=m.dataset.ntpEngine;o.setDefaultSearchEngine(S);const C=o.getSearchEngineById(S);Y(`🔍 Default search engine set to ${C?C.name:"Google"}`),e=!1,s()})}),(g=i.querySelector("#ntpManageEnginesBtn"))==null||g.addEventListener("click",m=>{m.stopPropagation(),e=!1,o.openModal("settings")}),(y=i.querySelector("#openFilterListsBtn"))==null||y.addEventListener("click",()=>{o.openModal("shields")}),(b=i.querySelector("#dashboardPipControlBtn"))==null||b.addEventListener("click",()=>{o.openModal("videoControls")}),i.querySelectorAll("[data-site-url]").forEach(m=>{m.addEventListener("click",x=>{if(x.target.closest("[data-delete-site]"))return;const S=m.dataset.siteUrl;o.navigateToUrl(S)})}),i.querySelectorAll("[data-delete-site]").forEach(m=>{m.addEventListener("click",x=>{x.stopPropagation();const S=m.dataset.deleteSite;o.removeTopSite(S)})}),(k=i.querySelector("#addShortcutBtn"))==null||k.addEventListener("click",()=>{o.openModal("addShortcut")}),(w=i.querySelector("#nextWallpaperBtn"))==null||w.addEventListener("click",()=>{o.nextWallpaper()}),(E=i.querySelector("#customizeDashboardBtn"))==null||E.addEventListener("click",()=>{o.openModal("settings")})}function l(){t&&clearInterval(t),t=setInterval(()=>{const p=i.querySelector("#ntpClock"),v=i.querySelector("#ntpGreeting"),u=o.getState();p&&u.settings.showClock&&(p.textContent=f(u.settings.clockFormat)),v&&u.settings.showClock&&(v.textContent=h())},1e3)}function f(p="12h"){const v=new Date;let u=v.getHours();const g=String(v.getMinutes()).padStart(2,"0"),y=String(v.getSeconds()).padStart(2,"0");if(p==="12h"){const b=u>=12?"PM":"AM";return u=u%12,u=u||12,`${u}:${g} ${b}`}return`${String(u).padStart(2,"0")}:${g}:${y}`}function h(){const p=new Date().getHours(),v=o.getBrowserMode();return v==="super-pvt"?"Super Private Onion Terminal • 100% Encrypted":v==="incognito"?"Incognito Private Space • No History Saved":p<12?"Good Morning, WebBuddy Explorer":p<18?"Good Afternoon, WebBuddy Explorer":"Good Evening, WebBuddy Explorer"}o.subscribe((p,v)=>{["TAB_SWITCHED","WALLPAPER_CHANGED","SETTINGS_UPDATED","TOP_SITES_UPDATED","SHIELDS_STATS_UPDATED","SEARCH_ENGINE_CHANGED","SEARCH_ENGINES_UPDATED","BROWSER_MODE_CHANGED","SUPER_PVT_UPDATED","SESSION_NUKED","MEDIA_PIP_TOGGLED"].includes(v)&&s()}),s(),l()}function M(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function P(i){return i?i.replace(/"/g,"&quot;"):""}function Y(i){const t=document.createElement("div");t.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",t.innerText=i,document.body.appendChild(t),setTimeout(()=>t.remove(),2200)}function ge(i){function t(){const s=o.getActiveTab();if(s.type!=="search"){i.style.display="none";return}i.style.display="flex";let a="ad blocking";try{s.url.includes("?q=")?a=decodeURIComponent(s.url.split("?q=")[1].split("&")[0]):a=s.title.replace(" - WebBuddy Search","")}catch{a="search"}const n=ne.default;i.className="search-view-container",i.innerHTML=`
      <div class="search-view-header">
        <div class="search-logo-link" id="searchLogoHome">
          ${d("webbuddy-logo","",28)}
          <span>WebBuddy <span style="font-weight:400; color:var(--text-secondary);">Search</span></span>
        </div>

        <form class="search-page-input-form" id="searchPageForm">
          <input type="text" class="search-page-input" id="searchPageInput" value="${J(a)}" />
          <button type="submit" style="color:#00F2FE;">
            ${d("search","",16)}
          </button>
        </form>
      </div>

      <div class="search-filter-tabs">
        <button class="search-filter-tab active">${d("search","",12)} All Results</button>
        <button class="search-filter-tab">${d("image","",12)} Images</button>
        <button class="search-filter-tab">${d("video","",12)} Videos</button>
      </div>

      <div class="search-results-layout">
        <div class="search-results-main">
          <!-- Privacy Shield Active Notification -->
          <div style="display:flex; align-items:center; gap:8px; padding:10px 14px; background:rgba(0,242,254,0.06); border:1px solid rgba(0,242,254,0.2); border-radius:8px; font-size:12px; color:var(--text-secondary);">
            ${d("shield-check","",16)}
            <span><strong>Tracker-Free Search:</strong> No search query logs, no profiling, and zero sponsored tracking pixels.</span>
          </div>

          <!-- Organic Search Results -->
          ${n.organicResults.map(r=>`
            <div class="search-result-item">
              <div class="result-cite">
                ${d("globe","",12)}
                <span>${j(r.url)}</span>
              </div>
              <h3 class="result-title" data-visit-url="${J(r.url)}">${j(r.title)}</h3>
              <p class="result-snippet">${j(r.snippet)}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `,e()}function e(){var n;(n=i.querySelector("#searchLogoHome"))==null||n.addEventListener("click",()=>{o.navigateToUrl("brave://newtab")});const s=i.querySelector("#searchPageForm"),a=i.querySelector("#searchPageInput");s==null||s.addEventListener("submit",r=>{r.preventDefault();const c=a.value.trim();c&&o.navigateToUrl(c)}),i.querySelectorAll("[data-visit-url]").forEach(r=>{r.addEventListener("click",()=>{const c=r.dataset.visitUrl;o.navigateToUrl(c)})})}o.subscribe((s,a)=>{["TAB_SWITCHED","NAVIGATION_COMPLETE"].includes(a)&&t()}),t()}function j(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function J(i){return i?i.replace(/"/g,"&quot;"):""}function ve(i){function t(){const s=o.getActiveTab();if(s.type!=="web"){i.style.display="none";return}i.style.display="flex";let a="google.com",n="";try{const l=new URL(s.url);a=l.hostname.replace("www.",""),n=l.searchParams.get("q")||l.searchParams.get("query")||l.searchParams.get("search")||""}catch{a="google.com"}const r=s.totalBlockedCount||s.adsBlockedCount+s.trackersBlockedCount||8;let c=null;if(a.includes("google.com")||s.url.includes("google.com")){const l=n||"WebBuddy Adblock & Privacy Protection";c={title:`${l} - Google Search`,url:s.url,domain:"google.com",trackersBlocked:7,content:`
          <div class="google-container">
            <header class="google-header">
              <div class="google-logo-row">
                <span class="g-blue">G</span><span class="g-red">o</span><span class="g-yellow">o</span><span class="g-blue">g</span><span class="g-green">l</span><span class="g-red">e</span>
              </div>
              <form class="google-search-bar-mock" id="googleSearchForm">
                <input type="text" class="google-input-mock" id="googleSearchInput" value="${be(l)}" />
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
                  ${d("globe","",12)}
                  <span>https://webbuddy.org › search › ${encodeURIComponent(l)}</span>
                </div>
                <a href="https://webbuddy.org" class="g-title">${T(l)} — WebBuddy Private Browsing & Shields</a>
                <p class="g-snippet">WebBuddy automatically stops third-party ads, invisible trackers, fingerprinting scripts, and cryptominers with sub-millisecond network filtering.</p>
              </div>

              <div class="google-result-card">
                <div class="g-cite">
                  ${d("book-open","",12)}
                  <span>https://en.wikipedia.org › wiki › ${encodeURIComponent(l)}</span>
                </div>
                <a href="https://wikipedia.org" class="g-title">${T(l)} - Wikipedia, the free encyclopedia</a>
                <p class="g-snippet">Explore comprehensive encyclopedia references, technical documentation, history, and peer-reviewed articles regarding ${T(l)}.</p>
              </div>

              <div class="google-result-card">
                <div class="g-cite">
                  ${d("github","",12)}
                  <span>https://github.com › search › ${encodeURIComponent(l)}</span>
                </div>
                <a href="https://github.com" class="g-title">GitHub Repositories and Open Source: ${T(l)}</a>
                <p class="g-snippet">Explore trending source code, high-performance implementations, and developer discussions related to ${T(l)}.</p>
              </div>

              <div class="google-result-card">
                <div class="g-cite">
                  ${d("terminal","",12)}
                  <span>https://news.ycombinator.com › ${encodeURIComponent(l)}</span>
                </div>
                <a href="https://news.ycombinator.com" class="g-title">Hacker News Discussion: Breakthroughs in ${T(l)}</a>
                <p class="g-snippet">Top engineering comments, benchmarks, and community discussions on Hacker News.</p>
              </div>
            </div>
          </div>
        `}}else for(const l of Object.keys(G))if(a.includes(l)||s.url.includes(l)){c=G[l];break}c||(c={title:s.title||a,url:s.url,domain:a,trackersBlocked:6,content:`
          <div style="background:#181A26; border-radius:12px; border:1px solid rgba(255,255,255,0.08); padding:36px; text-align:center;">
            <div style="font-size:42px; margin-bottom:16px;">🌐</div>
            <h2 style="font-size:24px; margin-bottom:10px;">${T(s.title||a)}</h2>
            <p style="color:var(--text-secondary); max-width:500px; margin:0 auto 24px; line-height:1.6;">
              Connected securely to <code>${T(s.url)}</code> via WebBuddy Privacy Tunnel with HTTPS upgrading enabled.
            </p>
            <div style="display:inline-flex; gap:12px; background:rgba(255,255,255,0.04); padding:12px 20px; border-radius:8px; border:1px solid rgba(255,255,255,0.06); font-size:13px;">
              <span>🛡️ <strong>${r} trackers blocked</strong></span>
              <span>🔒 <strong>TLS 1.3 Encrypted</strong></span>
            </div>
          </div>
        `}),i.className="web-viewer-container",i.innerHTML=`
      <div class="web-viewer-banner">
        <div class="shields-active-indicator">
          <div class="shields-pulse-dot"></div>
          <span>WebBuddy Shields Active • ${r} ad networks & trackers blocked on ${T(c.domain||a)}</span>
        </div>
        <div style="color:var(--text-muted); font-size:11px;">
          Protected by Sub-Millisecond Network Filtering & Farbling
        </div>
      </div>

      <div class="web-viewer-content">
        ${c.content}
      </div>
    `,e()}function e(){i.querySelectorAll("a").forEach(n=>{n.addEventListener("click",r=>{r.preventDefault();const c=n.getAttribute("href");c&&c!=="#"&&o.navigateToUrl(c)})});const s=i.querySelector("#googleSearchForm"),a=i.querySelector("#googleSearchInput");s==null||s.addEventListener("submit",n=>{n.preventDefault();const r=a==null?void 0:a.value.trim();r&&o.navigateToUrl(r)})}o.subscribe((s,a)=>{["TAB_SWITCHED","NAVIGATION_COMPLETE","SHIELDS_STATS_UPDATED"].includes(a)&&t()}),t()}function T(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function be(i){return i.replace(/"/g,"&quot;")}function ye(i){let t="controls";function e(){const a=o.getState();if(a.activeModal!=="shields"){i.innerHTML="";return}const n=o.getActiveTab(),r=a.shields.shieldsEnabled,c=n.adsBlockedCount||0,l=n.trackersBlockedCount||0,f=fe(n.url),h=a.shields.filterLists;i.innerHTML=`
      <div class="popover-container shields-popover" id="shieldsPopover" style="width: 420px; left: 50px;">
        <div class="shields-popover-header" style="background: linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(127, 0, 255, 0.15) 100%);">
          <div class="shields-header-brand">
            <div class="shields-header-icon" style="background: linear-gradient(135deg, #00F2FE 0%, #7F00FF 100%);">
              ${d("shield","",18)}
            </div>
            <div>
              <div class="shields-header-title">Ad & Tracker Blocker</div>
              <div class="shields-header-sub">${Z(f)}</div>
            </div>
          </div>

          <label class="toggle-switch" title="Toggle Ad & Tracker Blocker for this site">
            <input type="checkbox" id="masterShieldsToggle" ${r?"checked":""}>
            <span class="toggle-slider"></span>
          </label>
        </div>

        <!-- Navigation Tabs inside Shields Popover -->
        <div style="display:flex; background:rgba(0,0,0,0.25); border-bottom:1px solid var(--glass-border);">
          <button class="shield-nav-tab ${t==="controls"?"active":""}" id="tabControlsBtn" style="flex:1; padding:9px; font-size:12px; font-weight:600; color:${t==="controls"?"#00F2FE":"var(--text-secondary)"}; border-bottom:2px solid ${t==="controls"?"#00F2FE":"transparent"};">
            Site Protection
          </button>
          <button class="shield-nav-tab ${t==="filters"?"active":""}" id="tabFiltersBtn" style="flex:1; padding:9px; font-size:12px; font-weight:600; color:${t==="filters"?"#00F2FE":"var(--text-secondary)"}; border-bottom:2px solid ${t==="filters"?"#00F2FE":"transparent"};">
            Filter Lists (${h.filter(p=>p.enabled).length}/${h.length})
          </button>
        </div>

        <div class="shields-popover-body">
          ${t==="controls"?`
            <!-- Live Status Highlight -->
            <div class="shields-stat-highlight" style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="color:#FF5858;">${d("x","",16)}</div>
                <div>
                  <div style="font-size:18px; font-weight:800; font-family:'JetBrains Mono'; color:#FF5858;">${r?c:0}</div>
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
                ${h.map(p=>`
                  <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:8px;">
                    <div>
                      <div style="font-size:12.5px; font-weight:600; color:#fff;">${Z(p.name)}</div>
                      <div style="font-size:11px; color:var(--text-muted);">${p.rulesCount.toLocaleString()} rules • Updated ${p.lastUpdated}</div>
                    </div>
                    <label class="toggle-switch">
                      <input type="checkbox" data-filter-id="${p.id}" ${p.enabled?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>
                `).join("")}
              </div>
            </div>
          `}
        </div>
      </div>
    `,s()}function s(){var r,c,l,f;const a=i.querySelector("#shieldsPopover");if(!a)return;(r=a.querySelector("#tabControlsBtn"))==null||r.addEventListener("click",()=>{t="controls",e()}),(c=a.querySelector("#tabFiltersBtn"))==null||c.addEventListener("click",()=>{t="filters",e()}),(l=a.querySelector("#masterShieldsToggle"))==null||l.addEventListener("change",()=>{o.toggleShields()}),a.querySelectorAll("[data-shield-opt]").forEach(h=>{h.addEventListener("change",()=>{const p=h.dataset.shieldOpt;o.updateShieldOption(p,h.checked)})}),a.querySelectorAll("[data-filter-id]").forEach(h=>{h.addEventListener("change",()=>{const p=h.dataset.filterId;o.toggleFilterList(p)})}),(f=a.querySelector("#updateFiltersBtn"))==null||f.addEventListener("click",()=>{me("⚡ All 5 Adblock filter lists updated to latest version!")});const n=h=>{!h.target.closest("#shieldsPopover")&&!h.target.closest("#shieldBadgeBtn")&&!h.target.closest("#adblockControlBtn")&&!h.target.closest("#openFilterListsBtn")&&(o.closeModal(),document.removeEventListener("click",n))};setTimeout(()=>document.addEventListener("click",n),10)}o.subscribe((a,n)=>{["MODAL_CHANGED","SHIELDS_TOGGLED","SHIELDS_OPTION_CHANGED","FILTER_LIST_TOGGLED"].includes(n)&&e()}),e()}function fe(i){if(!i||i.startsWith("brave://"))return"WebBuddy Private Browser";try{return new URL(i).hostname}catch{return i}}function Z(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function me(i){const t=document.createElement("div");t.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",t.innerText=i,document.body.appendChild(t),setTimeout(()=>t.remove(),2200)}function ke(i){let t="search",e=!1,s=null;function a(){const r=o.getState();if(r.activeModal!=="settings"){i.innerHTML="";return}const c=r.settings,l=o.getSearchEngines(),f=o.getDefaultSearchEngine();i.innerHTML=`
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
            <button class="settings-tab-btn ${t==="search"?"active":""}" data-tab="search">
              ${d("search","",15)}
              <span>Search Engines</span>
            </button>
            <button class="settings-tab-btn ${t==="shields"?"active":""}" data-tab="shields">
              ${d("shield","",15)}
              <span>Shields & Privacy</span>
            </button>
            <button class="settings-tab-btn ${t==="appearance"?"active":""}" data-tab="appearance">
              ${d("sliders","",15)}
              <span>Appearance</span>
            </button>
          </div>

          <div class="modal-body">
            <!-- TAB 1: Search Engines Manager -->
            ${t==="search"?`
              <div class="search-manager-section">
                <!-- Section 1: Default Search Engine Selector -->
                <div>
                  <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
                    <div>
                      <h4 style="font-size:14px; font-weight:700; color:#fff; margin-bottom:2px;">Default Search Engine</h4>
                      <p style="font-size:12px; color:var(--text-secondary);">The search engine used when searching from the address bar or new tab page.</p>
                    </div>
                    <span class="engine-tag-default">Active: ${B(f.name)}</span>
                  </div>

                  <div class="search-engine-selector-grid">
                    ${l.map(h=>{const p=h.id===f.id;return`
                        <div class="search-engine-card ${p?"active":""}" data-set-default="${A(h.id)}" title="Click to set ${B(h.name)} as default">
                          <div class="search-engine-icon-box">
                            ${d(h.icon||"search","",18)}
                          </div>
                          <div class="search-engine-info">
                            <div class="search-engine-name">${B(h.name)}</div>
                            <div class="search-engine-shortcut-hint">${B(h.shortcut||"No prefix")}</div>
                          </div>
                          ${p?'<span class="active-default-pill">DEFAULT</span>':""}
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
                  ${e?`
                    <div class="add-engine-card" id="addEngineCard">
                      <div class="add-engine-header">
                        <span>${s?"Edit Search Engine":"Add Custom Search Engine"}</span>
                        <button class="btn-engine-icon" id="cancelAddEngineBtn">${d("close","",12)}</button>
                      </div>
                      
                      <div class="add-engine-grid">
                        <div class="form-group">
                          <label class="form-label">Search Engine Name *</label>
                          <input type="text" class="form-input" id="engineNameInput" placeholder="e.g. YouTube, GitHub" value="${A((s==null?void 0:s.name)||"")}" />
                        </div>
                        <div class="form-group">
                          <label class="form-label">Shortcut / Keyword (optional)</label>
                          <input type="text" class="form-input" id="engineShortcutInput" placeholder="e.g. :yt, :gh, !r" value="${A((s==null?void 0:s.shortcut)||"")}" />
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="form-label">URL with %s in place of query *</label>
                        <input type="text" class="form-input" id="engineUrlInput" placeholder="e.g. https://www.youtube.com/results?search_query=%s" value="${A((s==null?void 0:s.searchUrl)||"")}" />
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
                    ${l.map(h=>{const p=h.id===f.id;return`
                        <div class="engine-row">
                          <div class="engine-row-left">
                            <div class="engine-avatar">
                              ${d(h.icon||"search","",16)}
                            </div>
                            <div class="engine-details">
                              <div class="engine-details-title-row">
                                <span class="engine-title">${B(h.name)}</span>
                                ${p?'<span class="engine-tag-default">Default</span>':""}
                                ${h.isBuiltin?"":'<span class="engine-tag-custom">Custom</span>'}
                              </div>
                              <div class="engine-subtext" title="${A(h.searchUrl)}">
                                <code>${B(h.searchUrl)}</code>
                              </div>
                            </div>
                          </div>

                          <div style="display:flex; align-items:center; gap:10px;">
                            ${h.shortcut?`<span class="engine-shortcut-badge" title="Type ${A(h.shortcut)} in address bar to search">${B(h.shortcut)}</span>`:""}
                            
                            <div class="engine-row-actions">
                              ${p?"":`
                                <button class="btn-make-default" data-set-default="${A(h.id)}" title="Make default">
                                  Make Default
                                </button>
                              `}
                              
                              <button class="btn-engine-icon" data-edit-engine="${A(h.id)}" title="Edit search engine">
                                ${d("edit","",13)}
                              </button>

                              ${(!h.isBuiltin||l.length>1)&&!p?`
                                <button class="btn-engine-icon delete" data-delete-engine="${A(h.id)}" title="Delete search engine">
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
            ${t==="shields"?`
              <div>
                <h4 style="font-size:13px; font-weight:700; color:var(--text-secondary); margin-bottom:12px;">Visible Dashboard Widgets</h4>
                <div class="shields-controls-list">
                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${d("shield","",14)}
                      <span>Ad & Tracker Blocker Metrics Card</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="showShieldsStats" ${c.showShieldsStats?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>

                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${d("clock","",14)}
                      <span>Digital Clock & Greeting</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="showClock" ${c.showClock?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>

                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${d("zap","",14)}
                      <span>Top Sites & Shortcuts Grid</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="showTopSites" ${c.showTopSites?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>

                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${d("star","",14)}
                      <span>Show Bookmarks Bar</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="bookmarksBarVisible" ${c.bookmarksBarVisible?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            `:""}

            <!-- TAB 3: Appearance & Wallpapers -->
            ${t==="appearance"?`
              <div style="display:flex; flex-direction:column; gap:16px;">
                <div class="shields-controls-list">
                  <div class="shield-control-row">
                    <span class="shield-control-label">
                      ${d("image","",14)}
                      <span>Blur Background Wallpaper on Dashboard</span>
                    </span>
                    <label class="toggle-switch">
                      <input type="checkbox" data-setting="blurWallpaper" ${c.blurWallpaper?"checked":""}>
                      <span class="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 style="font-size:13px; font-weight:700; color:var(--text-secondary); margin-bottom:10px;">Background Wallpaper</h4>
                  <div class="wallpaper-gallery-grid">
                    ${r.wallpapers.map((h,p)=>`
                      <div class="wallpaper-thumb ${r.activeWallpaperIndex===p?"selected":""}" data-wallpaper-index="${p}">
                        <img src="${h.thumbnail||h.url}" alt="${B(h.name)}" loading="lazy" />
                        <div class="wallpaper-thumb-label">${B(h.name)}</div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </div>
            `:""}
          </div>
        </div>
      </div>
    `,n()}function n(){var c,l,f,h,p,v;const r=i.querySelector("#settingsOverlay");r&&((c=r.querySelector("#closeSettingsBtn"))==null||c.addEventListener("click",()=>{e=!1,s=null,o.closeModal()}),r.addEventListener("click",u=>{u.target===r&&(e=!1,s=null,o.closeModal())}),r.querySelectorAll(".settings-tab-btn").forEach(u=>{u.addEventListener("click",()=>{t=u.dataset.tab,e=!1,s=null,a()})}),r.querySelectorAll("[data-set-default]").forEach(u=>{u.addEventListener("click",g=>{g.stopPropagation();const y=u.dataset.setDefault;o.setDefaultSearchEngine(y);const b=o.getSearchEngineById(y);L(`🔍 Default search engine set to ${b?b.name:"Google"}`),a()})}),(l=r.querySelector("#openAddEngineBtn"))==null||l.addEventListener("click",()=>{var u;e=!0,s=null,a(),(u=r.querySelector("#engineNameInput"))==null||u.focus()}),(f=r.querySelector("#cancelAddEngineBtn"))==null||f.addEventListener("click",()=>{e=!1,s=null,a()}),(h=r.querySelector("#cancelAddEngineBtn2"))==null||h.addEventListener("click",()=>{e=!1,s=null,a()}),(p=r.querySelector("#resetEnginesBtn"))==null||p.addEventListener("click",()=>{confirm("Reset search engines to default settings (Google as default)?")&&(o.resetSearchEnginesToDefault(),L("✓ Search engines reset to defaults"),a())}),(v=r.querySelector("#saveEngineBtn"))==null||v.addEventListener("click",()=>{const u=r.querySelector("#engineNameInput"),g=r.querySelector("#engineShortcutInput"),y=r.querySelector("#engineUrlInput"),b=u==null?void 0:u.value.trim(),k=g==null?void 0:g.value.trim(),w=y==null?void 0:y.value.trim();if(!b){u==null||u.focus(),L("⚠️ Please enter a search engine name");return}if(!w||!w.includes("%s")){y==null||y.focus(),L("⚠️ URL must include %s for the search query parameter");return}s?(o.updateSearchEngine(s.id,{name:b,shortcut:k,searchUrl:w}),L(`✓ Updated ${b} search engine`)):(o.addSearchEngine({name:b,shortcut:k,searchUrl:w}),L(`✓ Added ${b} to search engines`)),e=!1,s=null,a()}),r.querySelectorAll("[data-edit-engine]").forEach(u=>{u.addEventListener("click",g=>{var k;g.stopPropagation();const y=u.dataset.editEngine,b=o.getSearchEngineById(y);b&&(s=b,e=!0,a(),(k=r.querySelector("#engineNameInput"))==null||k.focus())})}),r.querySelectorAll("[data-delete-engine]").forEach(u=>{u.addEventListener("click",g=>{g.stopPropagation();const y=u.dataset.deleteEngine,b=o.getSearchEngineById(y);confirm(`Remove "${b?b.name:"this search engine"}"?`)&&(o.deleteSearchEngine(y),L("🗑️ Search engine removed"),a())})}),r.querySelectorAll("[data-setting]").forEach(u=>{u.addEventListener("change",()=>{const g=u.dataset.setting;o.updateSetting(g,u.checked)})}),r.querySelectorAll("[data-wallpaper-index]").forEach(u=>{u.addEventListener("click",()=>{const g=parseInt(u.dataset.wallpaperIndex,10);o.selectWallpaper(g),a()})}))}o.subscribe((r,c)=>{["MODAL_CHANGED","SETTINGS_UPDATED","WALLPAPER_CHANGED","SEARCH_ENGINES_UPDATED","SEARCH_ENGINE_CHANGED"].includes(c)&&a()}),a()}function B(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function A(i){return i?i.replace(/"/g,"&quot;"):""}function L(i){const t=document.createElement("div");t.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",t.innerText=i,document.body.appendChild(t),setTimeout(()=>t.remove(),2400)}function we(i){function t(){if(o.getState().activeModal!=="addShortcut"){i.innerHTML="";return}i.innerHTML=`
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
    `,e()}function e(){var n;const s=i.querySelector("#addShortcutOverlay");if(!s)return;(n=s.querySelector("#closeAddShortcutBtn"))==null||n.addEventListener("click",()=>{o.closeModal()}),s.addEventListener("click",r=>{r.target===s&&o.closeModal()});const a=s.querySelector("#addShortcutForm");a==null||a.addEventListener("submit",r=>{r.preventDefault();const c=s.querySelector("#shortcutNameInput").value.trim(),l=s.querySelector("#shortcutUrlInput").value.trim();c&&l&&(o.addTopSite(c,l),o.closeModal())})}o.subscribe((s,a)=>{["MODAL_CHANGED"].includes(a)&&t()}),t()}function Ee(i){let t="",e="list";function s(){const n=o.getState(),r=n.isNotesSidebarOpen,c=o.getNotesCapacityStats(),l=n.notes.find(h=>h.id===n.activeNoteId)||n.notes[0];i.className=`notes-sidebar ${r?"open":""}`;const f=n.notes.filter(h=>{const p=t.toLowerCase();return h.title.toLowerCase().includes(p)||h.content.toLowerCase().includes(p)});i.innerHTML=`
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
          value="${X(t)}"
        />
      </div>

      <!-- Main Content: List or Editor -->
      ${e==="list"?`
        <div class="notes-list-container">
          ${f.length===0?`
            <div style="text-align:center; padding:30px 10px; color:var(--text-muted); font-size:12px;">
              ${t?"No matching notes found.":'No notes saved yet. Click "+ New Note" to create one!'}
            </div>
          `:f.map(h=>`
            <div class="note-card ${h.id===n.activeNoteId?"active":""}" data-note-id="${h.id}">
              <div class="note-card-top">
                <div style="display:flex; align-items:center; gap:6px;">
                  <span class="note-color-dot" style="background:${h.color||"#00F2FE"};"></span>
                  <span class="note-card-title">${H(h.title)}</span>
                </div>
                <div style="display:flex; align-items:center; gap:4px;">
                  <button class="action-icon-btn" style="width:20px; height:20px;" data-pin-note="${h.id}" title="${h.pinned?"Unpin":"Pin to top"}">
                    ${d("pin",h.pinned?"note-pin-indicator":"",12)}
                  </button>
                  <button class="action-icon-btn" style="width:20px; height:20px; color:var(--text-muted);" data-delete-note="${h.id}" title="Delete Note">
                    ${d("trash","",12)}
                  </button>
                </div>
              </div>

              <div class="note-card-snippet">
                ${H(h.content||"Empty note...")}
              </div>

              <div class="note-card-meta">
                <span>${h.updatedAt||h.createdAt}</span>
                ${h.url?`<span style="color:#00F2FE; display:flex; align-items:center; gap:2px;">${d("link","",10)} Attached Link</span>`:""}
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
              ${["#00F2FE","#7F00FF","#10B981","#FF5858","#FFBD2E"].map(h=>`
                <span class="color-picker-dot" data-set-color="${h}" style="width:12px; height:12px; border-radius:50%; background:${h}; cursor:pointer; border:1px solid ${l&&l.color===h?"#fff":"transparent"};"></span>
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
              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:260px;">${H(l.url)}</span>
              <button id="openAttachedUrlBtn" style="margin-left:auto; color:#00F2FE; font-weight:600;">Open →</button>
            </div>
          `:""}

          <textarea 
            class="editor-textarea" 
            id="editorContentInput" 
            placeholder="Type your notes, ideas, code snippets, or research here..."
          >${H(l?l.content:"")}</textarea>

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
            ${c.usedKb} KB / ${c.maxMb}.0 MB (${c.percentUsed}%)
          </span>
        </div>

        <div class="capacity-progress-track">
          <div class="capacity-progress-fill" style="width: ${Math.max(1,c.percentUsed)}%;"></div>
        </div>

        <div class="capacity-subtext">
          <span>${c.notesCount} / ${c.maxNotesLimit} max notes</span>
          <span class="export-notes-link" id="exportNotesBtn" title="Download backup of all saved notes">
            ${d("download","",11)} Export Backup
          </span>
        </div>
      </div>
    `,a()}function a(){var f,h,p,v,u,g,y;(f=i.querySelector("#closeNotesSidebarBtn"))==null||f.addEventListener("click",()=>{o.toggleNotesSidebar(!1)}),(h=i.querySelector("#createNewNoteBtn"))==null||h.addEventListener("click",()=>{o.addNote("New Note",""),e="editor",s(),setTimeout(()=>{const b=i.querySelector("#editorTitleInput");b&&(b.focus(),b.select())},50)}),(p=i.querySelector("#clipCurrentPageBtn"))==null||p.addEventListener("click",()=>{const b=o.getActiveTab(),k=b.type==="web"?`Clip: ${b.title}`:"Page Note",w=b.type==="web"?b.url:"",E=`Captured from: ${w}

Key takeaways:
- `;o.addNote(k,E,w),Q("📎 Webpage clipped to your Notes!"),e="list",s()});const n=i.querySelector("#notesSearchInput");n==null||n.addEventListener("input",b=>{t=b.target.value,s()}),i.querySelectorAll(".note-card").forEach(b=>{b.addEventListener("click",k=>{if(k.target.closest("[data-pin-note]")||k.target.closest("[data-delete-note]"))return;const w=b.dataset.noteId;o.selectNote(w),e="editor",s()})}),i.querySelectorAll("[data-pin-note]").forEach(b=>{b.addEventListener("click",k=>{k.stopPropagation();const w=b.dataset.pinNote;o.togglePinNote(w)})}),i.querySelectorAll("[data-delete-note]").forEach(b=>{b.addEventListener("click",k=>{k.stopPropagation();const w=b.dataset.deleteNote;o.deleteNote(w)})}),(v=i.querySelector("#backToListBtn"))==null||v.addEventListener("click",()=>{e="list",s()});const r=i.querySelector("#editorTitleInput"),c=i.querySelector("#editorContentInput"),l=o.getState().activeNoteId;r==null||r.addEventListener("input",()=>{o.updateNote(l,{title:r.value})}),c==null||c.addEventListener("input",()=>{o.updateNote(l,{content:c.value})}),i.querySelectorAll("[data-set-color]").forEach(b=>{b.addEventListener("click",()=>{const k=b.dataset.setColor;o.updateNote(l,{color:k}),s()})}),(u=i.querySelector("#openAttachedUrlBtn"))==null||u.addEventListener("click",()=>{const b=o.getState().notes.find(k=>k.id===l);b&&b.url&&o.navigateToUrl(b.url)}),(g=i.querySelector("#deleteCurrentNoteBtn"))==null||g.addEventListener("click",()=>{o.deleteNote(l),e="list",s()}),(y=i.querySelector("#exportNotesBtn"))==null||y.addEventListener("click",()=>{o.exportNotesJson(),Q("📥 Notes backup exported successfully!")})}o.subscribe((n,r)=>{["NOTES_SIDEBAR_TOGGLED","NOTE_ADDED","NOTE_UPDATED","NOTE_DELETED","NOTE_SELECTED"].includes(r)&&s()}),s()}function H(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function X(i){return i?i.replace(/"/g,"&quot;"):""}function Q(i){const t=document.createElement("div");t.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",t.innerText=i,document.body.appendChild(t),setTimeout(()=>t.remove(),2200)}function xe(i){function t(){const s=o.getState();if(s.activeModal!=="videoControls"){i.innerHTML="";return}const a=s.media,n=Math.floor(a.currentTime/60),r=String(Math.floor(a.currentTime%60)).padStart(2,"0"),c=Math.floor(a.duration/60),l=String(Math.floor(a.duration%60)).padStart(2,"0");i.innerHTML=`
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
              <span class="media-video-title" title="${$e(a.videoTitle)}">${Se(a.videoTitle)}</span>
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
                <span>${c}:${l}</span>
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
              ${[.5,.75,1,1.25,1.5,2].map(f=>`
                <button class="speed-pill-btn ${a.playbackSpeed===f?"active":""}" data-set-speed="${f}">
                  ${f}x
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
    `,e()}function e(){var n,r,c,l,f,h,p,v,u;const s=i.querySelector("#videoControlPopover");if(!s)return;(n=s.querySelector("#closeVideoControlsBtn"))==null||n.addEventListener("click",()=>{o.closeModal()}),(r=s.querySelector("#mainPlayPauseBtn"))==null||r.addEventListener("click",()=>{o.togglePlayPause()}),(c=s.querySelector("#rewind10Btn"))==null||c.addEventListener("click",()=>{o.skipMediaTime(-10),N("⏪ Rewound 10s")}),(l=s.querySelector("#forward10Btn"))==null||l.addEventListener("click",()=>{o.skipMediaTime(10),N("⏩ Forward 10s")}),(f=s.querySelector("#toggleMuteBtn"))==null||f.addEventListener("click",()=>{o.toggleMediaMute()}),(h=s.querySelector("#mediaSeekSlider"))==null||h.addEventListener("input",g=>{o.seekMedia(parseFloat(g.target.value))}),s.querySelectorAll("[data-set-speed]").forEach(g=>{g.addEventListener("click",()=>{const y=parseFloat(g.dataset.setSpeed);o.setPlaybackSpeed(y),N(`⚡ Playback speed: ${y}x`)})}),(p=s.querySelector("#togglePipBtn"))==null||p.addEventListener("click",()=>{o.togglePip(),N(o.getState().media.isPipActive?"🖼️ Picture-in-Picture Activated!":"🖼️ Picture-in-Picture Closed")}),(v=s.querySelector("#toggleOverlappingBtn"))==null||v.addEventListener("click",()=>{o.toggleOverlapping(),N(o.getState().media.isOverlapping?"📑 Overlapping Corner Dock Enabled":"📑 Overlapping View Disabled")}),(u=s.querySelector("#toggleAutoHideBtn"))==null||u.addEventListener("click",()=>{o.toggleAutoHideControls(),N(o.getState().media.autoHideControls?"✨ Auto-Hide Controls: Enabled":"✨ Auto-Hide Controls: Always Visible")});const a=g=>{!g.target.closest("#videoControlPopover")&&!g.target.closest("#videoControlBtn")&&(o.closeModal(),document.removeEventListener("click",a))};setTimeout(()=>document.addEventListener("click",a),10)}o.subscribe((s,a)=>{["MODAL_CHANGED","MEDIA_PLAY_STATE_CHANGED","MEDIA_PIP_TOGGLED","MEDIA_OVERLAPPING_TOGGLED","MEDIA_AUTOHIDE_TOGGLED","MEDIA_SPEED_CHANGED","MEDIA_VOLUME_CHANGED","MEDIA_MUTE_TOGGLED","MEDIA_TIME_SEEKED"].includes(a)&&t()}),t()}function Se(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function $e(i){return i?i.replace(/"/g,"&quot;"):""}function N(i){const t=document.createElement("div");t.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg, #00F2FE, #7F00FF);color:#fff;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",t.innerText=i,document.body.appendChild(t),setTimeout(()=>t.remove(),2200)}function Te(i){let t=null;function e(){const n=o.getState().media;if(!n.isPipActive){i.innerHTML="";return}const r=Math.floor(n.currentTime/60),c=String(Math.floor(n.currentTime%60)).padStart(2,"0"),l=Math.floor(n.duration/60),f=String(Math.floor(n.duration%60)).padStart(2,"0");i.innerHTML=`
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
              <span class="pip-title-text">${Be(n.videoTitle)}</span>
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
                  <span style="font-size:10px; color:#fff; font-family:'JetBrains Mono';">${r}:${c} / ${l}:${f}</span>
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
    `,s()}function s(){var l,f,h,p,v,u,g;const a=i.querySelector("#floatingPipBox");if(!a)return;const n=i.querySelector("#pipVideoTag"),r=i.querySelector("#pipCanvasFallback");n&&(n.muted=o.getState().media.isMuted,n.playbackRate=o.getState().media.playbackSpeed,o.getState().media.isPlaying?n.play().catch(()=>{r.style.display="flex"}):n.pause(),n.onerror=()=>{r.style.display="flex"});const c=()=>{a.classList.remove("autohide-inactive"),clearTimeout(t),o.getState().media.autoHideControls&&o.getState().media.isPlaying&&(t=setTimeout(()=>{a.classList.add("autohide-inactive")},2200))};a.addEventListener("mousemove",c),a.addEventListener("mouseenter",c),c(),(l=i.querySelector("#pipCenterPlayBtn"))==null||l.addEventListener("click",y=>{y.stopPropagation(),o.togglePlayPause()}),(f=i.querySelector("#pipPlayPauseBottomBtn"))==null||f.addEventListener("click",y=>{y.stopPropagation(),o.togglePlayPause()}),(h=i.querySelector("#pipCloseBtn"))==null||h.addEventListener("click",y=>{y.stopPropagation(),o.togglePip(!1)}),(p=i.querySelector("#pipOverlapToggleBtn"))==null||p.addEventListener("click",y=>{y.stopPropagation(),o.toggleOverlapping()}),(v=i.querySelector("#pipMuteBtn"))==null||v.addEventListener("click",y=>{y.stopPropagation(),o.toggleMediaMute()}),(u=i.querySelector("#pipSeekSlider"))==null||u.addEventListener("input",y=>{o.seekMedia(parseFloat(y.target.value)),n&&(n.currentTime=parseFloat(y.target.value))}),(g=i.querySelector("#pipFullscreenBtn"))==null||g.addEventListener("click",()=>{var y,b;document.fullscreenElement?(b=document.exitFullscreen)==null||b.call(document):(y=a.requestFullscreen)==null||y.call(a)})}o.subscribe((a,n)=>{["MEDIA_PIP_TOGGLED","MEDIA_PLAY_STATE_CHANGED","MEDIA_OVERLAPPING_TOGGLED","MEDIA_AUTOHIDE_TOGGLED","MEDIA_SPEED_CHANGED","MEDIA_VOLUME_CHANGED","MEDIA_MUTE_TOGGLED","MEDIA_TIME_SEEKED"].includes(n)&&e()}),e()}function Be(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function Ae(i){function t(){var r,c,l,f,h,p,v,u,g;const s=o.getState();if(s.activeModal!=="circuit"){i.style.display="none";return}i.style.display="flex";const a=s.superPvt||{},n=a.circuit||[];i.className="modal-backdrop",i.innerHTML=`
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
              <span>Exit IP: <strong>${a.exitIp||"185.220.101.42"}</strong> (${q(a.exitCountry||"Zurich, Switzerland")})</span>
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
              <div class="relay-name">${q(((r=n[0])==null?void 0:r.location)||"Frankfurt, Germany 🇩🇪")}</div>
              <div class="relay-sub">${((c=n[0])==null?void 0:c.ip)||"141.95.12.8"}</div>
              <div class="relay-ping">Ping: ${((l=n[0])==null?void 0:l.ping)||"14ms"}</div>
            </div>

            <div class="relay-arrow">
              <span class="arrow-line"></span>
              <span class="arrow-enc">Layer 2</span>
            </div>

            <div class="relay-card">
              <div class="relay-badge relay">Middle Relay</div>
              <div class="relay-icon" style="color:#A78BFA;">${d("circuit","",22)}</div>
              <div class="relay-name">${q(((f=n[1])==null?void 0:f.location)||"Amsterdam, Netherlands 🇳🇱")}</div>
              <div class="relay-sub">${((h=n[1])==null?void 0:h.ip)||"194.26.29.112"}</div>
              <div class="relay-ping">Ping: ${((p=n[1])==null?void 0:p.ping)||"21ms"}</div>
            </div>

            <div class="relay-arrow">
              <span class="arrow-line"></span>
              <span class="arrow-enc">Exit</span>
            </div>

            <div class="relay-card exit">
              <div class="relay-badge exit">Exit Gateway</div>
              <div class="relay-icon" style="color:#10B981;">${d("globe","",22)}</div>
              <div class="relay-name" style="color:#10B981; font-weight:700;">${q(((v=n[2])==null?void 0:v.location)||"Zurich, Switzerland 🇨🇭")}</div>
              <div class="relay-sub">${((u=n[2])==null?void 0:u.ip)||"185.220.101.42"}</div>
              <div class="relay-ping">Ping: ${((g=n[2])==null?void 0:g.ping)||"28ms"}</div>
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
    `,e()}function e(){var s,a,n,r;(s=i.querySelector("#closeCircuitModalBtn"))==null||s.addEventListener("click",()=>o.closeModal()),(a=i.querySelector("#closeCircuitModalBtn2"))==null||a.addEventListener("click",()=>o.closeModal()),(n=i.querySelector("#rotateIdentityModalBtn"))==null||n.addEventListener("click",()=>{o.refreshOnionIdentity(),z("🧅 New Onion Circuit & Exit IP assigned!"),t()}),(r=i.querySelector("#panicFromModalBtn"))==null||r.addEventListener("click",()=>{o.closeModal(),o.panicNukeSession(),z("🚨 Emergency Panic: RAM flushed and private tabs destroyed!")}),i.addEventListener("click",c=>{c.target===i&&o.closeModal()})}o.subscribe((s,a)=>{["MODAL_CHANGED","SUPER_PVT_UPDATED"].includes(a)&&t()}),t()}function q(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function z(i){const t=document.createElement("div");t.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",t.innerText=i,document.body.appendChild(t),setTimeout(()=>t.remove(),2200)}const Ce=[{name:"Cyan Glow",hex:"#00F2FE"},{name:"Electric Violet",hex:"#7F00FF"},{name:"Emerald Green",hex:"#10B981"},{name:"Amber Gold",hex:"#F59E0B"},{name:"Ruby Crimson",hex:"#EF4444"},{name:"Hot Pink",hex:"#EC4899"},{name:"Deep Sky",hex:"#38BDF8"},{name:"Purple Lavender",hex:"#A855F7"}];function Me(i){let t="#00F2FE";function e(){const a=o.getState();if(a.activeModal!=="tabGroup"){i.style.display="none";return}i.style.display="flex";const n=!!a.activeGroupEditing,r=n?o.getTabGroupById(a.activeGroupEditing):null,c=r?r.name:"Research 🔬";t=r?r.color:"#00F2FE",i.className="modal-backdrop",i.innerHTML=`
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
              value="${Le(c)}" 
              required
              autofocus
            />
          </div>

          <!-- Color Palette Picker -->
          <div class="form-group">
            <label class="form-label">Group Color Accent</label>
            <div class="group-color-picker-grid">
              ${Ce.map(l=>`
                <div 
                  class="color-swatch-item ${l.hex.toLowerCase()===t.toLowerCase()?"active":""}" 
                  data-color-hex="${l.hex}" 
                  style="background:${l.hex};"
                  title="${l.name}"
                >
                  ${l.hex.toLowerCase()===t.toLowerCase()?d("check","",14):""}
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Group Preview Pill -->
          <div class="form-group">
            <label class="form-label">Live Appearance Preview</label>
            <div class="group-preview-box">
              <div class="tab-group-header-pill preview-pill" id="groupPreviewPill" style="border-color:${t}; background:rgba(255,255,255,0.05); color:#fff; display:inline-flex; align-items:center; gap:8px; padding:5px 14px; border-radius:14px; font-size:12px; font-weight:700;">
                <span class="group-dot" id="previewDot" style="width:8px; height:8px; border-radius:50%; background:${t}; box-shadow:0 0 8px ${t};"></span>
                <span id="previewName">${Pe(c)}</span>
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
    `,s(n,r)}function s(a,n){var p,v,u;const r=i.querySelector("#tabGroupForm"),c=i.querySelector("#groupNameInput"),l=i.querySelector("#previewName"),f=i.querySelector("#previewDot"),h=i.querySelector("#groupPreviewPill");c==null||c.addEventListener("input",()=>{const g=c.value.trim()||"New Group";l&&(l.textContent=g)}),i.querySelectorAll("[data-color-hex]").forEach(g=>{g.addEventListener("click",()=>{t=g.dataset.colorHex,i.querySelectorAll("[data-color-hex]").forEach(y=>y.classList.remove("active")),g.classList.add("active"),f&&(f.style.background=t,f.style.boxShadow=`0 0 8px ${t}`),h&&(h.style.borderColor=t)})}),r==null||r.addEventListener("submit",g=>{g.preventDefault();const y=c.value.trim()||"New Group";if(a&&n)o.updateTabGroup(n.id,{name:y,color:t}),V(`🏷️ Tab group "${y}" updated!`);else{const b=o.state.pendingTabForGroup||null;o.createTabGroup(y,t,b),o.state.pendingTabForGroup=null,V(`📁 Created tab group "${y}"!`)}o.closeModal()}),(p=i.querySelector("#deleteGroupFromModalBtn"))==null||p.addEventListener("click",()=>{n&&(o.deleteTabGroup(n.id,!1),V(`🗑️ Ungrouped "${n.name}"`),o.closeModal())}),(v=i.querySelector("#closeGroupModalBtn"))==null||v.addEventListener("click",()=>o.closeModal()),(u=i.querySelector("#cancelGroupModalBtn"))==null||u.addEventListener("click",()=>o.closeModal()),i.addEventListener("click",g=>{g.target===i&&o.closeModal()})}o.subscribe((a,n)=>{["MODAL_CHANGED"].includes(n)&&e()}),e()}function Pe(i){return i?i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function Le(i){return i?i.replace(/"/g,"&quot;"):""}function V(i){const t=document.createElement("div");t.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#00F2FE;color:#000;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;z-index:9999;box-shadow:0 4px 14px rgba(0,242,254,0.4);animation:fadeIn 0.2s ease-out;",t.innerText=i,document.body.appendChild(t),setTimeout(()=>t.remove(),2200)}document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("app");i.innerHTML=`
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
  `,de(document.getElementById("tabBarContainer")),ce(document.getElementById("addressBarContainer")),pe(document.getElementById("bookmarksBarContainer")),he(document.getElementById("ntpContainer")),ge(document.getElementById("searchContainer")),ve(document.getElementById("webViewerContainer")),ye(document.getElementById("shieldsModalContainer")),ke(document.getElementById("settingsModalContainer")),we(document.getElementById("addShortcutModalContainer")),Ee(document.getElementById("notesSidebarContainer")),xe(document.getElementById("videoControlModalContainer")),Te(document.getElementById("floatingPipContainer")),Ae(document.getElementById("circuitModalContainer")),Me(document.getElementById("tabGroupModalContainer")),window.addEventListener("keydown",t=>{var r,c;const s=navigator.platform.toUpperCase().indexOf("MAC")>=0?t.metaKey:t.ctrlKey,a=document.activeElement,n=a&&(a.tagName==="INPUT"||a.tagName==="TEXTAREA");if(s&&t.shiftKey&&t.key.toLowerCase()==="n"){t.preventDefault();const l=o.getBrowserMode();o.setBrowserMode(l==="incognito"?"standard":"incognito");return}if(s&&t.shiftKey&&t.key.toLowerCase()==="p"){t.preventDefault();const l=o.getBrowserMode();o.setBrowserMode(l==="super-pvt"?"standard":"super-pvt");return}if(s&&t.shiftKey&&t.key.toLowerCase()==="g"){t.preventDefault(),o.openTabGroupModal(null);return}if(s&&!t.shiftKey&&t.key.toLowerCase()==="t"){t.preventDefault(),o.createTab();return}if(s&&!t.shiftKey&&t.key.toLowerCase()==="w"){t.preventDefault();const l=o.getActiveTab();l&&o.closeTab(l.id);return}if(s&&!t.shiftKey&&t.key.toLowerCase()==="l"){t.preventDefault();const l=document.getElementById("omniboxInput");l&&(l.focus(),l.select());return}if(s&&!t.shiftKey&&t.key.toLowerCase()==="n"){t.preventDefault(),o.toggleNotesSidebar();return}if(s&&!t.shiftKey&&t.key.toLowerCase()==="s"){t.preventDefault(),o.openModal("shields");return}if(t.key==="Escape"){o.closeModal();return}if(!n){if(t.code==="Space"||t.key.toLowerCase()==="k")t.preventDefault(),o.togglePlayPause();else if(t.key.toLowerCase()==="j"||t.key==="ArrowLeft")t.preventDefault(),o.skipMediaTime(-10);else if(t.key.toLowerCase()==="l"||t.key==="ArrowRight")t.preventDefault(),o.skipMediaTime(10);else if(t.key.toLowerCase()==="p")t.preventDefault(),o.togglePip();else if(t.key.toLowerCase()==="m")t.preventDefault(),o.toggleMediaMute();else if(t.key.toLowerCase()==="f"){t.preventDefault();const l=document.getElementById("floatingPipBox");l&&(document.fullscreenElement?(c=document.exitFullscreen)==null||c.call(document):(r=l.requestFullscreen)==null||r.call(l))}else if(t.key===">"){t.preventDefault();const l=o.getState().media.playbackSpeed,f=[.5,.75,1,1.25,1.5,2],h=Math.min(f.length-1,f.indexOf(l)+1);o.setPlaybackSpeed(f[h])}else if(t.key==="<"){t.preventDefault();const l=o.getState().media.playbackSpeed,f=[.5,.75,1,1.25,1.5,2],h=Math.max(0,f.indexOf(l)-1);o.setPlaybackSpeed(f[h])}}}),console.log("🎬 WebBuddy with Incognito, Tab Groups & Super Private Tor initialized successfully!")});
