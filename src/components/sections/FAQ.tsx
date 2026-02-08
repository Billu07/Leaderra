"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// (Keep your existing 'const faqs = [...]' array here, the content is correct)
const faqs = [
  {
    question: "What exactly happens before a meeting is booked?",
    answer:
      "Before any meeting is scheduled, we speak directly with the lead. We assess intent, understanding, urgency, and decision context. A meeting is booked only if there is a clear reason for sales to get involved.",
  },
  {
    question: "Do you book meetings?",
    answer:
      "Yes. But meetings are not the goal — they are the outcome of readiness.",
  },
  {
    question: "How is this different from traditional appointment setting?",
    answer:
      "Traditional appointment setting optimizes for volume. Leaderra optimizes whether a sales conversation should happen at all.",
  },
  {
    question: "Do you optimize or change our marketing funnel?",
    answer:
      "No. Our role starts after a lead is generated. We validate whether your funnel produces ready leads by testing them in real conversations.",
  },
  {
    question: "We already have SDRs. Why would we need Leaderra?",
    answer:
      "Internal SDRs are often measured by activity and output. Leaderra operates as an external, objective readiness layer with no incentive to push meetings forward unless they are truly ready.",
  },
  {
    question: "What happens to leads that aren't ready?",
    answer:
      "They are paused and not passed to sales. This prevents wasted conversations and protects sales time.",
  },
  {
    question: "Will this reduce the number of meetings on our calendar?",
    answer:
      "In most cases, yes — intentionally. The goal is fewer meetings that actually move forward.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "No. We don't guarantee revenue, deal size, or close rates. We commit to disciplined qualification and protecting sales time.",
  },
  {
    question: "Who is this service NOT a good fit for?",
    answer:
      "Companies without inbound leads, low-ticket high-volume sales models, or teams looking to maximize meeting volume at any cost.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
          Still got questions? We have answers.
        </p>
        <h2 className="text-5xl font-extrabold text-brand-navy mb-16 text-center tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              /* The "Separated Bar" Style */
              className={`bg-white rounded-xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-brand-blue shadow-lg ring-1 ring-brand-blue/20"
                  : "border-gray-200 shadow-sm hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-brand-navy text-lg">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-blue shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
