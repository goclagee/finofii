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
      Financial advisors recommend 6 months of expenses in an emergency fund. But where should you keep it? Savings account (4% return) wastes opportunity. Liquid funds (6% return) provide better value—and you can withdraw in 1-2 days.
    </p>

    <div className="stat-card">
      <h3>🆘 Emergency Fund Comparison (₹6 Lakhs)</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">Savings Account (4%)</div>
          <div className="stat-amount">₹24,000</div>
          <div className="stat-label">Annual return</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">Liquid Fund (6%)</div>
          <div className="stat-amount">₹36,000</div>
          <div className="stat-label">Annual return + liquidity</div>
        </div>
      </div>
      <div className="stat-comparison">
        <div className="stat-diff">₹12,000/Year Extra</div>
        <div className="stat-diff-label">In case of emergency, withdraw in 1-2 days</div>
      </div>
    </div>

    <div className="card">
      <h2>Emergency Fund + Treasury Strategy</h2>
      <ul>
        <li><strong>Tier 1 (30 days):</strong> Keep in savings account for absolute instant access</li>
        <li><strong>Tier 2 (3-6 months):</strong> Liquid funds earning 6%—withdraw in 1-2 days</li>
        <li><strong>Tier 3 (6+ months):</strong> Short-term debt funds earning 7%—for very rare use</li>
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
            <td><span className="check-mark">✓</span> 6-7%</td>
            <td>2 days</td>
          </tr>
          <tr>
            <td><strong>Month 3 (Review)</strong></td>
            <td>Rebalance for next quarter</td>
            <td><span className="check-mark">✓</span> 6-7%</td>
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
    
    <h1>Tax-Optimized Treasury: Maximizing After-Tax Returns</h1>
    <ReadingTime minutes={6} />
    
    <p className="context-paragraph">
      Returns aren't just about gross gains—they're about what you keep after tax. Liquid funds offer unique tax advantages: indexation benefit reduces taxable gains on long-term holdings.
    </p>

    <div className="stat-card">
      <h3>📊 Tax-Optimized Returns (30-month hold on ₹10L)</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">FD Interest (30%+ tax)</div>
          <div className="stat-amount">₹1,50,000 gross</div>
          <div className="stat-label">→ ₹1,05,000 after-tax</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">Liquid Fund + Indexation</div>
          <div className="stat-amount">₹1,80,000 gross</div>
          <div className="stat-label">→ ₹1,44,000 after-tax</div>
        </div>
      </div>
      <div className="stat-comparison">
        <div className="stat-diff">₹39,000 Extra After-Tax</div>
        <div className="stat-diff-label">Plus 2-day liquidity, no lock-in risk</div>
      </div>
    </div>

    <div className="card">
      <h2>Indexation Benefit Explained</h2>
      <ul>
        <li><strong>How it works:</strong> Your cost base is indexed by inflation (CII), reducing taxable gains</li>
        <li><strong>3-year rule:</strong> Indexation only applies to assets held 3+ years</li>
        <li><strong>Tax rate:</strong> 20% on indexed gain (vs. 30%+ on FD interest)</li>
        <li><strong>Liquid funds qualify:</strong> Yes, when held 3+ years</li>
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
        <li><strong>0-30 days:</strong> Current account (0% return, 100% liquidity)</li>
        <li><strong>30-90 days:</strong> Liquid funds (6% return, 1-2 day liquidity)</li>
        <li><strong>3-6 months:</strong> Liquid funds + short-term debt (6.5-7% return, 2-3 day liquidity)</li>
        <li><strong>6+ months:</strong> Short-term debt funds (7-8% return, 3-5 day liquidity)</li>
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
          <div className="stat-amount">₹70,000</div>
          <div className="stat-label">Treasury returns on surplus (6 months)</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">Lean Months</div>
          <div className="stat-amount">+₹70,000</div>
          <div className="stat-label">Used for growth, learning, equipment</div>
        </div>
      </div>
    </div>

    <div className="card">
      <h2>Freelancer Treasury Model</h2>
      <ul>
        <li><strong>Monthly:</strong> Separate operating account + treasury account</li>
        <li><strong>Strategy:</strong> Keep 3 months expenses in current account, park surplus in liquid funds</li>
        <li><strong>Tax benefit:</strong> Indexation helps offset high GST compliance costs</li>
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
        <li><strong>Pre-project:</strong> Advance/deposit received → Park in liquid fund @ 6% (high liquidity for project spend)</li>
        <li><strong>Mid-project:</strong> Milestone payments come in → Reinvest earned returns into next milestone buffer</li>
        <li><strong>Post-project:</strong> Final settlement → Park in 3-6 month funds for next project prep (slightly higher return)</li>
        <li><strong>Off-season:</strong> Between projects → Move to short-term debt funds earning 7-8% (longer hold)</li>
      </ul>
    </div>

    <div className="stat-card">
      <h3>🏗️ Project Business Example (₹1 Crore Project, 12 months)</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">Without Treasury</div>
          <div className="stat-amount">₹0</div>
          <div className="stat-label">Return during project cycle</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">With Treasury</div>
          <div className="stat-amount">₹50-60 Lakhs</div>
          <div className="stat-label">Earned on staged cash flows @ 6-7%</div>
        </div>
      </div>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Setup Project Treasury
      </a>
    </div>

    <ComplianceFooter />
  </div>
);
