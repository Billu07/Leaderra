"use client";

import { cn } from "@/lib/utils";

export default function InfiniteMarquee() {
  const logos = [
    "Financial Planning", "Wealth Management", "Investment Advisory", "Capital Partners", "Private Equity", "Asset Management"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 py-10 border-y border-slate-100">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex min-w-full justify-around items-center px-4">
            {logos.map((logo, j) => (
              <span key={j} className="text-2xl font-bold text-slate-300 mx-8 uppercase tracking-widest opacity-60">
                {logo}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
