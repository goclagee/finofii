import { Link } from "react-router-dom";

const InvestorCharter = () => {
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
            Finofiii Fintech Private Limited
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 72px)', color: '#ffffff' }} className="font-extrabold mb-6 leading-[0.95] tracking-tighter">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Investor Charter</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-14">
            <div className="space-y-10" style={{ color: '#374151' }}>

              {/* Annexure B - Complaint Status */}
              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>FINOFII FINTECH PRIVATE LIMITED</h2>
                <h3 className="text-xl font-bold mb-6" style={{ color: '#111827' }}>Annexure B (Complaint Status)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-800">
                        <th className="border border-slate-600 px-3 py-3 text-left font-semibold" style={{ color: '#ffffff' }}>Sr. No</th>
                        <th className="border border-slate-600 px-3 py-3 text-left font-semibold" style={{ color: '#ffffff' }}>Received from</th>
                        <th className="border border-slate-600 px-3 py-3 text-center font-semibold" style={{ color: '#ffffff' }}>Pending at the end of Last month</th>
                        <th className="border border-slate-600 px-3 py-3 text-center font-semibold" style={{ color: '#ffffff' }}>Received</th>
                        <th className="border border-slate-600 px-3 py-3 text-center font-semibold" style={{ color: '#ffffff' }}>Resolved</th>
                        <th className="border border-slate-600 px-3 py-3 text-center font-semibold" style={{ color: '#ffffff' }}>Total Pending</th>
                        <th className="border border-slate-600 px-3 py-3 text-center font-semibold" style={{ color: '#ffffff' }}>Pending complaints &gt; 3 months</th>
                        <th className="border border-slate-600 px-3 py-3 text-center font-semibold" style={{ color: '#ffffff' }}>*Average Resolution time (in days)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border border-gray-200 px-3 py-3 text-center">1</td>
                        <td className="border border-gray-200 px-3 py-3">Directly from Investors</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-3 py-3 text-center">2</td>
                        <td className="border border-gray-200 px-3 py-3">SEBI (SCORES)</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-200 px-3 py-3 text-center">3</td>
                        <td className="border border-gray-200 px-3 py-3">Other Sources (if any)</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                      </tr>
                      <tr className="bg-amber-50 font-semibold">
                        <td className="border border-gray-200 px-3 py-3 text-center" colSpan="2">Grand Total</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                        <td className="border border-gray-200 px-3 py-3 text-center">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs mt-3 italic" style={{ color: '#6b7280' }}>
                  *Average Resolution time is the sum total of time taken to resolve each complaint in days, in the current month divided by total number of complaints resolved in the current month.
                </p>
              </div>

              {/* Annexure A - Investor Charter */}
              <div>
                <h3 className="text-xl font-bold mb-6" style={{ color: '#111827' }}>Annexure- A</h3>
                <h3 className="text-xl font-bold mb-6" style={{ color: '#111827' }}>Investor Charter in respect of Mutual Fund Distributor (MFD)</h3>

                {/* Section A */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#111827' }}>A. Vision and Mission Statements for investors</h4>
                  <div className="space-y-3 pl-4 border-l-2 border-amber-200">
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold"><span className="font-semibold">Vision</span> – Invest with knowledge & safety.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold"><span className="font-semibold">Mission</span> – Every investor should be able to invest in the right mutual fund schemes based on their needs, monitor them to meet their goals, access reports, and enjoy financial wellness.</p>
                  </div>
                </div>

                {/* Section B */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#111827' }}>B. Details of business transacted by the Mutual Fund Distributor with respect to the investors</h4>
                  <div className="space-y-3 pl-4 border-l-2 border-amber-200">
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">To assist investors in completing KYC / Central KYC (CKYC) formalities before facilitating any investment.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">To provide full, accurate and truthful information on mutual fund schemes — objectives, risks, loads and expense ratio — before facilitating an investment.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">To facilitate execution of subscription, redemption, switch, SIP / SWP / STP instructions strictly as per the investor's mandate, and route these to the concerned AMC / RTA (CAMS/KFintech).</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">To never accept cash, or any payment in the distributor's own name or account, for investment or redemption — all payments must be made directly to the scheme/AMC.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">To disclose commission/brokerage received from AMCs to investors, on request or as mandated.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">To maintain confidentiality of client information and not access a client's holdings or accounts without authorisation.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">To deal with clients only through official, registered contact channels.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">To hold a valid AMFI Registration Number (ARN) and ensure all client-facing personnel hold a valid EUIN.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">To maintain records of all interactions with clients, including prospective clients, where any conversation related to a scheme has taken place.</p>
                  </div>
                </div>

                {/* Section C */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#111827' }}>C. Details of services provided to investors (No Indicative Timelines)</h4>
                  <div className="space-y-3 pl-4 border-l-2 border-amber-200">
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold"><span className="font-semibold">Onboarding of Clients</span>
                      <div className="space-y-2 pl-4 ml-4 border-l-2 border-gray-200">
                        <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Sharing of scheme-related documents (SID/KIM)</p>
                        <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Completing KYC / UCC set-up of clients</p>
                      </div>
                    </p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold"><span className="font-semibold">Disclosure to Clients</span>
                      <div className="space-y-2 pl-4 ml-4 border-l-2 border-gray-200">
                        <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">To provide full disclosure of the distributor's business, affiliations and commission structure.</p>
                        <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">To not access a client's accounts or holdings for offering guidance beyond permissible scope.</p>
                        <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">To disclose the risk profile associated with a scheme to the client.</p>
                      </div>
                    </p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">To facilitate transactions (SIP set-up/pause/cancellation, redemption, switch, portfolio valuation and capital gains statement requests) based on the client's instructions and risk suitability.</p>
                  </div>
                </div>

                {/* Section D */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#111827' }}>D. Details of grievance redressal mechanism and how to access it</h4>
                  <div className="space-y-3 pl-4 border-l-2 border-amber-200">
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">In case of any grievance / complaint, an investor should approach Finofiii Fintech Private Limited (via the Grievance Redressal/Escalation Matrix above) and Finofiii shall ensure that the grievance is resolved within 30 days.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">If the investor's complaint is not redressed satisfactorily, one may lodge a complaint with SEBI on SEBI's 'SCORES' portal (<a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" style={{ color: '#1d4ed8' }}>https://scores.sebi.gov.in</a>), a centralised web-based complaints redressal system. SEBI takes up complaints registered via SCORES with the concerned intermediary for timely redressal. SCORES facilitates tracking the status of the complaint.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">With regard to physical complaints, investors may send their complaints to: Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan, Plot No. C4-A, 'G' Block, Bandra-Kurla Complex, Bandra (E), Mumbai – 400051.</p>
                  </div>
                </div>

                {/* Section E */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#111827' }}>E. Expectations from the investors (Responsibilities of investors)</h4>
                  
                  <h5 className="font-bold mt-4 mb-2" style={{ color: '#047857' }}>Do's</h5>
                  <div className="space-y-3 pl-4 border-l-2 border-amber-200">
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Always deal with AMFI-registered Mutual Fund Distributors.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Verify the distributor's ARN and EUIN validity on the AMFI website before transacting.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Insist that every investment payment/cheque is made only in favour of the mutual fund scheme — never in the distributor's personal or firm name.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Always read the Scheme Information Document (SID) / Key Information Memorandum (KIM) before investing.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Assess your risk profile, investment goals and the liquidity/safety aspects of a scheme before investing.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Ask all relevant questions and clear your doubts with your distributor before acting.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Insist on written or email confirmation of every transaction instruction (SIP, redemption, switch) placed.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Keep your KYC, email, mobile number and bank details updated with the AMC/RTA.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Be vigilant — regularly check your account statements/CAS for discrepancies.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Right to have digital accessibility.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Approach the appropriate authorities for redressal of your doubts / grievances.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Inform SEBI/AMFI about distributors offering assured or guaranteed returns.</p>
                  </div>

                  <h5 className="font-bold mt-6 mb-2" style={{ color: '#dc2626' }}>Don'ts</h5>
                  <div className="space-y-3 pl-4 border-l-2 border-amber-200">
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Don't fall for scheme 'tips' or personalised investment advice offered by a distributor beyond its permitted scope.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Do not hand over cash, or issue cheques in the distributor's personal name, for any mutual fund investment.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Don't fall for the promise of indicative, exorbitant or assured returns. Don't let greed override rational investment decisions.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Don't fall prey to luring advertisements or market rumours.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Avoid transacting only on the basis of phone calls or messages — insist on written confirmation.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Don't take decisions just because of repeated messages and calls from the distributor.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Do not fall prey to limited-period discounts or other incentives/gifts offered by distributors.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Don't rush into investments that do not match your risk-taking appetite and investment goals.</p>
                    <p className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-amber-500 before:font-bold">Do not share login credentials and passwords of your folio/CAS portal with the distributor.</p>
                  </div>
                </div>
              </div>

              {/* Company Details */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#111827' }}>Finofiii Fintech Private Limited</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <p><span className="font-semibold">Name of Mutual Fund Distributor</span> – Finofiii Fintech Private Limited</p>
                  <p><span className="font-semibold">CIN</span> – U74999UP2021PTC140844</p>
                  <p><span className="font-semibold">AMFI Registration Number (ARN)</span> – ARN-176236</p>
                  <p><span className="font-semibold">Type of Registration</span> – Non-Individual (Corporate)</p>
                  <p className="md:col-span-2"><span className="font-semibold">Address of Distributor</span> – 806, 8th Floor, Tower-1, Assotech Business Cresterra, Sector 135, Noida-201304, Uttar Pradesh</p>
                  <p><span className="font-semibold">Contact Details</span> – +91 120 510 6933</p>
                  <p><span className="font-semibold">Founders</span> – Ganesh Jha & Mayank Saxena</p>
                  <p><span className="font-semibold">Directors</span> – Ganesh Jha & Umesh Saxena</p>
                  <p><span className="font-semibold">Email ID of the Founders</span> – ms@finofii.com | gj@finofii.com</p>
                  <p><span className="font-semibold">Name of Compliance Officer</span> – Mayank Saxena</p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="font-semibold text-sm leading-relaxed" style={{ color: '#991b1b' }}>
                  DISCLAIMER: Investments in mutual funds are subject to market risks. Read all scheme-related documents carefully before investing. There is no assurance or guarantee that the objectives of any scheme will be achieved. Past performance of any AMC/scheme is not indicative of future performance. Registration granted by SEBI and membership of AMFI (ARN) in no way guarantee the performance of the distributor or provide any assurance of returns to investors.
                </p>
              </div>

              {/* Back to Disclosure */}
              <div className="pt-6">
                <Link
                  to="/disclosure"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-md"
                >
                  ← Back to Disclosure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorCharter;
