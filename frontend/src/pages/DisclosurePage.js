const DisclosurePage = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full filter blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-bold rounded-full uppercase tracking-wider mb-6" style={{ color: '#bfdbfe' }}>
            AMFI Registered Distributor
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 72px)', color: '#ffffff' }} className="font-extrabold mb-6 leading-[0.95] tracking-tighter">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Disclaimer</span>
          </h1>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-14">
            <div className="space-y-6 text-base leading-relaxed" style={{ color: '#374151' }}>

              <p className="font-semibold text-lg" style={{ color: '#111827' }}>
                AMFI Registered Mutual Fund Distributor: Registration Detail AMFI Reg. No. ARN-176236 | Member No. 52379 | Validity upto: 22nd Feb 2027
              </p>

              <p>
                We aim to provide you with the best Customer Service. However, if you have a problem or wish to register a complaint, you can reach us at any of the following access channels.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 space-y-3">
                <p>
                  <span className="font-semibold" style={{ color: '#1e40af' }}>E-mail:</span>{" "}
                  <a href="mailto:care@finofii.com" className="hover:underline" style={{ color: '#1d4ed8' }}>care@finofii.com</a>
                </p>
                <p>
                  <span className="font-semibold" style={{ color: '#1e40af' }}>Write to us:</span>{" "}
                  Unit No-806, Tower 1, Assotech Business Cresterra, Sector 135, Noida, 201301, India
                </p>
                <p>
                  <span className="font-semibold" style={{ color: '#1e40af' }}>Contact Person:</span>{" "}
                  Mr. Ganessh Jha
                </p>
              </div>

              <p>
                Finofii Fintech Private Limited is a mutual fund distributor (ARN-176236) registered with AMFI. Certain products and services offered by Finofii may not be traded on the exchange. All disputes with respect to the distribution activity, would not have access to Exchange Investor Redressal Forum or Arbitration mechanism. In accordance with the applicable laws, Finofii is permitted to render incidental advice with respect to mutual fund products only to its mutual fund distribution clients. For every other purpose, including distribution of non-mutual fund products, the circulated material is for informational purposes only. Further, it is not intended as investment advice or an opinion concerning securities or a public offer proving a basis for an investment decision. The views or expressions contained in the circulated material are not necessarily of Finofii and Finofii neither assumes any responsibility/liability nor does guarantee its accuracy, suitability, completeness and adequacy. The figures and data that may be appearing in the material are taken from various sources deemed reliable by Finofii. The content of the material including images, charts, graphics and pictures is protected intellectual properties and cannot be amended, copied, reproduced, replicated, republished, uploaded, posted, published, transmitted, displayed or distributed for any non-personal use without obtaining prior written permission, any non-adherence of which may attract appropriate legal action. Mutual Fund investments are subject to market risk, read all scheme related documents carefully. The past performance of the scheme is not indicative of future performance. Investors are advised to seek appropriate advice from experts before taking any investment decisions. Nothing in the circulated material is intended to construe an advertisement or an investment, financial advice and/or solicitation, advice to buy, sell or deal in any financial product.
              </p>

              <p>
                We registered under any other SEBI Regulations: If Yes, please specify – Portfolio Management Services - Distribution Name of the Regulations: SEBI (Portfolio Managers) Regulations, 2020, as amended from time to time.
              </p>

              <p>
                Registration No. NISM-201200002207 and Validity 20/AUG/2026
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-200 mt-8">
                <a
                  href="mailto:care@finofii.com"
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-md"
                >
                  Feedback Form
                </a>
                <a
                  href="/disclosure"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all shadow-md"
                >
                  Mutual Fund Disclosure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisclosurePage;
