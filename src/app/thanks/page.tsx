"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Target, Calendar } from "lucide-react";

export default function ThanksPage() {
  return (
    <main className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-[#F0F7FF] via-white to-[#F0F7FF] flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        {/* Animated Success Check */}
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-100 border border-green-50">
          <CheckCircle2 className="w-12 h-12 text-brand-green" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
          Booking Confirmed!
        </h1>
        <p className="mt-4 text-gray-600 text-lg font-medium">
          We look forward to speaking with you.
        </p>

        {/* The "Action" Card */}
        <div className="mt-12 p-10 bg-white rounded-[2rem] text-left shadow-2xl shadow-blue-900/5 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl -mr-10 -mt-10" />

          <h2 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-brand-blue" /> Final Step: Get Ready
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            To make our conversation as productive as possible, please complete
            this 30-second readiness assessment.
          </p>

          <Link
            href="/readiness"
            className="flex items-center justify-center w-full bg-brand-navy text-white py-5 rounded-xl font-bold text-lg hover:bg-brand-blue transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
          >
            Start Assessment Now{" "}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="mt-12 flex justify-center gap-6 text-sm font-bold text-gray-400">
          <Link href="/" className="hover:text-brand-navy transition-colors">
            Back to Home
          </Link>
          <span>•</span>
          <Link
            href="https://cal.com/leaderracom/intro"
            target="_blank"
            className="hover:text-brand-navy transition-colors flex items-center gap-1"
          >
            <Calendar className="w-4 h-4" /> Open Calendar
          </Link>
        </div>
      </div>
    </main>
  );
}
