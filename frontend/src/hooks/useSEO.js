import { useEffect } from "react";
// Lightweight SEO hook: sets <title>, meta description, og/twitter tags, canonical,
// optional robots noindex and JSON-LD. Prerendered JSON-LD (data-prerender) is
// replaced when a page supplies its own.
export default function useSEO({ title, description, canonical, ogImage, jsonLd, noindex } = {}) {
  useEffect(() => {
    if (title) document.title = title;
    const setMeta = (attr, key, value) => {
      if (!value) return;
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", ogImage);
    setMeta("name", "twitter:card", title ? "summary_large_image" : null);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    if (canonical) {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
    let robots;
    if (noindex) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      robots.setAttribute("content", "noindex, follow");
      document.head.appendChild(robots);
    }
    let script;
    if (jsonLd) {
      document.head.querySelectorAll('script[data-prerender="true"]').forEach((n) => n.remove());
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      script.dataset.seo = "true";
      document.head.appendChild(script);
    }
    return () => {
      if (script) script.remove();
      if (robots) robots.remove();
    };
  }, [title, description, canonical, ogImage, noindex, JSON.stringify(jsonLd)]); // eslint-disable-line
}
