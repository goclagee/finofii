import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl premium-shadow p-8 md:p-12">
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-10 h-10 text-amber-600" />
            <h1 className="text-4xl font-bold text-gray-900 text-luxury">
              Disclaimer
            </h1>
          </div>
          <p className="text-sm text-gray-500 mb-8">Effective Date: January 2025</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
              <p className="font-semibold text-amber-900 text-lg mb-3">
                IMPORTANT NOTICE
              </p>
              <p className="text-amber-900">
                Please read this disclaimer carefully before using Finofii's services. 
                By accessing or using our platform, you acknowledge that you have read, 
                understood, and agree to be bound by this disclaimer.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. General Disclaimer
              </h2>
              <p>
                The information provided on the Finofii platform is for general informational 
                and educational purposes only. It does not constitute investment advice, financial 
                advice, trading advice, or any other form of professional advice. You should not rely 
                solely on this information to make investment decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Investment Risk Disclosure
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-3">
                  MUTUAL FUND INVESTMENTS ARE SUBJECT TO MARKET RISKS
                </h3>
                <ul className="list-disc list-inside space-y-2 text-red-900">
                  <li>All mutual fund investments are subject to market risks</li>
                  <li>Past performance is NOT indicative of future returns</li>
                  <li>NAV of schemes may go up or down depending on market conditions</li>
                  <li>There is no assurance or guarantee of returns</li>
                  <li>Investors may not get back the full amount invested</li>
                  <li>READ ALL SCHEME-RELATED DOCUMENTS CAREFULLY BEFORE INVESTING</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Startup Investment Risks
              </h2>
              <p className="mb-4">
                Investments in startups and pre-IPO companies carry significantly higher risks:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>High failure rate - most startups do not succeed</li>
                <li>Illiquidity - investments may be locked in for extended periods</li>
                <li>Dilution risk - future funding rounds may reduce ownership percentage</li>
                <li>Total loss of capital is possible</li>
                <li>Limited regulatory oversight compared to public markets</li>
                <li>Valuation uncertainty and market volatility</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. No Investment Advice
              </h2>
              <p>
                Finofii does not provide personalized investment advice. All investment decisions 
                are made at your own discretion and risk. We strongly recommend:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Consulting with qualified financial advisors before making investment decisions</li>
                <li>Assessing your financial situation, investment objectives, and risk tolerance</li>
                <li>Conducting your own due diligence on investment opportunities</li>
                <li>Reading all offer documents, prospectuses, and scheme information documents</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Role of Finofii
              </h2>
              <p>
                Finofii Fintech Private Limited acts solely as a <strong>platform facilitator</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>We do NOT hold, manage, or control customer funds</li>
                <li>We do NOT guarantee any investment returns or performance</li>
                <li>We do NOT provide investment recommendations for specific securities</li>
                <li>All investments are executed through SEBI-registered AMCs</li>
                <li>Fund management decisions are made by respective AMC fund managers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Regulatory Compliance
              </h2>
              <p>
                While Finofii operates in compliance with applicable regulations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Investment products are subject to SEBI and AMFI regulations</li>
                <li>Mutual funds are managed by SEBI-registered Asset Management Companies</li>
                <li>Transaction execution occurs through BSE StAR MF platform</li>
                <li>Investors should independently verify regulatory status of investment products</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Accuracy of Information
              </h2>
              <p>
                While we strive to provide accurate and up-to-date information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Information on the platform may contain errors or omissions</li>
                <li>Market data and NAV values are provided by third-party sources</li>
                <li>We do not guarantee completeness or accuracy of all information</li>
                <li>Information should not be relied upon as the sole basis for decisions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Third-Party Links
              </h2>
              <p>
                Our platform may contain links to third-party websites or services. Finofii is not 
                responsible for the content, accuracy, or practices of these third parties. Use of 
                such links is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Tax Implications
              </h2>
              <p>
                Investment returns may have tax implications. Finofii does not provide tax advice. 
                Please consult with a qualified tax professional regarding the tax treatment of your 
                investments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Finofii shall not be liable for any losses, 
                damages, or claims arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Investment performance or market fluctuations</li>
                <li>Decisions made by AMCs or fund managers</li>
                <li>Reliance on information provided on the platform</li>
                <li>Technical issues, system failures, or service interruptions</li>
                <li>Acts of third parties, including AMCs and market intermediaries</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Investor Responsibility
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="font-semibold text-blue-900 mb-3">
                  As an investor, you are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-blue-900">
                  <li>Understanding investment products and associated risks</li>
                  <li>Conducting your own research and due diligence</li>
                  <li>Making informed investment decisions</li>
                  <li>Monitoring your investment portfolio</li>
                  <li>Complying with KYC and regulatory requirements</li>
                  <li>Paying applicable taxes on investment returns</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Changes to Disclaimer
              </h2>
              <p>
                Finofii reserves the right to modify this disclaimer at any time. Changes will be 
                effective immediately upon posting on the platform. Your continued use constitutes 
                acceptance of the updated disclaimer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. Contact for Grievances
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="font-semibold mb-3">For questions or grievances:</p>
                <p><strong>Finofii Fintech Private Limited</strong></p>
                <p>Grievance Officer: [Name]</p>
                <p>Email: <a href="mailto:care@finofii.com" className="text-blue-600 hover:underline">care@finofii.com</a></p>
                <p>Phone: <a href="tel:+919311361888" className="text-blue-600 hover:underline">+91 93113 61888</a></p>
                <p className="mt-2">
                  Address: Unit No-806, Tower 1, Assotech Business Cresterra,<br />
                  Sector 135, Noida, 201301, India
                </p>
              </div>
            </section>

            <div className="bg-gray-100 border-l-4 border-gray-600 p-6 mt-8">
              <p className="font-semibold text-gray-900 mb-2">
                STANDARD DISCLAIMER TEXT:
              </p>
              <p className="text-sm text-gray-700 italic">
                "Mutual Fund investments are subject to market risks, read all scheme related 
                documents carefully. Past performance is not indicative of future returns. Please 
                consider your specific investment requirements before choosing a fund, or designing 
                a portfolio that suits your needs."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;