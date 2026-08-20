import { store } from '../state/store.js';
import { getIcon } from './Icons.js';

export function initMotrixModal(container) {
  function formatBytes(bytes, decimals = 1) {
    if (!bytes || bytes === 0) return '0 B';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  function formatSpeed(bytesPerSec) {
    if (!bytesPerSec || bytesPerSec === 0) return '0 KB/s';
    return formatBytes(bytesPerSec) + '/s';
  }

  function formatTime(seconds) {
    if (!seconds || seconds <= 0 || seconds === Infinity) return '--';
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins < 60) return `${mins}m ${secs}s`;
    const hours = Math.floor(mins / 60);
    const remMins = mins % 60;
    return `${hours}h ${remMins}m`;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeAttr(str) {
    if (!str) return '';
    return String(str).replace(/"/g, '&quot;');
  }

  function render() {
    const state = store.getState();
    if (state.activeModal !== 'motrix') {
      container.innerHTML = '';
      return;
    }

    const motrix = state.motrix;
    const isConnected = motrix.isConnected;
    const activeTab = motrix.filterTab || 'all';
    const isAddOpen = motrix.isAddDialogOpen;

    // Filter tasks
    let filteredTasks = motrix.tasks;
    if (activeTab === 'downloading') {
      filteredTasks = motrix.tasks.filter(t => t.status === 'active');
    } else if (activeTab === 'completed') {
      filteredTasks = motrix.tasks.filter(t => t.status === 'complete');
    } else if (activeTab === 'paused') {
      filteredTasks = motrix.tasks.filter(t => t.status === 'paused' || t.status === 'error');
    }

    const downloadingCount = motrix.tasks.filter(t => t.status === 'active').length;
    const completedCount = motrix.tasks.filter(t => t.status === 'complete').length;
    const pausedCount = motrix.tasks.filter(t => t.status === 'paused' || t.status === 'error').length;

    container.innerHTML = `
      <div class="modal-overlay" id="motrixOverlay">
        <div class="center-modal motrix-modal-wrapper" id="motrixCard">
          
          <!-- Header -->
          <div class="motrix-header">
            <div class="motrix-brand-group">
              <div class="motrix-logo-badge">
                ${getIcon('motrix-logo', '', 32)}
              </div>
              <div class="motrix-title-box">
                <h3>
                  <span>Motrix Download Hub</span>
                  <span class="motrix-status-pill ${isConnected ? 'online' : 'offline'}" title="${isConnected ? 'Connected to Motrix background Aria2 RPC on port ' + motrix.rpcPort : 'Motrix desktop daemon offline. Using WebBuddy Turbo Downloader Engine.'}">
                    <span class="motrix-status-dot"></span>
                    ${isConnected ? `RPC ONLINE :${motrix.rpcPort}` : 'TURBO ENGINE'}
                  </span>
                </h3>
                <p>Multi-Threaded Torrent, Magnet & Accelerated File Downloader</p>
              </div>
            </div>

            <div style="display:flex; align-items:center; gap:14px;">
              <!-- Live Speed Gauges -->
              <div class="motrix-speed-pill">
                <div class="speed-metric down" title="Total Download Bandwidth">
                  ${getIcon('speed-down', '', 14)}
                  <span id="motrixLiveDownSpeed">${formatSpeed(motrix.globalDownloadSpeed)}</span>
                </div>
                <div class="speed-metric up" title="Total Upload Bandwidth (Torrents)">
                  ${getIcon('speed-up', '', 14)}
                  <span id="motrixLiveUpSpeed">${formatSpeed(motrix.globalUploadSpeed)}</span>
                </div>
              </div>

              <!-- Close Button -->
              <button class="modal-close-btn" id="closeMotrixBtn" title="Close Download Manager">
                ${getIcon('close', '', 14)}
              </button>
            </div>
          </div>

          <!-- Toolbar Controls -->
          <div class="motrix-toolbar">
            <!-- Filter Tabs -->
            <div class="motrix-tabs-nav">
              <button class="motrix-tab-btn ${activeTab === 'all' ? 'active' : ''}" data-filter="all">
                <span>All Tasks</span>
                <span class="motrix-tab-count">${motrix.tasks.length}</span>
              </button>
              <button class="motrix-tab-btn ${activeTab === 'downloading' ? 'active' : ''}" data-filter="downloading">
                <span>Downloading</span>
                <span class="motrix-tab-count">${downloadingCount}</span>
              </button>
              <button class="motrix-tab-btn ${activeTab === 'completed' ? 'active' : ''}" data-filter="completed">
                <span>Completed</span>
                <span class="motrix-tab-count">${completedCount}</span>
              </button>
              <button class="motrix-tab-btn ${activeTab === 'paused' ? 'active' : ''}" data-filter="paused">
                <span>Paused / Stopped</span>
                <span class="motrix-tab-count">${pausedCount}</span>
              </button>
            </div>

            <!-- Action Buttons -->
            <div class="motrix-toolbar-actions">
              <button class="btn-motrix-primary" id="openNewTaskBtn">
                ${getIcon('plus', '', 14)}
                <span>New Download</span>
              </button>
              <button class="btn-motrix-secondary" id="pauseAllBtn" title="Pause all downloading tasks">
                ${getIcon('pause', '', 13)}
                <span>Pause All</span>
              </button>
              <button class="btn-motrix-secondary" id="resumeAllBtn" title="Resume all paused tasks">
                ${getIcon('play', '', 13)}
                <span>Resume All</span>
              </button>
              <button class="btn-motrix-secondary" id="clearCompletedBtn" title="Remove completed downloads from list">
                ${getIcon('trash', '', 13)}
                <span>Clear Done</span>
              </button>
              <button class="btn-motrix-secondary" id="launchMotrixAppBtn" title="Launch Motrix Desktop Application (motrix://)">
                ${getIcon('external-link', '', 13)}
                <span>Motrix App</span>
              </button>
            </div>
          </div>

          <!-- Task Cards List -->
          <div class="motrix-body" id="motrixTaskList">
            ${filteredTasks.length === 0 ? `
              <div class="motrix-empty-state">
                <div class="motrix-empty-icon">
                  ${getIcon('download', '', 32)}
                </div>
                <div style="font-size:15px; font-weight:600; color:#E2E8F0;">No downloads in this section</div>
                <div style="font-size:12px; color:#64748B; max-width:320px;">
                  Click "+ New Download" to start downloading direct files, magnet links, or torrents with multi-threaded acceleration.
                </div>
              </div>
            ` : filteredTasks.map(task => {
              const isDownloading = task.status === 'active';
              const isCompleted = task.status === 'complete';
              const isPaused = task.status === 'paused';
              const isTorrent = task.type === 'torrent' || task.type === 'magnet';
              const progress = task.progress || 0;
              const speed = task.currentSpeed || task.downloadSpeed || 0;

              return `
                <div class="motrix-task-card" data-gid="${escapeAttr(task.gid)}">
                  <div class="motrix-task-top">
                    <div class="motrix-file-info">
                      <div class="motrix-type-badge ${isTorrent ? 'torrent' : ''}">
                        ${getIcon(isTorrent ? 'magnet' : 'file-text', '', 18)}
                      </div>
                      <div class="motrix-filename-col">
                        <span class="motrix-filename" title="${escapeAttr(task.filename)}">
                          ${escapeHtml(task.filename)}
                        </span>
                        <div class="motrix-source-url" title="${escapeAttr(task.url)}">
                          ${escapeHtml(task.url)}
                        </div>
                      </div>
                    </div>

                    <div class="motrix-task-actions">
                      ${!isCompleted ? `
                        <button class="motrix-action-btn ${isDownloading ? 'pause-task-btn' : 'resume-task-btn'}" 
                                data-gid="${escapeAttr(task.gid)}" 
                                title="${isDownloading ? 'Pause download' : 'Resume download'}">
                          ${getIcon(isDownloading ? 'pause' : 'play', '', 13)}
                        </button>
                      ` : `
                        <button class="motrix-action-btn open-file-btn" data-gid="${escapeAttr(task.gid)}" title="Reveal in Finder / Folder">
                          ${getIcon('folder-open', '', 14)}
                        </button>
                      `}
                      <button class="motrix-action-btn copy-link-btn" data-url="${escapeAttr(task.url)}" title="Copy Download Link">
                        ${getIcon('link', '', 13)}
                      </button>
                      <button class="motrix-action-btn delete delete-task-btn" data-gid="${escapeAttr(task.gid)}" title="Delete task">
                        ${getIcon('trash', '', 13)}
                      </button>
                    </div>
                  </div>

                  <!-- Progress Bar -->
                  <div class="motrix-progress-wrapper">
                    <div class="motrix-progress-bar ${isCompleted ? 'completed' : isPaused ? 'paused' : ''}" style="width: ${progress}%;"></div>
                  </div>

                  <!-- Meta Info -->
                  <div class="motrix-task-meta">
                    <div class="motrix-meta-left">
                      <span>${formatBytes(task.completedLength || 0)} / ${formatBytes(task.totalLength || 0)}</span>
                      <span style="color:#64748B;">•</span>
                      <span>${progress}%</span>
                      <span style="color:#64748B;">•</span>
                      <span style="color:var(--text-secondary); font-size:10px; background:rgba(255,255,255,0.06); padding:1px 6px; border-radius:4px;">
                        ${task.connections || 16} Connections
                      </span>
                      ${isTorrent && task.seeders ? `
                        <span style="color:#38BDF8; font-size:10px;">
                          🌱 ${task.seeders} Seeds / ${task.peers || 0} Peers
                        </span>
                      ` : ''}
                    </div>

                    <div class="motrix-meta-right">
                      ${isDownloading ? `
                        <span style="color:#00F2FE;">${formatSpeed(speed)}</span>
                        <span style="color:#64748B;">•</span>
                        <span>ETA: ${formatTime(task.eta)}</span>
                      ` : isCompleted ? `
                        <span style="color:#10B981; font-weight:600;">✓ Completed</span>
                      ` : `
                        <span style="color:#F59E0B; font-weight:600;">❚❚ Paused</span>
                      `}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Add New Download Dialog Overlay -->
          ${isAddOpen ? `
            <div class="motrix-dialog-overlay" id="addDialogOverlay">
              <div class="motrix-dialog">
                <div class="motrix-dialog-title">
                  <div style="display:flex; align-items:center; gap:8px;">
                    ${getIcon('motrix-logo', '', 20)}
                    <span>New Download Task</span>
                  </div>
                  <button class="modal-close-btn" id="closeAddDialogBtn">
                    ${getIcon('close', '', 12)}
                  </button>
                </div>

                <div class="motrix-input-group">
                  <label>URL, Magnet Link, or Torrent Address</label>
                  <textarea id="downloadUrlInput" rows="3" placeholder="http://, https://, magnet:?xt=urn:btih:..., ftp://" autofocus></textarea>
                </div>

                <div class="motrix-input-group">
                  <label>Rename File (Optional)</label>
                  <input type="text" id="downloadFilenameInput" placeholder="Leave blank to use original filename" />
                </div>

                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
                  <div class="motrix-input-group">
                    <label>Multi-Thread Connections</label>
                    <select id="downloadConnectionsSelect" style="background:rgba(0,0,0,0.35); border:1px solid rgba(255,255,255,0.1); color:#FFF; padding:8px 10px; border-radius:8px; outline:none;">
                      <option value="4">4 Connections</option>
                      <option value="8">8 Connections</option>
                      <option value="16" selected>16 Connections (Fast)</option>
                      <option value="32">32 Connections (Turbo)</option>
                      <option value="64">64 Connections (Extreme)</option>
                    </select>
                  </div>

                  <div class="motrix-input-group">
                    <label>Save Directory</label>
                    <input type="text" id="downloadDirInput" value="${escapeAttr(motrix.downloadDir || '~/Downloads')}" />
                  </div>
                </div>

                <div class="motrix-dialog-footer">
                  <button class="btn-motrix-secondary" id="cancelAddBtn">Cancel</button>
                  <button class="btn-motrix-primary" id="startDownloadSubmitBtn">
                    ${getIcon('download', '', 14)}
                    <span>Start Download</span>
                  </button>
                </div>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    attachEventListeners();
  }

  function attachEventListeners() {
    // Close modal
    const overlay = document.getElementById('motrixOverlay');
    const closeBtn = document.getElementById('closeMotrixBtn');

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) store.closeModal();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => store.closeModal());
    }

    // Filter tab buttons
    container.querySelectorAll('.motrix-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        store.setMotrixFilterTab(filter);
      });
    });

    // Toolbar buttons
    const openNewTaskBtn = document.getElementById('openNewTaskBtn');
    if (openNewTaskBtn) {
      openNewTaskBtn.addEventListener('click', () => store.setMotrixAddDialogOpen(true));
    }

    const pauseAllBtn = document.getElementById('pauseAllBtn');
    if (pauseAllBtn) {
      pauseAllBtn.addEventListener('click', () => store.pauseAllMotrixTasks());
    }

    const resumeAllBtn = document.getElementById('resumeAllBtn');
    if (resumeAllBtn) {
      resumeAllBtn.addEventListener('click', () => store.resumeAllMotrixTasks());
    }

    const clearCompletedBtn = document.getElementById('clearCompletedBtn');
    if (clearCompletedBtn) {
      clearCompletedBtn.addEventListener('click', () => store.clearCompletedMotrixTasks());
    }

    const launchMotrixAppBtn = document.getElementById('launchMotrixAppBtn');
    if (launchMotrixAppBtn) {
      launchMotrixAppBtn.addEventListener('click', () => store.launchMotrixApp());
    }

    // Task actions
    container.querySelectorAll('.pause-task-btn').forEach(btn => {
      btn.addEventListener('click', () => store.pauseMotrixTask(btn.dataset.gid));
    });

    container.querySelectorAll('.resume-task-btn').forEach(btn => {
      btn.addEventListener('click', () => store.resumeMotrixTask(btn.dataset.gid));
    });

    container.querySelectorAll('.delete-task-btn').forEach(btn => {
      btn.addEventListener('click', () => store.removeMotrixTask(btn.dataset.gid));
    });

    container.querySelectorAll('.copy-link-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.dataset.url;
        if (url) {
          navigator.clipboard.writeText(url).then(() => {
            btn.style.color = '#10B981';
            setTimeout(() => { btn.style.color = ''; }, 1200);
          });
        }
      });
    });

    container.querySelectorAll('.open-file-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        alert('File is located in your Downloads directory.');
      });
    });

    // Dialog events
    const closeAddDialogBtn = document.getElementById('closeAddDialogBtn');
    if (closeAddDialogBtn) {
      closeAddDialogBtn.addEventListener('click', () => store.setMotrixAddDialogOpen(false));
    }

    const cancelAddBtn = document.getElementById('cancelAddBtn');
    if (cancelAddBtn) {
      cancelAddBtn.addEventListener('click', () => store.setMotrixAddDialogOpen(false));
    }

    const startDownloadSubmitBtn = document.getElementById('startDownloadSubmitBtn');
    if (startDownloadSubmitBtn) {
      startDownloadSubmitBtn.addEventListener('click', () => {
        const url = document.getElementById('downloadUrlInput')?.value.trim();
        const filename = document.getElementById('downloadFilenameInput')?.value.trim();
        const connections = parseInt(document.getElementById('downloadConnectionsSelect')?.value || '16', 10);
        const dir = document.getElementById('downloadDirInput')?.value.trim();

        if (!url) {
          alert('Please enter a valid URL or Magnet link.');
          return;
        }

        store.addMotrixTask({ url, filename, connections, dir });
      });
    }
  }

  // Subscribe to store changes
  store.subscribe((event, payload) => {
    if (event === 'MODAL_CHANGED' || 
        event === 'MOTRIX_STATUS_CHANGED' || 
        event === 'MOTRIX_TASKS_UPDATED' || 
        event === 'MOTRIX_FILTER_CHANGED' || 
        event === 'MOTRIX_DIALOG_CHANGED') {
      render();
    } else if (event === 'MOTRIX_SPEED_TICK' && store.getState().activeModal === 'motrix') {
      // Light re-render or update speeds directly for high frame-rate smoothness
      const downElem = document.getElementById('motrixLiveDownSpeed');
      const upElem = document.getElementById('motrixLiveUpSpeed');
      if (downElem) downElem.textContent = formatSpeed(payload.downloadSpeed);
      if (upElem) upElem.textContent = formatSpeed(payload.uploadSpeed);
      render();
    }
  });

  render();
}
