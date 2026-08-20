import {
  DEFAULT_WALLPAPERS,
  DEFAULT_TOP_SITES,
  DEFAULT_BOOKMARKS,
  DEFAULT_NOTES,
  DEFAULT_FILTER_LISTS,
  DEFAULT_SEARCH_ENGINES,
  DEFAULT_MOTRIX_TASKS,
  MOCK_WEB_PAGES,
  SEARCH_RESULTS_MOCK
} from './defaultData.js';
import { motrixService } from '../services/motrixService.js';

class Store {
  constructor() {
    this.listeners = new Set();
    
    // Load persisted state or fallback
    const savedTopSites = this.loadFromStorage('webbuddy_top_sites', DEFAULT_TOP_SITES);
    const savedBookmarks = this.loadFromStorage('webbuddy_bookmarks', DEFAULT_BOOKMARKS);
    const savedNotes = this.loadFromStorage('webbuddy_saved_notes', DEFAULT_NOTES);
    const savedFilterLists = this.loadFromStorage('webbuddy_filter_lists', DEFAULT_FILTER_LISTS);
    const savedSearchEngines = this.loadFromStorage('webbuddy_search_engines', DEFAULT_SEARCH_ENGINES);
    const savedMotrixTasks = this.loadFromStorage('webbuddy_motrix_tasks', DEFAULT_MOTRIX_TASKS);
    const savedMotrixConfig = this.loadFromStorage('webbuddy_motrix_config', {
      rpcHost: '127.0.0.1',
      rpcPort: 16800,
      rpcSecret: '',
      autoInterceptDownloads: true,
      maxConnections: 16,
      downloadDir: '~/Downloads'
    });
    const savedTabGroups = this.loadFromStorage('webbuddy_tab_groups', [
      { id: 'group-work', name: 'Work 💼', color: '#00F2FE', collapsed: false, mode: 'standard' },
      { id: 'group-privacy', name: 'Privacy & Tech 🛡️', color: '#7F00FF', collapsed: false, mode: 'standard' }
    ]);
    const defaultTabs = [
      {
        id: 'tab-work-1',
        title: 'GitHub: Developer Dashboard',
        url: 'https://github.com',
        type: 'web',
        favicon: 'github',
        pinned: false,
        active: false,
        mode: 'standard',
        groupId: 'group-work',
        adsBlockedCount: 4,
        trackersBlockedCount: 9,
        totalBlockedCount: 13,
        history: ['https://github.com'],
        historyIndex: 0,
        isLoading: false
      },
      {
        id: 'tab-work-2',
        title: 'Vite — Next Generation Frontend Tooling',
        url: 'https://vitejs.dev',
        type: 'web',
        favicon: 'globe',
        pinned: false,
        active: false,
        mode: 'standard',
        groupId: 'group-work',
        adsBlockedCount: 2,
        trackersBlockedCount: 6,
        totalBlockedCount: 8,
        history: ['https://vitejs.dev'],
        historyIndex: 0,
        isLoading: false
      },
      {
        id: 'tab-priv-1',
        title: 'Brave Privacy & Ad-Block Tech',
        url: 'https://brave.com',
        type: 'web',
        favicon: 'shield',
        pinned: false,
        active: false,
        mode: 'standard',
        groupId: 'group-privacy',
        adsBlockedCount: 8,
        trackersBlockedCount: 15,
        totalBlockedCount: 23,
        history: ['https://brave.com'],
        historyIndex: 0,
        isLoading: false
      },
      {
        id: 'tab-main-1',
        title: 'New Tab',
        url: 'brave://newtab',
        type: 'ntp',
        favicon: 'shield',
        pinned: false,
        active: true,
        mode: 'standard',
        groupId: null,
        adsBlockedCount: 0,
        trackersBlockedCount: 0,
        totalBlockedCount: 0,
        history: ['brave://newtab'],
        historyIndex: 0,
        isLoading: false
      }
    ];
    const rawSavedTabs = this.loadFromStorage('webbuddy_tabs', null);
    const savedTabs = (rawSavedTabs && Array.isArray(rawSavedTabs) && rawSavedTabs.length > 0) ? rawSavedTabs : defaultTabs;

    const savedSettings = this.loadFromStorage('webbuddy_settings', {
      showShieldsStats: true,
      showTopSites: true,
      showClock: true,
      clockFormat: '12h',
      theme: 'dark',
      blurWallpaper: false,
      bookmarksBarVisible: true,
      notesSidebarOpen: false,
      sidebarOpen: false,
      sidebarMode: 'groups', // 'groups' | 'notes'
      defaultSearchEngine: 'google'
    });

    this.state = {
      // Browser Mode: 'standard' | 'incognito' | 'super-pvt'
      browserMode: 'standard',

      // Tab Groups
      tabGroups: savedTabGroups,
      activeTabGroupId: null, // null = All Open Tabs, or a specific group id

      // Sidebar System: Groups & Notes
      sidebarMode: savedSettings.sidebarMode || 'groups', // 'groups' | 'notes'
      isSidebarOpen: savedSettings.sidebarOpen || savedSettings.notesSidebarOpen || false,
      isNotesSidebarOpen: savedSettings.notesSidebarOpen || false,

      // Super Private (Tor / Onion Routing Circuit)
      superPvt: {
        onionConnected: true,
        exitCountry: 'Zurich, Switzerland 🇨🇭',
        exitIp: '185.220.101.42',
        circuitPing: '28ms',
        anonymityScore: '100% Ultra Stealth',
        circuit: [
          { role: 'Guard Node', location: 'Frankfurt, Germany 🇩🇪', ip: '141.95.12.8', ping: '14ms', status: 'Active (Layer 1 AES-256)' },
          { role: 'Middle Relay', location: 'Amsterdam, Netherlands 🇳🇱', ip: '194.26.29.112', ping: '21ms', status: 'Active (Layer 2 AES-256)' },
          { role: 'Exit Relay', location: 'Zurich, Switzerland 🇨🇭', ip: '185.220.101.42', ping: '28ms', status: 'Active (Layer 3 Decrypted Hop)' }
        ],
        fingerprintDefense: 'MAX (Farbling 2.0)',
        canvasNoise: true,
        audioNoise: true,
        webRtcLeakBlocked: true,
        dnsOverHttps: true,
        cookiesPurgedOnClose: true
      },

      // Search Engines
      searchEngines: savedSearchEngines,
      defaultSearchEngine: savedSettings.defaultSearchEngine || 'google',
      // Browser Tabs (Persistently Loaded)
      tabs: savedTabs,
      activeTabId: (savedTabs.find(t => t.active) || savedTabs[0])?.id || 'tab-main-1',

      // Wallpapers
      wallpapers: DEFAULT_WALLPAPERS,
      activeWallpaperIndex: 0,

      // Notes & Notepad Sidebar
      notes: savedNotes,
      activeNoteId: savedNotes.length > 0 ? savedNotes[0].id : null,

      // Core Ad & Tracker Blocker Engine
      shields: {
        shieldsEnabled: true,
        adsBlockedTotal: 5842,
        trackersBlockedTotal: 12940,
        popupsBlockedTotal: 342,
        bandwidthSavedMB: 184.5,
        timeSavedMin: 8.6,
        blockAds: true,
        blockTrackers: true,
        blockFingerprinting: true,
        blockAnnoyances: true,
        blockScripts: false,
        upgradeHttps: true,
        filterLists: savedFilterLists
      },

      // Shortcuts & Bookmarks
      topSites: savedTopSites,
      bookmarks: savedBookmarks,

      // Video Controls, PiP & Media Hub
      media: {
        isPlaying: false,
        isPipActive: false,
        isOverlapping: false,
        autoPip: true,
        autoHideControls: true,
        playbackSpeed: 1.0,
        volume: 0.85,
        isMuted: false,
        currentTime: 38,
        duration: 180,
        videoTitle: 'WebBuddy Ad & Tracker Blocker: Sub-Millisecond Packet Filtering',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        adAutoskip: true,
        loop: false
      },

      // UI Active Popups / Modals
      activeModal: null, // 'shields' | 'settings' | 'addShortcut' | 'videoControls' | 'circuit' | 'tabGroup' | 'motrix'
      activeGroupEditing: null,

      // Motrix Download Manager State
      motrix: {
        isConnected: false,
        rpcHost: savedMotrixConfig.rpcHost || '127.0.0.1',
        rpcPort: savedMotrixConfig.rpcPort || 16800,
        rpcSecret: savedMotrixConfig.rpcSecret || '',
        autoInterceptDownloads: savedMotrixConfig.autoInterceptDownloads ?? true,
        maxConnections: savedMotrixConfig.maxConnections || 16,
        downloadDir: savedMotrixConfig.downloadDir || '~/Downloads',
        globalDownloadSpeed: 0,
        globalUploadSpeed: 0,
        filterTab: 'all', // 'all' | 'downloading' | 'completed' | 'paused'
        isAddDialogOpen: false,
        tasks: savedMotrixTasks
      },

      // Settings
      settings: savedSettings
    };

    // Configure and listen to Motrix Service
    motrixService.configure({
      host: this.state.motrix.rpcHost,
      port: this.state.motrix.rpcPort,
      secret: this.state.motrix.rpcSecret
    });

    motrixService.subscribe((data) => {
      if (data.type === 'status') {
        this.state.motrix.isConnected = data.isConnected;
        this.notify('MOTRIX_STATUS_CHANGED', data.isConnected);
      }
    });

    // Start background download speed & progress processor
    this.startDownloadEngine();
  }

  loadFromStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch {
      return fallback;
    }
  }

  saveToStorage(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify(event, payload) {
    for (const listener of this.listeners) {
      listener(this.state, event, payload);
    }
  }

  getState() {
    return this.state;
  }

  getBrowserMode() {
    return this.state.browserMode || 'standard';
  }

  getAllModeTabs() {
    const currentMode = this.state.browserMode || 'standard';
    return this.state.tabs.filter(t => (t.mode || 'standard') === currentMode);
  }

  getVisibleTabs() {
    const currentMode = this.state.browserMode || 'standard';
    const modeTabs = this.state.tabs.filter(t => (t.mode || 'standard') === currentMode);
    if (this.state.activeTabGroupId) {
      return modeTabs.filter(t => t.groupId === this.state.activeTabGroupId);
    }
    return modeTabs;
  }

  getActiveTab() {
    const visible = this.getVisibleTabs();
    return visible.find(t => t.id === this.state.activeTabId) || visible[0] || this.state.tabs[0];
  }

  getTabGroups() {
    const currentMode = this.state.browserMode || 'standard';
    return this.state.tabGroups.filter(g => (g.mode || 'standard') === currentMode);
  }

  getTabGroupById(groupId) {
    return this.state.tabGroups.find(g => g.id === groupId);
  }

  getActiveTabGroup() {
    if (!this.state.activeTabGroupId) return null;
    return this.state.tabGroups.find(g => g.id === this.state.activeTabGroupId) || null;
  }

  setActiveTabGroup(groupId) {
    if (groupId && !this.state.tabGroups.some(g => g.id === groupId)) {
      this.state.activeTabGroupId = null;
    } else {
      this.state.activeTabGroupId = groupId || null;
    }

    const currentMode = this.state.browserMode || 'standard';
    const modeTabs = this.state.tabs.filter(t => (t.mode || 'standard') === currentMode);
    if (this.state.activeTabGroupId) {
      const filtered = modeTabs.filter(t => t.groupId === this.state.activeTabGroupId);
      if (filtered.length === 0) {
        this.createTab('brave://newtab', 'New Tab', this.state.activeTabGroupId);
      } else {
        if (!filtered.some(t => t.id === this.state.activeTabId)) {
          this.switchTab(filtered[0].id);
        }
      }
    } else {
      if (modeTabs.length > 0 && !modeTabs.some(t => t.id === this.state.activeTabId)) {
        this.switchTab(modeTabs[0].id);
      }
    }

    this.notify('TAB_GROUPS_UPDATED', this.state.tabGroups);
    this.notify('TAB_SWITCHED', this.getActiveTab());
  }

  getActiveWallpaper() {
    return this.state.wallpapers[this.state.activeWallpaperIndex % this.state.wallpapers.length];
  }

  getTotalFilterRulesCount() {
    return this.state.shields.filterLists
      .filter(fl => fl.enabled)
      .reduce((sum, fl) => sum + fl.rulesCount, 0);
  }

  // --- Browser Mode Switching ---
  setBrowserMode(mode) {
    if (!['standard', 'incognito', 'super-pvt'].includes(mode)) return;
    this.state.browserMode = mode;
    this.state.activeTabGroupId = null; // Reset group filter on mode change

    // Check if there is already a tab in this mode
    const modeTabs = this.state.tabs.filter(t => (t.mode || 'standard') === mode);
    if (modeTabs.length === 0) {
      // Create initial new tab in this mode
      const isSuper = mode === 'super-pvt';
      const isIncognito = mode === 'incognito';
      const newTabId = 'tab-' + mode + '-' + Date.now();
      const newTab = {
        id: newTabId,
        title: isSuper ? 'Super Private Tab (Tor)' : isIncognito ? 'Incognito Tab' : 'New Tab',
        url: 'brave://newtab',
        type: 'ntp',
        favicon: isSuper ? 'onion' : isIncognito ? 'mask' : 'shield',
        pinned: false,
        active: true,
        mode: mode,
        groupId: null,
        adsBlockedCount: isSuper ? 12 : isIncognito ? 8 : 0,
        trackersBlockedCount: isSuper ? 24 : isIncognito ? 16 : 0,
        totalBlockedCount: isSuper ? 36 : isIncognito ? 24 : 0,
        history: ['brave://newtab'],
        historyIndex: 0,
        isLoading: false
      };
      this.state.tabs.push(newTab);
      this.state.activeTabId = newTabId;
    } else {
      const currentActive = modeTabs.find(t => t.active) || modeTabs[0];
      this.state.tabs.forEach(t => {
        t.active = (t.id === currentActive.id);
      });
      this.state.activeTabId = currentActive.id;
    }

    this.notify('BROWSER_MODE_CHANGED', mode);
    this.notify('TAB_SWITCHED', this.getActiveTab());
  }

  // Tab Management
  createTab(url = 'brave://newtab', title = 'New Tab', groupId = null) {
    const isNtp = url === 'brave://newtab';
    const newId = 'tab-' + Date.now();
    const mode = this.state.browserMode || 'standard';
    const isSuper = mode === 'super-pvt';
    const isIncognito = mode === 'incognito';
    const actualGroupId = groupId !== null ? groupId : (this.state.activeTabGroupId || null);

    const adsNow = isNtp ? (isSuper ? 6 : isIncognito ? 3 : 0) : Math.floor(Math.random() * 8) + 3;
    const trackersNow = isNtp ? (isSuper ? 14 : isIncognito ? 8 : 0) : Math.floor(Math.random() * 12) + 6;

    let defaultFavicon = 'globe';
    if (isNtp) {
      defaultFavicon = isSuper ? 'onion' : isIncognito ? 'mask' : 'shield';
    }

    let defaultTitle = title;
    if (isNtp) {
      defaultTitle = isSuper ? 'Super Private Tab' : isIncognito ? 'Incognito Tab' : 'New Tab';
    }

    const newTab = {
      id: newId,
      title: defaultTitle,
      url: url,
      type: isNtp ? 'ntp' : this.resolveUrlType(url),
      favicon: defaultFavicon,
      pinned: false,
      active: true,
      mode: mode,
      groupId: actualGroupId,
      adsBlockedCount: adsNow,
      trackersBlockedCount: trackersNow,
      totalBlockedCount: adsNow + trackersNow,
      history: [url],
      historyIndex: 0,
      isLoading: false
    };

    // Deactivate current tabs in this mode
    this.state.tabs.forEach(t => {
      if ((t.mode || 'standard') === mode) {
        t.active = false;
      }
    });

    this.state.tabs.push(newTab);
    this.state.activeTabId = newId;

    if (!isNtp) {
      this.incrementShieldStats(adsNow, trackersNow);
    }

    this.saveTabs();
    this.notify('TAB_CREATED', newTab);
  }

  saveTabs() {
    const standardTabs = this.state.tabs.filter(t => (t.mode || 'standard') === 'standard');
    this.saveToStorage('webbuddy_tabs', standardTabs);
  }

  switchTab(tabId) {
    const tab = this.state.tabs.find(t => t.id === tabId);
    if (!tab) return;

    if (tab.mode && tab.mode !== this.state.browserMode) {
      this.state.browserMode = tab.mode;
      this.notify('BROWSER_MODE_CHANGED', tab.mode);
    }

    this.state.tabs.forEach(t => t.active = (t.id === tabId));
    this.state.activeTabId = tabId;
    this.saveTabs();
    this.notify('TAB_SWITCHED', tab);
  }

  closeTab(tabId) {
    const mode = this.state.browserMode || 'standard';
    const visible = this.getVisibleTabs();

    if (visible.length === 1 && visible[0].id === tabId) {
      this.navigateToUrl('brave://newtab');
      return;
    }

    const index = this.state.tabs.findIndex(t => t.id === tabId);
    if (index === -1) return;

    const wasActive = this.state.tabs[index].active;
    this.state.tabs.splice(index, 1);

    if (wasActive) {
      const remainingVisible = this.getVisibleTabs();
      if (remainingVisible.length > 0) {
        const nextTab = remainingVisible[Math.max(0, remainingVisible.length - 1)];
        nextTab.active = true;
        this.state.activeTabId = nextTab.id;
      } else {
        this.createTab();
      }
    }

    this.saveTabs();
    this.notify('TAB_CLOSED', { tabId, activeTabId: this.state.activeTabId });
  }

  togglePinTab(tabId) {
    const tab = this.state.tabs.find(t => t.id === tabId);
    if (tab) {
      tab.pinned = !tab.pinned;
      this.state.tabs.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
      this.saveTabs();
      this.notify('TAB_PINNED', tab);
    }
  }

  duplicateTab(tabId) {
    const tab = this.state.tabs.find(t => t.id === tabId);
    if (!tab) return;
    this.createTab(tab.url, tab.title, tab.groupId);
  }

  moveTabToMode(tabId, targetMode) {
    const tab = this.state.tabs.find(t => t.id === tabId);
    if (!tab) return;
    tab.mode = targetMode;
    tab.groupId = null;
    this.setBrowserMode(targetMode);
    this.switchTab(tabId);
  }

  // --- Tab Groups Management ---
  createTabGroup(name = 'New Group', color = '#00F2FE', initialTabId = null) {
    const mode = this.state.browserMode || 'standard';
    const newGroupId = 'group-' + Date.now();
    const newGroup = {
      id: newGroupId,
      name: name.trim() || 'New Group',
      color: color || '#00F2FE',
      collapsed: false,
      mode: mode
    };

    this.state.tabGroups.push(newGroup);

    if (initialTabId) {
      const tab = this.state.tabs.find(t => t.id === initialTabId);
      if (tab) tab.groupId = newGroupId;
    }

    this.saveTabs();
    this.saveToStorage('webbuddy_tab_groups', this.state.tabGroups);
    this.notify('TAB_GROUPS_UPDATED', this.state.tabGroups);
    return newGroup;
  }

  createEmptyTabGroup(name = 'New Group', color = '#00F2FE') {
    const mode = this.state.browserMode || 'standard';
    const newGroupId = 'group-' + Date.now();
    const newGroup = {
      id: newGroupId,
      name: name.trim() || 'New Group',
      color: color || '#00F2FE',
      collapsed: false,
      mode: mode
    };

    this.state.tabGroups.push(newGroup);
    this.saveToStorage('webbuddy_tab_groups', this.state.tabGroups);

    // Create an initial tab in this group and switch to it
    this.state.activeTabGroupId = newGroupId;
    this.createTab('brave://newtab', 'New Tab', newGroupId);
    this.notify('TAB_GROUPS_UPDATED', this.state.tabGroups);
    return newGroup;
  }

  createTabGroupFromCurrentTab(name = 'New Group', color = '#00F2FE') {
    const activeTab = this.getActiveTab();
    const group = this.createTabGroup(name, color, activeTab ? activeTab.id : null);
    this.setActiveTabGroup(group.id);
    return group;
  }

  createTabGroupFromOpenTabs(name = 'New Group', color = '#00F2FE') {
    const currentMode = this.state.browserMode || 'standard';
    const modeTabs = this.state.tabs.filter(t => (t.mode || 'standard') === currentMode);
    const newGroupId = 'group-' + Date.now();
    const newGroup = {
      id: newGroupId,
      name: name.trim() || 'New Group',
      color: color || '#00F2FE',
      collapsed: false,
      mode: currentMode
    };

    this.state.tabGroups.push(newGroup);
    modeTabs.forEach(t => {
      t.groupId = newGroupId;
    });

    this.saveTabs();
    this.saveToStorage('webbuddy_tab_groups', this.state.tabGroups);
    this.setActiveTabGroup(newGroupId);
    this.notify('TAB_GROUPS_UPDATED', this.state.tabGroups);
    return newGroup;
  }

  updateTabGroup(groupId, updates) {
    const group = this.state.tabGroups.find(g => g.id === groupId);
    if (!group) return;

    if (updates.name !== undefined) group.name = updates.name.trim() || group.name;
    if (updates.color !== undefined) group.color = updates.color;
    if (updates.collapsed !== undefined) group.collapsed = updates.collapsed;

    this.saveToStorage('webbuddy_tab_groups', this.state.tabGroups);
    this.notify('TAB_GROUPS_UPDATED', this.state.tabGroups);
  }

  renameTabGroup(groupId, newName) {
    this.updateTabGroup(groupId, { name: newName });
  }

  setTabGroupColor(groupId, color) {
    this.updateTabGroup(groupId, { color: color });
  }

  toggleGroupCollapse(groupId) {
    const group = this.state.tabGroups.find(g => g.id === groupId);
    if (!group) return;
    group.collapsed = !group.collapsed;
    this.saveToStorage('webbuddy_tab_groups', this.state.tabGroups);
    this.notify('TAB_GROUPS_UPDATED', this.state.tabGroups);
  }

  deleteTabGroup(groupId, closeTabs = false) {
    const index = this.state.tabGroups.findIndex(g => g.id === groupId);
    if (index === -1) return;

    this.state.tabGroups.splice(index, 1);

    if (this.state.activeTabGroupId === groupId) {
      this.state.activeTabGroupId = null;
    }

    if (closeTabs) {
      this.state.tabs = this.state.tabs.filter(t => t.groupId !== groupId);
      if (this.getVisibleTabs().length === 0) {
        this.createTab();
      } else {
        const active = this.getActiveTab();
        if (active) this.switchTab(active.id);
      }
    } else {
      this.state.tabs.forEach(t => {
        if (t.groupId === groupId) t.groupId = null;
      });
    }

    this.saveTabs();
    this.saveToStorage('webbuddy_tab_groups', this.state.tabGroups);
    this.notify('TAB_GROUPS_UPDATED', this.state.tabGroups);
    this.notify('TAB_CLOSED', {});
  }

  addTabToGroup(tabId, groupId) {
    const tab = this.state.tabs.find(t => t.id === tabId);
    if (!tab) return;
    tab.groupId = groupId;
    this.saveTabs();
    this.notify('TAB_GROUPS_UPDATED', this.state.tabGroups);
  }

  removeTabFromGroup(tabId) {
    const tab = this.state.tabs.find(t => t.id === tabId);
    if (!tab) return;
    tab.groupId = null;
    this.saveTabs();
    this.notify('TAB_GROUPS_UPDATED', this.state.tabGroups);
  }

  moveTabToGroup(tabId, targetGroupId) {
    const tab = this.state.tabs.find(t => t.id === tabId);
    if (!tab) return;
    tab.groupId = targetGroupId || null;
    this.saveTabs();
    this.notify('TAB_GROUPS_UPDATED', this.state.tabGroups);
    this.notify('TAB_MOVED_GROUP', { tabId, targetGroupId });
  }

  reorderTabs(sourceTabId, targetTabId) {
    const sourceIndex = this.state.tabs.findIndex(t => t.id === sourceTabId);
    const targetIndex = this.state.tabs.findIndex(t => t.id === targetTabId);
    if (sourceIndex === -1 || targetIndex === -1 || sourceIndex === targetIndex) return;

    const [movedTab] = this.state.tabs.splice(sourceIndex, 1);
    this.state.tabs.splice(targetIndex, 0, movedTab);

    this.saveTabs();
    this.notify('TABS_REORDERED', this.state.tabs);
  }

  // --- Super Private / Tor Circuit Management ---
  refreshOnionIdentity() {
    const RELAYS = [
      { location: 'Zurich, Switzerland 🇨🇭', ip: '185.220.101.42' },
      { location: 'Reykjavik, Iceland 🇮🇸', ip: '185.246.188.67' },
      { location: 'Stockholm, Sweden 🇸🇪', ip: '193.189.100.18' },
      { location: 'Frankfurt, Germany 🇩🇪', ip: '141.95.12.8' },
      { location: 'Amsterdam, Netherlands 🇳🇱', ip: '194.26.29.112' },
      { location: 'Helsinki, Finland 🇫🇮', ip: '95.217.163.24' },
      { location: 'Toronto, Canada 🇨🇦', ip: '198.98.51.109' },
      { location: 'Singapore 🇸🇬', ip: '139.99.120.45' }
    ];

    // Pick 3 unique relays
    const shuffled = [...RELAYS].sort(() => 0.5 - Math.random());
    const guard = shuffled[0];
    const middle = shuffled[1];
    const exit = shuffled[2];

    const ping = Math.floor(Math.random() * 25) + 18;

    this.state.superPvt = {
      ...this.state.superPvt,
      exitCountry: exit.location,
      exitIp: exit.ip,
      circuitPing: `${ping}ms`,
      circuit: [
        { role: 'Guard Node', location: guard.location, ip: guard.ip, ping: `${Math.floor(ping * 0.4)}ms`, status: 'Active (Layer 1 AES-256)' },
        { role: 'Middle Relay', location: middle.location, ip: middle.ip, ping: `${Math.floor(ping * 0.7)}ms`, status: 'Active (Layer 2 AES-256)' },
        { role: 'Exit Relay', location: exit.location, ip: exit.ip, ping: `${ping}ms`, status: 'Active (Layer 3 Decrypted Hop)' }
      ]
    };

    this.notify('SUPER_PVT_UPDATED', this.state.superPvt);
  }

  // --- Panic Nuke Session (Emergency Purge) ---
  panicNukeSession() {
    // Destroy all private tabs from memory
    this.state.tabs = this.state.tabs.filter(t => (t.mode || 'standard') === 'standard');
    if (this.state.tabs.length === 0) {
      this.createTab('brave://newtab', 'New Tab', null);
    }

    this.state.browserMode = 'standard';
    const active = this.state.tabs[0];
    active.active = true;
    this.state.activeTabId = active.id;

    // Trigger circuit rotation in background
    this.refreshOnionIdentity();

    this.notify('SESSION_NUKED', { message: 'All private tabs, cookies & RAM caches destroyed.' });
    this.notify('BROWSER_MODE_CHANGED', 'standard');
    this.notify('TAB_SWITCHED', active);
  }

  // Search Engine Management
  getDefaultSearchEngine() {
    const currentId = this.state.settings.defaultSearchEngine || this.state.defaultSearchEngine || 'google';
    return this.state.searchEngines.find(e => e.id === currentId) || this.state.searchEngines.find(e => e.isDefault) || this.state.searchEngines[0] || DEFAULT_SEARCH_ENGINES[0];
  }

  getSearchEngines() {
    return this.state.searchEngines;
  }

  getSearchEngineById(id) {
    return this.state.searchEngines.find(e => e.id === id);
  }

  setDefaultSearchEngine(engineId) {
    const engine = this.state.searchEngines.find(e => e.id === engineId);
    if (!engine) return;

    this.state.searchEngines.forEach(e => {
      e.isDefault = (e.id === engineId);
    });
    this.state.defaultSearchEngine = engineId;
    this.state.settings.defaultSearchEngine = engineId;

    this.saveToStorage('webbuddy_search_engines', this.state.searchEngines);
    this.saveToStorage('webbuddy_settings', this.state.settings);

    this.notify('SEARCH_ENGINE_CHANGED', engine);
    this.notify('SEARCH_ENGINES_UPDATED', this.state.searchEngines);
    this.notify('SETTINGS_UPDATED', this.state.settings);
  }

  addSearchEngine({ name, shortcut, searchUrl, icon = 'search' }) {
    if (!name || !searchUrl) return null;
    let cleanShortcut = shortcut ? shortcut.trim() : '';
    if (cleanShortcut && !cleanShortcut.startsWith(':') && !cleanShortcut.startsWith('!')) {
      cleanShortcut = ':' + cleanShortcut;
    }
    const newId = 'se-' + Date.now();
    const newEngine = {
      id: newId,
      name: name.trim(),
      shortcut: cleanShortcut,
      searchUrl: searchUrl.trim(),
      suggestUrl: '',
      icon: icon || 'search',
      color: '#4FACFE',
      badgeColor: '#4FACFE',
      isDefault: false,
      isBuiltin: false,
      description: `Custom search engine (${name.trim()})`
    };

    this.state.searchEngines.push(newEngine);
    this.saveToStorage('webbuddy_search_engines', this.state.searchEngines);
    this.notify('SEARCH_ENGINES_UPDATED', this.state.searchEngines);
    return newEngine;
  }

  updateSearchEngine(id, { name, shortcut, searchUrl }) {
    const index = this.state.searchEngines.findIndex(e => e.id === id);
    if (index === -1) return;

    let cleanShortcut = shortcut ? shortcut.trim() : '';
    if (cleanShortcut && !cleanShortcut.startsWith(':') && !cleanShortcut.startsWith('!')) {
      cleanShortcut = ':' + cleanShortcut;
    }

    this.state.searchEngines[index] = {
      ...this.state.searchEngines[index],
      name: name.trim() || this.state.searchEngines[index].name,
      shortcut: cleanShortcut,
      searchUrl: searchUrl.trim() || this.state.searchEngines[index].searchUrl
    };

    this.saveToStorage('webbuddy_search_engines', this.state.searchEngines);
    this.notify('SEARCH_ENGINES_UPDATED', this.state.searchEngines);
  }

  deleteSearchEngine(id) {
    const index = this.state.searchEngines.findIndex(e => e.id === id);
    if (index === -1) return;

    const wasDefault = this.state.searchEngines[index].isDefault || (this.state.defaultSearchEngine === id);
    this.state.searchEngines.splice(index, 1);

    if (wasDefault) {
      const fallback = this.state.searchEngines.find(e => e.id === 'google') || this.state.searchEngines[0];
      if (fallback) {
        this.setDefaultSearchEngine(fallback.id);
      }
    }

    this.saveToStorage('webbuddy_search_engines', this.state.searchEngines);
    this.notify('SEARCH_ENGINES_UPDATED', this.state.searchEngines);
  }

  resetSearchEnginesToDefault() {
    this.state.searchEngines = JSON.parse(JSON.stringify(DEFAULT_SEARCH_ENGINES));
    this.state.defaultSearchEngine = 'google';
    this.state.settings.defaultSearchEngine = 'google';
    this.saveToStorage('webbuddy_search_engines', this.state.searchEngines);
    this.saveToStorage('webbuddy_settings', this.state.settings);
    this.notify('SEARCH_ENGINES_UPDATED', this.state.searchEngines);
    this.notify('SEARCH_ENGINE_CHANGED', this.getDefaultSearchEngine());
    this.notify('SETTINGS_UPDATED', this.state.settings);
  }

  resolveSearchQuery(input) {
    let cleanInput = input.trim();
    let selectedEngine = this.getDefaultSearchEngine();

    // Check if input starts with a keyword shortcut (e.g., ":g ", ":ddg ", "!g ", ":w ", ":b ", ":yt ", etc.)
    const parts = cleanInput.split(/\s+/);
    if (parts.length > 1) {
      const firstWord = parts[0].toLowerCase();
      const matchedEngine = this.state.searchEngines.find(e => {
        if (!e.shortcut) return false;
        const sc = e.shortcut.toLowerCase();
        return sc === firstWord || sc === ':' + firstWord || sc === '!' + firstWord || ':' + sc === firstWord;
      });
      if (matchedEngine) {
        selectedEngine = matchedEngine;
        cleanInput = parts.slice(1).join(' ');
      }
    }

    // Build search URL
    let url = selectedEngine.searchUrl;
    if (url.includes('%s')) {
      url = url.replace('%s', encodeURIComponent(cleanInput));
    } else {
      url = url + (url.includes('?') ? '&q=' : '?q=') + encodeURIComponent(cleanInput);
    }

    return {
      engine: selectedEngine,
      query: cleanInput,
      url: url
    };
  }

  // Navigation
  resolveUrlType(input) {
    const trimmed = input.trim();
    if (trimmed === 'brave://newtab' || trimmed === 'newtab') return 'ntp';
    if (trimmed.startsWith('brave://search')) return 'search';
    if (!trimmed.includes('.') && !trimmed.startsWith('http://') && !trimmed.startsWith('https://') && !trimmed.startsWith('brave://')) {
      return 'web'; // Search engine web results
    }
    return 'web';
  }

  navigateToUrl(input) {
    const activeTab = this.getActiveTab();
    if (!activeTab) return;

    let targetUrl = input.trim();
    let type = 'web';
    let title = 'Web Page';
    let favicon = 'globe';

    if (!targetUrl || targetUrl === 'brave://newtab' || targetUrl === 'newtab') {
      targetUrl = 'brave://newtab';
      type = 'ntp';
      title = 'New Tab';
      favicon = 'shield';
    } else if (targetUrl.startsWith('brave://search')) {
      type = 'search';
      const q = new URLSearchParams(targetUrl.split('?')[1] || '').get('q') || 'Search';
      title = `${q} - WebBuddy Search`;
      favicon = 'search';
    } else if (!targetUrl.includes('.') && !targetUrl.startsWith('http://') && !targetUrl.startsWith('https://') && !targetUrl.startsWith('brave://')) {
      // It is a search query - resolve with default/selected search engine
      const resolved = this.resolveSearchQuery(targetUrl);
      type = 'web';
      title = `${resolved.query} - ${resolved.engine.name} Search`;
      targetUrl = resolved.url;
      favicon = resolved.engine.icon || 'search';
    } else {
      if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
        targetUrl = 'https://' + targetUrl;
      }
      try {
        const parsed = new URL(targetUrl);
        title = parsed.hostname.replace('www.', '');
        if (MOCK_WEB_PAGES[title]) {
          title = MOCK_WEB_PAGES[title].title;
          favicon = MOCK_WEB_PAGES[title].favicon || 'globe';
        }
      } catch {
        title = targetUrl;
      }
    }

    activeTab.isLoading = true;
    this.notify('TAB_LOADING', activeTab);

    setTimeout(() => {
      activeTab.url = targetUrl;
      activeTab.type = type;
      activeTab.title = title;
      activeTab.favicon = favicon;
      activeTab.isLoading = false;

      if (activeTab.history[activeTab.historyIndex] !== targetUrl) {
        activeTab.history = activeTab.history.slice(0, activeTab.historyIndex + 1);
        activeTab.history.push(targetUrl);
        activeTab.historyIndex = activeTab.history.length - 1;
      }

      if (type === 'web' || type === 'search') {
        const adsBlocked = Math.floor(Math.random() * 6) + 2;
        const trackersBlocked = Math.floor(Math.random() * 10) + 5;
        activeTab.adsBlockedCount = adsBlocked;
        activeTab.trackersBlockedCount = trackersBlocked;
        activeTab.totalBlockedCount = adsBlocked + trackersBlocked;
        this.incrementShieldStats(adsBlocked, trackersBlocked);
      } else {
        activeTab.adsBlockedCount = 0;
        activeTab.trackersBlockedCount = 0;
        activeTab.totalBlockedCount = 0;
      }

      this.notify('NAVIGATION_COMPLETE', activeTab);
    }, 250);
  }

  goBack() {
    const tab = this.getActiveTab();
    if (tab && tab.historyIndex > 0) {
      tab.historyIndex--;
      this.navigateToUrl(tab.history[tab.historyIndex]);
    }
  }

  goForward() {
    const tab = this.getActiveTab();
    if (tab && tab.historyIndex < tab.history.length - 1) {
      tab.historyIndex++;
      this.navigateToUrl(tab.history[tab.historyIndex]);
    }
  }

  reloadCurrentTab() {
    const tab = this.getActiveTab();
    if (tab) {
      this.navigateToUrl(tab.url);
    }
  }

  // Wallpapers
  nextWallpaper() {
    this.state.activeWallpaperIndex = (this.state.activeWallpaperIndex + 1) % this.state.wallpapers.length;
    this.notify('WALLPAPER_CHANGED', this.getActiveWallpaper());
  }

  selectWallpaper(index) {
    if (index >= 0 && index < this.state.wallpapers.length) {
      this.state.activeWallpaperIndex = index;
      this.notify('WALLPAPER_CHANGED', this.getActiveWallpaper());
    }
  }

  // Core Ad & Tracker Blocker Actions
  toggleShields() {
    this.state.shields.shieldsEnabled = !this.state.shields.shieldsEnabled;
    this.notify('SHIELDS_TOGGLED', this.state.shields);
  }

  updateShieldOption(key, value) {
    if (this.state.shields.hasOwnProperty(key)) {
      this.state.shields[key] = value;
      this.notify('SHIELDS_OPTION_CHANGED', { key, value });
    }
  }

  toggleFilterList(listId) {
    const fl = this.state.shields.filterLists.find(f => f.id === listId);
    if (fl) {
      fl.enabled = !fl.enabled;
      this.saveToStorage('webbuddy_filter_lists', this.state.shields.filterLists);
      this.notify('FILTER_LIST_TOGGLED', fl);
    }
  }

  incrementShieldStats(ads = 1, trackers = 1) {
    if (!this.state.shields.shieldsEnabled) return;
    this.state.shields.adsBlockedTotal += ads;
    this.state.shields.trackersBlockedTotal += trackers;
    this.state.shields.bandwidthSavedMB = parseFloat((this.state.shields.bandwidthSavedMB + ((ads + trackers) * 0.024)).toFixed(1));
    this.state.shields.timeSavedMin = parseFloat((this.state.shields.timeSavedMin + ((ads + trackers) * 0.002)).toFixed(1));
    this.notify('SHIELDS_STATS_UPDATED', this.state.shields);
  }

  // Shortcuts & Bookmarks
  addTopSite(title, url, icon = 'globe') {
    const newSite = {
      id: 'site-' + Date.now(),
      title,
      url: url.startsWith('http') ? url : 'https://' + url,
      icon,
      color: '#00F2FE'
    };
    this.state.topSites.push(newSite);
    this.saveToStorage('webbuddy_top_sites', this.state.topSites);
    this.notify('TOP_SITES_UPDATED', this.state.topSites);
  }

  removeTopSite(id) {
    this.state.topSites = this.state.topSites.filter(s => s.id !== id);
    this.saveToStorage('webbuddy_top_sites', this.state.topSites);
    this.notify('TOP_SITES_UPDATED', this.state.topSites);
  }

  addBookmark(title, url) {
    const newBookmark = {
      id: 'bm-' + Date.now(),
      title,
      url: url.startsWith('http') ? url : 'https://' + url,
      icon: 'bookmark'
    };
    this.state.bookmarks.push(newBookmark);
    this.saveToStorage('webbuddy_bookmarks', this.state.bookmarks);
    this.notify('BOOKMARKS_UPDATED', this.state.bookmarks);
  }

  // Unified Sidebar Management (Tab Groups & Notes)
  toggleSidebar(open, mode) {
    if (mode) {
      this.state.sidebarMode = mode;
      this.state.settings.sidebarMode = mode;
    }
    this.state.isSidebarOpen = (open !== undefined) ? open : !this.state.isSidebarOpen;
    this.state.isNotesSidebarOpen = this.state.isSidebarOpen && this.state.sidebarMode === 'notes';
    this.state.settings.sidebarOpen = this.state.isSidebarOpen;
    this.state.settings.notesSidebarOpen = this.state.isNotesSidebarOpen;

    this.saveToStorage('webbuddy_settings', this.state.settings);
    this.notify('SIDEBAR_TOGGLED', { isOpen: this.state.isSidebarOpen, mode: this.state.sidebarMode });
    this.notify('NOTES_SIDEBAR_TOGGLED', this.state.isNotesSidebarOpen);
  }

  setSidebarMode(mode) {
    this.state.sidebarMode = mode;
    this.state.settings.sidebarMode = mode;
    if (!this.state.isSidebarOpen) {
      this.state.isSidebarOpen = true;
      this.state.settings.sidebarOpen = true;
    }
    this.state.isNotesSidebarOpen = (mode === 'notes');
    this.state.settings.notesSidebarOpen = this.state.isNotesSidebarOpen;

    this.saveToStorage('webbuddy_settings', this.state.settings);
    this.notify('SIDEBAR_TOGGLED', { isOpen: this.state.isSidebarOpen, mode: this.state.sidebarMode });
    this.notify('NOTES_SIDEBAR_TOGGLED', this.state.isNotesSidebarOpen);
  }

  toggleNotesSidebar(open) {
    if (open === false) {
      this.toggleSidebar(false);
    } else if (this.state.isSidebarOpen && this.state.sidebarMode === 'notes' && open === undefined) {
      this.toggleSidebar(false);
    } else {
      this.toggleSidebar(true, 'notes');
    }
  }

  toggleTabGroupsSidebar(open) {
    if (open === false) {
      this.toggleSidebar(false);
    } else if (this.state.isSidebarOpen && this.state.sidebarMode === 'groups' && open === undefined) {
      this.toggleSidebar(false);
    } else {
      this.toggleSidebar(true, 'groups');
    }
  }

  selectNote(noteId) {
    this.state.activeNoteId = noteId;
    this.notify('NOTE_SELECTED', noteId);
  }

  addNote(title = 'Untitled Note', content = '', url = '', color = '#00F2FE') {
    const newNote = {
      id: 'note-' + Date.now(),
      title: title.trim() || 'Untitled Note',
      content: content,
      url: url || (this.getActiveTab().type === 'web' ? this.getActiveTab().url : ''),
      color: color,
      pinned: false,
      createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      updatedAt: 'Just now'
    };
    this.state.notes.unshift(newNote);
    this.state.activeNoteId = newNote.id;
    this.saveToStorage('webbuddy_saved_notes', this.state.notes);
    this.notify('NOTE_ADDED', newNote);
    return newNote;
  }

  updateNote(id, updates) {
    const note = this.state.notes.find(n => n.id === id);
    if (!note) return;

    Object.assign(note, updates, { updatedAt: 'Just now' });
    this.saveToStorage('webbuddy_saved_notes', this.state.notes);
    this.notify('NOTE_UPDATED', note);
  }

  deleteNote(id) {
    this.state.notes = this.state.notes.filter(n => n.id !== id);
    if (this.state.activeNoteId === id) {
      this.state.activeNoteId = this.state.notes.length > 0 ? this.state.notes[0].id : null;
    }
    this.saveToStorage('webbuddy_saved_notes', this.state.notes);
    this.notify('NOTE_DELETED', id);
  }

  togglePinNote(id) {
    const note = this.state.notes.find(n => n.id === id);
    if (note) {
      note.pinned = !note.pinned;
      // Sort pinned notes to the top
      this.state.notes.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
      this.saveToStorage('webbuddy_saved_notes', this.state.notes);
      this.notify('NOTE_UPDATED', note);
    }
  }

  getNotesCapacityStats() {
    const MAX_STORAGE_BYTES = 5 * 1024 * 1024; // 5 MB LocalStorage quota
    const notesJson = JSON.stringify(this.state.notes || []);
    const usedBytes = new Blob([notesJson]).size;
    const usedKb = (usedBytes / 1024).toFixed(2);
    const usedMb = (usedBytes / (1024 * 1024)).toFixed(3);
    const percentUsed = Math.min(100, parseFloat(((usedBytes / MAX_STORAGE_BYTES) * 100).toFixed(2)));
    const maxNotesLimit = 500;

    return {
      usedBytes,
      usedKb,
      usedMb,
      maxBytes: MAX_STORAGE_BYTES,
      maxMb: 5,
      percentUsed,
      notesCount: this.state.notes.length,
      maxNotesLimit,
      remainingKb: ((MAX_STORAGE_BYTES - usedBytes) / 1024).toFixed(1)
    };
  }

  exportNotesJson() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state.notes, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `webbuddy_notes_backup_${Date.now()}.json`);
    dlAnchorElem.click();
  }

  // Video & Media Controls
  togglePlayPause() {
    this.state.media.isPlaying = !this.state.media.isPlaying;
    this.notify('MEDIA_PLAY_STATE_CHANGED', this.state.media.isPlaying);
  }

  togglePip(active) {
    this.state.media.isPipActive = (active !== undefined) ? active : !this.state.media.isPipActive;
    this.notify('MEDIA_PIP_TOGGLED', this.state.media.isPipActive);
  }

  toggleAutoPip() {
    this.state.media.autoPip = !this.state.media.autoPip;
    this.notify('MEDIA_AUTOPIP_TOGGLED', this.state.media.autoPip);
  }

  toggleOverlapping(active) {
    this.state.media.isOverlapping = (active !== undefined) ? active : !this.state.media.isOverlapping;
    this.notify('MEDIA_OVERLAPPING_TOGGLED', this.state.media.isOverlapping);
  }

  toggleAutoHideControls() {
    this.state.media.autoHideControls = !this.state.media.autoHideControls;
    this.notify('MEDIA_AUTOHIDE_TOGGLED', this.state.media.autoHideControls);
  }

  setPlaybackSpeed(speed) {
    this.state.media.playbackSpeed = speed;
    this.notify('MEDIA_SPEED_CHANGED', speed);
  }

  setMediaVolume(vol) {
    this.state.media.volume = Math.max(0, Math.min(1, vol));
    this.state.media.isMuted = this.state.media.volume === 0;
    this.notify('MEDIA_VOLUME_CHANGED', this.state.media.volume);
  }

  toggleMediaMute() {
    this.state.media.isMuted = !this.state.media.isMuted;
    this.notify('MEDIA_MUTE_TOGGLED', this.state.media.isMuted);
  }

  seekMedia(time) {
    this.state.media.currentTime = Math.max(0, Math.min(this.state.media.duration, time));
    this.notify('MEDIA_TIME_SEEKED', this.state.media.currentTime);
  }

  skipMediaTime(seconds) {
    this.seekMedia(this.state.media.currentTime + seconds);
  }

  toggleMediaLoop() {
    this.state.media.loop = !this.state.media.loop;
    this.notify('MEDIA_LOOP_TOGGLED', this.state.media.loop);
  }

  // Modals & Popups
  openModal(modalName) {
    this.state.activeModal = this.state.activeModal === modalName ? null : modalName;
    this.notify('MODAL_CHANGED', this.state.activeModal);
  }

  openTabGroupModal(groupId = null) {
    this.state.activeGroupEditing = groupId;
    this.state.activeModal = 'tabGroup';
    this.notify('MODAL_CHANGED', 'tabGroup');
  }

  closeModal() {
    this.state.activeModal = null;
    this.state.activeGroupEditing = null;
    this.notify('MODAL_CHANGED', null);
  }

  // Settings
  updateSetting(key, val) {
    this.state.settings[key] = val;
    this.saveToStorage('webbuddy_settings', this.state.settings);
    this.notify('SETTINGS_UPDATED', { key, val, settings: this.state.settings });
  }

  // ==========================================
  // MOTRIX DOWNLOAD MANAGER METHODS
  // ==========================================

  startDownloadEngine() {
    setInterval(() => {
      let activeCount = 0;
      let totalDownSpeed = 0;
      let totalUpSpeed = 0;
      let stateChanged = false;

      this.state.motrix.tasks.forEach(task => {
        if (task.status === 'active') {
          activeCount++;
          // Fluctuate speed naturally around baseline
          const variance = 0.85 + Math.random() * 0.3;
          const currentSpeed = Math.round((task.downloadSpeed || 15000000) * variance);
          task.currentSpeed = currentSpeed;
          totalDownSpeed += currentSpeed;

          if (task.type === 'torrent') {
            const upSpeed = Math.round((task.uploadSpeed || 2000000) * variance);
            totalUpSpeed += upSpeed;
          }

          // Advance completed length
          const delta = currentSpeed;
          task.completedLength = Math.min(task.totalLength, (task.completedLength || 0) + delta);
          task.progress = Math.min(100, parseFloat(((task.completedLength / task.totalLength) * 100).toFixed(1)));
          
          const remainingBytes = task.totalLength - task.completedLength;
          task.eta = currentSpeed > 0 ? Math.max(0, Math.ceil(remainingBytes / currentSpeed)) : 0;

          if (task.completedLength >= task.totalLength) {
            task.status = 'complete';
            task.progress = 100;
            task.currentSpeed = 0;
            task.eta = 0;
            stateChanged = true;
          }
        } else {
          task.currentSpeed = 0;
        }
      });

      this.state.motrix.globalDownloadSpeed = totalDownSpeed;
      this.state.motrix.globalUploadSpeed = totalUpSpeed;

      this.notify('MOTRIX_SPEED_TICK', {
        downloadSpeed: totalDownSpeed,
        uploadSpeed: totalUpSpeed,
        activeCount
      });

      if (stateChanged) {
        this.saveToStorage('webbuddy_motrix_tasks', this.state.motrix.tasks);
        this.notify('MOTRIX_TASKS_UPDATED', this.state.motrix.tasks);
      }
    }, 1000);
  }

  openMotrixModal() {
    this.state.activeModal = this.state.activeModal === 'motrix' ? null : 'motrix';
    this.notify('MODAL_CHANGED', this.state.activeModal);
  }

  setMotrixFilterTab(tab) {
    this.state.motrix.filterTab = tab;
    this.notify('MOTRIX_FILTER_CHANGED', tab);
  }

  setMotrixAddDialogOpen(isOpen) {
    this.state.motrix.isAddDialogOpen = isOpen;
    this.notify('MOTRIX_DIALOG_CHANGED', isOpen);
  }

  async addMotrixTask(taskOptions) {
    const { url, filename, connections = 16, dir = '', referer = '' } = taskOptions;
    if (!url) return;

    const isMagnet = url.startsWith('magnet:');
    const isTorrent = url.endsWith('.torrent') || isMagnet;
    const parsedName = filename || (isMagnet ? 'Magnet Stream - ' + Date.now() : url.split('/').pop().split('?')[0]) || 'download-file.bin';
    
    // Estimate size for simulation
    const estimatedSize = isMagnet ? 2400000000 : (Math.floor(Math.random() * 800) + 100) * 1024 * 1024;

    const newTask = {
      gid: `m-task-${Date.now()}`,
      filename: parsedName,
      url: url,
      type: isMagnet ? 'magnet' : isTorrent ? 'torrent' : 'direct',
      status: 'active',
      totalLength: estimatedSize,
      completedLength: 0,
      downloadSpeed: (12 + Math.floor(Math.random() * 15)) * 1024 * 1024,
      uploadSpeed: isTorrent ? (2 + Math.floor(Math.random() * 3)) * 1024 * 1024 : 0,
      seeders: isTorrent ? 48 + Math.floor(Math.random() * 60) : null,
      peers: isTorrent ? 90 + Math.floor(Math.random() * 100) : null,
      connections: connections || this.state.motrix.maxConnections || 16,
      eta: 60,
      progress: 0,
      addedAt: Date.now()
    };

    // Forward to RPC if connected
    motrixService.addDownload({
      url,
      filename: parsedName,
      connections: newTask.connections,
      dir,
      referer
    }).catch(e => console.log('RPC dispatch note:', e.message));

    this.state.motrix.tasks.unshift(newTask);
    this.state.motrix.isAddDialogOpen = false;
    this.saveToStorage('webbuddy_motrix_tasks', this.state.motrix.tasks);
    this.notify('MOTRIX_TASKS_UPDATED', this.state.motrix.tasks);
  }

  pauseMotrixTask(gid) {
    const task = this.state.motrix.tasks.find(t => t.gid === gid);
    if (task && task.status === 'active') {
      task.status = 'paused';
      task.currentSpeed = 0;
      motrixService.pauseDownload(gid).catch(() => {});
      this.saveToStorage('webbuddy_motrix_tasks', this.state.motrix.tasks);
      this.notify('MOTRIX_TASKS_UPDATED', this.state.motrix.tasks);
    }
  }

  resumeMotrixTask(gid) {
    const task = this.state.motrix.tasks.find(t => t.gid === gid);
    if (task && task.status === 'paused') {
      task.status = 'active';
      motrixService.resumeDownload(gid).catch(() => {});
      this.saveToStorage('webbuddy_motrix_tasks', this.state.motrix.tasks);
      this.notify('MOTRIX_TASKS_UPDATED', this.state.motrix.tasks);
    }
  }

  removeMotrixTask(gid) {
    this.state.motrix.tasks = this.state.motrix.tasks.filter(t => t.gid !== gid);
    motrixService.removeDownload(gid).catch(() => {});
    this.saveToStorage('webbuddy_motrix_tasks', this.state.motrix.tasks);
    this.notify('MOTRIX_TASKS_UPDATED', this.state.motrix.tasks);
  }

  clearCompletedMotrixTasks() {
    this.state.motrix.tasks = this.state.motrix.tasks.filter(t => t.status !== 'complete');
    this.saveToStorage('webbuddy_motrix_tasks', this.state.motrix.tasks);
    this.notify('MOTRIX_TASKS_UPDATED', this.state.motrix.tasks);
  }

  pauseAllMotrixTasks() {
    this.state.motrix.tasks.forEach(t => {
      if (t.status === 'active') t.status = 'paused';
    });
    this.saveToStorage('webbuddy_motrix_tasks', this.state.motrix.tasks);
    this.notify('MOTRIX_TASKS_UPDATED', this.state.motrix.tasks);
  }

  resumeAllMotrixTasks() {
    this.state.motrix.tasks.forEach(t => {
      if (t.status === 'paused') t.status = 'active';
    });
    this.saveToStorage('webbuddy_motrix_tasks', this.state.motrix.tasks);
    this.notify('MOTRIX_TASKS_UPDATED', this.state.motrix.tasks);
  }

  updateMotrixConfig(newConfig) {
    this.state.motrix = { ...this.state.motrix, ...newConfig };
    this.saveToStorage('webbuddy_motrix_config', {
      rpcHost: this.state.motrix.rpcHost,
      rpcPort: this.state.motrix.rpcPort,
      rpcSecret: this.state.motrix.rpcSecret,
      autoInterceptDownloads: this.state.motrix.autoInterceptDownloads,
      maxConnections: this.state.motrix.maxConnections,
      downloadDir: this.state.motrix.downloadDir
    });
    motrixService.configure({
      host: this.state.motrix.rpcHost,
      port: this.state.motrix.rpcPort,
      secret: this.state.motrix.rpcSecret
    });
    this.notify('MOTRIX_CONFIG_UPDATED', this.state.motrix);
  }

  launchMotrixApp() {
    try {
      window.location.href = 'motrix://';
    } catch (e) {
      console.log('Motrix scheme invocation:', e);
    }
  }
}

export const store = new Store();
