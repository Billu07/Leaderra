"use client";

import { Check, ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Book a short intro meeting",
      desc: "We start by understanding your current inbound flow and sales context.",
    },
    {
      num: "02",
      title: "We review your sales flow",
      desc: "We identify exactly where leads are losing momentum in your process.",
    },
    {
      num: "03",
      title: "We design a readiness approach",
      desc: "A custom alignment strategy designed for your specific sales team.",
    },
  ];

  const benefits = [
    "Clearer buyer intent before deep sales effort",
    "Better prioritization of time and energy",
    "Faster deal progression",
    "Higher close probability per conversation",
  ];

  return (
    <section className="py-24 bg-brand-gray/30 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* HOW IT WORKS SECTION */}
        <div className="text-center mb-20">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm">
            How It Works
          </h2>
          <h3 className="text-4xl font-bold text-brand-navy mt-4">
            Three steps to better outcomes.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <span className="text-6xl font-black text-brand-blue/10 absolute -top-10 -left-4 group-hover:text-brand-blue/20 transition-colors">
                {step.num}
              </span>
              <h4 className="text-xl font-bold text-brand-navy mb-4 relative z-10">
                {step.title}
              </h4>
              <p className="text-gray-500 leading-relaxed relative z-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* WHAT SALES GETS SECTION */}
        <div className="mt-32 bg-white rounded-[3rem] border border-gray-100 p-8 md:p-16 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm">
                What Sales Gets
              </h2>
              <h3 className="text-4xl font-bold text-brand-navy mt-4 leading-tight">
                Same leads. Same sales team. <br />
                <span className="text-brand-blue">
                  Stronger, more predictable outcomes.
                </span>
              </h3>
              <p className="mt-6 text-lg text-gray-500">
                Leaderra shortens deal cycles and improves prioritization
                without you having to increase lead volume.
              </p>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 bg-brand-gray/50 rounded-2xl border border-transparent hover:border-brand-blue/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-brand-blue" />
                  </div>
                  <span className="font-bold text-brand-navy">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
