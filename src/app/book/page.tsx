"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Loader2, Check, ShieldCheck } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";

export default function BookPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize Cal.com Embed
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#185CFF" } }, // Electric Blue Brand
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      // LISTEN FOR BOOKING SUCCESS -> Redirect to Thanks
      cal("on", {
        action: "bookingSuccessful",
        callback: (e) => {
          router.push("/thanks");
        },
      });
    })();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Simulate API Save
    console.log("Lead Saved:", data);

    // Short delay for UX, then OPEN MODAL
    setTimeout(async () => {
      const cal = await getCalApi();
      cal("modal", {
        calLink: "leaderracom/intro",
        config: {
          // Pre-fill user data so they don't type it twice
          name: `${data.firstName} ${data.lastName}`,
          email: data.email as string,
          notes: `Company: ${data.company}, Website: ${data.website}`,
          guests: [],
        },
      });
      setIsSubmitting(false); // Reset button state
    }, 800);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F0F7FF] via-white to-[#F0F7FF] pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-brand-blue transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Premium Context */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy leading-[1.1] tracking-tight">
              Let's build your <br />
              <span className="text-brand-blue">readiness layer.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We collect a few details to ensure we are a good fit before we
              open the calendar.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "No 'discovery' fluff — we start with strategy",
                "Review your current inbound leakage",
                "Determine if you need the Readiness Layer",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl border border-blue-50 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[3px]" />
                  </div>
                  <p className="text-brand-navy font-bold text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-[#EBF5FF] rounded-2xl border border-blue-100 flex gap-4">
              <ShieldCheck className="w-10 h-10 text-brand-blue shrink-0" />
              <div>
                <p className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-1">
                  What Happens Next
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  After you click schedule, our calendar will pop up
                  immediately. No page reloads.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: The Premium Form */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-white/50 relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    required
                    type="text"
                    placeholder="Jane"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    required
                    type="text"
                    placeholder="Doe"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                  Work Email
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="jane@company.com"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                  Company
                </label>
                <input
                  name="company"
                  required
                  type="text"
                  placeholder="Acme Inc."
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                    Website
                  </label>
                  <input
                    name="website"
                    type="url"
                    placeholder="https://"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    required
                    type="tel"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
                  Sales Process Status
                </label>
                <select
                  name="hasPipeline"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue outline-none transition-all cursor-pointer font-medium"
                >
                  <option value="">Select an option...</option>
                  <option value="yes">Yes, we have a defined process</option>
                  <option value="no">No, we are building one</option>
                </select>
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-brand-blue text-white py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all mt-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Opening Calendar...
                  </>
                ) : (
                  "Select a Time"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
