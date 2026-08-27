import React from 'react';
import '../styles/BrandPages.css';

const TrustBadges = () => (
  <div className="trust-badges">
    <div className="trust-badge">🏛️ SEBI Regulated</div>
    <div className="trust-badge">📜 ARN-176236 (AMFI)</div>
    <div className="trust-badge">⭐ BSE Star MF Partner</div>
  </div>
);

const ReadingTime = ({ minutes = 4 }) => (
  <div className="reading-time">⏱️ {minutes} min read</div>
);

const ComplianceFooter = () => (
  <div className="compliance">
    <small><strong>⚖️ Compliance:</strong> Finofiii is registered as an MFD (ARN-176236, AMFI) and BSE Star MF Partner. Returns based on historical data; past performance does not guarantee future results. Please consult with a SEBI-certified financial advisor before investing.</small>
  </div>
);

// ============ DELHI ============

export const TreasuryDelhi = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Treasury Management in Delhi: Local Expertise, National Reach</h1>
    <ReadingTime minutes={4} />
    
    <p className="context-paragraph">
      Delhi's business ecosystem is diverse: startups in Gurugram, corporate HQs in Connaught Place, manufacturing in Okhla. Treasury needs vary by sector, but the opportunity is consistent: turn idle cash into 6-7% returns in liquid funds.
    </p>

    <div className="stat-card">
      <h3>🏢 Delhi Business Cash Opportunity</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">Typical Delhi Startup</div>
          <div className="stat-amount">₹50 Lakhs Idle</div>
          <div className="stat-label">Monthly payroll + ops</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">Treasury Return (6 months)</div>
          <div className="stat-amount">₹1,50,000</div>
          <div className="stat-label">Extra return @ 6%</div>
        </div>
      </div>
    </div>

    <div className="card">
      <h2>Why Delhi Businesses Choose Finofiii</h2>
      <ul>
        <li><strong>Local team:</strong> Noida-based, understand Delhi market cycles</li>
        <li><strong>24-hour setup:</strong> Video KYC, instant account opening</li>
        <li><strong>WhatsApp support:</strong> Fluent in Hindi & English</li>
        <li><strong>Tax-optimized:</strong> Indexation benefit on long-term gains</li>
      </ul>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Setup Treasury (Delhi)
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ NOIDA ============

export const TreasuryNoida = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Treasury for Noida Businesses: Manufacturing to Tech</h1>
    <ReadingTime minutes={4} />
    
    <p className="context-paragraph">
      Noida hosts everything from Tier-1 manufacturing to SaaS startups. Working capital management is critical—and treasury is the fastest way to turn surplus cash into growth funding.
    </p>

    <div className="card">
      <h2>Noida-Specific Treasury Wins</h2>
      <ul>
        <li><strong>Bulk orders:</strong> Manage pre-payment liquidity with treasury ladder</li>
        <li><strong>Seasonal exports:</strong> Park Q2-Q4 export revenues in short-term funds</li>
        <li><strong>GST deposits:</strong> Keep refund swaps in liquid funds until cleared</li>
        <li><strong>Same-city support:</strong> Finofiii HQ in Sector 3, Noida—walk-in visits available</li>
      </ul>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Book Local Consultation
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ MUMBAI ============

export const TreasuryMumbai = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Treasury Management in Mumbai: Financial Capital Expertise</h1>
    <ReadingTime minutes={5} />
    
    <p className="context-paragraph">
      Mumbai's finance, trading, and services sectors operate at scale. Institutional-grade treasury management is table-stakes. Finofiii brings that same rigor to mid-sized Mumbai businesses.
    </p>

    <div className="stat-card">
      <h3>📈 Mumbai Opportunity (₹5 Crore Idle)</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">Savings A/c @ 4%</div>
          <div className="stat-amount">₹20 Lakhs/Yr</div>
          <div className="stat-label">Low return</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">Treasury Ladder @ 6-7%</div>
          <div className="stat-amount">₹30-35 Lakhs/Yr</div>
          <div className="stat-label">+ tax indexation benefit</div>
        </div>
      </div>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Mumbai Treasury Setup
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ PUNE ============

export const TreasuryPune = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Treasury for Pune Businesses: Automotive & IT Hub</h1>
    <ReadingTime minutes={4} />
    
    <p className="context-paragraph">
      Pune is home to automotive Tier-1s, IT services, and export-oriented manufacturing. High-velocity cash flows demand smart treasury management to optimize working capital.
    </p>

    <div className="card">
      <h2>Pune Business Treasury Strategy</h2>
      <ul>
        <li><strong>🚗 Automotive cycles:</strong> 3-6 month treasury ladder matches payment cycles</li>
        <li><strong>💻 IT SaaS:</strong> Monthly recurring revenue → quarterly reinvestment planning</li>
        <li><strong>📦 Exports:</strong> Forex inflows → park in liquid funds until conversion</li>
        <li><strong>🏭 Manufacturing:</strong> Inventory financing via treasury + working capital optimization</li>
      </ul>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Pune Business Treasury
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ BANGALORE ============

export const TreasuryBangalore = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Treasury Management in Bangalore: Tech Capital Solutions</h1>
    <ReadingTime minutes={5} />
    
    <p className="context-paragraph">
      Bangalore's startup and tech ecosystem demands sophisticated cash management. High burn rates, uneven funding rounds, and multi-currency payments require professional treasury planning.
    </p>

    <div className="stat-card">
      <h3>🚀 Bangalore Startup Treasury Model</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">Series A Runway (₹3 Crore)</div>
          <div className="stat-amount">18-24 months</div>
          <div className="stat-label">Typical burn rate</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">+ Treasury Returns</div>
          <div className="stat-amount">₹15-18 Lakhs</div>
          <div className="stat-label">Extends runway by 1-2 months</div>
        </div>
      </div>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Bangalore Startup Treasury
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ HYDERABAD ============

export const TreasuryHyderabad = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Treasury Management in Hyderabad: Pharma & IT Excellence</h1>
    <ReadingTime minutes={4} />
    
    <p className="context-paragraph">
      Hyderabad's pharma, IT, and biotech sectors are global-scale operations. Treasury management here manages multi-currency flows, regulatory compliance, and working capital across time zones.
    </p>

    <div className="card">
      <h2>Hyderabad Sector-Specific Treasury</h2>
      <ul>
        <li><strong>💊 Pharma exports:</strong> USD/EUR inflows → rupee treasury strategy for cost optimization</li>
        <li><strong>🔬 Biotech:</strong> R&D cycles require 6-12 month cash planning</li>
        <li><strong>💻 IT Services:</strong> Monthly TCS-style collections → quarterly distribution planning</li>
        <li><strong>🏢 Corporate treasury:</strong> Multi-account management, cash pooling optimization</li>
      </ul>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Hyderabad Enterprise Treasury
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ GURGAON ============

export const TreasuryGurgaon = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Treasury Management in Gurgaon: Corporate & Startup Hub</h1>
    <ReadingTime minutes={4} />
    
    <p className="context-paragraph">
      Gurgaon is India's corporate hub—MNCs, consulting firms, and high-growth startups converge. Treasury management here bridges institutional needs with startup agility.
    </p>

    <div className="stat-card">
      <h3>💼 Gurgaon Corporate Treasury</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">MNC Regional HQ</div>
          <div className="stat-amount">₹50 Crores</div>
          <div className="stat-label">Typical quarterly float</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">Treasury Optimization</div>
          <div className="stat-amount">₹3+ Crores</div>
          <div className="stat-label">Annual upside @ 6-7%</div>
        </div>
      </div>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Gurgaon Corporate Treasury
      </a>
    </div>

    <ComplianceFooter />
  </div>
);
