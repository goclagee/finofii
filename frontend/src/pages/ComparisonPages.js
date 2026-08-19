import React from 'react';

export const TreasuryVsFD = () => (
  <div className="page">
    <h1>Treasury Management vs Fixed Deposits: Which is Better?</h1>
    <p className="lead">Comparing liquidity, returns, and flexibility for startups and businesses.</p>
    
    <h2>Quick Comparison</h2>
    <table>
      <tr><th>Feature</th><th>Treasury (Liquid Funds)</th><th>Fixed Deposits</th></tr>
      <tr><td>Liquidity</td><td>1-2 days</td><td>Locked until maturity</td></tr>
      <tr><td>Returns</td><td>5-7% per annum</td><td>5-6% per annum</td></tr>
      <tr><td>Tax Efficiency</td><td>Better (debt fund indexation)</td><td>Taxed as income</td></tr>
      <tr><td>Risk</td><td>Minimal (debt-backed)</td><td>Minimal (bank-backed)</td></tr>
    </table>

    <h2>Treasury Management for Idle Cash</h2>
    <p>For startups with fluctuating cash needs, treasury management via liquid funds offers superior flexibility. Your idle cash remains accessible while earning 5-7% returns, unlike fixed deposits which lock your capital.</p>
    
    <h2>When to Choose Each</h2>
    <p><strong>Choose Treasury if:</strong> You need liquidity, have variable cash flow, or want tax efficiency.</p>
    <p><strong>Choose FD if:</strong> You can lock capital, prefer guaranteed rates, or want simplicity.</p>

    <div className="cta">
      <p>💡 <strong>Optimize your idle cash today.</strong> Our treasury management platform earns you 5-7% while keeping funds accessible.</p>
      <a href="https://wa.me/919311361888" className="btn-whatsapp">Schedule a Demo on WhatsApp</a>
    </div>

    <div className="compliance">
      <small>Disclaimer: Finofii is registered as an MFD (Mutual Fund Distributor) under ARN-176236 with AMFI. Returns are indicative and not guaranteed. Past performance ≠ future results. Please consult with a financial advisor before investing.</small>
    </div>
  </div>
);

export const TreasuryVsSIP = () => (
  <div className="page">
    <h1>Treasury Management vs SIP: Finding the Right Strategy</h1>
    <p className="lead">Understand the difference between treasury (liquid funds) and equity SIPs for your investment goals.</p>
    
    <h2>Core Differences</h2>
    <p><strong>Treasury:</strong> Preserves capital + generates 5-7% returns. Best for idle cash, emergency funds, quarterly reserves.</p>
    <p><strong>SIP:</strong> Builds wealth over 5-10 years through equity exposure. Best for long-term wealth creation.</p>

    <h2>Your Strategy</h2>
    <p><strong>Emergency Fund (3-6 months):</strong> Treasury/Liquid Funds</p>
    <p><strong>Long-term Growth (5+ years):</strong> SIP in equity funds</p>
    <p><strong>Quarterly Reserves:</strong> Treasury Management</p>

    <div className="cta">
      <p>💡 Build a balanced strategy. Finofii helps optimize both sides.</p>
      <a href="https://wa.me/919311361888" className="btn-whatsapp">Let's Talk Strategy</a>
    </div>
  </div>
);

export const TreasuryVsSavings = () => (
  <div className="page">
    <h1>Treasury vs Savings Account: Why Your Idle Cash is Losing Value</h1>
    <p className="lead">Earn 5-7% on treasury vs 4% on savings accounts. See the difference over 1 year.</p>
    
    <h2>The Math</h2>
    <p>₹10 Lakhs in Savings Account: ₹40,000/year</p>
    <p>₹10 Lakhs in Treasury: ₹60,000/year</p>
    <p><strong>Annual Difference: ₹20,000</strong></p>

    <h2>Why Treasury Wins</h2>
    <ul>
      <li>Higher returns (5-7% vs 4%)</li>
      <li>Same liquidity (withdraw anytime)</li>
      <li>Tax-efficient (debt fund indexation)</li>
      <li>SEBI-regulated (safe)</li>
    </ul>

    <div className="cta">
      <p>Stop leaving money on the table. Move your emergency fund to treasury.</p>
      <a href="https://wa.me/919311361888" className="btn-whatsapp">Learn More</a>
    </div>
  </div>
);

// Export other comparison pages similarly
export const TreasuryVsDebt = TreasuryVsFD;
export const TreasuryVsEquity = TreasuryVsFD;
export const TreasuryVsRealEstate = TreasuryVsFD;
export const LiquidFundsVsFD = TreasuryVsFD;
export const MFDDifference = TreasuryVsFD;
