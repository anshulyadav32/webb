import './styles/main.css';
import './styles/browser-shell.css';
import './styles/ntp.css';
import './styles/modals.css';
import './styles/brave-search.css';
import './styles/web-viewer.css';
import './styles/tab-groups-sidebar.css';
import './styles/video-controls.css';
import './styles/motrix.css';

import { store } from './state/store.js';
import { initTabBar } from './components/TabBar.js';
import { initAddressBar } from './components/AddressBar.js';
import { initBookmarksBar } from './components/BookmarksBar.js';
import { initNewTabPage } from './components/NewTabPage.js';
import { initWebBuddySearch } from './components/WebBuddySearch.js';
import { initWebViewer } from './components/WebViewer.js';
import { initShieldsModal } from './components/ShieldsModal.js';
import { initSettingsModal } from './components/SettingsModal.js';
import { initAddShortcutModal } from './components/AddShortcutModal.js';
import { initTabGroupsSidebar } from './components/TabGroupsSidebar.js';
import { initVideoControlModal } from './components/VideoControlModal.js';
import { initFloatingPipPlayer } from './components/FloatingPipPlayer.js';
import { initCircuitModal } from './components/CircuitModal.js';
import { initTabGroupModal } from './components/TabGroupModal.js';
import { initMotrixModal } from './components/MotrixModal.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Initialize Clean UI Shell Layout
  app.innerHTML = `
    <!-- Top Chrome: Tabs + Omnibox + Bookmarks -->
    <header class="browser-chrome">
      <div id="tabBarContainer"></div>
      <div id="addressBarContainer"></div>
      <div id="bookmarksBarContainer"></div>
    </header>

    <!-- Main Viewport Router Container -->
    <main id="mainViewport" style="flex:1; display:flex; position:relative; overflow:hidden;">
      <!-- Left Safari Tab Groups & Notes Unified Sidebar -->
      <aside id="sidebarContainer" class="unified-sidebar-drawer"></aside>

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
    <div id="motrixModalContainer"></div>
  `;

  // Initialize modular components
  initTabBar(document.getElementById('tabBarContainer'));
  initAddressBar(document.getElementById('addressBarContainer'));
  initBookmarksBar(document.getElementById('bookmarksBarContainer'));
  initNewTabPage(document.getElementById('ntpContainer'));
  initWebBuddySearch(document.getElementById('searchContainer'));
  initWebViewer(document.getElementById('webViewerContainer'));
  initShieldsModal(document.getElementById('shieldsModalContainer'));
  initSettingsModal(document.getElementById('settingsModalContainer'));
  initAddShortcutModal(document.getElementById('addShortcutModalContainer'));
  initTabGroupsSidebar(document.getElementById('sidebarContainer'));
  initVideoControlModal(document.getElementById('videoControlModalContainer'));
  initFloatingPipPlayer(document.getElementById('floatingPipContainer'));
  initCircuitModal(document.getElementById('circuitModalContainer'));
  initTabGroupModal(document.getElementById('tabGroupModalContainer'));
  initMotrixModal(document.getElementById('motrixModalContainer'));

  // Global Keyboard Shortcuts (Browser + Modes + Groups + Video Controls)
  window.addEventListener('keydown', (e) => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;
    const activeElement = document.activeElement;
    const isTyping = activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA');

    // Ctrl/Cmd + Shift + N: Toggle Incognito Mode
    if (cmdOrCtrl && e.shiftKey && e.key.toLowerCase() === 'n') {
      e.preventDefault();
      const current = store.getBrowserMode();
      store.setBrowserMode(current === 'incognito' ? 'standard' : 'incognito');
      return;
    }

    // Ctrl/Cmd + Shift + P: Toggle Super Private (Tor) Mode
    if (cmdOrCtrl && e.shiftKey && e.key.toLowerCase() === 'p') {
      e.preventDefault();
      const current = store.getBrowserMode();
      store.setBrowserMode(current === 'super-pvt' ? 'standard' : 'super-pvt');
      return;
    }

    // Ctrl/Cmd + Shift + G: Create New Tab Group
    if (cmdOrCtrl && e.shiftKey && e.key.toLowerCase() === 'g') {
      e.preventDefault();
      store.openTabGroupModal(null);
      return;
    }

    // Ctrl/Cmd + J: Toggle Motrix Downloads Hub
    if (cmdOrCtrl && !e.shiftKey && e.key.toLowerCase() === 'j') {
      e.preventDefault();
      store.openMotrixModal();
      return;
    }

    // Ctrl/Cmd + T: New Tab
    if (cmdOrCtrl && !e.shiftKey && e.key.toLowerCase() === 't') {
      e.preventDefault();
      store.createTab();
      return;
    }
    // Ctrl/Cmd + W: Close Active Tab
    if (cmdOrCtrl && !e.shiftKey && e.key.toLowerCase() === 'w') {
      e.preventDefault();
      const activeTab = store.getActiveTab();
      if (activeTab) store.closeTab(activeTab.id);
      return;
    }
    // Ctrl/Cmd + L: Focus Omnibox
    if (cmdOrCtrl && !e.shiftKey && e.key.toLowerCase() === 'l') {
      e.preventDefault();
      const omni = document.getElementById('omniboxInput');
      if (omni) {
        omni.focus();
        omni.select();
      }
      return;
    }
    // Ctrl/Cmd + N: Toggle Safari Tab Groups Sidebar
    if (cmdOrCtrl && !e.shiftKey && e.key.toLowerCase() === 'n') {
      e.preventDefault();
      store.toggleSidebar();
      return;
    }
    // Ctrl/Cmd + S: Toggle Shields Modal
    if (cmdOrCtrl && !e.shiftKey && e.key.toLowerCase() === 's') {
      e.preventDefault();
      store.openModal('shields');
      return;
    }
    // Escape: Close active modals or sidebar
    if (e.key === 'Escape') {
      if (store.getState().isSidebarOpen) {
        store.toggleSidebar(false);
        return;
      }
      store.closeModal();
      return;
    }

    // Media & Video Shortcuts (when not actively typing in an input field)
    if (!isTyping) {
      // Space or K: Play / Pause
      if (e.code === 'Space' || e.key.toLowerCase() === 'k') {
        e.preventDefault();
        store.togglePlayPause();
      }
      // J / Left Arrow: Rewind 10s
      else if (e.key.toLowerCase() === 'j' || e.key === 'ArrowLeft') {
        e.preventDefault();
        store.skipMediaTime(-10);
      }
      // L / Right Arrow: Forward 10s
      else if (e.key.toLowerCase() === 'l' || e.key === 'ArrowRight') {
        e.preventDefault();
        store.skipMediaTime(10);
      }
      // P: Toggle Picture-in-Picture
      else if (e.key.toLowerCase() === 'p') {
        e.preventDefault();
        store.togglePip();
      }
      // M: Toggle Mute
      else if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        store.toggleMediaMute();
      }
      // F: Toggle Fullscreen
      else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        const pipBox = document.getElementById('floatingPipBox');
        if (pipBox) {
          if (!document.fullscreenElement) {
            pipBox.requestFullscreen?.();
          } else {
            document.exitFullscreen?.();
          }
        }
      }
      // > : Increase playback speed
      else if (e.key === '>') {
        e.preventDefault();
        const currentSpeed = store.getState().media.playbackSpeed;
        const speeds = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];
        const nextIdx = Math.min(speeds.length - 1, speeds.indexOf(currentSpeed) + 1);
        store.setPlaybackSpeed(speeds[nextIdx]);
      }
      // < : Decrease playback speed
      else if (e.key === '<') {
        e.preventDefault();
        const currentSpeed = store.getState().media.playbackSpeed;
        const speeds = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];
        const prevIdx = Math.max(0, speeds.indexOf(currentSpeed) - 1);
        store.setPlaybackSpeed(speeds[prevIdx]);
      }
    }
  });

  console.log('🎬 WebBuddy with Incognito, Tab Groups & Super Private Tor initialized successfully!');
});
