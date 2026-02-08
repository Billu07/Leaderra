import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

// Components
import RevealText from "@/components/ui/RevealText";
import SlideIn from "@/components/ui/SlideIn";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import Solution from "@/components/sections/Solution";
import Comparison from "@/components/sections/Comparison";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-gradient-to-b from-[#F0F7FF] via-white to-[#F0F7FF]">
      {/* 1. HERO SECTION - Premium & Soothing */}
      <section className="relative pt-36 lg:pt-48 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* The Hook (PDF Page 1) */}
          <SlideIn className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-blue-100 rounded-full text-sm font-semibold shadow-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              If your sales team spends too much time explaining it...
            </div>
          </SlideIn>

          {/* Headline - Clean & Big (But not oversized) */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-navy tracking-tight leading-[1.1] mb-8 uppercase">
            <div className="flex flex-col items-center gap-1">
              <RevealText text="AN INBOUND SDR" />
              <div className="flex flex-wrap justify-center gap-x-3 text-brand-blue">
                <RevealText text="READINESS LAYER" delay={0.1} />
              </div>
            </div>
          </h1>

          {/* Subhead (PDF Page 1) */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Leaderra prepares inbound leads for focused, relevant sales
            conversations — at the right time. We ensure only prospects who are
            truly{" "}
            <span className="text-brand-navy font-bold bg-blue-50 px-1 rounded">
              ready
            </span>{" "}
            reach your sales team.
          </p>

          {/* CTA */}
          <SlideIn delay={0.3} className="mt-12">
            <Link
              href="/book"
              className="inline-flex items-center gap-3 bg-brand-blue text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Book an intro meeting <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
              No sales fluff. Strategy first.
            </p>
          </SlideIn>
        </div>
      </section>

      {/* 2. SOCIAL PROOF (Marquee) */}
      <InfiniteMarquee />

      {/* 3. THE PROBLEM (White Card on Light BG) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded-full font-bold text-xs mb-5 border border-red-100 uppercase tracking-wider">
              The Problem
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight mb-6">
              In most companies, inbound leads reach sales{" "}
              <span className="text-red-500 decoration-4 underline decoration-red-200">
                too early.
              </span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Sales calls start from basic discovery. Reps educate instead of
              progressing.
              <br />
              <br />
              <span className="text-brand-navy font-bold">
                This isn't a sales skill issue. It's a readiness issue.
              </span>
            </p>
          </div>

          {/* Result Card */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
            <p className="text-sm font-bold text-brand-navy mb-6 uppercase tracking-wider">
              As a result:
            </p>
            <ul className="space-y-4">
              {[
                "Sales calls start from basic discovery",
                "Sales reps educate instead of progressing",
                "Buyer intent and timing are unclear",
                "Meetings don't move forward",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 bg-[#F8FAFC] rounded-lg border border-gray-100 text-sm md:text-base font-medium text-gray-700"
                >
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0 font-bold text-[10px]">
                    ✕
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. THE SOLUTION (Sticky Deck) */}
      <Solution />

      {/* 5. COMPARISON & INDUSTRIES (New Premium Design) */}
      <Comparison />

      {/* 6. FAQ (Clean Bars) */}
      <FAQ />

      {/* 7. FOOTER CTA (PDF Page 3) */}
      <section className="py-24 px-6 bg-[#F0F7FF] text-center border-t border-blue-50">
        <div className="max-w-4xl mx-auto">
          {/* PDF Copy */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-brand-navy leading-tight mb-8 tracking-tight">
            Fewer wasted conversations. <br />
            <span className="text-brand-blue">
              More decisions moving forward.
            </span>
          </h2>

          {/* Trust Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="flex items-center gap-2 text-gray-600 font-bold bg-white px-5 py-2 rounded-full shadow-sm border border-blue-50 text-sm">
              <Check className="w-4 h-4 text-brand-green" /> Setup is
              lightweight
            </div>
            <div className="flex items-center gap-2 text-gray-600 font-bold bg-white px-5 py-2 rounded-full shadow-sm border border-blue-50 text-sm">
              <Check className="w-4 h-4 text-brand-green" /> Ongoing readiness
              layer
            </div>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1"
          >
            Book an intro meeting
          </Link>

          {/* Footer Links (PDF Page 3) */}
          <div className="mt-20 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="flex items-center gap-2 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
              <Image
                src="/logo.png"
                width={100}
                height={30}
                alt="Leaderra"
                className="object-contain"
              />
            </div>
            <div className="flex gap-8 mt-4 md:mt-0 font-bold">
              <span>Address Placeholder</span>
              <span>LinkedIn</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
