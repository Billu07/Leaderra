"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Loader2 } from "lucide-react";

export default function BookPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Capture the data from the form
    const formData = new FormData(e.currentTarget);
    const leadData = Object.fromEntries(formData.entries());

    // 2. Log the data (In production, this is where you'd call your API)
    console.log("New Lead Captured:", leadData);

    // 3. FLAWLESS REDIRECT: Go straight to the calendar
    setTimeout(() => {
      window.location.href = "https://cal.com/leaderracom/intro";
    }, 1200);
  };

  return (
    <main className="pt-32 pb-20 bg-brand-gray/20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Navigation / Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-brand-blue transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Context & Reassurance */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight">
              Before the <br /> Intro Meeting
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-md">
              We collect a few details to understand your basic fit and sales
              context, ensuring our meeting is valuable for both sides.
            </p>

            <div className="mt-12 space-y-6">
              {[
                "Understand basic fit and sales context",
                "Clarify expectations for the conversation",
                "Prepare a focused, decision-oriented discussion",
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  </div>
                  <p className="text-brand-navy font-semibold">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full -mr-16 -mt-16" />
              <p className="text-xs font-black text-brand-blue uppercase tracking-[0.2em] mb-3 relative">
                What Happens Next
              </p>
              <p className="text-gray-500 text-sm leading-relaxed relative">
                Immediately after submitting this form, you’ll receive a
                calendar invitation to pick a time that works for your team.
              </p>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-brand-navy/5 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                    First Name *
                  </label>
                  <input
                    name="firstName"
                    required
                    type="text"
                    placeholder="Jane"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-brand-gray/30 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                    Last Name *
                  </label>
                  <input
                    name="lastName"
                    required
                    type="text"
                    placeholder="Doe"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-brand-gray/30 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                  Business Email *
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="jane@company.com"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-brand-gray/30 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                  Company Name *
                </label>
                <input
                  name="company"
                  required
                  type="text"
                  placeholder="Acme Corp"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-brand-gray/30 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                    Website
                  </label>
                  <input
                    name="website"
                    type="url"
                    placeholder="https://"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-brand-gray/30 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                    Phone *
                  </label>
                  <input
                    name="phone"
                    required
                    type="tel"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-brand-gray/30 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-navy ml-1">
                  Do you currently have a sales pipeline process?
                </label>
                <select
                  name="hasPipeline"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-brand-gray/30 focus:bg-white focus:border-brand-blue outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select an option...</option>
                  <option value="yes">Yes, we have a defined process</option>
                  <option value="no">No, we are building one</option>
                </select>
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-brand-navy text-white py-5 rounded-full font-bold text-lg hover:bg-brand-blue transition-all mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-xl shadow-brand-navy/10"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Saving Lead Details...
                  </>
                ) : (
                  "Schedule Intro Meeting"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
