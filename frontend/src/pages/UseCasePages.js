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

// ============ EMERGENCY FUND ============

export const EmergencyFund = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Emergency Fund Planning: The Right Treasury Strategy</h1>
    <ReadingTime minutes={5} />
    
    <p className="context-paragraph">
      Financial advisors recommend 6 months of expenses in an emergency fund. But where should you keep it? A savings account leaves money underutilised. Liquid funds offer market-linked returns—and you can withdraw in 1-2 days.
    </p>

    <div className="stat-card">
      <h3>🆘 Emergency Fund Comparison (₹6 Lakhs)</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">Savings Account</div>
          <div className="stat-amount">Lower</div>
          <div className="stat-label">Potential annual return</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">Liquid Fund</div>
          <div className="stat-amount">Market-linked</div>
          <div className="stat-label">Potential return + liquidity</div>
        </div>
      </div>
      <div className="stat-comparison">
        <div className="stat-diff">Idle cash, put to work</div>
        <div className="stat-diff-label">In case of emergency, withdraw in 1-2 days</div>
      </div>
    </div>

    <div className="card">
      <h2>Emergency Fund + Treasury Strategy</h2>
      <ul>
        <li><strong>Tier 1 (30 days):</strong> Keep in savings account for absolute instant access</li>
        <li><strong>Tier 2 (3-6 months):</strong> Liquid funds (market-linked)—withdraw in 1-2 days</li>
        <li><strong>Tier 3 (6+ months):</strong> Short-term debt funds (market-linked)—for very rare use</li>
      </ul>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Build Your Emergency Fund
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ QUARTERLY PLANNING ============

export const QuarterlyPlanning = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Quarterly Cash Planning: Treasury as a Planning Tool</h1>
    <ReadingTime minutes={5} />
    
    <p className="context-paragraph">
      Business plans happen in quarters. Revenue forecasts, expense budgets, investment timelines—all quarterly. Treasury should sync with this planning cycle.
    </p>

    <div className="card">
      <h2>Quarterly Treasury Planning Cycle</h2>
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Treasury Action</th>
            <th>Return</th>
            <th>Liquidity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Month 1 (Planning)</strong></td>
            <td>Assess cash position</td>
            <td>—</td>
            <td>Full</td>
          </tr>
          <tr>
            <td><strong>Month 2 (Execution)</strong></td>
            <td>Lock quarterly surplus in liquid funds</td>
            <td><span className="check-mark">✓</span> Market-linked</td>
            <td>2 days</td>
          </tr>
          <tr>
            <td><strong>Month 3 (Review)</strong></td>
            <td>Rebalance for next quarter</td>
            <td><span className="check-mark">✓</span> Market-linked</td>
            <td>2 days</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Start Quarterly Planning
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ TAX OPTIMIZATION ============

export const TaxOptimization = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Tax Treatment of Treasury Investments for Businesses</h1>
    <ReadingTime minutes={4} />
    <p className="context-paragraph">
      Returns are best judged after tax. For companies, LLPs and firms, gains from debt mutual funds are generally taxed as business income at the applicable rate, and FD interest is taxable with TDS possibly deducted by the bank. This page covers the basics; confirm the treatment for your entity with your CA.
    </p>
    <div className="card">
      <h2>Key Points to Check with Your CA</h2>
      <ul>
        <li><strong>Debt mutual fund gains:</strong> Generally treated as business income for companies, LLPs and firms, taxed at the applicable rate</li>
        <li><strong>Fixed deposit interest:</strong> Taxable as income; the bank may deduct TDS, which can be adjusted in your return</li>
        <li><strong>No special benefit to count on:</strong> Do not assume indexation or a lower rate for debt fund gains</li>
        <li><strong>Compare after tax:</strong> Evaluate options on post-tax outcomes, not headline figures</li>
        <li><strong>Records:</strong> Keep transaction statements for filing</li>
      </ul>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Plan Tax-Optimized Savings
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ LIQUIDITY PLANNING ============

export const LiquidityPlanning = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Liquidity Planning: Cash When You Need It</h1>
    <ReadingTime minutes={5} />
    
    <p className="context-paragraph">
      Liquidity isn't just about having cash—it's about having cash at the right time. Treasury planning means matching your cash availability to your expected needs.
    </p>

    <div className="card">
      <h2>Liquidity Ladder Strategy</h2>
      <ul>
        <li><strong>0-30 days:</strong> Current account (no return, 100% liquidity)</li>
        <li><strong>30-90 days:</strong> Liquid funds (market-linked return, 1-2 day liquidity)</li>
        <li><strong>3-6 months:</strong> Liquid funds + short-term debt (market-linked return, 2-3 day liquidity)</li>
        <li><strong>6+ months:</strong> Short-term debt funds (market-linked return, 3-5 day liquidity)</li>
      </ul>
      <p><strong>Result:</strong> You're never sitting idle in a savings account, and you always have the cash you need when you need it.</p>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Build Your Liquidity Ladder
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ FREELANCER BUSINESS ============

export const FreelancerBusiness = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Freelancer & Agency Treasury: Managing Irregular Income</h1>
    <ReadingTime minutes={5} />
    
    <p className="context-paragraph">
      Freelancers and small agencies have highly variable income. One month you bill ₹5L, the next month ₹1.5L. Treasury management smooths out this volatility and turns peaks into growth capital.
    </p>

    <div className="stat-card">
      <h3>💻 Freelancer Annual Cash Cycle (₹20L average income)</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">Peak Months (₹35L+)</div>
          <div className="stat-amount">Market-linked</div>
          <div className="stat-label">Surplus put to work (illustrative)</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">Lean Months</div>
          <div className="stat-amount">Cushion</div>
          <div className="stat-label">Used for growth, learning, equipment</div>
        </div>
      </div>
    </div>

    <div className="card">
      <h2>Freelancer Treasury Model</h2>
      <ul>
        <li><strong>Monthly:</strong> Separate operating account + treasury account</li>
        <li><strong>Strategy:</strong> Keep 3 months expenses in current account, park surplus in liquid funds</li>
        <li><strong>Tax planning:</strong> Gains are taxed as per applicable rates; consult your CA</li>
        <li><strong>Scaling prep:</strong> Treasury gives you the runway to turn contracts into team hires</li>
      </ul>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Freelancer Treasury Setup
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ PROJECT-BASED BUSINESS ============

export const ProjectBasedBusiness = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Project-Based Business: Milestone-to-Milestone Treasury</h1>
    <ReadingTime minutes={5} />
    
    <p className="context-paragraph">
      Project businesses (events, construction, consulting) have lumpy cash inflows tied to project milestones. Long project cycles = long wait for payment. Treasury bridges the gap.
    </p>

    <div className="card">
      <h2>Project Treasury Lifecycle</h2>
      <ul>
        <li><strong>Pre-project:</strong> Advance/deposit received → Park in liquid fund (high liquidity for project spend)</li>
        <li><strong>Mid-project:</strong> Milestone payments come in → Reinvest earned returns into next milestone buffer</li>
        <li><strong>Post-project:</strong> Final settlement → Park in 3-6 month funds for next project prep (slightly longer horizon)</li>
        <li><strong>Off-season:</strong> Between projects → Move to short-term debt funds (longer hold)</li>
      </ul>
    </div>

    <div className="stat-card">
      <h3>Project Business: How Staging Works</h3>
      <p>Advances and milestone receipts that are not needed immediately can be held in suitable debt mutual fund schemes while keeping access to funds when project spend is due. Returns are market-linked and not guaranteed.</p>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Setup Project Treasury
      </a>
    </div>

    <ComplianceFooter />
  </div>
);
