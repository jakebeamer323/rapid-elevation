/**
 * motion.js — Living Print Studio motion & depth system
 * Rapid Elevation — shared across all pages
 */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── INTERSECTION OBSERVER for .reveal ── */
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
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .layer-wipe').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ── STAT COUNTER ANIMATION ── */
  function animateCounter(el) {
    var raw = el.textContent.trim();
    // Only animate pure integers, leave "100%" and "0" as-is for special handling
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
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  var statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var nums = entry.target.querySelectorAll('.home-stat-num');
        nums.forEach(function (n) {
          if (!prefersReducedMotion) animateCounter(n);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  var statsBar = document.querySelector('.home-stats');
  if (statsBar) statsObserver.observe(statsBar);

  if (!prefersReducedMotion) {

    /* ── HERO PARALLAX (homepage only) ── */
    var heroGlow = document.querySelector('.home-hero-glow');
    if (heroGlow) {
      document.addEventListener('mousemove', function (e) {
        var cx = window.innerWidth / 2;
        var cy = window.innerHeight / 2;
        var dx = (e.clientX - cx) / cx;
        var dy = (e.clientY - cy) / cy;
        heroGlow.style.transform = 'translateX(calc(-50% + ' + (dx * 18) + 'px)) translateY(' + (dy * 10) + 'px)';
      }, { passive: true });
    }

    /* ── TOOL CARD TILT ── */
    document.querySelectorAll('.tool-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = (e.clientX - cx) / (rect.width / 2);
        var dy = (e.clientY - cy) / (rect.height / 2);
        var rotX = -dy * 3;
        var rotY = dx * 3;
        card.style.transform = 'translateY(-2px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg)';
        card.style.perspective = '600px';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
        card.style.perspective = '';
      });
    });

    /* ── HOME CAT CARD TILT ── */
    document.querySelectorAll('.home-cat-card, .home-featured-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = (e.clientX - cx) / (rect.width / 2);
        var dy = (e.clientY - cy) / (rect.height / 2);
        card.style.transform = 'translateY(-2px) rotateX(' + (-dy * 2.5) + 'deg) rotateY(' + (dx * 2.5) + 'deg)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });

  } /* end !prefersReducedMotion */

  /* ── DIAGNOSIS: scan-complete animation on result reveal ── */
  var resultsWrap = document.getElementById('resultsWrap');
  if (resultsWrap) {
    var diagObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        if (m.type === 'attributes' && m.attributeName === 'style') {
          if (resultsWrap.style.display !== 'none' && resultsWrap.style.display !== '') {
            if (!prefersReducedMotion) {
              resultsWrap.classList.add('scan-complete');
              setTimeout(function () { resultsWrap.classList.remove('scan-complete'); }, 600);
            }
          }
        }
      });
    });
    diagObserver.observe(resultsWrap, { attributes: true });
  }

  /* ── LAYER WIPE: trigger for elements already in view ── */
  setTimeout(function () {
    document.querySelectorAll('.layer-wipe').forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('wipe-in');
      }
    });
  }, 200);

})();
