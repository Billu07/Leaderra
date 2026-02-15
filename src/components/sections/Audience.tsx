"use client";

import { Check, X } from "lucide-react";
import SlideIn from "@/components/ui/SlideIn";

export default function Audience() {
  const forWho = [
    "Financial advisors with inbound flow",
    "Loan & mortgage brokers",
    "Insurance agencies",
    "Real estate advisory firms",
    "Credit / funding consultants",
    "40–200 inbound inquiries per month",
    "Advisors overloaded with exploratory calls",
  ];

  const notForWho = [
    "Businesses under 30 inbound inquiries per month",
    "Large enterprise financial institutions",
    "Firms without structured advisory calls",
    "Companies looking only for more traffic",
  ];

  return (
    <section className="py-32 px-6 bg-slate-50 relative overflow-hidden" id="for-advisors">
      <div className="max-w-7xl mx-auto relative z-10">
        <SlideIn className="text-center mb-20">
          <span className="text-brand-blue font-bold tracking-widest text-sm mb-4 block uppercase">
            Audience Fit
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy">
            Who is Leaderra for?
          </h2>
        </SlideIn>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* WHO THIS IS FOR - Premium Card */}
          <SlideIn direction="left" delay={0.2} className="h-full">
            <div className="h-full bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-white ring-1 ring-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-brand-green" />
              {/* Subtle green glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-colors duration-700" />
              
              <h3 className="text-3xl font-bold text-brand-navy mb-10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-green-50 text-brand-green flex items-center justify-center shadow-sm">
                  <Check className="w-6 h-6" strokeWidth={3} />
                </div>
                Who This Is For
              </h3>
              
              <ul className="space-y-6 relative z-10">
                {forWho.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-700 font-medium text-lg">
                    <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-green" strokeWidth={4} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SlideIn>

          {/* WHO THIS IS NOT FOR - Recessed Card */}
          <SlideIn direction="right" delay={0.4} className="h-full">
            <div className="h-full bg-slate-100/50 p-10 md:p-12 rounded-[2.5rem] border border-slate-200/60 relative overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-bold text-slate-500 mb-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-200 text-slate-400 flex items-center justify-center">
                  <X className="w-6 h-6" strokeWidth={3} />
                </div>
                Who This Is NOT For
              </h3>
              
              <ul className="space-y-6">
                {notForWho.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-500 font-medium text-lg">
                    <X className="w-5 h-5 text-slate-400 shrink-0 mt-1" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
