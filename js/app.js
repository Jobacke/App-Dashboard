/* ==========================================================================
   Board · App-Dashboard — Application Logic & Interactive Features
   ========================================================================== */

const APP_VERSION = '1.4.2';
const APP_BUILD_DATE = '18.11.2026';

const APPS = [
  {
    id: 'schichttagebuch',
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

const DEFAULT_ORDER = APPS.map((a) => a.id);
const ALL_CATEGORIES = ['rettungsdienst', 'performance', 'alltag'];

function loadAppOrder() {
  try {
    const saved = JSON.parse(localStorage.getItem('dashboard_app_order') || 'null');
    if (Array.isArray(saved) && saved.length > 0) {
      const valid = saved.filter((id) => DEFAULT_ORDER.includes(id));
      const missing = DEFAULT_ORDER.filter((id) => !valid.includes(id));
      return [...valid, ...missing];
    }
  } catch (e) {}
  return [...DEFAULT_ORDER];
}

function loadVisibleApps() {
  try {
    const saved = JSON.parse(localStorage.getItem('dashboard_visible_apps') || 'null');
    if (Array.isArray(saved)) {
      const valid = saved.filter((id) => DEFAULT_ORDER.includes(id));
      if (valid.length > 0) return valid;
    }
  } catch (e) {}
  return [...DEFAULT_ORDER];
}

/* State Management */
const state = {
  visibleApps: loadVisibleApps(),
  launchMode: localStorage.getItem('dashboard_launch_mode') || 'tab',
  appOrder: loadAppOrder(),
  draggedAppId: null,
  usageCounts: JSON.parse(localStorage.getItem('dashboard_usage') || '{}'),
  lastOpened: JSON.parse(localStorage.getItem('dashboard_last_opened') || 'null'),
  activeCockpitAppId: null,
  cmdSelectedIndex: 0,
  cmdItems: []
};

/* Helper: Get all 7 apps sorted strictly by state.appOrder (used by both Board & Dock) */
function getOrderedApps() {
  return state.appOrder
    .map((id, idx) => {
      const app = APPS.find((a) => a.id === id);
      return app ? { ...app, key: String(idx + 1) } : null;
    })
    .filter(Boolean);
}

function saveAppOrder() {
  localStorage.setItem('dashboard_app_order', JSON.stringify(state.appOrder));
}

function moveAppInOrder(appId, direction) {
  const idx = state.appOrder.indexOf(appId);
  if (idx < 0) return;
  const targetIdx = idx + direction;
  if (targetIdx < 0 || targetIdx >= state.appOrder.length) return;

  const copy = [...state.appOrder];
  const [moved] = copy.splice(idx, 1);
  copy.splice(targetIdx, 0, moved);
  state.appOrder = copy;
  saveAppOrder();
  renderAll();
}

function reorderAppBefore(sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId) return;
  const fromIdx = state.appOrder.indexOf(sourceId);
  const toIdx = state.appOrder.indexOf(targetId);
  if (fromIdx < 0 || toIdx < 0) return;

  const copy = [...state.appOrder];
  const [moved] = copy.splice(fromIdx, 1);
  copy.splice(toIdx, 0, moved);
  state.appOrder = copy;
  saveAppOrder();
  renderAll();
}

/* ==========================================================================
   Initialization
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initPlatformKeys();
  initClock();
  initLaunchModeControl();
  initThemeToggle();
  initScratchpad();
  initFilterPopover();
  initCockpitControls();
  initCommandPalette();
  initGlobalShortcuts();
  initLivePingButton();
  initVersionDisplayAndUpdateCheck();

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
   Live Clock & Calendar Week (KW)
   ========================================================================== */
function getISOWeek(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function initClock() {
  const timeEl = document.getElementById('live-time');
  const secEl = document.getElementById('live-seconds');
  const dateEl = document.getElementById('live-date');
  const kwEl = document.getElementById('kw-badge');

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
   Rendering: Bento Grid & Floating Dock
   (Strictly synchronized order between Board and Dock!)
   ========================================================================== */
function renderAll() {
  renderAppsGrid();
  renderDock();
  renderFilterPopoverList();
}

function getFilteredApps() {
  const ordered = getOrderedApps();
  return ordered.filter((app) => state.visibleApps.includes(app.id));
}

function renderAppsGrid() {
  const grid = document.getElementById('apps-grid');
  if (!grid) return;

  const filtered = getFilteredApps();

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="glass-panel" style="grid-column: span 12; padding: 36px; text-align: center;">
        <p style="font-size: 1.05rem; font-weight: 600; margin-bottom: 6px;">Alle Apps sind ausgeblendet</p>
        <p style="color: var(--text-secondary); font-size: 0.86rem; margin-bottom: 14px;">
          Wähle oben im Filter-Menü wieder Apps aus oder aktiviere direkt alle 7 Apps.
        </p>
        <button type="button" class="launch-cta" id="reset-filter-btn" style="cursor:pointer;">Alle 7 Apps einblenden</button>
      </div>
    `;
    document.getElementById('reset-filter-btn')?.addEventListener('click', () => {
      state.visibleApps = [...DEFAULT_ORDER];
      localStorage.setItem('dashboard_visible_apps', JSON.stringify(state.visibleApps));
      renderAll();
    });
    return;
  }

  const allSelected = state.visibleApps.length === DEFAULT_ORDER.length;

  grid.innerHTML = filtered.map((app) => {
    const wideClass = (app.bentoWide && allSelected) ? 'bento-wide' : '';
    const opensCount = state.usageCounts[app.id] || 0;
    const orderIdx = state.appOrder.indexOf(app.id);
    const isFirst = orderIdx === 0;
    const isLast = orderIdx === state.appOrder.length - 1;

    return `
      <article class="app-card ${wideClass}"
               draggable="true"
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
            <div class="move-controls" role="group" aria-label="Position verschieben">
              <button type="button"
                      class="move-btn"
                      data-action="move-prev"
                      data-app-id="${app.id}"
                      ${isFirst ? 'disabled' : ''}
                      title="Nach vorne verschieben"
                      aria-label="Nach vorne verschieben">◀</button>
              <button type="button"
                      class="move-btn"
                      data-action="move-next"
                      data-app-id="${app.id}"
                      ${isLast ? 'disabled' : ''}
                      title="Nach hinten verschieben"
                      aria-label="Nach hinten verschieben">▶</button>
            </div>
            <span class="shortcut-badge" title="Tastatur-Direktwahl: Taste ${app.key}">${app.key}</span>
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
    const appId = card.dataset.appId;

    /* Cursor-follow radial glow */
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });

    /* Drag & Drop Reordering on Cards */
    card.addEventListener('dragstart', (e) => {
      state.draggedAppId = appId;
      card.classList.add('dragging');
      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', appId);
      }
    });

    card.addEventListener('dragend', () => {
      state.draggedAppId = null;
      card.classList.remove('dragging');
      document.querySelectorAll('.drag-over').forEach((el) => el.classList.remove('drag-over'));
    });

    card.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (state.draggedAppId && state.draggedAppId !== appId) {
        card.classList.add('drag-over');
      }
    });

    card.addEventListener('dragleave', () => {
      card.classList.remove('drag-over');
    });

    card.addEventListener('drop', (e) => {
      e.preventDefault();
      card.classList.remove('drag-over');
      const sourceId = state.draggedAppId || e.dataTransfer?.getData('text/plain');
      if (sourceId && sourceId !== appId) {
        reorderAppBefore(sourceId, appId);
        showToast('Reihenfolge im Board & Dock synchronisiert');
      }
    });

    /* Card click launches app */
    card.addEventListener('click', (e) => {
      if (
        e.target.closest('[data-action]') ||
        e.target.closest('form') ||
        e.target.closest('[data-quick-link]') ||
        e.target.closest('[data-launch-btn]')
      ) {
        return;
      }
      triggerAppLaunch(appId);
    });
  });

  /* Move Left / Right buttons on each card */
  document.querySelectorAll('[data-action="move-prev"]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      moveAppInOrder(btn.dataset.appId, -1);
    });
  });

  document.querySelectorAll('[data-action="move-next"]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      moveAppInOrder(btn.dataset.appId, 1);
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

  /* Cockpit Button */
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

  const ordered = getOrderedApps();

  dock.innerHTML = ordered.map((app) => {
    const isVisible = state.visibleApps.includes(app.id);
    return `
      <div class="dock-item ${state.activeCockpitAppId === app.id ? 'active' : ''}"
           style="${isVisible ? '' : 'opacity: 0.32;'}"
           draggable="true"
           role="button"
           tabindex="0"
           data-dock-app="${app.id}"
           data-title="${escapeHtml(app.title)} (${app.key})"
           aria-label="${escapeHtml(app.title)} öffnen">
        <img src="${app.icon}" alt="${escapeHtml(app.title)}" />
        <span class="dock-dot"></span>
      </div>
    `;
  }).join('');

  dock.querySelectorAll('[data-dock-app]').forEach((item) => {
    const appId = item.dataset.dockApp;

    item.addEventListener('click', () => {
      triggerAppLaunch(appId);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerAppLaunch(appId);
      }
    });

    /* Drag & Drop on Dock Items */
    item.addEventListener('dragstart', (e) => {
      state.draggedAppId = appId;
      item.classList.add('dragging');
      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', appId);
      }
    });

    item.addEventListener('dragend', () => {
      state.draggedAppId = null;
      item.classList.remove('dragging');
      document.querySelectorAll('.drag-over').forEach((el) => el.classList.remove('drag-over'));
    });

    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (state.draggedAppId && state.draggedAppId !== appId) {
        item.classList.add('drag-over');
      }
    });

    item.addEventListener('dragleave', () => {
      item.classList.remove('drag-over');
    });

    item.addEventListener('drop', (e) => {
      e.preventDefault();
      item.classList.remove('drag-over');
      const sourceId = state.draggedAppId || e.dataTransfer?.getData('text/plain');
      if (sourceId && sourceId !== appId) {
        reorderAppBefore(sourceId, appId);
        showToast('Reihenfolge im Dock & Board synchronisiert');
      }
    });
  });
}

/* ==========================================================================
   Compact Header Filter Popover (Individual App Checkboxes + Presets)
   ========================================================================== */
function saveVisibleApps() {
  localStorage.setItem('dashboard_visible_apps', JSON.stringify(state.visibleApps));
}

function renderFilterPopoverList() {
  const listEl = document.getElementById('filter-popover-list');
  const countEl = document.getElementById('filter-trigger-count');
  const triggerBtn = document.getElementById('filter-popover-btn');

  const ordered = getOrderedApps();
  const visibleCount = state.visibleApps.length;

  if (countEl) countEl.textContent = `${visibleCount}/${ordered.length}`;
  if (triggerBtn) {
    triggerBtn.classList.toggle('filtered', visibleCount < ordered.length);
  }

  /* Update category preset pill active states */
  document.querySelectorAll('[data-preset-cat]').forEach((pill) => {
    const cat = pill.dataset.presetCat;
    const catApps = APPS.filter((a) => a.category === cat).map((a) => a.id);
    const allCatVisible = catApps.every((id) => state.visibleApps.includes(id));
    pill.classList.toggle('active', allCatVisible);
  });

  if (!listEl) return;

  listEl.innerHTML = ordered.map((app) => {
    const checked = state.visibleApps.includes(app.id);
    return `
      <div class="filter-app-row ${checked ? 'checked' : ''}"
           role="checkbox"
           aria-checked="${checked ? 'true' : 'false'}"
           tabindex="0"
           data-filter-app="${app.id}">
        <div class="filter-app-left">
          <img src="${app.icon}" alt="" />
          <span class="filter-app-name">${escapeHtml(app.title)}</span>
        </div>
        <span class="check-box" aria-hidden="true">✓</span>
      </div>
    `;
  }).join('');

  listEl.querySelectorAll('[data-filter-app]').forEach((row) => {
    row.addEventListener('click', (e) => {
      e.stopPropagation();
      const appId = row.dataset.filterApp;
      const idx = state.visibleApps.indexOf(appId);
      if (idx >= 0) {
        state.visibleApps.splice(idx, 1);
      } else {
        state.visibleApps.push(appId);
      }
      saveVisibleApps();
      renderAll();
    });
  });
}

function initFilterPopover() {
  const wrap = document.getElementById('filter-popover-wrap');
  const btn = document.getElementById('filter-popover-btn');
  const popover = document.getElementById('filter-popover');
  const selectAllBtn = document.getElementById('filter-select-all');

  btn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!popover) return;
    const isHidden = popover.hidden;
    popover.hidden = !isHidden;
    btn.classList.toggle('active', isHidden);
    btn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
  });

  selectAllBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    state.visibleApps = [...DEFAULT_ORDER];
    saveVisibleApps();
    renderAll();
  });

  document.querySelectorAll('[data-preset-cat]').forEach((pill) => {
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      const cat = pill.dataset.presetCat;
      const catAppIds = APPS.filter((a) => a.category === cat).map((a) => a.id);
      const allCatVisible = catAppIds.every((id) => state.visibleApps.includes(id));

      if (allCatVisible) {
        /* Toggle off this category's apps */
        state.visibleApps = state.visibleApps.filter((id) => !catAppIds.includes(id));
      } else {
        /* Enable this category's apps */
        const merged = new Set([...state.visibleApps, ...catAppIds]);
        state.visibleApps = [...merged];
      }
      saveVisibleApps();
      renderAll();
    });
  });

  document.addEventListener('click', (e) => {
    if (popover && !popover.hidden && wrap && !wrap.contains(e.target)) {
      popover.hidden = true;
      btn?.classList.remove('active');
      btn?.setAttribute('aria-expanded', 'false');
    }
  });
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
    const ordered = getOrderedApps();
    switcher.innerHTML = ordered.map((item) => `
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
   Launch Mode, Theme & Scratchpad
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

function resetMobileViewportZoom() {
  const vp = document.getElementById('viewport-meta') || document.querySelector('meta[name="viewport"]');
  if (!vp) return;
  /* Temporarily lock maximum-scale=1.0 to force iOS WebKit back to 1.0x zoom, then restore normal pinch-zoom */
  vp.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover');
  setTimeout(() => {
    vp.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
    window.scrollTo({ left: 0, behavior: 'smooth' });
  }, 120);
}

function initScratchpad() {
  const area = document.getElementById('quick-scratchpad');
  const status = document.getElementById('scratchpad-status');
  const doneBtn = document.getElementById('scratchpad-done-btn');
  if (!area) return;

  area.value = localStorage.getItem('dashboard_scratchpad') || '';
  let timeoutId = null;

  area.addEventListener('focus', () => {
    if (doneBtn) doneBtn.hidden = false;
  });

  area.addEventListener('input', () => {
    localStorage.setItem('dashboard_scratchpad', area.value);
    if (status) {
      status.classList.add('visible');
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => status.classList.remove('visible'), 1800);
    }
  });

  area.addEventListener('blur', () => {
    setTimeout(() => {
      if (doneBtn) doneBtn.hidden = true;
      resetMobileViewportZoom();
    }, 80);
  });

  doneBtn?.addEventListener('click', () => {
    area.blur();
    resetMobileViewportZoom();
    showToast('Memo gespeichert ✓');
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
        } catch (err) {}
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
  const ordered = getOrderedApps();

  ordered.forEach((app) => {
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
      subtitle: 'Board Design anpassen',
      icon: 'icons/dashboard.svg',
      shortcut: 'T'
    }
  ];

  extraCommands.forEach((cmd) => {
    if (!q || cmd.title.toLowerCase().includes(q) || cmd.subtitle.toLowerCase().includes(q)) {
      items.push(cmd);
    }
  });

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
   Global Keyboard Shortcuts (Cmd+K, 1-7, Esc)
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

    if (!e.metaKey && !e.ctrlKey && !e.altKey && /^[1-7]$/.test(e.key)) {
      e.preventDefault();
      const ordered = getOrderedApps();
      const targetApp = ordered[Number(e.key) - 1];
      if (targetApp) {
        triggerAppLaunch(targetApp.id);
      }
    }
  });
}

/* ==========================================================================
   Utilities & PWA Service Worker + Automatic Version Update Detection
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

let waitingServiceWorker = null;

function showUpdateAvailableBanner(versionStr, notesStr = '') {
  const updateBanner = document.getElementById('update-banner');
  const updateText = document.getElementById('update-version-text');
  const notesEl = document.getElementById('update-notes-text');

  if (updateText) updateText.textContent = versionStr ? `v${versionStr.replace(/^v/, '')}` : '';
  if (notesEl) notesEl.textContent = notesStr ? `(${notesStr})` : '';
  if (updateBanner) updateBanner.hidden = false;
}

async function applyUpdateAndReload() {
  showToast('Lade neue Version…');
  try {
    if (waitingServiceWorker) {
      waitingServiceWorker.postMessage('skipWaiting');
    }
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.update().catch(() => {})));
    }
    if ('caches' in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    }
  } catch (e) {}
  window.location.reload();
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') return;

  navigator.serviceWorker.register('sw.js').then((reg) => {
    if (reg.waiting) {
      waitingServiceWorker = reg.waiting;
      showUpdateAvailableBanner('', 'Update bereit');
    }
    reg.addEventListener('updatefound', () => {
      const installing = reg.installing;
      if (!installing) return;
      installing.addEventListener('statechange', () => {
        if (installing.state === 'installed' && navigator.serviceWorker.controller) {
          waitingServiceWorker = installing;
          showUpdateAvailableBanner('', 'Update bereit');
        }
      });
    });

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        reg.update().catch(() => {});
      }
    });
  }).catch(() => {});
}

function isVersionNewer(remoteVer, localVer) {
  const r = String(remoteVer).replace(/^v/, '').split('.').map((n) => parseInt(n, 10) || 0);
  const l = String(localVer).replace(/^v/, '').split('.').map((n) => parseInt(n, 10) || 0);
  for (let i = 0; i < Math.max(r.length, l.length); i++) {
    if ((r[i] || 0) > (l[i] || 0)) return true;
    if ((r[i] || 0) < (l[i] || 0)) return false;
  }
  return false;
}

function initVersionDisplayAndUpdateCheck() {
  const headerBadge = document.getElementById('app-version-badge');
  const footerVer = document.getElementById('footer-version');
  const footerDate = document.getElementById('footer-date');
  const footerBtn = document.getElementById('footer-update-check');
  const updateBanner = document.getElementById('update-banner');

  if (headerBadge) headerBadge.textContent = `v${APP_VERSION}`;
  if (footerVer) footerVer.textContent = `v${APP_VERSION}`;
  if (footerDate) footerDate.textContent = `Stand ${APP_BUILD_DATE}`;

  async function checkRemoteVersion(manual = false) {
    try {
      const res = await fetch(`version.json?t=${Date.now()}`, { cache: 'no-store' });
      if (!res.ok) return;
      const data = await res.json();
      if (data.version && isVersionNewer(data.version, APP_VERSION)) {
        showUpdateAvailableBanner(data.version, data.notes || '');
        if (manual) showToast(`Neue Version v${data.version} verfügbar!`);
      } else if (manual) {
        showToast(`Board v${APP_VERSION} ist auf dem neuesten Stand ✓`);
      }
    } catch (e) {
      if (manual) showToast(`Installierte Version: v${APP_VERSION}`);
    }
  }

  headerBadge?.addEventListener('click', () => checkRemoteVersion(true));
  footerBtn?.addEventListener('click', () => checkRemoteVersion(true));
  updateBanner?.addEventListener('click', applyUpdateAndReload);

  /* Automatically check on load and whenever the app returns to foreground */
  checkRemoteVersion(false);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) checkRemoteVersion(false);
  });
}
