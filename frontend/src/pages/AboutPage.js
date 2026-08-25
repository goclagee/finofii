import { useState } from "react";
import {
  Linkedin, MapPin, Phone, Mail, Briefcase, GraduationCap, Building2,
  Sparkles, ShieldCheck, Award, Users, TrendingUp, Quote, ChevronRight,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import BlogsSection from "@/components/BlogsSection";
import useSEO from "@/hooks/useSEO";
import { blogs } from "@/data/blogs";

const li = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=1E3A8A&color=F59E0B&bold=true&format=png`;

const liSearch = (name) =>
  `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(name + " Finofii")}`;

const leadership = [
  {
    name: "Ganessh Jha",
    role: "Founder & Chief Executive Officer",
    photo: li("Ganessh Jha"),
    linkedin: liSearch("Ganessh Jha"),
    badge: "25+ Yrs · Asset Management",
    bio:
      "Ganessh has spent 25 years as a career asset manager, steering investment strategies for India's largest fund houses — SBI Mutual Fund, ICICI, Nippon and Tata Mutual Funds — cumulatively managing a book that crossed ₹7 Lakh Crore. He has been a trusted treasury advisor to institutions including the Indian Army, leading banks, PF trusts, marquee VCs and corporates such as Maruti, Reliance, Berger Paints and MRF. Beyond institutions, Ganessh is an active early-stage investor with cap-table positions across leading VCs and AIFs — an asset manager who thinks like a founder.",
    pills: ["SBI MF", "ICICI", "Nippon", "Tata MF", "₹7L Cr+ Book"],
  },
  {
    name: "Mayannkk Saxena",
    role: "Co-Founder",
    photo: li("Mayannkk Saxena"),
    linkedin: liSearch("Mayannkk Saxena"),
    badge: "12+ Yrs · Asset Management",
    bio:
      "Mayannkk brings 12 years of asset-management leadership across Escorts Ltd, Sundaram Mutual Fund and Tata Mutual Funds — managing a book that exceeded ₹3 Lakh Crore. His deep network spans SMEs, fintechs, IFAs, National Distributors, PF trusts and large corporate treasuries. At Finofii, he leads product, distribution and the relentless pursuit of post-tax outperformance for every single client.",
    pills: ["Escorts", "Sundaram MF", "Tata MF", "₹3L Cr+ Book"],
  },
];

const seniorTeam = [
  {
    name: "Sidarth Raina",
    role: "Senior Vice President — Multi Family Offices",
    photo: li("Sidarth Raina"),
    linkedin: liSearch("Sidarth Raina"),
    badge: "22 Yrs · Private Wealth",
    bio:
      "With 22 years of private banking and wealth management experience servicing India's wealthiest families and largest corporates, Sidarth leads our Multi Family Office practice — from wealth structuring and treasury to private market access and succession planning. The trusted single point of contact for families with ₹100 Cr+ in investible assets.",
    pills: ["Multi Family Office", "Private Wealth", "Corporate Banking"],
  },
  {
    name: "Ankush Saxena",
    role: "Assistant Vice President — Finofiii Capital & Treasury",
    photo: li("Ankush Saxena"),
    linkedin: liSearch("Ankush Saxena"),
    badge: "10 Yrs · Banking Ops",
    bio:
      "Ankush oversees execution across Finofiii Capital and Treasury — making sure every onboarding, every disbursal and every treasury entry happens on time, every time. A decade of corporate and SME banking operations means he's seen every wrinkle a transaction can throw, and pre-empts most before they happen.",
    pills: ["SME Banking", "Operations", "Service Delivery"],
  },
];

const ibTeam = [
  {
    name: "Sandeep Rishi",
    role: "Director — Investment Banking",
    photo: li("Sandeep Rishi"),
    linkedin: liSearch("Sandeep Rishi"),
    badge: "CA · Investment Banking",
    bio:
      "A Chartered Accountant with deep transaction experience across SME IPOs, corporate fund raises, PE/VC syndication and SME credit structuring. Sandeep brings execution rigour and balance-sheet discipline to every mandate Finofii undertakes.",
    pills: ["SME IPO", "PE/VC", "Fund Raise", "Debt Syndication"],
  },
  {
    name: "Vivek Vashistha",
    role: "Director — Investment Banking",
    photo: li("Vivek Vashistha"),
    linkedin: liSearch("Vivek Vashistha"),
    badge: "CS · Investment Banking",
    bio:
      "A qualified Company Secretary with extensive experience in SME IPO compliance, regulatory filings, PE/VC documentation and SME loan syndication. Vivek owns governance, compliance and deal structuring across our Investment Banking engagements.",
    pills: ["SME IPO", "Compliance", "PE/VC Documentation"],
  },
];

const patialaTeam = [
  {
    name: "Vipul Malik",
    role: "Business Head — Patiala Branch",
    photo: li("Vipul Malik"),
    linkedin: liSearch("Vipul Malik"),
    badge: "25+ Yrs · Banking",
    bio:
      "Vipul leads Finofii's Patiala branch — our flagship Punjab presence. With 25+ years as Branch Head across IndusInd, Axis and ICICI, he is one of Punjab's most respected retail and wholesale bankers. Under his leadership, the Patiala branch services the entire Punjab MSME corridor — from agri-processing units and exporters to traders and family-owned manufacturers.",
    pills: ["IndusInd", "Axis", "ICICI", "Patiala MSME"],
  },
  {
    name: "Sukhwinder Singh",
    role: "Business Head — Patiala Branch",
    photo: li("Sukhwinder Singh"),
    linkedin: liSearch("Sukhwinder Singh"),
    badge: "30+ Yrs · Banking",
    bio:
      "Sukhwinder co-anchors Finofii's Patiala branch with three decades of branch banking leadership at IndusInd, Axis and ICICI. A specialist in retail and wholesale banking, he brings deep, decades-old client relationships across Punjab's farmer-producer organisations, MSMEs and high-net-worth households.",
    pills: ["IndusInd", "Axis", "ICICI", "Punjab Wholesale"],
  },
];

const clientTeam = [
  {
    name: "Mansi Chauhan",
    role: "Client Relations",
    photo: li("Mansi Chauhan"),
    linkedin: liSearch("Mansi Chauhan"),
    badge: "MBA Finance · NISM Certified",
    bio:
      "Mansi anchors the client relations function — onboarding, servicing and end-to-end relationship management for treasury and investment clientele. An MBA in Finance with NISM certification, she ensures every Finofii client conversation moves something forward.",
    pills: ["MBA Finance", "NISM", "Client Success"],
  },
  {
    name: "Sonam Nikam",
    role: "Founder's Office",
    photo: li("Sonam Nikam"),
    linkedin: liSearch("Sonam Nikam"),
    badge: "B.Com · NISM Certified",
    bio:
      "Sonam works inside the Founder's Office on strategic initiatives, partner alliances and cross-functional projects. A B.Com graduate with NISM certification, she runs the operational backbone that keeps Finofii's leadership focused on the work that matters.",
    pills: ["B.Com", "NISM", "Strategy & Ops"],
  },
];

const trustSignals = [
  { icon: <ShieldCheck size={16} />, label: "SEBI & AMFI registered" },
  { icon: <Building2 size={16} />, label: "BSE STAR MF channel" },
  { icon: <Award size={16} />, label: "ARN-176236" },
  { icon: <Users size={16} />, label: "1,000+ businesses served" },
];

export default function AboutPage() {
  const [open, setOpen] = useState(false);

  useSEO({
    title: "About Finofii — India's Premier Asset Manager-Led Treasury & Wealth Platform",
    description:
      "Finofii is India's premier AI-based Treasury Management, WealthTech and Multi-Family Offices platform — built by career asset managers, not bankers. ₹2,500 Cr+ transacted, 130+ years of combined asset management experience, SEBI & AMFI registered. Meet the team.",
    canonical: "https://finofii.com/about",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Finofii Fintech Private Limited",
      url: "https://finofii.com",
      logo: "https://finofii.com/logo.png",
      description:
        "India's premier AI-led Treasury Management, WealthTech and Multi-Family Offices platform — built by career asset managers.",
      foundingDate: "2021",
      founders: [
        { "@type": "Person", name: "Ganessh Jha", jobTitle: "Founder & CEO" },
        { "@type": "Person", name: "Mayannkk Saxena", jobTitle: "Co-Founder" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 806, Tower 1, Assotech Business Cresterra, Sector 135",
        addressLocality: "Noida",
        postalCode: "201301",
        addressCountry: "IN",
      },
      contactPoint: [
        { "@type": "ContactPoint", telephone: "+91-9311361888", contactType: "customer service", email: "care@finofii.com" },
      ],
      sameAs: ["https://www.linkedin.com/company/finofii/"],
    },
  });

  return (
    <>
      {/* HERO — matching homepage style */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-32 md:py-40 overflow-hidden" data-testid="about-hero">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-bold rounded-full uppercase tracking-wider mb-6" style={{ color: '#bfdbfe' }}>
            About Finofii · Asset Manager Led
          </span>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 72px)', color: '#ffffff' }} className="font-extrabold mb-6 leading-[0.95] tracking-tighter max-w-5xl mx-auto">
            India's Premier<br />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Asset Manager-Led</span><br />
            Treasury & Wealth Platform
          </h1>

          <p className="text-2xl mb-4 max-w-3xl mx-auto font-semibold italic" style={{ color: '#fcd34d' }}>
            "Built by Asset Managers. Backed by ₹10 Lakh Crore of Experience."
          </p>

          <p className="text-lg mb-10 max-w-3xl mx-auto" style={{ color: 'rgba(191, 219, 254, 0.7)' }}>
            130+ years of combined asset management experience behind a single platform — ₹2,500 Crore+ already moved through it.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {trustSignals.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur rounded-full px-4 py-2 text-xs font-semibold"
                style={{ color: '#ffffff' }}
              >
                <span style={{ color: '#fbbf24' }}>{t.icon}</span>
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* Stat strip below hero on white */}
        <div className="relative bg-white text-slate-900">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-2 md:grid-cols-4 py-12 gap-8">
            <Metric value="₹2,500+ Cr" label="Transacted via Platform" tone="blue" />
            <Metric value="130+" label="Yrs Combined Experience" tone="violet" />
            <Metric value="₹10 L Cr+" label="Cumulative Book Managed" tone="amber" />
            <Metric value="1,000+" label="Businesses Served" tone="green" />
          </div>
        </div>
      </section>

      {/* Our promise */}
      <section className="bg-[var(--fino-bg)] py-24" aria-label="Our promise to clients">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest uppercase text-amber-600">
              Why our clients sleep peacefully
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 leading-tight">
              Three commitments. <span className="amber-italic">Non-negotiable.</span>
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <Promise
              icon={<ShieldCheck size={22} />}
              title="Your money never touches our balance sheet"
              body="Every rupee flows through SEBI/AMFI-regulated channels and BSE STAR MF — not through Finofii. We are the platform, never the custodian. It's how serious money has always been moved."
            />
            <Promise
              icon={<TrendingUp size={22} />}
              title="An asset manager on every account"
              body="Whether your treasury is ₹1 Cr or ₹100 Cr, you get a named relationship manager with at least a decade of institutional asset management experience. Not a chatbot. Not a junior."
            />
            <Promise
              icon={<Award size={22} />}
              title="Transparent, fixed pricing"
              body="No spreads, no hidden distribution fees, no opaque pricing. As low as 0.08% per month on assets — published, fixed, contractual. You see exactly what you're paying. Always."
            />
          </div>
        </div>
      </section>

      {/* Mission pillars */}
      <section className="bg-white py-20" aria-label="What we do">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-3 gap-6">
          <Pillar
            icon={<Building2 size={20} />}
            title="Visibility &amp; Control"
            body="See every rupee across every account, every compliance, every cashflow — at one place. AI &amp; ML keeping the picture live."
          />
          <Pillar
            icon={<Briefcase size={20} />}
            title="Reliable Forecasting"
            body="Forecast cashflows 90 days ahead with 92% accuracy. Make treasury &amp; credit decisions before the market does."
          />
          <Pillar
            icon={<GraduationCap size={20} />}
            title="Automation that Grows"
            body="Replace manual treasury workflows with institutional-grade automation. Higher margins, fewer errors, time back to your team."
          />
        </div>
      </section>

      {/* Founders' note */}
      <section className="bg-white py-24 border-t border-[var(--fino-line)]" aria-label="Founders note">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <Quote size={36} className="text-amber-500 mx-auto" />
          <blockquote className="font-display italic text-2xl md:text-3xl mt-6 leading-relaxed text-[var(--fino-ink)]">
            "We spent careers helping the Maruti's and Reliance's of India optimise their idle
            treasury. One day it hit us — every Indian SME deserves the same playbook. Finofii is
            that playbook, productised."
          </blockquote>
          <div className="mt-7 flex items-center justify-center gap-3">
            <div className="w-1 h-12 bg-amber-500" />
            <div className="text-left">
              <div className="font-bold">Ganessh Jha</div>
              <div className="text-sm text-[var(--fino-ink-soft)]">Founder &amp; CEO, Finofii</div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams */}
      <TeamGroup
        title="Leadership"
        subtitle="Career institutional asset managers who chose to build for India's entrepreneurs."
        people={leadership}
        large
      />

      <TeamGroup
        title="Senior Leadership"
        subtitle="Veterans running our family office, capital and treasury practices."
        people={seniorTeam}
        bg="bg-[var(--fino-bg)]"
      />

      <TeamGroup
        title="Investment Banking"
        subtitle="SME IPOs · Corporate fund raise · PE/VC syndication · SME loans — led by CAs and CSs."
        people={ibTeam}
      />

      <TeamGroup
        title="Patiala Branch — Business Heads"
        subtitle="Our flagship Punjab branch, anchored by two of the state's most respected branch heads — servicing the entire Punjab MSME corridor with the rigour of an asset manager and the relationships of a career banker."
        people={patialaTeam}
        bg="bg-[var(--fino-bg)]"
      />

      <TeamGroup
        title="Client Relations & Founder's Office"
        subtitle="The team that's on speed-dial for every Finofii client."
        people={clientTeam}
      />

      {/* Blogs */}
      <BlogsSection
        eyebrow="Stories & Insights"
        title={<>From the <span className="amber-italic">Finofii desk</span></>}
        subtitle="Founder essays, field notes from our branches, and the thinking behind how we run capital and treasury."
        posts={blogs.about}
        accentDark
      />

      {/* Contact */}
      <section id="contact" className="bg-white py-24 border-t border-[var(--fino-line)] text-slate-900">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-amber-600">
              Get in touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 leading-tight">
              Let's design the right <span className="amber-italic">financial stack</span> for your business.
            </h2>
            <p className="mt-5 text-[var(--fino-ink-soft)] max-w-md leading-relaxed">
              Whether it's treasury, fixed deposits or growth capital — our asset management team
              will walk you through what fits, and just as importantly, what doesn't.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-amber-600 mt-0.5" size={18} />
                <div>
                  <div className="font-semibold">Finofii HQ</div>
                  <div className="text-[var(--fino-ink-soft)]">
                    Unit 806, Tower 1, Assotech Business Cresterra,
                    <br /> Sector 135, Noida 201301
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-amber-600 mt-0.5" size={18} />
                <div>
                  <div className="font-semibold">Patiala Branch</div>
                  <div className="text-[var(--fino-ink-soft)]">Punjab MSME Corridor · Business Heads: Vipul Malik &amp; Sukhwinder Singh</div>
                </div>
              </div>
              <a href="tel:+919311361888" className="flex items-center gap-3 hover:text-amber-600">
                <Phone size={18} className="text-amber-600" /> +91 93113 61888
              </a>
              <a href="mailto:care@finofii.com" className="flex items-center gap-3 hover:text-amber-600">
                <Mail size={18} className="text-amber-600" /> care@finofii.com
              </a>
            </div>
          </div>

          <div className="fino-royal-gradient text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-amber-500/20 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-3xl font-bold">Reach our team</h3>
              <p className="text-sm text-white/75 mt-2">
                Share your details — a relationship manager will call you within 24 hours.
              </p>
              <button
                onClick={() => setOpen(true)}
                className="mt-6 w-full fino-amber-pill py-3.5 rounded-xl font-bold text-sm inline-flex items-center justify-center gap-2"
                data-testid="about-contact-cta"
              >
                Talk to our team <ChevronRight size={16} />
              </button>
              <p className="text-[11px] text-white/55 mt-3">
                By submitting, you agree to be contacted by Finofii. We never share your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LeadForm
        open={open}
        onClose={() => setOpen(false)}
        productType="contact"
        productInterest="General enquiry"
        title="Let's talk"
        subtitle="A Finofii expert will reach out within 24 hours."
        showAmount={false}
        showTenure={false}
      />
    </>
  );
}

function Metric({ value, label, tone = "blue" }) {
  const toneClass =
    tone === "blue" ? "stat-blue" :
    tone === "violet" ? "stat-violet" :
    tone === "amber" ? "stat-amber" :
    "stat-green";
  return (
    <div className="text-center">
      <div className={`font-display text-4xl md:text-5xl font-bold ${toneClass}`}>{value}</div>
      <div className="text-xs uppercase tracking-wider text-[var(--fino-ink-soft)] mt-2 font-semibold">
        {label}
      </div>
    </div>
  );
}

function Pillar({ icon, title, body }) {
  return (
    <div className="bg-[var(--fino-bg)] rounded-2xl p-6 border border-[var(--fino-line)] card-hover text-slate-900">
      <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 grid place-items-center">
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold mt-4">{title}</h3>
      <p className="text-sm text-[var(--fino-ink-soft)] mt-2 leading-relaxed">{body}</p>
    </div>
  );
}

function Promise({ icon, title, body }) {
  return (
    <div className="bg-white rounded-2xl p-7 border border-[var(--fino-line)] card-hover text-slate-900">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white grid place-items-center shadow-md">
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold mt-5">{title}</h3>
      <p className="text-sm text-[var(--fino-ink-soft)] mt-2 leading-relaxed">{body}</p>
    </div>
  );
}

function TeamGroup({ title, subtitle, people, large, bg = "bg-white" }) {
  return (
    <section className={`${bg} py-24 text-slate-900`} data-testid={`team-section-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-widest uppercase text-amber-600">Team</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">{title}</h2>
          <p className="text-[var(--fino-ink-soft)] mt-3 leading-relaxed">{subtitle}</p>
        </div>

        <div className={`mt-14 grid gap-7 ${large ? "md:grid-cols-2" : "md:grid-cols-2"}`}>
          {people.map((p) => (
            <PersonCard key={p.name} person={p} large={large} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonCard({ person, large }) {
  return (
    <article
      className="bg-white rounded-3xl border border-[var(--fino-line)] p-7 md:p-8 card-hover"
      data-testid={`team-card-${person.name.toLowerCase().replace(/ /g, "-")}`}
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="flex gap-5 items-start">
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="relative shrink-0"
          aria-label={`${person.name} on LinkedIn`}
          data-testid={`linkedin-${person.name.toLowerCase().replace(/ /g, "-")}`}
        >
          <img
            src={person.photo}
            alt={person.name}
            itemProp="image"
            className={`${large ? "w-28 h-28" : "w-24 h-24"} rounded-2xl object-cover ring-2 ring-amber-400/40`}
            loading="lazy"
          />
          <span className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-[#0A66C2] grid place-items-center text-white shadow-md">
            <Linkedin size={15} fill="white" />
          </span>
        </a>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-display text-xl font-bold" itemProp="name">{person.name}</h3>
            <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
              {person.badge}
            </span>
          </div>
          <p className="text-sm font-semibold text-[var(--fino-ink-soft)] mt-1" itemProp="jobTitle">
            {person.role}
          </p>
        </div>
      </div>

      <p className="text-sm text-[var(--fino-ink-soft)] mt-5 leading-relaxed" itemProp="description">{person.bio}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {person.pills.map((pill) => (
          <span
            key={pill}
            className="text-[11px] px-2.5 py-1 rounded-full bg-[var(--fino-bg)] text-[var(--fino-ink-soft)] border border-[var(--fino-line)]"
          >
            {pill}
          </span>
        ))}
      </div>

      <a
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0A66C2] hover:underline"
        itemProp="sameAs"
      >
        <Linkedin size={15} /> View on LinkedIn
      </a>
    </article>
  );
}
