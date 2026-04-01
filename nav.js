/**
 * nav.js — dropdown toggle logic for nav bar
 */
(function () {
  'use strict';

  // Inject parallax background element
  var siteBg = document.createElement('div');
  siteBg.id = 'site-bg';
  document.addEventListener('DOMContentLoaded', function () {
    document.body.insertBefore(siteBg, document.body.firstChild);
  });

  // Parallax scroll handler — bg drifts at 20% of scroll speed
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        siteBg.style.transform = 'translateY(' + (-window.scrollY * 0.2) + 'px)';
        ticking = false;
      });
      ticking = true;
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    var triggers = document.querySelectorAll('.nav-dropdown-trigger');

    function closeAll() {
      document.querySelectorAll('.nav-dropdown').forEach(function (d) {
        d.classList.remove('open');
      });
    }

    triggers.forEach(function (trigger) {
      var dd = trigger.closest('.nav-dropdown');
      var href = trigger.dataset.href;

      if (href) {
        // Hover-open trigger: open on mouseenter, navigate on click
        var leaveTimer;

        dd.addEventListener('mouseenter', function () {
          clearTimeout(leaveTimer);
          closeAll();
          dd.classList.add('open');
        });

        dd.addEventListener('mouseleave', function () {
          leaveTimer = setTimeout(function () {
            dd.classList.remove('open');
          }, 120);
        });

        trigger.addEventListener('click', function (e) {
          e.stopPropagation();
          window.location.href = href;
        });

      } else {
        // Hover-open trigger, no navigation on click
        var leaveTimer;
        dd.addEventListener('mouseenter', function () {
          clearTimeout(leaveTimer);
          closeAll();
          dd.classList.add('open');
        });
        dd.addEventListener('mouseleave', function () {
          leaveTimer = setTimeout(function () {
            dd.classList.remove('open');
          }, 120);
        });
      }
    });

    // Close on outside click
    document.addEventListener('click', function () {
      closeAll();
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeAll();
      }
    });
  });
})();
