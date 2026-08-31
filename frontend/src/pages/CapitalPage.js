import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  User, Briefcase, Home, Building, TrendingUp, RefreshCw, Package, Zap, Rocket, Car,
  ArrowRight, Calculator, ShieldCheck, Clock, BadgePercent, Sparkles, ChevronRight,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import BlogsSection from "@/components/BlogsSection";
import useSEO from "@/hooks/useSEO";
import { blogs } from "@/data/blogs";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const iconMap = {
  user: User, briefcase: Briefcase, home: Home, building: Building,
  "trending-up": TrendingUp, "refresh-cw": RefreshCw, package: Package,
  zap: Zap, rocket: Rocket, car: Car,
};

export default function CapitalPage() {
  useSEO({
    title: "Finofiii Capital — Personal, Business, SME Loans & Venture Capital | Finofiii",
    description:
      "Apply for Personal, Business, Home, LAP, LAS, WCDL, SME loans, Venture Debt and Private Equity through Finofiii Capital. 50+ lenders, starting rates from 8.35% p.a., 24-hour disbursal. A global treasury & multi-family office platform's capital marketplace — ₹2,500 Cr+ transacted.",
    canonical: "https://finofii.com/finofii-capital",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      name: "Finofiii Capital",
      description:
        "Lending marketplace offering Personal, Business, Home, SME, LAP, LAS, WCDL loans, Venture Debt and Private Equity across 50+ partner lenders.",
      provider: { "@type": "Organization", name: "Finofiii Fintech Private Limited" },
      areaServed: "IN",
      serviceType: [
        "Personal Loan", "Business Loan", "Home Loan", "Loan Against Property",
        "Loan Against Securities", "Working Capital Demand Loan", "SME Loan",
        "Private Equity", "Venture Debt", "Venture Equity", "Auto Loan",
      ],
    },
  });

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(10.5);
  const [tenure, setTenure] = useState(60);

  useEffect(() => {
    axios.get(`${API}/loan-products`).then((r) => setProducts(Array.isArray(r.data) ? r.data : [])).catch((e) => console.error(e)).finally(() => setLoading(false));
  }, []);

  const emi = useMemo(() => {
    const r = rate / 1200;
    const n = tenure;
    const e = r === 0 ? amount / n : (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = e * n;
    return { emi: Math.round(e), interest: Math.round(total - amount), total: Math.round(total) };
  }, [amount, rate, tenure]);

  const openApply = (product) => {
    setSelected(product);
    setOpen(true);
  };

  return (
    <>
      {/* HERO — royal blue */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-32 md:py-40 overflow-hidden" data-testid="capital-hero">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full filter blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-bold rounded-full uppercase tracking-wider mb-6" style={{ color: '#bfdbfe' }}>
              Finofiii Capital · Lending Marketplace
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 72px)', color: '#ffffff' }} className="font-extrabold mb-6 leading-[0.95] tracking-tighter">
              The Right <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Capital,</span><br />
              At The Right Stage.
            </h1>
            <p className="text-2xl mb-4 max-w-3xl mx-auto font-semibold italic" style={{ color: '#fcd34d' }}>
              "Capital that fits your business — not the other way around."
            </p>
            <p className="text-lg mb-10 max-w-3xl mx-auto" style={{ color: 'rgba(191, 219, 254, 0.7)' }}>
              From personal & home loans to working capital, SME credit, venture debt and private equity — 50+ lenders | ₹2,500 Cr+ transacted | Starting at 8.35% p.a.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:scale-[1.02]"
                data-testid="capital-explore-cta"
              >
                Explore Products
              </a>
              <button
                onClick={() => {
                  setSelected({ name: "Get Eligibility Check" });
                  setOpen(true);
                }}
                data-testid="capital-eligibility-cta"
                className="px-10 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-lg border border-white/30 hover:bg-white/20 transition-all"
                style={{ color: '#ffffff' }}
              >
                Check Eligibility
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-white border-b border-[var(--fino-line)] text-slate-900">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-2 md:grid-cols-4 py-10 gap-6">
          <Metric value="₹2,500+ Cr" label="Transacted via Platform" tone="blue" />
          <Metric value="50+" label="Lender Partners" tone="violet" />
          <Metric value="8.35%*" label="Starting Rate" tone="amber" />
          <Metric value="24 hrs" label="Disbursal Time" tone="green" />
        </div>
      </section>

      {/* Why Finofiii */}
      <section className="bg-[var(--fino-bg)] py-16 text-slate-900">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-4 gap-5">
          <BenefitCard icon={<BadgePercent size={20} />} title="Lowest rates" body="Starting at 8.35% p.a. across 50+ lenders." />
          <BenefitCard icon={<Clock size={20} />} title="Quick disbursal" body="Funds in account in as little as 24 hours." />
          <BenefitCard icon={<ShieldCheck size={20} />} title="No hidden fees" body="Transparent pricing — see every charge upfront." />
          <BenefitCard icon={<Sparkles size={20} />} title="One application" body="Apply once. Get matched to all eligible lenders." />
        </div>
      </section>

      {/* Products grid */}
      <section id="products" className="max-w-7xl mx-auto px-5 lg:px-8 py-24 text-slate-900" data-testid="loan-products">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-widest uppercase text-amber-600">
            Capital across stages
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 leading-tight">
            From personal credit to <span className="amber-italic">private equity.</span>
          </h2>
          <p className="text-[var(--fino-ink-soft)] mt-4">
            11 capital products tailored to your stage and need. Compare, apply, get matched.
          </p>
        </div>

        {loading ? (
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-64 rounded-3xl bg-[var(--fino-bg)] animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => {
              const Icon = iconMap[p.icon] || Briefcase;
              return (
                <div
                  key={p.id}
                  className="bg-white rounded-3xl border border-[var(--fino-line)] p-6 card-hover flex flex-col"
                  data-testid={`loan-card-${p.slug}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white grid place-items-center shadow-md">
                      <Icon size={20} />
                    </div>
                    {p.starting_rate > 0 && (
                      <div className="text-right">
                        <div className="text-[10px] uppercase tracking-wider text-[var(--fino-ink-soft)] font-bold">Starting</div>
                        <div className="font-display text-xl font-bold stat-amber">
                          {p.starting_rate.toFixed(2)}%
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold mt-5">{p.name}</h3>
                  <p className="text-sm text-[var(--fino-ink-soft)] mt-2 leading-relaxed flex-1">{p.description}</p>

                  <div className="grid grid-cols-2 gap-3 mt-5 pt-5 border-t border-[var(--fino-line)] text-xs">
                    <Mini label="Max amount" value={p.max_amount} />
                    <Mini label="Max tenure" value={p.max_tenure} />
                  </div>

                  <div className="mt-5 flex gap-2">
                    <Link
                      to={`/finofii-capital/${p.slug}`}
                      className="flex-1 text-center border border-[var(--fino-line)] hover:border-[var(--fino-ink)] py-2.5 rounded-xl font-bold text-xs"
                      data-testid={`details-${p.slug}`}
                    >
                      Details
                    </Link>
                    <button
                      onClick={() => openApply(p)}
                      data-testid={`apply-${p.slug}`}
                      className="flex-1 fino-amber-pill py-2.5 rounded-xl font-bold text-xs"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Process */}
      <section className="bg-[var(--fino-bg)] py-24 text-slate-900">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
            Four steps to your <span className="amber-italic">capital.</span>
          </h2>
          <div className="mt-14 grid md:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[var(--fino-line)] card-hover">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white grid place-items-center font-display font-bold shadow-md">
                  {i + 1}
                </div>
                <h3 className="font-display text-xl font-bold mt-4">{s.t}</h3>
                <p className="text-sm text-[var(--fino-ink-soft)] mt-2 leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadForm
        open={open}
        onClose={() => setOpen(false)}
        productType="loan"
        productInterest={selected?.name || "Loan enquiry"}
        title={`Apply — ${selected?.name || "Finofiii Capital"}`}
        subtitle="Share a few details. We'll match you to the best lender within 24 hours."
      />

      {/* Blogs */}
      <BlogsSection
        eyebrow="Capital Insights"
        title={<>Frameworks our capital team uses with <span className="amber-italic">founders</span></>}
        subtitle="Lender-by-lender eligibility maps, debt-vs-equity decision frameworks, and field notes from active mandates."
        posts={blogs.capital}
        accentDark
      />
    </>
  );
}

const steps = [
  { t: "Tell us about you", b: "30-second eligibility form — basic personal & financial details." },
  { t: "Get matched", b: "Our matching engine surfaces the best offers from 50+ lenders." },
  { t: "Submit documents", b: "Upload KYC, bank statements & GST/ITR — all paperless." },
  { t: "Get disbursed", b: "Approved? Funds hit your account in as little as 24 hours." },
];

function Slider({ label, value, min, max, step, val, onChange, testId }) {
  return (
    <div className="mt-5">
      <div className="flex justify-between items-baseline">
        <span className="text-xs uppercase tracking-wider text-[var(--fino-ink-soft)] font-bold">{label}</span>
        <span className="font-display text-lg font-bold">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={val}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full mt-2 accent-amber-500"
        data-testid={testId}
      />
    </div>
  );
}

function Mini({ label, value }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-[var(--fino-ink-soft)] font-bold">{label}</div>
      <div className="font-bold mt-0.5">{value}</div>
    </div>
  );
}

function BenefitCard({ icon, title, body }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[var(--fino-line)] card-hover text-slate-900">
      <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 grid place-items-center">
        {icon}
      </div>
      <h3 className="font-display text-lg font-bold mt-4">{title}</h3>
      <p className="text-sm text-[var(--fino-ink-soft)] mt-1.5 leading-relaxed">{body}</p>
    </div>
  );
}

function Metric({ value, label, tone = "blue" }) {
  const toneClass =
    tone === "blue" ? "stat-blue" :
    tone === "violet" ? "stat-violet" :
    tone === "amber" ? "stat-amber" : "stat-green";
  return (
    <div className="text-center text-slate-900">
      <div className={`font-display text-3xl md:text-4xl font-bold ${toneClass}`}>{value}</div>
      <div className="text-xs uppercase tracking-wider text-[var(--fino-ink-soft)] mt-2 font-semibold">{label}</div>
    </div>
  );
}
