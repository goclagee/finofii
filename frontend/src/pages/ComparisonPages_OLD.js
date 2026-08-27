import React from 'react';
import '../styles/BrandPages.css';

// Trust Badges Component
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

// Reading Time Component
const ReadingTime = ({ minutes = 5 }) => (
  <div className="reading-time">
    <span>⏱️</span> {minutes} min read
  </div>
);

// Stat Card with Real Examples
const TreasuryVsFDStatCard = () => (
  <div className="stat-card">
    <h3>💰 Real Example: ₹10 Lakh for 6 Months</h3>
    <div className="stat-example">
      <div className="stat-item">
        <div className="stat-label">Treasury / Liquid Fund</div>
        <div className="stat-amount">₹60,000</div>
        <div className="stat-label">@ 6% p.a.</div>
      </div>
      <div className="stat-item winner">
        <div className="stat-label">Fixed Deposit</div>
        <div className="stat-amount">₹30,000</div>
        <div className="stat-label">@ 6% p.a. (half year)</div>
      </div>
    </div>
    <div className="stat-comparison">
      <div className="stat-diff">Treasury Wins: ₹30,000 Extra</div>
      <div className="stat-diff-label">+ Full Liquidity (withdraw anytime)</div>
    </div>
  </div>
);

export const TreasuryVsFD = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Treasury Management vs Fixed Deposits: Which Earns You More?</h1>
    <ReadingTime minutes={5} />
    
    <p className="context-paragraph">
      Two popular options for parking idle cash are treasury management via liquid funds and fixed deposits. Both offer safety and steady returns, but they differ in flexibility, returns, and liquidity. This guide will help you choose based on your financial goals and cash flow needs.
    </p>
    
    <TreasuryVsFDStatCard />
    
    <div className="card">
      <h2>Feature-by-Feature Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Treasury (Liquid Funds)</th>
            <th>Fixed Deposits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong><span className="table-icon">⚡</span>Liquidity</strong></td>
            <td><span className="check-mark">✓</span> 1-2 days withdrawal</td>
            <td><span className="cross-mark">✗</span> Locked until maturity</td>
          </tr>
          <tr>
            <td><strong><span className="table-icon">💰</span>Returns</strong></td>
            <td><span className="check-mark">✓</span> 6-7% per annum</td>
            <td><span className="check-mark">✓</span> 5-6% per annum</td>
          </tr>
          <tr>
            <td><strong><span className="table-icon">📊</span>Tax Efficiency</strong></td>
            <td><span className="check-mark">✓</span> Better (indexation)</td>
            <td><span className="cross-mark">✗</span> Taxed as income (TDS @ ₹50k+)</td>
          </tr>
          <tr>
            <td><strong><span className="table-icon">🔄</span>Flexibility</strong></td>
            <td><span className="check-mark">✓</span> Withdraw anytime</td>
            <td><span className="cross-mark">✗</span> Penalty for early withdrawal</td>
          </tr>
          <tr>
            <td><strong><span className="table-icon">🛡️</span>Safety</strong></td>
            <td><span className="check-mark">✓</span> SEBI-regulated, debt-backed</td>
            <td><span className="check-mark">✓</span> Bank-backed, CDIC insured</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="section">
      <h2>Why Treasury Wins for Idle Cash</h2>
      <p>For startups and businesses with fluctuating cash needs, treasury management via liquid funds offers superior flexibility. Your idle cash remains accessible for quarterly expenses, unexpected costs, or payroll while earning <strong>6-7% returns</strong>, unlike fixed deposits which lock your capital.</p>
      
      <h3>Scenario Analysis</h3>
      <ul>
        <li><strong>Startup with ₹50L idle cash:</strong> Treasury earns ₹3L+ per year vs FD's ₹2.5L, PLUS you can access it anytime.</li>
        <li><strong>Company with quarterly reserves:</strong> Treasury funds allow you to withdraw for Q2 payroll while continuing to earn on the balance.</li>
        <li><strong>Freelancer building emergency fund:</strong> Higher returns than savings account (4%) + instant access if needed.</li>
      </ul>
    </div>

    <div className="section">
      <h2>Who Should Choose What?</h2>
      <div className="who-should-choose">
        <div className="choose-option">
          <h4><span className="table-icon">✓</span> Choose Treasury If:</h4>
          <ul>
            <li>You need access to cash regularly</li>
            <li>Your business has variable cash flow</li>
            <li>You want higher tax-adjusted returns</li>
            <li>You need funds for emergencies or opportunities</li>
            <li>You manage quarterly or monthly expenses</li>
          </ul>
        </div>
        <div className="choose-option">
          <h4><span className="table-icon">✓</span> Choose FD If:</h4>
          <ul>
            <li>You can lock capital for 1+ years</li>
            <li>You prefer guaranteed interest rates</li>
            <li>You want simplicity and no management</li>
            <li>You're building long-term reserves</li>
            <li>You prefer working with your bank</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="cta">
      <p>💡 <strong>Stop leaving ₹30,000+ annually on the table.</strong> Start earning more on your idle cash with Finofiii's treasury management platform.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        👉 Schedule Your Free Demo Now
      </a>
    </div>

    <div className="compliance">
      <small><strong>⚖️ Compliance & Disclaimer:</strong> Finofiii is registered as an MFD (Mutual Fund Distributor) under ARN-176236 with AMFI and is a BSE Star MF Partner. Returns are based on historical data and market performance; past performance does not guarantee future results. Liquid funds invest in money market instruments and carry interest rate risk. Please consult with a SEBI-certified financial advisor before making investment decisions. Finofiii does not offer financial advice; we facilitate access to mutual funds.</small>
    </div>
  </div>
);

export const TreasuryVsSIP = () => (
  <div className="page">
    <h1>Treasury vs SIP: Which Strategy is Right for You?</h1>
    <p className="lead">Understand the difference between treasury (liquid funds) and equity SIPs for your financial goals.</p>
    
    <div className="section">
      <h2>Core Differences</h2>
      <p><strong>Treasury:</strong> Preserves capital + generates 5-7% returns. Best for idle cash, emergency funds, quarterly reserves.</p>
      <p><strong>SIP:</strong> Builds long-term wealth through equity exposure. Best for wealth creation over 5-10 years.</p>
    </div>

    <div className="card">
      <h2>Your Balanced Strategy</h2>
      <ul>
        <li><strong>Emergency Fund (3-6 months):</strong> Treasury / Liquid Funds</li>
        <li><strong>Long-term Growth (5+ years):</strong> SIP in equity funds</li>
        <li><strong>Quarterly Reserves:</strong> Treasury Management</li>
      </ul>
    </div>

    <div className="cta">
      <p>Build a balanced strategy that works. Finofiii helps optimize both sides.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">Let's Talk Strategy</a>
    </div>

    <div className="compliance">
      <small><strong>Disclaimer:</strong> Finofiii is an AMFI-registered MFD (ARN-176236). Investment returns are subject to market conditions. Please consult a financial advisor before making investment decisions.</small>
    </div>
  </div>
);

export const TreasuryVsSavings = () => (
  <div className="page">
    <h1>Treasury vs Savings Account: Don't Waste Your Money</h1>
    <p className="lead">Earn 5-7% on treasury vs 4% on savings. See the real difference over a year.</p>
    
    <div className="card">
      <h2>The Numbers Don't Lie</h2>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <p style={{ fontSize: '1.3rem', marginBottom: '10px' }}>₹10 Lakhs Invested for 1 Year:</p>
        <p style={{ fontSize: '1rem', color: '#94A3B8' }}>Savings Account (4%): <strong style={{ color: '#1B3A5C' }}>₹40,000/year</strong></p>
        <p style={{ fontSize: '1rem', color: '#94A3B8' }}>Treasury Fund (6%): <strong style={{ color: '#3DD4B0', fontSize: '1.2rem' }}>₹60,000/year</strong></p>
        <p style={{ fontSize: '1.2rem', fontWeight: '700', color: '#3B9DC8', marginTop: '15px' }}>📈 Extra Earnings: ₹20,000/year</p>
      </div>
    </div>

    <div className="section">
      <h2>Why Treasury Wins</h2>
      <ul>
        <li><strong>Higher returns</strong> (5-7% vs 4%)</li>
        <li><strong>Same liquidity</strong> (withdraw anytime)</li>
        <li><strong>Tax-efficient</strong> (debt fund indexation)</li>
        <li><strong>SEBI-regulated</strong> (safe)</li>
      </ul>
    </div>

    <div className="cta">
      <p>Stop leaving ₹20,000 on the table every year. Move your idle cash to treasury today.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">Start Earning More</a>
    </div>

    <div className="compliance">
      <small><strong>Disclaimer:</strong> Finofiii (ARN-176236) provides MFD services. Returns shown are illustrative. Actual returns depend on market conditions and fund performance.</small>
    </div>
  </div>
);

export const TreasuryVsDebt = TreasuryVsFD;
export const TreasuryVsEquity = TreasuryVsFD;
export const TreasuryVsRealEstate = TreasuryVsFD;
export const LiquidFundsVsFD = TreasuryVsFD;
export const MFDDifference = TreasuryVsFD;
