"use client";

import { useState } from "react";
import { CheckCircle2, ClipboardList, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ReadinessPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main className="pt-40 pb-20 px-6 text-center min-h-screen bg-[#F0F7FF] flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white p-12 rounded-[2.5rem] shadow-xl border border-white/50">
          <CheckCircle2 className="w-20 h-20 text-brand-green mx-auto mb-6" />
          <h1 className="text-3xl font-extrabold text-brand-navy">All Set!</h1>
          <p className="mt-4 text-gray-500 font-medium">
            Thank you. We have everything we need to make our upcoming meeting a
            success.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block bg-brand-blue text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
          >
            Back to Website
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-[#F0F7FF] via-white to-[#F0F7FF] min-h-screen px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-brand-blue transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Cancel
        </Link>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-blue-900/5 border border-white/60">
          <div className="flex items-center gap-5 mb-10 border-b border-gray-100 pb-8">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
              <ClipboardList className="w-7 h-7 text-brand-blue" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-brand-navy tracking-tight">
                Readiness Assessment
              </h1>
              <p className="text-gray-500 font-medium mt-1">
                Help us prepare for your strategy session.
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-10"
          >
            {/* 1. Stage */}
            <div className="space-y-4">
              <label className="text-lg font-bold text-brand-navy block">
                1. What stage best describes your business?
              </label>
              <div className="grid gap-3">
                {[
                  "Research / Idea stage",
                  "Early stage – live offer",
                  "Growing – regular leads",
                  "Established – steady lead flow",
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-brand-blue hover:bg-blue-50/50 cursor-pointer transition-all has-[:checked]:border-brand-blue has-[:checked]:bg-blue-50 has-[:checked]:shadow-sm"
                  >
                    <input
                      type="radio"
                      name="stage"
                      required
                      className="w-5 h-5 accent-brand-blue"
                    />
                    <span className="text-gray-700 font-bold">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 2. Deal Value */}
            <div className="space-y-4">
              <label className="text-lg font-bold text-brand-navy block">
                2. What is the typical value of a closed deal?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Under $1,000",
                  "$1,000–$5,000",
                  "$5,000–$20,000",
                  "$20,000+",
                ].map((val) => (
                  <label
                    key={val}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-brand-blue hover:bg-blue-50/50 cursor-pointer transition-all has-[:checked]:border-brand-blue has-[:checked]:bg-blue-50"
                  >
                    <input
                      type="radio"
                      name="dealValue"
                      required
                      className="w-5 h-5 accent-brand-blue"
                    />
                    <span className="text-gray-700 font-bold">{val}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 3. Sales Handling */}
            <div className="space-y-4">
              <label className="text-lg font-bold text-brand-navy block">
                3. Who currently handles sales?
              </label>
              <select
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-blue outline-none bg-white font-medium cursor-pointer"
              >
                <option value="">Select an option...</option>
                <option>No formal sales process yet</option>
                <option>Founder (solo)</option>
                <option>Small sales team (2–3)</option>
                <option>Sales team (4–10)</option>
                <option>Larger sales organization</option>
              </select>
            </div>

            {/* 4. Lead Volume */}
            <div className="space-y-4">
              <label className="text-lg font-bold text-brand-navy block">
                4. Lead volume per month?
              </label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {["< 50", "50–200", "200–1k", "1k+"].map((vol) => (
                  <label
                    key={vol}
                    className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-xl hover:border-brand-blue cursor-pointer has-[:checked]:border-brand-blue has-[:checked]:bg-blue-50 has-[:checked]:text-brand-blue transition-all"
                  >
                    <input
                      type="radio"
                      name="volume"
                      required
                      className="sr-only"
                    />
                    <span className="text-gray-700 font-extrabold text-lg">
                      {vol}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-navy text-white py-5 rounded-xl font-bold text-xl hover:bg-brand-blue transition-all shadow-xl hover:-translate-y-1"
            >
              Complete Assessment
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
