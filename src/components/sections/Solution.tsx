"use client";

import { Filter, BrainCircuit, ShieldCheck, Check } from "lucide-react";
import RevealText from "@/components/ui/RevealText";

export default function Solution() {
  const cards = [
    {
      icon: <Filter className="w-10 h-10 text-white" />,
      title: "1. Validate Intent",
      desc: "We speak directly with the lead to confirm real buying intent before they get to you. No more 'just looking'.",
      color: "bg-brand-blue",
      textColor: "text-white",
    },
    {
      icon: <BrainCircuit className="w-10 h-10 text-brand-navy" />,
      title: "2. Clarify Expectations",
      desc: "We ensure they understand your offer, pricing model, and have the right context for a decision.",
      color: "bg-[#F3F4F6]", // Light Gray
      textColor: "text-brand-navy",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-white" />,
      title: "3. Assess Timing",
      desc: "We decide whether a sales conversation should happen now, or if they need nurturing.",
      color: "bg-brand-navy",
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-24 bg-white" id="solution">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <RevealText
            text="THE SOLUTION"
            className="text-brand-blue font-bold tracking-widest text-sm mb-4"
          />
          <h3 className="text-5xl md:text-7xl font-bold text-brand-navy leading-[0.95]">
            The Readiness Layer.
          </h3>
          <p className="mt-6 text-xl text-gray-500">
            Leaderra sits between inbound interest and your sales calendar.
          </p>
        </div>

        {/* STICKY DECK OF CARDS */}
        <div className="flex flex-col gap-8 pb-24">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`sticky top-[15vh] p-10 md:p-16 rounded-[3rem] border border-black/5 shadow-2xl shadow-black/5 ${card.color} ${card.textColor} transition-transform duration-500`}
              // This logic creates the stacking effect:
              style={{
                top: `${120 + index * 40}px`, // Each card sticks slightly lower than the previous one
                zIndex: index + 1,
              }}
            >
              <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 ${card.textColor === "text-white" ? "bg-white/20" : "bg-brand-navy/10"}`}
                >
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-4">
                    {card.title}
                  </h4>
                  <p className={`text-xl leading-relaxed opacity-90 max-w-2xl`}>
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BEYOND FILTERING BLOCK (Static below the stack) */}
        <div className="relative z-10 bg-white rounded-[3rem] border border-brand-blue p-10 md:p-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-brand-blue/5"></div>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-navy mb-10 relative z-10">
            Beyond Filtering: We mentally <br /> prepare them for a decision.
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 relative z-10">
            {[
              "Fewer 'just exploring' calls",
              "Shorter sales cycles",
              "Better conversion progression",
            ].map((res, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white text-brand-navy px-8 py-4 rounded-full font-bold shadow-md border border-gray-100"
              >
                <Check className="w-5 h-5 text-brand-blue" />
                {res}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
