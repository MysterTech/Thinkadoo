// Scenery and furniture: stalls, tents, curtains, hills, bunting, tables, shelves, silhouettes.
// Same grammar as art-objects.mjs (flat fills, deep-blue outline, no gradients).
import { C } from './art-objects.mjs';

const S = 'stroke="#201b4a" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"';
const S4 = 'stroke="#201b4a" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"';
const S3 = 'stroke="#201b4a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';

// ------------------------------------------------------------------ STALLS
export const stall = ({ awning = C.red, goods = 'games', trim = C.paper } = {}) => {
  let g = '';
  if (goods === 'games') g = `<g><path d="M96 232V150m60 82V132m60 100V160" stroke="#201b4a" stroke-width="3"/><circle cx="96" cy="136" r="22" fill="${C.teal}" ${S4}/><circle cx="156" cy="116" r="24" fill="${C.yel}" ${S4}/><circle cx="216" cy="144" r="21" fill="${C.red}" ${S4}/><path d="M86 130q4-10 12-10M146 110q4-10 14-10" fill="none" stroke="${C.paper}" stroke-width="4" opacity=".8"/></g>`;
  if (goods === 'sweets') g = [0, 1, 2].map((i) => `<g transform="translate(${64 + i * 70} 176)"><rect x="0" y="0" width="52" height="56" rx="10" fill="${[C.paper, C.paper, C.paper][i]}" ${S4}/><rect x="6" y="20" width="40" height="30" rx="6" fill="${[C.red, C.yel, C.grn][i]}"/><rect x="-2" y="-12" width="56" height="16" rx="6" fill="${[C.teal, C.red, C.blu][i]}" ${S4}/></g>`).join('');
  if (goods === 'art') g = `<g><path d="M110 232l30-110m30 110-30-110m60 110-20-120" stroke="#201b4a" stroke-width="6" stroke-linecap="round"/><rect x="104" y="104" width="116" height="84" rx="6" fill="${C.paper}" ${S}/><circle cx="144" cy="144" r="18" fill="${C.red}"/><path d="m170 176 22-44 20 44Z" fill="${C.teal}"/><circle cx="196" cy="124" r="8" fill="${C.yel}"/></g>`;
  if (goods === 'books') g = `<g><rect x="70" y="204" width="110" height="28" rx="4" fill="${C.teal}" ${S4}/><rect x="80" y="178" width="100" height="26" rx="4" fill="${C.yel}" ${S4}/><rect x="74" y="152" width="96" height="26" rx="4" fill="${C.red}" ${S4}/><rect x="196" y="160" width="34" height="72" rx="4" fill="${C.grn}" ${S4}/></g>`;
  if (goods === 'shrine') g = `<g><path d="M110 232V150a50 50 0 0 1 100 0v82Z" fill="${C.blu}" ${S4}/><path d="M124 232V154a36 36 0 0 1 72 0v78Z" fill="${C.yel}" ${S3}/><circle cx="160" cy="150" r="13" fill="${C.red}" ${S3}/></g>`;
  const k = 284 / 196;
  const bx = (i) => 8 + 28 * i * k, tx = (i) => 52 + 28 * i;
  const segs = Array.from({ length: 7 }, (_, i) => `<path d="M${tx(i)} 26H${tx(i + 1)}L${bx(i + 1).toFixed(1)} 100H${bx(i).toFixed(1)}Z" fill="${i % 2 ? trim : awning}"/>`).join('');
  const arcs = Array.from({ length: 7 }, (_, i) => `<path d="M${bx(i).toFixed(1)} 100a${(14 * k).toFixed(1)} ${(14 * k).toFixed(1)} 0 0 0 ${(28 * k).toFixed(1)} 0Z" fill="${i % 2 ? trim : awning}" ${S4}/>`).join('');
  return { vb: '0 0 300 320', body: `<ellipse cx="150" cy="304" rx="132" ry="11" fill="#201b4a" opacity=".17"/>
<rect x="26" y="96" width="14" height="206" fill="${C.yel}" ${S4}/><rect x="260" y="96" width="14" height="206" fill="${C.yel}" ${S4}/>
<rect x="18" y="228" width="264" height="74" rx="6" fill="${C.yel}" ${S}/><path d="M32 258h236" stroke="${awning}" stroke-width="10"/><path d="M32 276h236" stroke="${C.paper}" stroke-width="4"/>
${g}
${segs}<path d="M8 100 52 26h196l44 74Z" fill="none" ${S}/>${arcs}
<path d="M124 26 150 6l26 20Z" fill="${C.yel}" ${S4}/>` };
};

export const tent = ({ a = C.yel, b = C.red } = {}) => ({ vb: '0 0 240 280', body: `<ellipse cx="120" cy="266" rx="100" ry="9" fill="#201b4a" opacity=".17"/>
<path d="M20 268V120h200v148Z" fill="${C.paper}" ${S}/><path d="M20 120 120 20l100 100Z" fill="${a}" ${S}/><path d="M120 20 92 120m28-100 28 100M62 80l-22 40m138-40 22 40" stroke="${b}" stroke-width="12" stroke-linecap="butt"/><path d="M20 120 120 20l100 100Z" fill="none" ${S}/>
<path d="M120 20V2" stroke="#201b4a" stroke-width="5"/><path d="m120 2 30 10-30 10Z" fill="${C.red}" ${S4}/>
<path d="M90 268v-78a30 30 0 0 1 60 0v78Z" fill="${C.blu}" ${S4}/><path d="M20 150h200" stroke="${b}" stroke-width="10"/>
<g fill="${b}"><circle cx="46" cy="190" r="9"/><circle cx="194" cy="190" r="9"/><circle cx="46" cy="228" r="9"/><circle cx="194" cy="228" r="9"/></g>` });

// ------------------------------------------------------------------ SKY / GROUND
export const cloud = () => ({ vb: '0 0 220 100', body: `<path d="M26 88q-22 0-22-22t24-24q4-30 36-30 18 0 28 14 10-18 34-18 30 0 36 26 28 2 30 28 0 26-26 26Z" fill="${C.paper}" ${S4}/>` });
export const hills = ({ w = 1600, h = 220, color = C.grn, r = 120, stroke = true } = {}) => {
  let d = `M0 ${h}V${h * 0.55}`;
  const n = Math.ceil(w / (r * 2)) + 1;
  for (let i = 0; i < n; i++) d += `a${r} ${r * 0.62} 0 0 1 ${r * 2} 0`;
  d += `V${h}Z`;
  return { vb: `0 0 ${w} ${h}`, body: `<path d="${d}" fill="${color}" ${stroke ? S : ''}/>` };
};
export const bunting = ({ w = 1200, sag = 70, n = 14, colors = [C.red, C.yel, C.teal, C.paper, C.grn] } = {}) => {
  let flags = '';
  const pt = (t) => [t * w, 8 + 4 * sag * t * (1 - t)];
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n, [x, y] = pt(t), fw = Math.min(46, (w / n) * 0.72);
    const ang = Math.atan(4 * sag * (1 - 2 * t) / w) * 180 / Math.PI;
    flags += `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${ang.toFixed(1)})"><path d="M${-fw / 2} 0h${fw}l${-fw / 2} ${fw * 1.15}Z" fill="${colors[i % colors.length]}" ${S3}/></g>`;
  }
  return { vb: `0 0 ${w} ${sag + 80}`, body: `<path d="M0 8Q${w / 2} ${8 + 2 * sag} ${w} 8" fill="none" ${S4}/>${flags}` };
};
export const bulbs = ({ w = 1200, n = 18 } = {}) => {
  let b = '';
  for (let i = 0; i < n; i++) { const x = (i + 0.5) * (w / n); b += `<circle cx="${x.toFixed(1)}" cy="${(14 + 14 * Math.sin(i * 0.9)).toFixed(1)}" r="9" fill="${[C.yel, C.paper][i % 2]}" ${S3}/>`; }
  return { vb: `0 0 ${w} 50`, body: `<path d="M0 12Q${w / 4} 36 ${w / 2} 14T${w} 12" fill="none" ${S3}/>${b}` };
};

// ------------------------------------------------------------------ THEATRE
export const curtain = (side = 'l') => {
  const m = side === 'l' ? 1 : -1, x = (v) => (side === 'l' ? v : 420 - v);
  return { vb: '0 0 420 900', body: `<path d="M${x(0)} 0H${x(380)}Q${x(430)} 260 ${x(340)} 520 ${x(290)} 720 ${x(340)} 900H${x(0)}Z" fill="${C.red}" ${S}/>
<path d="M${x(70)} 0Q${x(110)} 400 ${x(60)} 900M${x(150)} 0Q${x(200)} 420 ${x(150)} 900M${x(230)} 0Q${x(290)} 400 ${x(240)} 760M${x(310)} 0Q${x(370)} 360 ${x(320)} 640" fill="none" stroke="#c92d1a" stroke-width="22" stroke-linecap="round"/>
<path d="M${x(70)} 0Q${x(110)} 400 ${x(60)} 900M${x(230)} 0Q${x(290)} 400 ${x(240)} 760" fill="none" stroke="${C.yel}" stroke-width="3" opacity=".55"/>
<path d="M${x(0)} 560 ${x(250)} 590" stroke="${C.yel}" stroke-width="22" stroke-linecap="round"/><path d="M${x(0)} 560 ${x(250)} 590" stroke="#201b4a" stroke-width="4" stroke-linecap="round" opacity=".7"/>
<path d="M${x(246)} 590v54l${m * -12} 16h${m * 24}l${m * -12}-16" fill="${C.yel}" ${S4}/>` };
};
export const pelmet = () => ({ vb: '0 0 1600 150', body: `<path d="M0 0H1600V84Q1560 150 1520 84T1440 84 1360 84 1280 84 1200 84 1120 84 1040 84 960 84 880 84 800 84 720 84 640 84 560 84 480 84 400 84 320 84 240 84 160 84 80 84 0 84Z" fill="${C.red}" ${S}/><path d="M0 40H1600" stroke="${C.yel}" stroke-width="14"/><path d="M0 40H1600" stroke="#201b4a" stroke-width="3" opacity=".6"/>` });
export const footlights = ({ w = 1600 } = {}) => {
  let b = '';
  for (let i = 0; i < 16; i++) b += `<g transform="translate(${60 + i * ((w - 120) / 15)} 0)"><path d="M-18 40a18 18 0 0 1 36 0Z" fill="#201b4a"/><circle cx="0" cy="30" r="9" fill="${C.yel}" ${S3}/></g>`;
  return { vb: `0 0 ${w} 60`, body: `<path d="M0 40H${w}V60H0Z" fill="#201b4a"/>${b}` };
};
export const stageFloor = ({ w = 1600, h = 160, color = '#e9d3a3' } = {}) => ({ vb: `0 0 ${w} ${h}`, body: `<path d="M0 ${h * 0.32}Q${w / 2} 0 ${w} ${h * 0.32}V${h}H0Z" fill="${color}" ${S}/><path d="M${w * 0.1} ${h * 0.7}H${w * 0.9}" stroke="${C.paper}" stroke-width="6" stroke-dasharray="40 26" stroke-linecap="round"/>` });

// ------------------------------------------------------------------ FURNITURE (playroom, workshop)
export const shelf = ({ w = 640 } = {}) => ({ vb: `0 0 ${w} 76`, body: `<path d="M24 28v46l26-16V28Zm${w - 74} 0v30l26 16V28Z" fill="${C.blu}" ${S4}/><rect x="0" y="0" width="${w}" height="30" rx="8" fill="${C.yel}" ${S}/><path d="M16 12h${w - 32}" stroke="${C.paper}" stroke-width="4" opacity=".7"/>` });
export const jar = (col = C.red) => ({ vb: '0 0 80 110', body: `<rect x="10" y="26" width="60" height="78" rx="14" fill="${C.paper}" ${S4}/><rect x="16" y="52" width="48" height="46" rx="8" fill="${col}"/><rect x="6" y="8" width="68" height="22" rx="8" fill="${C.teal}" ${S4}/>` });
export const books = () => ({ vb: '0 0 220 120', body: `<rect x="4" y="30" width="34" height="90" rx="4" fill="${C.red}" ${S4}/><rect x="40" y="10" width="30" height="110" rx="4" fill="${C.teal}" ${S4}/><rect x="72" y="36" width="40" height="84" rx="4" fill="${C.yel}" ${S4}/><path d="M122 114 108 36l38-8 22 82Z" fill="${C.grn}" ${S4}/><rect x="178" y="22" width="36" height="98" rx="4" fill="${C.blu}" ${S4}/><path d="M12 54h18m-18 12h18M48 34h14m-14 12h14" stroke="${C.paper}" stroke-width="3"/>` });
export const plant = () => ({ vb: '0 0 140 200', body: `<path d="M40 110h60l-8 80H48Z" fill="${C.red}" ${S}/><path d="M36 110h68" stroke="${C.yel}" stroke-width="12"/><path d="M70 110q-48-20-44-84 40 16 44 84Zm0 0q40-30 44-96-44 24-44 96Zm0 0q-6-40 6-86 18 38-6 86Z" fill="${C.grn}" ${S4}/>` });
export const pendant = ({ col = C.yel } = {}) => ({ vb: '0 0 120 260', body: `<path d="M60 0v150" stroke="#201b4a" stroke-width="5"/><path d="M14 210q0-60 46-60t46 60Z" fill="${col}" ${S}/><circle cx="60" cy="218" r="14" fill="${C.paper}" ${S4}/>` });
let wid = 0;
export const windowRound = () => { const id = `wclip${++wid}`; return { vb: '0 0 460 460', body: `<clipPath id="${id}"><circle cx="230" cy="230" r="188"/></clipPath><circle cx="230" cy="230" r="214" fill="${C.paper}" ${S}/><circle cx="230" cy="230" r="188" fill="${C.teal}"/><g clip-path="url(#${id})"><path d="M30 300q60-60 120 0t120 0 120 0 60 16V460H30Z" fill="${C.grn}" ${S4}/></g><circle cx="330" cy="140" r="34" fill="${C.yel}" ${S4}/><path d="M230 42v376M42 230h376" stroke="${C.paper}" stroke-width="12"/><path d="M230 42v376M42 230h376" stroke="#201b4a" stroke-width="3" opacity=".5"/><circle cx="230" cy="230" r="188" fill="none" ${S}/>` }; };
export const rug = ({ col = C.grn } = {}) => ({ vb: '0 0 700 120', body: `<ellipse cx="350" cy="64" rx="330" ry="48" fill="${col}" ${S}/><ellipse cx="350" cy="64" rx="270" ry="34" fill="none" stroke="${C.paper}" stroke-width="6" stroke-dasharray="26 18"/><ellipse cx="350" cy="64" rx="200" ry="22" fill="none" stroke="${C.yel}" stroke-width="5"/>` });
export const table = () => ({ vb: '0 0 900 240', body: `<path d="M60 30h780l40 40H20Z" fill="${C.yel}" ${S}/><path d="M20 70h860v40H20Z" fill="${C.red}" ${S}/><path d="M20 90h860" stroke="${C.paper}" stroke-width="5" stroke-dasharray="22 14"/><path d="M80 110v120m740-120v120" stroke="#201b4a" stroke-width="22" stroke-linecap="round"/><path d="M80 110v120m740-120v120" stroke="${C.blu}" stroke-width="10" stroke-linecap="round"/>` });
export const boothWindow = () => ({ vb: '0 0 760 520', body: `<path d="M20 140 380 20l360 120v370H20Z" fill="${C.red}" ${S}/><path d="M20 140 380 20l360 120Z" fill="${C.yel}" ${S}/><path d="M120 320h520v190H120Z" fill="${C.blu}" ${S}/><rect x="120" y="190" width="520" height="130" rx="10" fill="${C.paper}" ${S}/><path d="M60 330h640v32H60Z" fill="${C.yel}" ${S}/><rect x="170" y="220" width="420" height="70" rx="8" fill="${C.teal}" ${S4}/><g fill="${C.paper}"><circle cx="110" cy="160" r="9"/><circle cx="190" cy="136" r="9"/><circle cx="270" cy="112" r="9"/><circle cx="350" cy="88" r="9"/><circle cx="410" cy="88" r="9"/><circle cx="490" cy="112" r="9"/><circle cx="570" cy="136" r="9"/><circle cx="650" cy="160" r="9"/></g>` });
export const signpost = ({ text = '' } = {}) => ({ vb: '0 0 360 200', body: `<path d="M178 190V60" stroke="#201b4a" stroke-width="12" stroke-linecap="round"/><path d="M20 24h280l36 36-36 36H20Z" fill="${C.yel}" ${S}/><path d="M32 40h250" stroke="${C.red}" stroke-width="5" stroke-dasharray="14 10"/>` });

// ------------------------------------------------------------------ PEOPLE (silhouettes: navy, no skin-tone assumptions)
export const kid = ({ shirt = C.red, h = 1 } = {}) => ({ vb: '0 0 90 190', body: `<circle cx="45" cy="30" r="22" fill="#201b4a"/><path d="M45 56q-26 0-30 32l-4 52h68l-4-52q-4-32-30-32Z" fill="#201b4a"/><path d="M28 100h34v36H28Z" fill="${shirt}" opacity=".0"/><path d="M26 140v44h14v-44m10 0v44h14v-44" fill="#201b4a"/><path d="M15 90 4 128m71-38 11 38" stroke="#201b4a" stroke-width="10" stroke-linecap="round"/>` });
export const kidWave = ({ shirt = C.yel } = {}) => ({ vb: '0 0 110 200', body: `<circle cx="55" cy="32" r="22" fill="#201b4a"/><path d="M55 58q-28 0-32 32l-4 54h72l-4-54q-4-32-32-32Z" fill="#201b4a"/><path d="M34 148v44h14v-44m18 0v44h14v-44" fill="#201b4a"/><path d="M22 92 8 134" stroke="#201b4a" stroke-width="10" stroke-linecap="round"/><path d="M88 90 104 40" stroke="#201b4a" stroke-width="10" stroke-linecap="round"/>` });
