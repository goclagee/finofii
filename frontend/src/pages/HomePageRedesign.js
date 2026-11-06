import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
  Rocket,
  Building2,
  Users,
  Briefcase,
  Sparkles,
  BarChart3,
  Landmark,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Scroll-reveal hook — adds a class when element enters the viewport */
/* ------------------------------------------------------------------ */
function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.15, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []); // eslint-disable-line
  return [ref, visible];
}

/* Reveal wrapper */
const Reveal = ({ children, delay = 0, y = 28, className = "" }) => {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

/* Count-up number when visible */
const CountUp = ({ to, prefix = "", suffix = "", duration = 1600, decimals = 0 }) => {
  const [ref, visible] = useReveal();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, to, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString("en-IN", { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}
      {suffix}
    </span>
  );
};

const rotatingWords = [
  "Multi-Family Office Platform",
  "FinTech",
  "Portfolio Intelligence",
  "Treasury Management",
];

const HomePageRedesign = () => {
  const [scrollY, setScrollY] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Parallax scroll tracking
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Rotating hero word
  useEffect(() => {
    const t = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIdx((p) => (p + 1) % rotatingWords.length);
        setWordVisible(true);
      }, 450);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  // Mouse-driven glow in hero
  const onHeroMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMouse({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
  };

  return (
    <div className="min-h-screen bg-[#070B1A] text-white overflow-x-hidden">
      {/* Demo badge */}
      <div className="fixed top-24 right-4 z-50 px-3 py-1.5 rounded-full bg-amber-500 text-black text-[11px] font-bold shadow-lg shadow-amber-500/40 select-none">
        REDESIGN PREVIEW
      </div>

      {/* ================= HERO ================= */}
      <section
        onMouseMove={onHeroMove}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(1200px 600px at 50% -10%, rgba(37,99,235,0.35), transparent 60%), radial-gradient(900px 500px at 90% 110%, rgba(124,58,237,0.3), transparent 55%), linear-gradient(160deg,#070B1A 0%,#0C1430 55%,#0A0F24 100%)",
        }}
      >
        {/* Parallax orbs */}
        <div
          className="pointer-events-none absolute rounded-full blur-[120px]"
          style={{
            width: 520,
            height: 520,
            top: "10%",
            left: "12%",
            background: "rgba(59,130,246,0.25)",
            transform: `translate3d(${mouse.x * 40}px, ${mouse.y * 40 - scrollY * 0.15}px, 0)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="pointer-events-none absolute rounded-full blur-[120px]"
          style={{
            width: 460,
            height: 460,
            bottom: "8%",
            right: "10%",
            background: "rgba(245,158,11,0.18)",
            transform: `translate3d(${mouse.x * -50}px, ${mouse.y * -50 - scrollY * 0.1}px, 0)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(circle at 50% 40%, black, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 40%, black, transparent 75%)",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />

        {/* Hero content — parallax lift + fade on scroll */}
        <div
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          style={{
            transform: `translateY(${scrollY * -0.18}px)`,
            opacity: Math.max(1 - scrollY / 650, 0),
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-8 animate-[fadeDown_0.8s_ease]">
            <Sparkles size={15} className="text-amber-400" />
            <span className="text-sm font-medium text-blue-100">Asset Manager-Led · SEBI & AMFI Registered</span>
          </div>

          <h1 className="font-extrabold leading-[0.95] tracking-tighter mb-7" style={{ fontSize: "clamp(2.75rem, 6.5vw, 86px)" }}>
            <span className="block">Global Treasury &</span>
            <span
              className={`block bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent transition-all duration-500 ${
                wordVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              {rotatingWords[wordIdx]}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100/70 max-w-2xl mx-auto mb-10 font-light">
            Built by career asset managers, not bankers. One beautifully simple platform for treasury, multi-family office and capital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://platform.finofii.com/app/#/login"
              className="group px-9 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-black rounded-xl font-bold text-lg shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/treasury"
              className="px-9 py-4 bg-white/8 backdrop-blur-md text-white rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/15 hover:-translate-y-0.5 transition-all"
            >
              Explore Treasury
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-[11px] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={18} />
        </div>
      </section>

      {/* ================= MARQUEE STRIP ================= */}
      <div className="relative bg-[#0A0F24] border-y border-white/5 py-5 overflow-hidden">
        <div className="flex gap-16 whitespace-nowrap animate-[marquee_28s_linear_infinite] text-white/40 text-sm font-medium uppercase tracking-widest">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-16">
              <span>₹2,800 Cr+ Transacted</span>
              <span>•</span>
              <span>1,000+ Businesses</span>
              <span>•</span>
              <span>130+ Years Combined Experience</span>
              <span>•</span>
              <span>₹10 L Cr+ Book Managed</span>
              <span>•</span>
              <span>BSE StAR MF Platform</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= STATS ================= */}
      <section className="relative py-28 bg-gradient-to-b from-[#0A0F24] to-[#0C1430]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: 2800, prefix: "₹", suffix: " Cr", label: "Transacted via Platform", color: "from-amber-400 to-orange-500" },
              { v: 1000, prefix: "", suffix: "+", label: "Businesses Served", color: "from-blue-400 to-indigo-500" },
              { v: 25, prefix: "", suffix: " Yr+", label: "Industry Experience", color: "from-emerald-400 to-teal-500" },
              { v: 10, prefix: "₹", suffix: " L Cr+", label: "Book Managed", color: "from-violet-400 to-purple-500" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="relative rounded-2xl p-7 bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                  <div className={`absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br ${s.color} opacity-10 group-hover:opacity-20 blur-xl transition-opacity`} />
                  <div className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${s.color} bg-clip-text text-transparent mb-2`}>
                    <CountUp to={s.v} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <div className="text-sm text-blue-100/60 font-medium">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative py-28 bg-[#0C1430]">
        {/* parallax accent */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[160px] opacity-20"
          style={{ background: "rgba(37,99,235,0.5)", transform: `translate(-50%, ${scrollY * 0.04}px)` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/15 text-amber-300 text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Three ways to put capital to work</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <BarChart3 size={30} />,
                tint: "from-amber-400 to-orange-500",
                title: "Treasury Management",
                desc: "Deploy idle current-account surplus into SEBI-regulated liquid & debt funds with T+1 access.",
                min: "From ₹1 Cr",
                to: "/treasury",
              },
              {
                icon: <Rocket size={30} />,
                tint: "from-indigo-400 to-violet-500",
                title: "Founders",
                desc: "Curated equity, PMS, AIF and pre-IPO access reserved for a select circle of investors.",
                min: "From ₹1 Cr",
                to: "/founders",
              },
              {
                icon: <Building2 size={30} />,
                tint: "from-emerald-400 to-teal-500",
                title: "Multi-Family Office",
                desc: "A Family CFO across tax, portfolio strategy, reporting and succession for UHNW families.",
                min: "₹25 Cr+ NW",
                to: "/family-office",
              },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 120}>
                <Link
                  to={c.to}
                  className="group block h-full rounded-2xl p-8 bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.tint} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                    {c.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed mb-6">{c.desc}</p>
                  <div className="flex items-center justify-between pt-5 border-t border-white/10">
                    <span className="text-amber-300 font-bold">{c.min}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 group-hover:gap-2.5 transition-all">
                      Explore <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARALLAX BANNER ================= */}
      <section className="relative h-[420px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg,#1E3A8A 0%,#312E81 50%,#4C1D95 100%)",
            transform: `translateY(${(scrollY - 2600) * 0.08}px) scale(1.15)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.5) 1px, transparent 2px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.4) 1px, transparent 2px)",
            backgroundSize: "80px 80px, 120px 120px",
          }}
        />
        <Reveal>
          <div className="relative z-10 text-center px-6">
            <p className="text-amber-300 font-semibold italic text-lg mb-4">"Built by Asset Managers. Backed by ₹10 Lakh Crore of Experience."</p>
            <h2 className="text-3xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight">
              Institutional discipline, made simple for growing businesses.
            </h2>
          </div>
        </Reveal>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="relative py-28 bg-[#0A0F24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/15 text-emerald-300 text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                Who We Serve
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">For India's most ambitious</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Users size={26} />, title: "Tech Founders", sub: "Startup & unicorn CFOs", tag: "500+ founders", tint: "from-amber-500 to-orange-600" },
              { icon: <Building2 size={26} />, title: "Family Offices", sub: "UHNW across generations", tag: "₹25 Cr+ NW", tint: "from-indigo-500 to-purple-600" },
              { icon: <TrendingUp size={26} />, title: "HNI Investors", sub: "Angels, VCs & investors", tag: "₹1 Cr+ tickets", tint: "from-emerald-500 to-teal-600" },
              { icon: <Briefcase size={26} />, title: "Corporates", sub: "MSMEs & enterprises", tag: "1,000+ companies", tint: "from-blue-500 to-cyan-600" },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className={`group relative rounded-2xl p-6 bg-gradient-to-br ${p.tint} overflow-hidden hover:scale-[1.03] transition-transform duration-300 shadow-xl`}>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-500" />
                  <div className="relative">
                    <div className="mb-4 opacity-90">{p.icon}</div>
                    <h3 className="font-bold text-xl mb-1">{p.title}</h3>
                    <p className="text-white/75 text-sm mb-4">{p.sub}</p>
                    <span className="text-xs bg-white/20 inline-block px-3 py-1 rounded-full backdrop-blur-sm">{p.tag}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="relative py-28 bg-gradient-to-b from-[#0A0F24] to-[#0C1430]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/15 text-blue-300 text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                Trust & Compliance
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Regulated. Secure. Transparent.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield size={26} />, title: "SEBI Framework", desc: "All investments via SEBI-regulated AMCs." },
              { icon: <Landmark size={26} />, title: "AMFI Registered", desc: "ARN-176236 · BSE StAR MF execution." },
              { icon: <Clock size={26} />, title: "T+1 Liquidity", desc: "Access next business day; instant option on some funds." },
              { icon: <CheckCircle2 size={26} />, title: "Money Never Held", desc: "Funds flow directly to AMCs, never to us." },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="group h-full rounded-2xl p-6 bg-white/[0.04] border border-white/10 hover:border-amber-400/30 hover:bg-white/[0.07] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/15 text-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {t.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{t.title}</h3>
                  <p className="text-sm text-blue-100/55">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-32 overflow-hidden bg-[#070B1A]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(800px 400px at 50% 50%, rgba(245,158,11,0.18), transparent 60%), radial-gradient(700px 400px at 20% 80%, rgba(37,99,235,0.25), transparent 55%)",
          }}
        />
        <Reveal>
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Ready to put capital to work?</h2>
            <p className="text-xl text-blue-100/70 max-w-2xl mx-auto mb-10">
              Join 1,000+ businesses that stopped letting idle cash sit unproductive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://platform.finofii.com/app/#/login"
                className="px-10 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-black rounded-xl font-bold text-lg shadow-xl shadow-amber-500/30 hover:-translate-y-0.5 transition-all"
              >
                Start Today
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); if (window.Calendly) window.Calendly.initPopupWidget({ url: "https://calendly.com/ms--165" }); }}
                className="px-10 py-4 bg-white/8 backdrop-blur-md text-white rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/15 transition-all"
              >
                Talk to an Expert
              </a>
            </div>
            <p className="text-xs text-blue-200/40 mt-8 max-w-xl mx-auto">
              Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully. There is no assurance or guarantee of returns.
            </p>
          </div>
        </Reveal>
      </section>

      {/* keyframes */}
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes fadeDown { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default HomePageRedesign;
