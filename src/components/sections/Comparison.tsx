"use client";

import { Check, X } from "lucide-react";
import RevealText from "@/components/ui/RevealText";

export default function Comparison() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Total Clarity on Our Role
          </h2>
          <p className="text-gray-500 text-lg">
            We are an external, objective readiness layer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* What We Do - Premium White Card */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-white/60 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-blue" />

            <h3 className="text-2xl font-bold text-brand-navy mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center shadow-sm">
                <Check className="w-6 h-6" />
              </span>
              What We Do
            </h3>

            <ul className="space-y-5">
              {[
                "Works only with existing inbound leads",
                "Conducts human SDR conversations",
                "Qualifies and prepares leads",
                "Stops unready leads from booking",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-gray-700 font-medium"
                >
                  <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What We Don't Do - Subtle Gray Card */}
          <div className="bg-[#F8FAFC] p-10 rounded-[2.5rem] border border-gray-200/60 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
            <div className="absolute top-0 left-0 w-full h-2 bg-gray-300" />

            <h3 className="text-2xl font-bold text-gray-500 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center shadow-sm">
                <X className="w-6 h-6" />
              </span>
              What We Don't Do
            </h3>

            <ul className="space-y-5">
              {[
                "Generate leads (Marketing's job)",
                "Build marketing funnels",
                "Close deals (AE's job)",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-gray-500 font-medium"
                >
                  <X className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Focus Industries */}
        <div className="mt-20 text-center">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-8 opacity-80">
            Focus Industries
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {[
              "Technology / SaaS",
              "Consulting & Advisory",
              "Real Estate",
              "Financial Services",
            ].map((industry, i) => (
              <span
                key={i}
                className="px-6 py-3 rounded-full bg-white border border-blue-50 text-brand-navy font-bold shadow-sm hover:shadow-md transition-shadow text-sm md:text-base"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
