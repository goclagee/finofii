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
    <small><strong>⚖️ Compliance & Disclaimer:</strong> Finofiii is registered as an MFD (Mutual Fund Distributor) under ARN-176236 with AMFI and is a BSE Star MF Partner. Returns are based on historical data and market performance; past performance does not guarantee future results. Liquid funds invest in money market instruments and carry interest rate risk. Please consult with a SEBI-certified financial advisor before making investment decisions.</small>
  </div>
);

// ============ TREASURY VS FIXED DEPOSITS ============

export const TreasuryVsFD = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Treasury Management vs Fixed Deposits: Which Earns You More?</h1>
    <ReadingTime minutes={5} />
    
    <p className="context-paragraph">
      Two popular options for parking idle cash are treasury management via liquid funds and fixed deposits. Both offer safety and steady returns, but they differ in flexibility, returns, and liquidity. This guide will help you choose based on your financial goals and cash flow needs.
    </p>
    
    <div className="stat-card">
      <h3>💰 Real Example: ₹10 Lakh for 6 Months</h3>
      <div className="stat-example">
        <div className="stat-item winner">
          <div className="stat-label">Treasury / Liquid Fund</div>
          <div className="stat-amount">₹30,000</div>
          <div className="stat-label">@ 6% p.a.</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Fixed Deposit</div>
          <div className="stat-amount">₹27,500</div>
          <div className="stat-label">@ 5.5% p.a.</div>
        </div>
      </div>
      <div className="stat-comparison">
        <div className="stat-diff">Treasury Advantage: ₹2,500 Extra</div>
        <div className="stat-diff-label">+ Full Liquidity (withdraw anytime vs locked)</div>
      </div>
    </div>
    
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
      <h2>Who Should Choose What?</h2>
      <div className="who-should-choose">
        <div className="choose-option">
          <h4><span className="table-icon">✓</span> Choose Treasury If:</h4>
          <ul>
            <li>You need access to cash regularly</li>
            <li>Your business has variable cash flow</li>
            <li>You want higher tax-adjusted returns</li>
            <li>You need funds for emergencies</li>
            <li>You manage quarterly or monthly expenses</li>
          </ul>
        </div>
        <div className="choose-option">
          <h4><span className="table-icon">✓</span> Choose FD If:</h4>
          <ul>
            <li>You can lock capital for 1+ years</li>
            <li>You prefer guaranteed interest rates</li>
            <li>You want simplicity</li>
            <li>You're building long-term reserves</li>
            <li>You prefer working with your bank</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="cta">
      <p>💡 <strong>Stop leaving ₹2,500+ every 6 months on the table.</strong> Earn more on idle cash with Finofiii.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        👉 Schedule Your Free Demo
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ TREASURY VS SIP ============

export const TreasuryVsSIP = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Treasury vs SIP: Which Strategy is Right for You?</h1>
    <ReadingTime minutes={4} />
    
    <p className="context-paragraph">
      Treasury management (via liquid funds) and SIP (Systematic Investment Plan) serve different financial goals. Treasury preserves capital and generates steady returns. SIP builds long-term wealth through equity exposure. The right choice depends on your investment horizon and financial objectives.
    </p>

    <div className="stat-card">
      <h3>💼 Investment Goals Comparison</h3>
      <div className="stat-example">
        <div className="stat-item winner">
          <div className="stat-label">Treasury</div>
          <div className="stat-amount">6-7%</div>
          <div className="stat-label">Short-term (0-2 years)</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">SIP in Equity</div>
          <div className="stat-amount">12-15%</div>
          <div className="stat-label">Long-term (5-10 years)</div>
        </div>
      </div>
      <div className="stat-comparison">
        <div className="stat-diff">Use Both Together</div>
        <div className="stat-diff-label">Emergency fund + SIP = Complete strategy</div>
      </div>
    </div>

    <div className="card">
      <h2>Core Differences</h2>
      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>Treasury</th>
            <th>SIP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Time Horizon</strong></td>
            <td>Short-term (months to 2 years)</td>
            <td>Long-term (5-10+ years)</td>
          </tr>
          <tr>
            <td><strong>Risk Level</strong></td>
            <td><span className="check-mark">✓</span> Low</td>
            <td>Moderate to High</td>
          </tr>
          <tr>
            <td><strong>Expected Returns</strong></td>
            <td>6-7% (stable)</td>
            <td>12-15% (variable)</td>
          </tr>
          <tr>
            <td><strong>Liquidity</strong></td>
            <td><span className="check-mark">✓</span> 1-2 days</td>
            <td>2-3 days</td>
          </tr>
          <tr>
            <td><strong>Volatility</strong></td>
            <td><span className="check-mark">✓</span> None</td>
            <td>Market-driven</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="section">
      <h2>Your Balanced Strategy</h2>
      <div className="card">
        <ul>
          <li><strong>🚨 Emergency Fund (3-6 months):</strong> Treasury / Liquid Funds</li>
          <li><strong>💡 Quarterly/Annual Reserves:</strong> Treasury Management</li>
          <li><strong>🚀 Long-term Growth (5+ years):</strong> SIP in equity/hybrid funds</li>
          <li><strong>🎯 Child Education/Retirement:</strong> SIP with longer horizon</li>
        </ul>
      </div>
    </div>

    <div className="cta">
      <p>Build a complete financial strategy. Finofiii helps you optimize both treasury and investment goals.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Schedule Strategy Session
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ TREASURY VS SAVINGS ACCOUNT ============

export const TreasuryVsSavings = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Treasury vs Savings Account: The Math Will Shock You</h1>
    <ReadingTime minutes={3} />
    
    <p className="context-paragraph">
      Keeping idle cash in a savings account might feel safe, but you're leaving significant returns on the table. Treasury management via liquid funds offers 6-7% returns vs a savings account's 4%, while maintaining full liquidity.
    </p>

    <div className="stat-card">
      <h3>💸 Real Impact: ₹10 Lakh for 1 Year</h3>
      <div className="stat-example">
        <div className="stat-item">
          <div className="stat-label">Savings Account (4%)</div>
          <div className="stat-amount">₹40,000</div>
          <div className="stat-label">Annual earnings</div>
        </div>
        <div className="stat-item winner">
          <div className="stat-label">Treasury Fund (6%)</div>
          <div className="stat-amount">₹60,000</div>
          <div className="stat-label">Annual earnings</div>
        </div>
      </div>
      <div className="stat-comparison">
        <div className="stat-diff">Treasury Advantage: ₹20,000/Year</div>
        <div className="stat-diff-label">On just ₹10 lakh! Scale to ₹1 crore = ₹2 lakh extra</div>
      </div>
    </div>

    <div className="card">
      <h2>Quick Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Savings Account</th>
            <th>Treasury Fund</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Interest Rate</strong></td>
            <td>2.7-4% per annum</td>
            <td><span className="check-mark">✓</span> 6-7% per annum</td>
          </tr>
          <tr>
            <td><strong>Liquidity</strong></td>
            <td><span className="check-mark">✓</span> Instant access</td>
            <td><span className="check-mark">✓</span> 1-2 days</td>
          </tr>
          <tr>
            <td><strong>Tax Treatment</strong></td>
            <td>Taxed as income (50k+ TDS)</td>
            <td><span className="check-mark">✓</span> Indexation benefit</td>
          </tr>
          <tr>
            <td><strong>Risk</strong></td>
            <td>Bank-backed</td>
            <td><span className="check-mark">✓</span> SEBI-regulated, safer</td>
          </tr>
          <tr>
            <td><strong>Minimum Amount</strong></td>
            <td><span className="check-mark">✓</span> ₹1,000</td>
            <td>₹5,000</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="who-should-choose">
      <div className="choose-option">
        <h4><span className="table-icon">⚠️</span> Why Save in Bank?</h4>
        <ul>
          <li>Need emergency access</li>
          <li>Don't understand investments</li>
          <li>Amount is very small (&lt;₹50k)</li>
          <li>Prefer zero complexity</li>
        </ul>
      </div>
      <div className="choose-option">
        <h4><span className="table-icon">✓</span> Better: Treasury Fund</h4>
        <ul>
          <li>50% higher returns (6% vs 4%)</li>
          <li>Still fully liquid (1-2 days)</li>
          <li>Tax-efficient (indexation)</li>
          <li>SEBI-regulated, professional management</li>
        </ul>
      </div>
    </div>

    <div className="cta">
      <p>Stop earning 4% when you could earn 6%. Move your idle cash to treasury management today.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Move ₹ to Treasury (Free Setup)
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// ============ TREASURY VS SAVINGS BONDS / DEBT / EQUITY / REAL ESTATE ============

export const TreasuryVsDebt = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Treasury vs Debt Funds: Capital Preservation with Better Returns</h1>
    <ReadingTime minutes={4} />
    
    <p className="context-paragraph">
      Both treasury management and debt funds are low-risk options, but they differ in duration, interest rate risk, and return potential. Treasury focuses on capital preservation with steady 6-7% returns, while debt funds may offer higher returns with slightly more volatility.
    </p>

    <div className="stat-card">
      <h3>📈 Risk vs Return Profile</h3>
      <div className="stat-example">
        <div className="stat-item winner">
          <div className="stat-label">Treasury (Ultra-Safe)</div>
          <div className="stat-amount">6-7%</div>
          <div className="stat-label">Minimal volatility</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Debt Funds</div>
          <div className="stat-amount">7-9%</div>
          <div className="stat-label">Low volatility</div>
        </div>
      </div>
    </div>

    <div className="card">
      <h2>Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>Treasury (Liquid)</th>
            <th>Debt Funds</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Returns</strong></td>
            <td><span className="check-mark">✓</span> 6-7% (stable)</td>
            <td>7-9% (variable)</td>
          </tr>
          <tr>
            <td><strong>Duration Risk</strong></td>
            <td><span className="check-mark">✓</span> No (91-day max)</td>
            <td>Higher (longer duration)</td>
          </tr>
          <tr>
            <td><strong>Interest Rate Risk</strong></td>
            <td><span className="check-mark">✓</span> None</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><strong>Best For</strong></td>
            <td><span className="check-mark">✓</span> Liquid reserves, emergency fund</td>
            <td>1-3 year goals</td>
          </tr>
          <tr>
            <td><strong>Volatility</strong></td>
            <td><span className="check-mark">✓</span> None</td>
            <td>Low</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="section">
      <h2>Use Case: Which to Choose?</h2>
      <ul>
        <li><strong>💧 Emergency Reserves (3-6 months):</strong> Treasury (instant access)</li>
        <li><strong>🎯 Quarterly Targets:</strong> Treasury (no volatility)</li>
        <li><strong>⏰ 1-2 Year Goals:</strong> Debt Funds (higher returns acceptable)</li>
      </ul>
    </div>

    <div className="cta">
      <p>Need capital preservation with steady returns? Treasury management is your answer.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Get Started with Treasury
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// Treasury vs Equity Funds
export const TreasuryVsEquity = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Treasury vs Equity Funds: Which Grows Your Wealth Faster?</h1>
    <ReadingTime minutes={5} />
    
    <p className="context-paragraph">
      Treasury management preserves capital with steady returns, while equity funds build long-term wealth. This guide helps you understand which suits your financial goals and time horizon.
    </p>

    <div className="stat-card">
      <h3>📊 Investment Horizon Impact</h3>
      <div className="stat-example">
        <div className="stat-item winner">
          <div className="stat-label">Treasury (0-2 yrs)</div>
          <div className="stat-amount">₹1,06,000</div>
          <div className="stat-label">₹1L @ 6% for 1 year</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Equity SIP (10 yrs)</div>
          <div className="stat-amount">₹2,77,000</div>
          <div className="stat-label">₹10k/mo SIP @ 12%</div>
        </div>
      </div>
    </div>

    <div className="card">
      <h2>Complete Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Treasury</th>
            <th>Equity Funds</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Expected Returns</strong></td>
            <td><span className="check-mark">✓</span> 6-7% (guaranteed)</td>
            <td>12-15% (long-term average)</td>
          </tr>
          <tr>
            <td><strong>Best Time Horizon</strong></td>
            <td><span className="check-mark">✓</span> 0-2 years</td>
            <td>5-10+ years</td>
          </tr>
          <tr>
            <td><strong>Volatility</strong></td>
            <td><span className="check-mark">✓</span> None</td>
            <td>High</td>
          </tr>
          <tr>
            <td><strong>Risk Level</strong></td>
            <td><span className="check-mark">✓</span> Very Low</td>
            <td>Moderate to High</td>
          </tr>
          <tr>
            <td><strong>Emergency Access</strong></td>
            <td><span className="check-mark">✓</span> 1-2 days</td>
            <td>2-3 days (market-dependent)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="cta">
      <p>Smart strategy: Use treasury for reserves, SIP for growth. Build complete financial security.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Build Your Strategy
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// Treasury vs Real Estate
export const TreasuryVsRealEstate = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Treasury vs Real Estate: Liquid Returns vs Long-Term Asset</h1>
    <ReadingTime minutes={4} />
    
    <p className="context-paragraph">
      Real estate is a long-term wealth builder requiring capital, maintenance, and liquidity constraints. Treasury management offers liquid, low-effort returns. Both play different roles in financial planning.
    </p>

    <div className="stat-card">
      <h3>🏠 Investment Comparison</h3>
      <div className="stat-example">
        <div className="stat-item winner">
          <div className="stat-label">Treasury</div>
          <div className="stat-amount">₹10L to ₹1Cr</div>
          <div className="stat-label">Liquid in 1-2 days</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Real Estate</div>
          <div className="stat-amount">₹50L to ₹10Cr</div>
          <div className="stat-label">6-12 months to sell</div>
        </div>
      </div>
    </div>

    <div className="who-should-choose">
      <div className="choose-option">
        <h4><span className="table-icon">✓</span> Choose Treasury If:</h4>
        <ul>
          <li>You need liquid returns</li>
          <li>You have monthly/quarterly needs</li>
          <li>You want low maintenance</li>
          <li>You lack large capital</li>
          <li>You want to avoid property taxes</li>
        </ul>
      </div>
      <div className="choose-option">
        <h4><span className="table-icon">✓</span> Choose Real Estate If:</h4>
        <ul>
          <li>You can lock ₹50L+ for 10+ years</li>
          <li>You want long-term appreciation</li>
          <li>You're comfortable with maintenance</li>
          <li>You have significant capital</li>
          <li>You want inflation protection</li>
        </ul>
      </div>
    </div>

    <div className="cta">
      <p>Diversify: Use treasury for liquidity + real estate for long-term wealth creation.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Optimize Your Portfolio
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// Liquid Funds vs Fixed Deposits
export const LiquidFundsVsFD = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>Liquid Funds vs Fixed Deposits: The Clear Winner for Idle Cash</h1>
    <ReadingTime minutes={4} />
    
    <p className="context-paragraph">
      Liquid funds and fixed deposits are both low-risk options, but liquid funds offer superior flexibility and returns. Banks use fixed deposits for long-term lending; liquid funds invest in 91-day instruments.
    </p>

    <div className="stat-card">
      <h3>💡 The Real Advantage</h3>
      <div className="stat-example">
        <div className="stat-item winner">
          <div className="stat-label">Liquid Fund</div>
          <div className="stat-amount">6-7%</div>
          <div className="stat-label">Withdraw anytime, no penalty</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Fixed Deposit</div>
          <div className="stat-amount">5-6%</div>
          <div className="stat-label">Locked, early withdrawal penalty</div>
        </div>
      </div>
    </div>

    <div className="cta">
      <p>Higher returns + full liquidity = Better choice for idle business cash.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Switch to Liquid Funds Today
      </a>
    </div>

    <ComplianceFooter />
  </div>
);

// MFD Definition & Difference
export const MFDDifference = () => (
  <div className="page">
    <TrustBadges />
    
    <h1>What is an MFD? Finofiii's Role in Your Investments</h1>
    <ReadingTime minutes={3} />
    
    <p className="context-paragraph">
      An MFD (Mutual Fund Distributor) is a SEBI-regulated intermediary that helps you invest in mutual funds. Finofiii, registered as MFD (ARN-176236), provides treasury management and investment solutions.
    </p>

    <div className="card">
      <h2>MFD vs Other Investment Channels</h2>
      <table>
        <thead>
          <tr>
            <th>Channel</th>
            <th>How It Works</th>
            <th>Advantage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Direct Fund House</strong></td>
            <td><span className="cross-mark">✗</span> You invest directly</td>
            <td>Lower costs, but DIY work</td>
          </tr>
          <tr>
            <td><strong>Bank</strong></td>
            <td><span className="check-mark">✓</span> Bank recommends & invests</td>
            <td>Familiar, but limited choices</td>
          </tr>
          <tr>
            <td><strong>MFD (Finofiii) </strong></td>
            <td><span className="check-mark">✓</span> Personalised guidance & setup</td>
            <td>Best funds + professional advice</td>
          </tr>
          <tr>
            <td><strong>RIA</strong></td>
            <td>Portfolio management for wealthy</td>
            <td>Comprehensive wealth management</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="cta">
      <p>Let Finofiii handle your treasury & investments. We're SEBI-regulated for your protection.</p>
      <a href="https://wa.me/919311361888" className="btn btn-whatsapp">
        Get MFD Advantage Today
      </a>
    </div>

    <ComplianceFooter />
  </div>
);
