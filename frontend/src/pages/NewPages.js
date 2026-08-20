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
    <small><strong>⚖️ Compliance:</strong> Finofii is registered as an MFD (ARN-176236, AMFI) and BSE Star MF Partner. Returns based on historical data; past performance does not guarantee future results. Please consult with a SEBI-certified financial advisor before investing.</small>
  </div>
);

// ============ TREASURY VS INSURANCE ============

export const TreasuryVsInsurance = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Treasury vs Insurance-Linked Savings: Which Is Right?</h1>
    <ReadingTime minutes={5} />
    
    <p className="context-paragraph">
      Both treasury and insurance-linked products promise returns. But they serve different purposes. Treasury is for stability + growth. Insurance is for protection + legacy. Here's how they differ.
    </p>

    <div className="stat-card">
      <h3>💼 Treasury vs Insurance (₹10L investment)</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">ULIP / Insurance Bond (10yr)</div>
          <div className="stat-amount">₹15-18L</div>
          <div className="stat-label">Maturity value (4-5% return) + life cover</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Treasury Ladder (10yr mixed)</div>
          <div className="stat-amount">₹17-20L</div>
          <div className="stat-label">Higher return, full liquidity, no insurance</div>
        </div>
      </div>
    </div>

    <div className="card">
      <h2>Treasury vs Insurance Side-by-Side</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Treasury</th>
            <th>Insurance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Returns</strong></td>
            <td><span className="check-mark">✓</span> 6-8%</td>
            <td>3-5% + cover</td>
          </tr>
          <tr>
            <td><strong>Liquidity</strong></td>
            <td><span className="check-mark">✓</span> 1-2 days</td>
            <td>Lock-in 5-10yr</td>
          </tr>
          <tr>
            <td><strong>Life Cover</strong></td>
            <td>None</td>
            <td><span className="check-mark">✓</span> Yes</td>
          </tr>
          <tr>
            <td><strong>Tax Efficiency</strong></td>
            <td><span className="check-mark">✓</span> Indexation</td>
            <td>Section 80C benefit</td>
          </tr>
          <tr>
            <td><strong>Flexibility</strong></td>
            <td><span className="check-mark">✓</span> Add/withdraw</td>
            <td>Surrender charges</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="section">
      <h2>The Right Strategy</h2>
      <p><strong>Use BOTH.</strong> Insurance for protection + legacy, Treasury for growth + liquidity. A smart plan has:</p>
      <ul>
        <li><strong>Insurance:</strong> 5× annual income as term + endowment if needed</li>
        <li><strong>Treasury:</strong> 6-12 months expenses for emergencies + growth</li>
      </ul>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Build Your Strategy
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ COLLEGE FUND PLANNING ============

export const CollegeFundPlanning = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>College Fund Planning: Treasury + SIP for Education Goals</h1>
    <ReadingTime minutes={5} />
    
    <p className="context-paragraph">
      College costs double every 7-10 years. If your child is 8 now, they'll need ₹40-50L for a good college in 10 years. Treasury provides the foundation—liquid reserves that earn 6% while you're still planning.
    </p>

    <div className="stat-card">
      <h3>🎓 College Fund Build-Up (10 Years)</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">Treasury + SIP Strategy</div>
          <div className="stat-amount">₹45-50L</div>
          <div className="stat-label">From ₹500/mo SIP + ₹2L lump sum</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">Built-in buffer</div>
          <div className="stat-amount">+₹8-10L</div>
          <div className="stat-label">For inflation, currency changes, overruns</div>
        </div>
      </div>
    </div>

    <div className="card">
      <h2>College Savings Ladder</h2>
      <ul>
        <li><strong>Years 1-5 (Still in school):</strong> SIP into equity funds (10%+ growth), treasury for emergency backup</li>
        <li><strong>Years 6-8 (Pre-college):</strong> Gradually shift SIP to balanced funds (7-8%), keep treasury stable</li>
        <li><strong>Years 9-10 (Final approach):</strong> Move to debt funds (6-7%), lock in gains, build liquid reserves</li>
        <li><strong>Year 11 (College year):</strong> All in treasury + liquid funds, draw down for fees/hostel</li>
      </ul>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Start College Fund
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ RETIREMENT PLANNING ============

export const RetirementPlanning = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Retirement Planning: From Earning to Living on Returns</h1>
    <ReadingTime minutes={6} />
    
    <p className="context-paragraph">
      Retirement isn't about how much you've saved—it's about whether your savings generate enough income to live on. Treasury is the final decade of your retirement strategy: the stage where you stop earning and start living on returns.
    </p>

    <div className="stat-card">
      <h3>🏖️ Retirement Income Model (₹1 Crore Corpus)</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">Annual Expenses</div>
          <div className="stat-amount">₹12-15 Lakhs</div>
          <div className="stat-label">In retirement years</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">Treasury + Liquid Returns @ 6%</div>
          <div className="stat-amount">₹60 Lakhs/Year</div>
          <div className="stat-label">Far exceeds living costs</div>
        </div>
      </div>
    </div>

    <div className="card">
      <h2>Retirement Treasury Strategy (25-Year Horizon)</h2>
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Allocation</th>
            <th>Return Target</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Age 35-45</strong></td>
            <td>80% Equity, 20% Treasury</td>
            <td><span className="check-mark">✓</span> 10%+ growth</td>
            <td>Accumulate corpus</td>
          </tr>
          <tr>
            <td><strong>Age 45-55</strong></td>
            <td>50% Equity, 50% Debt</td>
            <td><span className="check-mark">✓</span> 7-8%</td>
            <td>Stabilize, add safety</td>
          </tr>
          <tr>
            <td><strong>Age 55-60</strong></td>
            <td>30% Equity, 70% Treasury</td>
            <td><span className="check-mark">✓</span> 6-7%</td>
            <td>Lock gains, reduce risk</td>
          </tr>
          <tr>
            <td><strong>Age 60+</strong></td>
            <td>100% Treasury + Dividends</td>
            <td><span className="check-mark">✓</span> 5-6% + safety</td>
            <td>Live on income</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Plan Your Retirement
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ INTERNATIONAL TREASURY (EXPANDED NRI) ============

export const InternationalTreasury = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>International Treasury: NRI & Foreign Income Management</h1>
    <ReadingTime minutes={6} />
    
    <p className="context-paragraph">
      NRIs earning in USD/EUR have a triple problem: (1) forex risk, (2) rupee depreciation, (3) idle rupee balances after conversion. International treasury solves all three.
    </p>

    <div className="stat-card">
      <h3>🌐 NRI International Treasury Model (Annual USD 100K income)</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">Converted to INR @ current rate</div>
          <div className="stat-amount">₹83 Lakhs</div>
          <div className="stat-label">USD 100K = ₹83L (typical)</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">Treasury Returns (6-7%/year)</div>
          <div className="stat-amount">+₹50-58K/Year</div>
          <div className="stat-label">While waiting for forex opportunities</div>
        </div>
      </div>
    </div>

    <div className="card">
      <h2>International Treasury Workflow</h2>
      <ul>
        <li><strong>Step 1:</strong> USD salary hits NRE account → Don't convert immediately</li>
        <li><strong>Step 2:</strong> Track forex rates (historical highs/lows)</li>
        <li><strong>Step 3:</strong> When rupee dips vs. your historical range → Convert 20-30% to INR</li>
        <li><strong>Step 4:</strong> Park INR in treasury funds earning 6%</li>
        <li><strong>Step 5:</strong> Live on treasury returns + monthly conversions as needed</li>
      </ul>
    </div>

    <div className="section">
      <h2>Why This Works</h2>
      <p>Instead of converting USD to INR at market rate (often 78-85 range), this strategy lets you:</p>
      <ul>
        <li>Wait for better forex windows (81-83 range)</li>
        <li>Earn 6% on rupees you've parked</li>
        <li>Keep USD earning international rates (1-2%) in your US bank</li>
        <li>No FEMA violations—all above-board NRE/NRO</li>
      </ul>
    </div>

    <div className="cta">
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        NRI International Treasury Setup
      </a>
    </div>

    <ComplianceFooter />
  </div>
);
