// Product, activity and kit-contents illustrations. Newly authored flat SVG in the grammar of the
// two reference concepts: saturated flat fills, 4–6px deep-blue outline, no gradients.
// Each export returns { vb, body }. Wrap with svg() from kit.mjs. Class hooks (wheel, jaw, kpat…)
// are animated by shared/art.css when an ancestor has .perform.

export const C = { red: '#ef3a24', yel: '#fcda00', teal: '#32c3e0', grn: '#5cba47', blu: '#2960ad', navy: '#201b4a', ink: '#221f1f', paper: '#fffdf8' };
const S = 'stroke="#201b4a" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"';
const S4 = 'stroke="#201b4a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"';
const S3 = 'stroke="#201b4a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
const shadow = (cx, cy, rx, ry = 14, o = 0.17) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#201b4a" opacity="${o}"/>`;

// ------------------------------------------------------------------ TRUCK (reused from the Playroom, wheels classed)
export const truck = () => ({ vb: '0 0 700 430', body: `
<ellipse cx="357" cy="378" rx="267" ry="19" fill="#201b4a" opacity=".17"/>
<path d="m130 152 35-26 360 2 31 54v151l-45 23H130Z" fill="#201b4a" stroke="#201b4a" stroke-width="7" stroke-linejoin="round"/>
<path d="M138 173h363v151H138Z" fill="#32c3e0" ${S}/>
<path d="m501 175 53 6v151l-53-8Z" fill="#2960ad" ${S}/>
<path d="M139 281h363v46H139Z" fill="#ef3a24" ${S}/>
<path d="M155 291h329v13H155" fill="#fcda00"/>
<path d="M489 183h64l51 41v105h-115Z" fill="#5cba47" stroke="#201b4a" stroke-width="7" stroke-linejoin="round"/>
<path d="m554 184 54 28 37 56v62h-42V224Z" fill="#fcda00" stroke="#201b4a" stroke-width="7" stroke-linejoin="round"/>
<path d="M504 194h44l39 33v33h-83Z" fill="#fff" stroke="#201b4a" stroke-width="5" stroke-linejoin="round"/>
<path d="m565 206 32 22 26 37h-23l-12-34Z" fill="#32c3e0" ${S4}/>
<path d="M504 268h85v49h-85Z" fill="#ef3a24" ${S4}/><path d="M519 280h19" stroke="#fcda00" stroke-width="5" stroke-linecap="round"/>
<path d="M133 325h514v21H133Z" fill="#fcda00" stroke="#201b4a" stroke-width="6" stroke-linejoin="round"/>
<path d="M623 283h24v22h-24Z" fill="#fff" ${S4}/>
<path d="m616 314 29-1v14h-29" fill="#ef3a24"/>
<g class="wheel wheel-a"><circle cx="230" cy="338" r="49" fill="#201b4a"/><circle cx="230" cy="338" r="30" fill="#fff" ${S4}/><circle cx="230" cy="338" r="11" fill="#ef3a24"/><path d="M230 313v10m0 30v10m-25-25h10m30 0h10" stroke="#2960ad" stroke-width="6" stroke-linecap="round"/></g>
<g class="wheel wheel-b"><circle cx="549" cy="338" r="49" fill="#201b4a"/><circle cx="549" cy="338" r="30" fill="#fff" ${S4}/><circle cx="549" cy="338" r="11" fill="#ef3a24"/><path d="M549 313v10m0 30v10m-25-25h10m30 0h10" stroke="#2960ad" stroke-width="6" stroke-linecap="round"/></g>
<g fill="#fcda00" ${S4}><path d="M159 260v-41a31 31 0 0 1 62 0v41Z"/><path d="M232 260v-41a31 31 0 0 1 62 0v41Z"/><path d="M305 260v-41a31 31 0 0 1 62 0v41Z"/><path d="M378 260v-41a31 31 0 0 1 62 0v41Z"/></g>
<g fill="#ef3a24"><circle cx="190" cy="219" r="15"/><circle cx="263" cy="219" r="15"/><circle cx="336" cy="219" r="15"/><circle cx="409" cy="219" r="15"/></g>
<g stroke="#fff" fill="none" stroke-width="3"><path d="m178 219 24 0m-12-12v24m61-20 24 17m-24 0 24-17"/><circle cx="336" cy="219" r="8"/><path d="m409 208 4 8 9 3-9 3-4 8-4-8-9-3 9-3Z"/></g>
<g class="truck-roof"><path d="m116 167 30-42 348-2 49 41Z" fill="#fcda00" stroke="#201b4a" stroke-width="6" stroke-linejoin="round"/><path d="M116 166h386v24q-19 20-38 0-19 20-39 0-19 20-39 0-19 20-39 0-19 20-39 0-19 20-39 0-19 20-39 0-19 20-38 0-19 20-39 0Z" fill="#fff" ${S}/>
<path d="m151 125-17 41h36l11-42m39 0-6 42h37l1-42m39 0 5 42h38l-10-42m38 0 16 42h38l-22-42m40 0 25 42h35l-29-42" fill="#ef3a24"/><path d="M138 167v23q18 17 36-1v-22m40 0v22q19 17 38 0v-22m41 0v22q19 17 38 0v-22m41 0v22q19 17 38 0v-22m40 0v22q18 17 36 0v-22" fill="#ef3a24"/>
<path d="m494 123 48 41h-39l-21-40Z" fill="#5cba47" ${S4}/>
<path d="M255 91h143v42H255Z" fill="#2960ad" stroke="#201b4a" stroke-width="5" stroke-linejoin="round"/><text x="327" y="121" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-size="28" font-weight="900" letter-spacing="4">MELA</text><path d="m247 96 8 15-8 13m159-28-8 15 8 13" fill="#fcda00"/></g>
<path d="M171 321v-12m304 12v-12" stroke="#201b4a" stroke-width="4"/><g fill="#fff"><circle cx="158" cy="284" r="3"/><circle cx="479" cy="284" r="3"/></g>` });

// ------------------------------------------------------------------ GANESHA (reused; --figure colours the idol)
export const ganesha = () => ({ vb: '0 0 480 490', body: `
<ellipse cx="240" cy="454" rx="165" ry="16" fill="#201b4a" opacity=".16"/>
<path d="M80 435V159a160 160 0 0 1 320 0v276Z" fill="#2960ad" stroke="#201b4a" stroke-width="7"/>
<path d="M104 414V167a136 136 0 0 1 272 0v247Z" fill="#32c3e0" ${S}/>
<path d="M118 410V167a122 122 0 0 1 244 0v243Z" fill="#fff"/>
<path d="M111 431h262v21H111Z" fill="#ef3a24" ${S}/>
<path d="M87 115q18-19 37 0t37 0 37 0 37 0 37 0 37 0 37 0 37 0" fill="none" stroke="#fcda00" stroke-width="12"/>
<path d="M92 123q19 36 38 0 18 36 37 0 18 36 37 0 18 36 37 0 18 36 37 0 18 36 37 0 18 36 37 0 18 36 37 0" fill="none" stroke="#ef3a24" stroke-width="6"/>
<g class="idol" stroke="#201b4a" stroke-width="5" stroke-linejoin="round"><path d="M149 377q-42-4-38-40 3-29 42-30l48 34m130 36q42-4 38-40-3-29-42-30l-48 34" fill="var(--figure,#fcda00)"/>
<path d="M171 279q-9 25-38 27-32 3-31-22 3-28 23-24l7 13 21-18m156 24q9 25 38 27 32 3 31-22-3-28-23-24l-7 13-21-18" fill="var(--figure,#fcda00)"/>
<path d="M180 266q-42 113 18 133h84q60-20 18-133Z" fill="var(--figure,#fcda00)"/>
<path d="M202 176q-37-31-70-7-39 39 4 84 29 20 60-3m82-74q37-31 70-7 39 39-4 84-29 20-60-3" fill="#ef3a24"/>
<path d="M190 184q-27-16-44 1-24 28 8 52 19 8 34-3m98-50q27-16 44 1 24 28-8 52-19 8-34-3" fill="#fcda00" stroke-width="3"/>
<path d="M239 144q-58 0-55 65 1 39 37 48l-1 54q1 26 28 24 24-1 24-23 0-14-12-13 1 14-11 11l1-55q42-10 43-47 4-64-54-64Z" fill="var(--figure,#fcda00)"/>
<path d="m189 164 4-54 26 17 21-31 22 31 27-17 2 54Z" fill="#ef3a24"/><path d="M193 152h96v16h-96Z" fill="#fcda00"/>
<path d="m240 115 8 13-8 12-8-12Z" fill="#fff" stroke-width="2"/>
<path d="M211 221q-16 13-27-1l8 30 20-8m56-21q16 13 27-1l-8 30-20-8" fill="#fff" stroke-width="3"/>
<path d="M205 202q7-8 14 0m42 0q7-8 14 0" fill="none" stroke-linecap="round"/>
<path d="M239 178v15" stroke="#ef3a24" stroke-width="5" stroke-linecap="round"/>
<path d="M178 366q62 19 123 0l-7 31H185Z" fill="#ef3a24"/><path d="M225 373v25m31-25v25" fill="none" stroke="#fcda00" stroke-width="3"/>
<path d="m164 404 28-24 22 26 26-29 25 29 23-26 28 24-9 19H173Z" fill="#5cba47"/></g>
<g fill="#fcda00"><circle cx="120" cy="166" r="5"/><circle cx="360" cy="166" r="5"/><circle cx="119" cy="213" r="5"/><circle cx="361" cy="213" r="5"/><circle cx="119" cy="365" r="5"/><circle cx="361" cy="365" r="5"/></g>` });

// ------------------------------------------------------------------ SMALL SHARED PROPS
export const brush = () => ({ vb: '0 0 100 330', body: `<path d="m43 316 13-209 26 1-17 208q-11 18-22 0Z" fill="#ef3a24" ${S4}/><path d="m54 104 1-33 32 2-5 35Z" fill="#fffdf8" ${S4}/><path d="M56 72q-13-35 5-62 0 23 27 31l-1 32Z" fill="#201b4a" class="brush-tip"/><path d="m60 59 19 1" stroke="#32c3e0" stroke-width="5"/><path d="m64 134-9 141" stroke="#fffdf8" stroke-width="4" opacity=".65"/>` });
export const paintPot = () => ({ vb: '0 0 150 180', body: `<path d="m30 49 9 105q33 23 71 0l10-105" fill="#fff" stroke="#201b4a" stroke-width="5"/><path d="m34 70 5 64q36 23 74 0l6-64" fill="#ef3a24"/><ellipse cx="75" cy="49" rx="46" ry="14" fill="#fcda00" stroke="#201b4a" stroke-width="5"/><path d="M47 66v15m48-17v24" stroke="#fcda00" stroke-width="9" stroke-linecap="round"/><path d="m94 44 12-39 14 3-13 41" fill="#5cba47" ${S4}/><ellipse cx="75" cy="105" rx="21" ry="22" fill="#fff"/><path d="m76 89-9 17q-5 13 7 13t5-14Z" fill="#2960ad"/>` });
export const fan = () => ({ vb: '0 0 220 240', body: `<path d="m106 203-12-26L22 73 57 40l34 21 10-44h46l9 37 34 1 14 44-78 81-5 25Z" fill="#fcda00" stroke="#201b4a" stroke-width="5" stroke-linejoin="round"/><path d="m109 182-52-142m54 142-10-165m14 165L147 17m-31 165 74-127m-83 124L22 73" stroke="#ef3a24" stroke-width="6"/><path d="m97 178 28 4-2 39-21 3Z" fill="#2960ad" ${S}/>` });
export const flower = (color = C.red) => ({ vb: '0 0 100 100', body: `<g fill="${color}" ${S3}><ellipse cx="50" cy="27" rx="15" ry="26"/><ellipse cx="50" cy="27" rx="15" ry="26" transform="rotate(60 50 50)"/><ellipse cx="50" cy="27" rx="15" ry="26" transform="rotate(120 50 50)"/><ellipse cx="50" cy="27" rx="15" ry="26" transform="rotate(180 50 50)"/><ellipse cx="50" cy="27" rx="15" ry="26" transform="rotate(240 50 50)"/><ellipse cx="50" cy="27" rx="15" ry="26" transform="rotate(300 50 50)"/></g><circle cx="50" cy="50" r="14" fill="#fcda00" ${S3}/><circle cx="50" cy="50" r="5" fill="#201b4a"/>` });
export const star = (color = C.yel) => ({ vb: '0 0 60 60', body: `<path d="m30 3 7 18 19 1-15 12 5 19-16-10-16 10 5-19L4 22l19-1Z" fill="${color}" ${S4}/>` });

// ------------------------------------------------------------------ 1. FERRIS WHEEL (7 gondolas)
export const ferris = ({ numbers = false } = {}) => {
  const cx = 220, cy = 236, R = 172;
  const cols = [C.red, C.yel, C.teal, C.grn, C.blu, C.red, C.yel];
  let g = '';
  for (let i = 0; i < 7; i++) {
    const a = (i * 360) / 7;
    const x = cx + R * Math.sin((a * Math.PI) / 180), y = cy - R * Math.cos((a * Math.PI) / 180);
    g += `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)})" class="gpos gpos-${i + 1}"><g class="gondola"><path d="M0 0v16M-18 22L0 0l18 22" fill="none" ${S3}/><path d="M-26 22q26-18 52 0Z" fill="${C.paper}" ${S3}/><rect x="-22" y="22" width="44" height="36" rx="9" fill="${cols[i]}" ${S4}/><circle cx="0" cy="40" r="9" fill="${C.paper}" ${S3}/>${numbers ? `<text x="0" y="45" text-anchor="middle" font-family="Arial,sans-serif" font-weight="900" font-size="13" fill="#201b4a">${i + 1}</text>` : ''}</g></g>`;
  }
  let spokes = '', lights = '';
  for (let k = 0; k < 12; k++) {
    const a = (k * 30 * Math.PI) / 180;
    spokes += `M${cx} ${cy}L${(cx + R * Math.sin(a)).toFixed(1)} ${(cy - R * Math.cos(a)).toFixed(1)}`;
  }
  for (let k = 0; k < 28; k++) {
    const a = (k * 360) / 28 + 6, x = cx + (R + 0) * Math.sin((a * Math.PI) / 180), y = cy - (R + 0) * Math.cos((a * Math.PI) / 180);
    lights += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="${k % 2 ? C.yel : C.paper}"/>`;
  }
  return { vb: '0 0 440 540', body: `${shadow(220, 512, 150, 14)}
<path d="M220 236 128 496m92-260 92 260" fill="none" stroke="#201b4a" stroke-width="16" stroke-linecap="round"/>
<path d="M220 236 128 496m92-260 92 260" fill="none" stroke="${C.yel}" stroke-width="7" stroke-linecap="round"/>
<path d="M162 392h116" stroke="#201b4a" stroke-width="10" stroke-linecap="round"/>
<rect x="96" y="492" width="248" height="24" rx="10" fill="${C.red}" ${S}/>
<g class="ferris-rim"><circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#201b4a" stroke-width="10"/><circle cx="${cx}" cy="${cy}" r="${R - 24}" fill="none" ${S3}/><path d="${spokes}" stroke="#201b4a" stroke-width="5" fill="none"/>${lights}${g}</g>
<circle cx="${cx}" cy="${cy}" r="24" fill="${C.red}" ${S}/><circle cx="${cx}" cy="${cy}" r="9" fill="${C.yel}" ${S3}/>` };
};

// ------------------------------------------------------------------ 2. SHOOTING GAME
export const shooter = () => {
  const cup = (x, y, col) => `<g class="cup" transform="translate(${x} ${y})"><path d="M-27 0h54l-8 50h-38Z" fill="${col}" ${S4}/><path d="M-27 0h54v10h-52Z" fill="${C.paper}" ${S3}/></g>`;
  return { vb: '0 0 520 340', body: `${shadow(260, 318, 230, 12)}
<rect x="40" y="250" width="230" height="52" rx="8" fill="${C.yel}" ${S}/><path d="M60 276h190" stroke="${C.red}" stroke-width="5"/>
<g class="launcher"><rect x="70" y="176" width="190" height="44" rx="8" fill="${C.paper}" ${S}/><path d="M104 176v44m14-44v44" stroke="${C.red}" stroke-width="6"/><ellipse cx="70" cy="198" rx="12" ry="22" fill="${C.teal}" ${S}/><rect x="86" y="132" width="150" height="40" rx="8" fill="${C.paper}" ${S}/><ellipse cx="86" cy="152" rx="11" ry="20" fill="${C.yel}" ${S}/><path d="M236 152h24v46" fill="none" ${S}/></g>
<path class="band" d="M92 150 150 100l58 52" fill="none" stroke="${C.red}" stroke-width="7"/>
<path d="M142 106l8-26 8 26z" fill="${C.blu}" ${S4}/><circle class="pellet" cx="244" cy="152" r="9" fill="${C.red}" ${S4}/>
<path class="trigger" d="M168 222l12 34h22l-8-34Z" fill="${C.red}" ${S4}/>
<rect x="318" y="288" width="190" height="18" rx="5" fill="${C.blu}" ${S}/>
${cup(352, 244, C.red)}${cup(413, 244, C.yel)}${cup(474, 244, C.teal)}
<g class="cups-mid">${cup(382, 198, C.teal)}${cup(444, 198, C.red)}</g>
<g class="cups-top">${cup(413, 152, C.yel)}</g>` };
};

// ------------------------------------------------------------------ 3. LEOPARD HAND PUPPET
export const leopard = () => ({ vb: '0 0 420 440', body: `${shadow(210, 418, 150, 12)}
<path d="M120 440V250q0-60 90-60t90 60v190Z" fill="${C.yel}" ${S}/>
<g fill="${C.navy}"><ellipse cx="160" cy="320" rx="12" ry="9"/><ellipse cx="215" cy="360" rx="14" ry="10"/><ellipse cx="262" cy="310" rx="11" ry="9"/><ellipse cx="190" cy="285" rx="9" ry="7"/><ellipse cx="248" cy="395" rx="11" ry="8"/><ellipse cx="150" cy="390" rx="10" ry="8"/></g>
<g class="puppet-head" style="transform-origin:210px 232px">
 <g class="jaw" style="transform-origin:210px 232px"><path d="M104 232q106 18 212 0l-14 54q-92 34-184 0Z" fill="${C.yel}" ${S}/><path d="M122 234q88 14 176 0l-8 22q-80 22-160 0Z" fill="${C.red}"/><path d="M142 236l10 22 10-20m44 3 10 20 10-22m44 0 10 20 8-20" fill="${C.paper}" ${S3}/><circle cx="170" cy="272" r="7" fill="${C.navy}"/><circle cx="250" cy="272" r="7" fill="${C.navy}"/></g>
 <path d="M96 232q-20-100 54-130 60-24 120 0 74 30 54 130-106-26-228 0Z" fill="${C.yel}" ${S}/>
 <path d="M122 120 100 62l54 18Zm176 0 22-58-54 18Z" fill="${C.yel}" ${S}/><path d="M124 108 114 80l26 8Zm172 0 10-28-26 8Z" fill="${C.red}"/>
 <g fill="${C.navy}"><ellipse cx="156" cy="152" rx="9" ry="7"/><ellipse cx="270" cy="148" rx="9" ry="7"/><ellipse cx="188" cy="118" rx="7" ry="5"/><ellipse cx="236" cy="116" rx="8" ry="6"/><ellipse cx="124" cy="190" rx="8" ry="6"/><ellipse cx="300" cy="190" rx="8" ry="6"/></g>
 <ellipse cx="164" cy="190" rx="21" ry="24" fill="${C.paper}" ${S}/><ellipse cx="256" cy="190" rx="21" ry="24" fill="${C.paper}" ${S}/><circle class="pupil" cx="168" cy="194" r="9" fill="${C.navy}"/><circle class="pupil" cx="252" cy="194" r="9" fill="${C.navy}"/>
 <path d="M196 214h28l-14 18Z" fill="${C.red}" ${S4}/><path d="M210 232v8" stroke="#201b4a" stroke-width="4"/>
 <path d="M98 214 56 206m44 20-40 12m266-24 44-8m-48 28 40 12" stroke="#201b4a" stroke-width="4" stroke-linecap="round"/>
</g>` });

// ------------------------------------------------------------------ 4. KALEIDOSCOPE
export const kaleido = () => {
  let seg = '';
  const cols = [C.red, C.yel, C.teal, C.grn, C.blu, C.red, C.yel, C.teal];
  for (let i = 0; i < 8; i++) {
    const a1 = (i * 45 - 22.5) * Math.PI / 180, a2 = (i * 45 + 22.5) * Math.PI / 180, r = 78;
    seg += `<path d="M0 0L${(r * Math.sin(a1)).toFixed(1)} ${(-r * Math.cos(a1)).toFixed(1)}A${r} ${r} 0 0 1 ${(r * Math.sin(a2)).toFixed(1)} ${(-r * Math.cos(a2)).toFixed(1)}Z" fill="${cols[i]}"/>`;
  }
  return { vb: '0 0 520 340', body: `${shadow(250, 322, 220, 12)}
<g transform="rotate(-18 250 170)"><rect x="40" y="118" width="300" height="104" rx="10" fill="${C.red}" ${S}/>
<path d="M60 170q20-24 40 0t40 0 40 0 40 0 40 0 40 0 20-0" fill="none" stroke="${C.yel}" stroke-width="8"/><path d="M60 196q20-24 40 0t40 0 40 0 40 0 40 0 40 0" fill="none" stroke="${C.paper}" stroke-width="5"/>
<rect x="330" y="104" width="32" height="132" rx="8" fill="${C.blu}" ${S}/>
<g transform="translate(420 170)"><circle r="96" fill="${C.paper}" ${S}/><circle r="84" fill="${C.navy}"/><g class="kpat">${seg}<circle r="14" fill="${C.paper}" ${S3}/></g><circle r="84" fill="none" ${S}/></g>
<rect x="352" y="130" width="14" height="80" fill="${C.paper}" opacity=".0"/></g>
<g class="bead b1"><circle cx="70" cy="70" r="12" fill="${C.teal}" ${S4}/></g><g class="bead b2"><path d="m110 40 16 12-6 20h-20l-6-20Z" fill="${C.yel}" ${S4}/></g><g class="bead b3"><circle cx="40" cy="260" r="10" fill="${C.grn}" ${S4}/></g><g class="bead b4"><path d="m470 296 14 10-5 18h-18l-5-18Z" fill="${C.red}" ${S4}/></g>` };
};

// ------------------------------------------------------------------ 5. STITCH CRAFT (felt bunny)
export const stitch = () => ({ vb: '0 0 440 400', body: `${shadow(220, 378, 170, 12)}
<path d="M50 40h340q12 0 12 12v290q0 12-12 12H50q-12 0-12-12V52q0-12 12-12Z" fill="${C.teal}" ${S}/>
<path d="M62 54h316v286H62Z" fill="none" stroke="${C.paper}" stroke-width="3" stroke-dasharray="10 9" opacity=".9"/>
<path class="bunny-outline" d="M180 304q-36-8-40-48-4-40 26-62-30-30-18-82 8-34 34-30 22 4 20 44 0 22-10 44 24-4 44 4-8-24-4-46 6-40 30-42 26-2 30 34 4 52-26 80 30 22 22 60-6 40-44 50Z" fill="none" stroke="${C.yel}" stroke-width="7" stroke-linecap="round" stroke-dasharray="14 11"/>
<path class="bunny-fill" d="M180 304q-36-8-40-48-4-40 26-62-30-30-18-82 8-34 34-30 22 4 20 44 0 22-10 44 24-4 44 4-8-24-4-46 6-40 30-42 26-2 30 34 4 52-26 80 30 22 22 60-6 40-44 50Z" fill="${C.paper}" opacity=".0"/>
<circle cx="204" cy="230" r="9" fill="${C.navy}"/><circle cx="262" cy="230" r="9" fill="${C.navy}"/><path d="m224 250 16 0-8 11Z" fill="${C.red}" ${S3}/>
<g class="yarn"><circle cx="352" cy="300" r="40" fill="${C.red}" ${S}/><path d="M318 288q34 18 68 0M316 306q36 20 72 2M326 324q26 14 54-2" fill="none" stroke="${C.navy}" stroke-width="3"/></g>
<path class="thread" d="M312 296Q270 330 246 296T178 322" fill="none" stroke="${C.red}" stroke-width="4" stroke-linecap="round"/>
<g class="needle" transform="rotate(-24 150 330)"><path d="M92 330h118" stroke="#201b4a" stroke-width="6" stroke-linecap="round"/><ellipse cx="204" cy="330" rx="6" ry="3.2" fill="${C.paper}" ${S3}/></g>` });

// ------------------------------------------------------------------ 6. CANDY PAINTING
export const candy = () => {
  const bar = (x, col, deco) => `<g class="lolly" transform="translate(${x} 0)"><path d="M0 150v150" stroke="#201b4a" stroke-width="10" stroke-linecap="round"/><path d="M0 150v150" stroke="${C.paper}" stroke-width="4" stroke-linecap="round"/><rect x="-44" y="40" width="88" height="130" rx="22" fill="${col}" ${S}/>${deco}</g>`;
  return { vb: '0 0 440 380', body: `${shadow(220, 360, 180, 12)}
<path d="M30 296h380l-22 56H52Z" fill="${C.paper}" ${S}/><path d="M60 296v-14m120 14v-14m120 14v-14m60 14v-14" stroke="#201b4a" stroke-width="4" opacity=".4"/>
${bar(110, C.red, `<path class="paint" d="M-30 64l60 0m-60 28 60 0m-60 28 60 0" stroke="${C.yel}" stroke-width="9" stroke-linecap="round"/>`)}
${bar(220, C.teal, `<g fill="${C.paper}"><circle cx="-18" cy="70" r="8"/><circle cx="14" cy="64" r="8"/><circle cx="-6" cy="100" r="8"/><circle cx="22" cy="106" r="8"/><circle cx="-20" cy="136" r="8"/><circle cx="10" cy="140" r="8"/></g>`)}
${bar(330, C.grn, `<path class="paint" d="M-32 60l16 22 16-22 16 22 16-22M-32 98l16 22 16-22 16 22 16-22M-32 136l16 22 16-22 16 22 16-22" fill="none" stroke="${C.yel}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`)}
<g class="spark s1"><use href="#sparkle" x="40" y="30" width="34" height="34"/></g><g class="spark s2"><use href="#sparkle" x="360" y="14" width="40" height="40"/></g><g class="spark s3"><use href="#sparkle" x="190" y="6" width="28" height="28"/></g>` };
};

// ------------------------------------------------------------------ 7. BOOKBINDING NOTEBOOK (also the workshop hero object)
export const notebook = () => ({ vb: '0 0 520 380', body: `${shadow(260, 354, 220, 14)}
<path d="M30 110 260 150 490 110v200L260 350 30 310Z" fill="${C.blu}" ${S}/>
<path d="M46 98 260 134V330L46 292Z" fill="${C.paper}" ${S}/><path d="M474 98 260 134V330l214-38Z" fill="${C.paper}" ${S}/>
<path d="M70 150 236 178m-166 22 166 28m-166 22 166 28" stroke="${C.blu}" stroke-width="4" opacity=".35" fill="none"/><path d="m284 178 166-28m-166 50 166-28" stroke="${C.blu}" stroke-width="4" opacity=".35" fill="none"/>
<path class="spine" d="M260 134V330" stroke="#201b4a" stroke-width="5"/>
<g class="sewing" stroke="${C.red}" stroke-width="6" stroke-linecap="round" fill="none"><path d="M246 160h28m-28 36h28m-28 36h28m-28 36h28m-28 36h28" /><path d="M260 142v178" stroke-dasharray="14 12"/></g>
<g transform="translate(396 240) rotate(-28)"><rect x="0" y="0" width="150" height="26" rx="13" fill="${C.paper}" ${S}/><path d="M18 13h110" stroke="${C.navy}" stroke-width="3" opacity=".3"/></g>
<g class="needle" transform="translate(66 300) rotate(-16)"><path d="M0 0h110" stroke="#201b4a" stroke-width="6" stroke-linecap="round"/><ellipse cx="104" cy="0" rx="6" ry="3" fill="${C.paper}" ${S3}/><path d="M104 0q40 20 90 6" fill="none" stroke="${C.red}" stroke-width="4"/></g>` });

// ------------------------------------------------------------------ KIT CONTENTS ICONS
export const markers = () => {
  const m = (a, col) => `<g transform="rotate(${a} 150 190)"><rect x="132" y="30" width="36" height="150" rx="10" fill="${col}" ${S4}/><rect x="132" y="30" width="36" height="34" rx="10" fill="${C.paper}" ${S4}/><path d="M140 30l10-28 10 28Z" fill="${C.navy}"/><path d="M142 90v64" stroke="${C.paper}" stroke-width="5" opacity=".7"/></g>`;
  return { vb: '0 0 300 220', body: `${shadow(150, 206, 100, 8)}${m(-34, C.teal)}${m(-17, C.grn)}${m(0, C.red)}${m(17, C.yel)}${m(34, C.blu)}` };
};
export const scissors = () => ({ vb: '0 0 260 240', body: `${shadow(130, 224, 90, 8)}<path d="m118 124 96-96" stroke="#201b4a" stroke-width="22" stroke-linecap="round"/><path d="m118 124 96-96" stroke="${C.paper}" stroke-width="9" stroke-linecap="round"/><path d="m142 124-96-96" stroke="#201b4a" stroke-width="22" stroke-linecap="round"/><path d="m142 124-96-96" stroke="#d8dbe6" stroke-width="9" stroke-linecap="round"/><circle cx="66" cy="178" r="34" fill="${C.red}" ${S}/><circle cx="66" cy="178" r="17" fill="${C.paper}" ${S4}/><circle cx="194" cy="178" r="34" fill="${C.red}" ${S}/><circle cx="194" cy="178" r="17" fill="${C.paper}" ${S4}/><path d="M92 150l30-30m46 30-30-30" stroke="#201b4a" stroke-width="12" stroke-linecap="round"/><circle cx="130" cy="124" r="7" fill="${C.yel}" ${S4}/>` });
export const folder = () => ({ vb: '0 0 300 160', body: `${shadow(150, 146, 110, 8)}<path d="M20 100q0-34 40-40l170-34q50-8 56 22 4 28-30 40L70 126q-50 10-50-26Z" fill="${C.paper}" ${S}/><path d="M60 100l180-34" stroke="${C.blu}" stroke-width="4" opacity=".4"/><circle cx="262" cy="52" r="8" fill="${C.red}" ${S4}/>` });
export const glue = () => ({ vb: '0 0 180 280', body: `${shadow(90, 266, 60, 8)}<path d="M60 20h60l8 54H52Z" fill="${C.red}" ${S}/><path d="M74 20v-14h32v14" fill="${C.paper}" ${S4}/><path d="M44 74h92l6 176q0 12-12 12H50q-12 0-12-12Z" fill="${C.paper}" ${S}/><rect x="52" y="116" width="76" height="86" rx="10" fill="${C.teal}" ${S4}/><path d="M72 160l12 18 20-30" fill="none" stroke="${C.paper}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>` });
export const passport = () => ({ vb: '0 0 240 320', body: `${shadow(120, 306, 84, 8)}<rect x="30" y="12" width="180" height="284" rx="14" fill="${C.red}" ${S}/><rect x="42" y="12" width="12" height="284" fill="#c92d1a"/><circle cx="130" cy="108" r="46" fill="none" stroke="${C.yel}" stroke-width="6"/><path d="m130 78 9 21 22 2-17 14 5 22-19-12-19 12 5-22-17-14 22-2Z" fill="${C.yel}"/><text x="130" y="206" text-anchor="middle" font-family="Arial,sans-serif" font-weight="900" font-size="20" letter-spacing="3" fill="${C.yel}">PASSPORT</text><path d="M84 240h92" stroke="${C.yel}" stroke-width="5" stroke-linecap="round"/>` });
export const avatars = () => {
  const f = (x, y, col, mood) => `<g transform="translate(${x} ${y})"><circle r="38" fill="${col}" stroke="${C.paper}" stroke-width="9"/><circle r="38" fill="none" ${S4}/><circle cx="-12" cy="-6" r="5" fill="${C.navy}"/><circle cx="12" cy="-6" r="5" fill="${C.navy}"/>${mood ? `<path d="M-14 12q14 14 28 0" fill="none" ${S4}/>` : `<ellipse cx="0" cy="16" rx="8" ry="6" fill="${C.navy}"/>`}</g>`;
  return { vb: '0 0 280 240', body: `${shadow(140, 226, 110, 8)}<rect x="20" y="16" width="240" height="200" rx="14" fill="${C.paper}" ${S}/>${f(80, 72, C.yel, 1)}${f(190, 72, C.teal, 0)}${f(80, 160, C.grn, 0)}${f(190, 160, C.red, 1)}` };
};
export const stickers = () => {
  const s = (x, y, d, col) => `<g transform="translate(${x} ${y})"><path d="${d}" fill="${col}" stroke="${C.paper}" stroke-width="8" stroke-linejoin="round"/><path d="${d}" fill="${col}" ${S4}/></g>`;
  return { vb: '0 0 300 220', body: `${shadow(150, 206, 110, 8)}<rect x="16" y="14" width="268" height="186" rx="14" fill="${C.paper}" ${S}/>${s(70, 70, 'M0-30l9 22 22 2-17 14 5 22-19-12-19 12 5-22-17-14 22-2Z', C.yel)}${s(150, 66, 'M-26 24a30 30 0 1 1 52 0Z', C.red)}${s(228, 70, 'M0-30 28 0 0 30-28 0Z', C.teal)}${s(70, 150, 'M-28 20v-16a28 28 0 0 1 56 0v16Z', C.grn)}${s(150, 150, 'M0-26a26 26 0 1 0 0.1 0Z', C.blu)}${s(228, 150, 'M-30 16 0-24 30 16Z', C.red)}` };
};
export const gems = () => {
  const g = (x, y, s, col) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-22-8 0-26 22-8 0 26Z" fill="${col}" ${S4}/><path d="M-22-8h44M0-26 -8-8 0 26 8-8Z" fill="none" stroke="${C.paper}" stroke-width="3" opacity=".8"/></g>`;
  return { vb: '0 0 300 220', body: `${shadow(150, 206, 110, 8)}${g(80, 120, 2, C.red)}${g(170, 100, 1.4, C.teal)}${g(220, 150, 1.8, C.grn)}${g(130, 168, 1.1, C.yel)}${g(60, 56, 0.9, C.blu)}<g transform="translate(236 64)"><use href="#flower-red" x="-24" y="-24" width="48" height="48"/></g>` };
};
export const mantap = () => ({ vb: '0 0 320 320', body: `${shadow(160, 304, 120, 10)}<path d="M40 290V130L160 30l120 100v160Z" fill="${C.yel}" ${S}/><path d="M72 290V142L160 66l88 76v148Z" fill="${C.red}" ${S}/><path d="M100 290V152L160 98l60 54v138Z" fill="${C.teal}" ${S4}/><path d="M64 118l96-84 96 84" fill="none" stroke="${C.paper}" stroke-width="6"/><circle cx="160" cy="68" r="8" fill="${C.paper}" ${S4}/><path d="M60 290h200" stroke="#201b4a" stroke-width="8" stroke-linecap="round"/>` });
export const comic = () => ({ vb: '0 0 240 320', body: `${shadow(120, 306, 86, 8)}<rect x="26" y="12" width="190" height="288" rx="12" fill="${C.teal}" ${S}/><rect x="40" y="26" width="162" height="262" rx="6" fill="${C.paper}" ${S4}/><path d="M56 40h130v110H56Z" fill="${C.yel}" ${S4}/><circle cx="121" cy="95" r="34" fill="${C.red}" ${S4}/><path d="M104 88q-22-8-26 10M138 88q22-8 26 10" fill="none" ${S4}/><path d="M117 100q4 22 10 0" fill="none" ${S4}/><path d="M56 166h60v42H56Zm70 0h60v42h-60ZM56 218h130v50H56Z" fill="${C.paper}" ${S4}/><path d="M72 238l18-14 18 14" fill="${C.grn}" ${S4}/>` });

// ------------------------------------------------------------------ HANDS + ENVELOPE + BASKET
export const hands = () => ({ vb: '0 0 650 520', body: `<path d="M71 450 28 297l-25-75q-8-28 17-33 20-2 35 31l40 56-18-147q-4-27 19-30 25-2 30 29l17 116 4-173q1-28 25-28 26 1 25 31l-1 168 29-139q6-26 29-20 21 7 15 34l-19 138 41-93q12-25 33-13 18 13 5 39l-46 151-50 114Z" fill="${C.red}" stroke="#201b4a" stroke-width="6" stroke-linejoin="round"/><path d="M579 454l43-153 25-75q8-28-17-33-20-2-35 31l-40 56 18-147q4-27-19-30-25-2-30 29l-17 116-4-173q-1-28-25-28-26 1-25 31l1 168-29-139q-6-26-29-20-21 7-15 34l19 138-41-93q-12-25-33-13-18 13-5 39l46 151 50 114Z" fill="${C.yel}" stroke="#201b4a" stroke-width="6" stroke-linejoin="round"/><g class="piece-a"><path d="m204 298 119-184 120 184-120 103Z" fill="${C.teal}" stroke="#201b4a" stroke-width="6" stroke-linejoin="round"/><path d="m323 114 120 184-120 9Z" fill="${C.blu}"/></g><g class="piece-b"><circle cx="324" cy="212" r="79" fill="${C.grn}" stroke="#201b4a" stroke-width="6"/><path d="m324 123 19 57 60-18-35 49 49 36-60-1-2 61-34-50-51 34 21-57-58-20 59-17Z" fill="${C.yel}" ${S}/></g>` });
export const envelope = (col = C.yel) => ({ vb: '0 0 300 220', body: `${shadow(150, 208, 120, 8)}<path d="M20 40h260v160H20Z" fill="${C.paper}" ${S}/><path class="env-flap" d="M20 40 150 130 280 40Z" fill="${col}" ${S}/><path d="m20 200 100-82m160 82-100-82" fill="none" ${S4}/>` });
export const basket = () => ({ vb: '0 0 320 300', body: `${shadow(160, 286, 120, 10)}<path d="M80 120q0-80 80-80t80 80" fill="none" stroke="#201b4a" stroke-width="12" stroke-linecap="round"/><path d="M80 120q0-80 80-80t80 80" fill="none" stroke="${C.yel}" stroke-width="5" stroke-linecap="round"/><path d="M30 120h260l-22 156H52Z" fill="${C.red}" ${S}/><path d="M60 120l12 156m44-156 6 156m44-156v156m44-156-6 156m44-156-12 156" stroke="#201b4a" stroke-width="4" opacity=".35"/><path d="M30 120h260" stroke="${C.paper}" stroke-width="10"/>` });
export const sparkle = () => ({ vb: '0 0 60 60', body: `<path d="m30 2 6 20 22 8-22 8-6 20-6-20L2 30l22-8Z" fill="${C.yel}" ${S3}/>` });

// registry used by the gallery and by activity widgets
export const activityArt = { ferris, shooter, leopard, kaleido, stitch, candy, truck };
export const kitArt = { markers, scissors, folder, glue, passport, avatars };
export const paintArt = { ganesha, markers, stickers, gems, glue, mantap, comic };
