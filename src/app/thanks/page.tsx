"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight, Target } from "lucide-react";

export default function ThanksPage() {
  return (
    <main className="pt-32 pb-20 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-10 h-10 text-brand-green" />
        </div>

        <h1 className="text-4xl font-extrabold text-brand-navy">
          Meeting Confirmed!
        </h1>
        <p className="mt-4 text-gray-500 text-lg">
          Your intro meeting is on the calendar. Check your inbox for the
          invitation.
        </p>

        {/* ONE CLEAR ACTION: The Questionnaire */}
        <div className="mt-12 p-8 bg-brand-navy rounded-[2rem] text-left text-white shadow-2xl">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-brand-blue" /> Final Step: Get Ready
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            To make our conversation as productive as possible, please complete
            this 30-second readiness assessment.
          </p>

          <Link
            href="/readiness"
            className="flex items-center justify-center w-full bg-brand-blue text-white py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all shadow-lg"
          >
            Start Assessment Now <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <Link
          href="/"
          className="mt-12 inline-block text-gray-400 hover:text-brand-navy transition-colors"
        >
          Back to Website
        </Link>
      </div>
    </main>
  );
}
