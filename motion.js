/**
 * motion.js — Rapid Elevation motion system
 * Phase 7: Parallax removed, burn-in counter added, tilt system removed
 */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── REVEAL: scroll snap-in ── */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in');
        if (entry.target.classList.contains('layer-wipe')) {
          entry.target.classList.add('wipe-in');
        }
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal, .layer-wipe').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* Reveal elements already in viewport on load */
  setTimeout(function () {
    document.querySelectorAll('.layer-wipe').forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('wipe-in');
      }
    });
  }, 200);

  /* ── BURN-IN COUNTER ── */
  /* Animates a numeric element from 0 → value in ~280ms, then pulses a glow */
  function burnIn(el) {
    if (prefersReducedMotion) return;
    var raw = el.textContent.trim();
    var isFloat = raw.indexOf('.') !== -1;
    var numStr = raw.replace(/[^\d.\-]/g, '');
    var num = parseFloat(numStr);
    if (isNaN(num) || num === 0) return;

    /* Preserve prefix (e.g. "$") and suffix (e.g. " mm", "%") */
    var prefix = '';
    var suffix = '';
    var numIdx = raw.search(/[\d\-]/);
    if (numIdx > 0) prefix = raw.slice(0, numIdx);
    var afterNum = raw.slice(numIdx + numStr.length);
    suffix = afterNum;

    var duration = 280;
    var start = null;

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 2);
      var current = eased * num;
      el.textContent = prefix + (isFloat ? current.toFixed(2) : Math.round(current)) + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = raw; /* restore exact original */
        /* Glow pulse: bright → steady dim */
        el.style.textShadow = '0 0 12px rgba(255, 107, 0, 0.9)';
        setTimeout(function () {
          el.style.textShadow = '0 0 6px rgba(255, 107, 0, 0.4)';
          setTimeout(function () {
            el.style.textShadow = '';
          }, 400);
        }, 120);
      }
    }

    requestAnimationFrame(step);
  }

  /* Expose globally so tool scripts can call window.burnIn(el) */
  window.burnIn = burnIn;

  /* Auto-detect changes in .readout-value and .calc-output elements */
  if (!prefersReducedMotion) {
    var burnInObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        var node = m.type === 'characterData' ? m.target.parentElement : m.target;
        if (!node) return;
        /* Walk up max 2 levels to find a readout container */
        var readout = null;
        for (var i = 0; i < 3; i++) {
          if (!node) break;
          if (node.classList &&
              (node.classList.contains('readout-value') ||
               node.classList.contains('calc-output'))) {
            readout = node;
            break;
          }
          node = node.parentElement;
        }
        if (!readout || readout._burnActive) return;
        readout._burnActive = true;
        burnIn(readout);
        setTimeout(function () { readout._burnActive = false; }, 500);
      });
    });

    burnInObserver.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true
    });
  }

  /* ── HOME STATS COUNTER (with burn-in glow) ── */
  function animateCounter(el) {
    var raw = el.textContent.trim();
    var num = parseInt(raw, 10);
    if (isNaN(num) || num === 0) return;
    var suffix = raw.replace(String(num), '');
    var duration = 900;
    var start = null;

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * num) + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        /* Burn-in glow on completion */
        el.style.textShadow = '0 0 14px rgba(255, 107, 0, 0.8)';
        setTimeout(function () {
          el.style.textShadow = '0 0 6px rgba(255, 107, 0, 0.3)';
          setTimeout(function () { el.style.textShadow = ''; }, 500);
        }, 150);
      }
    }

    requestAnimationFrame(step);
  }

  var statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.home-stat-num').forEach(function (n) {
          if (!prefersReducedMotion) animateCounter(n);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  var statsBar = document.querySelector('.home-stats');
  if (statsBar) statsObserver.observe(statsBar);

  /* ── SCROLL PROGRESS BAR ── */
  var progressBar = document.getElementById('scrollProgress');
  function updateScrollProgress() {
    if (!progressBar) return;
    var total = document.documentElement.scrollHeight - window.innerHeight;
    var pct = total > 0 ? window.scrollY / total : 0;
    progressBar.style.setProperty('--scroll-pct', pct);
  }
  if (progressBar) {
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();
  }

  /* ── JOURNEY SECTION OBSERVER ── */
  var journeySections = Array.prototype.slice.call(document.querySelectorAll('[data-journey]'));
  if (journeySections.length) {
    var journeyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          document.body.dataset.journey = entry.target.dataset.journey;
        }
      });
    }, { threshold: 0.35 });

    journeySections.forEach(function (el) {
      journeyObserver.observe(el);
    });
  }

  /* ── DIAGNOSIS SCAN COMPLETE ── */
  var resultsWrap = document.getElementById('resultsWrap');
  if (resultsWrap) {
    var diagObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        if (m.type === 'attributes' && m.attributeName === 'style') {
          if (resultsWrap.style.display !== 'none' &&
              resultsWrap.style.display !== '' &&
              !prefersReducedMotion) {
            resultsWrap.classList.add('scan-complete');
            setTimeout(function () {
              resultsWrap.classList.remove('scan-complete');
            }, 600);
          }
        }
      });
    });
    diagObserver.observe(resultsWrap, { attributes: true });
  }

})();
