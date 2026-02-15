"use client";

import { ClipboardCheck, FileCheck, Target, ArrowDown } from "lucide-react";
import SlideIn from "@/components/ui/SlideIn";

export default function Solution() {
  const features = [
    {
      step: "01",
      title: "Align Expectations",
      description: "We set clear goals and align with your financial objectives.",
      icon: <Target className="w-8 h-8 text-brand-blue" strokeWidth={1.5} />,
    },
    {
      step: "02",
      title: "Confirm Documentation Readiness",
      description: "We ensure all your financial documents are in order.",
      icon: <ClipboardCheck className="w-8 h-8 text-brand-blue" strokeWidth={1.5} />,
    },
    {
      step: "03",
      title: "Validate Decision Intent",
      description: "We confirm your commitment and investment goals.",
      icon: <FileCheck className="w-8 h-8 text-brand-blue" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-32 px-6 bg-slate-50 relative overflow-hidden" id="how-it-works">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <SlideIn>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6 tracking-tight">
              What Leaderra Does
            </h2>
            <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
              We operate <span className="text-brand-blue font-bold">before</span> the advisory call.
            </p>
          </SlideIn>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <SlideIn key={index} delay={index * 0.1} className="h-full">
              <div className="group h-full bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/40 border border-slate-100 hover:border-blue-100 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors duration-500">
                      {feature.icon}
                    </div>
                    <span className="text-4xl font-extrabold text-slate-100 group-hover:text-blue-50 transition-colors duration-500 select-none">
                      {feature.step}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>

        {/* Outcome Statement */}
        <SlideIn delay={0.4} className="mt-24 text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <div className="w-px h-16 bg-gradient-to-b from-slate-200 to-transparent" />
            <p className="text-2xl md:text-3xl font-bold text-brand-navy max-w-3xl leading-tight">
              Only prospects who demonstrate readiness reach the advisor calendar.
              <br />
              <span className="text-brand-blue block mt-4">Advisors focus on closing — not discovery.</span>
            </p>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
