/**
 * nav.js — dropdown toggle logic for nav bar
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var triggers = document.querySelectorAll('.nav-dropdown-trigger');

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        var dd = trigger.closest('.nav-dropdown');
        var isOpen = dd.classList.contains('open');

        // Close all dropdowns
        document.querySelectorAll('.nav-dropdown').forEach(function (d) {
          d.classList.remove('open');
        });

        // Toggle this one
        if (!isOpen) {
          dd.classList.add('open');
        }
      });
    });

    // Close on outside click
    document.addEventListener('click', function () {
      document.querySelectorAll('.nav-dropdown').forEach(function (d) {
        d.classList.remove('open');
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.nav-dropdown').forEach(function (d) {
          d.classList.remove('open');
        });
      }
    });
  });
})();
