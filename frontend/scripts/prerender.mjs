// Post-build "prerender-lite": writes build/<route>/index.html with per-page
// title, description, canonical, OG tags, JSON-LD and a text body, so crawlers
// that do not run JavaScript see real content. Fail-safe: never breaks the build.
import fs from "fs";
import path from "path";
import os from "os";
import { pathToFileURL } from "url";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const build = path.join(root, "build");
const BASE = "https://finofiii.com";

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

async function loadModule(rel) {
  const tmp = path.join(os.tmpdir(), `prerender-${Date.now()}-${path.basename(rel)}.mjs`);
  fs.copyFileSync(path.join(root, rel), tmp);
  return import(pathToFileURL(tmp).href);
}

const MAIN_PAGES = {
  "/treasury": ["Treasury Management for Businesses | Finofiii", "Deploy idle current-account cash into SEBI-regulated liquid and debt mutual funds with T+1 liquidity. Treasury management for Indian businesses. AMFI ARN-176236.", "Treasury Management for Businesses"],
  "/founders": ["Treasury for Founders and Startups | Finofiii", "Treasury management for founders and startups: put idle cash from funding rounds to work in SEBI-regulated mutual funds.", "Treasury for Founders and Startups"],
  "/family-office": ["Multi-Family Office Platform | Finofiii", "Multi-family office platform for Indian families and business owners.", "Multi-Family Office Platform"],
  "/capital": ["Capital | Finofiii", "Finofiii capital solutions for businesses and founders.", "Capital"],
  "/about": ["About Finofiii | Global Treasury & Multi-Family Office Platform", "About Finofiii Fintech Private Limited, an AMFI-registered mutual fund distributor (ARN-176236).", "About Finofiii"],
  "/blog": ["Finofiii Blog: Treasury and Cash Management Guides", "Guides on treasury management, liquid funds, overnight funds and business cash management.", "Finofiii Blog"],
  "/disclosure": ["Disclosure | Finofiii", "Regulatory disclosures of Finofiii Fintech Private Limited.", "Disclosure"],
  "/investor-charter": ["Investor Charter | Finofiii", "Investor charter of Finofiii Fintech Private Limited.", "Investor Charter"],
  "/grievance-redressal": ["Grievance Redressal | Finofiii", "How to raise and escalate a complaint with Finofiii.", "Grievance Redressal"],
  "/mutual-fund-disclosure": ["Mutual Fund Disclosure | Finofiii", "Mutual fund distribution disclosures of Finofiii.", "Mutual Fund Disclosure"],
};

function blogBody(post) {
  const out = [`<h1>${esc(post.title)}</h1>`];
  for (const b of post.content || []) {
    if (b.type === "heading") out.push(`<h2>${esc(b.text)}</h2>`);
    else if (b.type === "list") out.push(`<ul>${(b.items || []).map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`);
    else if (b.type === "table")
      out.push(`<table><thead><tr>${(b.headers || []).map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${(b.rows || [])
        .map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`);
    else if (b.text) out.push(`<p>${esc(b.text)}</p>`);
  }
  return out.join("\n");
}

function render(template, { route, title, description, jsonLd, body }) {
  const url = `${BASE}${route}`;
  const tags = [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${BASE}/logo.png" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${BASE}/logo.png" />`,
  ];
  if (jsonLd) tags.push(`<script type="application/ld+json" data-prerender="true">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`);
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${esc(title)}</title>`);
  html = html.replace(/<meta name="description"[^>]*>/, () => `<meta name="description" content="${esc(description)}" />`);
  html = html.replace("</head>", () => `${tags.join("\n")}\n</head>`);
  html = html.replace(/<div id="root">\s*<\/div>/, () => `<div id="root"><main data-prerender="true">${body}</main></div>`);
  return html;
}

async function main() {
  const tplPath = path.join(build, "index.html");
  if (!fs.existsSync(tplPath)) return console.log("[prerender] no build/index.html, skipping");
  const template = fs.readFileSync(tplPath, "utf8");
  const { SEO_CONFIG } = await loadModule("src/data/seoConfig.js");
  const { blogPosts } = await loadModule("src/data/blogPosts.js");

  const pages = [];
  for (const [route, c] of Object.entries(SEO_CONFIG)) {
    const h1 = (c.title || "").split("|")[0].trim();
    pages.push({ route, title: c.title, description: c.description, jsonLd: c.jsonLd,
      body: `<h1>${esc(h1)}</h1><p>${esc(c.description)}</p>` });
  }
  for (const [route, [title, description, h1]] of Object.entries(MAIN_PAGES)) {
    if (pages.some((p) => p.route === route)) continue;
    pages.push({ route, title, description, body: `<h1>${esc(h1)}</h1><p>${esc(description)}</p>` });
  }
  for (const post of blogPosts) {
    const route = `/blog/${post.slug}`;
    pages.push({
      route,
      title: `${post.title} | Finofiii`,
      description: post.metaDescription || post.excerpt,
      body: blogBody(post),
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        datePublished: post.date,
        author: { "@type": "Organization", name: "Finofiii Fintech Private Limited" },
        publisher: { "@type": "Organization", name: "Finofiii Fintech Private Limited", logo: { "@type": "ImageObject", url: `${BASE}/logo.png` } },
        mainEntityOfPage: `${BASE}${route}`,
      },
    });
  }

  const rules = [];
  for (const p of pages) {
    const dir = path.join(build, p.route);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), render(template, p));
    rules.push(`${p.route}  ${p.route}/index.html  200!`);
  }
  const rp = path.join(build, "_redirects");
  const existing = fs.existsSync(rp) ? fs.readFileSync(rp, "utf8") : "";
  // Keep 301s first, then exact-match prerendered pages, then the SPA catch-all.
  const lines = existing.split("\n").filter(Boolean);
  const idx = lines.findIndex((l) => l.startsWith("/*"));
  const head = idx === -1 ? lines : lines.slice(0, idx);
  const tail = idx === -1 ? [] : lines.slice(idx);
  fs.writeFileSync(rp, [...head, ...rules, ...tail].join("\n") + "\n");
  console.log(`[prerender] wrote ${pages.length} pages`);
}

main().catch((e) => console.warn("[prerender] skipped due to error:", e.message));
