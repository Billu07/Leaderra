"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "py-6 bg-white border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative block">
          {/* Using Next.js Image for LCP optimization */}
          <Image
            src="/logo.png"
            alt="Leaderra Logo"
            width={180}
            height={40}
            priority
            className={`${
              isScrolled ? "h-8" : "h-10"
            } w-auto transition-all duration-500 object-contain`}
          />
        </Link>

        <div className="flex items-center">
          <Link
            href="/book"
            /* 
               PX-10 and PY-3 ensures width is significantly larger than height.
               rounded-full creates the capsule/pill shape. 
            */
            className="inline-flex items-center justify-center bg-brand-navy text-white px-10 py-3 rounded-full font-bold text-sm tracking-tight hover:bg-brand-blue hover:shadow-lg transition-all duration-300 whitespace-nowrap"
          >
            Book a meeting
          </Link>
        </div>
      </div>
    </header>
  );
}
