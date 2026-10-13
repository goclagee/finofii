import { useState } from "react";

const LiquidityPlanning = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20 px-4">
        <h1 className="text-4xl font-bold text-center">Liquidity Planning for Businesses</h1>
        <p className="text-center text-slate-200 mt-2">Mutual Funds are subject to market risks</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
          <p className="text-slate-800"><strong>What is this?</strong> Liquidity Planning for Businesses</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <p className="text-slate-700 leading-relaxed">
            Deploy your surplus into SEBI-regulated liquid and debt mutual funds through the BSE StAR MF platform, with the flexibility of T+1 access. Returns are market-linked and not guaranteed. Speak with our team to understand which fund category suits your needs.
          </p>
        </div>
        <a href="https://wa.me/919311361888" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700">Ask Finofiii</a>
        <div className="mt-12 bg-slate-100 p-6 rounded text-sm">
          <p className="font-semibold mb-2">Compliance & Disclosure</p>
          <p><strong>Finofiii (ARN-176236)</strong> is an AMFI-registered Mutual Fund Distributor. Mutual fund investments are subject to market risks. Returns shown are indicative and not guaranteed. Past performance is not indicative of future results.</p>
        </div>
      </div>
    </div>
  );
};

export default LiquidityPlanning;
