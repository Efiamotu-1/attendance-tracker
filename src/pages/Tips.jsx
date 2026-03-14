
import React from "react";

import TipsCard from "../ui/TipsCard";
import { useNavigate } from "react-router-dom";


function Tips() {
  const navigate = useNavigate();
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-primary-500">Tips</h1>
      <p className="mb-6 text-gray-500 dark:text-dark-400 flex items-center gap-2">
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
      </div>
    </div>
  );
}

export default Tips;
