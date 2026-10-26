import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import useSEO from "@/hooks/useSEO";
import { blogPosts } from "@/data/blogPosts";

const BlogListPage = () => {
  useSEO({
    title: "Blog & Insights — Treasury, Cash Management | Finofiii",
    description:
      "Practical guides on treasury management, idle cash, liquid funds and current account monetisation for Indian businesses and founders.",
    canonical: "https://finofii.com/blog",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Finofiii Blog",
      description:
        "Insights on treasury management, cash management and investments for Indian businesses.",
      blogPost: blogPosts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        datePublished: p.date,
        author: { "@type": "Organization", name: "Finofiii" },
        url: `https://finofii.com/blog/${p.slug}`,
      })),
    },
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full filter blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <BookOpen size={16} style={{ color: "#fbbf24" }} />
            <span className="text-sm font-medium" style={{ color: "#bfdbfe" }}>Insights & Guides</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 64px)", color: "#ffffff" }} className="font-extrabold mb-5 leading-[1.05] tracking-tight">
            The Finofiii Blog
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "rgba(191, 219, 254, 0.8)" }}>
            Practical, no-jargon guides on treasury, idle cash and smarter money management for growing businesses.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Accent bar */}
                <div className="h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500"></div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-100">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3 leading-snug group-hover:text-amber-700 transition-colors" style={{ color: "#111827" }}>
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#4b5563" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs" style={{ color: "#6b7280" }}>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={13} /> {post.dateLabel}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={13} /> {post.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 group-hover:gap-2.5 transition-all">
                      Read <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogListPage;
