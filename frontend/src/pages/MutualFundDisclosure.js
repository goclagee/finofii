import { Link } from "react-router-dom";

const commissionData = [
  { scheme: "Liquid", upfront: "0.05% - 0.15%", trail: "0.05% - 0.15%" },
  { scheme: "Ultra Short Term Schemes", upfront: "0.05% - 0.75%", trail: "0.05% - 0.75%" },
  { scheme: "Short Term Income Funds", upfront: "0.25% - 1.00%", trail: "0.25% - 1.00%" },
  { scheme: "Income Funds", upfront: "0.25% - 1.25%", trail: "0.25% - 1.25%" },
  { scheme: "Gilt Funds", upfront: "0.05% - 0.50%", trail: "0.05% - 0.50%" },
  { scheme: "Hybrid Debt / Monthly Income Plans", upfront: "0.50% - 1.25%", trail: "0.50% - 1.25%" },
  { scheme: "Arbitrage Funds", upfront: "0.05% - 0.60%", trail: "0.05% - 0.60%" },
  { scheme: "Fund of Funds", upfront: "0.25% - 1.00%", trail: "0.25% - 1.00%" },
  { scheme: "ELSS", upfront: "0.50% - 0.75%", trail: "0.00% - 1.50%" },
  { scheme: "Index Funds", upfront: "0.25% - 0.75%", trail: "0.25% - 0.75%" },
  { scheme: "Equity / Hybrid Equity / Balance Funds", upfront: "0.50% - 1.75%", trail: "0.00% - 1.50%" },
  { scheme: "Fixed Maturity Plans", upfront: "0.05%", trail: "Nil" },
];

const MutualFundDisclosure = () => {
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
            Commission Disclosure
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 72px)', color: '#ffffff' }} className="font-extrabold mb-6 leading-[0.95] tracking-tighter">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Mutual Fund Disclosure</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-14">
            <div className="space-y-8" style={{ color: '#374151' }}>

              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>Commission Disclosure</h2>
                <p className="text-sm" style={{ color: '#6b7280' }}>ARN No- 176236</p>
              </div>

              <p>
                As per SEBI circular: SEBI/IMD/CIR No. 4/ 168230/09, following are the details of the comparative commission earned by Finofiii Fintech Private Limited from various fund-houses, whose products are being distributed:
              </p>

              {/* Commission Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-800">
                      <th className="border border-slate-600 px-4 py-3 text-left font-semibold" style={{ color: '#ffffff' }}>Scheme Type</th>
                      <th className="border border-slate-600 px-4 py-3 text-center font-semibold" style={{ color: '#ffffff' }}>UPFRONT + Trail - 1st Year</th>
                      <th className="border border-slate-600 px-4 py-3 text-center font-semibold" style={{ color: '#ffffff' }}>Trail 2nd Year onwards</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commissionData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border border-gray-200 px-4 py-3 font-medium" style={{ color: '#1f2937' }}>{row.scheme}</td>
                        <td className="border border-gray-200 px-4 py-3 text-center" style={{ color: '#374151' }}>{row.upfront}</td>
                        <td className="border border-gray-200 px-4 py-3 text-center" style={{ color: '#374151' }}>{row.trail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Finofiii Fintech Private Limited could also get reimbursements towards promotion and marketing related activities conducted by Finofiii on behalf of AMCs. These reimbursements are event based and the same may or may not be received from AMCs in a particular period. Further, since such activities may be carried out at AMC level, reimbursement amount received cannot be attributed to any specific scheme being offered by such AMC.
              </p>

              <p>
                Details of Scheme level commission on Mutual funds are available with the Relationship Managers and would be produced on demand.
              </p>

              <p>
                This is on a best effort basis and rates are updated as and when actual rates are received from AMCs.
              </p>

              <p className="font-semibold" style={{ color: '#111827' }}>
                Note: Finofiii Fintech Private Limited has "opted-out" for transaction charge as per the SEBI circular no. Cir/ IMD/ DF/13/ 2011 dated August 22, 2011.
              </p>

              {/* Links */}
              <div className="flex flex-col gap-2 pt-8 border-t border-gray-200 mt-8">
                <Link to="/disclosure" className="text-sm font-medium hover:underline" style={{ color: '#1d4ed8' }}>
                  ← Back to Disclaimer
                </Link>
                <Link to="/investor-charter" className="text-sm font-medium hover:underline" style={{ color: '#1d4ed8' }}>
                  Investor Charter & Complaint Status
                </Link>
                <Link to="/grievance-redressal" className="text-sm font-medium hover:underline" style={{ color: '#1d4ed8' }}>
                  Grievance Redressal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MutualFundDisclosure;
