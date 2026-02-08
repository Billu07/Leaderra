"use client";

import { motion } from "framer-motion";

const LOGOS = [
  "Solaris",
  "Velocity",
  "DataFlow",
  "Quantum",
  "Apex",
  "Nebula",
  "Vortex",
  "Horizon",
];

export default function InfiniteMarquee() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        {/* PDF CONTENT RESTORED */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-400 uppercase tracking-widest">
          Trusted by forward-thinking sales teams
        </h3>
      </div>

      <div className="flex relative overflow-hidden mask-gradient">
        <motion.div
          className="flex gap-6 md:gap-10 items-center whitespace-nowrap px-6"
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          style={{ width: "fit-content" }}
        >
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="bg-white px-8 py-4 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center min-w-[200px]"
            >
              <span className="text-2xl font-bold text-brand-navy/80">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>

        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F0F7FF] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F0F7FF] to-transparent z-10" />
      </div>
    </div>
  );
}
