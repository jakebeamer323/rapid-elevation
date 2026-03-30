// ── PRINTER LIST ───────────────────────────────────────────────────────────
const PRINTERS = [
  { group: 'Bambu Lab',      name: 'Bambu Lab A1' },
  { group: 'Bambu Lab',      name: 'Bambu Lab A1 Mini' },
  { group: 'Bambu Lab',      name: 'Bambu Lab P1P' },
  { group: 'Bambu Lab',      name: 'Bambu Lab P1S' },
  { group: 'Bambu Lab',      name: 'Bambu Lab X1C' },
  { group: 'Bambu Lab',      name: 'Bambu Lab X1E' },
  { group: 'Creality',       name: 'Creality Ender 3' },
  { group: 'Creality',       name: 'Creality Ender 3 Pro' },
  { group: 'Creality',       name: 'Creality Ender 3 V2' },
  { group: 'Creality',       name: 'Creality Ender 3 V2 Neo' },
  { group: 'Creality',       name: 'Creality Ender 3 V3' },
  { group: 'Creality',       name: 'Creality Ender 3 V3 KE' },
  { group: 'Creality',       name: 'Creality Ender 3 V3 SE' },
  { group: 'Creality',       name: 'Creality Ender 3 S1' },
  { group: 'Creality',       name: 'Creality Ender 3 S1 Pro' },
  { group: 'Creality',       name: 'Creality Ender 3 S1 Plus' },
  { group: 'Creality',       name: 'Creality Ender 5' },
  { group: 'Creality',       name: 'Creality Ender 5 Pro' },
  { group: 'Creality',       name: 'Creality Ender 5 Plus' },
  { group: 'Creality',       name: 'Creality Ender 5 S1' },
  { group: 'Creality',       name: 'Creality Ender 6' },
  { group: 'Creality',       name: 'Creality Ender 7' },
  { group: 'Creality',       name: 'Creality CR-6 SE' },
  { group: 'Creality',       name: 'Creality CR-6 Max' },
  { group: 'Creality',       name: 'Creality CR-10' },
  { group: 'Creality',       name: 'Creality CR-10 V3' },
  { group: 'Creality',       name: 'Creality CR-10 S5' },
  { group: 'Creality',       name: 'Creality CR-10 Smart' },
  { group: 'Creality',       name: 'Creality CR-10 Smart Pro' },
  { group: 'Creality',       name: 'Creality CR-10 Max' },
  { group: 'Creality',       name: 'Creality K1' },
  { group: 'Creality',       name: 'Creality K1C' },
  { group: 'Creality',       name: 'Creality K1 Max' },
  { group: 'Creality',       name: 'Creality K1 SE' },
  { group: 'Prusa Research', name: 'Prusa i3 MK3S+' },
  { group: 'Prusa Research', name: 'Prusa i3 MK4' },
  { group: 'Prusa Research', name: 'Prusa i3 MK4S' },
  { group: 'Prusa Research', name: 'Prusa Mini' },
  { group: 'Prusa Research', name: 'Prusa Mini+' },
  { group: 'Prusa Research', name: 'Prusa XL' },
  { group: 'Prusa Research', name: 'Prusa Core One' },
  { group: 'AnkerMake',      name: 'AnkerMake M5' },
  { group: 'AnkerMake',      name: 'AnkerMake M5C' },
  { group: 'AnkerMake',      name: 'AnkerMake M7' },
  { group: 'Elegoo',         name: 'Elegoo Neptune 2' },
  { group: 'Elegoo',         name: 'Elegoo Neptune 2S' },
  { group: 'Elegoo',         name: 'Elegoo Neptune 3' },
  { group: 'Elegoo',         name: 'Elegoo Neptune 3 Pro' },
  { group: 'Elegoo',         name: 'Elegoo Neptune 3 Plus' },
  { group: 'Elegoo',         name: 'Elegoo Neptune 3 Max' },
  { group: 'Elegoo',         name: 'Elegoo Neptune 4' },
  { group: 'Elegoo',         name: 'Elegoo Neptune 4 Pro' },
  { group: 'Elegoo',         name: 'Elegoo Neptune 4 Plus' },
  { group: 'Elegoo',         name: 'Elegoo Neptune 4 Max' },
  { group: 'Elegoo',         name: 'Elegoo Neptune 4 X' },
  { group: 'Voron',          name: 'Voron 0.2' },
  { group: 'Voron',          name: 'Voron Trident' },
  { group: 'Voron',          name: 'Voron 2.4' },
  { group: 'Voron',          name: 'Voron Switchwire' },
  { group: 'Artillery',      name: 'Artillery Sidewinder X1' },
  { group: 'Artillery',      name: 'Artillery Sidewinder X2' },
  { group: 'Artillery',      name: 'Artillery Genius' },
  { group: 'Artillery',      name: 'Artillery Genius Pro' },
  { group: 'Artillery',      name: 'Artillery Hornet' },
  { group: 'Sovol',          name: 'Sovol SV06' },
  { group: 'Sovol',          name: 'Sovol SV06 Plus' },
  { group: 'Sovol',          name: 'Sovol SV07' },
  { group: 'Sovol',          name: 'Sovol SV07 Plus' },
  { group: 'Sovol',          name: 'Sovol SV08' },
  { group: 'FlashForge',     name: 'FlashForge Adventurer 3' },
  { group: 'FlashForge',     name: 'FlashForge Adventurer 4' },
  { group: 'FlashForge',     name: 'FlashForge Adventurer 5M' },
  { group: 'FlashForge',     name: 'FlashForge Adventurer 5M Pro' },
  { group: 'FlashForge',     name: 'FlashForge Creator Pro 2' },
  { group: 'FlashForge',     name: 'FlashForge Guider 3' },
  { group: 'Qidi Tech',      name: 'Qidi X-Plus 3' },
  { group: 'Qidi Tech',      name: 'Qidi X-Max 3' },
  { group: 'Qidi Tech',      name: 'Qidi X-Smart 3' },
  { group: 'Qidi Tech',      name: 'Qidi Q1 Pro' },
  { group: 'UltiMaker',      name: 'UltiMaker S3' },
  { group: 'UltiMaker',      name: 'UltiMaker S5' },
  { group: 'UltiMaker',      name: 'UltiMaker S7' },
  { group: 'UltiMaker',      name: 'UltiMaker 2+ Connect' },
  { group: 'Raise3D',        name: 'Raise3D E2' },
  { group: 'Raise3D',        name: 'Raise3D Pro3' },
  { group: 'Raise3D',        name: 'Raise3D Pro3 Plus' },
  { group: 'Snapmaker',      name: 'Snapmaker 2.0 A150' },
  { group: 'Snapmaker',      name: 'Snapmaker 2.0 A250' },
  { group: 'Snapmaker',      name: 'Snapmaker 2.0 A350' },
  { group: 'Snapmaker',      name: 'Snapmaker Artisan' },
  { group: 'Snapmaker',      name: 'Snapmaker J1' },
  { group: 'Voxelab',        name: 'Voxelab Aquila' },
  { group: 'Voxelab',        name: 'Voxelab Aquila S2' },
  { group: 'Voxelab',        name: 'Voxelab Aquila X2' },
  { group: 'Two Trees',      name: 'Two Trees Bluer' },
  { group: 'Two Trees',      name: 'Two Trees Sapphire Pro' },
  { group: 'Two Trees',      name: 'Two Trees SK1' },
  { group: 'Kingroon',       name: 'Kingroon KP3S' },
  { group: 'Kingroon',       name: 'Kingroon KP3S Pro' },
  { group: 'Kingroon',       name: 'Kingroon KP5L' },
  { group: 'Biqu',           name: 'Biqu B1' },
  { group: 'Biqu',           name: 'Biqu Hurakan' },
  { group: 'LulzBot',        name: 'LulzBot TAZ Pro' },
  { group: 'LulzBot',        name: 'LulzBot Mini 2' },
  { group: 'Dremel',         name: 'Dremel 3D40 Flex' },
  { group: 'Dremel',         name: 'Dremel 3D45' },
  { group: 'Monoprice',      name: 'Monoprice MP Mini Delta' },
  { group: 'Monoprice',      name: 'Monoprice Maker Select Plus' },
  { group: 'Monoprice',      name: 'Monoprice MP Voxel' },
  { group: 'Longer',         name: 'Longer LK4 Pro' },
  { group: 'Longer',         name: 'Longer LK5 Pro' },
  { group: 'Geeetech',       name: 'Geeetech A10' },
  { group: 'Geeetech',       name: 'Geeetech A20' },
  { group: 'Other',          name: 'Custom / DIY Build' },
  { group: 'Other',          name: 'Not Listed' },
];

// ── SEARCHABLE PRINTER DROPDOWN ────────────────────────────────────────────
function initPrinterSelect() {
  const display  = document.getElementById('printerDisplay');
  const dropdown = document.getElementById('printerDropdown');
  const search   = document.getElementById('printerSearch');
  const list     = document.getElementById('printerList');
  const valueEl  = document.getElementById('printerValue');
  const hidden   = document.getElementById('printer');

  function renderList(filter) {
    const q = (filter || '').toLowerCase().trim();
    let html = '';
    let lastGroup = '';
    let count = 0;
    for (const p of PRINTERS) {
      if (q && !p.name.toLowerCase().includes(q) && !p.group.toLowerCase().includes(q)) continue;
      if (p.group !== lastGroup) {
        html += `<div class="ss-group-label">${p.group}</div>`;
        lastGroup = p.group;
      }
      html += `<div class="ss-option" data-value="${p.name}">${p.name}</div>`;
      count++;
    }
    list.innerHTML = count ? html : '<div class="ss-no-results">No printers found</div>';
    list.querySelectorAll('.ss-option').forEach(opt => {
      opt.addEventListener('mousedown', e => { e.preventDefault(); selectPrinter(opt.dataset.value); });
    });
  }

  function selectPrinter(name) {
    hidden.value = name;
    valueEl.className = 'ss-selected-value';
    valueEl.textContent = name;
    close();
  }

  function open() {
    dropdown.classList.add('open');
    display.classList.add('open');
    search.value = '';
    renderList('');
    setTimeout(() => search.focus(), 10);
  }

  function close() {
    dropdown.classList.remove('open');
    display.classList.remove('open');
  }

  display.addEventListener('click', () => dropdown.classList.contains('open') ? close() : open());
  display.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  search.addEventListener('input', () => renderList(search.value));
  search.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  document.addEventListener('click', e => { if (!e.target.closest('#printerSelect')) close(); });

  renderList('');
}

document.addEventListener('DOMContentLoaded', initPrinterSelect);

// ── MATERIAL RANGES ────────────────────────────────────────────────────────
const MATERIAL_RANGES = {
  PLA:  { nozzle: [190, 220], bed: [50,  65]  },
  PETG: { nozzle: [230, 250], bed: [70,  90]  },
  ABS:  { nozzle: [230, 255], bed: [95,  115] },
  ASA:  { nozzle: [240, 265], bed: [90,  115] },
  TPU:  { nozzle: [220, 240], bed: [30,  60]  },
};

// ── SETTINGS HELPER ────────────────────────────────────────────────────────
function parseNum(id) {
  const val = document.getElementById(id).value.trim();
  if (val === '') return null;
  const n = parseFloat(val);
  return isNaN(n) ? null : n;
}

function getSettings() {
  return {
    printer:         document.getElementById('printer').value || null,
    extruderType:    document.getElementById('extruderType').value || null,
    material:        document.getElementById('material').value || null,
    nozzleTemp:      parseNum('nozzleTemp'),
    bedTemp:         parseNum('bedTemp'),
    printSpeed:      parseNum('printSpeed'),
    layerHeight:     parseNum('layerHeight'),
    firstLayerSpeed: parseNum('firstLayerSpeed'),
    coolingFan:      parseNum('coolingFan'),
    retractionDist:  parseNum('retractionDist'),
    retractionSpeed: parseNum('retractionSpeed'),
    infill:          parseNum('infill'),
  };
}

// ── ISSUE DEFINITIONS ──────────────────────────────────────────────────────
// Each cause:
//   severity  — static dot color: how serious/impactful this cause is
//               'red'=critical, 'orange'=major, 'yellow'=minor, 'green'=edge case
//   rank(s)   — dynamic likelihood from settings: 4=most likely … 1=less likely, null=hide

const ISSUES = {

  // ── BED ADHESION ──────────────────────────────────────────────────────────
  bed_adhesion: {
    label: 'Bed Adhesion Problems',
    causes: [
      {
        title: 'Z offset too high — nozzle too far from bed',
        description: 'If the nozzle is too far from the bed surface, the filament won\'t squish in and bond. This is the single most common cause of adhesion failure.',
        fix: 'Re-level your bed and lower your Z offset in small increments until the first layer has a slight squish with no visible gaps between lines.',
        severity: 'red',
        rank: (s) => 3,
      },
      {
        title: 'Bed temperature too low',
        description: 'A cold bed prevents the filament from bonding to the print surface, especially on the first layer.',
        fix: 'Increase bed temperature: PLA 50–65°C, PETG 70–90°C, ABS/ASA 95–115°C, TPU 30–60°C. Make sure it fully reaches temp before printing.',
        severity: 'red',
        rank(s) {
          if (!s.material || s.bedTemp === null) return 2;
          const [min] = MATERIAL_RANGES[s.material].bed;
          let r;
          if (s.bedTemp < min - 10) r = 4;
          else if (s.bedTemp < min) r = 3;
          else return null;
          // Cross: fast first layer on a cold bed prevents any bond from forming
          if (r < 4 && s.firstLayerSpeed !== null && s.firstLayerSpeed > 30) r = Math.min(4, r + 1);
          // Cross: cooling fan on a cold bed rapidly kills adhesion
          if (r < 4 && s.coolingFan !== null && s.coolingFan > 20) r = Math.min(4, r + 1);
          return r;
        }
      },
      {
        title: 'Nozzle temperature too low',
        description: 'Filament that isn\'t fully melted won\'t flow or adhere correctly on the first layer.',
        fix: 'Increase nozzle temperature to the recommended range for your material. Try going up 5°C at a time.',
        severity: 'orange',
        rank(s) {
          if (!s.material || s.nozzleTemp === null) return null;
          const [min] = MATERIAL_RANGES[s.material].nozzle;
          if (s.nozzleTemp < min - 10) return 4;
          if (s.nozzleTemp < min) return 3;
          return null;
        }
      },
      {
        title: 'First layer speed too high',
        description: 'Printing too fast on the first layer doesn\'t allow the filament enough time to bond to the bed.',
        fix: 'Reduce first layer speed to 15–25 mm/s in your slicer. Most slicers have a dedicated first layer speed setting.',
        severity: 'orange',
        rank(s) {
          if (s.firstLayerSpeed === null) return 2;
          let r;
          if (s.firstLayerSpeed > 50) r = 4;
          else if (s.firstLayerSpeed > 30) r = 3;
          else if (s.firstLayerSpeed > 20) r = 2;
          else return null;
          // Cross: a cold bed makes high first-layer speed even more destructive to adhesion
          if (r < 4 && s.material && s.bedTemp !== null) {
            const [min] = MATERIAL_RANGES[s.material].bed;
            if (s.bedTemp < min) r = Math.min(4, r + 1);
          }
          return r;
        }
      },
      {
        title: 'Cooling fan on during first layers',
        description: 'Active cooling on the first layer rapidly cools filament before it can bond to the bed surface.',
        fix: 'Disable the part cooling fan for the first 2–3 layers in your slicer settings.',
        severity: 'yellow',
        rank(s) {
          if (s.coolingFan === null) return null;
          if (s.material && ['ABS', 'ASA'].includes(s.material) && s.coolingFan > 0) return 3;
          if (s.coolingFan > 30) return 2;
          return null;
        }
      },
      {
        title: 'Dirty or contaminated bed surface',
        description: 'Oils from your hands, dust, or leftover residue from previous prints prevent proper adhesion.',
        fix: 'Clean the bed with isopropyl alcohol (90%+) before every print. Never touch the print surface with bare hands.',
        severity: 'orange',
        rank: (s) => 2,
      },
    ]
  },

  // ── CURLING / WARPING ─────────────────────────────────────────────────────
  curling_edges: {
    label: 'Curling / Warping Edges',
    causes: [
      {
        title: 'No enclosure — ABS or ASA specific',
        description: 'ABS and ASA require a stable, warm ambient temperature. Open-air printing causes uneven, rapid cooling which almost always causes severe warping.',
        fix: 'Use an enclosure to trap heat. Even a simple cardboard box helps. Keep ambient temp above 40°C for best results with ABS/ASA.',
        severity: 'red',
        rank(s) {
          if (s.material && ['ABS', 'ASA'].includes(s.material)) return 4;
          return null;
        }
      },
      {
        title: 'Bed temperature too low',
        description: 'Insufficient bed heat causes rapid cooling at the base of the print, pulling the edges upward.',
        fix: 'Increase bed temperature to the recommended range and ensure it fully reaches temp before starting.',
        severity: 'red',
        rank(s) {
          if (!s.material || s.bedTemp === null) return 3;
          const [min] = MATERIAL_RANGES[s.material].bed;
          let r;
          if (s.bedTemp < min - 10) r = 4;
          else if (s.bedTemp < min) r = 3;
          else return null;
          // Cross: ABS/ASA with any cooling on top of a cold bed is a near-guaranteed warp
          if (r < 4 && ['ABS', 'ASA'].includes(s.material) && s.coolingFan !== null && s.coolingFan > 10) r = Math.min(4, r + 1);
          return r;
        }
      },
      {
        title: 'Cooling fan too aggressive',
        description: 'High cooling causes rapid thermal contraction, pulling corners away from the bed.',
        fix: 'Reduce cooling: ABS/ASA 0–10%, PETG 20–50%, PLA 80–100% is generally fine.',
        severity: 'red',
        rank(s) {
          if (s.coolingFan === null) return null;
          if (s.material && ['ABS', 'ASA'].includes(s.material) && s.coolingFan > 20) return 4;
          if (s.material && ['ABS', 'ASA'].includes(s.material) && s.coolingFan > 0) return 3;
          if (s.material === 'PETG' && s.coolingFan > 60) return 2;
          return null;
        }
      },
      {
        title: 'Drafts or airflow hitting the print',
        description: 'Cold air from vents, windows, or nearby fans creates uneven cooling and warping.',
        fix: 'Move the printer away from drafts or shield it with an enclosure.',
        severity: 'orange',
        rank: (s) => 2,
      },
      {
        title: 'First layer speed too high',
        description: 'A weak first layer bond gives thermal stress an easier time lifting the corners.',
        fix: 'Reduce first layer speed to 15–25 mm/s.',
        severity: 'yellow',
        rank(s) {
          if (s.firstLayerSpeed === null) return null;
          let r;
          if (s.firstLayerSpeed > 40) r = 2;
          else if (s.firstLayerSpeed > 25) r = 1;
          else return null;
          // Cross: a cold bed means the fast-printed first layer has nothing keeping it stuck
          if (r < 4 && s.material && s.bedTemp !== null) {
            const [min] = MATERIAL_RANGES[s.material].bed;
            if (s.bedTemp < min) r = Math.min(4, r + 1);
          }
          return r;
        }
      },
      {
        title: 'Nozzle temperature too low',
        description: 'Under-temperature filament produces weaker layer bonding, making the print more susceptible to warping stress.',
        fix: 'Increase nozzle temperature to the correct range for your material.',
        severity: 'yellow',
        rank(s) {
          if (!s.material || s.nozzleTemp === null) return null;
          const [min] = MATERIAL_RANGES[s.material].nozzle;
          if (s.nozzleTemp < min - 5) return 2;
          if (s.nozzleTemp < min) return 1;
          return null;
        }
      },
    ]
  },

  // ── ROUGH / WARPED TOP ────────────────────────────────────────────────────
  warped_top: {
    label: 'Rough / Warped Top Layer',
    causes: [
      {
        title: 'Infill percentage too low',
        description: 'The top surface needs adequate infill below it. Too little infill leaves large gaps that the top layers sag into.',
        fix: 'Increase infill to 15–20% minimum. For large flat surfaces go to 25%. Gyroid and honeycomb patterns provide better top support.',
        severity: 'red',
        rank(s) {
          if (s.infill === null) return 3;
          let r;
          if (s.infill < 10) r = 4;
          else if (s.infill < 15) r = 3;
          else if (s.infill < 20) r = 2;
          else return null;
          // Cross: thick layers need more infill below them to bridge gaps — the combination is worse than either alone
          if (r < 4 && s.layerHeight !== null && s.layerHeight > 0.25) r = Math.min(4, r + 1);
          return r;
        }
      },
      {
        title: 'Not enough top solid layers',
        description: 'Too few top layers means the surface doesn\'t have enough material to bridge infill gaps smoothly.',
        fix: 'Increase top layers to 4–6, or set top thickness to 0.6–1.0mm in your slicer.',
        severity: 'orange',
        rank: (s) => 2,
      },
      {
        title: 'Print speed too fast for top layer',
        description: 'High speeds on top solid layers don\'t allow filament to lay flat and fill properly.',
        fix: 'Set top/solid layer speed to 30–50% of your normal print speed in slicer settings.',
        severity: 'orange',
        rank(s) {
          if (s.printSpeed === null) return null;
          let r;
          if (s.printSpeed > 100) r = 3;
          else if (s.printSpeed > 80) r = 2;
          else return null;
          // Cross: a cool nozzle at high speed under-extrudes on top layers, amplifying roughness
          if (r < 4 && s.material && s.nozzleTemp !== null) {
            const [min] = MATERIAL_RANGES[s.material].nozzle;
            if (s.nozzleTemp < min + 5) r = Math.min(4, r + 1);
          }
          return r;
        }
      },
      {
        title: 'Layer height too thick',
        description: 'Thick layers are harder to bridge cleanly over infill gaps, producing a rougher finish.',
        fix: 'Reduce layer height to 0.15–0.2mm for a smoother top surface on visible parts.',
        severity: 'yellow',
        rank(s) {
          if (s.layerHeight === null) return null;
          if (s.layerHeight > 0.3) return 3;
          if (s.layerHeight > 0.25) return 2;
          return null;
        }
      },
      {
        title: 'Nozzle temperature too high (overextrusion)',
        description: 'An overly hot nozzle produces very runny filament that overextrudes, leaving a blobby top surface.',
        fix: 'Lower nozzle temperature by 5–10°C and verify your flow rate / extrusion multiplier.',
        severity: 'yellow',
        rank(s) {
          if (!s.material || s.nozzleTemp === null) return null;
          const [, max] = MATERIAL_RANGES[s.material].nozzle;
          if (s.nozzleTemp > max + 10) return 3;
          if (s.nozzleTemp > max) return 2;
          return null;
        }
      },
      {
        title: 'Insufficient cooling on top layer (PLA)',
        description: 'Without enough cooling, the top layer stays soft and gets dragged by the nozzle.',
        fix: 'Ensure part cooling fan is at 100% for top layers with PLA.',
        severity: 'yellow',
        rank(s) {
          if (s.coolingFan === null || s.material !== 'PLA') return null;
          if (s.coolingFan < 50) return 3;
          if (s.coolingFan < 80) return 2;
          return null;
        }
      },
    ]
  },

  // ── SPAGHETTI ─────────────────────────────────────────────────────────────
  spaghetti: {
    label: 'Spaghetti (Collapsed Print)',
    causes: [
      {
        title: 'Print detached from the bed',
        description: 'The most common root cause — the print lifted mid-print and the nozzle kept extruding into air.',
        fix: 'Improve bed adhesion: clean with IPA, check Z offset, raise bed temp, slow down first layer. Enable a spaghetti detection camera if available.',
        severity: 'red',
        rank: (s) => 4,
      },
      {
        title: 'Nozzle snagging on the print (overhang curl)',
        description: 'Overhangs that curl upward catch the nozzle on subsequent passes, eventually knocking the print loose.',
        fix: 'Increase cooling fan speed for better overhang performance. Add supports or reduce overhang angle.',
        severity: 'red',
        rank(s) {
          if (s.coolingFan === null) return 2;
          if (s.material === 'PLA' && s.coolingFan < 50) return 3;
          return 2;
        }
      },
      {
        title: 'Print speed too high',
        description: 'High speeds increase nozzle forces and vibration, which can dislodge a print or cause a layer shift leading to spaghetti.',
        fix: 'Reduce print speed to 40–60 mm/s. Tune acceleration and jerk settings if using high-speed printing.',
        severity: 'orange',
        rank(s) {
          if (s.printSpeed === null) return null;
          if (s.printSpeed > 120) return 3;
          if (s.printSpeed > 80) return 2;
          return null;
        }
      },
      {
        title: 'Nozzle temperature too high (stringing/drooping)',
        description: 'A very hot nozzle produces runny filament that strings and droops, which can catch on the print and knock it over.',
        fix: 'Lower nozzle temperature by 5–10°C and increase retraction slightly.',
        severity: 'orange',
        rank(s) {
          if (!s.material || s.nozzleTemp === null) return null;
          const [, max] = MATERIAL_RANGES[s.material].nozzle;
          if (s.nozzleTemp > max + 10) return 3;
          if (s.nozzleTemp > max + 5) return 2;
          return null;
        }
      },
      {
        title: 'First layer speed too high',
        description: 'A poorly bonded first layer is easily knocked off during taller or top-heavy prints.',
        fix: 'Reduce first layer speed to 15–25 mm/s.',
        severity: 'orange',
        rank(s) {
          if (s.firstLayerSpeed === null) return null;
          if (s.firstLayerSpeed > 40) return 2;
          if (s.firstLayerSpeed > 25) return 1;
          return null;
        }
      },
    ]
  },

  // ── CLOGGED NOZZLE ────────────────────────────────────────────────────────
  clogged_nozzle: {
    label: 'Clogged Nozzle',
    causes: [
      {
        title: 'Nozzle temperature too low for material',
        description: 'Printing too cold causes semi-melted filament to solidify inside the nozzle bore, forming a clog.',
        fix: 'Increase nozzle temperature to the correct range for your material. For an existing clog, try a cold pull: heat to print temp, push filament, cool to ~90°C, pull firmly.',
        severity: 'red',
        rank(s) {
          if (!s.material || s.nozzleTemp === null) return 3;
          const [min] = MATERIAL_RANGES[s.material].nozzle;
          if (s.nozzleTemp < min - 10) return 4;
          if (s.nozzleTemp < min) return 3;
          return null;
        }
      },
      {
        title: 'Retraction distance too high',
        description: 'Excessive retraction pulls molten filament up into the cold zone of the hotend where it solidifies and causes a jam.',
        fix: 'Direct drive: keep retraction under 2mm. Bowden: 4–6mm maximum. Start low and increase only if needed.',
        severity: 'red',
        rank(s) {
          if (s.retractionDist === null) return 2;
          let r;
          if (s.extruderType === 'direct') {
            // Direct drive: the extruder is right above the melt zone — even 3mm can cause clogs
            if (s.retractionDist > 5) r = 4;
            else if (s.retractionDist > 3) r = 3;
            else if (s.retractionDist > 2) r = 2;
            else return null;
          } else if (s.extruderType === 'bowden') {
            // Bowden: more retraction is needed, but there are still limits
            if (s.retractionDist > 8) r = 4;
            else if (s.retractionDist > 6) r = 3;
            else return null;
          } else {
            if (s.retractionDist > 8) r = 4;
            else if (s.retractionDist > 5) r = 3;
            else if (s.retractionDist > 3) r = 2;
            else return null;
          }
          // Cross: cold nozzle + aggressive retraction = filament solidifies in cold zone almost immediately
          if (r < 4 && s.material && s.nozzleTemp !== null) {
            const [min] = MATERIAL_RANGES[s.material].nozzle;
            if (s.nozzleTemp < min + 5) r = Math.min(4, r + 1);
          }
          return r;
        }
      },
      {
        title: 'Heat creep',
        description: 'Heat travels up the heatbreak into the cold zone, softening filament where it shouldn\'t be and causing a jam.',
        fix: 'Ensure the hotend cooling fan runs at 100% at all times (not just during printing). Clean heatsink fins of dust.',
        severity: 'orange',
        rank: (s) => 2,
      },
      {
        title: 'Wet or contaminated filament',
        description: 'Moisture in filament creates steam bubbles during printing, which can contribute to partial clogs over time.',
        fix: 'Dry filament before use: PLA at 45°C (4–6 hrs), PETG/ABS/ASA at 65°C (4–6 hrs). Use a dedicated filament dryer.',
        severity: 'orange',
        rank: (s) => 2,
      },
      {
        title: 'Retraction speed too high',
        description: 'Very fast retractions can cause filament to strip or bind inside the hotend.',
        fix: 'Reduce retraction speed to 25–45 mm/s and test incrementally.',
        severity: 'yellow',
        rank(s) {
          if (s.retractionSpeed === null) return null;
          if (s.retractionSpeed > 70) return 3;
          if (s.retractionSpeed > 50) return 2;
          return null;
        }
      },
      {
        title: 'Print speed too high for nozzle temperature',
        description: 'Printing faster than your hotend can melt filament leaves semi-molten material that can clog.',
        fix: 'Reduce print speed or raise nozzle temp by 5°C at a time. Your hotend has a maximum volumetric flow rate.',
        severity: 'orange',
        rank(s) {
          if (s.printSpeed === null || s.nozzleTemp === null || !s.material) return null;
          const [min] = MATERIAL_RANGES[s.material].nozzle;
          if (s.printSpeed > 80 && s.nozzleTemp < min + 10) return 3;
          if (s.printSpeed > 60 && s.nozzleTemp < min + 5) return 2;
          return null;
        }
      },
    ]
  },

  // ── LAYER SHIFT ───────────────────────────────────────────────────────────
  layer_shift: {
    label: 'Layer Shift',
    causes: [
      {
        title: 'Print speed or acceleration too high',
        description: 'Demanding too much speed from the stepper motors causes them to skip steps, shifting all subsequent layers.',
        fix: 'Reduce print speed to 40–60 mm/s and lower acceleration in slicer/firmware settings. Tune with a speed tower test.',
        severity: 'red',
        rank(s) {
          if (s.printSpeed === null) return 2;
          let r;
          if (s.printSpeed > 120) r = 4;
          else if (s.printSpeed > 80) r = 3;
          else if (s.printSpeed > 60) r = 2;
          else return null;
          // Cross: direct drive toolheads are significantly heavier — the extra inertia causes skipped steps at lower speeds
          if (r < 4 && s.extruderType === 'direct') r = Math.min(4, r + 1);
          return r;
        }
      },
      {
        title: 'Loose or slipping GT2 belt',
        description: 'A loose belt allows the print head or gantry to slip under rapid direction changes, causing a shift.',
        fix: 'Check and tighten the X and Y axis belts. They should feel firm like a guitar string, not floppy.',
        severity: 'red',
        rank: (s) => 3,
      },
      {
        title: 'Mechanical obstruction',
        description: 'A cable, Bowden tube, or foreign object caught during a fast move can force a missed step.',
        fix: 'Inspect the printer\'s full range of motion. Ensure cables are routed cleanly and nothing can snag during movement.',
        severity: 'red',
        rank: (s) => 2,
      },
      {
        title: 'Stepper motor current too low',
        description: 'Insufficient motor current means the steppers can\'t push through resistance and skip steps under load.',
        fix: 'Increase stepper driver current (Vref) slightly in firmware or via the driver potentiometer. Refer to your printer\'s docs.',
        severity: 'orange',
        rank: (s) => 2,
      },
      {
        title: 'Nozzle snagging on the print',
        description: 'If the nozzle catches on a raised section of the print (e.g. curled corner), it can force a missed step.',
        fix: 'Improve cooling to reduce layer curl. Lower Z seam height. Enable Z-hop in your slicer.',
        severity: 'orange',
        rank: (s) => 2,
      },
      {
        title: 'Overheating stepper driver',
        description: 'A hot stepper driver will throttle or shut down to protect itself, causing missed steps.',
        fix: 'Ensure electronics bay has adequate airflow. Check that driver cooling fans are running. Add a heatsink if needed.',
        severity: 'yellow',
        rank: (s) => 1,
      },
    ]
  },

  // ── STRINGING ─────────────────────────────────────────────────────────────
  stringing: {
    label: 'Stringing / Hairing',
    causes: [
      {
        title: 'Nozzle temperature too high',
        description: 'An overly hot nozzle produces very runny, low-viscosity filament that oozes out freely during travel moves.',
        fix: 'Lower nozzle temperature by 5–10°C at a time. Run a temperature tower to find the sweet spot for your specific filament brand.',
        severity: 'red',
        rank(s) {
          if (!s.material || s.nozzleTemp === null) return 2;
          const [, max] = MATERIAL_RANGES[s.material].nozzle;
          let r;
          if (s.nozzleTemp > max + 10) r = 4;
          else if (s.nozzleTemp > max + 5) r = 3;
          else if (s.nozzleTemp > max) r = 2;
          else return null;
          // Cross: runny filament with insufficient retraction to pull it back = severe stringing
          if (r < 4 && s.retractionDist !== null) {
            const lowThresh = s.extruderType === 'bowden' ? 4 : 1.5;
            if (s.retractionDist < lowThresh) r = Math.min(4, r + 1);
          }
          return r;
        }
      },
      {
        title: 'Retraction distance too low',
        description: 'Insufficient retraction doesn\'t pull the filament back far enough, leaving the nozzle tip oozing during travel.',
        fix: 'Increase retraction distance: 0.5–2mm for direct drive, 4–6mm for Bowden. Run a retraction test tower.',
        severity: 'red',
        rank(s) {
          if (s.retractionDist === null) return 3;
          let r;
          if (s.extruderType === 'bowden') {
            // Bowden tubes require much more retraction due to slack in the tube
            if (s.retractionDist < 2)   r = 4;
            else if (s.retractionDist < 4) r = 3;
            else if (s.retractionDist < 5) r = 2;
            else return null;
          } else if (s.extruderType === 'direct') {
            // Direct drive extruders sit right on the hotend — minimal retraction needed
            if (s.retractionDist < 0.3) r = 4;
            else if (s.retractionDist < 0.8) r = 3;
            else if (s.retractionDist < 1.5) r = 2;
            else return null;
          } else {
            // Extruder type unknown — use conservative middle-ground thresholds
            if (s.retractionDist < 0.5) r = 4;
            else if (s.retractionDist < 1.5) r = 3;
            else if (s.retractionDist < 2.5) r = 2;
            else return null;
          }
          // Cross: a hot nozzle makes even a borderline retraction setting fail
          if (r < 4 && s.material && s.nozzleTemp !== null) {
            const [, max] = MATERIAL_RANGES[s.material].nozzle;
            if (s.nozzleTemp > max) r = Math.min(4, r + 1);
          }
          return r;
        }
      },
      {
        title: 'PETG naturally strings more',
        description: 'PETG is notoriously stringy due to its high tack and wide melt range. It requires more tuning than PLA.',
        fix: 'For PETG: use lower temps (230–235°C if possible), increase retraction, enable combing, and try wiping on retraction.',
        severity: 'orange',
        rank(s) {
          if (s.material === 'PETG') return 3;
          return null;
        }
      },
      {
        title: 'Travel speed too slow',
        description: 'Slow travel moves give the nozzle more time to ooze filament between parts.',
        fix: 'Increase travel speed to 150–200 mm/s if your printer can handle it. Enable combing to avoid crossing open air.',
        severity: 'orange',
        rank: (s) => 2,
      },
      {
        title: 'Wet filament',
        description: 'Moisture in filament makes it more fluid and prone to oozing, producing thin strings even with good retraction settings.',
        fix: 'Dry your filament: PLA at 45°C, PETG/ABS at 65°C for 4–6 hours. Store in sealed bags with desiccant.',
        severity: 'orange',
        rank: (s) => 2,
      },
      {
        title: 'Retraction speed too low',
        description: 'Slow retraction doesn\'t pull the filament back fast enough to stop ooze before the travel move begins.',
        fix: 'Increase retraction speed to 35–60 mm/s. Be careful not to go too high or you\'ll grind the filament.',
        severity: 'yellow',
        rank(s) {
          if (s.retractionSpeed === null) return null;
          if (s.retractionSpeed < 20) return 3;
          if (s.retractionSpeed < 30) return 2;
          return null;
        }
      },
    ]
  },

  // ── UNDER-EXTRUSION ───────────────────────────────────────────────────────
  under_extrusion: {
    label: 'Under-Extrusion / Gaps',
    causes: [
      {
        title: 'Partial nozzle clog',
        description: 'A partial blockage restricts filament flow, causing inconsistent extrusion and visible gaps in layers.',
        fix: 'Try a cold pull to clear debris. Push filament manually at temperature to check resistance. Replace nozzle if needed.',
        severity: 'red',
        rank: (s) => 3,
      },
      {
        title: 'Nozzle temperature too low',
        description: 'Filament that isn\'t fully melted can\'t flow at the required rate, causing under-extrusion especially at higher speeds.',
        fix: 'Increase nozzle temperature to the correct range. Try going 5–10°C higher if you\'re at the low end.',
        severity: 'red',
        rank(s) {
          if (!s.material || s.nozzleTemp === null) return 3;
          const [min] = MATERIAL_RANGES[s.material].nozzle;
          let r;
          if (s.nozzleTemp < min - 10) r = 4;
          else if (s.nozzleTemp < min) r = 3;
          else return null;
          // Cross: demanding high speed from a cold hotend starves the nozzle even faster
          if (r < 4 && s.printSpeed !== null && s.printSpeed > 60) r = Math.min(4, r + 1);
          return r;
        }
      },
      {
        title: 'Print speed too high for hotend temperature',
        description: 'Printing faster than your hotend can melt filament starves the nozzle — the extruder demands more than it can provide.',
        fix: 'Reduce print speed, or raise temperature by 5°C at a time. Your hotend has a maximum volumetric flow rate limit.',
        severity: 'red',
        rank(s) {
          if (s.printSpeed === null) return null;
          if (!s.material || s.nozzleTemp === null) return null;
          const [min] = MATERIAL_RANGES[s.material].nozzle;
          if (s.printSpeed > 80 && s.nozzleTemp < min + 10) return 4;
          if (s.printSpeed > 60 && s.nozzleTemp < min + 5) return 3;
          if (s.printSpeed > 80) return 2;
          return null;
        }
      },
      {
        title: 'Incorrect flow rate / extrusion multiplier',
        description: 'A flow rate set too low will consistently under-extrude across the entire print.',
        fix: 'Calibrate your E-steps and extrusion multiplier. Print a single-wall cube and measure wall thickness to dial it in.',
        severity: 'orange',
        rank: (s) => 2,
      },
      {
        title: 'Extruder not gripping filament properly',
        description: 'A worn extruder gear, slipping idler, or improperly tensioned extruder causes inconsistent filament feed.',
        fix: 'Check the extruder idler tension. Inspect the drive gear for wear or clogging with ground filament. Clean with a brush.',
        severity: 'orange',
        rank: (s) => 2,
      },
      {
        title: 'Wet or brittle filament',
        description: 'Moisture-absorbed filament loses diameter consistency and becomes brittle, causing feed irregularities.',
        fix: 'Dry filament at 45–65°C depending on material (4–6 hours). Discard filament that is visibly brittle or snapping easily.',
        severity: 'yellow',
        rank: (s) => 1,
      },
    ]
  },

  // ── LAYER SEPARATION ──────────────────────────────────────────────────────
  layer_separation: {
    label: 'Layer Separation / Splitting',
    causes: [
      {
        title: 'Nozzle temperature too low',
        description: 'Cold filament doesn\'t bond well to the previous layer. Inadequate layer adhesion is the primary cause of splitting.',
        fix: 'Increase nozzle temperature to the recommended range. For large/tall prints, try the higher end of the range.',
        severity: 'red',
        rank(s) {
          if (!s.material || s.nozzleTemp === null) return 3;
          const [min] = MATERIAL_RANGES[s.material].nozzle;
          let r;
          if (s.nozzleTemp < min - 10) r = 4;
          else if (s.nozzleTemp < min) r = 3;
          else return null;
          // Cross: high speed + cold nozzle = filament isn't molten long enough to bond to the layer below
          if (r < 4 && s.printSpeed !== null && s.printSpeed > 60) r = Math.min(4, r + 1);
          // Cross: thick layers require more heat to fuse — cold + thick is a reliable recipe for splitting
          if (r < 4 && s.layerHeight !== null && s.layerHeight > 0.25) r = Math.min(4, r + 1);
          return r;
        }
      },
      {
        title: 'Cooling too aggressive — ABS / ASA',
        description: 'ABS and ASA require minimal cooling to maintain layer-to-layer bond strength. High fan speeds cause thermal stress that splits layers.',
        fix: 'Reduce or completely disable the cooling fan for ABS/ASA. Use an enclosure to maintain ambient temperature.',
        severity: 'red',
        rank(s) {
          if (!s.material) return null;
          if (['ABS', 'ASA'].includes(s.material)) {
            if (s.coolingFan === null) return 3;
            if (s.coolingFan > 30) return 4;
            if (s.coolingFan > 10) return 3;
          }
          return null;
        }
      },
      {
        title: 'Layer height too thick for nozzle diameter',
        description: 'Layer height greater than ~75% of nozzle diameter results in insufficient overlap between layers, causing poor bonding.',
        fix: 'Keep layer height at or below 75% of nozzle diameter. For a 0.4mm nozzle, max practical layer height is 0.3mm.',
        severity: 'orange',
        rank(s) {
          if (s.layerHeight === null) return null;
          let r;
          if (s.layerHeight > 0.35) r = 3;
          else if (s.layerHeight > 0.28) r = 2;
          else return null;
          // Cross: thick layers need extra heat to fuse — a cold nozzle can't bond them reliably
          if (r < 4 && s.material && s.nozzleTemp !== null) {
            const [min] = MATERIAL_RANGES[s.material].nozzle;
            if (s.nozzleTemp < min) r = Math.min(4, r + 1);
          }
          return r;
        }
      },
      {
        title: 'Print speed too high',
        description: 'Excessive print speed reduces the time filament has to bond to the previous layer, resulting in weak layer adhesion.',
        fix: 'Reduce print speed to 40–60 mm/s. Slower speeds significantly improve layer bonding.',
        severity: 'orange',
        rank(s) {
          if (s.printSpeed === null) return null;
          let r;
          if (s.printSpeed > 100) r = 3;
          else if (s.printSpeed > 80) r = 2;
          else return null;
          // Cross: a cold nozzle combined with high speed means layers are barely molten when they're laid
          if (r < 4 && s.material && s.nozzleTemp !== null) {
            const [min] = MATERIAL_RANGES[s.material].nozzle;
            if (s.nozzleTemp < min + 5) r = Math.min(4, r + 1);
          }
          return r;
        }
      },
      {
        title: 'Under-extrusion causing thin layers',
        description: 'If filament isn\'t being deposited consistently, some layers will be too thin to bond properly.',
        fix: 'Check for a partial clog, calibrate E-steps, and verify flow rate. Look for inconsistent line widths in the print.',
        severity: 'orange',
        rank: (s) => 2,
      },
      {
        title: 'Wet filament',
        description: 'Moisture weakens interlayer bonding and can create micro-voids between layers that cause splitting under stress.',
        fix: 'Dry filament before use at the appropriate temperature for your material.',
        severity: 'yellow',
        rank: (s) => 1,
      },
    ]
  },

  // ── SURFACE IMPERFECTIONS ─────────────────────────────────────────────────
  surface_imperfections: {
    label: 'Zits, Blobs & Surface Pitting',
    causes: [
      {
        title: 'Wet filament — popping and pitting',
        description: 'Moisture in filament vaporizes at printing temperature, creating steam pops that leave pits, craters, and rough texture on the surface.',
        fix: 'Dry your filament before printing: PLA 45°C, PETG/ABS/ASA 65°C, for 4–6 hours. If you hear crackling or popping during printing, the filament is wet.',
        severity: 'red',
        rank: (s) => 3,
      },
      {
        title: 'Insufficient retraction — zits and blobs from ooze',
        description: 'When retraction doesn\'t fully stop ooze between travel moves, the nozzle deposits small blobs as it re-enters the perimeter.',
        fix: 'Increase retraction distance slightly. Enable "wipe before retract" and "retract on layer change" in your slicer.',
        severity: 'orange',
        rank(s) {
          if (s.retractionDist === null) return 2;
          let r;
          if (s.extruderType === 'bowden') {
            if (s.retractionDist < 2)   r = 4;
            else if (s.retractionDist < 4) r = 3;
            else return null;
          } else if (s.extruderType === 'direct') {
            if (s.retractionDist < 0.3) r = 4;
            else if (s.retractionDist < 0.8) r = 3;
            else return null;
          } else {
            if (s.retractionDist < 0.5) r = 4;
            else if (s.retractionDist < 1.5) r = 3;
            else return null;
          }
          // Cross: hot nozzle + poor retraction = constant ooze deposited as blobs on every travel
          if (r < 4 && s.material && s.nozzleTemp !== null) {
            const [, max] = MATERIAL_RANGES[s.material].nozzle;
            if (s.nozzleTemp > max) r = Math.min(4, r + 1);
          }
          return r;
        }
      },
      {
        title: 'Nozzle temperature too high — oozing',
        description: 'A very hot nozzle produces runny filament that oozes freely, leaving excess material that shows as blobs or zits.',
        fix: 'Lower nozzle temperature by 5–10°C. Run a temperature tower to find the best balance between flow and ooze.',
        severity: 'orange',
        rank(s) {
          if (!s.material || s.nozzleTemp === null) return null;
          const [, max] = MATERIAL_RANGES[s.material].nozzle;
          let r;
          if (s.nozzleTemp > max + 10) r = 3;
          else if (s.nozzleTemp > max + 5) r = 2;
          else return null;
          // Cross: hot nozzle oozing with insufficient retraction = blobs on every travel move
          if (r < 4 && s.retractionDist !== null) {
            const lowThresh = s.extruderType === 'bowden' ? 4 : 1.5;
            if (s.retractionDist < lowThresh) r = Math.min(4, r + 1);
          }
          return r;
        }
      },
      {
        title: 'Seam / Z-scar placement',
        description: 'The point where each layer starts and ends creates a small seam. Poorly placed seams show as vertical lines or blobs.',
        fix: 'In your slicer, set seam placement to "Aligned" or "Rear" to hide it, or "Random" to spread it out. Use "Smart" seam if available.',
        severity: 'yellow',
        rank: (s) => 2,
      },
      {
        title: 'Combing / avoid crossing perimeters disabled',
        description: 'Without combing, the nozzle travels over the surface of the print and can leave marks or blobs as it crosses perimeters.',
        fix: 'Enable "Combing" or "Avoid crossing perimeters" in your slicer. This keeps travel moves inside the print.',
        severity: 'yellow',
        rank: (s) => 2,
      },
      {
        title: 'Inconsistent extrusion / pressure advance not tuned',
        description: 'Pressure fluctuations at the start and end of lines cause small over- or under-extrusion marks on the surface.',
        fix: 'Calibrate Pressure Advance (Klipper) or Linear Advance (Marlin) for cleaner line starts and ends.',
        severity: 'yellow',
        rank: (s) => 1,
      },
    ]
  },

  // ── FILAMENT GRINDING ─────────────────────────────────────────────────────
  filament_grinding: {
    label: 'Filament Grinding / Clicking',
    causes: [
      {
        title: 'Partial or full nozzle clog',
        description: 'A blocked nozzle creates back-pressure that the extruder motor can\'t overcome, causing it to grind or strip the filament.',
        fix: 'Heat to printing temperature and try a cold pull. Push filament manually — if resistance is very high, you have a clog. Clear or replace the nozzle.',
        severity: 'red',
        rank: (s) => 4,
      },
      {
        title: 'Nozzle temperature too low',
        description: 'Printing too cold makes the filament stiff and difficult to extrude, overloading the extruder motor.',
        fix: 'Increase nozzle temperature to the correct range. Try going 5–10°C higher than your current setting.',
        severity: 'red',
        rank(s) {
          if (!s.material || s.nozzleTemp === null) return 3;
          const [min] = MATERIAL_RANGES[s.material].nozzle;
          if (s.nozzleTemp < min - 10) return 4;
          if (s.nozzleTemp < min) return 3;
          return null;
        }
      },
      {
        title: 'Print speed too high for hotend',
        description: 'Demanding more filament than your hotend can melt causes back-pressure that makes the extruder skip and grind.',
        fix: 'Reduce print speed or increase temperature. Your hotend has a volumetric flow limit — don\'t exceed it.',
        severity: 'orange',
        rank(s) {
          if (s.printSpeed === null) return null;
          let r;
          if (s.printSpeed > 100) r = 3;
          else if (s.printSpeed > 80) r = 2;
          else return null;
          // Cross: a cold nozzle can't melt fast enough even at moderate speeds — the extruder grinds immediately
          if (r < 4 && s.material && s.nozzleTemp !== null) {
            const [min] = MATERIAL_RANGES[s.material].nozzle;
            if (s.nozzleTemp < min + 5) r = Math.min(4, r + 1);
          }
          return r;
        }
      },
      {
        title: 'Retraction distance too high',
        description: 'Excessive retraction strains the extruder on every move, causing it to grind the filament over time.',
        fix: 'Direct drive: reduce to under 2mm. Bowden: 4–6mm maximum. Run a retraction test to find the minimum effective distance.',
        severity: 'orange',
        rank(s) {
          if (s.retractionDist === null) return null;
          if (s.extruderType === 'direct') {
            if (s.retractionDist > 5) return 3;
            if (s.retractionDist > 3) return 2;
          } else if (s.extruderType === 'bowden') {
            if (s.retractionDist > 8) return 3;
            if (s.retractionDist > 6) return 2;
          } else {
            if (s.retractionDist > 8) return 3;
            if (s.retractionDist > 5) return 2;
          }
          return null;
        }
      },
      {
        title: 'Extruder idler tension incorrect',
        description: 'Too tight and the extruder crushes/grinds the filament. Too loose and it slips without feeding properly.',
        fix: 'Adjust the extruder idler spring tension. It should grip firmly but not crush the filament. Check your printer\'s specific guidance.',
        severity: 'yellow',
        rank: (s) => 2,
      },
      {
        title: 'Worn or clogged extruder drive gear',
        description: 'A worn gear or one packed with ground filament debris loses grip and skips, especially under load.',
        fix: 'Inspect and clean the extruder drive gear with a stiff brush. Replace if teeth are visibly worn.',
        severity: 'yellow',
        rank: (s) => 1,
      },
    ]
  },

  // ── MID-PRINT STOPPAGE ────────────────────────────────────────────────────
  mid_print_stoppage: {
    label: 'Mid-Print Stoppage',
    causes: [
      {
        title: 'Thermal runaway protection triggered',
        description: 'The printer detected an unexpected temperature drop and shut down to prevent a fire. This is a safety feature, not a bug.',
        fix: 'Check the heater cartridge and thermistor connections — loose wires are the #1 cause. Check the hot end wiring harness for damage. Re-seat connectors.',
        severity: 'red',
        rank: (s) => 4,
      },
      {
        title: 'Nozzle clog causing extruder failure',
        description: 'A severe clog can stall filament movement, causing the extruder to grind to a halt and stopping the print.',
        fix: 'Perform a cold pull to clear the clog. Check for heat creep or wet filament contributing to the blockage.',
        severity: 'red',
        rank: (s) => 3,
      },
      {
        title: 'Electrical issue — loose connector or wire',
        description: 'Loose wiring on the hotend, heated bed, or control board can cause intermittent failures that halt the print.',
        fix: 'Inspect all wiring harnesses and connectors. Gently tug each connection. Look for worn or pinched wires from repeated movement.',
        severity: 'red',
        rank: (s) => 2,
      },
      {
        title: 'Print detached and caused a crash',
        description: 'If the print detaches and spaghetti builds up, the nozzle can jam against the pile of material and stall.',
        fix: 'Improve bed adhesion to prevent the root cause. Consider a spaghetti detection / filament jam sensor if available.',
        severity: 'orange',
        rank(s) {
          if (s.printSpeed === null) return 2;
          if (s.printSpeed > 80) return 3;
          return 2;
        }
      },
      {
        title: 'Filament runout',
        description: 'The filament ran out mid-print. Without a runout sensor, the printer continues to move with no material.',
        fix: 'Install a filament runout sensor if your printer supports one. Always check remaining spool quantity before long prints.',
        severity: 'orange',
        rank: (s) => 2,
      },
      {
        title: 'Bad G-code or corrupted file',
        description: 'A corrupted slice, bad SD card, or software error can produce malformed G-code that causes the printer to freeze.',
        fix: 'Re-slice the model, re-export the file, and try from a fresh SD card or direct USB connection.',
        severity: 'yellow',
        rank: (s) => 1,
      },
    ]
  },

  // ── ELEPHANT FOOT ─────────────────────────────────────────────────────────
  elephant_foot: {
    label: 'Elephant Foot (First Layer Flare)',
    causes: [
      {
        title: 'Z offset too low — nozzle too close to bed',
        description: 'The most common cause. When the nozzle is too close, the first layer gets over-squished and spreads outward beyond the model\'s intended footprint.',
        fix: 'Raise your Z offset slightly in small increments (0.02–0.05mm at a time) until the first layer is flat and even without spreading.',
        severity: 'red',
        rank: (s) => 4,
      },
      {
        title: 'Bed temperature too high',
        description: 'An excessively hot bed keeps the first layer soft and molten for too long, allowing it to spread under its own weight.',
        fix: 'Reduce bed temperature by 5–10°C. Keep it within the recommended range for your material.',
        severity: 'orange',
        rank(s) {
          if (!s.material || s.bedTemp === null) return null;
          const [, max] = MATERIAL_RANGES[s.material].bed;
          let r;
          if (s.bedTemp > max + 15) r = 3;
          else if (s.bedTemp > max + 5) r = 2;
          else return null;
          // Cross: both nozzle and bed running hot keeps the first layer liquid far too long
          if (r < 4 && s.nozzleTemp !== null) {
            const [, nMax] = MATERIAL_RANGES[s.material].nozzle;
            if (s.nozzleTemp > nMax + 5) r = Math.min(4, r + 1);
          }
          return r;
        }
      },
      {
        title: 'Nozzle temperature too high on first layer',
        description: 'A very hot nozzle over-melts the first layer, making it too fluid and prone to spreading.',
        fix: 'Lower nozzle temperature or set a slightly lower first-layer temperature in your slicer (5°C lower than print temp).',
        severity: 'yellow',
        rank(s) {
          if (!s.material || s.nozzleTemp === null) return null;
          const [, max] = MATERIAL_RANGES[s.material].nozzle;
          if (s.nozzleTemp > max + 10) return 2;
          return null;
        }
      },
      {
        title: 'No elephant foot compensation in slicer',
        description: 'Most slicers have a dedicated "Elephant Foot Compensation" setting that insets the first layer slightly to counteract natural spreading.',
        fix: 'Enable elephant foot compensation in your slicer. Start at 0.1–0.2mm and adjust until the first layer matches the rest of the print.',
        severity: 'yellow',
        rank: (s) => 2,
      },
      {
        title: 'First layer line width too high',
        description: 'Printing the first layer at a very wide line width increases spreading on an already-squeezed layer.',
        fix: 'Set first layer line width to 100–120% of nozzle diameter rather than larger values.',
        severity: 'green',
        rank: (s) => 1,
      },
    ]
  },

  // ── GHOSTING / RINGING ────────────────────────────────────────────────────
  ghosting: {
    label: 'Ghosting / Ringing Artifacts',
    causes: [
      {
        title: 'Print speed too high',
        description: 'High print speeds create inertia forces during direction changes that cause the frame or toolhead to vibrate, leaving "echo" patterns on walls.',
        fix: 'Reduce print speed to 40–60 mm/s. Ghosting is very sensitive to speed — even a 20% reduction can make a big difference.',
        severity: 'red',
        rank(s) {
          if (s.printSpeed === null) return 3;
          let r;
          if (s.printSpeed > 100) r = 4;
          else if (s.printSpeed > 80) r = 3;
          else if (s.printSpeed > 60) r = 2;
          else return null;
          // Cross: direct drive toolheads are heavier, amplifying speed-induced ringing
          if (r < 4 && s.extruderType === 'direct') r = Math.min(4, r + 1);
          return r;
        }
      },
      {
        title: 'Acceleration too high',
        description: 'High acceleration settings cause aggressive direction changes that excite resonant frequencies in the printer frame.',
        fix: 'Lower acceleration in firmware/slicer settings. Start at 500–1000 mm/s² and increase until ghosting returns, then back off.',
        severity: 'red',
        rank(s) {
          if (s.printSpeed === null) return 2;
          if (s.printSpeed > 80) return 3;
          if (s.printSpeed > 60) return 2;
          return null;
        }
      },
      {
        title: 'Loose GT2 belt',
        description: 'A slack belt allows the toolhead to oscillate slightly after sharp direction changes, producing ringing patterns.',
        fix: 'Tighten X and Y belts until firm. Check belt tension regularly as they stretch over time.',
        severity: 'orange',
        rank: (s) => 3,
      },
      {
        title: 'Printer on an unstable or resonant surface',
        description: 'A table, shelf, or surface that amplifies vibrations will worsen ghosting significantly.',
        fix: 'Place the printer on a rigid, heavy surface. Anti-vibration feet or foam padding under the printer can help considerably.',
        severity: 'orange',
        rank: (s) => 2,
      },
      {
        title: 'Input shaping not configured',
        description: 'Modern firmware (Klipper, Marlin 2.x) supports Input Shaping / Resonance Compensation which can nearly eliminate ringing.',
        fix: 'Enable and calibrate Input Shaping or Resonance Compensation in your firmware. This requires an accelerometer (ADXL345) for best results.',
        severity: 'yellow',
        rank: (s) => 2,
      },
      {
        title: 'Heavy or unbalanced toolhead',
        description: 'A heavy direct drive extruder, large cooling shroud, or poorly balanced toolhead increases the inertia that causes ringing.',
        fix: 'Lower print speed and acceleration to compensate. Consider lighter components if upgrading.',
        severity: 'yellow',
        rank(s) {
          // Direct drive setups carry the extruder motor on the toolhead — this is the primary source of mass-induced ghosting
          if (s.extruderType === 'direct') {
            if (s.printSpeed !== null && s.printSpeed > 80) return 3;
            return 2;
          }
          return 1;
        }
      },
    ]
  },

};

// ── RENDER ─────────────────────────────────────────────────────────────────
function renderResults(results, issueLabel) {
  const wrap      = document.getElementById('resultsWrap');
  const container = document.getElementById('results');
  const issueName = document.getElementById('resultsIssueName');

  issueName.textContent = issueLabel;

  const SEV_LABELS = { red: 'Critical', orange: 'Major', yellow: 'Minor', green: 'Edge Case' };

  if (results.length === 0) {
    container.innerHTML = '<p class="no-results">No issues flagged based on your settings. Try filling in the advanced settings for a more detailed analysis.</p>';
  } else {
    container.innerHTML = results.map((c, i) => `
      <div class="result-card">
        <div class="result-header">
          <div class="result-dot-wrap">
            <div class="sev-dot sev-${c.severity}"></div>
          </div>
          <div class="result-meta">
            <span class="result-rank">#${i + 1}</span>
            <span class="result-title">${c.title}</span>
            <span class="sev-badge sev-${c.severity}">${SEV_LABELS[c.severity]}</span>
          </div>
        </div>
        <p class="result-desc">${c.description}</p>
        <div class="result-fix"><strong>Fix:</strong> ${c.fix}</div>
      </div>
    `).join('');
  }

  wrap.style.display = 'block';
  wrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── DIAGNOSE ───────────────────────────────────────────────────────────────
document.getElementById('diagnoseBtn').addEventListener('click', () => {
  const issueKey = document.querySelector('input[name="issue"]:checked')?.value;
  if (!issueKey) {
    alert('Please select an issue in Step 1 first.');
    return;
  }

  const settings = getSettings();
  const issue    = ISSUES[issueKey];

  const results = issue.causes
    .map(cause => ({ ...cause, r: cause.rank(settings) }))
    .filter(c => c.r !== null)
    .sort((a, b) => b.r - a.r);

  renderResults(results, issue.label);
});

// ── ADVANCED TOGGLE ────────────────────────────────────────────────────────
document.getElementById('advancedToggle').addEventListener('click', () => {
  const panel = document.getElementById('advancedPanel');
  const btn   = document.getElementById('advancedToggle');
  const isOpen = panel.style.display === 'block';
  panel.style.display = isOpen ? 'none' : 'block';
  btn.textContent = isOpen ? '+ Show Advanced Settings' : '− Hide Advanced Settings';
});
