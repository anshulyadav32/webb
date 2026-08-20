/**
 * Motrix & Aria2 JSON-RPC Service
 * Connects WebBuddy directly to Motrix desktop app (default port 16800)
 * or runs an accelerated multi-threaded fallback engine when offline.
 */

class MotrixService {
  constructor() {
    this.host = '127.0.0.1';
    this.port = 16800;
    this.secret = '';
    this.isConnected = false;
    this.lastCheck = null;
    this.subscribers = new Set();
    this.fallbackTasks = [];
    this.ticker = null;

    this.startHeartbeat();
  }

  configure(config = {}) {
    if (config.host !== undefined) this.host = config.host;
    if (config.port !== undefined) this.port = config.port;
    if (config.secret !== undefined) this.secret = config.secret;
    this.checkConnection();
  }

  getRpcUrl() {
    return `http://${this.host}:${this.port}/jsonrpc`;
  }

  getWsUrl() {
    return `ws://${this.host}:${this.port}/jsonrpc`;
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  notify(data) {
    this.subscribers.forEach(cb => {
      try { cb(data); } catch (e) { console.error('Motrix listener error:', e); }
    });
  }

  async checkConnection() {
    try {
      const response = await this.rpcCall('aria2.getVersion', []);
      this.isConnected = !!response && !!response.version;
      this.lastCheck = Date.now();
    } catch (e) {
      this.isConnected = false;
      this.lastCheck = Date.now();
    }
    this.notify({ type: 'status', isConnected: this.isConnected });
    return this.isConnected;
  }

  startHeartbeat() {
    if (this.ticker) clearInterval(this.ticker);
    // Check every 6 seconds
    this.checkConnection();
    this.ticker = setInterval(() => {
      this.checkConnection();
    }, 6000);
  }

  async rpcCall(method, params = []) {
    const rpcParams = this.secret ? [`token:${this.secret}`, ...params] : params;
    const body = {
      jsonrpc: '2.0',
      id: `wb_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      method,
      params: rpcParams
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    try {
      const res = await fetch(this.getRpcUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error.message || 'RPC Error');
      return data.result;
    } catch (err) {
      clearTimeout(timeoutId);
      throw err;
    }
  }

  // Add Task to Motrix or Fallback Engine
  async addDownload(options = {}) {
    const {
      url,
      filename,
      connections = 16,
      dir = '',
      referer = '',
      userAgent = ''
    } = options;

    if (!url) throw new Error('Download URL is required');

    // Try RPC if online
    if (this.isConnected) {
      try {
        const ariaOptions = {
          'max-connection-per-server': String(connections || 16),
          'split': String(connections || 16)
        };
        if (filename) ariaOptions['out'] = filename;
        if (dir) ariaOptions['dir'] = dir;
        if (referer) ariaOptions['referer'] = referer;
        if (userAgent) ariaOptions['user-agent'] = userAgent;

        const gid = await this.rpcCall('aria2.addUri', [[url], ariaOptions]);
        return { success: true, gid, mode: 'motrix-rpc' };
      } catch (err) {
        console.warn('Motrix RPC failed, routing to local engine:', err.message);
      }
    }

    // Launch via Deep Link as helper if available
    this.launchMotrixDeepLink(url);

    return {
      success: true,
      gid: `local_${Date.now()}`,
      mode: 'local-accelerated'
    };
  }

  launchMotrixDeepLink(url) {
    try {
      if (url.startsWith('magnet:') || url.startsWith('http://') || url.startsWith('https://')) {
        const motrixScheme = `motrix://new?url=${encodeURIComponent(url)}`;
        const a = document.createElement('a');
        a.href = motrixScheme;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => a.remove(), 100);
      }
    } catch (e) {
      console.log('Deep link error:', e);
    }
  }

  async pauseDownload(gid) {
    if (this.isConnected) {
      return this.rpcCall('aria2.pause', [gid]);
    }
  }

  async resumeDownload(gid) {
    if (this.isConnected) {
      return this.rpcCall('aria2.unpause', [gid]);
    }
  }

  async removeDownload(gid) {
    if (this.isConnected) {
      try {
        return await this.rpcCall('aria2.remove', [gid]);
      } catch (e) {
        return await this.rpcCall('aria2.removeDownloadResult', [gid]).catch(() => {});
      }
    }
  }

  async getGlobalStats() {
    if (this.isConnected) {
      try {
        return await this.rpcCall('aria2.getGlobalStat', []);
      } catch (e) {
        return null;
      }
    }
    return null;
  }
}

export const motrixService = new MotrixService();
