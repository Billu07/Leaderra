"use client";

import { CheckCircle2 } from "lucide-react";

export default function Solution() {
  const steps = [
    {
      title: "Clarify real buying intent",
      desc: "No more window shoppers on the calendar.",
    },
    {
      title: "Create decision context",
      desc: "Buyers arrive with the right information.",
    },
    {
      title: "Align expectations",
      desc: "Both sides know exactly why they are meeting.",
    },
    {
      title: "Ensure the conversation happens at the right time",
      desc: "Only meet when a decision is actually possible.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Solution Header */}
        <div className="max-w-3xl">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm">
            The Solution
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-navy mt-4 leading-tight">
            A readiness and decision layer <br /> before sales conversations.
          </h3>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed">
            Leaderra sits between inbound interest and your sales calendar. We
            ensure every conversation is focused, relevant, and worth the time.
          </p>
        </div>

        {/* What We Do Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl border border-gray-100 hover:border-brand-blue/30 transition-colors bg-brand-gray/50"
            >
              <CheckCircle2 className="w-8 h-8 text-brand-blue mb-4" />
              <h4 className="font-bold text-brand-navy text-lg mb-2 leading-snug">
                {step.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* DUAL-SIDE READINESS BLOCK */}
        <div className="mt-24 bg-brand-navy rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
          {/* Decorative background gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 blur-[100px]" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Dual-Side Readiness
            </h3>

            <div className="grid md:grid-cols-2 gap-8 md:gap-0 md:divide-x md:divide-white/10">
              {/* Buyer Side */}
              <div className="md:pr-12">
                <div className="bg-brand-blue/10 w-fit px-4 py-1 rounded-full text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
                  For Buyers
                </div>
                <p className="text-2xl md:text-3xl font-medium leading-tight">
                  Arrive mentally ready <br /> to make a decision.
                </p>
                <p className="mt-4 text-gray-400">
                  No more feeling "pitched" — buyers enter the call with clarity
                  and intent.
                </p>
              </div>

              {/* Sales Side */}
              <div className="md:pl-12">
                <div className="bg-brand-green/10 w-fit px-4 py-1 rounded-full text-brand-green text-xs font-bold uppercase tracking-wider mb-4">
                  For Sales
                </div>
                <p className="text-2xl md:text-3xl font-medium leading-tight">
                  Enter with clearer signals <br /> of closing probability.
                </p>
                <p className="mt-4 text-gray-400">
                  Stop guessing. Know exactly where the lead stands before you
                  say hello.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
