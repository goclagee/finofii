const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl premium-shadow p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-luxury">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: January 2025</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the Finofiii platform ("Platform"), you accept and agree to be 
                bound by the terms and conditions outlined in this agreement. If you do not agree to these 
                terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Services Provided
              </h2>
              <p>Finofiii provides the following wealth management services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Treasury Management:</strong> Business idle cash management through mutual fund investments (minimum ₹1 Crore)</li>
                <li><strong>Founders Wealth:</strong> Startup and pre-IPO investment opportunities (minimum ₹1 Crore)</li>
                <li><strong>Multi-Family Office:</strong> Comprehensive wealth management for HNI families (minimum net worth ₹25 Crores)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Eligibility
              </h2>
              <p>To use our services, you must:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Be at least 18 years of age</li>
                <li>Have legal capacity to enter into binding contracts</li>
                <li>Provide accurate and complete information during registration</li>
                <li>Complete KYC requirements as per SEBI regulations</li>
                <li>Meet the minimum investment thresholds for respective services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Investment Process
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                4.1 No Direct Fund Handling
              </h3>
              <p>
                Finofiii acts as a platform facilitator and does not hold or manage customer funds directly. 
                All investments are executed through SEBI-registered Asset Management Companies (AMCs) via 
                the BSE StAR MF platform as per SEBI Circular No. 20160603-13 dated 03 June, 2016.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                4.2 Investment Authorization
              </h3>
              <p>
                By using our platform, you authorize Finofiii to facilitate investment transactions on your 
                behalf based on your investment preferences and risk profile.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Fees and Charges
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Platform usage fees will be communicated during onboarding</li>
                <li>Mutual fund schemes may have their own expense ratios and charges</li>
                <li>Transaction fees, if any, will be disclosed before execution</li>
                <li>Fees are subject to change with prior notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Risks and Disclaimers
              </h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-4">
                <p className="font-semibold text-amber-900 mb-2">IMPORTANT:</p>
                <ul className="list-disc list-inside space-y-2 text-amber-900">
                  <li>Mutual Fund investments are subject to market risks</li>
                  <li>Past performance is not indicative of future returns</li>
                  <li>Investment values may fluctuate</li>
                  <li>No guaranteed returns are promised</li>
                  <li>Startup investments carry high risk</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. User Responsibilities
              </h2>
              <p>You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Maintain confidentiality of your account credentials</li>
                <li>Provide accurate and up-to-date information</li>
                <li>Review all scheme-related documents before investing</li>
                <li>Understand the risks associated with investments</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Report any unauthorized account access immediately</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Intellectual Property
              </h2>
              <p>
                All content, trademarks, logos, and intellectual property on the Platform are owned by 
                Finofiii Fintech Private Limited or its licensors. You may not reproduce, distribute, or 
                create derivative works without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Limitation of Liability
              </h2>
              <p>
                Finofiii shall not be liable for any direct, indirect, incidental, consequential, or special 
                damages arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Investment losses due to market fluctuations</li>
                <li>Decisions made by AMCs or fund managers</li>
                <li>Technical issues or platform downtime</li>
                <li>Third-party services or actions</li>
                <li>Force majeure events</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Termination
              </h2>
              <p>
                We reserve the right to suspend or terminate your account if you violate these terms or 
                engage in fraudulent activities. You may close your account at any time, subject to settlement 
                of all pending transactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Governing Law
              </h2>
              <p>
                These Terms & Conditions are governed by the laws of India. Any disputes shall be subject 
                to the exclusive jurisdiction of courts in Noida, Uttar Pradesh.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Contact Information
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p><strong>Finofiii Fintech Private Limited</strong></p>
                <p>Email: <a href="mailto:care@finofii.com" className="text-blue-600 hover:underline">care@finofii.com</a></p>
                <p>Phone: <a href="tel:+919311361888" className="text-blue-600 hover:underline">+91 93113 61888</a></p>
                <p className="mt-2">
                  Address: Unit No-806, Tower 1, Assotech Business Cresterra,<br />
                  Sector 135, Noida, 201301, India
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;