import { Shield, AlertTriangle, Phone, Mail, MapPin } from "lucide-react";

const commissionData = [
  { scheme: "Liquid / Ultra Short Term Schemes", trail: "0.05% - 0.70%" },
  { scheme: "Short Term Income Funds", trail: "0.50% - 0.90%" },
  { scheme: "Income Funds", trail: "0.40% - 1.00%" },
  { scheme: "Gilt Funds", trail: "0.15% - 0.90%" },
  { scheme: "Hybrid Debt / Monthly Income Plans", trail: "0.90% - 1.20%" },
  { scheme: "Arbitrage Funds", trail: "0.55% - 0.70%" },
  { scheme: "Fund of Funds", trail: "0.25% - 0.50%" },
  { scheme: "ELSS", trail: "0.65% - 2.00%" },
  { scheme: "Index Funds", trail: "0.30% - 1.00%" },
  { scheme: "Equity / Hybrid Equity / Balance Funds", trail: "0.65% - 2.00%" },
  { scheme: "Fixed Maturity Plans", trail: "Variable" },
];

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
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Disclosure</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light" style={{ color: 'rgba(191, 219, 254, 0.8)' }}>
            Transparency in commission structure and regulatory compliance as mandated by SEBI & AMFI
          </p>
        </div>
      </section>

      {/* Commission Table Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 md:px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-amber-50 to-orange-50">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#111827' }}>
                Commission Structure
              </h2>
              <p className="mt-2" style={{ color: '#4b5563' }}>
                Trail commission rates received from AMCs for different mutual fund scheme types
              </p>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-800 border-b border-slate-700">
                    <th className="text-left px-8 py-4 text-sm font-bold uppercase tracking-wider" style={{ color: '#ffffff' }}>
                      Scheme Type
                    </th>
                    <th className="text-right px-8 py-4 text-sm font-bold uppercase tracking-wider" style={{ color: '#ffffff' }}>
                      Trail (1st Year Onwards)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {commissionData.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 hover:bg-amber-50/50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="px-8 py-4 font-medium" style={{ color: '#1f2937' }}>
                        {row.scheme}
                      </td>
                      <td className="px-8 py-4 text-right">
                        <span className="inline-block px-3 py-1 bg-amber-100 font-semibold rounded-md text-sm" style={{ color: '#92400e' }}>
                          {row.trail}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-100">
              {commissionData.map((row, index) => (
                <div key={index} className="px-6 py-4 flex justify-between items-center">
                  <span className="text-sm font-medium flex-1 pr-4" style={{ color: '#1f2937' }}>
                    {row.scheme}
                  </span>
                  <span className="inline-block px-3 py-1 bg-amber-100 font-semibold rounded-md text-xs whitespace-nowrap" style={{ color: '#92400e' }}>
                    {row.trail}
                  </span>
                </div>
              ))}
            </div>

            {/* Table Footer Note */}
            <div className="px-6 md:px-8 py-5 bg-gray-50 border-t border-gray-200">
              <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                Details of scheme-level commission on Mutual Funds are available with the Relationship Managers
                and would be produced on demand. This is on a best effort basis and rates are updated as and
                when actual rates are received from AMCs.
              </p>
              <p className="text-sm font-semibold mt-3" style={{ color: '#374151' }}>
                We are a NISM certified / AMFI registered Mutual Fund Distributor and not a Registered Investment Adviser (RIA).
                We get compensated / incentivised by AMCs. We don't charge any fees for our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Factors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <AlertTriangle className="w-7 h-7 flex-shrink-0" style={{ color: '#dc2626' }} />
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#7f1d1d' }}>
                Risk Factors
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed" style={{ color: '#7f1d1d' }}>
              <p>
                Investments in Mutual Funds are subject to Market Risks. Read all scheme related documents
                carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns.
                Past performances of any Mutual Fund Scheme may or may not be sustained in future.
                There is no guarantee that the investment objective of any suggested scheme shall be achieved.
              </p>
              <p>
                All existing and prospective investors are advised to check and evaluate the Exit Loads and
                other cost structure (TER) applicable at the time of making the investment before finalizing
                on any investment decision for Mutual Fund schemes.
              </p>
              <p>
                We deal in Regular Plans only for Mutual Fund Schemes and earn a Trailing Commission on client
                investments. Disclosure for commission earnings is made to clients at the time of investments.
              </p>
              <p className="font-semibold">
                Option of Direct Plan for every Mutual Fund Scheme is available to investors offering
                advantage of lower expense ratio. We are not entitled to earn any commission on Direct Plans.
                Hence we do not deal in Direct Plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Details */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#111827' }}>
              Registration Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-xl">
                <p className="text-sm font-medium uppercase tracking-wider mb-1" style={{ color: '#6b7280' }}>AMFI ARN</p>
                <p className="text-2xl font-bold" style={{ color: '#b45309' }}>ARN-176236</p>
              </div>
              <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl">
                <p className="text-sm font-medium uppercase tracking-wider mb-1" style={{ color: '#6b7280' }}>Platform</p>
                <p className="text-2xl font-bold" style={{ color: '#1d4ed8' }}>BSE StAR MF</p>
              </div>
              <div className="p-5 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-xl">
                <p className="text-sm font-medium uppercase tracking-wider mb-1" style={{ color: '#6b7280' }}>CIN</p>
                <p className="text-lg font-bold" style={{ color: '#047857' }}>U74999UP2021PTC140844</p>
              </div>
              <div className="p-5 bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 rounded-xl">
                <p className="text-sm font-medium uppercase tracking-wider mb-1" style={{ color: '#6b7280' }}>GSTIN</p>
                <p className="text-lg font-bold" style={{ color: '#4338ca' }}>09AAECF4170H1ZM</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
                <strong>AMFI Registered Mutual Fund Distributor</strong> | ARN-176236 | 
                Finofii Fintech Private Limited | Startup India: DIPP80252
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grievance Officer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#111827' }}>
              Grievance Officer
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Mail size={18} style={{ color: '#2563eb' }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: '#6b7280' }}>Email</p>
                    <a href="mailto:care@finofii.com" className="font-semibold hover:underline" style={{ color: '#1d4ed8' }}>
                      care@finofii.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Phone size={18} style={{ color: '#2563eb' }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: '#6b7280' }}>Phone</p>
                    <a href="tel:+919311361888" className="font-semibold hover:underline" style={{ color: '#1d4ed8' }}>
                      +91 93113 61888
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} style={{ color: '#2563eb' }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: '#6b7280' }}>Office Address</p>
                    <p className="font-medium" style={{ color: '#1f2937' }}>
                      Unit No-806, Tower 1, Assotech Business Cresterra,<br />
                      Sector 135, Noida, 201301, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm leading-relaxed" style={{ color: '#78350f' }}>
                <strong>SEBI SCORES:</strong> You can lodge your complaint on SEBI's SCORES portal at{" "}
                <a
                  href="https://scores.sebi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                  style={{ color: '#1d4ed8' }}
                >
                  https://scores.sebi.gov.in
                </a>{" "}
                for any grievance related to securities market against SEBI regulated entities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Disclaimer */}
      <section className="py-12 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 border-l-4 border-gray-600 rounded-r-lg p-6">
            <p className="text-sm leading-relaxed italic" style={{ color: '#374151' }}>
              "Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
              Past performance is not indicative of future returns. Please consider your specific investment
              requirements before choosing a fund, or designing a portfolio that suits your needs."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisclosurePage;
