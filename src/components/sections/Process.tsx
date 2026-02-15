"use client";

import Link from "next/link";
import { Search, TrendingUp, BarChart2, Clock, Ban, CheckCircle, ArrowRight } from "lucide-react";
import SlideIn from "@/components/ui/SlideIn";

export default function Process() {
  const steps = [
    {
      title: "Monthly Inbound Volume",
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      color: "bg-brand-blue",
    },
    {
      title: "Cost Per Lead",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      color: "bg-brand-green",
    },
    {
      title: "Current Close Progression",
      icon: <Search className="w-6 h-6 text-white" />,
      color: "bg-orange-500",
    },
    {
      title: "Advisor Time Allocation",
      icon: <Clock className="w-6 h-6 text-white" />,
      color: "bg-brand-navy",
    },
    {
      title: "Where Deals Stall",
      icon: <Ban className="w-6 h-6 text-white" />,
      color: "bg-brand-red",
    },
  ];

  return (
    <section className="py-32 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <SlideIn>
          <span className="text-brand-blue font-bold tracking-widest text-sm mb-4 block uppercase">
            The First Step
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-8">
            What Happens In The First Call
          </h2>
          <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto mb-20">
            The goal is clarity around conversion efficiency — <span className="text-slate-900 font-bold">not financial underwriting.</span>
          </p>
        </SlideIn>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-slate-200 -z-10" />

          {steps.map((step, i) => (
            <SlideIn key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center group">
                <div className={`
                  w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-200/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3
                  ${step.color}
                `}>
                  {step.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg leading-tight px-2">
                  {step.title}
                </h3>
              </div>
            </SlideIn>
          ))}
        </div>
        
        <SlideIn delay={0.6} className="flex flex-col items-center gap-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-blue font-bold rounded-full border border-blue-100 shadow-sm">
             <CheckCircle className="w-5 h-5" /> Clarity comes first.
          </div>
          
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-white text-brand-navy px-8 py-4 rounded-xl font-bold text-lg border-2 border-slate-200 hover:border-brand-navy hover:text-brand-navy transition-all shadow-sm hover:shadow-md"
          >
            Book an Advisor Time Audit <ArrowRight className="w-5 h-5" />
          </Link>
        </SlideIn>
      </div>
    </section>
  );
}
