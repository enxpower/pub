(function () {
  'use strict';

  /* ── Language switch (shared preference with /vi/) ── */
  var LANG_KEY = 'hxh-lang';
  var btnZh = document.getElementById('btnZh');
  var btnEn = document.getElementById('btnEn');

  function setLang(lang) {
    document.body.className = lang;
    if (btnZh) btnZh.classList.toggle('active', lang === 'zh');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    if (dialogOpen) renderDialogMeta();
  }

  if (btnZh) btnZh.addEventListener('click', function () { setLang('zh'); });
  if (btnEn) btnEn.addEventListener('click', function () { setLang('en'); });

  var savedLang = null;
  try { savedLang = localStorage.getItem(LANG_KEY); } catch (e) {}
  if (savedLang === 'zh' || savedLang === 'en') setLang(savedLang);

  /* ── Nav scroll state ── */
  var nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* ── Mobile menu ── */
  var hamburger = document.getElementById('hamburger');
  var mobilePanel = document.getElementById('navMobilePanel');

  function closeMenu() {
    if (!hamburger || !mobilePanel) return;
    hamburger.setAttribute('aria-expanded', 'false');
    mobilePanel.classList.remove('open');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (!hamburger || !mobilePanel) return;
    var open = hamburger.getAttribute('aria-expanded') === 'true';
    if (open) {
      closeMenu();
    } else {
      hamburger.setAttribute('aria-expanded', 'true');
      mobilePanel.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  if (hamburger) hamburger.addEventListener('click', toggleMenu);
  if (mobilePanel) {
    mobilePanel.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* ── Scroll reveal ── */
  var rvEls = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    rvEls.forEach(function (el) { io.observe(el); });
  } else {
    rvEls.forEach(function (el) { el.classList.add('on'); });
  }

  /* ── Poster archive dialog ── */
  var POSTER_META = [
    { zh: '和', en: 'Harmony Is Not Sameness' },
    { zh: '众香和，方成香', en: 'The Philosophy of Blended Incense' },
    { zh: '木有其性', en: 'The Nature of Material' },
    { zh: '静待成香', en: 'Time as Craft' },
    { zh: '圆融自成', en: 'The Form of Completion' },
    { zh: '香随身行', en: 'Incense as Companion' },
    { zh: '和万香，养一心', en: 'Many Fragrances, One Heart' },
    { zh: '和，不止于香', en: 'A Philosophy Beyond Incense' }
  ];

  var posterButtons = Array.prototype.slice.call(document.querySelectorAll('.poster-thumb'));
  var dialog = document.getElementById('posterDialog');
  var dialogCanvas = document.getElementById('posterDialogCanvas');
  var dialogIdx = document.getElementById('posterDialogIdx');
  var dialogZh = document.getElementById('posterDialogZh');
  var dialogEn = document.getElementById('posterDialogEn');
  var closeBtn = document.getElementById('posterClose');
  var prevBtn = document.getElementById('posterPrev');
  var nextBtn = document.getElementById('posterNext');

  var currentIndex = 0;
  var lastTrigger = null;
  var dialogOpen = false;

  function renderDialogMeta() {
    var meta = POSTER_META[currentIndex];
    var n = String(currentIndex + 1).padStart(2, '0');
    dialogIdx.textContent = n + ' / 08';
    dialogZh.textContent = meta.zh;
    dialogEn.textContent = meta.en;
  }

  function renderDialogCanvas() {
    var srcSvg = posterButtons[currentIndex].querySelector('.poster-canvas svg');
    dialogCanvas.innerHTML = '';
    if (srcSvg) {
      var clone = srcSvg.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      dialogCanvas.appendChild(clone);
    }
  }

  function openPoster(index, trigger) {
    if (!dialog || typeof dialog.showModal !== 'function') return;
    currentIndex = index;
    lastTrigger = trigger || null;
    renderDialogCanvas();
    renderDialogMeta();
    dialog.showModal();
    dialogOpen = true;
    closeBtn.focus();
  }

  function closePoster() {
    if (!dialog || !dialog.open) return;
    dialog.close();
  }

  if (dialog) {
    dialog.addEventListener('close', function () {
      dialogOpen = false;
      if (lastTrigger) lastTrigger.focus();
    });
    dialog.addEventListener('click', function (e) {
      var box = dialog.querySelector('.poster-dialog-inner');
      if (box && !box.contains(e.target)) closePoster();
    });
  }

  posterButtons.forEach(function (btn, i) {
    btn.addEventListener('click', function () { openPoster(i, btn); });
  });

  if (closeBtn) closeBtn.addEventListener('click', closePoster);
  if (prevBtn) prevBtn.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + POSTER_META.length) % POSTER_META.length;
    renderDialogCanvas();
    renderDialogMeta();
    closeBtn.focus();
  });
  if (nextBtn) nextBtn.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % POSTER_META.length;
    renderDialogCanvas();
    renderDialogMeta();
    closeBtn.focus();
  });
  if (dialog) {
    dialog.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); nextBtn.click(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prevBtn.click(); }
    });
  }
})();
