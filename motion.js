/**
 * motion.js - Living Print Studio motion & depth system
 * Rapid Elevation - shared across all pages
 */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function setCardTilt(card, event, lift) {
    var rect = card.getBoundingClientRect();
    var px = clamp((event.clientX - rect.left) / rect.width, 0, 1);
    var py = clamp((event.clientY - rect.top) / rect.height, 0, 1);
    var tiltY = (px - 0.5) * 14;
    var tiltX = (0.5 - py) * 12;
    card.style.setProperty('--pointer-x', (px * 100).toFixed(2) + '%');
    card.style.setProperty('--pointer-y', (py * 100).toFixed(2) + '%');
    card.style.setProperty('--tilt-x', tiltX.toFixed(2) + 'deg');
    card.style.setProperty('--tilt-y', tiltY.toFixed(2) + 'deg');
    card.style.setProperty('--card-lift', lift || '-8px');
  }

  function resetCardTilt(card) {
    card.style.removeProperty('--pointer-x');
    card.style.removeProperty('--pointer-y');
    card.style.removeProperty('--tilt-x');
    card.style.removeProperty('--tilt-y');
    card.style.removeProperty('--card-lift');
  }

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
      if (progress < 1) requestAnimationFrame(step);
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

  var progressBar = document.getElementById('scrollProgress');
  function updateScrollProgress() {
    if (!progressBar) return;
    var total = document.documentElement.scrollHeight - window.innerHeight;
    var pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    progressBar.style.setProperty('--scroll-pct', pct / 100);
  }
  if (progressBar) {
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();
  }

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

  if (!prefersReducedMotion) {
    var heroGlow = document.querySelector('.home-hero-glow');
    var heroVisual = document.querySelector('.hero-visual');
    var heroScene = document.getElementById('heroPrinterScene');
    if (heroGlow) {
      document.addEventListener('mousemove', function (e) {
        var cx = window.innerWidth / 2;
        var cy = window.innerHeight / 2;
        var dx = (e.clientX - cx) / cx;
        var dy = (e.clientY - cy) / cy;
        heroGlow.style.transform = 'translateX(calc(-50% + ' + (dx * 18) + 'px)) translateY(' + (dy * 10) + 'px)';
      }, { passive: true });
    }

    if (heroVisual && heroScene) {
      heroVisual.addEventListener('mousemove', function (e) {
        var rect = heroVisual.getBoundingClientRect();
        var px = clamp((e.clientX - rect.left) / rect.width, 0, 1);
        var py = clamp((e.clientY - rect.top) / rect.height, 0, 1);
        heroScene.style.setProperty('--scene-tilt-x', ((0.5 - py) * 1.6).toFixed(2) + 'deg');
        heroScene.style.setProperty('--scene-tilt-y', ((px - 0.5) * 2.2).toFixed(2) + 'deg');
      });

      heroVisual.addEventListener('mouseleave', function () {
        heroScene.style.setProperty('--scene-tilt-x', '0deg');
        heroScene.style.setProperty('--scene-tilt-y', '0deg');
      });
    }

    document.querySelectorAll('.tool-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        setCardTilt(card, e, '-6px');
      });
      card.addEventListener('mouseleave', function () {
        resetCardTilt(card);
      });
    });

    document.querySelectorAll('.home-cat-card, .home-featured-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        setCardTilt(card, e, '-10px');
      });
      card.addEventListener('mouseleave', function () {
        resetCardTilt(card);
      });
    });
  }

  var homeMain = document.querySelector('.home-main');
  if (homeMain) {
    var workflowChips = Array.prototype.slice.call(document.querySelectorAll('.workflow-chip[data-workflow-stage]'));
    var homeSections = Array.prototype.slice.call(document.querySelectorAll('.home-main [data-journey]'));
    var ticking = false;

    function updateHomeDepth() {
      ticking = false;
      var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      var mainRect = homeMain.getBoundingClientRect();
      var total = Math.max(homeMain.offsetHeight - viewportHeight, 1);
      var progress = clamp((-mainRect.top) / total, 0, 1);

      homeMain.style.setProperty('--home-scroll', progress.toFixed(3));

      var activeStage = document.body.dataset.journey || 'diagnose';
      var strongestDepth = 0;

      homeSections.forEach(function (section) {
        var rect = section.getBoundingClientRect();
        var center = rect.top + rect.height / 2;
        var distance = Math.abs((viewportHeight / 2) - center);
        var depth = clamp(1 - (distance / (viewportHeight * 0.8)), 0, 1);
        section.style.setProperty('--section-depth', depth.toFixed(3));
        section.style.setProperty('--section-shift', ((0.5 - depth) * 100).toFixed(1) + 'px');

        if (depth > strongestDepth) {
          strongestDepth = depth;
          activeStage = section.dataset.journey;
        }
      });

      workflowChips.forEach(function (chip) {
        chip.classList.toggle('is-active', chip.getAttribute('data-workflow-stage') === activeStage);
      });
    }

    function requestHomeDepthUpdate() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateHomeDepth);
      }
    }

    window.addEventListener('scroll', requestHomeDepthUpdate, { passive: true });
    window.addEventListener('resize', requestHomeDepthUpdate, { passive: true });
    updateHomeDepth();
  }

  var resultsWrap = document.getElementById('resultsWrap');
  if (resultsWrap) {
    var diagObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        if (m.type === 'attributes' && m.attributeName === 'style') {
          if (resultsWrap.style.display !== 'none' && resultsWrap.style.display !== '' && !prefersReducedMotion) {
            resultsWrap.classList.add('scan-complete');
            setTimeout(function () { resultsWrap.classList.remove('scan-complete'); }, 600);
          }
        }
      });
    });
    diagObserver.observe(resultsWrap, { attributes: true });
  }

  setTimeout(function () {
    document.querySelectorAll('.layer-wipe').forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('wipe-in');
      }
    });
  }, 200);
})();
