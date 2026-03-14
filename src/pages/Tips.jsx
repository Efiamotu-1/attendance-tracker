
import React, { useState } from "react";

import TipsCard from "../ui/TipsCard";
import { useNavigate } from "react-router-dom";

const cabContacts = [
  { name: "Mr. Cletus", phone: "08035971197" },
  { name: "Mr. Ralph", phone: "08108460125" },
  { name: "Mr. Gbenga", phone: "0803 452 3567" },
  { name: "Mr. Chris", phone: "08069833362" },
  { name: "Mr. Felix", phone: "07037448081" },
  { name: "Mr. Abdul", phone: "+234 905 566 5805" },
];

function Tips() {
  const navigate = useNavigate();
  const [copiedPhone, setCopiedPhone] = useState(null);

  function handleCopy(phone) {
    navigator.clipboard.writeText(phone.replace(/\s/g, "")).then(() => {
      setCopiedPhone(phone);
      setTimeout(() => setCopiedPhone(null), 1500);
    });
  }

  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-primary-500">Tips</h1>
      <p className="mb-6 text-gray-500 dark:text-dark-400 flex items-center gap-2 text-sm">
        <svg className="w-4 h-4 text-primary-400 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
        Click a card to view full details
      </p>
      <div className="grid gap-6">
        <button
          className="text-left focus:outline-none group w-full"
          style={{ borderRadius: 'inherit' }}
          onClick={() => navigate('/tips/nls-abuja-food-tips')}
        >
          <div className="relative">
            <TipsCard title="NLS Abuja Food Tips">
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold text-primary-400">Try the local cuisine:</span> Explore suya spots, jollof rice, and native soups at nearby restaurants.</li>
                <li><span className="font-semibold text-primary-400">Affordable eats:</span> Check out the NLS canteen for budget-friendly meals and snacks.</li>
                <li><span className="font-semibold text-primary-400">Hydration:</span> Abuja can be hot—carry a water bottle and stay hydrated throughout the day.</li>
                <li><span className="font-semibold text-primary-400">Food delivery:</span> Use apps like Jumia Food or Glovo for convenient delivery to your hostel or classroom.</li>
                <li><span className="font-semibold text-primary-400">Healthy options:</span> Look for fruit vendors around the campus for fresh, healthy snacks.</li>
              </ul>
            </TipsCard>
          </div>
        </button>

        {/* Cab Numbers — inline, no detail page */}
        <div>
          <TipsCard title="NLS Abuja Cab Numbers">
            <p className="text-gray-500 dark:text-dark-400 text-xs sm:text-sm mb-3">Active cab numbers from the last set. Tap a number to copy.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cabContacts.map((c) => (
                <div
                  key={c.phone}
                  className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl border border-gray-200 dark:border-dark-700 bg-gray-50 dark:bg-dark-800/60 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' }}>
                      {c.name.split(" ").pop().charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate">{c.name}</p>
                      <p className="text-xs text-gray-500 dark:text-dark-400 font-mono">{c.phone}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(c.phone)}
                    className={`flex-shrink-0 p-1.5 sm:p-2 rounded-lg transition-all text-xs font-medium ${
                      copiedPhone === c.phone
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-500/20 hover:text-primary-600 dark:hover:text-primary-400"
                    }`}
                    title={`Copy ${c.phone}`}
                  >
                    {copiedPhone === c.phone ? (
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    ) : (
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </TipsCard>
        </div>
      </div>
    </div>
  );
}

export default Tips;
