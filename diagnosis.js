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
