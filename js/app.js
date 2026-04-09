// ── OMAP Help Center — App (sidebar, search, UI helpers) ──

// ── Sidebar active state (called by router) ──
function updateSidebarActive(pageId) {
  document.querySelectorAll('.sb-l1,.sb-l2,.sb-l3').forEach(function(i){i.classList.remove('act')});
  document.querySelectorAll('[data-p="'+pageId+'"]').forEach(function(i){i.classList.add('act')});

  // Auto-expand L1
  var l1Key = ANCESTRY[pageId];
  if (l1Key) {
    var l1wrap = document.getElementById('l2-'+l1Key);
    var l1btn  = document.getElementById('l1-'+l1Key);
    if (l1wrap && !l1wrap.classList.contains('open')) l1wrap.classList.add('open');
    if (l1btn) l1btn.classList.add('open');
  }

  // Auto-expand L2
  var l2Key = L2ANCESTRY[pageId];
  if (l2Key) {
    var l2wrap = document.getElementById('l3-'+l2Key);
    var l2btn  = document.getElementById('l2-'+l2Key);
    if (l2wrap && !l2wrap.classList.contains('open')) l2wrap.classList.add('open');
    if (l2btn) l2btn.classList.add('open');
  }
}

// ── Top nav active state (called by router) ──
function updateTopNav(pageId) {
  var tnMap = {home:'Home','getting-started':'Get started',signup:'Get started',login:'Get started',faq:'FAQ'};
  document.querySelectorAll('.tn').forEach(function(b){
    b.classList.toggle('act', b.textContent.trim() === tnMap[pageId]);
  });
}

// ── Page → L1 sidebar ancestry ──
var ANCESTRY = {
  'getting-started':'gs','signup':'gs','login':'gs',
  'concierge-overview':'concierge','concierge-step1':'concierge','concierge-step2':'concierge',
  'concierge-step3':'concierge','concierge-step4':'concierge',
  'concierge-deploy-overview':'concierge','concierge-test':'concierge',
  'concierge-preview':'concierge','concierge-deploy':'concierge',
  'concierge-edit-overview':'concierge','concierge-logs':'concierge',
  'concierge-refresh':'concierge','concierge-api':'concierge','concierge-versions':'concierge',
  'concierge-dashboard':'concierge',
  'ld-overview':'ld','ld-step1':'ld','ld-step2':'ld','ld-chat':'ld',
  'ld-edit-overview':'ld','ld-logs':'ld','ld-invite':'ld','ld-dashboard':'ld',
  'col-overview':'col','col-step1':'col','col-step2':'col','col-step3':'col',
  'col-pastdues':'col','col-outreach':'col','col-templates':'col',
  'col-import':'col','col-clubs':'col','col-dashboard':'col',
  'audit-overview':'audit','audit-configure':'audit','audit-edit':'audit','audit-dashboard':'audit',
  'int-overview':'int','int-abc':'int','int-daxko':'int','int-clubauto':'int',
  'int-crm':'int','int-storage':'int',
  'users-overview':'users','roles-overview':'roles','billing-overview':'billing'
};

// ── Page → L2 sidebar ancestry ──
var L2ANCESTRY = {
  'concierge-step1':'concierge-create','concierge-step2':'concierge-create',
  'concierge-step3':'concierge-create','concierge-step4':'concierge-create',
  'concierge-deploy-overview':'concierge-deploy','concierge-test':'concierge-deploy',
  'concierge-preview':'concierge-deploy','concierge-deploy':'concierge-deploy',
  'concierge-edit-overview':'concierge-edit',
  'concierge-refresh':'concierge-settings','concierge-api':'concierge-settings',
  'concierge-versions':'concierge-settings','concierge-dashboard':'concierge-analytics',
  'ld-step1':'ld-create','ld-step2':'ld-create',
  'ld-edit-overview':'ld-edit','ld-invite':'ld-settings','ld-dashboard':'ld-analytics',
  'col-step1':'col-create','col-step2':'col-create','col-step3':'col-create',
  'col-outreach':'col-settings','col-templates':'col-settings',
  'col-import':'col-settings','col-clubs':'col-settings','col-dashboard':'col-analytics',
  'audit-configure':'audit-create','audit-dashboard':'audit-analytics',
  'int-abc':'int-mrm','int-daxko':'int-mrm','int-clubauto':'int-mrm'
};

// ── Sidebar toggle helpers ──
function toggleL1(key, defaultPage) {
  var wrap = document.getElementById('l2-'+key);
  var btn  = document.getElementById('l1-'+key);
  if (!wrap) return;
  var isOpen = wrap.classList.toggle('open');
  if (btn) btn.classList.toggle('open', isOpen);
}

function toggleL2(key, defaultPage) {
  var wrap = document.getElementById('l3-'+key);
  var btn  = document.getElementById('l2-'+key);
  if (!wrap) return;
  var isOpen = wrap.classList.toggle('open');
  if (btn) btn.classList.toggle('open', isOpen);
}

// ── Search ──
function doSearch(q) {
  var hbox   = document.getElementById('home-sr-box');
  var hlist  = document.getElementById('home-sr-list');
  var hcount = document.getElementById('home-sr-count');
  if (!q || q.length < 2) { hbox.style.display = 'none'; return; }
  var ql  = q.toLowerCase();
  var res = IDX.filter(function(x){ return x.t.toLowerCase().includes(ql) || x.m.toLowerCase().includes(ql); });
  var markup = res.length
    ? res.slice(0, 8).map(function(r){
        return '<div class="sr-item" onclick="nav(\''+r.p+'\')"><div class="sr-t">'+r.t+'</div><div class="sr-m">'+r.m+'</div></div>';
      }).join('')
    : '<div style="font-size:14px;color:var(--txt-muted);padding:8px 0;font-weight:500">No results for "'+q+'"</div>';
  hlist.innerHTML = markup;
  hcount.textContent = res.length ? res.length+' result'+(res.length===1?'':'s')+' for "'+q+'"' : '';
  hbox.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
  // Top search bar (always in DOM)
  document.getElementById('topSearch').addEventListener('input', function(){
    var container = document.getElementById('page-container');
    if (!container.querySelector('#heroSearch')) { nav('home'); }
    setTimeout(function(){ doSearch(document.getElementById('topSearch').value); }, 20);
  });
});

// heroSearch lives inside pages/home.html which loads async — use event delegation
document.addEventListener('input', function(e) {
  if (e.target && e.target.id === 'heroSearch') {
    doSearch(e.target.value);
  }
});

// ── UI helpers (called from page HTML via onclick) ──
function faq(hd) {
  var b = hd.nextElementSibling, a = hd.querySelector('.faq-arr');
  b.classList.toggle('open');
  if (a) a.classList.toggle('open');
}

function tog(btn) {
  var d = btn.nextElementSibling, o = d.classList.toggle('open');
  btn.innerHTML = o ? btn.innerHTML.replace('▾','▴') : btn.innerHTML.replace('▴','▾');
}

function fbOk(btn, v) {
  var box = btn.closest('.feedback');
  box.innerHTML = '<p style="font-size:14px;color:var(--txt-muted);padding:4px 0">'
    + (v === 'yes' ? '👍 Thanks! Glad this was helpful.' : '👎 Thanks — we\'ll work on improving this.')
    + '</p>';
}
