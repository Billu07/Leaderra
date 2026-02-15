"use client";

import { Check, X, TrendingUp, Clock, DollarSign, Target } from "lucide-react";
import SlideIn from "@/components/ui/SlideIn";
import RevealText from "@/components/ui/RevealText";

export default function Comparison() {
  const comparisonData = [
    {
      title: "Lead Generation",
      action: "Drive traffic",
      focus: "Focus on volume",
      result: "Advisors filter live",
      isHighlight: false,
    },
    {
      title: "Appointment Setting",
      action: "Fill calendars",
      focus: "Focus on meetings",
      result: "Advisors filter live",
      isHighlight: false,
    },
    {
      title: "Leaderra",
      action: "Control conversation readiness",
      focus: "Focus on progression probability",
      result: "Advisors focus on closing",
      isHighlight: true,
    },
  ];

  const changes = [
    { text: "Higher quality conversations", icon: <Target className="w-6 h-6 text-brand-blue" /> },
    { text: "Stronger close progression", icon: <TrendingUp className="w-6 h-6 text-brand-green" /> },
    { text: "Shorter advisory cycles", icon: <Clock className="w-6 h-6 text-orange-500" /> },
    { text: "More revenue per advisor hour", icon: <DollarSign className="w-6 h-6 text-brand-navy" /> },
  ];

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Spotlight Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[800px] pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/80 via-transparent to-transparent opacity-70 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HOW WE COMPARE */}
        <div className="text-center mb-20">
          <SlideIn>
            <RevealText
              text="HOW WE COMPARE"
              className="text-brand-blue font-bold tracking-widest text-sm mb-4 block uppercase"
            />
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-16">
              Stop filtering live.
            </h2>
          </SlideIn>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {comparisonData.map((item, i) => (
              <SlideIn key={i} delay={i * 0.1} className="h-full">
                <div
                  className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center h-full ${
                    item.isHighlight
                      ? "bg-brand-navy text-white shadow-2xl scale-105 border-brand-navy z-10"
                      : "bg-white/80 backdrop-blur-sm text-slate-600 border-slate-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  {item.isHighlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      The Leaderra Way
                    </div>
                  )}
                  
                  <h3 className={`text-2xl font-bold mb-8 ${item.isHighlight ? "text-white" : "text-brand-navy"}`}>
                    {item.title}
                  </h3>
                  
                  <div className="space-y-6 w-full flex-grow flex flex-col justify-center">
                    <div className={`p-4 rounded-xl font-medium ${item.isHighlight ? "bg-white/10" : "bg-slate-50"}`}>
                      {item.action}
                    </div>
                    <div className={`p-4 rounded-xl font-medium ${item.isHighlight ? "bg-white/10" : "bg-slate-50"}`}>
                      {item.focus}
                    </div>
                    <div className={`p-4 rounded-xl font-bold ${item.isHighlight ? "bg-brand-blue text-white" : "bg-red-50 text-red-500"}`}>
                      {item.result}
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>

        {/* WHAT CHANGES */}
        <div className="mt-32">
           <SlideIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6">
              What Changes?
            </h2>
            <p className="text-2xl text-slate-500 font-medium italic">
              &quot;Less noise. More movement.&quot;
            </p>
          </SlideIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {changes.map((change, i) => (
              <SlideIn key={i} delay={0.2 + (i * 0.1)}>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-6">
                    {change.icon}
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy leading-tight">
                    {change.text}
                  </h4>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
