/* ═══════════════════════════════════════════════════════════
   QAMAR CONSTRUCTION — SHARED JAVASCRIPT
   qamar-site/shared.js
═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Scroll Reveal ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ── Counter Animation ── */
  function animateCounter(el, target, suffix, duration) {
    duration = duration || 1800;
    var start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var ease = 1 - Math.pow(1 - progress, 3);
      el.innerHTML = Math.floor(ease * target) + '<sup>' + suffix + '</sup>';
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var statEls = {
    'stat-years':    { val: 25, sfx: '+' },
    'stat-projects': { val: 100, sfx: '+' },
    'stat-sqft':     { val: 250, sfx: 'k+' },
    'stat-cities':   { val: 70,  sfx: '+' }
  };
  var statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    var statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          Object.keys(statEls).forEach(function (id) {
            var el = document.getElementById(id);
            if (el) animateCounter(el, statEls[id].val, statEls[id].sfx);
          });
          statsObserver.disconnect();
        }
      });
    }, { threshold: 0.4 });
    statsObserver.observe(statsSection);
  }

  /* ── Sticky Nav Shadow ── */
  var navWrapper = document.querySelector('.nav-wrapper');
  if (navWrapper) {
    window.addEventListener('scroll', function () {
      navWrapper.style.boxShadow = window.scrollY > 60
        ? '0 4px 32px rgba(7,21,36,0.12)'
        : '0 2px 20px rgba(7,21,36,0.06)';
    });
  }

  /* ── Mobile Menu ── */
  var hamburger  = document.querySelector('.nav-hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  var mobileClose = document.querySelector('.mobile-close');
  function openMobile()  { if (mobileMenu) { mobileMenu.classList.add('open'); document.body.style.overflow = 'hidden'; } }
  function closeMobile() { if (mobileMenu) { mobileMenu.classList.remove('open'); document.body.style.overflow = ''; if (hamburger) hamburger.classList.remove('open'); } }
  if (hamburger) hamburger.addEventListener('click', function () { hamburger.classList.toggle('open'); if (mobileMenu && mobileMenu.classList.contains('open')) closeMobile(); else openMobile(); });
  if (mobileClose) mobileClose.addEventListener('click', closeMobile);

  /* ── Scroll to Quote Form ── */
  window.scrollToQuote = function () {
    var form = document.getElementById('quote-form');
    if (form) { form.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    else { window.location.href = '/request-a-quote/'; }
  };

  /* ── Service Tab Filter ── */
  window.filterServices = function (cat, btn) {
    document.querySelectorAll('.service-tab').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    document.querySelectorAll('.service-card').forEach(function (card) {
      card.style.display = (cat === 'all' || card.dataset.category === cat) ? 'flex' : 'none';
    });
  };

  /* ── Project Filter ── */
  window.filterProjects = function (cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    document.querySelectorAll('.project-card').forEach(function (card) {
      card.style.opacity   = (cat === 'all' || card.dataset.proj === cat) ? '1' : '0.18';
      card.style.transform = (cat === 'all' || card.dataset.proj === cat) ? '' : 'scale(0.97)';
    });
  };

  /* ── City Search ── */
  window.searchCities = function (val) {
    var q = val.toLowerCase().trim();
    document.querySelectorAll('.area-item').forEach(function (item) {
      item.style.display = (!q || item.textContent.toLowerCase().includes(q)) ? 'flex' : 'none';
    });
  };

  /* ── FAQ Accordion ── */
  window.toggleFaq = function (btn) {
    var answer = btn.nextElementSibling;
    var isOpen = answer.classList.contains('open');
    document.querySelectorAll('.faq-answer').forEach(function (a) { a.classList.remove('open'); });
    document.querySelectorAll('.faq-question').forEach(function (b) { b.classList.remove('open'); });
    if (!isOpen) { answer.classList.add('open'); btn.classList.add('open'); }
  };

  /* ══════════════════════════════════
     MULTI-STEP FORM
  ══════════════════════════════════ */
  var currentStep = 1;
  var selectedType = '';

  window.selectType = function (btn, type) {
    document.querySelectorAll('.project-type-btn').forEach(function (b) { b.classList.remove('selected'); });
    btn.classList.add('selected');
    selectedType = type;
    var next = document.getElementById('step1-next');
    if (next) next.disabled = false;
  };

  window.nextStep = function (step) {
    // Validate step 3 contact info
    if (currentStep === 3 && step === 4) { return submitForm(); }
    document.querySelectorAll('.form-step').forEach(function (s) { s.classList.remove('active'); });
    var target = document.getElementById('step-' + step);
    if (target) target.classList.add('active');
    currentStep = step;
    // Update dots
    [1, 2, 3].forEach(function (i) {
      var dot = document.getElementById('dot-' + i);
      if (!dot) return;
      dot.classList.remove('active', 'done');
      if (i < step) dot.classList.add('done');
      else if (i === step) dot.classList.add('active');
    });
    var label = document.getElementById('step-label');
    if (label) label.textContent = 'Step ' + step + ' of 3';
    // Scroll to top of form card
    var card = document.querySelector('.form-card');
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  window.selectPref = function (btn) {
    document.querySelectorAll('.contact-pref-btn').forEach(function (b) { b.classList.remove('selected'); });
    btn.classList.add('selected');
  };

  window.submitForm = function () {
    // Simple validation
    var phone = document.querySelector('input[name="phone"]');
    var fname = document.querySelector('input[name="first_name"]');
    if (fname && !fname.value.trim()) { fname.focus(); return; }
    if (phone && !phone.value.trim()) { phone.focus(); return; }

    // Hide step 3, show success
    var step3 = document.getElementById('step-3');
    var success = document.getElementById('form-success');
    var bar = document.querySelector('.form-step-bar');
    if (step3)   step3.classList.remove('active');
    if (success) { success.style.display = 'block'; }
    if (bar)     bar.style.display = 'none';
    [1, 2, 3].forEach(function (i) {
      var dot = document.getElementById('dot-' + i);
      if (dot) { dot.classList.remove('active'); dot.classList.add('done'); }
    });
  };


  /* ── Back to Top ── */
  (function() {
    // Inject button if not in HTML
    if (!document.getElementById('back-to-top')) {
      const btn = document.createElement('button');
      btn.id = 'back-to-top';
      btn.setAttribute('aria-label', 'Back to top');
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
      document.body.appendChild(btn);
    }
    const btt = document.getElementById('back-to-top');
    if (btt) {
      window.addEventListener('scroll', function() {
        btt.classList.toggle('visible', window.scrollY > 500);
      }, { passive: true });
      btt.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  })();

});
