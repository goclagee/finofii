import React from 'react';
import '../styles/BrandPages.css';

export const TreasuryVsFD = () => (
  <div className="page">
    <h1>Treasury Management vs Fixed Deposits</h1>
    <p className="lead">Compare liquidity, returns, and flexibility for your business cash.</p>
    
    <div className="card">
      <h2>Quick Comparison</h2>
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
            <td><strong>Liquidity</strong></td>
            <td>1-2 days withdrawal</td>
            <td>Locked until maturity</td>
          </tr>
          <tr>
            <td><strong>Returns</strong></td>
            <td>5-7% per annum</td>
            <td>5-6% per annum</td>
          </tr>
          <tr>
            <td><strong>Tax Efficiency</strong></td>
            <td>Better (indexation)</td>
            <td>Taxed as income</td>
          </tr>
          <tr>
            <td><strong>Risk</strong></td>
            <td>Minimal (debt-backed)</td>
            <td>Minimal (bank-backed)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="section">
      <h2>Why Treasury Wins for Idle Cash</h2>
      <p>For startups with fluctuating cash needs, treasury management via liquid funds offers superior flexibility. Your idle cash remains accessible while earning <strong>5-7% returns</strong>, unlike fixed deposits which lock your capital.</p>
      
      <h3>When to Choose Each</h3>
      <p><strong>✓ Choose Treasury if:</strong> You need liquidity, have variable cash flow, or want tax efficiency.</p>
      <p><strong>✓ Choose FD if:</strong> You can lock capital, prefer guaranteed rates, or want simplicity.</p>
    </div>

    <div className="cta">
      <p>💡 <strong>Stop leaving money on the table.</strong> Optimize your idle cash today with treasury management.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Schedule Demo on WhatsApp
      </a>
    </div>

    <div className="compliance">
      <small><strong>Disclaimer:</strong> Finofii is registered as an MFD (Mutual Fund Distributor) under ARN-176236. Returns are indicative and not guaranteed. Past performance ≠ future results. Please consult with a financial advisor before investing.</small>
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
      <p>Build a balanced strategy that works. Finofii helps optimize both sides.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">Let's Talk Strategy</a>
    </div>

    <div className="compliance">
      <small><strong>Disclaimer:</strong> Finofii is an AMFI-registered MFD (ARN-176236). Investment returns are subject to market conditions. Please consult a financial advisor before making investment decisions.</small>
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
      <small><strong>Disclaimer:</strong> Finofii (ARN-176236) provides MFD services. Returns shown are illustrative. Actual returns depend on market conditions and fund performance.</small>
    </div>
  </div>
);

export const TreasuryVsDebt = TreasuryVsFD;
export const TreasuryVsEquity = TreasuryVsFD;
export const TreasuryVsRealEstate = TreasuryVsFD;
export const LiquidFundsVsFD = TreasuryVsFD;
export const MFDDifference = TreasuryVsFD;
