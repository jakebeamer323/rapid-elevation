// ── PRINTER LIST ───────────────────────────────────────────────────────────
const PRINTERS = [
  // Bambu Lab
  { group: 'Bambu Lab', name: 'Bambu Lab A1' },
  { group: 'Bambu Lab', name: 'Bambu Lab A1 Mini' },
  { group: 'Bambu Lab', name: 'Bambu Lab P1P' },
  { group: 'Bambu Lab', name: 'Bambu Lab P1S' },
  { group: 'Bambu Lab', name: 'Bambu Lab X1C' },
  { group: 'Bambu Lab', name: 'Bambu Lab X1E' },
  // Creality — Ender series
  { group: 'Creality', name: 'Creality Ender 3' },
  { group: 'Creality', name: 'Creality Ender 3 Pro' },
  { group: 'Creality', name: 'Creality Ender 3 V2' },
  { group: 'Creality', name: 'Creality Ender 3 V2 Neo' },
  { group: 'Creality', name: 'Creality Ender 3 V3' },
  { group: 'Creality', name: 'Creality Ender 3 V3 KE' },
  { group: 'Creality', name: 'Creality Ender 3 V3 SE' },
  { group: 'Creality', name: 'Creality Ender 3 S1' },
  { group: 'Creality', name: 'Creality Ender 3 S1 Pro' },
  { group: 'Creality', name: 'Creality Ender 3 S1 Plus' },
  { group: 'Creality', name: 'Creality Ender 5' },
  { group: 'Creality', name: 'Creality Ender 5 Pro' },
  { group: 'Creality', name: 'Creality Ender 5 Plus' },
  { group: 'Creality', name: 'Creality Ender 5 S1' },
  { group: 'Creality', name: 'Creality Ender 6' },
  { group: 'Creality', name: 'Creality Ender 7' },
  // Creality — CR series
  { group: 'Creality', name: 'Creality CR-6 SE' },
  { group: 'Creality', name: 'Creality CR-6 Max' },
  { group: 'Creality', name: 'Creality CR-10' },
  { group: 'Creality', name: 'Creality CR-10 V3' },
  { group: 'Creality', name: 'Creality CR-10 S5' },
  { group: 'Creality', name: 'Creality CR-10 Smart' },
  { group: 'Creality', name: 'Creality CR-10 Smart Pro' },
  { group: 'Creality', name: 'Creality CR-10 Max' },
  // Creality — K series
  { group: 'Creality', name: 'Creality K1' },
  { group: 'Creality', name: 'Creality K1C' },
  { group: 'Creality', name: 'Creality K1 Max' },
  { group: 'Creality', name: 'Creality K1 SE' },
  // Prusa Research
  { group: 'Prusa Research', name: 'Prusa i3 MK3S+' },
  { group: 'Prusa Research', name: 'Prusa i3 MK4' },
  { group: 'Prusa Research', name: 'Prusa i3 MK4S' },
  { group: 'Prusa Research', name: 'Prusa Mini' },
  { group: 'Prusa Research', name: 'Prusa Mini+' },
  { group: 'Prusa Research', name: 'Prusa XL' },
  { group: 'Prusa Research', name: 'Prusa Core One' },
  // AnkerMake
  { group: 'AnkerMake', name: 'AnkerMake M5' },
  { group: 'AnkerMake', name: 'AnkerMake M5C' },
  { group: 'AnkerMake', name: 'AnkerMake M7' },
  // Elegoo
  { group: 'Elegoo', name: 'Elegoo Neptune 2' },
  { group: 'Elegoo', name: 'Elegoo Neptune 2S' },
  { group: 'Elegoo', name: 'Elegoo Neptune 3' },
  { group: 'Elegoo', name: 'Elegoo Neptune 3 Pro' },
  { group: 'Elegoo', name: 'Elegoo Neptune 3 Plus' },
  { group: 'Elegoo', name: 'Elegoo Neptune 3 Max' },
  { group: 'Elegoo', name: 'Elegoo Neptune 4' },
  { group: 'Elegoo', name: 'Elegoo Neptune 4 Pro' },
  { group: 'Elegoo', name: 'Elegoo Neptune 4 Plus' },
  { group: 'Elegoo', name: 'Elegoo Neptune 4 Max' },
  { group: 'Elegoo', name: 'Elegoo Neptune 4 X' },
  // Voron
  { group: 'Voron', name: 'Voron 0.2' },
  { group: 'Voron', name: 'Voron Trident' },
  { group: 'Voron', name: 'Voron 2.4' },
  { group: 'Voron', name: 'Voron Switchwire' },
  // Artillery
  { group: 'Artillery', name: 'Artillery Sidewinder X1' },
  { group: 'Artillery', name: 'Artillery Sidewinder X2' },
  { group: 'Artillery', name: 'Artillery Genius' },
  { group: 'Artillery', name: 'Artillery Genius Pro' },
  { group: 'Artillery', name: 'Artillery Hornet' },
  // Sovol
  { group: 'Sovol', name: 'Sovol SV06' },
  { group: 'Sovol', name: 'Sovol SV06 Plus' },
  { group: 'Sovol', name: 'Sovol SV07' },
  { group: 'Sovol', name: 'Sovol SV07 Plus' },
  { group: 'Sovol', name: 'Sovol SV08' },
  // FlashForge
  { group: 'FlashForge', name: 'FlashForge Adventurer 3' },
  { group: 'FlashForge', name: 'FlashForge Adventurer 4' },
  { group: 'FlashForge', name: 'FlashForge Adventurer 5M' },
  { group: 'FlashForge', name: 'FlashForge Adventurer 5M Pro' },
  { group: 'FlashForge', name: 'FlashForge Creator Pro 2' },
  { group: 'FlashForge', name: 'FlashForge Guider 3' },
  // Qidi Tech
  { group: 'Qidi Tech', name: 'Qidi X-Plus 3' },
  { group: 'Qidi Tech', name: 'Qidi X-Max 3' },
  { group: 'Qidi Tech', name: 'Qidi X-Smart 3' },
  { group: 'Qidi Tech', name: 'Qidi Q1 Pro' },
  // UltiMaker
  { group: 'UltiMaker', name: 'UltiMaker S3' },
  { group: 'UltiMaker', name: 'UltiMaker S5' },
  { group: 'UltiMaker', name: 'UltiMaker S7' },
  { group: 'UltiMaker', name: 'UltiMaker 2+ Connect' },
  // Raise3D
  { group: 'Raise3D', name: 'Raise3D E2' },
  { group: 'Raise3D', name: 'Raise3D Pro3' },
  { group: 'Raise3D', name: 'Raise3D Pro3 Plus' },
  // Snapmaker
  { group: 'Snapmaker', name: 'Snapmaker 2.0 A150' },
  { group: 'Snapmaker', name: 'Snapmaker 2.0 A250' },
  { group: 'Snapmaker', name: 'Snapmaker 2.0 A350' },
  { group: 'Snapmaker', name: 'Snapmaker Artisan' },
  { group: 'Snapmaker', name: 'Snapmaker J1' },
  // Voxelab
  { group: 'Voxelab', name: 'Voxelab Aquila' },
  { group: 'Voxelab', name: 'Voxelab Aquila S2' },
  { group: 'Voxelab', name: 'Voxelab Aquila X2' },
  // Two Trees
  { group: 'Two Trees', name: 'Two Trees Bluer' },
  { group: 'Two Trees', name: 'Two Trees Sapphire Pro' },
  { group: 'Two Trees', name: 'Two Trees SK1' },
  // Kingroon
  { group: 'Kingroon', name: 'Kingroon KP3S' },
  { group: 'Kingroon', name: 'Kingroon KP3S Pro' },
  { group: 'Kingroon', name: 'Kingroon KP5L' },
  // Biqu
  { group: 'Biqu', name: 'Biqu B1' },
  { group: 'Biqu', name: 'Biqu Hurakan' },
  // LulzBot
  { group: 'LulzBot', name: 'LulzBot TAZ Pro' },
  { group: 'LulzBot', name: 'LulzBot Mini 2' },
  // Dremel
  { group: 'Dremel', name: 'Dremel 3D40 Flex' },
  { group: 'Dremel', name: 'Dremel 3D45' },
  // Monoprice
  { group: 'Monoprice', name: 'Monoprice MP Mini Delta' },
  { group: 'Monoprice', name: 'Monoprice Maker Select Plus' },
  { group: 'Monoprice', name: 'Monoprice MP Voxel' },
  // Longer
  { group: 'Longer', name: 'Longer LK4 Pro' },
  { group: 'Longer', name: 'Longer LK5 Pro' },
  // Geeetech
  { group: 'Geeetech', name: 'Geeetech A10' },
  { group: 'Geeetech', name: 'Geeetech A20' },
  // Other
  { group: 'Other', name: 'Custom / DIY Build' },
  { group: 'Other', name: 'Not Listed' },
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
      const matchName  = p.name.toLowerCase().includes(q);
      const matchGroup = p.group.toLowerCase().includes(q);
      if (q && !matchName && !matchGroup) continue;

      if (p.group !== lastGroup) {
        html += `<div class="ss-group-label">${p.group}</div>`;
        lastGroup = p.group;
      }
      html += `<div class="ss-option" data-value="${p.name}">${p.name}</div>`;
      count++;
    }

    list.innerHTML = count ? html : '<div class="ss-no-results">No printers found</div>';

    list.querySelectorAll('.ss-option').forEach(opt => {
      opt.addEventListener('mousedown', e => {
        e.preventDefault();
        select(opt.dataset.value);
      });
    });
  }

  function select(name) {
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

const MATERIAL_RANGES = {
  PLA:  { nozzle: [190, 220], bed: [50,  65]  },
  PETG: { nozzle: [230, 250], bed: [70,  90]  },
  ABS:  { nozzle: [230, 255], bed: [95,  115] },
  ASA:  { nozzle: [240, 265], bed: [90,  115] },
  TPU:  { nozzle: [220, 240], bed: [30,  60]  },
};

const SEVERITY_ORDER = { red: 4, orange: 3, yellow: 2, green: 1 };

function parseNum(id) {
  const val = document.getElementById(id).value.trim();
  if (val === '') return null;
  const n = parseFloat(val);
  return isNaN(n) ? null : n;
}

function getSettings() {
  return {
    printer:         document.getElementById('printer').value || null,
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
// Each cause: { title, description, fix, severity(settings) → 'red'|'orange'|'yellow'|'green'|null }
// null = not applicable, skip rendering

const ISSUES = {

  bed_adhesion: {
    label: 'Bed Adhesion Problems',
    causes: [
      {
        title: 'Bed temperature too low',
        description: 'A cold bed prevents the filament from bonding to the print surface during the first layer.',
        fix: 'Increase bed temperature to the recommended range for your material: PLA 50–65°C, PETG 70–90°C, ABS/ASA 95–115°C, TPU 30–60°C.',
        severity(s) {
          if (s.bedTemp === null || !s.material) return 'yellow';
          const [min] = MATERIAL_RANGES[s.material].bed;
          if (s.bedTemp < min - 10) return 'red';
          if (s.bedTemp < min) return 'orange';
          return null;
        }
      },
      {
        title: 'Nozzle temperature too low',
        description: 'Filament that isn\'t fully melted won\'t flow or adhere properly, resulting in poor first layer bonding.',
        fix: 'Increase nozzle temperature to the recommended range for your material. Try increasing in 5°C increments.',
        severity(s) {
          if (s.nozzleTemp === null || !s.material) return null;
          const [min] = MATERIAL_RANGES[s.material].nozzle;
          if (s.nozzleTemp < min - 10) return 'red';
          if (s.nozzleTemp < min) return 'orange';
          return null;
        }
      },
      {
        title: 'First layer speed too high',
        description: 'A fast first layer doesn\'t give the filament enough time to bond to the bed surface.',
        fix: 'Reduce first layer speed to 15–25 mm/s in your slicer. Most slicers let you set this as a % of normal speed.',
        severity(s) {
          if (s.firstLayerSpeed === null) return 'yellow';
          if (s.firstLayerSpeed > 50) return 'red';
          if (s.firstLayerSpeed > 30) return 'orange';
          if (s.firstLayerSpeed > 20) return 'yellow';
          return null;
        }
      },
      {
        title: 'Z offset too high (nozzle too far from bed)',
        description: 'If the nozzle is too far from the bed, the filament won\'t squish into the surface properly and won\'t stick.',
        fix: 'Re-level your bed and lower your Z offset until the first layer has a slight squish — no gaps, not paper-thin.',
        severity(s) {
          return 'yellow';
        }
      },
      {
        title: 'Cooling fan on during first layers',
        description: 'Having the part cooling fan active on the first layer rapidly cools the filament before it can bond to the bed.',
        fix: 'Disable the cooling fan for the first 2–3 layers in your slicer settings.',
        severity(s) {
          if (s.coolingFan === null) return null;
          if (s.material && ['ABS', 'ASA'].includes(s.material) && s.coolingFan > 0) return 'orange';
          if (s.coolingFan > 30) return 'yellow';
          return null;
        }
      },
      {
        title: 'Dirty or contaminated bed surface',
        description: 'Oils from your hands, dust, or residue from previous prints prevent the filament from gripping the surface.',
        fix: 'Clean the bed thoroughly with isopropyl alcohol (90%+) before every print. Avoid touching the print surface.',
        severity(s) {
          return 'yellow';
        }
      },
    ]
  },

  curling_edges: {
    label: 'Curling / Warping Edges',
    causes: [
      {
        title: 'Bed temperature too low',
        description: 'An insufficiently heated bed causes the printed material to cool too fast, creating thermal stress that pulls the edges upward.',
        fix: 'Increase bed temperature to the correct range for your material and ensure it fully reaches temperature before printing.',
        severity(s) {
          if (s.bedTemp === null || !s.material) return 'orange';
          const [min] = MATERIAL_RANGES[s.material].bed;
          if (s.bedTemp < min - 10) return 'red';
          if (s.bedTemp < min) return 'orange';
          return null;
        }
      },
      {
        title: 'No enclosure (ABS / ASA)',
        description: 'ABS and ASA require a stable, warm ambient temperature. Open-air printing causes rapid, uneven cooling and severe warping.',
        fix: 'Use a proper enclosure to trap heat. Even a cardboard box helps significantly. ABS/ASA really need this.',
        severity(s) {
          if (s.material && ['ABS', 'ASA'].includes(s.material)) return 'red';
          return null;
        }
      },
      {
        title: 'Cooling fan too aggressive',
        description: 'High cooling forces rapid thermal contraction in the print, which causes the corners and edges to pull away from the bed.',
        fix: 'Reduce cooling fan speed. ABS/ASA: 0–10%. PETG: 30–50%. PLA is generally fine at 80–100%.',
        severity(s) {
          if (s.coolingFan === null) return null;
          if (s.material && ['ABS', 'ASA'].includes(s.material) && s.coolingFan > 20) return 'red';
          if (s.material && ['ABS', 'ASA'].includes(s.material) && s.coolingFan > 0) return 'orange';
          if (s.material === 'PETG' && s.coolingFan > 60) return 'orange';
          return null;
        }
      },
      {
        title: 'Drafts or airflow near the printer',
        description: 'Cold air from vents, windows, or nearby fans causes uneven, rapid cooling on the print surface.',
        fix: 'Move the printer away from drafts or use an enclosure to shield it from ambient airflow.',
        severity(s) {
          return 'yellow';
        }
      },
      {
        title: 'First layer speed too high',
        description: 'A fast first layer reduces adhesion strength, making it easier for thermal stress to lift the edges.',
        fix: 'Reduce first layer speed to 15–25 mm/s.',
        severity(s) {
          if (s.firstLayerSpeed === null) return null;
          if (s.firstLayerSpeed > 40) return 'orange';
          if (s.firstLayerSpeed > 25) return 'yellow';
          return null;
        }
      },
      {
        title: 'Nozzle temperature too low',
        description: 'Under-temperature filament produces weaker layer bonds, making the print more susceptible to warping stress.',
        fix: 'Increase nozzle temperature to the recommended range for your material.',
        severity(s) {
          if (s.nozzleTemp === null || !s.material) return null;
          const [min] = MATERIAL_RANGES[s.material].nozzle;
          if (s.nozzleTemp < min - 5) return 'orange';
          if (s.nozzleTemp < min) return 'yellow';
          return null;
        }
      },
    ]
  },

  warped_top: {
    label: 'Rough / Warped Top Layer',
    causes: [
      {
        title: 'Infill percentage too low',
        description: 'The top surface needs adequate infill underneath it for support. Too little infill leaves large gaps that the top layers sag or bow into.',
        fix: 'Increase infill to at least 15–20%. For large flat top surfaces, consider going to 25%. Gyroid and honeycomb infill patterns provide better top layer support.',
        severity(s) {
          if (s.infill === null) return 'orange';
          if (s.infill < 10) return 'red';
          if (s.infill < 15) return 'orange';
          if (s.infill < 20) return 'yellow';
          return null;
        }
      },
      {
        title: 'Not enough top solid layers',
        description: 'Too few top layers means the surface doesn\'t have enough material to properly bridge the infill gaps and produce a smooth finish.',
        fix: 'Increase top layers to at least 4–6, or set your top thickness to around 0.6–1.0mm in your slicer.',
        severity(s) {
          return 'yellow';
        }
      },
      {
        title: 'Print speed too fast for top layer',
        description: 'High print speeds on top solid layers don\'t give the filament time to lay flat and fill properly.',
        fix: 'Set your top/solid layer speed to 30–50% of your normal print speed. Most slicers have a separate "top surface speed" setting.',
        severity(s) {
          if (s.printSpeed === null) return null;
          if (s.printSpeed > 100) return 'orange';
          if (s.printSpeed > 80) return 'yellow';
          return null;
        }
      },
      {
        title: 'Layer height too thick',
        description: 'Thicker layers are harder to bridge cleanly over infill gaps and tend to produce a rougher top surface.',
        fix: 'Try reducing layer height to 0.15–0.2mm for a smoother top surface, especially on visible parts.',
        severity(s) {
          if (s.layerHeight === null) return null;
          if (s.layerHeight > 0.3) return 'orange';
          if (s.layerHeight > 0.25) return 'yellow';
          return null;
        }
      },
      {
        title: 'Nozzle temperature too high (overextrusion)',
        description: 'An excessively hot nozzle produces very runny filament that overextrudes, leaving a blobby or uneven top surface.',
        fix: 'Lower nozzle temperature by 5–10°C and verify your flow rate / extrusion multiplier is correctly calibrated.',
        severity(s) {
          if (s.nozzleTemp === null || !s.material) return null;
          const [, max] = MATERIAL_RANGES[s.material].nozzle;
          if (s.nozzleTemp > max + 10) return 'orange';
          if (s.nozzleTemp > max) return 'yellow';
          return null;
        }
      },
      {
        title: 'Insufficient cooling on top layer (PLA)',
        description: 'Without enough cooling, the top layer stays soft and gets dragged by the nozzle, leaving a rough or uneven finish.',
        fix: 'Make sure your part cooling fan is at 100% for top layers. Check your fan is functioning correctly.',
        severity(s) {
          if (s.coolingFan === null || s.material !== 'PLA') return null;
          if (s.coolingFan < 50) return 'orange';
          if (s.coolingFan < 80) return 'yellow';
          return null;
        }
      },
    ]
  },

  spaghetti: {
    label: 'Spaghetti (Collapsed Print)',
    causes: [
      {
        title: 'Print detached from the bed',
        description: 'The most common root cause of spaghetti — the print lifted or peeled off the bed mid-print, and the nozzle kept printing into air.',
        fix: 'Focus on improving bed adhesion: clean the bed with IPA, check your Z offset, increase bed temperature, and slow down the first layer.',
        severity(s) {
          return 'red';
        }
      },
      {
        title: 'Print speed too high',
        description: 'High speeds increase vibration and nozzle forces, which can knock a print off the bed or cause a layer shift that leads to spaghetti.',
        fix: 'Reduce print speed to 40–60 mm/s. If you\'re using high-speed printing (100+ mm/s), ensure your printer is properly tuned for it.',
        severity(s) {
          if (s.printSpeed === null) return null;
          if (s.printSpeed > 120) return 'orange';
          if (s.printSpeed > 80) return 'yellow';
          return null;
        }
      },
      {
        title: 'Nozzle temperature too high (drooping / stringing)',
        description: 'An overly hot nozzle produces very runny filament that strings and droops, which can catch on the print and knock it off the bed.',
        fix: 'Lower nozzle temperature by 5–10°C and increase retraction slightly to reduce stringing.',
        severity(s) {
          if (s.nozzleTemp === null || !s.material) return null;
          const [, max] = MATERIAL_RANGES[s.material].nozzle;
          if (s.nozzleTemp > max + 10) return 'orange';
          if (s.nozzleTemp > max + 5) return 'yellow';
          return null;
        }
      },
      {
        title: 'Insufficient cooling on overhangs',
        description: 'Without enough cooling, overhangs sag and curl upward, eventually catching the nozzle and dislodging the print.',
        fix: 'Increase part cooling fan speed. For PLA, use 80–100%. Make sure your part cooling fan is aimed correctly at the print.',
        severity(s) {
          if (s.coolingFan === null || s.material !== 'PLA') return null;
          if (s.coolingFan < 50) return 'orange';
          if (s.coolingFan < 80) return 'yellow';
          return null;
        }
      },
      {
        title: 'First layer speed too high',
        description: 'A poorly bonded first layer is easily knocked off during later layers, especially on tall or thin prints.',
        fix: 'Reduce first layer speed to 15–25 mm/s for a stronger initial bond.',
        severity(s) {
          if (s.firstLayerSpeed === null) return null;
          if (s.firstLayerSpeed > 40) return 'orange';
          if (s.firstLayerSpeed > 25) return 'yellow';
          return null;
        }
      },
    ]
  },

  clogged_nozzle: {
    label: 'Clogged Nozzle',
    causes: [
      {
        title: 'Nozzle temperature too low for material',
        description: 'Printing too cold causes semi-melted filament to solidify inside the nozzle, forming a clog.',
        fix: 'Increase nozzle temperature to the correct range for your material. For an existing clog, try a cold pull: heat to printing temp, push filament through, cool to ~90°C, then pull firmly.',
        severity(s) {
          if (s.nozzleTemp === null || !s.material) return 'orange';
          const [min] = MATERIAL_RANGES[s.material].nozzle;
          if (s.nozzleTemp < min - 10) return 'red';
          if (s.nozzleTemp < min) return 'orange';
          return null;
        }
      },
      {
        title: 'Retraction distance too high',
        description: 'Excessive retraction pulls molten filament up into the cold zone of the hotend (heat creep zone), where it solidifies and causes a clog.',
        fix: 'For direct drive extruders: keep retraction under 2mm. For Bowden setups: 4–6mm max. Start low and increase only if needed.',
        severity(s) {
          if (s.retractionDist === null) return 'yellow';
          if (s.retractionDist > 8) return 'red';
          if (s.retractionDist > 5) return 'orange';
          if (s.retractionDist > 3) return 'yellow';
          return null;
        }
      },
      {
        title: 'Heat creep',
        description: 'Heat creep occurs when heat travels up the heatbreak into the cold zone, softening filament where it shouldn\'t be and causing a jam.',
        fix: 'Ensure your hotend cooling fan runs at 100% at all times (not just during printing). Clean any dust from the heatsink fins.',
        severity(s) {
          return 'yellow';
        }
      },
      {
        title: 'Wet or contaminated filament',
        description: 'Moisture in filament vaporizes during printing, creating bubbles and inconsistent flow that contributes to partial clogs over time.',
        fix: 'Dry your filament before use: 45°C for PLA (4–6 hrs), 65°C for PETG/ABS/ASA (4–6 hrs). Use a food dehydrator or dedicated filament dryer.',
        severity(s) {
          return 'yellow';
        }
      },
      {
        title: 'Retraction speed too high',
        description: 'Very high retraction speeds can cause the filament to strip, grind, or bind inside the hotend, contributing to clogs.',
        fix: 'Reduce retraction speed to 25–45 mm/s and test in small increments.',
        severity(s) {
          if (s.retractionSpeed === null) return null;
          if (s.retractionSpeed > 70) return 'orange';
          if (s.retractionSpeed > 50) return 'yellow';
          return null;
        }
      },
      {
        title: 'Print speed too high for nozzle temperature',
        description: 'Printing faster than your hotend can melt filament starves the nozzle and leaves semi-molten material behind that can cause a clog.',
        fix: 'Reduce print speed or raise nozzle temperature by 5°C at a time. Your hotend has a maximum volumetric flow rate.',
        severity(s) {
          if (s.printSpeed === null || s.nozzleTemp === null || !s.material) return null;
          const [min] = MATERIAL_RANGES[s.material].nozzle;
          if (s.printSpeed > 80 && s.nozzleTemp < min + 10) return 'orange';
          if (s.printSpeed > 60 && s.nozzleTemp < min + 5) return 'yellow';
          return null;
        }
      },
    ]
  },

};

// ── RENDER ─────────────────────────────────────────────────────────────────

function renderResults(results, issueLabel) {
  const wrap = document.getElementById('resultsWrap');
  const container = document.getElementById('results');
  const issueName = document.getElementById('resultsIssueName');

  issueName.textContent = issueLabel;

  if (results.length === 0) {
    container.innerHTML = '<p class="no-results">No issues flagged based on your settings. Try filling in the advanced settings for a more detailed analysis, or double-check your input values.</p>';
  } else {
    const SEV_LABELS = { red: 'Very Likely', orange: 'Likely', yellow: 'Possible', green: 'Unlikely' };
    container.innerHTML = results.map((c, i) => `
      <div class="result-card">
        <div class="result-header">
          <div class="result-dot-wrap">
            <div class="sev-dot sev-${c.sev}"></div>
          </div>
          <div class="result-meta">
            <span class="result-rank">#${i + 1}</span>
            <span class="result-title">${c.title}</span>
            <span class="sev-badge sev-${c.sev}">${SEV_LABELS[c.sev]}</span>
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
  const issue = ISSUES[issueKey];

  const results = issue.causes
    .map(cause => ({ ...cause, sev: cause.severity(settings) }))
    .filter(c => c.sev !== null)
    .sort((a, b) => SEVERITY_ORDER[b.sev] - SEVERITY_ORDER[a.sev]);

  renderResults(results, issue.label);
});

// ── ADVANCED TOGGLE ────────────────────────────────────────────────────────

document.getElementById('advancedToggle').addEventListener('click', () => {
  const panel = document.getElementById('advancedPanel');
  const btn = document.getElementById('advancedToggle');
  const isOpen = panel.style.display === 'block';
  panel.style.display = isOpen ? 'none' : 'block';
  btn.textContent = isOpen ? '+ Show Advanced Settings' : '− Hide Advanced Settings';
});
