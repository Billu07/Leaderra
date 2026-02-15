"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SlideIn from "@/components/ui/SlideIn";

const faqs = [
  {
    question: "How is this different from lead generation or SDR?",
    answer:
      "We don't generate traffic or book meetings. We control readiness before meetings happen.",
  },
  {
    question: "Will this reduce the number of meetings?",
    answer:
      "Yes — intentionally. The goal is fewer unproductive calls and stronger progression.",
  },
  {
    question: "Do you replace our advisors?",
    answer:
      "No. We protect their time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 bg-white relative">
      <div className="max-w-3xl mx-auto">
        <SlideIn className="text-center mb-16">
          <span className="text-brand-blue font-bold tracking-widest text-sm mb-4 block uppercase">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy">
            FAQ
          </h2>
        </SlideIn>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <SlideIn key={index} delay={index * 0.1}>
              <div
                className={`rounded-2xl transition-all duration-300 ${
                  openIndex === index
                    ? "bg-slate-50 ring-1 ring-brand-blue/10 shadow-sm"
                    : "bg-white hover:bg-slate-50/50"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span className={`font-bold text-lg md:text-xl pr-8 leading-tight transition-colors ${
                    openIndex === index ? "text-brand-blue" : "text-brand-navy"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors
                    ${openIndex === index ? "bg-brand-blue text-white" : "bg-slate-100 text-slate-400"}
                  `}>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 md:px-8 pb-8 text-slate-600 leading-relaxed text-lg font-medium border-t border-slate-100/50 pt-4 mt-2">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
