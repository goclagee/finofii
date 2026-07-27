import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

// Reusable Blogs/Insights section — links internally to /blog/:slug
export default function BlogsSection({ eyebrow = "Insights", title, subtitle, posts, accentDark = false }) {
  const surface = accentDark ? "bg-[#0F172A] text-white" : "bg-white";
  const cardSurface = accentDark
    ? "bg-white/5 border-white/10 hover:bg-white/10"
    : "bg-white border-[var(--fino-line)]";
  const muted = accentDark ? "text-white/70" : "text-[var(--fino-ink-soft)]";

  return (
    <section className={`${surface} py-24 relative overflow-hidden`} data-testid="blogs-section">
      {accentDark && (
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-blue-700 blur-3xl" />
          <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-amber-500/30 blur-3xl" />
        </div>
      )}
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-amber-500">{eyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
              {title}
            </h2>
            {subtitle && <p className={`${muted} mt-3 leading-relaxed max-w-xl`}>{subtitle}</p>}
          </div>
          <Link
            to="/blog"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-amber-500 hover:gap-3 transition-all"
            data-testid="blogs-view-all"
          >
            View all insights <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              data-testid={`blog-card-${post.slug}`}
              className={`group block rounded-3xl border ${cardSurface} p-7 card-hover`}
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-bold">
                <span className="text-amber-500">{post.category}</span>
                <span className={muted}>{post.date}</span>
              </div>
              <h3 className="font-display text-xl font-extrabold mt-5 leading-snug group-hover:text-amber-500 transition-colors">
                {post.title}
              </h3>
              <p className={`text-sm ${muted} mt-3 leading-relaxed`}>{post.excerpt}</p>

              <div className={`mt-6 pt-5 border-t ${accentDark ? "border-white/10" : "border-[var(--fino-line)]"} flex items-center justify-between text-xs`}>
                <span className={`${muted} flex items-center gap-1.5`}>
                  <BookOpen size={12} /> {post.author}
                </span>
                <span className={`${muted} flex items-center gap-1.5`}>
                  <Clock size={12} /> {post.readTime || post.read_time}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/blog"
          className="md:hidden mt-8 inline-flex items-center gap-2 text-sm font-bold text-amber-500"
        >
          View all insights <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
