"use client";

import {
  ArrowRight,
  X,
  AlertCircle,
  TrendingDown,
  Clock,
  Users,
} from "lucide-react";
import SlideIn from "@/components/ui/SlideIn";

export default function Problem() {
  const steps = [
    { text: "Prospect submits inquiry", icon: <Users className="w-4 h-4" /> },
    { text: "Meeting gets scheduled", icon: <Clock className="w-4 h-4" /> },
    {
      text: "Misalignment discovered live",
      icon: <AlertCircle className="w-4 h-4" />,
    },
    {
      text: "Deal slows, stalls, or drops",
      icon: <TrendingDown className="w-4 h-4" />,
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-red-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Left: The Narrative */}
        <SlideIn direction="right">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-50 text-brand-red px-4 py-1.5 rounded-full font-bold text-[10px] mb-6 border border-red-100 uppercase tracking-[0.2em] shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                </span>
                The Friction Point
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-brand-navy leading-[1.1] mb-8 tracking-tight">
                Inbound leads reach sales{" "}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10 text-brand-red">
                    too early.
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-red-100 -z-10"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 25 0 50 5 T 100 5"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-lg">
                Your reps are spending high-value hours on basic education
                instead of
                <span className="text-brand-navy font-bold">
                  {" "}
                  closing deals.
                </span>
              </p>
            </div>

            <div className="relative p-8 bg-slate-50/50 rounded-2xl border border-slate-100 backdrop-blur-sm">
              <div className="absolute -left-1 top-8 bottom-8 w-1 bg-brand-navy rounded-full" />
              <p className="text-xl font-semibold text-brand-navy italic leading-snug">
                &quot;This isn&apos;t a sales skill issue. It&apos;s a{" "}
                <span className="text-brand-red">readiness gap</span>{" "}
                that&apos;s costing you revenue.&quot;
              </p>
            </div>
          </div>
        </SlideIn>

        {/* Right: The Breakdown Visual */}
        <SlideIn direction="left" delay={0.2}>
          <div className="relative group">
            {/* Premium Card Container */}
            <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_48px_80px_-16px_rgba(0,0,0,0.12)]">
              {/* Animated Gradient Mesh */}
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

              <div className="flex justify-between items-center mb-12">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.15em] flex items-center gap-3">
                  The Inbound Leak
                </h3>
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-slate-100"
                    />
                  ))}
                </div>
              </div>

              <div className="relative space-y-6">
                {/* Connecting Line with Gradient */}
                <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-slate-100 via-slate-200 to-red-100 -z-10" />

                {steps.map((step, i) => {
                  const isLast = i === steps.length - 1;
                  return (
                    <div key={i} className="flex items-start gap-6 group/item">
                      <div
                        className={`
                        w-12 h-12 rounded-2xl flex items-center justify-center border-2 shrink-0 transition-all duration-500 z-10
                        ${
                          isLast
                            ? "bg-brand-red border-brand-red text-white shadow-[0_8px_20px_-4px_rgba(220,38,38,0.4)]"
                            : "bg-white border-slate-100 text-slate-400 group-hover/item:border-brand-navy group-hover/item:text-brand-navy group-hover/item:shadow-lg"
                        }
                      `}
                      >
                        {isLast ? (
                          <X className="w-6 h-6" strokeWidth={3} />
                        ) : (
                          step.icon
                        )}
                      </div>

                      <div
                        className={`
                        flex-1 p-5 rounded-2xl border transition-all duration-300
                        ${
                          isLast
                            ? "bg-red-50/50 border-red-100 text-brand-red shadow-sm"
                            : "bg-white border-slate-100 text-slate-600 group-hover/item:border-slate-200 group-hover/item:shadow-sm group-hover/item:-translate-y-0.5"
                        }
                      `}
                      >
                        <div className="flex justify-between items-center">
                          <span
                            className={`font-bold text-base ${isLast ? "text-brand-red" : "text-slate-700"}`}
                          >
                            {step.text}
                          </span>
                          {!isLast && (
                            <ArrowRight className="w-4 h-4 text-slate-300 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Status Bar */}
              <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-red-400" />
                  Revenue Leak Detected
                </p>
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
