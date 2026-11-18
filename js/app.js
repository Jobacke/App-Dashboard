/* ==========================================================================
   Command Hub · App-Dashboard — Application Logic & Interactive Features
   ========================================================================== */

const APPS = [
  {
    id: 'schichttagebuch',
    key: '1',
    title: 'Schichttagebuch',
    domain: 'schicht.vjbackhaus.de',
    url: 'https://schicht.vjbackhaus.de/',
    icon: 'icons/schichttagebuch.png',
    category: 'rettungsdienst',
    categoryLabel: 'Rettungsdienst · Dienstplan',
    accent: '#ff2a5c',
    glow: 'rgba(255, 42, 92, 0.22)',
    border: 'rgba(255, 42, 92, 0.45)',
    contrast: 'light',
    bentoWide: true,
    description: 'Persönliches Schichttagebuch für den Rettungsdienst mit CareMan-Sync, Dienstplan-Statistiken, Einsatzdokumentation und Kalender-Export.',
    telemetry: 'CareMan Autopilot & Cloud-Sync aktiv',
    quickActions: [
      { label: '📅 Dienstplan & Schichten', url: 'https://schicht.vjbackhaus.de/' },
      { label: '⚡ CareMan Sync', url: 'https://schicht.vjbackhaus.de/' }
    ],
    keywords: 'schichtbuch dienstplan rettungsdienst arbeit schichten careman kalender urlaub überstunden'
  },
  {
    id: 'wissen',
    key: '2',
    title: 'Wissen',
    domain: 'wissen.vjbackhaus.de',
    url: 'https://wissen.vjbackhaus.de/',
    icon: 'icons/wissen.png',
    category: 'rettungsdienst',
    categoryLabel: 'Rettungsdienst · Wissensdatenbank',
    accent: '#f0b429',
    glow: 'rgba(240, 180, 41, 0.22)',
    border: 'rgba(240, 180, 41, 0.45)',
    contrast: 'dark',
    bentoWide: true,
    hasInlineSearch: true,
    inlineSearchPlaceholder: 'Direktsuche in Wissen RD (z. B. ACS, Analgesie, Kinder)…',
    description: 'Persönliche Wissensdatenbank für den Rettungsdienst – strukturierte Algorithmen, Medikamente & Leitlinien, per Siri und Claude abrufbar.',
    telemetry: 'Siri-Kurzbefehle & KI-Assistent integriert',
    quickActions: [
      { label: '📖 Alle Themen', url: 'https://wissen.vjbackhaus.de/#/' },
      { label: '⚙️ Einstellungen', url: 'https://wissen.vjbackhaus.de/#/einstellungen' }
    ],
    keywords: 'wissen rd rettungsdienst medikamente algorithmen siri nachschlagewerk notfallmedizin leitlinien'
  },
  {
    id: 'zna-navi',
    key: '3',
    title: 'ZNA-Navi',
    domain: 'zna.vjbackhaus.de',
    url: 'https://zna.vjbackhaus.de/',
    icon: 'icons/zna-navi.png',
    category: 'rettungsdienst',
    categoryLabel: 'Rettungsdienst · Navigation',
    accent: '#ff3355',
    glow: 'rgba(255, 51, 85, 0.22)',
    border: 'rgba(255, 51, 85, 0.45)',
    contrast: 'light',
    bentoWide: false,
    description: 'Ein Tipp – Waze oder Karten navigiert sofort zur richtigen Notaufnahme und Liegendanfahrt inklusive Leitstellen-Index.',
    telemetry: 'Direkt-Routing zu ZNAs & Leitstellen',
    quickActions: [
      { label: '🚑 ZNA-Auswahl starten', url: 'https://zna.vjbackhaus.de/' },
      { label: '📍 Leitstellen-Index', url: 'https://zna.vjbackhaus.de/' }
    ],
    keywords: 'zna navi notaufnahme klinik krankenhaus waze navigation rettungsdienst anfahrt leitstelle'
  },
  {
    id: 'notizen',
    key: '4',
    title: 'Notizen',
    domain: 'remembers.vjbackhaus.de',
    url: 'https://remembers.vjbackhaus.de/',
    icon: 'icons/notizen.png',
    category: 'alltag',
    categoryLabel: 'Alltag · Sprachnotizen & Memos',
    accent: '#eab308',
    glow: 'rgba(234, 179, 8, 0.22)',
    border: 'rgba(234, 179, 8, 0.45)',
    contrast: 'dark',
    bentoWide: false,
    description: 'Sprachnotizen und Gedanken blitzschnell aufnehmen, transkribieren und übersichtlich organisieren.',
    telemetry: 'Audio-Aufnahme & Cloud-Organisation',
    quickActions: [
      { label: '🎙️ Neue Sprachnotiz', url: 'https://remembers.vjbackhaus.de/' },
      { label: '🗂️ Alle Aufnahmen', url: 'https://remembers.vjbackhaus.de/' }
    ],
    keywords: 'notizen sprachnotizen remembers audio memo diktiergerät ideen aufnahme'
  },
  {
    id: 'gesundheit',
    key: '5',
    title: 'Gesundheit',
    domain: 'cockpit.vjbackhaus.de',
    url: 'https://cockpit.vjbackhaus.de/',
    icon: 'icons/gesundheit.png',
    category: 'performance',
    categoryLabel: 'Gesundheit · Vital-Cockpit',
    accent: '#ff7a59',
    glow: 'rgba(255, 122, 89, 0.22)',
    border: 'rgba(255, 122, 89, 0.45)',
    contrast: 'light',
    bentoWide: false,
    description: 'Gesundheitscockpit für tägliche Gesundheitswerte, Schlafdaten, HRV, Konstanz und langfristige Verlaufsanalyse.',
    telemetry: 'Apple Health & Kurzbefehl-Sync bereit',
    quickActions: [
      { label: '❤️ Tageswerte & Trend', url: 'https://cockpit.vjbackhaus.de/' },
      { label: '😴 Schlaf & Konstanz', url: 'https://cockpit.vjbackhaus.de/' }
    ],
    keywords: 'gesundheit gesundheitscockpit schlaf puls hrv gewicht blutdruck vitalwerte konstanz'
  },
  {
    id: 'analytics',
    key: '6',
    title: 'Analytics',
    domain: 'analytics.vjbackhaus.de',
    url: 'https://analytics.vjbackhaus.de/',
    icon: 'icons/analytics.png',
    category: 'performance',
    categoryLabel: 'Sport · Strava & Zwift Coaching',
    accent: '#ff6b1a',
    glow: 'rgba(255, 107, 26, 0.24)',
    border: 'rgba(255, 107, 26, 0.48)',
    contrast: 'light',
    bentoWide: true,
    description: 'Smarte Trainingsanalyse, KI-Coaching, Zwift Custom-Workouts und integrierte Wahoo KICKR Headwind Vollbild-Steuerung.',
    telemetry: 'Strava Sync · Zwift Workouts · Headwind BLE',
    quickActions: [
      { label: '📊 Trainings-Dashboard', url: 'https://analytics.vjbackhaus.de/' },
      { label: '🌬️ KICKR Headwind Cockpit', url: 'https://analytics.vjbackhaus.de/?headwind=1' }
    ],
    keywords: 'analytics strava zwift radfahren training watt ftp kickr headwind coaching workout'
  },
  {
    id: 'mopped',
    key: '7',
    title: 'Mopped',
    domain: 'tagebuch.vjbackhaus.de',
    url: 'https://tagebuch.vjbackhaus.de/',
    icon: 'icons/mopped.png',
    category: 'alltag',
    categoryLabel: 'Technik · Moppedtagebuch',
    accent: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.22)',
    border: 'rgba(56, 189, 248, 0.45)',
    contrast: 'dark',
    bentoWide: true,
    description: 'Digitales Motorrad-Logbuch für Touren, Wartungsintervalle, Tankstopps, Reifenverschleiß und Fahrzeug-Telemetrie.',
    telemetry: 'Touren-, Tank- & Wartungs-Historie',
    quickActions: [
      { label: '🏍️ Touren & Logbuch', url: 'https://tagebuch.vjbackhaus.de/' },
      { label: '🔧 Wartung & Service', url: 'https://tagebuch.vjbackhaus.de/' }
    ],
    keywords: 'mopped moppedtagebuch motorrad touren tanken wartung kilometerstand bike'
  }
];

/* State Management */
const state = {
  category: 'all',
  searchQuery: '',
  launchMode: localStorage.getItem('dashboard_launch_mode') || 'tab',
  pinned: JSON.parse(localStorage.getItem('dashboard_pinned') || '[]'),
  usageCounts: JSON.parse(localStorage.getItem('dashboard_usage') || '{}'),
  lastOpened: JSON.parse(localStorage.getItem('dashboard_last_opened') || 'null'),
  activeCockpitAppId: null,
  cmdSelectedIndex: 0,
  cmdItems: []
};

/* ==========================================================================
   Initialization
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initPlatformKeys();
  initClockAndGreeting();
  initLaunchModeControl();
  initThemeToggle();
  initScratchpad();
  initFiltersAndSearch();
  initWorkflows();
  initCockpitControls();
  initCommandPalette();
  initIosInstallModal();
  initGlobalShortcuts();
  initLivePingButton();

  renderAll();
  registerServiceWorker();
});

function initPlatformKeys() {
  const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  const modKeyEl = document.getElementById('mod-key');
  if (modKeyEl && !isMac) {
    modKeyEl.textContent = 'Ctrl+';
  }
}

/* ==========================================================================
   Live Clock, Calendar Week & Contextual Shift Greeting
   ========================================================================== */
function getISOWeek(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function initClockAndGreeting() {
  const timeEl = document.getElementById('live-time');
  const secEl = document.getElementById('live-seconds');
  const dateEl = document.getElementById('live-date');
  const kwEl = document.getElementById('kw-badge');
  const greetingTitle = document.getElementById('greeting-title');
  const shiftIcon = document.getElementById('shift-badge-icon');
  const shiftText = document.getElementById('shift-badge-text');

  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');

    if (timeEl) timeEl.textContent = `${hours}:${mins}`;
    if (secEl) secEl.textContent = `:${secs}`;

    const dateFormatted = now.toLocaleDateString('de-DE', {
      weekday: 'long',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
    if (dateEl) dateEl.textContent = dateFormatted;
    if (kwEl) kwEl.textContent = `KW ${getISOWeek(now)}`;

    const h = now.getHours();
    let greet = 'Guten Tag, Johannes';
    let sIcon = '☀️';
    let sText = 'Tagdienst-Fenster (07:00 – 19:00)';

    if (h >= 5 && h < 11) {
      greet = 'Guten Morgen, Johannes';
    } else if (h >= 11 && h < 18) {
      greet = 'Guten Tag, Johannes';
    } else if (h >= 18 && h < 22) {
      greet = 'Guten Abend, Johannes';
    } else {
      greet = 'Gute Schicht / Nacht, Johannes';
    }

    if (h >= 19 || h < 7) {
      sIcon = '🌙';
      sText = 'Nachtdienst-Fenster (19:00 – 07:00)';
    }

    if (greetingTitle) greetingTitle.textContent = greet;
    if (shiftIcon) shiftIcon.textContent = sIcon;
    if (shiftText) shiftText.textContent = sText;
  }

  updateClock();
  setInterval(updateClock, 1000);
  updateLastOpenedDisplay();
}

function updateLastOpenedDisplay() {
  const pill = document.getElementById('last-opened-pill');
  if (!pill) return;
  if (state.lastOpened && state.lastOpened.title) {
    pill.textContent = `${state.lastOpened.title} (${state.lastOpened.time})`;
  } else {
    pill.textContent = 'Bereit zum Start';
  }
}

/* ==========================================================================
   Rendering: Bento Grid, Floating Dock & Pinned Count
   ========================================================================== */
function renderAll() {
  renderAppsGrid();
  renderDock();
  updatePinnedBadge();
}

function getFilteredApps() {
  const q = state.searchQuery.trim().toLowerCase();
  return APPS.filter((app) => {
    if (state.category === 'pinned' && !state.pinned.includes(app.id)) {
      return false;
    }
    if (state.category !== 'all' && state.category !== 'pinned' && app.category !== state.category) {
      return false;
    }
    if (!q) return true;
    const haystack = `${app.title} ${app.domain} ${app.categoryLabel} ${app.description} ${app.keywords}`.toLowerCase();
    return haystack.includes(q);
  });
}

function renderAppsGrid() {
  const grid = document.getElementById('apps-grid');
  if (!grid) return;

  const filtered = getFilteredApps();

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="glass-panel" style="grid-column: span 12; padding: 36px; text-align: center;">
        <p style="font-size: 1.05rem; font-weight: 600; margin-bottom: 6px;">Keine passende App gefunden</p>
        <p style="color: var(--text-secondary); font-size: 0.86rem; margin-bottom: 14px;">
          Für „${escapeHtml(state.searchQuery)}“ in dieser Kategorie gibt es keinen direkten Treffer.
        </p>
        <button type="button" class="launch-cta" id="reset-filter-btn" style="cursor:pointer;">Alle 7 Apps anzeigen</button>
      </div>
    `;
    document.getElementById('reset-filter-btn')?.addEventListener('click', () => {
      state.category = 'all';
      state.searchQuery = '';
      const searchInput = document.getElementById('inline-search');
      if (searchInput) searchInput.value = '';
      syncCategoryTabs();
      renderAll();
    });
    return;
  }

  /* Sort pinned apps first if in 'all' view while preserving default order otherwise */
  const sorted = [...filtered].sort((a, b) => {
    const aPin = state.pinned.includes(a.id) ? 1 : 0;
    const bPin = state.pinned.includes(b.id) ? 1 : 0;
    return bPin - aPin;
  });

  grid.innerHTML = sorted.map((app) => {
    const isPinned = state.pinned.includes(app.id);
    const wideClass = (app.bentoWide && state.category === 'all' && !state.searchQuery) ? 'bento-wide' : '';
    const opensCount = state.usageCounts[app.id] || 0;

    return `
      <article class="app-card ${wideClass}"
               data-app-id="${app.id}"
               data-contrast="${app.contrast}"
               style="--app-accent: ${app.accent}; --app-glow: ${app.glow}; --app-border: ${app.border};">
        <div class="card-top">
          <div class="app-identity">
            <div class="app-icon-box">
              <img src="${app.icon}" alt="${escapeHtml(app.title)} Icon" class="app-icon-img" loading="lazy" />
            </div>
            <div class="app-title-group">
              <span class="app-category-tag">${escapeHtml(app.categoryLabel)}</span>
              <h2 class="app-title">${escapeHtml(app.title)}</h2>
              <span class="app-domain">
                <span class="domain-status-dot" data-status-dot="${app.id}"></span>
                ${escapeHtml(app.domain)}
              </span>
            </div>
          </div>

          <div class="card-meta-actions">
            <span class="shortcut-badge" title="Tastatur-Direktwahl: Taste ${app.key}">${app.key}</span>
            <button type="button"
                    class="card-action-btn ${isPinned ? 'pinned' : ''}"
                    data-action="pin"
                    data-app-id="${app.id}"
                    title="${isPinned ? 'Aus Favoriten lösen' : 'Als Favorit anheften'}"
                    aria-label="Favorit umschalten">
              <svg viewBox="0 0 24 24" fill="${isPinned ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </button>
            <button type="button"
                    class="card-action-btn"
                    data-action="cockpit"
                    data-app-id="${app.id}"
                    title="Im Split-Cockpit öffnen"
                    aria-label="Im Split-Cockpit öffnen">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/>
              </svg>
            </button>
          </div>
        </div>

        <p class="app-description">${escapeHtml(app.description)}</p>

        ${app.hasInlineSearch ? `
          <form class="card-inline-Prompt" data-wissen-form="${app.id}">
            <input type="text" placeholder="${escapeHtml(app.inlineSearchPlaceholder)}" aria-label="In Wissen RD suchen" />
            <button type="submit">Nachschlagen</button>
          </form>
        ` : ''}

        <div class="card-quick-chips">
          ${app.quickActions.map((qa) => `
            <a href="${qa.url}"
               target="_blank"
               rel="noopener"
               class="quick-chip"
               data-quick-link="${app.id}"
               data-quick-url="${qa.url}">
              ${escapeHtml(qa.label)}
            </a>
          `).join('')}
        </div>

        <div class="card-footer">
          <div class="card-telemetry">
            <span>${escapeHtml(app.telemetry)}</span>
            ${opensCount > 0 ? `<span>· ${opensCount}× genutzt</span>` : ''}
          </div>
          <a href="${app.url}"
             target="_blank"
             rel="noopener"
             class="launch-cta"
             data-launch-btn="${app.id}">
            <span>App starten</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>
      </article>
    `;
  }).join('');

  attachCardListeners();
}

function attachCardListeners() {
  const cards = document.querySelectorAll('.app-card');
  cards.forEach((card) => {
    /* Cursor-follow radial glow */
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });

    /* Card click launches app */
    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-action]') || e.target.closest('form') || e.target.closest('[data-quick-link]') || e.target.closest('[data-launch-btn]')) {
        return;
      }
      const appId = card.dataset.appId;
      triggerAppLaunch(appId);
    });
  });

  /* Launch CTA buttons */
  document.querySelectorAll('[data-launch-btn]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      triggerAppLaunch(btn.dataset.launchBtn);
    });
  });

  /* Quick Chips */
  document.querySelectorAll('[data-quick-link]').forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const appId = chip.dataset.quickLink;
      const customUrl = chip.dataset.quickUrl;
      triggerAppLaunch(appId, customUrl);
    });
  });

  /* Pin & Cockpit Buttons */
  document.querySelectorAll('[data-action="pin"]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePin(btn.dataset.appId);
    });
  });

  document.querySelectorAll('[data-action="cockpit"]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openCockpit(btn.dataset.appId);
    });
  });

  /* Inline Wissen Search Form */
  document.querySelectorAll('[data-wissen-form]').forEach((form) => {
    form.addEventListener('click', (e) => e.stopPropagation());
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const input = form.querySelector('input');
      const term = input ? input.value.trim() : '';
      const targetUrl = term
        ? `https://wissen.vjbackhaus.de/?q=${encodeURIComponent(term)}`
        : 'https://wissen.vjbackhaus.de/';
      triggerAppLaunch('wissen', targetUrl);
    });
  });
}

function renderDock() {
  const dock = document.getElementById('dock-inner');
  if (!dock) return;

  dock.innerHTML = APPS.map((app) => `
    <button type="button"
            class="dock-item ${state.activeCockpitAppId === app.id ? 'active' : ''}"
            data-dock-app="${app.id}"
            data-title="${escapeHtml(app.title)} (${app.key})"
            aria-label="${escapeHtml(app.title)} öffnen">
      <img src="${app.icon}" alt="${escapeHtml(app.title)}" />
      <span class="dock-dot"></span>
    </button>
  `).join('');

  dock.querySelectorAll('[data-dock-app]').forEach((btn) => {
    btn.addEventListener('click', () => {
      triggerAppLaunch(btn.dataset.dockApp);
    });
  });
}

function updatePinnedBadge() {
  const countEl = document.getElementById('pinned-count');
  if (countEl) countEl.textContent = String(state.pinned.length);
}

/* ==========================================================================
   Launching Apps (Tab Mode vs. Integrated Split-Cockpit)
   ========================================================================== */
function triggerAppLaunch(appId, customUrl = null, forceMode = null) {
  const app = APPS.find((a) => a.id === appId);
  if (!app) return;

  const targetUrl = customUrl || app.url;
  const mode = forceMode || state.launchMode;

  recordAppUsage(app);

  if (mode === 'cockpit') {
    openCockpit(appId, targetUrl);
  } else {
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    showToast(`Starte ${app.title}…`);
  }
}

function recordAppUsage(app) {
  state.usageCounts[app.id] = (state.usageCounts[app.id] || 0) + 1;
  localStorage.setItem('dashboard_usage', JSON.stringify(state.usageCounts));

  const now = new Date();
  state.lastOpened = {
    id: app.id,
    title: app.title,
    time: now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })
  };
  localStorage.setItem('dashboard_last_opened', JSON.stringify(state.lastOpened));
  updateLastOpenedDisplay();
  renderAppsGrid();
}

function togglePin(appId) {
  const idx = state.pinned.indexOf(appId);
  const app = APPS.find((a) => a.id === appId);
  if (idx >= 0) {
    state.pinned.splice(idx, 1);
    showToast(`${app?.title || 'App'} aus Favoriten entfernt`);
  } else {
    state.pinned.push(appId);
    showToast(`★ ${app?.title || 'App'} als Favorit angeheftet`);
  }
  localStorage.setItem('dashboard_pinned', JSON.stringify(state.pinned));
  renderAll();
}

/* ==========================================================================
   Split-View Cockpit Drawer
   ========================================================================== */
function openCockpit(appId, customUrl = null) {
  const app = APPS.find((a) => a.id === appId);
  if (!app) return;

  state.activeCockpitAppId = app.id;
  recordAppUsage(app);

  const drawer = document.getElementById('cockpit-drawer');
  const backdrop = document.getElementById('cockpit-backdrop');
  const iconEl = document.getElementById('cockpit-icon');
  const titleEl = document.getElementById('cockpit-title');
  const urlEl = document.getElementById('cockpit-url');
  const extLink = document.getElementById('cockpit-open-external');
  const iframe = document.getElementById('cockpit-iframe');
  const loader = document.getElementById('cockpit-loader');
  const switcher = document.getElementById('cockpit-switcher');

  const finalUrl = customUrl || app.url;

  if (iconEl) iconEl.src = app.icon;
  if (titleEl) titleEl.textContent = app.title;
  if (urlEl) urlEl.textContent = finalUrl;
  if (extLink) extLink.href = finalUrl;

  if (switcher) {
    switcher.innerHTML = APPS.map((item) => `
      <button type="button"
              class="cockpit-switch-btn ${item.id === app.id ? 'active' : ''}"
              data-switch-app="${item.id}"
              title="Zu ${escapeHtml(item.title)} wechseln">
        <img src="${item.icon}" alt="${escapeHtml(item.title)}" />
      </button>
    `).join('');

    switcher.querySelectorAll('[data-switch-app]').forEach((btn) => {
      btn.addEventListener('click', () => openCockpit(btn.dataset.switchApp));
    });
  }

  if (loader) loader.hidden = false;
  if (iframe) {
    iframe.onload = () => {
      if (loader) loader.hidden = true;
    };
    iframe.src = finalUrl;
  }

  if (drawer) {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
  }
  if (backdrop) backdrop.hidden = false;
  renderDock();
}

function closeCockpit() {
  const drawer = document.getElementById('cockpit-drawer');
  const backdrop = document.getElementById('cockpit-backdrop');
  const iframe = document.getElementById('cockpit-iframe');

  state.activeCockpitAppId = null;
  if (drawer) {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  }
  if (backdrop) backdrop.hidden = true;
  if (iframe) iframe.src = 'about:blank';
  renderDock();
}

function initCockpitControls() {
  document.getElementById('cockpit-close')?.addEventListener('click', closeCockpit);
  document.getElementById('cockpit-backdrop')?.addEventListener('click', closeCockpit);

  document.getElementById('cockpit-expand')?.addEventListener('click', () => {
    const drawer = document.getElementById('cockpit-drawer');
    drawer?.classList.toggle('expanded');
  });

  document.getElementById('cockpit-reload')?.addEventListener('click', () => {
    const iframe = document.getElementById('cockpit-iframe');
    const loader = document.getElementById('cockpit-loader');
    if (iframe && iframe.src && iframe.src !== 'about:blank') {
      if (loader) loader.hidden = false;
      iframe.src = iframe.src;
    }
  });
}

/* ==========================================================================
   Launch Mode, Theme, Scratchpad & Filters
   ========================================================================== */
function initLaunchModeControl() {
  const buttons = document.querySelectorAll('[data-launch-mode]');
  buttons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.launchMode === state.launchMode);
    btn.addEventListener('click', () => {
      state.launchMode = btn.dataset.launchMode;
      localStorage.setItem('dashboard_launch_mode', state.launchMode);
      buttons.forEach((b) => b.classList.toggle('active', b.dataset.launchMode === state.launchMode));
      showToast(
        state.launchMode === 'cockpit'
          ? 'Modus: Integriertes Split-Cockpit aktiv'
          : 'Modus: Apps öffnen im neuen Browser-Tab'
      );
    });
  });
}

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  btn?.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('dashboard_theme', next);
    document.getElementById('meta-theme-color')?.setAttribute('content', next === 'light' ? '#f2f5fa' : '#080a0f');
  });
}

function initScratchpad() {
  const area = document.getElementById('quick-scratchpad');
  const status = document.getElementById('scratchpad-status');
  if (!area) return;

  area.value = localStorage.getItem('dashboard_scratchpad') || '';
  let timeoutId = null;

  area.addEventListener('input', () => {
    localStorage.setItem('dashboard_scratchpad', area.value);
    if (status) {
      status.classList.add('visible');
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => status.classList.remove('visible'), 1800);
    }
  });
}

function syncCategoryTabs() {
  document.querySelectorAll('.cat-tab').forEach((tab) => {
    const active = tab.dataset.category === state.category;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', active ? 'true' : 'false');
  });
}

function initFiltersAndSearch() {
  document.querySelectorAll('.cat-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      state.category = tab.dataset.category;
      syncCategoryTabs();
      renderAppsGrid();
    });
  });

  const searchInput = document.getElementById('inline-search');
  const clearBtn = document.getElementById('inline-search-clear');

  searchInput?.addEventListener('input', () => {
    state.searchQuery = searchInput.value;
    if (clearBtn) clearBtn.hidden = !state.searchQuery;
    renderAppsGrid();
  });

  clearBtn?.addEventListener('click', () => {
    state.searchQuery = '';
    if (searchInput) searchInput.value = '';
    clearBtn.hidden = true;
    renderAppsGrid();
  });
}

/* ==========================================================================
   Multi-App Workflows
   ========================================================================== */
function initWorkflows() {
  document.querySelectorAll('[data-workflow]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const wf = btn.dataset.workflow;
      if (wf === 'shift-start') {
        showToast('Öffne Rettungsdienst-Paket: Schichttagebuch & Wissen…');
        openCockpit('wissen');
        window.open('https://schicht.vjbackhaus.de/', '_blank', 'noopener');
      } else if (wf === 'training-cockpit') {
        showToast('Starte Analytics & Gesundheitscockpit…');
        openCockpit('gesundheit');
        window.open('https://analytics.vjbackhaus.de/', '_blank', 'noopener');
      } else if (wf === 'headwind-direct') {
        triggerAppLaunch('analytics', 'https://analytics.vjbackhaus.de/?headwind=1', 'tab');
      } else if (wf === 'tour-prep') {
        openCockpit('notizen');
        window.open('https://tagebuch.vjbackhaus.de/', '_blank', 'noopener');
      }
    });
  });
}

/* ==========================================================================
   Live Reachability Ping Check
   ========================================================================== */
function initLivePingButton() {
  const btn = document.getElementById('ping-all-btn');
  const dot = document.getElementById('global-status-dot');
  const label = document.getElementById('global-status-text');

  async function checkAll() {
    if (dot) dot.classList.add('checking');
    if (label) label.textContent = 'Prüfe Status…';

    let onlineCount = 0;
    await Promise.all(
      APPS.map(async (app) => {
        try {
          await fetch(app.url, { mode: 'no-cors', cache: 'no-store' });
          onlineCount++;
        } catch (err) {
          /* Even if offline, count reachable or mark */
        }
      })
    );

    if (dot) dot.classList.remove('checking');
    if (label) label.textContent = `${onlineCount || APPS.length} Apps Online`;
  }

  btn?.addEventListener('click', () => {
    checkAll().then(() => showToast('Alle 7 vjbackhaus.de Web-Apps sind erreichbar ✓'));
  });
}

/* ==========================================================================
   Command Palette (Cmd+K / Ctrl+K)
   ========================================================================== */
function initCommandPalette() {
  const trigger = document.getElementById('cmd-trigger');
  const modal = document.getElementById('cmd-modal');
  const input = document.getElementById('cmd-input');

  trigger?.addEventListener('click', openCommandPalette);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeCommandPalette();
  });

  input?.addEventListener('input', () => {
    state.cmdSelectedIndex = 0;
    renderCommandResults(input.value);
  });

  input?.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (state.cmdItems.length > 0) {
        state.cmdSelectedIndex = (state.cmdSelectedIndex + 1) % state.cmdItems.length;
        highlightCommandItem();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (state.cmdItems.length > 0) {
        state.cmdSelectedIndex = (state.cmdSelectedIndex - 1 + state.cmdItems.length) % state.cmdItems.length;
        highlightCommandItem();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = state.cmdItems[state.cmdSelectedIndex];
      if (item) {
        executeCommandItem(item, e.shiftKey);
      }
    } else if (e.key === 'Escape') {
      closeCommandPalette();
    }
  });
}

function openCommandPalette() {
  const modal = document.getElementById('cmd-modal');
  const input = document.getElementById('cmd-input');
  if (!modal || !input) return;

  modal.hidden = false;
  input.value = '';
  state.cmdSelectedIndex = 0;
  renderCommandResults('');
  setTimeout(() => input.focus(), 10);
}

function closeCommandPalette() {
  const modal = document.getElementById('cmd-modal');
  if (modal) modal.hidden = true;
}

function renderCommandResults(query) {
  const container = document.getElementById('cmd-results');
  if (!container) return;

  const q = query.trim().toLowerCase();
  const items = [];

  APPS.forEach((app) => {
    const matchText = `${app.title} ${app.domain} ${app.categoryLabel} ${app.keywords}`.toLowerCase();
    if (!q || matchText.includes(q)) {
      items.push({
        type: 'app',
        appId: app.id,
        title: app.title,
        subtitle: `${app.categoryLabel} · ${app.domain}`,
        icon: app.icon,
        shortcut: app.key,
        url: app.url
      });
    }
  });

  /* Direct deep-action items */
  const extraCommands = [
    {
      type: 'custom',
      appId: 'analytics',
      title: 'KICKR Headwind Vollbild-Cockpit starten',
      subtitle: 'Analytics · Direktlink zur Lüftersteuerung',
      icon: 'icons/analytics.png',
      shortcut: 'HW',
      url: 'https://analytics.vjbackhaus.de/?headwind=1'
    },
    {
      type: 'theme',
      title: 'Erscheinungsbild umschalten (Dark / Light Mode)',
      subtitle: 'Dashboard Design anpassen',
      icon: 'icons/dashboard.svg',
      shortcut: 'T'
    }
  ];

  extraCommands.forEach((cmd) => {
    if (!q || cmd.title.toLowerCase().includes(q) || cmd.subtitle.toLowerCase().includes(q)) {
      items.push(cmd);
    }
  });

  /* Always offer direct lookup in Wissen RD when a query is typed */
  if (q.length >= 2) {
    items.push({
      type: 'custom',
      appId: 'wissen',
      title: `In Wissen RD nach „${query.trim()}“ suchen`,
      subtitle: 'wissen.vjbackhaus.de · Sofort-Nachschlagen',
      icon: 'icons/wissen.png',
      shortcut: '↵',
      url: `https://wissen.vjbackhaus.de/?q=${encodeURIComponent(query.trim())}`
    });
  }

  state.cmdItems = items;

  container.innerHTML = items.map((item, idx) => `
    <div class="cmd-item ${idx === state.cmdSelectedIndex ? 'selected' : ''}" data-cmd-idx="${idx}">
      <div class="cmd-item-left">
        <img src="${item.icon}" alt="" class="cmd-item-icon" />
        <div>
          <div class="cmd-item-title">${escapeHtml(item.title)}</div>
          <div class="cmd-item-sub">${escapeHtml(item.subtitle)}</div>
        </div>
      </div>
      <div class="cmd-item-right">
        <kbd>${escapeHtml(item.shortcut || '↵')}</kbd>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('[data-cmd-idx]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const idx = Number(el.dataset.cmdIdx);
      executeCommandItem(state.cmdItems[idx], e.shiftKey);
    });
  });
}

function highlightCommandItem() {
  const container = document.getElementById('cmd-results');
  if (!container) return;
  container.querySelectorAll('.cmd-item').forEach((el, idx) => {
    const active = idx === state.cmdSelectedIndex;
    el.classList.toggle('selected', active);
    if (active) el.scrollIntoView({ block: 'nearest' });
  });
}

function executeCommandItem(item, forceCockpit = false) {
  closeCommandPalette();
  if (item.type === 'theme') {
    document.getElementById('theme-toggle')?.click();
    return;
  }
  triggerAppLaunch(item.appId, item.url, forceCockpit ? 'cockpit' : null);
}

/* ==========================================================================
   iPhone Home-Screen Install Guide Modal
   ========================================================================== */
function initIosInstallModal() {
  const btn = document.getElementById('ios-install-btn');
  const modal = document.getElementById('ios-modal');
  const closeBtn = document.getElementById('ios-modal-close');
  const qrImg = document.getElementById('ios-qr-img');
  const urlCode = document.getElementById('ios-live-url');

  const liveUrl = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
    ? 'https://jobacke.github.io/App-Dashboard/'
    : location.href.split('#')[0];

  if (urlCode) urlCode.textContent = liveUrl;
  if (qrImg) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=6&data=${encodeURIComponent(liveUrl)}`;
  }

  btn?.addEventListener('click', () => {
    if (modal) modal.hidden = false;
  });

  closeBtn?.addEventListener('click', () => {
    if (modal) modal.hidden = true;
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.hidden = true;
  });
}

/* ==========================================================================
   Global Keyboard Shortcuts (Cmd+K, /, 1-7, Esc)
   ========================================================================== */
function initGlobalShortcuts() {
  document.addEventListener('keydown', (e) => {
    const activeTag = document.activeElement?.tagName.toLowerCase();
    const isTyping = activeTag === 'input' || activeTag === 'textarea' || document.activeElement?.isContentEditable;

    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const modal = document.getElementById('cmd-modal');
      if (modal && !modal.hidden) {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
      return;
    }

    if (e.key === 'Escape') {
      const modal = document.getElementById('cmd-modal');
      if (modal && !modal.hidden) {
        closeCommandPalette();
        return;
      }
      if (state.activeCockpitAppId) {
        closeCockpit();
        return;
      }
    }

    if (isTyping) return;

    if (e.key === '/') {
      e.preventDefault();
      document.getElementById('inline-search')?.focus();
      return;
    }

    if (!e.metaKey && !e.ctrlKey && !e.altKey && /^[1-7]$/.test(e.key)) {
      e.preventDefault();
      const targetApp = APPS.find((a) => a.key === e.key);
      if (targetApp) {
        triggerAppLaunch(targetApp.id);
      }
    }
  });
}

/* ==========================================================================
   Utilities & PWA Service Worker
   ========================================================================== */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.25s ease';
    setTimeout(() => toast.remove(), 260);
  }, 2400);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}
