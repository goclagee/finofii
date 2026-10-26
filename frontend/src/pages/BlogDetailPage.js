import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User, Info, AlertTriangle } from "lucide-react";
import useSEO from "@/hooks/useSEO";
import { getBlogPost, blogPosts } from "@/data/blogPosts";

const Block = ({ block }) => {
  switch (block.type) {
    case "lead":
      return (
        <p className="text-xl leading-relaxed mb-6 font-medium" style={{ color: "#1f2937" }}>
          {block.text}
        </p>
      );
    case "paragraph":
      return (
        <p className="text-base leading-relaxed mb-5" style={{ color: "#374151" }}>
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#111827" }}>
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul className="mb-6 space-y-2.5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-base leading-relaxed" style={{ color: "#374151" }}>
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ordered-list":
      return (
        <ol className="mb-6 space-y-3 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-base leading-relaxed" style={{ color: "#374151" }}>
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="overflow-x-auto mb-8 rounded-xl border border-gray-200">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800">
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="text-left px-4 py-3 font-semibold border-b border-slate-600"
                    style={{ color: "#ffffff" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-3 align-top border-b border-gray-100"
                      style={{ color: ci === 0 ? "#111827" : "#374151", fontWeight: ci === 0 ? 600 : 400 }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <div className="my-8 p-6 rounded-xl bg-amber-50 border border-amber-200 flex gap-3">
          <Info size={20} className="flex-shrink-0 mt-0.5" style={{ color: "#b45309" }} />
          <p className="text-base leading-relaxed font-medium" style={{ color: "#78350f" }}>
            {block.text}
          </p>
        </div>
      );
    case "disclaimer":
      return (
        <div className="mt-10 pt-6 border-t border-gray-200 flex gap-3">
          <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#9ca3af" }} />
          <p className="text-xs leading-relaxed italic" style={{ color: "#6b7280" }}>
            {block.text}
          </p>
        </div>
      );
    default:
      return null;
  }
};

const BlogDetailPage = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  useSEO({
    title: post ? `${post.title} | Finofiii Blog` : "Blog | Finofiii",
    description: post ? post.metaDescription : "Finofiii blog.",
    canonical: post ? `https://finofii.com/blog/${post.slug}` : "https://finofii.com/blog",
    jsonLd: post
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.date,
          dateModified: post.date,
          author: { "@type": "Organization", name: "Finofiii" },
          publisher: {
            "@type": "Organization",
            name: "Finofiii Fintech Private Limited",
            logo: { "@type": "ImageObject", url: "https://finofii.com/logo.png" },
          },
          mainEntityOfPage: `https://finofii.com/blog/${post.slug}`,
          keywords: post.keywords,
        }
      : null,
  });

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#111827" }}>Article not found</h1>
          <Link to="/blog" className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:underline">
            <ArrowLeft size={16} /> Back to all articles
          </Link>
        </div>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full filter blur-[100px]"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-6 hover:gap-2.5 transition-all"
            style={{ color: "#bfdbfe" }}
          >
            <ArrowLeft size={15} /> All articles
          </Link>
          <div className="mb-5">
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-bold rounded-full uppercase tracking-wider" style={{ color: "#fcd34d" }}>
              {post.category}
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 4vw, 44px)", color: "#ffffff" }} className="font-extrabold mb-6 leading-[1.15] tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center flex-wrap gap-5 text-sm" style={{ color: "rgba(191, 219, 254, 0.75)" }}>
            <span className="inline-flex items-center gap-1.5"><User size={14} /> {post.author}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar size={14} /> {post.dateLabel}</span>
            <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 md:p-12">
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </article>

          {/* CTA */}
          <div className="mt-10 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 rounded-2xl p-8 md:p-10 text-center overflow-hidden relative">
            <h3 className="text-2xl font-bold mb-3" style={{ color: "#ffffff" }}>
              Put your idle cash to work
            </h3>
            <p className="text-base mb-6 max-w-xl mx-auto" style={{ color: "rgba(191, 219, 254, 0.8)" }}>
              Talk to the Finofiii team about building a simple, compliant cash policy for your business.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); if (window.Calendly) window.Calendly.initPopupWidget({ url: "https://calendly.com/ms--165" }); }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/30"
            >
              Book a Call
            </a>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-14">
              <h3 className="text-xl font-bold mb-6" style={{ color: "#111827" }}>Keep reading</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-6"
                  >
                    <span className="inline-block px-2.5 py-0.5 bg-amber-50 text-amber-700 text-[11px] font-bold rounded-full uppercase tracking-wider border border-amber-100 mb-3">
                      {r.category}
                    </span>
                    <h4 className="text-base font-bold leading-snug group-hover:text-amber-700 transition-colors" style={{ color: "#111827" }}>
                      {r.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
