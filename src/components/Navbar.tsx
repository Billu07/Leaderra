"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 h-[80px] flex items-center bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-300 px-6`}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="relative block">
          <Image
            src="/logo.png"
            alt="Leaderra Logo"
            width={140}
            height={40}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#how-it-works"
            className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#for-advisors"
            className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            For Advisors
          </Link>
        </nav>

        <div className="flex items-center">
          <Link
            href="/book"
            className="inline-flex items-center justify-center bg-[#007BFF] text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-[#0056CC] transition-colors duration-150 ease-in-out shadow-md"
          >
            Book Audit
          </Link>
        </div>
      </div>
    </header>
  );
}
