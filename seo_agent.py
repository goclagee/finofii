#!/usr/bin/env python3
import os
import sys
from pathlib import Path

print("🚀 Starting SEO agent...")

repo_path = Path(os.getcwd()).resolve()
pages_dir = repo_path / "frontend" / "src" / "pages"

if not pages_dir.exists():
    print(f"❌ ERROR: Pages directory not found: {pages_dir}")
    sys.exit(1)

pages_config = [
    ("IdleCashStartup3mo", "Idle Cash Calculator for Startups"),
    ("IdleCashMSME6mo", "Idle Cash Calculator for MSMEs"),
    ("TreasuryVsFD", "Treasury vs Fixed Deposits"),
    ("TreasuryVsSIP", "Treasury vs SIPs"),
    ("TreasuryBangalore", "Treasury for Bangalore Startups"),
    ("WhatIsTreasury", "What is Treasury Management?"),
    ("UnderstandingNAV", "Understanding NAV"),
    ("ComparisonCurrentAccount", "Treasury vs Current Account"),
    ("NavCalculator", "NAV Calculator"),
    ("RiskDisclosureGuide", "Risk Disclosure Guide"),
]

template = """import { useState } from "react";

const NAME_PLACEHOLDER = () => {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(6.5);
  const [result, setResult] = useState(null);

  const calc = () => {
    const r = (amount * (rate / 100) * (3 / 12));
    setResult({ returns: r, total: amount + r });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20 px-4">
        <h1 className="text-4xl font-bold text-center">TITLE_PLACEHOLDER</h1>
        <p className="text-center text-slate-200 mt-2">Up to 7%* p.a. indicative</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
          <p className="text-slate-800"><strong>What is this?</strong> TITLE_PLACEHOLDER</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Calculate Returns</h2>
          <div className="space-y-4">
            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder="Amount" className="w-full px-4 py-2 border rounded-lg" />
            <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} placeholder="Rate %" step="0.1" className="w-full px-4 py-2 border rounded-lg" />
            <button onClick={calc} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg">Calculate</button>
            {result && <div className="p-4 bg-orange-50 rounded"><p>Return: ₹{result.returns.toFixed(0)}</p><p>Total: ₹{result.total.toFixed(0)}</p></div>}
          </div>
        </div>
        <a href="https://wa.me/919311361888" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700">Ask Finofii</a>
        <div className="mt-12 bg-slate-100 p-6 rounded text-sm">
          <p className="font-semibold mb-2">Compliance</p>
          <p>Finofii (ARN-176236) is MFD. Mutual funds subject to market risks. Returns indicative, not guaranteed.</p>
        </div>
      </div>
    </div>
  );
};

export default NAME_PLACEHOLDER;
"""

generated_count = 0
for name, title in pages_config:
    try:
        code = template.replace("NAME_PLACEHOLDER", name).replace("TITLE_PLACEHOLDER", title)
        file_path = pages_dir / f"{name}.js"
        file_path.write_text(code)
        print(f"✓ {name}.js")
        generated_count += 1
    except Exception as e:
        print(f"❌ Failed to write {name}.js: {e}")
        sys.exit(1)

print(f"\n✅ Generated {generated_count} pages")

app_js_path = repo_path / "frontend" / "src" / "App.js"

if not app_js_path.exists():
    print(f"❌ ERROR: App.js not found at {app_js_path}")
    sys.exit(1)

try:
    app_content = app_js_path.read_text()
    
    for name, _ in pages_config:
        import_line = f'import {name} from "@/pages/{name}";'
        # CRITICAL: Use JSX element syntax with angle brackets
        route_line = f'          <Route path="/{name.lower()}" element={{<{name} />}} />'
        
        if import_line not in app_content:
            app_content = app_content.replace(
                'import RiskDisclosure from "@/pages/RiskDisclosure";',
                f'import RiskDisclosure from "@/pages/RiskDisclosure";\nimport {name} from "@/pages/{name}";'
            )
        
        if route_line not in app_content:
            app_content = app_content.replace(
                "        </Routes>",
                f"{route_line}\n        </Routes>"
            )
    
    app_js_path.write_text(app_content)
    print("✅ App.js updated with imports and routes")
    
except Exception as e:
    print(f"❌ Failed to update App.js: {e}")
    sys.exit(1)

print("\n✅ SEO agent completed successfully!")
sys.exit(0)
