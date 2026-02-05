"use client";

import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 z-50">
      <Link
        href="/book"
        className="block w-full bg-brand-navy text-white text-center py-4 rounded-xl font-bold text-lg active:scale-[0.98] transition-transform"
      >
        Book a meeting
      </Link>
    </div>
  );
}
