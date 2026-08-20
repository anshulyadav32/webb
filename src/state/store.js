import {
  DEFAULT_WALLPAPERS,
  DEFAULT_TOP_SITES,
  DEFAULT_BOOKMARKS,
  DEFAULT_NOTES,
  DEFAULT_FILTER_LISTS,
  DEFAULT_SEARCH_ENGINES,
  MOCK_WEB_PAGES,
  SEARCH_RESULTS_MOCK
} from './defaultData.js';

class Store {
  constructor() {
    this.listeners = new Set();
    
    // Load persisted state or fallback
    const savedTopSites = this.loadFromStorage('webbuddy_top_sites', DEFAULT_TOP_SITES);
    const savedBookmarks = this.loadFromStorage('webbuddy_bookmarks', DEFAULT_BOOKMARKS);
    const savedNotes = this.loadFromStorage('webbuddy_saved_notes', DEFAULT_NOTES);
    const savedFilterLists = this.loadFromStorage('webbuddy_filter_lists', DEFAULT_FILTER_LISTS);
    const savedSearchEngines = this.loadFromStorage('webbuddy_search_engines', DEFAULT_SEARCH_ENGINES);
    const savedSettings = this.loadFromStorage('webbuddy_settings', {
      showShieldsStats: true,
      showTopSites: true,
      showClock: true,
      clockFormat: '12h',
      theme: 'dark',
      blurWallpaper: false,
      bookmarksBarVisible: true,
      notesSidebarOpen: false,
      defaultSearchEngine: 'google'
    });

    this.state = {
      // Search Engines
      searchEngines: savedSearchEngines,
      defaultSearchEngine: savedSettings.defaultSearchEngine || 'google',
      // Browser Tabs
      tabs: [
        {
          id: 'tab-1',
          title: 'New Tab',
          url: 'brave://newtab',
          type: 'ntp',
          favicon: 'shield',
          pinned: false,
          active: true,
          adsBlockedCount: 0,
          trackersBlockedCount: 0,
          totalBlockedCount: 0,
          history: ['brave://newtab'],
          historyIndex: 0,
          isLoading: false
        }
      ],
      activeTabId: 'tab-1',

      // Wallpapers
      wallpapers: DEFAULT_WALLPAPERS,
      activeWallpaperIndex: 0,

      // Notes & Notepad Sidebar
      notes: savedNotes,
      isNotesSidebarOpen: savedSettings.notesSidebarOpen || false,
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
      activeModal: null, // 'shields' | 'settings' | 'addShortcut' | 'videoControls'

      // Settings
      settings: savedSettings
    };
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

  getActiveTab() {
    return this.state.tabs.find(t => t.id === this.state.activeTabId) || this.state.tabs[0];
  }

  getActiveWallpaper() {
    return this.state.wallpapers[this.state.activeWallpaperIndex % this.state.wallpapers.length];
  }

  getTotalFilterRulesCount() {
    return this.state.shields.filterLists
      .filter(fl => fl.enabled)
      .reduce((sum, fl) => sum + fl.rulesCount, 0);
  }

  // --- Actions ---

  // Tab Management
  createTab(url = 'brave://newtab', title = 'New Tab') {
    const isNtp = url === 'brave://newtab';
    const newId = 'tab-' + Date.now();
    const adsNow = isNtp ? 0 : Math.floor(Math.random() * 8) + 3;
    const trackersNow = isNtp ? 0 : Math.floor(Math.random() * 12) + 6;

    const newTab = {
      id: newId,
      title: title,
      url: url,
      type: isNtp ? 'ntp' : this.resolveUrlType(url),
      favicon: isNtp ? 'shield' : 'globe',
      pinned: false,
      active: true,
      adsBlockedCount: adsNow,
      trackersBlockedCount: trackersNow,
      totalBlockedCount: adsNow + trackersNow,
      history: [url],
      historyIndex: 0,
      isLoading: false
    };

    this.state.tabs.forEach(t => t.active = false);
    this.state.tabs.push(newTab);
    this.state.activeTabId = newId;

    if (!isNtp) {
      this.incrementShieldStats(adsNow, trackersNow);
    }

    this.notify('TAB_CREATED', newTab);
  }

  switchTab(tabId) {
    const tab = this.state.tabs.find(t => t.id === tabId);
    if (!tab) return;

    this.state.tabs.forEach(t => t.active = (t.id === tabId));
    this.state.activeTabId = tabId;
    this.notify('TAB_SWITCHED', tab);
  }

  closeTab(tabId) {
    if (this.state.tabs.length === 1) {
      this.navigateToUrl('brave://newtab');
      return;
    }

    const index = this.state.tabs.findIndex(t => t.id === tabId);
    if (index === -1) return;

    const wasActive = this.state.tabs[index].active;
    this.state.tabs.splice(index, 1);

    if (wasActive) {
      const nextTab = this.state.tabs[Math.max(0, index - 1)];
      nextTab.active = true;
      this.state.activeTabId = nextTab.id;
    }

    this.notify('TAB_CLOSED', { tabId, activeTabId: this.state.activeTabId });
  }

  togglePinTab(tabId) {
    const tab = this.state.tabs.find(t => t.id === tabId);
    if (tab) {
      tab.pinned = !tab.pinned;
      this.state.tabs.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
      this.notify('TAB_PINNED', tab);
    }
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

  // Notes Sidebar & Capacity Management
  toggleNotesSidebar(open) {
    this.state.isNotesSidebarOpen = (open !== undefined) ? open : !this.state.isNotesSidebarOpen;
    this.state.settings.notesSidebarOpen = this.state.isNotesSidebarOpen;
    this.saveToStorage('webbuddy_settings', this.state.settings);
    this.notify('NOTES_SIDEBAR_TOGGLED', this.state.isNotesSidebarOpen);
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

  closeModal() {
    this.state.activeModal = null;
    this.notify('MODAL_CHANGED', null);
  }

  // Settings
  updateSetting(key, val) {
    this.state.settings[key] = val;
    this.saveToStorage('webbuddy_settings', this.state.settings);
    this.notify('SETTINGS_UPDATED', { key, val, settings: this.state.settings });
  }
}

export const store = new Store();
