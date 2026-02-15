"use client";

import { useState } from "react";
import { DollarSign, Clock, AlertTriangle } from "lucide-react";

export default function ROICalculator() {
  const [advisors, setAdvisors] = useState(5);
  const [badCalls, setBadCalls] = useState(8);
  const hourlyRate = 250; // Hidden constant for calculation

  const wastedHours = advisors * badCalls;
  const wastedMoney = wastedHours * hourlyRate * 4; // Monthly

  return (
    <section className="py-24 px-6 bg-brand-navy text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold text-blue-200 tracking-wider mb-8">
          <AlertTriangle className="w-3 h-3" />
          THE COST OF MISALIGNMENT
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 leading-tight">
          How much is &quot;discovery&quot; actually costing you?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Inputs */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-left space-y-8">
            <div>
              <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                Number of Advisors
              </label>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={advisors} 
                onChange={(e) => setAdvisors(parseInt(e.target.value))}
                className="w-full accent-brand-blue h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="mt-2 text-right font-mono text-2xl font-bold text-white">
                {advisors} <span className="text-sm text-gray-500 font-sans">advisors</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                Unqualified Calls / Week (Per Advisor)
              </label>
              <input 
                type="range" 
                min="1" 
                max="20" 
                value={badCalls} 
                onChange={(e) => setBadCalls(parseInt(e.target.value))}
                className="w-full accent-brand-blue h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="mt-2 text-right font-mono text-2xl font-bold text-white">
                {badCalls} <span className="text-sm text-gray-500 font-sans">calls</span>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="text-center md:text-left">
            <div className="mb-8">
              <p className="text-gray-400 text-lg mb-2">Monthly Wasted Time</p>
              <div className="text-5xl font-bold text-white flex items-center justify-center md:justify-start gap-3">
                <Clock className="w-10 h-10 text-brand-blue" />
                {wastedHours * 4} <span className="text-2xl text-gray-500">hours</span>
              </div>
            </div>
            
            <div>
              <p className="text-gray-400 text-lg mb-2">Estimated Opportunity Cost</p>
              <div className="text-5xl md:text-6xl font-extrabold text-red-400 flex items-center justify-center md:justify-start gap-2">
                <DollarSign className="w-10 h-10 md:w-14 md:h-14" />
                {wastedMoney.toLocaleString()}
              </div>
              <p className="mt-4 text-sm text-gray-500 max-w-xs mx-auto md:mx-0">
                *Based on conservative hourly opportunity cost estimates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
