import { useState } from "react";
import { Calculator } from "lucide-react";

const TreasuryBangalore = () => {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(6.5);
  const [result, setResult] = useState(null);

  const calc = () => {
    const returns = (amount * (rate / 100) * (3 / 12));
    setResult({ returns, total: amount + returns });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Treasury for Bangalore Startups</h1>
          <p className="text-lg text-slate-200">Up to 7%* p.a. indicative returns</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12 rounded-r">
          <p className="text-slate-800"><strong>What is this?</strong> Bangalore startup treasury solutions</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Calculate Your Returns</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-2">Amount (₹)</label>
              <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-2">Annual Rate (%)</label>
              <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} step="0.1" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <button onClick={calc} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">Calculate</button>
            {result && <div className="mt-4 p-4 bg-orange-50 rounded"><p><strong>Return:</strong> ₹{result.returns.toLocaleString()}</p><p><strong>Total:</strong> ₹{result.total.toLocaleString()}</p></div>}
          </div>
        </div>

        <a href="https://wa.me/919311361888" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700">💬 Ask Finofii</a>

        <div className="mt-12 bg-slate-100 p-6 rounded-lg text-sm">
          <p className="font-semibold mb-2">⚠️ Compliance</p>
          <p>Finofii (ARN-176236) is an MFD. Mutual fund investments subject to market risks. Returns indicative, not guaranteed.</p>
        </div>
      </div>
    </div>
  );
};

export default TreasuryBangalore;
