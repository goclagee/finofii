import { Shield } from 'lucide-react';

const RiskDisclosure = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl premium-shadow p-8 md:p-12">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-10 h-10 text-red-600" />
            <h1 className="text-4xl font-bold text-gray-900 text-luxury">
              Risk Disclosure Statement
            </h1>
          </div>
          <p className="text-sm text-gray-500 mb-8">Last Updated: January 2025</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div className="bg-red-50 border-l-4 border-red-600 p-6">
              <p className="font-semibold text-red-900 text-lg mb-3">
                MANDATORY RISK DISCLOSURE
              </p>
              <p className="text-red-900">
                All investments carry risks, and you may lose some or all of your invested capital. 
                Please read this Risk Disclosure Statement carefully and ensure you understand the risks 
                before making any investment decisions.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Mutual Fund Investment Risks
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                1.1 Market Risk
              </h3>
              <p>
                Mutual fund investments are subject to market fluctuations. The NAV of mutual fund schemes 
                may go up or down based on various market factors including interest rates, economic conditions, 
                and investor sentiment.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                1.2 Liquidity Risk
              </h3>
              <p>
                While liquid funds offer high liquidity, certain debt and equity schemes may have exit loads 
                or redemption restrictions during specific periods.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                1.3 Credit Risk
              </h3>
              <p>
                Debt funds are exposed to credit risk of the underlying securities. Downgrade in credit rating 
                or default by issuers can adversely affect fund performance.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                1.4 Interest Rate Risk
              </h3>
              <p>
                Changes in interest rates can impact the value of debt securities. When interest rates rise, 
                bond prices typically fall, affecting debt fund NAVs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Startup and Pre-IPO Investment Risks
              </h2>
              
              <div className="bg-amber-50 border border-amber-300 rounded-lg p-6 mb-4">
                <p className="font-semibold text-amber-900 mb-2">
                  WARNING: STARTUP INVESTMENTS ARE HIGHLY SPECULATIVE
                </p>
                <p className="text-amber-900">
                  Startup and pre-IPO investments carry significantly higher risks than traditional investments. 
                  Only invest capital you can afford to lose entirely.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                2.1 Business Failure Risk
              </h3>
              <p>
                Statistics show that majority of startups fail. Your entire investment could be lost if the 
                company goes out of business.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                2.2 Illiquidity Risk
              </h3>
              <p>
                Unlike publicly traded securities, startup investments are highly illiquid. You may not be 
                able to sell your investment for several years, if at all.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                2.3 Dilution Risk
              </h3>
              <p>
                Future funding rounds may dilute your ownership percentage. The company may raise capital at 
                valuations lower than your investment price (down rounds).
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                2.4 Valuation Uncertainty
              </h3>
              <p>
                Private company valuations are subjective and may not reflect true market value. There's no 
                guarantee that valuations will increase or that an exit opportunity will materialize.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                2.5 Regulatory Risk
              </h3>
              <p>
                Startup investments may be subject to evolving regulations. Changes in laws could adversely 
                affect your investment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. General Investment Risks
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                3.1 Concentration Risk
              </h3>
              <p>
                Investing heavily in a single asset class, sector, or geography increases risk exposure.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                3.2 Currency Risk
              </h3>
              <p>
                For international investments, currency fluctuations can affect returns when converted to INR.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                3.3 Inflation Risk
              </h3>
              <p>
                Inflation can erode the real value of returns. If investment returns don't exceed inflation, 
                you lose purchasing power.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                3.4 Regulatory and Political Risk
              </h3>
              <p>
                Changes in government policies, regulations, or political instability can impact investment 
                performance.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                3.5 Operational Risk
              </h3>
              <p>
                Risks arising from inadequate or failed internal processes, systems, or human errors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Platform and Technology Risks
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Technical failures or system downtime may affect access to your account</li>
                <li>Cybersecurity threats could compromise data or transactions</li>
                <li>Network connectivity issues may delay transactions</li>
                <li>Third-party service provider failures could impact operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. No Guaranteed Returns
              </h2>
              <div className="bg-blue-50 border border-blue-300 rounded-lg p-6">
                <p className="font-semibold text-blue-900 mb-2">
                  IMPORTANT NOTICE:
                </p>
                <ul className="list-disc list-inside space-y-2 text-blue-900">
                  <li>Past performance does NOT guarantee future results</li>
                  <li>No investment carries guaranteed returns</li>
                  <li>Projected returns are hypothetical and may not be achieved</li>
                  <li>Investment value may be less than the amount invested</li>
                  <li>You may not get back your full principal investment</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Investor Suitability
              </h2>
              <p className="mb-4">
                Before investing, carefully assess:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your financial goals and investment horizon</li>
                <li>Your risk tolerance and capacity to bear losses</li>
                <li>Your liquidity needs and emergency fund adequacy</li>
                <li>Your understanding of investment products</li>
                <li>Your age, income, and existing financial obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Diversification Recommendation
              </h2>
              <p>
                While diversification cannot eliminate risk entirely, spreading investments across different 
                asset classes, sectors, and geographies can help reduce concentration risk. Do not invest all 
                your capital in a single investment opportunity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Professional Advice Recommendation
              </h2>
              <p>
                Given the complexity and risks involved, we strongly recommend:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Consulting with a SEBI-registered investment advisor</li>
                <li>Seeking tax advice from a qualified chartered accountant</li>
                <li>Getting legal counsel for complex investment structures</li>
                <li>Conducting thorough due diligence before investing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Acknowledgment of Risk
              </h2>
              <p>
                By using Finofii's services, you acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>You have read and understood this Risk Disclosure Statement</li>
                <li>You are aware of the risks associated with your investments</li>
                <li>You have evaluated your risk tolerance and investment suitability</li>
                <li>You accept full responsibility for your investment decisions</li>
                <li>You understand that Finofii does not guarantee any returns</li>
              </ul>
            </section>

            <div className="bg-gray-100 border-l-4 border-gray-600 p-6 mt-8">
              <p className="font-semibold text-gray-900 mb-3">
                FINAL REMINDER:
              </p>
              <p className="text-gray-700">
                <strong>Mutual Fund investments are subject to market risks, read all scheme related 
                documents carefully.</strong> Do not invest based solely on the information provided on 
                this platform. Conduct your own research, understand the products, and make informed 
                decisions that align with your financial goals and risk appetite.
              </p>
            </div>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Contact Information
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p>For risk-related questions or concerns:</p>
                <p className="mt-3"><strong>Finofii Fintech Private Limited</strong></p>
                <p>Email: <a href="mailto:care@finofii.com" className="text-blue-600 hover:underline">care@finofii.com</a></p>
                <p>Phone: <a href="tel:+919311361888" className="text-blue-600 hover:underline">+91 93113 61888</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskDisclosure;