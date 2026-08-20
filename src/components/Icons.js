// WebBuddy Custom SVG Icons and Brand Assets

export const WEBBUDDY_LOGO_SVG = `
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
`;

export function getIcon(name, customClass = '', size = 16) {
  const cls = `icon ${customClass}`;
  
  switch (name) {
    case 'webbuddy-logo':
      return `<div class="${cls} wb-logo-wrapper" style="width:${size}px; height:${size}px;">${WEBBUDDY_LOGO_SVG}</div>`;
      
    case 'shield':
    case 'shield-check':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`;

    case 'sparkles':
    case 'leo':
    case 'ai':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>`;

    case 'rewards':
    case 'bat':
    case 'triangle':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 20 2 20 12 2"></polygon></svg>`;

    case 'wallet':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>`;

    case 'search':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;

    case 'plus':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;

    case 'x':
    case 'close':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

    case 'arrow-left':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`;

    case 'arrow-right':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;

    case 'rotate-cw':
    case 'refresh':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>`;

    case 'home':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;

    case 'lock':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;

    case 'star':
    case 'bookmark':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;

    case 'pin':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="17" x2="12" y2="22"></line><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path></svg>`;

    case 'settings':
    case 'sliders':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`;

    case 'image':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`;

    case 'chevron-down':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

    case 'chevron-up':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`;

    case 'link':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;

    case 'wifi':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`;

    case 'bluetooth':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline></svg>`;

    case 'globe':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;

    case 'send':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;

    case 'zap':
    case 'bolt':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;

    case 'coins':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>`;

    case 'circle-dollar-sign':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>`;

    case 'clock':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;

    case 'check':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

    case 'copy':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;

    case 'file-text':
    case 'notes':
    case 'notepad':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>`;

    case 'trash':
    case 'trash-2':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`;

    case 'edit':
    case 'pen':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`;

    case 'download':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`;

    case 'hard-drive':
    case 'database':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;

    case 'play':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;

    case 'pause':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;

    case 'pip':
    case 'picture-in-picture':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><rect x="12" y="11" width="8" height="7" rx="1" fill="currentColor" fill-opacity="0.3"></rect></svg>`;

    case 'skip-back':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>`;

    case 'skip-forward':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>`;

    case 'volume-2':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;

    case 'volume-x':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;

    case 'maximize-2':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`;

    case 'repeat':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>`;

    case 'layers':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`;

    case 'puzzle':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.439 7.85c-.049-.322.059-.648.289-.878l1.568-1.568c.47-.47.704-1.096.704-1.704s-.234-1.234-.704-1.704a2.41 2.41 0 0 0-3.408 0l-1.568 1.568c-.23.23-.556.338-.878.289A5.003 5.003 0 0 0 10.5 4a5 5 0 0 0-4.945 4.095c-.049.322-.338.556-.66.605L3.327 8.989c-.61.092-1.157.433-1.523.948a2.406 2.406 0 0 0 .285 2.871l1.568 1.568c.23.23.338.556.289.878A5.003 5.003 0 0 0 4 20.5a5 5 0 0 0 4.095 4.945c.322.049.556-.23.605-.552l.289-1.568c.092-.61.433-1.157.948-1.523a2.406 2.406 0 0 1 2.871.285l1.568 1.568c.47.47 1.096.704 1.704.704s1.234-.234 1.704-.704a2.41 2.41 0 0 0 0-3.408l-1.568-1.568c-.23-.23-.338-.556-.289-.878A5.003 5.003 0 0 0 20.5 15.5a5 5 0 0 0 4.945-4.095c.049-.322-.23-.556-.552-.605l-1.568-.289c-.61-.092-1.157-.433-1.523-.948a2.406 2.406 0 0 1 .285-2.871z"></path></svg>`;

    case 'menu':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;

    case 'external-link':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;

    case 'google':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>`;

    case 'duckduckgo':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path fill="#DE5833" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c4.686 0 8.57 3.37 9.4 7.82-1.3-.87-2.88-1.39-4.57-1.43l1.1-3.32c.1-.31-.07-.65-.38-.75-.31-.1-.65.07-.75.38l-1.18 3.55c-1.15-.02-2.31.11-3.41.4-1.16-.76-2.5-1.22-3.95-1.31l1.45-3.37c.13-.3-.02-.66-.32-.79-.3-.13-.66.02-.79.32L7.02 7.78C5.23 8.35 3.73 9.53 2.8 11.08 3.79 6.18 8.44 2.4 12 2.4zM6.9 11.2c.88 0 1.6.72 1.6 1.6s-.72 1.6-1.6 1.6-1.6-.72-1.6-1.6.72-1.6 1.6-1.6zm10.2 0c.88 0 1.6.72 1.6 1.6s-.72 1.6-1.6 1.6-1.6-.72-1.6-1.6.72-1.6 1.6-1.6zm-5.1 3.2c1.77 0 3.3.99 4.08 2.44-.45.31-1.02.5-1.63.5h-4.9c-.61 0-1.18-.19-1.63-.5.78-1.45 2.31-2.44 4.08-2.44z"/></svg>`;

    case 'bing':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path fill="#008373" d="M4 2v19.46l5.77 3.33 9.45-5.46v-6.38l-6.15 3.55v-7.8l-4.1 2.37V2H4zm4.97 4.95l4.1-2.37v5.27l-4.1 2.37V6.95z"/></svg>`;

    case 'brave':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path fill="#FB542B" d="M12 2L4 5.5v6.2c0 5.4 3.4 10.4 8 11.8 4.6-1.4 8-6.4 8-11.8V5.5L12 2zm0 3.3l5.5 2.4v4.5c0 3.9-2.4 7.5-5.5 8.6-3.1-1.1-5.5-4.7-5.5-8.6V7.7l5.5-2.4zm-2 5.2l-1.5 1.5 3.5 3.5 6-6-1.5-1.5-4.5 4.5-2-2z"/></svg>`;

    case 'ecosia':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path fill="#008477" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V19h-2v-.07C7.61 18.52 5 15.57 5 12c0-.34.03-.67.08-1 .6 2.83 3.08 5 6.07 5s5.47-2.17 6.07-5c.05.33.08.66.08 1 0 3.57-2.61 6.52-6.3 6.93zM12 5c2.76 0 5 2.24 5 5 0 .34-.03.67-.08 1-.6-2.83-3.08-5-6.07-5s-5.47 2.17-6.07 5c-.05-.33-.08-.66-.08-1 0-2.76 2.24-5 5-5z"/></svg>`;

    case 'yahoo':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path fill="#6001D2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.65 14.5h-2.3l.03-3.75-3.32-6.5h2.47l2.03 4.4 2-4.4h2.44l-3.35 6.5v3.75z"/></svg>`;

    case 'search-engine':
    case 'search-settings':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><path d="M11 8v6M8 11h6"></path></svg>`;

    case 'check-circle':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;

    case 'more-vertical':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>`;

    case 'incognito':
    case 'glasses':
    case 'mask':
    case 'spy':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 10s3-4 10-4 10 4 10 4"></path><path d="M2 10v1a5 5 0 0 0 5 5h1a5 5 0 0 0 4-2 5 5 0 0 0 4 2h1a5 5 0 0 0 5-5v-1"></path><circle cx="7" cy="14" r="3"></circle><circle cx="17" cy="14" r="3"></circle><path d="M10 14h4"></path><path d="M4 6h16"></path></svg>`;

    case 'onion':
    case 'tor':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.5 9 8 9.8V22h4v-.2c4.5-.8 8-4.8 8-9.8 0-5.5-4.5-10-10-10z"></path><path d="M12 6c-3.3 0-6 2.7-6 6 0 3.2 2.2 5.9 5.2 6.4"></path><path d="M12 9c-1.7 0-3 1.3-3 3 0 1.6 1.1 2.9 2.6 3"></path><circle cx="12" cy="12" r="1"></circle></svg>`;

    case 'circuit':
    case 'network':
    case 'nodes':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>`;

    case 'tab-group':
    case 'folder-plus':
    case 'group':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path><line x1="12" y1="10" x2="12" y2="16"></line><line x1="9" y1="13" x2="15" y2="13"></line></svg>`;

    case 'safari-sidebar':
    case 'safari-group':
    case 'tab-groups':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="3"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>`;

    case 'safari-tabs':
    case 'tabs-overview':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect></svg>`;


    case 'palette':
    case 'color':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>`;

    case 'nuke':
    case 'flame':
    case 'panic':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`;

    case 'eye-off':
    case 'stealth':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" y1="2" x2="22" y2="22"></line></svg>`;

    case 'fingerprint':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path><path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"></path><path d="M17.29 21.02c.12-.6.14-1.2.07-1.83a8 8 0 0 0-.8-2.61"></path><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M14 13.12c0 2.38 0 4.38-.14 6.88"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>`;

    case 'motrix':
    case 'motrix-logo':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="motrixGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FF5252" /><stop offset="50%" stop-color="#FF4081" /><stop offset="100%" stop-color="#7C4DFF" /></linearGradient></defs><rect width="32" height="32" rx="7" fill="url(#motrixGrad)" /><path d="M8 10L16 18L24 10" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 16L16 24L24 16" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

    case 'magnet':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 15-4-4 6.75-6.77a7.78 7.78 0 0 1 11 11L13 22l-4-4 6.35-6.35a2.85 2.85 0 0 0-4-4L5 14"></path><path d="m5 8 4 4"></path><path d="m12 15 4 4"></path></svg>`;

    case 'torrent':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="m8 12 4 4 4-4"></path></svg>`;

    case 'speed-down':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>`;

    case 'speed-up':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`;

    case 'pause':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;

    case 'folder-open':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"></path></svg>`;

    case 'link':
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;

    default:
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>`;
  }
}
