"use client";

import { motion } from "framer-motion";

interface RevealTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export default function RevealText({
  text,
  delay = 0,
  className = "",
}: RevealTextProps) {
  return (
    <div className={`overflow-hidden inline-block align-bottom ${className}`}>
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.25, 1, 0.5, 1], // The "LeadGenJay" snappy curve
        }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </div>
  );
}
