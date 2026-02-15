"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Sun } from "lucide-react";

// Components
import RevealText from "@/components/ui/RevealText";
import SlideIn from "@/components/ui/SlideIn";
import Solution from "@/components/sections/Solution";
import Comparison from "@/components/sections/Comparison";
import FAQ from "@/components/sections/FAQ";
import Problem from "@/components/sections/Problem";
import Audience from "@/components/sections/Audience";
import Process from "@/components/sections/Process";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      {/* 1. HERO SECTION - Reverted to Clean Image BG with Animations */}
      <section className="relative min-h-[90vh] flex items-center bg-[url('/hero-bg.png')] bg-cover bg-right-top bg-no-repeat">
        {/* Seamless Blend Overlay - Adjusted for visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white from-20% via-white/60 to-transparent z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2">
          {/* Left: Text Content */}
          <div className="text-left pt-20 pb-20">
            <SlideIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10B981] rounded-full text-white font-medium text-sm mb-8 shadow-sm">
                <Sun className="w-4 h-4 fill-white text-white" />
                Control Conversation Readiness
              </div>
            </SlideIn>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              <RevealText text="Your Advisors Shouldn’t Discover" /> <br />
              <RevealText text="Misalignment Live." delay={0.2} />
            </h1>

            <SlideIn delay={0.4}>
              <p className="text-xl text-slate-600 font-normal mb-10 max-w-xl leading-relaxed">
                <strong>
                  Stop wasting advisor time on exploratory calls. We qualify
                  intent so you focus on closing.
                </strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start w-full sm:w-auto">
                <Link
                  href="/book"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#007BFF] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0056CC] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Book an Advisor Time Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="#how-it-works"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg text-slate-700 border border-slate-300 hover:bg-slate-50 transition-all bg-white/80 backdrop-blur-sm"
                >
                  See How It Works
                </Link>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM (New Premium Version) */}
      <Problem />

      {/* 4. THE SOLUTION (New Premium Version) */}
      <Solution />

      {/* 5. AUDIENCE FIT (Slate 50) */}
      <Audience />

      {/* 6. COMPARISON (Reverted to Clean Light Version) */}
      <Comparison />

      {/* 7. PROCESS (Slate 50) */}
      <Process />

      {/* 8. FAQ (Clean Bars) */}
      <FAQ />

      {/* 9. FOOTER CTA - Reverted to Clean Version */}
      <section className="py-32 px-6 bg-white text-center border-t border-slate-100 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <SlideIn>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              Ready to stop the <br />
              <span className="text-[#007BFF] decoration-wavy underline decoration-blue-200">
                conversation leak?
              </span>
            </h2>

            <p className="text-xl text-slate-500 mb-12 max-w-xl mx-auto">
              Book your audit. We&apos;ll find where your funnel is breaking and
              show you how to fix it.
            </p>

            <Link
              href="/book"
              className="inline-flex items-center gap-3 bg-[#003366] text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-[#007BFF] transition-all shadow-xl hover:-translate-y-1 hover:shadow-blue-200"
            >
              Book an Advisor Time Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </SlideIn>

          {/* Footer Links */}
          <div className="mt-24 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <div className="opacity-80">© 2026 Leaderra Inc.</div>
            <div className="flex gap-6 mt-4 md:mt-0 font-medium">
              <a href="#" className="hover:text-slate-900 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-slate-900 transition-colors">
                Terms
              </a>
              <a
                href="mailto:hello@leaderra.com"
                className="hover:text-slate-900 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
