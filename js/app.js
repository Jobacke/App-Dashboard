/* ==========================================================================
   Board · App-Dashboard — Application Logic & Interactive Features
   ========================================================================== */

const APP_VERSION = '1.9.10';
const APP_BUILD_DATE = '19.11.2026';

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
  notizenHasNotes: localStorage.getItem('dashboard_notizen_has_notes') === 'true',
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
  initClock();
  initLaunchModeControl();
  initThemeToggle();
  initScratchpad();
  initFilterPopover();
  initCockpitControls();
  initGlobalShortcuts();
  initLivePingButton();
  initVersionDisplayAndUpdateCheck();

  renderAll();
  registerServiceWorker();

  /* Falls Strava OAuth ans Board zurückkehrt (#strava_auth=...), Token im Board-Tresor sichern und sofort Analytics im Board-Cockpit öffnen! */
  try {
    if (window.location.hash && window.location.hash.includes('strava_auth=')) {
      const m = window.location.hash.match(/strava_auth=([^&]+)/);
      if (m && m[1]) {
        const rawJson = decodeURIComponent(escape(atob(decodeURIComponent(m[1]))));
        localStorage.setItem('board_vault_strava_pulse_auth', rawJson);
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
        setTimeout(() => {
          openCockpit('analytics');
          showToast('Strava erfolgreich mit Analytics im Board verbunden!');
        }, 120);
      }
    }
  } catch (e) {
    console.warn('Strava Handoff Fehler:', e);
  }
});

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

    const usageText = opensCount > 0 ? `${opensCount}× genutzt` : 'Bereit';
    const showNotesBadge = app.id === 'notizen' && state.notizenHasNotes;

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
              <span class="app-usage-line">
                <span class="domain-status-dot" data-status-dot="${app.id}"></span>
                <span>${usageText}</span>
                ${showNotesBadge ? '<span class="notes-present-badge"><span class="notes-present-dot"></span>Notizen vorhanden</span>' : ''}
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
            <a href="${app.url}"
               target="_blank"
               rel="noopener"
               class="launch-cta-red"
               data-launch-btn="${app.id}"
               title="${escapeHtml(app.title)} starten">
              <span>App</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
          </div>
        </div>

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
function isStandalonePWA() {
  return (window.navigator.standalone === true) ||
         (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
}

function triggerAppLaunch(appId, customUrl = null, forceMode = null) {
  const app = APPS.find((a) => a.id === appId);
  if (!app) return;

  const targetUrl = customUrl || app.url;
  const mode = forceMode || state.launchMode;

  recordAppUsage(app);

  /* In iOS Home-Screen / Standalone mode, always open inside the Cockpit shell so the user has the "‹ Board" back bar and never gets trapped without a back button */
  if (mode === 'cockpit' || isStandalonePWA()) {
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

  let finalUrl = customUrl || app.url;
  try {
    if (app.id === 'analytics' && !finalUrl.includes('board_strava=')) {
      const stravaRaw = localStorage.getItem('board_vault_strava_pulse_auth');
      if (stravaRaw) {
        const b64 = btoa(unescape(encodeURIComponent(stravaRaw)));
        finalUrl += (finalUrl.includes('#') ? '&' : '#') + 'board_strava=' + encodeURIComponent(b64);
      }
    } else if (app.id === 'gesundheit' && !finalUrl.includes('board_gc_auth=')) {
      const gcRaw = localStorage.getItem('board_vault_gc_auto_auth_v1');
      if (gcRaw) {
        finalUrl += (finalUrl.includes('#') ? '&' : '#') + 'board_gc_auth=' + encodeURIComponent(gcRaw);
      }
    } else if (app.id === 'schichttagebuch' && !finalUrl.includes('board_schicht_auth=')) {
      const stRaw = localStorage.getItem('board_vault_schichttagebuch_auto_auth_v1');
      if (stRaw) {
        finalUrl += (finalUrl.includes('#') ? '&' : '#') + 'board_schicht_auth=' + encodeURIComponent(stRaw);
      }
    }
  } catch (e) {}

  if (iconEl) iconEl.src = app.icon;
  if (titleEl) titleEl.textContent = app.title;
  if (urlEl) urlEl.textContent = customUrl || app.url;
  if (extLink) extLink.href = customUrl || app.url;

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
    let pendingGeoCoords = null;
    if (app.id === 'znanavi' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (p) => {
          pendingGeoCoords = { lat: p.coords.latitude, lon: p.coords.longitude, acc: p.coords.accuracy, t: Date.now() };
          try {
            iframe.contentWindow?.postMessage({ type: 'board-geolocation-result', ok: true, coords: pendingGeoCoords }, '*');
          } catch {}
        },
        () => {},
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 }
      );
    }
    iframe.onload = () => {
      if (loader) loader.hidden = true;
      if (pendingGeoCoords) {
        try {
          iframe.contentWindow?.postMessage({ type: 'board-geolocation-result', ok: true, coords: pendingGeoCoords }, '*');
        } catch {}
      }
    };
    iframe.src = finalUrl;
  }

  if (drawer) {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
  }
  if (backdrop) backdrop.hidden = false;
  hideCockpitShareBar();
  renderDock();
}

function closeCockpit() {
  const drawer = document.getElementById('cockpit-drawer');
  const backdrop = document.getElementById('cockpit-backdrop');
  const iframe = document.getElementById('cockpit-iframe');

  state.activeCockpitAppId = null;
  hideCockpitShareBar();
  if (drawer) {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  }
  if (backdrop) backdrop.hidden = true;
  if (iframe) iframe.src = 'about:blank';
  renderDock();
}

let pendingCockpitShare = null;

function base64ToPdfBlob(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new Blob([bytes], { type: 'application/pdf' });
}

function hideCockpitShareBar() {
  if (pendingCockpitShare?.blobUrl) {
    try { URL.revokeObjectURL(pendingCockpitShare.blobUrl); } catch {}
  }
  pendingCockpitShare = null;
  const bar = document.getElementById('cockpit-share-bar');
  if (bar) bar.hidden = true;
}

function showCockpitShareBar(payload) {
  if (pendingCockpitShare?.blobUrl) {
    try { URL.revokeObjectURL(pendingCockpitShare.blobUrl); } catch {}
  }
  pendingCockpitShare = payload;
  const bar = document.getElementById('cockpit-share-bar');
  const labelEl = bar?.querySelector('.cockpit-share-label');
  const primaryBtn = document.getElementById('cockpit-share-trigger');
  const secondaryBtn = document.getElementById('cockpit-share-copy');

  if (payload.kind === 'pdf') {
    if (labelEl) labelEl.textContent = 'PDF bereit';
    if (primaryBtn) primaryBtn.textContent = 'PDF teilen ↗';
    if (secondaryBtn) secondaryBtn.textContent = 'Ansehen';
  } else {
    if (labelEl) labelEl.textContent = 'Notiz zum Weiterleiten bereit';
    if (primaryBtn) primaryBtn.textContent = 'Jetzt teilen ↗';
    if (secondaryBtn) secondaryBtn.textContent = 'Kopieren';
  }

  if (bar) bar.hidden = false;
}

async function copyTextTopLevel(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {}
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

function initCockpitControls() {
  document.getElementById('cockpit-close')?.addEventListener('click', closeCockpit);
  document.getElementById('cockpit-back-board')?.addEventListener('click', closeCockpit);
  document.getElementById('cockpit-backdrop')?.addEventListener('click', closeCockpit);

  document.getElementById('cockpit-share-dismiss')?.addEventListener('click', hideCockpitShareBar);
  document.getElementById('cockpit-share-copy')?.addEventListener('click', async () => {
    if (!pendingCockpitShare) return;
    if (pendingCockpitShare.kind === 'pdf' && pendingCockpitShare.pdfBlob) {
      const url = pendingCockpitShare.blobUrl || URL.createObjectURL(pendingCockpitShare.pdfBlob);
      pendingCockpitShare.blobUrl = url;
      const win = window.open(url, '_blank');
      if (!win) {
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.click();
      }
      return;
    }
    if (!pendingCockpitShare.text) return;
    const ok = await copyTextTopLevel(pendingCockpitShare.text);
    showToast(ok ? 'Notiz in Zwischenablage kopiert ✓' : 'Kopieren nicht möglich');
    if (ok) hideCockpitShareBar();
  });
  document.getElementById('cockpit-share-trigger')?.addEventListener('click', async () => {
    if (!pendingCockpitShare) return;
    const payload = pendingCockpitShare;
    if (payload.kind === 'pdf' && payload.pdfFile) {
      if (navigator.share && (!navigator.canShare || navigator.canShare({ files: [payload.pdfFile] }))) {
        try {
          await navigator.share({ title: payload.title || 'Notiz', files: [payload.pdfFile] });
          hideCockpitShareBar();
          return;
        } catch (err) {
          if (err && err.name === 'AbortError') {
            hideCockpitShareBar();
            return;
          }
        }
      }
      /* Fallback: open PDF directly in built-in Safari Quick Look PDF viewer */
      const url = payload.blobUrl || URL.createObjectURL(payload.pdfBlob);
      payload.blobUrl = url;
      window.open(url, '_blank');
      hideCockpitShareBar();
      return;
    }
    if (!payload.text) return;
    if (navigator.share) {
      try {
        await navigator.share({ text: payload.text });
        hideCockpitShareBar();
        return;
      } catch (err) {
        if (err && err.name === 'AbortError') {
          hideCockpitShareBar();
          return;
        }
      }
    }
    const ok = await copyTextTopLevel(payload.text);
    showToast(ok ? 'Notiz in Zwischenablage kopiert ✓' : 'Teilen auf diesem Gerät nicht verfügbar');
    hideCockpitShareBar();
  });

  document.getElementById('cockpit-expand')?.addEventListener('click', () => {
    const drawer = document.getElementById('cockpit-drawer');
    drawer?.classList.toggle('expanded');
  });

  document.getElementById('cockpit-reload')?.addEventListener('click', () => {
    const iframe = document.getElementById('cockpit-iframe');
    const loader = document.getElementById('cockpit-loader');
    if (iframe && iframe.src && iframe.src !== 'about:blank') {
      if (loader) loader.hidden = false;
      try {
        const u = new URL(iframe.src);
        u.searchParams.set('_r', String(Date.now()));
        iframe.src = u.toString();
      } catch {
        iframe.src = iframe.src;
      }
    }
  });

  /* Listen for navigation / close / persistent auth-storage requests sent from embedded apps */
  window.addEventListener('message', (e) => {
    if (!e.data || typeof e.data !== 'object') return;
    if (e.data.type === 'zna-open-url' && e.data.url) {
      window.location.href = e.data.url;
    } else if (e.data.type === 'board-close-cockpit') {
      closeCockpit();
    } else if (e.data.type === 'board-storage-set' && e.data.key && e.data.value !== undefined) {
      try {
        localStorage.setItem('board_vault_' + e.data.key, String(e.data.value));
      } catch {}
    } else if (e.data.type === 'board-storage-remove' && e.data.key) {
      try {
        localStorage.removeItem('board_vault_' + e.data.key);
      } catch {}
    } else if (e.data.type === 'board-storage-get' && e.data.key) {
      try {
        const val = localStorage.getItem('board_vault_' + e.data.key);
        if (val && e.source && typeof e.source.postMessage === 'function') {
          e.source.postMessage({ type: 'board-storage-value', key: e.data.key, value: val }, '*');
        }
      } catch {}
    } else if (e.data.type === 'board-get-geolocation') {
      const reqId = e.data.reqId || '';
      const targetWin = e.source || document.getElementById('cockpit-iframe')?.contentWindow;
      if (!navigator.geolocation) {
        try { targetWin?.postMessage({ type: 'board-geolocation-result', reqId, ok: false, code: 2 }, '*'); } catch {}
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (p) => {
          try {
            targetWin?.postMessage({
              type: 'board-geolocation-result',
              reqId,
              ok: true,
              coords: { lat: p.coords.latitude, lon: p.coords.longitude, acc: p.coords.accuracy, t: Date.now() }
            }, '*');
          } catch {}
        },
        (err) => {
          try {
            targetWin?.postMessage({
              type: 'board-geolocation-result',
              reqId,
              ok: false,
              code: err ? err.code : 1
            }, '*');
          } catch {}
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 }
      );
    } else if (e.data.type === 'board-share-text' && typeof e.data.text === 'string') {
      const payload = { kind: 'text', title: e.data.title || 'Notiz', text: e.data.text };
      (async () => {
        if (navigator.share) {
          try {
            await navigator.share({ text: payload.text });
            return;
          } catch (err) {
            if (err && err.name === 'AbortError') return;
          }
        }
        await copyTextTopLevel(payload.text);
        showCockpitShareBar(payload);
      })();
    } else if (e.data.type === 'board-share-pdf' && typeof e.data.base64 === 'string') {
      try {
        const fileName = e.data.fileName || 'Notiz.pdf';
        const title = e.data.title || 'Notiz';
        const pdfBlob = base64ToPdfBlob(e.data.base64);
        let pdfFile = null;
        try { pdfFile = new File([pdfBlob], fileName, { type: 'application/pdf' }); } catch {}
        const payload = { kind: 'pdf', fileName, title, pdfBlob, pdfFile, blobUrl: null };
        (async () => {
          if (pdfFile && navigator.share && (!navigator.canShare || navigator.canShare({ files: [pdfFile] }))) {
            try {
              await navigator.share({ title, files: [pdfFile] });
              return;
            } catch (err) {
              if (err && err.name === 'AbortError') return;
            }
          }
          showCockpitShareBar(payload);
        })();
      } catch (err) {
        console.warn('PDF share bridge error:', err);
      }
    } else if (e.data.type === 'notizen-status') {
      const hasNotes = Boolean(e.data.hasNotes);
      if (state.notizenHasNotes !== hasNotes) {
        state.notizenHasNotes = hasNotes;
        try { localStorage.setItem('dashboard_notizen_has_notes', hasNotes ? 'true' : 'false'); } catch {}
        renderAppsGrid();
      }
    } else if (e.data.type === 'notizen-add-result') {
      const cb = pendingNotizenCallbacks.get(e.data.reqId);
      if (cb) {
        pendingNotizenCallbacks.delete(e.data.reqId);
        cb(e.data);
      }
      if (typeof e.data.hasNotes === 'boolean') {
        state.notizenHasNotes = e.data.hasNotes;
        try { localStorage.setItem('dashboard_notizen_has_notes', e.data.hasNotes ? 'true' : 'false'); } catch {}
        renderAppsGrid();
      }
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

const pendingNotizenCallbacks = new Map();

function getNotizenBridgeWindow() {
  const bridge = document.getElementById('notizen-bridge-iframe');
  return bridge ? bridge.contentWindow : null;
}

function sendMemoToNotizenApp(text, categoryName) {
  return new Promise((resolve) => {
    const win = getNotizenBridgeWindow();
    if (!win) {
      resolve({ ok: false, error: 'Notizen-Verbindung nicht bereit' });
      return;
    }
    const reqId = `memo_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const timer = setTimeout(() => {
      if (pendingNotizenCallbacks.has(reqId)) {
        pendingNotizenCallbacks.delete(reqId);
        resolve({ ok: false, error: 'Zeitüberschreitung beim Übertragen' });
      }
    }, 8000);

    pendingNotizenCallbacks.set(reqId, (res) => {
      clearTimeout(timer);
      resolve(res);
    });

    try {
      win.postMessage({ type: 'board-add-text-note', reqId, text, category: categoryName }, '*');
    } catch (err) {
      clearTimeout(timer);
      pendingNotizenCallbacks.delete(reqId);
      resolve({ ok: false, error: 'Übertragung blockiert' });
    }
  });
}

function initScratchpad() {
  const area = document.getElementById('quick-scratchpad');
  const status = document.getElementById('scratchpad-status');
  const doneBtn = document.getElementById('scratchpad-done-btn');
  const micBtn = document.getElementById('scratchpad-mic-btn');
  const openNotizenBtn = document.getElementById('scratchpad-open-notizen');
  const transferBtns = document.querySelectorAll('[data-memo-cat]');
  const bridgeFrame = document.getElementById('notizen-bridge-iframe');
  if (!area) return;

  /* Open Notizen directly inside the Board Cockpit so transferred notes & JUH compositions are always visible */
  openNotizenBtn?.addEventListener('click', () => {
    openCockpit('notizen');
  });

  function autoResizeMemoField() {
    area.style.height = 'auto';
    if (!area.value.trim()) {
      area.style.height = '';
      return;
    }
    area.style.height = `${Math.min(area.scrollHeight, 160)}px`;
  }

  area.value = localStorage.getItem('dashboard_scratchpad') || '';
  autoResizeMemoField();
  let timeoutId = null;

  function persistMemo() {
    localStorage.setItem('dashboard_scratchpad', area.value);
    updateTransferButtonState();
    autoResizeMemoField();
    if (status && !isRecording) {
      status.classList.add('visible');
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => status.classList.remove('visible'), 1800);
    }
  }

  function updateTransferButtonState() {
    const hasText = area.value.trim().length > 0;
    transferBtns.forEach((btn) => {
      btn.disabled = !hasText;
    });
  }
  updateTransferButtonState();

  /* Ping background Notizen bridge once loaded and whenever returning to foreground */
  const pingNotizen = () => {
    try { getNotizenBridgeWindow()?.postMessage({ type: 'board-notizen-ping' }, '*'); } catch {}
  };
  bridgeFrame?.addEventListener('load', () => {
    pingNotizen();
    setTimeout(pingNotizen, 1200);
  });
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) pingNotizen();
  });

  /* Champions-League Microphone Dictation (Exact Proven v1.9.6 / Remembers Recipe:
     Top-level sync SpeechRecognition + getUserMedia + rec.stop() [NEVER abort()!] + 250ms iOS Seamless Session Reset) */
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  let activeRecognition = null;
  let micMediaStream = null;
  let isRecording = false;
  let usedMicThisSession = false;
  let micRestartTimer = null;
  let sessionTranscriptBase = '';
  let sessionSegments = [];
  let sessionFinalText = '';
  let sessionInterimText = '';

  /* Restore scroll & toast seamlessly after an iOS audio/speech session reset */
  try {
    const savedScrollY = sessionStorage.getItem('board_scroll_y');
    if (savedScrollY !== null) {
      sessionStorage.removeItem('board_scroll_y');
      requestAnimationFrame(() => window.scrollTo(0, parseInt(savedScrollY, 10) || 0));
    }
    const savedToast = sessionStorage.getItem('board_pending_toast');
    if (savedToast) {
      sessionStorage.removeItem('board_pending_toast');
      setTimeout(() => showToast(savedToast), 120);
    }
  } catch {}

  function triggerBoardSeamlessReload(toastMessage = '', delayMs = 250) {
    try {
      sessionStorage.setItem('board_scroll_y', String(window.scrollY || 0));
      if (toastMessage) {
        sessionStorage.setItem('board_pending_toast', toastMessage);
      }
      if (area.value) localStorage.setItem('dashboard_scratchpad', area.value);
      else localStorage.removeItem('dashboard_scratchpad');
    } catch {}
    setTimeout(() => {
      window.location.reload();
    }, delayMs);
  }

  const MEMO_NUMBER_WORDS_DE = {
    ein: '1', eine: '1', einen: '1', eins: '1',
    zwei: '2', zwo: '2', drei: '3', vier: '4', fünf: '5',
    sechs: '6', sieben: '7', acht: '8', neun: '9', zehn: '10',
    elf: '11', zwölf: '12', fünfzehn: '15', zwanzig: '20'
  };

  const MEMO_RD_TERMS = {
    'vigo': 'Viggo', 'vigos': 'Viggos', 'viggo': 'Viggo',
    'rtw': 'RTW', 'nef': 'NEF', 'ktw': 'KTW', 'juh': 'JUH', 'rd': 'RD',
    'ekg': 'EKG', 'elektroden': 'EKG-Elektroden', 'nacl': 'NaCl 0,9%',
    'jonosteril': 'Jonosteril', 'ringer': 'Ringer', 'mullbinde': 'Mullbinde',
    'mullbinden': 'Mullbinden', 'kompresse': 'Kompresse', 'kompressen': 'Kompressen',
    'laken': 'Laken', 'decke': 'Decke', 'decken': 'Decken'
  };

  function formatMemoSpeechText(rawText) {
    if (!rawText) return '';
    let text = String(rawText);

    text = text.replace(/\b(?:neue\s+)?zeile\b/gi, '\n');
    text = text.replace(/\b(?:neuer\s+)?absatz\b/gi, '\n\n');
    text = text.replace(/\b(?:semikolon|strichpunkt)\b/gi, '; ');

    const UNIT_LOOKAHEAD = '(?:cm|mm|m|km|ml|l|dl|cl|mg|g|kg|µg|mcg|ug|ie|i\\.e\\.|iu|ch|charri[eè]re|gauge|zoll|uhr|min|sek|std|h|grad|prozent|%|bar|mmhg|mmol|liter|milliliter|gramm|milligramm|mikrogramm|zentimeter|millimeter|meter|er|te|ten|ter)\\b';

    text = text.replace(/\b(ein|eine|einen|eins|zwei|zwo|drei|vier|fünf|sechs|sieben|acht|neun|zehn|elf|zwölf|fünfzehn|zwanzig)[ \t]*(?:mal|[xX×*])\b/gi, (m, numWord) => {
      const digit = MEMO_NUMBER_WORDS_DE[numWord.toLowerCase()] || numWord;
      return `${digit} x`;
    });
    text = text.replace(/\b(\d+)[ \t]*(?:mal|[xX×*])\b(?=[ \t]*[A-Za-zÄÖÜäöüß])/gi, '$1 x');
    text = text.replace(new RegExp(`\\b(ein|eine|einen|eins|zwei|zwo|drei|vier|fünf|sechs|sieben|acht|neun|zehn|elf|zwölf|fünfzehn|zwanzig)[ \\t]+(?=${UNIT_LOOKAHEAD})`, 'gi'), (m, numWord) => {
      const digit = MEMO_NUMBER_WORDS_DE[numWord.toLowerCase()] || numWord;
      return `${digit} `;
    });
    text = text.replace(new RegExp(`\\b(ein|eine|einen|eins|zwei|zwo|drei|vier|fünf|sechs|sieben|acht|neun|zehn|elf|zwölf|fünfzehn|zwanzig)[ \\t]+(?!x\\b|mal\\b|${UNIT_LOOKAHEAD})(?=[A-ZÄÖÜa-zäöüß]{2,})`, 'gi'), (m, numWord) => {
      const digit = MEMO_NUMBER_WORDS_DE[numWord.toLowerCase()] || numWord;
      return `${digit} x `;
    });

    for (const [wrong, correct] of Object.entries(MEMO_RD_TERMS)) {
      const esc = wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      text = text.replace(new RegExp(`(?<![\\wÄÖÜäöüß])${esc}(?![\\wÄÖÜäöüß])`, 'gi'), correct);
    }

    text = text.replace(/\b(\d+)[ \t]*(?:(?:[xX×*]|mal)[ \t]*)+(?=[A-Za-zÄÖÜäöüß])/gi, '$1 x ');
    text = text.replace(new RegExp(`\\b(\\d+)[ \\t]+(?!(?:[xX×*]|mal)\\b|${UNIT_LOOKAHEAD})([A-ZÄÖÜ][A-Za-zÄÖÜäöüß-]{1,})`, 'gi'), '$1 x $2');
    text = text.replace(/\b(\d+)[ \t]*(?:[xX×*][ \t]*){2,}/g, '$1 x ');
    text = text.replace(/\bEKG\s+EKG-Elektroden\b/gi, 'EKG-Elektroden');
    text = text.replace(/\bNaCl(?:\s+0,9%){2,}/gi, 'NaCl 0,9%');
    text = text.replace(new RegExp(`\\b(\\d+(?:[.,]\\d+)?)[ \\t]*(?:[xX×*]|mal)[ \\t]*(?=${UNIT_LOOKAHEAD})`, 'gi'), '$1 ');
    text = text.replace(new RegExp(`(?<!\\bmal)([A-Za-zÄÖÜäöüß]{2,}|%)[ \\t]*(?:,|;|\\bund\\b)?[ \\t]+(?=\\d+[ \\t]*(?:x[ \\t]+[A-Za-zÄÖÜäöüß0-9]|${UNIT_LOOKAHEAD}[ \\t]+[A-Za-zÄÖÜäöüß]{2,}))`, 'gi'), '$1; ');

    text = text.replace(/[ \t]*;[ \t]*/g, '; ');
    text = text.replace(/(?:;\s*){2,}/g, '; ');
    text = text.replace(/[ \t]+\n/g, '\n').replace(/\n[ \t]+/g, '\n');
    return text;
  }

  function setMicRecordingUI(active) {
    micBtn?.classList.toggle('recording', active);
    area.classList.toggle('mic-listening', active);
    if (openNotizenBtn) openNotizenBtn.hidden = active;
    if (status) {
      if (active) {
        status.textContent = '● Hört zu…';
        status.classList.add('visible', 'recording');
      } else {
        status.textContent = 'Gespeichert';
        status.classList.remove('recording');
      }
    }
  }

  function rebuildMemoFromSession() {
    let combined = (sessionTranscriptBase || '').trim();
    for (let idx = 0; idx < sessionSegments.length; idx++) {
      const seg = sessionSegments[idx];
      if (!seg || !seg.text) continue;
      let segText = seg.text.trim();
      const prevSeg = idx > 0 ? sessionSegments[idx - 1] : null;
      if (prevSeg && prevSeg.text) {
        const prevText = prevSeg.text.trim();
        if (segText.toLowerCase() === prevText.toLowerCase()) continue;
        if (segText.toLowerCase().startsWith(prevText.toLowerCase())) {
          segText = segText.slice(prevText.length).replace(/^[;,\s]+/, '').trim();
          if (!segText) continue;
        }
      }
      segText = segText.replace(/[;,]+\s*$/, '').trim();
      if (!segText) continue;

      if (combined === '') {
        combined = segText;
      } else if (segText.startsWith('\n') || combined.endsWith('\n')) {
        combined += segText;
      } else {
        combined = combined.replace(/[;,]+\s*$/, '') + '; ' + segText;
      }
    }
    if (combined && !combined.endsWith('\n')) {
      combined = combined.replace(/[;,]+\s*$/, '') + '; ';
    }
    sessionFinalText = combined;
  }

  function syncMemoFieldFromSpeech() {
    const finalPart = sessionFinalText || '';
    const interimPart = sessionInterimText || '';
    let value = finalPart;
    if (interimPart) {
      if (!value) {
        value = interimPart;
      } else if (value.endsWith('\n') || value.endsWith('; ') || value.endsWith(' ')) {
        value += interimPart;
      } else {
        value = value.replace(/[;,]+\s*$/, '') + '; ' + interimPart;
      }
    }
    area.value = value;
    localStorage.setItem('dashboard_scratchpad', area.value);
    updateTransferButtonState();
    autoResizeMemoField();
    area.scrollTop = area.scrollHeight;
  }

  function flushInterimToFinal() {
    if (sessionInterimText && sessionInterimText.trim()) {
      const flushed = formatMemoSpeechText(sessionInterimText.trim()).replace(/[;,]+\s*$/, '').trim();
      const cleanFinal = sessionFinalText.replace(/[;,]+\s*$/, '').trim();
      if (flushed && !cleanFinal.toLowerCase().endsWith(flushed.toLowerCase())) {
        const prefix = (sessionFinalText === '' || sessionFinalText.endsWith('\n') || sessionFinalText.endsWith('; ')) ? '' : '; ';
        sessionFinalText += prefix + flushed + '; ';
      }
      sessionInterimText = '';
    }
  }

  function releaseMicStream() {
    if (micMediaStream) {
      try { micMediaStream.getTracks().forEach((t) => t.stop()); } catch {}
      micMediaStream = null;
    }
  }

  function stopMic() {
    clearTimeout(micRestartTimer);
    micRestartTimer = null;
    if (!isRecording && !activeRecognition && !micMediaStream) return;
    isRecording = false;
    setMicRecordingUI(false);

    flushInterimToFinal();

    if (activeRecognition) {
      const rec = activeRecognition;
      activeRecognition = null;
      try {
        rec.onresult = null;
        rec.onend = null;
        rec.onerror = null;
        /* CRITICAL FOR iOS (proven in Remembers): Always use rec.stop(), NEVER rec.abort()! */
        rec.stop();
      } catch {}
    }

    releaseMicStream();

    if (sessionFinalText) {
      syncMemoFieldFromSpeech();
      persistMemo();
    }
  }

  function startFreshMemoRecognitionSession() {
    clearTimeout(micRestartTimer);
    if (!isRecording || !SpeechRec) return;

    const rec = new SpeechRec();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = 'de-DE';
    activeRecognition = rec;

    let lastResultEventTime = Date.now();

    const applyPauseSplittingToSegment = (segObj, rawTranscript, now) => {
      const trimmedRaw = rawTranscript.trim();
      if (!trimmedRaw) return '';
      if (!segObj.rawHistory) {
        segObj.rawHistory = trimmedRaw;
        segObj.withPauses = trimmedRaw;
        return trimmedRaw;
      }
      const prevRaw = segObj.rawHistory;
      if (trimmedRaw.toLowerCase() === prevRaw.toLowerCase()) {
        return segObj.withPauses || trimmedRaw;
      }
      if (trimmedRaw.toLowerCase().startsWith(prevRaw.toLowerCase())) {
        const addedPart = trimmedRaw.slice(prevRaw.length).trim();
        if (addedPart) {
          const pauseDuration = now - lastResultEventTime;
          const baseWithPauses = (segObj.withPauses || prevRaw).replace(/[;,]+\s*$/, '').trim();
          segObj.withPauses = pauseDuration > 1150
            ? `${baseWithPauses}; ${addedPart}`
            : `${baseWithPauses} ${addedPart}`;
          segObj.rawHistory = trimmedRaw;
          return segObj.withPauses;
        }
      }
      segObj.rawHistory = trimmedRaw;
      segObj.withPauses = trimmedRaw;
      return trimmedRaw;
    };

    rec.onresult = (event) => {
      const now = Date.now();
      const currentInterimParts = [];

      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i];
        const bestTranscript = result[0].transcript;
        const existing = sessionSegments[i] || { text: '', rawHistory: '', withPauses: '' };
        const pausedText = applyPauseSplittingToSegment(existing, bestTranscript, now);

        if (result.isFinal) {
          sessionSegments[i] = { ...existing, text: formatMemoSpeechText(pausedText) };
        } else {
          sessionSegments[i] = { ...existing, text: '' };
          currentInterimParts.push(pausedText);
        }
      }

      lastResultEventTime = now;
      rebuildMemoFromSession();

      const rawInterimCombined = currentInterimParts.join('; ').trim();
      const processedInterim = rawInterimCombined
        ? formatMemoSpeechText(rawInterimCombined).replace(/[;,]+\s*$/, '').trim()
        : '';

      const cleanInterim = processedInterim.replace(/[;,]+\s*$/, '').trim();
      const cleanFinal = sessionFinalText.replace(/[;,]+\s*$/, '').trim();
      if (cleanInterim && cleanFinal.toLowerCase().endsWith(cleanInterim.toLowerCase())) {
        sessionInterimText = '';
      } else {
        sessionInterimText = processedInterim;
      }

      syncMemoFieldFromSpeech();
    };

    rec.onerror = (event) => {
      const errCode = event?.error || '';
      if (errCode === 'no-speech' || errCode === 'aborted') return;
      console.warn('Memo speech recognition warning:', errCode);
      if (errCode === 'not-allowed' || errCode === 'service-not-allowed') {
        stopMic();
        showToast('Mikrofonzugriff bitte erlauben (Safari/iOS Einstellungen)');
      }
    };

    rec.onend = () => {
      if (activeRecognition !== rec) return;
      activeRecognition = null;
      if (isRecording) {
        flushInterimToFinal();
        sessionTranscriptBase = sessionFinalText;
        sessionSegments = [];
        syncMemoFieldFromSpeech();
        micRestartTimer = setTimeout(() => {
          if (isRecording) startFreshMemoRecognitionSession();
        }, 100);
      }
    };

    try {
      rec.start();
    } catch (e) {
      console.warn('Could not start SpeechRecognition synchronously:', e);
    }
  }

  micBtn?.addEventListener('click', async () => {
    if (isRecording) {
      stopMic();
      if (isIOS && navigator.onLine) {
        /* Exact Remembers pattern: after rec.stop() + track release, wait 250ms then seamless reload so iOS resets AVAudioSession & SFSpeechRecognizer cleanly! */
        triggerBoardSeamlessReload('Aufnahme beendet ✓', 250);
        return;
      }
      showToast('Aufnahme beendet ✓');
      return;
    }

    if (!SpeechRec) {
      area.focus();
      showToast('Spracherkennung in diesem Browser nicht verfügbar – bitte Tastatur-Mikrofon nutzen');
      return;
    }

    try { area.blur(); } catch {}

    if (activeRecognition) {
      try {
        activeRecognition.onresult = null;
        activeRecognition.onend = null;
        activeRecognition.onerror = null;
        activeRecognition.stop();
      } catch {}
      activeRecognition = null;
    }

    const existing = area.value.trim();
    sessionTranscriptBase = existing ? (existing.endsWith('\n') ? existing : existing.replace(/[;,]+\s*$/, '') + '; ') : '';
    sessionFinalText = sessionTranscriptBase;
    sessionInterimText = '';
    sessionSegments = [];
    isRecording = true;
    usedMicThisSession = true;
    setMicRecordingUI(true);
    showToast('🎤 Sprich jetzt… (erneut tippen zum Stoppen)');

    /* 1:1 proven v1.9.6 & Remembers pattern:
       1) Synchronous SpeechRecognition.start() inside user tap BEFORE any await! */
    startFreshMemoRecognitionSession();

    /* 2) Activate iOS AVAudioSession & mic stream via getUserMedia (NO AudioContext on iOS!) */
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
          }
        });
        if (!isRecording) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        micMediaStream = stream;
      } catch (err) {
        console.warn('Board mic getUserMedia error:', err);
        if (err && err.name === 'NotAllowedError') {
          stopMic();
          showToast('Mikrofonzugriff nicht erlaubt – bitte in iOS Einstellungen erlauben');
        }
      }
    }
  });

  area.addEventListener('focus', () => {
    if (doneBtn) doneBtn.hidden = false;
    if (openNotizenBtn && window.innerWidth <= 500) openNotizenBtn.hidden = true;
  });

  area.addEventListener('input', persistMemo);

  area.addEventListener('blur', () => {
    setTimeout(() => {
      if (doneBtn) doneBtn.hidden = true;
      if (openNotizenBtn && !isRecording) openNotizenBtn.hidden = false;
      autoResizeMemoField();
      resetMobileViewportZoom();
    }, 80);
  });

  doneBtn?.addEventListener('click', () => {
    stopMic();
    area.blur();
    resetMobileViewportZoom();
    showToast('Memo gespeichert ✓');
  });

  /* Silent transfer into Notizen app (dringend / JUH / privat) + clear scratchpad */
  transferBtns.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const hadUsedMic = isRecording || usedMicThisSession;
      stopMic();
      const memoText = area.value.trim();
      const cat = btn.dataset.memoCat;
      if (!memoText) {
        showToast('Bitte zuerst eine Kurznotiz eingeben');
        return;
      }

      transferBtns.forEach((b) => { b.disabled = true; });
      const origHtml = btn.innerHTML;
      btn.textContent = 'Sende…';

      const res = await sendMemoToNotizenApp(memoText, cat);

      btn.innerHTML = origHtml;
      if (res && res.ok) {
        area.value = '';
        sessionTranscriptBase = '';
        sessionFinalText = '';
        sessionInterimText = '';
        sessionSegments = [];
        autoResizeMemoField();
        localStorage.removeItem('dashboard_scratchpad');
        area.blur();
        resetMobileViewportZoom();
        state.notizenHasNotes = true;
        try { localStorage.setItem('dashboard_notizen_has_notes', 'true'); } catch {}
        renderAppsGrid();
        const label = res.categoryLabel || cat;
        const msg = res.appended
          ? `An bestehende ${label}-Notiz angehängt ✓`
          : `In Remembers (${label}) übertragen ✓`;
        if (isIOS && hadUsedMic && navigator.onLine) {
          triggerBoardSeamlessReload(msg, 120);
          return;
        }
        showToast(msg);
      } else {
        showToast(`Fehler beim Übertragen: ${res?.error || 'Bitte kurz warten & erneut tippen'}`);
      }
      updateTransferButtonState();
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
   Global Keyboard Shortcuts (1-7, Esc)
   ========================================================================== */
function initGlobalShortcuts() {
  document.addEventListener('keydown', (e) => {
    const activeTag = document.activeElement?.tagName.toLowerCase();
    const isTyping = activeTag === 'input' || activeTag === 'textarea' || document.activeElement?.isContentEditable;

    if (e.key === 'Escape') {
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

  navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' }).then((reg) => {
    /* Quietly activate any waiting SW in the background — only version.json comparison decides if the Update Banner should show! */
    if (reg.waiting) {
      waitingServiceWorker = reg.waiting;
      try { reg.waiting.postMessage('skipWaiting'); } catch {}
    }
    reg.addEventListener('updatefound', () => {
      const installing = reg.installing;
      if (!installing) return;
      installing.addEventListener('statechange', () => {
        if (installing.state === 'installed' && navigator.serviceWorker.controller) {
          waitingServiceWorker = installing;
          try { installing.postMessage('skipWaiting'); } catch {}
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
      } else {
        if (updateBanner) updateBanner.hidden = true;
        if (manual) showToast(`Board v${APP_VERSION} ist auf dem neuesten Stand ✓`);
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
