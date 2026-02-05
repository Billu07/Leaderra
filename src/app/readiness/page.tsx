"use client";

import { useState } from "react";
import { CheckCircle2, ClipboardList } from "lucide-react";
import Link from "next/link";

export default function ReadinessPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main className="pt-40 pb-20 px-6 text-center">
        <div className="max-w-md mx-auto">
          <CheckCircle2 className="w-20 h-20 text-brand-green mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-brand-navy">
            Assessment Complete
          </h1>
          <p className="mt-4 text-gray-500">
            Thank you. This context helps us prepare a much more valuable
            discussion for our upcoming meeting.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block bg-brand-navy text-white px-8 py-3 rounded-full font-bold"
          >
            Back to Website
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 bg-brand-gray/20 min-h-screen px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-brand-blue" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-brand-navy">
                Readiness & Fit Assessment
              </h1>
              <p className="text-sm text-gray-500">
                Estimated time: 30 seconds
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
            {/* 1. Business Stage */}
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
                    className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl hover:bg-brand-blue/5 cursor-pointer transition-colors has-[:checked]:border-brand-blue has-[:checked]:bg-brand-blue/5"
                  >
                    <input
                      type="radio"
                      name="stage"
                      required
                      className="w-4 h-4 accent-brand-blue"
                    />
                    <span className="text-gray-700 font-medium">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 2. Deal Value */}
            <div className="space-y-4">
              <label className="text-lg font-bold text-brand-navy block">
                2. What is the typical value of a closed deal?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Under $1,000",
                  "$1,000–$5,000",
                  "$5,000–$20,000",
                  "$20,000+",
                ].map((val) => (
                  <label
                    key={val}
                    className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl hover:bg-brand-blue/5 cursor-pointer transition-colors has-[:checked]:border-brand-blue"
                  >
                    <input
                      type="radio"
                      name="dealValue"
                      required
                      className="w-4 h-4 accent-brand-blue"
                    />
                    <span className="text-gray-700 font-medium">{val}</span>
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
                className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-brand-blue outline-none bg-brand-gray/30"
              >
                <option value="">Select an option</option>
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
                4. Approx. how many leads do you receive per month?
              </label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {["Under 50", "50–200", "200–1,000", "1,000+"].map((vol) => (
                  <label
                    key={vol}
                    className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-xl hover:border-brand-blue cursor-pointer has-[:checked]:border-brand-blue has-[:checked]:bg-brand-blue/5"
                  >
                    <input
                      type="radio"
                      name="volume"
                      required
                      className="sr-only"
                    />
                    <span className="text-gray-700 font-bold">{vol}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-navy text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue transition-all shadow-lg"
            >
              Complete Assessment
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
