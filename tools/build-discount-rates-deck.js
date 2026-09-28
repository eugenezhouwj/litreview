// Builds reviews/discount-rates-summary.pptx from the §1 summary table in
// reviews/discount-rates.md plus the APA list in tools/references-apa.js.
// Run: NODE_PATH=<dir with node_modules containing pptxgenjs> node tools/build-discount-rates-deck.js
const fs = require("fs");
const path = require("path");
const pptxgen = require("pptxgenjs");
const JSZip = require("jszip"); // bundled with pptxgenjs
const refs = require("./references-apa.js");

const ROOT = path.join(__dirname, "..");
const MD = fs.readFileSync(path.join(ROOT, "reviews/discount-rates.md"), "utf8");
const OUT = path.join(ROOT, "reviews/discount-rates-summary.pptx");

// Palette: deep ink navy dominant, pale slate tint, amber accent (money / time).
const C = {
  navy: "14213D", ink: "1F2A44", slate: "5B6B82", tint: "EEF2F7", line: "C9D3E0",
  amber: "E09F3E", amberDk: "B5701B", white: "FFFFFF", ice: "C9D6EA",
};
const HEAD = "Cambria", BODY = "Calibri";

// ---------- parse the §1 summary table ----------
function parseSummary(md) {
  const sec = md.slice(md.indexOf("## 1. Summary"), md.indexOf("**Four points apply"));
  const rows = sec.split("\n").filter((l) => /^\| (\*\*\d|\| )/.test(l) || /^\| \|/.test(l));
  let ctx = "";
  return rows.map((l) => {
    const cells = l.trim().replace(/^\|/, "").replace(/\|$/, "").split(" | ").map((c) => c.trim());
    if (cells[0]) ctx = cells[0].replace(/\*\*/g, "");
    return { ctx, sub: cells[1], what: cells[2], meaning: cells[3], est: cells[4], sg: cells[5] };
  });
}

// "**bold** and *italic* text" -> runs
function runs(s, base) {
  s = s.replace(/&nbsp;/g, "");
  const out = [];
  s.split(/(\*\*[^*]+\*\*|(?<!\\)\*[^*\s][^*]*\*)/).forEach((p) => {
    if (!p) return;
    const bold = p.startsWith("**"), ital = !bold && p.startsWith("*");
    const text = (bold ? p.slice(2, -2) : ital ? p.slice(1, -1) : p).replace(/\\\*/g, "*");
    out.push({ text, options: { ...base, bold: bold || !!base.bold, italic: ital } });
  });
  return out;
}

// cell markdown ("<br>"-separated, "• " bullets, "&nbsp;&nbsp;" sub-bullets) -> pptxgenjs text array
function cellText(md, base = {}) {
  const lines = md.split("<br>").map((x) => x.trim()).filter(Boolean);
  const out = [];
  lines.forEach((line, i) => {
    let opts = { ...base };
    if (line.startsWith("• ")) { line = line.slice(2); opts.bullet = { indent: 9 }; }
    else if (line.startsWith("&nbsp;&nbsp;")) { opts.bullet = { indent: 9 }; opts.indentLevel = 1; }
    const r = runs(line, {});
    r[0].options = { ...r[0].options, ...opts };
    if (i < lines.length - 1) r[r.length - 1].options.breakLine = true;
    out.push(...r);
  });
  return out;
}

const rows = parseSummary(MD);
const groups = [];
rows.forEach((r) => {
  const key = r.ctx.startsWith("6.") ? "5. Macroeconomics" : r.ctx;
  let g = groups.find((x) => x.key === key);
  if (!g) groups.push((g = { key, rows: [] }));
  g.rows.push(r);
});

const META = {
  "1. Public policy": {
    title: "Public policy & cost-benefit analysis",
    take: "Official rates fall into two camps: ~1.5–3.5% (social time preference) vs ~7–8% (opportunity cost of capital). Singapore publishes no general rate.",
  },
  "2. Individual time preference": {
    title: "Individual time preference",
    take: "Measured personal rates sit far above market rates, largely because they bundle impatience with credit constraints, uncertainty and study design.",
  },
  "3. Corporate finance and asset pricing": {
    title: "Corporate finance & asset pricing",
    take: "Firms apply hurdle rates well above their cost of capital; Singapore's equity risk premium equals the mature-market level (~4.2%).",
  },
  "4. Real estate": {
    title: "Real estate: housing, commercial, industrial",
    take: "Rates fall with horizon (<2.6% for claims 100+ years out); Singapore valuers use ~6.5–7.25% for commercial DCFs and cap rates of ~3–6%.",
  },
  "5. Macroeconomics": {
    title: "Macroeconomics & monetary policy",
    take: "Three different ideas share the name: model patience (ρ ≈ 4%), the neutral real rate (US <1%), and central-bank lending rates (Fed 4.00%).",
  },
};

// ---------- deck ----------
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5
pres.title = "Discount rates across contexts";
const W = 13.33, M = 0.5;

function footer(slide, n, text) {
  slide.addText(text, { x: M, y: 7.05, w: W - 2 * M - 0.6, h: 0.3, fontFace: BODY, fontSize: 8.5, color: C.slate, margin: 0, isTextBox: true });
  slide.addText(String(n), { x: W - M - 0.5, y: 7.05, w: 0.5, h: 0.3, fontFace: BODY, fontSize: 8.5, color: C.slate, align: "right", margin: 0, isTextBox: true });
}
let page = 0;

// 1. Title slide
{
  const s = pres.addSlide(); page++;
  s.background = { color: C.navy };
  s.addText("LITERATURE REVIEW  ·  SUMMARY TABLE", { x: M + 0.1, y: 0.8, w: 6.5, h: 0.4, fontFace: BODY, fontSize: 12, color: C.amber, bold: true, charSpacing: 2, margin: 0, isTextBox: true });
  s.addText("Discount rates across contexts", { x: M + 0.1, y: 1.3, w: 6.4, h: 1.7, fontFace: HEAD, fontSize: 40, bold: true, color: C.white, margin: 0, valign: "top", isTextBox: true });
  s.addText("What is discounted, what the rate means, and what the literature finds — with Singapore evidence", { x: M + 0.1, y: 3.15, w: 6.0, h: 1.0, fontFace: BODY, fontSize: 16, color: C.ice, margin: 0, valign: "top", isTextBox: true });
  s.addText("Draft v3  ·  28 September 2026  ·  Source: reviews/discount-rates.md", { x: M + 0.1, y: 6.5, w: 6.4, h: 0.35, fontFace: BODY, fontSize: 11, color: C.ice, margin: 0, isTextBox: true });
  // Native chart: value today of $100 received in year t
  const yrs = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const series = [1.5, 3.5, 7].map((r) => ({ name: `${r}%`, labels: yrs.map(String), values: yrs.map((t) => +(100 / Math.pow(1 + r / 100, t)).toFixed(1)) }));
  s.addChart(pres.charts.LINE, series, {
    x: 7.1, y: 1.1, w: 5.7, h: 5.0, chartColors: [C.amber, C.ice, "7F93B2"], lineSize: 3, lineDataSymbol: "none",
    showTitle: true, title: "Value today of $100 received in year t", titleColor: C.white, titleFontFace: BODY, titleFontSize: 13,
    showLegend: true, legendPos: "b", legendColor: C.white, legendFontSize: 11,
    catAxisLabelColor: C.ice, valAxisLabelColor: C.ice, catAxisLabelFontSize: 10, valAxisLabelFontSize: 10,
    valGridLine: { color: "2E3B5C", size: 0.75 }, catGridLine: { style: "none" }, valAxisMaxVal: 100,
    showCatAxisTitle: true, catAxisTitle: "Years ahead", catAxisTitleColor: C.ice, catAxisTitleFontSize: 10,
  });
}

// 2. Why it matters + map of contexts
{
  const s = pres.addSlide(); page++;
  s.background = { color: C.white };
  s.addText("One term, many meanings — and the choice matters", { x: M, y: 0.4, w: W - 2 * M, h: 0.7, fontFace: HEAD, fontSize: 30, bold: true, color: C.navy, margin: 0, isTextBox: true });
  s.addText("$100 received in 50 years is worth today…", { x: M, y: 1.35, w: 5.2, h: 0.4, fontFace: BODY, fontSize: 14, color: C.slate, margin: 0, isTextBox: true });
  const stats = [["$47", "at 1.5%", "health / long-horizon social rates"], ["$18", "at 3.5%", "UK Green Book social rate"], ["$3", "at 7%", "opportunity-cost rate (US, Australia, Canada)"]];
  stats.forEach(([big, rate, lab], i) => {
    const y = 1.9 + i * 1.6;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y, w: 5.2, h: 1.35, fill: { color: C.tint }, line: { color: C.tint }, rectRadius: 0.08 });
    s.addText(big, { x: M + 0.25, y: y + 0.12, w: 1.8, h: 1.1, fontFace: HEAD, fontSize: 48, bold: true, color: i === 0 ? C.amberDk : C.navy, margin: 0, valign: "middle", isTextBox: true });
    s.addText([{ text: rate, options: { bold: true, fontSize: 16, color: C.ink, breakLine: true } }, { text: lab, options: { fontSize: 12, color: C.slate } }],
      { x: M + 2.15, y: y + 0.15, w: 2.9, h: 1.05, fontFace: BODY, margin: 0, valign: "middle", isTextBox: true });
  });
  const ctx = [
    ["1", "Public policy", "Social costs & benefits of projects, climate, health (QALYs)"],
    ["2", "Individual preference", "Money or rewards at different dates; energy running costs"],
    ["3", "Corporate finance", "Expected cash flows to firms and equity holders"],
    ["4", "Real estate", "Rents and net operating income over the lease horizon"],
    ["5", "Macro models", "Household utility; riskless real returns economy-wide"],
    ["6", "Monetary policy", "Not discounting at all: the price of overnight central-bank credit"],
  ];
  s.addText("What is being discounted in each context", { x: 6.3, y: 1.35, w: 6.5, h: 0.4, fontFace: BODY, fontSize: 14, color: C.slate, margin: 0, isTextBox: true });
  ctx.forEach(([n, name, desc], i) => {
    const y = 1.9 + i * 0.8;
    s.addShape(pres.shapes.OVAL, { x: 6.3, y: y + 0.08, w: 0.5, h: 0.5, fill: { color: i === 5 ? C.slate : C.navy }, line: { color: i === 5 ? C.slate : C.navy } });
    s.addText(n, { x: 6.3, y: y + 0.08, w: 0.5, h: 0.5, fontFace: BODY, fontSize: 14, bold: true, color: C.white, align: "center", valign: "middle", margin: 0, isTextBox: true });
    s.addText([{ text: name, options: { bold: true, fontSize: 14, color: C.ink, breakLine: true } }, { text: desc, options: { fontSize: 11.5, color: C.slate } }],
      { x: 7.0, y, w: 5.8, h: 0.68, fontFace: BODY, margin: 0, valign: "middle", isTextBox: true });
  });
  footer(s, page, "Rows from different contexts are not comparable without adjusting for horizon, risk and real vs nominal basis.");
}

// 3–7. Table slides
const HDR = ["Sub-context", "What is being discounted", "What the rate means (basis)", "Estimates in the literature (citation)", "Singapore evidence (citation)"];
const COLW = [1.45, 1.95, 2.45, 3.9, 2.58];
groups.forEach((g, gi) => {
  const meta = META[g.key];
  const s = pres.addSlide(); page++;
  s.background = { color: C.white };
  s.addShape(pres.shapes.OVAL, { x: M, y: 0.42, w: 0.55, h: 0.55, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText(String(gi + 1), { x: M, y: 0.42, w: 0.55, h: 0.55, fontFace: BODY, fontSize: 16, bold: true, color: C.white, align: "center", valign: "middle", margin: 0, isTextBox: true });
  s.addText(meta.title, { x: M + 0.75, y: 0.37, w: W - 2 * M - 0.75, h: 0.65, fontFace: HEAD, fontSize: 26, bold: true, color: C.navy, margin: 0, valign: "middle", isTextBox: true });
  s.addText(meta.take, { x: M, y: 1.1, w: W - 2 * M, h: 0.45, fontFace: BODY, fontSize: 13, italic: true, color: C.amberDk, margin: 0, valign: "middle", isTextBox: true });
  const fs = g.key.startsWith("1.") ? 9 : 10; // the policy slide is the densest
  const cell = { fontFace: BODY, fontSize: fs, color: C.ink, valign: "top", margin: [3, 4, 3, 4] };
  const header = HDR.map((h) => ({ text: h, options: { ...cell, fontSize: fs + 1, bold: true, color: C.white, fill: { color: C.navy }, valign: "middle" } }));
  const body = g.rows.map((r, ri) => {
    const fill = { color: ri % 2 ? C.white : C.tint };
    return [
      { text: cellText(r.sub), options: { ...cell, bold: true, fill } },
      { text: cellText(r.what), options: { ...cell, fill } },
      { text: cellText(r.meaning), options: { ...cell, fill } },
      { text: cellText(r.est), options: { ...cell, fill } },
      { text: cellText(r.sg), options: { ...cell, fill } },
    ];
  });
  s.addTable([header, ...body], { x: M, y: 1.7, w: W - 2 * M, colW: COLW, border: { type: "solid", pt: 0.5, color: C.line } });
  footer(s, page, "Real % per year unless marked (nominal).  † = unverified or secondary/aggregator source.  Full APA references at the end of the deck.");
});

// Cross-cutting slide
{
  const s = pres.addSlide(); page++;
  s.background = { color: C.navy };
  s.addText("Four points that apply across every context", { x: M, y: 0.45, w: W - 2 * M, h: 0.7, fontFace: HEAD, fontSize: 30, bold: true, color: C.white, margin: 0, isTextBox: true });
  const pts = [
    ["Horizon", "Long-horizon rates tend to decline: from uncertainty about future growth (Weitzman, 2001; Arrow et al., 2013), from the term structure revealed by leasehold prices (Giglio et al., 2015), and from present bias. Theory is not settled (Gollier & Weitzman, 2010)."],
    ["Risk", "Rates that embed a risk premium — WACC, property IRRs, opportunity-cost social rates — sit systematically above riskless or time-preference rates."],
    ["Real vs nominal", "Official social rates are real; market and corporate rates are usually nominal. Singapore has no inflation-linked bonds, so a real rate (~0.5–1%) must be constructed from the ~2.4% SGS yield."],
    ["Measured ≠ pure preference", "Most measured rates bundle credit constraints, uncertainty, information gaps, tenure decay and appraisal smoothing with impatience."],
  ];
  pts.forEach(([h, t], i) => {
    const x = M + (i % 2) * 6.25, y = 1.5 + Math.floor(i / 2) * 2.7;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: 6.0, h: 2.4, fill: { color: "1E2E52" }, line: { color: "1E2E52" }, rectRadius: 0.08 });
    s.addShape(pres.shapes.OVAL, { x: x + 0.3, y: y + 0.3, w: 0.55, h: 0.55, fill: { color: C.amber }, line: { color: C.amber } });
    s.addText(String(i + 1), { x: x + 0.3, y: y + 0.3, w: 0.55, h: 0.55, fontFace: BODY, fontSize: 16, bold: true, color: C.navy, align: "center", valign: "middle", margin: 0, isTextBox: true });
    s.addText(h, { x: x + 1.05, y: y + 0.3, w: 4.7, h: 0.55, fontFace: HEAD, fontSize: 18, bold: true, color: C.white, valign: "middle", margin: 0, isTextBox: true });
    s.addText(t, { x: x + 0.3, y: y + 1.0, w: 5.4, h: 1.25, fontFace: BODY, fontSize: 12.5, color: C.ice, valign: "top", margin: 0, isTextBox: true });
  });
}

// References (APA 7)
function italicRuns(s) {
  return s.split(/(\*[^*]+\*)/).filter(Boolean).map((p) =>
    p.startsWith("*") ? { text: p.slice(1, -1), options: { italic: true } } : { text: p, options: {} });
}
const sortKey = (r) => r.replace(/[*"'\\]/g, "").toLowerCase();
const sorted = [...refs].sort((a, b) => sortKey(a).localeCompare(sortKey(b)));
const COL_H = 5.55, CPL = 126, LH = 0.142, GAP = 0.07; // chars per line at 8pt in a 5.95" column
const est = (r) => Math.ceil(r.replace(/\*/g, "").length / CPL) * LH + GAP;
const cols = [[]]; let h = 0;
sorted.forEach((r) => { const e = est(r); if (h + e > COL_H) { cols.push([]); h = 0; } cols[cols.length - 1].push(r); h += e; });
for (let i = 0; i < cols.length; i += 2) {
  const s = pres.addSlide(); page++;
  s.background = { color: C.white };
  s.addText("References (APA 7th edition)", { x: M, y: 0.4, w: 8, h: 0.6, fontFace: HEAD, fontSize: 26, bold: true, color: C.navy, margin: 0, isTextBox: true });
  s.addText(`Part ${i / 2 + 1} of ${Math.ceil(cols.length / 2)}`, { x: W - M - 3, y: 0.5, w: 3, h: 0.4, fontFace: BODY, fontSize: 12, color: C.slate, align: "right", margin: 0, isTextBox: true });
  [cols[i], cols[i + 1]].forEach((col, j) => {
    if (!col) return;
    const arr = [];
    col.forEach((r, k) => {
      const rr = italicRuns(r);
      rr[0].options = { ...rr[0].options, paraSpaceAfter: 4 };
      if (k < col.length - 1) rr[rr.length - 1].options.breakLine = true;
      arr.push(...rr);
    });
    s.addText(arr, { x: M + j * 6.25, y: 1.2, w: 5.95, h: COL_H + 0.1, fontFace: BODY, fontSize: 8, color: C.ink, valign: "top", margin: 0, isTextBox: true });
  });
  footer(s, page, "† = one or more details (authors, volume/pages, title or date) not yet confirmed against the source; check before formal citation.");
}

// pptxgenjs writes a stray <a:pPr> before every run after the first in a paragraph
// (e.g. a bold number mid-sentence). PowerPoint and LibreOffice then apply the last one,
// which drops bullets. Keep only the <a:pPr> that precedes the paragraph's first run.
function fixParagraphs(xml) {
  return xml.replace(/<a:p>([\s\S]*?)<\/a:p>/g, (m, inner) => {
    let seenRun = false;
    const out = inner.replace(/<a:pPr\b[^>]*\/>|<a:pPr\b[^>]*>[\s\S]*?<\/a:pPr>|<a:r>/g, (t) => {
      if (t === "<a:r>") { seenRun = true; return t; }
      return seenRun ? "" : t;
    });
    return "<a:p>" + out + "</a:p>";
  });
}
pres.write({ outputType: "nodebuffer" }).then(async (buf) => {
  const zip = await JSZip.loadAsync(buf);
  for (const name of Object.keys(zip.files).filter((n) => /^ppt\/slides\/slide\d+\.xml$/.test(n))) {
    zip.file(name, fixParagraphs(await zip.file(name).async("string")));
  }
  fs.writeFileSync(OUT, await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }));
  console.log("wrote", OUT, "slides:", page);
});
