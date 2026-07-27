import { useEffect } from "react";

// Lightweight SEO hook — sets <title>, meta description, og tags, canonical, and
// optional JSON-LD structured data. Cleans up on unmount.
export default function useSEO({ title, description, canonical, ogImage, jsonLd }) {
  useEffect(() => {
    if (title) document.title = title;

    const set = (selector, attrs) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.head.querySelector(`meta[property="${attrs.property}"]`) || document.createElement(attrs.tag || "meta");
        if (!el.parentNode) document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => {
        if (k === "tag" || v == null) return;
        el.setAttribute(k, v);
      });
      return el;
    };

    const created = [];

    if (description) {
      const el = set('meta[name="description"]', { name: "description", content: description });
      created.push(el);
    }

    // Open Graph
    set('meta[property="og:title"]', { property: "og:title", content: title });
    set('meta[property="og:description"]', { property: "og:description", content: description });
    set('meta[property="og:type"]', { property: "og:type", content: "website" });
    if (ogImage) set('meta[property="og:image"]', { property: "og:image", content: ogImage });

    // Twitter
    set('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    set('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    set('meta[name="twitter:description"]', { name: "twitter:description", content: description });

    // Canonical
    if (canonical) {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // Structured data
    let script;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      script.dataset.seo = "true";
      document.head.appendChild(script);
    }

    return () => {
      if (script) script.remove();
    };
  }, [title, description, canonical, ogImage, JSON.stringify(jsonLd)]); // eslint-disable-line
}
