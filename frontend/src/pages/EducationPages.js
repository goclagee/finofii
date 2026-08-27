import React from 'react';
import '../styles/BrandPages.css';

export const WhatIsTreasury = () => (
  <div className="page">
    <h1>What is Treasury Management?</h1>
    <p className="lead">Complete guide for founders and business owners.</p>
    
    <div className="section">
      <h2>Simple Definition</h2>
      <p>Treasury management is <strong>optimizing idle cash to earn maximum returns while maintaining liquidity</strong>. For startups, it means:</p>
      <ul>
        <li>Keep cash accessible (1-2 days to withdraw)</li>
        <li>Earn 5-7% returns via liquid funds</li>
        <li>SEBI-regulated & tax-efficient</li>
        <li>Better than savings accounts (4%)</li>
      </ul>
    </div>

    <div className="card">
      <h2>Why Startups Need This</h2>
      <p>Monthly revenue ≠ predictable spending. You accumulate cash in good months. That idle cash can earn <strong>₹20,000/year per ₹10 lakhs</strong> vs ₹0 in a current account.</p>
      <p>This is free money you're leaving on the table.</p>
    </div>

    <div className="cta">
      <p>Calculate how much you could earn on your idle cash.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">Get Your Numbers</a>
    </div>

    <div className="compliance">
      <small><strong>Disclaimer:</strong> Finofiii is an AMFI-registered MFD (ARN-176236). Returns are indicative. Please consult a financial advisor before investing.</small>
    </div>
  </div>
);

export const LiquidFunds101 = () => (
  <div className="page">
    <h1>Liquid Funds Explained: Beginner's Guide</h1>
    <p className="lead">Everything you need to know about investing in liquid mutual funds.</p>
    
    <div className="section">
      <h2>What Are Liquid Funds?</h2>
      <p>Mutual funds that invest in short-term debt securities (3 months or less). Key features:</p>
      <ul>
        <li><strong>Low risk</strong> (backed by government securities)</li>
        <li><strong>5-7% returns</strong></li>
        <li><strong>1-2 day withdrawal</strong></li>
        <li><strong>Tax-efficient</strong> (indexation benefit)</li>
      </ul>
    </div>

    <div className="card">
      <h2>How They Work</h2>
      <p>You invest → Fund manager invests in short-term debt → Interest accrues daily → You can withdraw anytime with 1-2 day settlement.</p>
      <p>It's like a hybrid: the safety of a bank deposit with better returns and flexibility.</p>
    </div>

    <div className="cta">
      <p>Ready to start earning on your idle cash?</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">Start Investing</a>
    </div>

    <div className="compliance">
      <small><strong>Disclaimer:</strong> Finofiii (ARN-176236) provides MFD services. Liquid fund investments carry market risk. Past performance ≠ future returns.</small>
    </div>
  </div>
);

export const CurrentAccountExplained = () => (
  <div className="page">
    <h1>Current Accounts: Business Owner's Guide</h1>
    <p className="lead">Understand how current accounts work and why they're not for savings.</p>
    
    <div className="section">
      <h2>What You Need to Know</h2>
      <p>Current accounts are designed for <strong>frequent transactions</strong>, not savings. Key fact: <strong>You earn 0% interest on idle cash in a current account.</strong></p>
      <p>If you keep excess cash here, you're losing money every single day.</p>
    </div>

    <div className="card">
      <h2>The Better Approach</h2>
      <ul>
        <li>Use current account for operations & daily payments</li>
        <li>Move excess cash to treasury/liquid funds</li>
        <li>Earn 5-7% while funds remain accessible</li>
      </ul>
    </div>

    <div className="cta">
      <p>Stop wasting money on idle current account balances.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">Optimize Your Cash Flow</a>
    </div>

    <div className="compliance">
      <small><strong>Disclaimer:</strong> Finofiii is an AMFI-registered MFD (ARN-176236). Treasury investments carry market risk. Consult a financial advisor before investing.</small>
    </div>
  </div>
);

export const NavExplained = () => (
  <div className="page">
    <h1>NAV Explained: Net Asset Value Simplified</h1>
    <p className="lead">Understanding the price you pay for mutual fund units.</p>
    
    <div className="card">
      <h2>Simple Formula</h2>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', padding: '20px', background: '#F1F5F9', borderRadius: '8px' }}>
        <strong>NAV = Fund Assets ÷ Number of Units</strong>
      </p>
      <p>It's the <strong>per-unit value of a mutual fund on any given day</strong>.</p>
    </div>

    <div className="section">
      <h2>Why It Matters</h2>
      <p>You buy units at the current NAV. If fund value grows, NAV increases, and your units gain value. This is how you earn returns.</p>
    </div>

    <div className="cta">
      <p>Learn how to evaluate fund performance and NAV trends.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">Learn Fund Investing</a>
    </div>

    <div className="compliance">
      <small><strong>Disclaimer:</strong> Finofiii (ARN-176236) provides MFD services. NAV fluctuates daily. Past performance is not indicative of future results.</small>
    </div>
  </div>
);

export const ExpenseRatio = () => (
  <div className="page">
    <h1>Expense Ratio (TER): What You Actually Pay</h1>
    <p className="lead">Understand the annual cost of owning mutual funds.</p>
    
    <div className="card">
      <h2>What It Is</h2>
      <p>Annual fee charged by the fund for managing your money.</p>
      <p><strong>Example:</strong> 0.25% expense ratio = ₹250/year per ₹1 lakh invested</p>
    </div>

    <div className="section">
      <h2>Liquid Fund Expense Ratios</h2>
      <p>Typically <strong>0.2-0.4%</strong> (very low). Quality funds charge less and often perform better.</p>
      <p>This is why liquid funds are ideal for short-term treasury management—low fees don't eat into your returns.</p>
    </div>

    <div className="cta">
      <p>Lower expenses = Higher returns for you. Compare funds wisely.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">Compare Fund Costs</a>
    </div>

    <div className="compliance">
      <small><strong>Disclaimer:</strong> Finofiii (ARN-176236) provides MFD services. Expense ratios vary by fund and can change. Review fund documents for accuracy.</small>
    </div>
  </div>
);

export const ExitLoadExplained = () => (
  <div className="page">
    <h1>Exit Load: The Fee You Pay to Withdraw</h1>
    <p className="lead">When and why funds charge you to take your money back.</p>
    
    <div className="card">
      <h2>Definition</h2>
      <p>Fee charged if you withdraw before the specified holding period.</p>
      <p><strong>Example:</strong> Withdraw ₹1 lakh from a fund with 1% exit load before 30 days → Pay ₹500 fee</p>
    </div>

    <div className="section">
      <h2>Liquid Funds (The Good News)</h2>
      <p>Most liquid funds have <strong>zero exit load</strong>. This means you can withdraw anytime without paying a fee.</p>
      <p>This is why liquid funds are perfect for emergency reserves and operational cash.</p>
    </div>

    <div className="cta">
      <p>Choose no-load funds for maximum flexibility.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">Find No-Load Funds</a>
    </div>

    <div className="compliance">
      <small><strong>Disclaimer:</strong> Finofiii (ARN-176236) is an AMFI-registered MFD. Exit loads vary by fund. Review fund documents before investing.</small>
    </div>
  </div>
);

export const CutoffTimeExplained = () => (
  <div className="page">
    <h1>Fund Cut-off Time: When Your Order Counts</h1>
    <p className="lead">Understanding same-day vs next-day processing.</p>
    
    <div className="card">
      <h2>What It Means</h2>
      <p>Investment orders placed <strong>after cut-off time</strong> are processed the next day at next day's NAV.</p>
      <p><strong>Typical cut-off:</strong> 3-5 PM</p>
    </div>

    <div className="section">
      <h2>For Liquid Funds</h2>
      <ul>
        <li><strong>Order before 3 PM:</strong> Same-day processing</li>
        <li><strong>Order after 3 PM:</strong> Next day processing</li>
      </ul>
      <p>This is important for timing your investments and withdrawals.</p>
    </div>

    <div className="cta">
      <p>Invest smart. Know the rules before you invest.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">Invest Now</a>
    </div>

    <div className="compliance">
      <small><strong>Disclaimer:</strong> Finofiii (ARN-176236) provides MFD services. Cut-off times vary by fund and fund house. Always verify before investing.</small>
    </div>
  </div>
);
