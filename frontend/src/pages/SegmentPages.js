import React from 'react';
import '../styles/BrandPages.css';

// ============ REUSABLE COMPONENTS ============

const TrustBadges = () => (
  <div className="trust-badges">
    <div className="trust-badge">
      <span className="trust-badge-icon">🏛️</span> SEBI Regulated
    </div>
    <div className="trust-badge">
      <span className="trust-badge-icon">📜</span> ARN-176236 (AMFI)
    </div>
    <div className="trust-badge">
      <span className="trust-badge-icon">⭐</span> BSE Star MF Partner
    </div>
  </div>
);

const ReadingTime = ({ minutes = 5 }) => (
  <div className="reading-time">
    <span>⏱️</span> {minutes} min read
  </div>
);

const ComplianceFooter = () => (
  <div className="compliance">
    <small><strong>⚖️ Compliance & Disclaimer:</strong> Finofii is registered as an MFD (Mutual Fund Distributor) under ARN-176236 with AMFI and is a BSE Star MF Partner. Returns are based on historical data and market performance; past performance does not guarantee future results. Liquid funds invest in money market instruments and carry interest rate risk. Please consult with a SEBI-certified financial advisor before making investment decisions.</small>
  </div>
);

// ============ IDLE CASH FOR STARTUPS ============

export const IdleCashStartups = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Idle Cash Management for Startups: Every Rupee Counts</h1>
    <ReadingTime minutes={5} />
    
    <p className="context-paragraph">
      Startups have unpredictable cash flows. Investors fund in lumps, revenue comes in waves, and expenses hit monthly. That idle cash sitting in a current account earning ₹0 is a wasted opportunity. Treasury management turns that cash into a revenue stream.
    </p>

    <div className="stat-card">
      <h3>📊 Startup Cash Flow Reality</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">Current Account</div>
          <div className="stat-amount">₹0</div>
          <div className="stat-label">Monthly return on ₹50L</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">Treasury Fund</div>
          <div className="stat-amount">₹25,000</div>
          <div className="stat-label">Monthly return on ₹50L @ 6%</div>
        </div>
      </div>
      <div className="stat-comparison">
        <div className="stat-diff">₹3,00,000/Year Extra</div>
        <div className="stat-diff-label">Without touching your operational cash</div>
      </div>
    </div>

    <div className="section">
      <h2>Why Startups Need Treasury Management</h2>
      <ul>
        <li><strong>🌊 Lumpy funding:</strong> You get ₹5 crore, not ₹40L per month</li>
        <li><strong>📉 Variable expenses:</strong> Payroll, server costs, marketing change monthly</li>
        <li><strong>⏱️ Liquidity needed:</strong> Cash must be available in 1-2 days for opportunities</li>
        <li><strong>💰 Every rupee matters:</strong> ₹3L/year extra = growth hiring or runway extension</li>
      </ul>
    </div>

    <div className="card">
      <h2>Startup Treasury Strategy</h2>
      <ul>
        <li><strong>Months 1-3 expenses:</strong> Emergency fund in current account (no return, pure safety)</li>
        <li><strong>Months 4+ cash:</strong> Park in liquid funds (6-7% return, 1-2 day access)</li>
        <li><strong>Quarterly surplus:</strong> Invest in 3-6 month liquid funds (slightly higher return)</li>
        <li><strong>Next funding round prep:</strong> Keep 30 days expenses liquid, park rest</li>
      </ul>
    </div>

    <div className="cta">
      <p>Turn your idle cash into ₹3L+/year. Get set up in 24 hours, no complex paperwork.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Set Up Treasury for Your Startup
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ IDLE CASH FOR MSMEs ============

export const IdleCashMSME = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Treasury Management for MSMEs: Maximize Seasonal Cash</h1>
    <ReadingTime minutes={5} />
    
    <p className="context-paragraph">
      MSMEs operate on seasons, festivals, and market cycles. You have cash-rich months and cash-poor months. Smart treasury management turns seasonal cash peaks into working capital for lean periods.
    </p>

    <div className="stat-card">
      <h3>📈 MSME Cash Cycle (Annual)</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">Busy Months (₹30L)</div>
          <div className="stat-amount">₹1,50,000</div>
          <div className="stat-label">Parked @ 6% return (6 months)</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">Lean Months (Use for ops)</div>
          <div className="stat-amount">+₹1,50,000</div>
          <div className="stat-label">Extra runway without debt</div>
        </div>
      </div>
    </div>

    <div className="section">
      <h2>MSME-Specific Benefits</h2>
      <ul>
        <li><strong>🔄 Seasonal smoothing:</strong> Earn on peak season cash, use returns in low season</li>
        <li><strong>💳 Avoid costly loans:</strong> ₹1.5L return > ₹18k+ loan interest</li>
        <li><strong>📊 Tax efficiency:</strong> Indexation benefit reduces tax on gains</li>
        <li><strong>🛡️ Reputation:</strong> Healthy balance sheet attracts suppliers and lenders</li>
      </ul>
    </div>

    <div className="cta">
      <p>Smart MSMEs earn on seasonal cash. Don't leave ₹3-5L/year on the table.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Optimize Your Cash (No Fees Setup)
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ CORPORATE TREASURY ============

export const CorporateTreasury = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Corporate Treasury Management: Professional Cash Optimization</h1>
    <ReadingTime minutes={6} />
    
    <p className="context-paragraph">
      Large corporates earn millions on idle cash through professional treasury management. Liquid funds, debt funds, and working capital optimization are standard practice. Finofii brings this institutional capability to mid-sized corporates.
    </p>

    <div className="stat-card">
      <h3>💼 Corporate Treasury Impact (₹10 Crore Idle Cash)</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">Status Quo (Current account)</div>
          <div className="stat-amount">₹0</div>
          <div className="stat-label">Annual return</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">Treasury Strategy</div>
          <div className="stat-amount">₹60-70 Lakhs</div>
          <div className="stat-label">Annual return @ 6-7%</div>
        </div>
      </div>
    </div>

    <div className="card">
      <h2>Enterprise Treasury Strategy</h2>
      <table>
        <thead>
          <tr>
            <th>Duration</th>
            <th>Allocation</th>
            <th>Return</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>0-30 days</strong></td>
            <td>20% Current A/c</td>
            <td>0%</td>
            <td>Working capital</td>
          </tr>
          <tr>
            <td><strong>30-90 days</strong></td>
            <td>40% Liquid Funds</td>
            <td><span className="check-mark">✓</span> 6-7%</td>
            <td>Operations buffer</td>
          </tr>
          <tr>
            <td><strong>3-6 months</strong></td>
            <td>30% Short-term Debt</td>
            <td><span className="check-mark">✓</span> 7-8%</td>
            <td>Seasonal needs</td>
          </tr>
          <tr>
            <td><strong>6+ months</strong></td>
            <td>10% Medium-term</td>
            <td><span className="check-mark">✓</span> 8-9%</td>
            <td>Growth reserves</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="cta">
      <p>Professional treasury management for corporates. Institutional strategies, simplified access.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Book Treasury Consultation
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ WEALTH & FAMILY OFFICES ============

export const WealthFamilyOffice = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Family Office Wealth Management: Multi-Asset Treasury Strategy</h1>
    <ReadingTime minutes={6} />
    
    <p className="context-paragraph">
      Family offices manage complex wealth across generations. Treasury is just one component of a comprehensive strategy that includes equities, real estate, and alternative investments. Finofii provides the treasury management backbone.
    </p>

    <div className="stat-card">
      <h3>👨‍👩‍👧‍👦 Family Office Asset Allocation (₹50 Crore)</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">Liquid Reserves (₹5Cr)</div>
          <div className="stat-amount">₹30-35L/Year</div>
          <div className="stat-label">Treasury returns</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">+ Equity/Real Estate Growth</div>
          <div className="stat-amount">₹2-3 Crores</div>
          <div className="stat-label">Annual appreciation</div>
        </div>
      </div>
    </div>

    <div className="section">
      <h2>Complete Wealth Ecosystem</h2>
      <ul>
        <li><strong>🏦 Treasury:</strong> Liquid reserves earning 6-7% (Finofii handles)</li>
        <li><strong>📊 Equities:</strong> Long-term growth via SIP/funds</li>
        <li><strong>🏠 Real Estate:</strong> Property holdings and rental income</li>
        <li><strong>💼 Alternative:</strong> Private equity, structured products</li>
        <li><strong>⚖️ Estate Planning:</strong> Succession, tax optimization, trusts</li>
      </ul>
    </div>

    <div className="cta">
      <p>Treasury that integrates with your complete wealth strategy. Multi-generational wealth planning starts here.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Talk to Family Office Specialists
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ NRI DOLLAR PARKING ============

export const NRIDollarParking = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>NRI Rupee Parking: Convert & Earn on Your Indian Surplus</h1>
    <ReadingTime minutes={4} />
    
    <p className="context-paragraph">
      NRIs often have rupee surpluses from Indian business, property income, or family remittances. These rupees need liquidity, but sitting in a savings account wastes 2-3% per year. Treasury management turns rupees into growth.
    </p>

    <div className="stat-card">
      <h3>🌍 NRI Rupee Returns Comparison</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">Savings Account</div>
          <div className="stat-amount">₹40,000</div>
          <div className="stat-label">Annual on ₹10L @ 4%</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">Liquid Fund</div>
          <div className="stat-amount">₹60,000</div>
          <div className="stat-label">Annual on ₹10L @ 6%</div>
        </div>
      </div>
      <div className="stat-comparison">
        <div className="stat-diff">₹20,000/Year Extra</div>
        <div className="stat-diff-label">Fully liquid, withdraw anytime to convert to forex</div>
      </div>
    </div>

    <div className="card">
      <h2>NRI Treasury Benefits</h2>
      <ul>
        <li><strong>💱 Rupee parking:</strong> Hold rupees earning 6-7%, convert to forex when rates are favorable</li>
        <li><strong>⚡ Full access:</strong> Withdraw in 1-2 days if rate opportunity emerges</li>
        <li><strong>🛡️ SEBI-safe:</strong> No forex risk, only interest earnings</li>
        <li><strong>📋 NRO/NRE:</strong> Works seamlessly with your NRI account</li>
      </ul>
    </div>

    <div className="cta">
      <p>Stop leaving money on the table with savings accounts. Earn while you wait for the right forex moment.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Set Up NRI Rupee Treasury
      </a>
    </div>

    <ComplianceFooter />
  </div>
);
