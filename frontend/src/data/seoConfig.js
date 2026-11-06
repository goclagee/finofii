// Centralised SEO metadata for all landing/SEO pages.
// Keyed by route path. Consumed via the usePageSEO hook.

const BASE = "https://finofiii.com";

const ORG = {
  "@type": "Organization",
  name: "Finofiii Fintech Private Limited",
  url: BASE,
  logo: `${BASE}/logo.png`,
};

// Helper to build a standard page JSON-LD graph
const buildGraph = ({ path, title, breadcrumb, faqs }) => {
  const graph = [
    {
      "@type": "WebPage",
      "@id": `${BASE}${path}#webpage`,
      url: `${BASE}${path}`,
      name: title,
      isPartOf: { "@id": `${BASE}/#website` },
      publisher: ORG,
      inLanguage: "en-IN",
      datePublished: "2024-01-01",
      dateModified: "2026-01-01",
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2"] },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: breadcrumb, item: `${BASE}${path}` },
      ],
    },
  ];
  if (faqs && faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
};

// Each entry: path -> { title, description, breadcrumb, faqs? }
const RAW = {
  "/treasuryvsfd": {
    title: "Treasury vs Fixed Deposits — Which is Better for Idle Cash? | Finofiii",
    description:
      "Treasury management (liquid funds) vs fixed deposits for Indian businesses. Compare liquidity, flexibility, tax and access to help you park idle cash the right way.",
    breadcrumb: "Treasury vs Fixed Deposits",
  },
  "/treasuryvssip": {
    title: "Treasury vs SIP — Capital Preservation vs Long-Term Growth | Finofiii",
    description:
      "Treasury management preserves capital for short-term idle cash; SIPs build long-term growth. Understand which suits your business horizon and goals.",
    breadcrumb: "Treasury vs SIP",
  },
  "/treasuryvssavings": {
    title: "Treasury vs Savings Account — Stop Idle Cash Earning Nothing | Finofiii",
    description:
      "A savings account leaves business cash underutilised. See how treasury management via liquid funds keeps surplus productive while staying liquid.",
    breadcrumb: "Treasury vs Savings Account",
  },
  "/treasuryvsdebt": {
    title: "Treasury vs Debt Funds — Capital Preservation Compared | Finofiii",
    description:
      "Treasury management and debt funds are both lower-risk options with different duration and risk-return characteristics. A clear comparison for businesses.",
    breadcrumb: "Treasury vs Debt Funds",
  },
  "/treasuryvsequity": {
    title: "Treasury vs Equity Funds — Which Grows Capital Faster? | Finofiii",
    description:
      "Treasury preserves capital with market-linked returns; equity funds target long-term growth. Learn which fits your timeline and risk appetite.",
    breadcrumb: "Treasury vs Equity Funds",
  },
  "/treasuryvsrealstate": {
    title: "Treasury vs Real Estate — Liquid Returns vs Long-Term Asset | Finofiii",
    description:
      "Real estate is a long-term, illiquid asset; treasury management offers liquid, low-effort returns. Understand the role each plays in financial planning.",
    breadcrumb: "Treasury vs Real Estate",
  },
  "/liquidfundsvsfd": {
    title: "Liquid Funds vs Fixed Deposits — Flexibility & Access | Finofiii",
    description:
      "Liquid funds vs fixed deposits for business cash: liquidity, exit loads, tax and access compared. Pick the right home for short-term surplus.",
    breadcrumb: "Liquid Funds vs Fixed Deposits",
  },
  "/mfddifference": {
    title: "What is an MFD? Mutual Fund Distributor Explained | Finofiii",
    description:
      "Understand the role of a Mutual Fund Distributor (MFD) vs RIA, and how Finofiii (ARN-176236) helps businesses invest through SEBI-regulated AMCs.",
    breadcrumb: "MFD Difference",
  },
  "/treasuryvsinsurance": {
    title: "Treasury vs Insurance Bonds — Returns & Liquidity Compared | Finofiii",
    description:
      "ULIPs and insurance bonds bundle returns with cover; treasury management keeps capital flexible and liquid. A clear comparison for businesses and families.",
    breadcrumb: "Treasury vs Insurance",
  },
  "/whatstreasury": {
    title: "What is Treasury Management? A Guide for Businesses | Finofiii",
    description:
      "Treasury management means optimising idle business cash while maintaining liquidity. A simple guide for founders and finance teams in India.",
    breadcrumb: "What is Treasury Management",
  },
  "/liquidfunds101": {
    title: "Liquid Funds 101 — How They Work for Business Cash | Finofiii",
    description:
      "Liquid funds invest in short-term instruments up to 91 days with market-linked returns and quick access. A plain-language guide for Indian businesses.",
    breadcrumb: "Liquid Funds 101",
  },
  "/currentaccount": {
    title: "Current Account Explained — Why Idle Cash Earns Nothing | Finofiii",
    description:
      "Current accounts in India pay no interest. Learn why, and how to put idle surplus to work through SEBI-regulated mutual funds.",
    breadcrumb: "Current Account Explained",
  },
  "/nav": {
    title: "What is NAV? Net Asset Value Explained | Finofiii",
    description:
      "NAV (Net Asset Value) is the per-unit price of a mutual fund. Understand how NAV works and why it moves daily in debt and liquid funds.",
    breadcrumb: "NAV Explained",
  },
  "/expenseratio": {
    title: "Expense Ratio Explained — The Cost of a Mutual Fund | Finofiii",
    description:
      "The expense ratio is the annual fee a fund charges to manage your money. Learn why it matters most for low-return liquid and debt funds.",
    breadcrumb: "Expense Ratio",
  },
  "/exitload": {
    title: "Exit Load Explained — Withdrawal Charges in Mutual Funds | Finofiii",
    description:
      "An exit load is a fee for withdrawing before a set period. Learn how exit loads work in liquid funds and how to avoid them.",
    breadcrumb: "Exit Load Explained",
  },
  "/cutofftime": {
    title: "Mutual Fund Cut-off Times Explained | Finofiii",
    description:
      "Cut-off times decide which day's NAV applies to your transaction. A quick guide to cut-off timings for liquid and debt funds.",
    breadcrumb: "Cut-off Time Explained",
  },
  "/nav-calculator": {
    title: "NAV Calculator — Mutual Fund Value Tool | Finofiii",
    description:
      "Understand how NAV and units translate to the value of your mutual fund holdings. Educational tool from Finofiii.",
    breadcrumb: "NAV Calculator",
  },
  "/idlecashstartups": {
    title: "Idle Cash Management for Startups | Finofiii",
    description:
      "Startups raise capital and then let it sit idle. Learn how to manage runway cash with liquid and overnight funds while staying flexible.",
    breadcrumb: "Idle Cash for Startups",
  },
  "/idlecashmsme": {
    title: "Idle Cash Management for MSMEs | Finofiii",
    description:
      "MSMEs often leave working-capital surplus idle in current accounts. A practical approach to deploying idle MSME cash into mutual funds.",
    breadcrumb: "Idle Cash for MSMEs",
  },
  "/corporatetreasury": {
    title: "Corporate Treasury Management | Finofiii",
    description:
      "Institutional-grade treasury management for mid-sized corporates — deploy idle cash into SEBI-regulated funds with T+1 liquidity.",
    breadcrumb: "Corporate Treasury",
  },
  "/wealthfamilyoffice": {
    title: "Portfolio Management for Family Offices | Finofiii",
    description:
      "Multi-asset treasury and portfolio management for family offices, integrating liquid reserves with a broader wealth strategy.",
    breadcrumb: "Family Office Portfolio",
  },
  "/nridollarparking": {
    title: "NRI Rupee Parking & Treasury | Finofiii",
    description:
      "NRIs with rupee surpluses can park funds in market-linked instruments while waiting for favourable forex windows. A guide for NRI treasury.",
    breadcrumb: "NRI Dollar Parking",
  },
  "/treasurydelhi": {
    title: "Treasury Management in Delhi | Finofiii",
    description:
      "Treasury management for Delhi businesses — put idle cash to work through SEBI-regulated liquid and debt funds with T+1 liquidity.",
    breadcrumb: "Treasury in Delhi",
  },
  "/treasurynoida": {
    title: "Treasury Management in Noida | Finofiii",
    description:
      "Treasury management for Noida businesses — deploy surplus cash into SEBI-regulated mutual funds with quick access.",
    breadcrumb: "Treasury in Noida",
  },
  "/treasurymumbai": {
    title: "Treasury Management in Mumbai | Finofiii",
    description:
      "Treasury management for Mumbai businesses — institutional-grade idle cash optimisation via SEBI-regulated funds.",
    breadcrumb: "Treasury in Mumbai",
  },
  "/treasurypune": {
    title: "Treasury Management in Pune | Finofiii",
    description:
      "Treasury management for Pune businesses — put idle current-account cash to work with liquid and debt funds.",
    breadcrumb: "Treasury in Pune",
  },
  "/treasurybangalore": {
    title: "Treasury Management for Bangalore Startups | Finofiii",
    description:
      "Treasury management for Bangalore startups and businesses — manage runway cash with SEBI-regulated funds and T+1 liquidity.",
    breadcrumb: "Treasury in Bangalore",
  },
  "/treasuryhyderabad": {
    title: "Treasury Management in Hyderabad | Finofiii",
    description:
      "Treasury management for Hyderabad businesses — deploy idle cash into SEBI-regulated mutual funds while staying liquid.",
    breadcrumb: "Treasury in Hyderabad",
  },
  "/treasurygurgaon": {
    title: "Treasury Management in Gurgaon | Finofiii",
    description:
      "Treasury management for Gurgaon businesses — optimise idle surplus through SEBI-regulated liquid and debt funds.",
    breadcrumb: "Treasury in Gurgaon",
  },
  "/emergencyfund": {
    title: "Building a Business Emergency Fund | Finofiii",
    description:
      "Where to keep your business emergency fund? Compare savings accounts with liquid funds for safety, liquidity and market-linked returns.",
    breadcrumb: "Emergency Fund",
  },
  "/quarterlyplanning": {
    title: "Quarterly Financial Planning for Businesses | Finofiii",
    description:
      "Plan quarterly cash flows and park surplus efficiently between current accounts, overnight and liquid funds.",
    breadcrumb: "Quarterly Planning",
  },
  "/taxoptimization": {
    title: "Tax Planning for Business Cash & Investments | Finofiii",
    description:
      "Understand the tax treatment of debt mutual funds and FDs for companies, LLPs and firms, and plan redemptions around due dates.",
    breadcrumb: "Tax Optimization",
  },
  "/liquidityplanning": {
    title: "Liquidity Planning for Businesses | Finofiii",
    description:
      "Map your cash needs across time horizons and match each rupee to the right instrument — current account, overnight, liquid or debt funds.",
    breadcrumb: "Liquidity Planning",
  },
  "/freelancerbusiness": {
    title: "Cash Management for Freelancers & Solo Businesses | Finofiii",
    description:
      "Freelancers with irregular income can smooth cash flow by parking surplus in liquid and overnight funds while staying flexible.",
    breadcrumb: "Freelancer Business",
  },
  "/projectbased": {
    title: "Treasury for Project-Based Businesses | Finofiii",
    description:
      "Project advances and milestone payments sit idle between phases. Learn how project-based businesses can keep cash productive.",
    breadcrumb: "Project-Based Business",
  },
  "/collegefund": {
    title: "College Fund Planning | Finofiii",
    description:
      "Plan for rising college costs by combining growth investments with a liquid treasury foundation. A staged guide for parents.",
    breadcrumb: "College Fund Planning",
  },
  "/retirementplanning": {
    title: "Retirement Planning & Treasury | Finofiii",
    description:
      "Shift from growth to capital preservation as you approach retirement, with a treasury allocation for stability and income.",
    breadcrumb: "Retirement Planning",
  },
  "/internationaltreasury": {
    title: "International Treasury & Forex Timing | Finofiii",
    description:
      "Park rupee surpluses in market-linked instruments while waiting for favourable forex windows. A guide to international treasury for NRIs.",
    breadcrumb: "International Treasury",
  },
  "/risk-disclosure-guide": {
    title: "Risk Disclosure Guide — Mutual Fund Risks Explained | Finofiii",
    description:
      "Understand the risks of mutual fund investing: market risk, credit risk and interest-rate risk. Read before you invest.",
    breadcrumb: "Risk Disclosure Guide",
  },
  "/treasuryvsca": {
    title: "Treasury vs Current Account | Finofiii",
    description:
      "A current account earns nothing; treasury management puts idle cash to work with liquidity. A clear comparison for businesses.",
    breadcrumb: "Treasury vs Current Account",
  },
  "/understandingnav": {
    title: "Understanding NAV in Mutual Funds | Finofiii",
    description:
      "A guide to Net Asset Value (NAV): how it is calculated, why it moves daily, and what it means for your mutual fund holdings.",
    breadcrumb: "Understanding NAV",
  },
  "/understandingliquidfunds": {
    title: "Understanding Liquid Funds | Finofiii",
    description:
      "How liquid funds work, their risk profile and when they suit business cash. A plain-language guide from Finofiii.",
    breadcrumb: "Understanding Liquid Funds",
  },
  "/comparisoncurrentaccount": {
    title: "Current Account vs Treasury — The Real Cost of Idle Cash | Finofiii",
    description:
      "See the opportunity cost of leaving surplus in a current account versus deploying it through treasury management.",
    breadcrumb: "Current Account Comparison",
  },
  "/termsandconditions": {
    title: "Terms & Conditions | Finofiii",
    description: "Terms and conditions governing use of the Finofiii platform and services.",
    breadcrumb: "Terms & Conditions",
  },
};

export const SEO_CONFIG = Object.fromEntries(
  Object.entries(RAW).map(([path, v]) => [
    path,
    {
      title: v.title,
      description: v.description,
      canonical: `${BASE}${path}`,
      ogImage: `${BASE}/logo.png`,
      jsonLd: buildGraph({ path, title: v.title, breadcrumb: v.breadcrumb, faqs: v.faqs }),
    },
  ])
);
