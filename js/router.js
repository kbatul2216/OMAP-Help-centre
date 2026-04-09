// ── OMAP Help Center — Client-side Router ──
// Uses fetch() to lazy-load page partials on demand.
// IMPORTANT: Requires a local HTTP server (e.g. VS Code Live Server, python -m http.server 8080)

var PAGE_MAP = {
  'home': 'pages/home.html',
  'getting-started': 'pages/getting-started.html',
  'signup': 'pages/signup.html',
  'login': 'pages/login.html',
  'concierge-overview': 'pages/concierge/overview.html',
  'concierge-step1': 'pages/concierge/step1.html',
  'concierge-step2': 'pages/concierge/step2.html',
  'concierge-step3': 'pages/concierge/step3.html',
  'concierge-step4': 'pages/concierge/step4.html',
  'concierge-deploy-overview': 'pages/concierge/deploy-overview.html',
  'concierge-test': 'pages/concierge/test.html',
  'concierge-preview': 'pages/concierge/preview.html',
  'concierge-deploy': 'pages/concierge/deploy.html',
  'concierge-edit-overview': 'pages/concierge/edit-overview.html',
  'concierge-logs': 'pages/concierge/logs.html',
  'concierge-refresh': 'pages/concierge/refresh.html',
  'concierge-api': 'pages/concierge/api.html',
  'concierge-versions': 'pages/concierge/versions.html',
  'concierge-dashboard': 'pages/concierge/dashboard.html',
  'ld-overview': 'pages/ld/overview.html',
  'ld-step1': 'pages/ld/step1.html',
  'ld-step2': 'pages/ld/step2.html',
  'ld-chat': 'pages/ld/chat.html',
  'ld-edit-overview': 'pages/ld/edit-overview.html',
  'ld-logs': 'pages/ld/logs.html',
  'ld-invite': 'pages/ld/invite.html',
  'ld-dashboard': 'pages/ld/dashboard.html',
  'col-overview': 'pages/collections/overview.html',
  'col-step1': 'pages/collections/step1.html',
  'col-step2': 'pages/collections/step2.html',
  'col-step3': 'pages/collections/step3.html',
  'col-pastdues': 'pages/collections/pastdues.html',
  'col-outreach': 'pages/collections/outreach.html',
  'col-templates': 'pages/collections/templates.html',
  'col-import': 'pages/collections/import.html',
  'col-clubs': 'pages/collections/clubs.html',
  'col-dashboard': 'pages/collections/dashboard.html',
  'audit-overview': 'pages/audit/overview.html',
  'audit-configure': 'pages/audit/configure.html',
  'audit-edit': 'pages/audit/edit.html',
  'audit-dashboard': 'pages/audit/dashboard.html',
  'int-overview': 'pages/integrations/overview.html',
  'int-abc': 'pages/integrations/abc.html',
  'int-daxko': 'pages/integrations/daxko.html',
  'int-clubauto': 'pages/integrations/clubauto.html',
  'int-crm': 'pages/integrations/crm.html',
  'int-storage': 'pages/integrations/storage.html',
  'users-overview': 'pages/settings/users.html',
  'roles-overview': 'pages/settings/roles.html',
  'billing-overview': 'pages/settings/billing.html',
  'faq': 'pages/faq.html'
};

var _cache = {};
var _currentPage = null;

function nav(pageId) {
  if (_currentPage === pageId) return;
  _currentPage = pageId;

  // Update URL hash (enables back/forward navigation and shareable links)
  if (window.location.hash !== '#' + pageId) {
    history.pushState({page: pageId}, '', '#' + pageId);
  }

  updateSidebarActive(pageId);
  updateTopNav(pageId);

  if (_cache[pageId]) {
    _render(pageId, _cache[pageId]);
    return;
  }

  var path = PAGE_MAP[pageId];
  if (!path) {
    _renderError('Page "' + pageId + '" not found.');
    return;
  }

  _renderLoading();

  fetch(path)
    .then(function(r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    })
    .then(function(html) {
      _cache[pageId] = html;
      _render(pageId, html);
    })
    .catch(function(err) {
      _renderError('Could not load page. ' + err.message);
    });
}

function _render(pageId, html) {
  var container = document.getElementById('page-container');
  container.innerHTML = html;
  window.scrollTo(0, 0);
}

function _renderLoading() {
  document.getElementById('page-container').innerHTML =
    '<div style="padding:60px 0;text-align:center;color:var(--txt-muted);font-size:14px;font-weight:500">Loading\u2026</div>';
}

function _renderError(msg) {
  document.getElementById('page-container').innerHTML =
    '<div style="padding:60px 0;text-align:center;color:var(--red);font-size:14px;font-weight:500">' + msg + '</div>';
}

// ── Hash-based routing (back/forward + direct links) ──
window.addEventListener('popstate', function(e) {
  var pageId = (e.state && e.state.page) || 'home';
  _currentPage = null; // force re-render
  nav(pageId);
});

// ── Boot: load page from URL hash or default to home ──
document.addEventListener('DOMContentLoaded', function() {
  var hash = window.location.hash.replace('#', '');
  nav(hash && PAGE_MAP[hash] ? hash : 'home');
});
