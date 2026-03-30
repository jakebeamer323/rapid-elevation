/**
 * custom-select.js
 * Replaces every .field select with the styled ss-* dropdown widget.
 * The native <select> stays in the DOM (hidden) so existing JS reading
 * .value and listening to 'change' events continues to work unchanged.
 */
(function () {
  'use strict';

  function styleSelect(sel) {
    if (sel.dataset.csStyled) return;
    sel.dataset.csStyled = '1';

    // Hide native select — keep in DOM for value/event access
    sel.style.cssText = 'position:absolute;opacity:0;pointer-events:none;width:1px;height:1px;';

    // Wrap
    const wrap = document.createElement('div');
    wrap.className = 'ss-wrap';
    sel.parentNode.insertBefore(wrap, sel);
    wrap.appendChild(sel);

    // Display button
    const display = document.createElement('div');
    display.className = 'ss-display';
    display.tabIndex = 0;
    display.setAttribute('role', 'combobox');
    display.setAttribute('aria-haspopup', 'listbox');
    display.setAttribute('aria-expanded', 'false');
    wrap.insertBefore(display, sel);

    const valueSpan = document.createElement('span');
    display.appendChild(valueSpan);

    const arrow = document.createElement('span');
    arrow.className = 'ss-arrow';
    arrow.textContent = '▾';
    display.appendChild(arrow);

    // Dropdown list
    const dropdown = document.createElement('div');
    dropdown.className = 'ss-dropdown';
    dropdown.setAttribute('role', 'listbox');
    wrap.appendChild(dropdown);

    let isOpen = false;

    function updateDisplay() {
      const opt = sel.options[sel.selectedIndex];
      valueSpan.className = opt ? 'ss-selected-value' : 'ss-placeholder';
      valueSpan.textContent = opt ? opt.text : '— Select —';
      dropdown.querySelectorAll('.ss-option').forEach(o => {
        o.classList.toggle('ss-option-active', o.dataset.value === sel.value);
      });
    }

    function buildDropdown() {
      dropdown.innerHTML = '';
      [...sel.options].forEach(opt => {
        const item = document.createElement('div');
        item.className = 'ss-option';
        if (opt.value === sel.value) item.classList.add('ss-option-active');
        item.textContent = opt.text;
        item.dataset.value = opt.value;
        item.addEventListener('mousedown', e => {
          e.preventDefault();
          sel.value = opt.value;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
          updateDisplay();
          close();
        });
        dropdown.appendChild(item);
      });
    }

    function open() {
      if (isOpen) return;
      isOpen = true;
      buildDropdown();
      dropdown.classList.add('open');
      display.classList.add('open');
      display.setAttribute('aria-expanded', 'true');
      // Scroll active option into view
      const active = dropdown.querySelector('.ss-option-active');
      if (active) active.scrollIntoView({ block: 'nearest' });
    }

    function close() {
      if (!isOpen) return;
      isOpen = false;
      dropdown.classList.remove('open');
      display.classList.remove('open');
      display.setAttribute('aria-expanded', 'false');
    }

    display.addEventListener('click', () => isOpen ? close() : open());

    display.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); isOpen ? close() : open(); }
      if (e.key === 'Escape') { close(); display.focus(); }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const dir = e.key === 'ArrowDown' ? 1 : -1;
        const next = Math.min(Math.max(sel.selectedIndex + dir, 0), sel.options.length - 1);
        if (next !== sel.selectedIndex) {
          sel.selectedIndex = next;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
          updateDisplay();
        }
      }
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!wrap.contains(e.target)) close();
    }, true);

    // If external JS changes sel.value directly, sync the display
    sel.addEventListener('change', updateDisplay);

    updateDisplay();
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.field select').forEach(styleSelect);
  });
})();
