import Link from "next/link";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Process from "@/components/sections/Process";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="pt-32 lg:pt-52 pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-brand-navy tracking-tight leading-[1.05]">
            Sales meetings should start <br className="hidden md:block" />
            from <span className="text-brand-blue">readiness</span>, not
            guesswork.
          </h1>
          <p className="mt-10 text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Leaderra prepares inbound leads for focused, decision-oriented sales
            conversations.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Updated to Link */}
            <Link
              href="/book"
              className="w-full sm:w-auto bg-brand-navy text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-brand-blue transition-all shadow-xl text-center"
            >
              Book an intro meeting
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <Problem />

      {/* 3. SOLUTION & DUAL-SIDE READINESS */}
      <Solution />

      {/* 4. PROCESS & BENEFITS */}
      <Process />

      {/* 5. FINAL CALL TO ACTION */}
      <section className="py-24 px-6 text-center bg-brand-navy text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Prepare buyers to decide. <br />
            Give sales clearer closing signals.
          </h2>
          {/* Updated to Link */}
          <Link
            href="/book"
            className="mt-10 inline-block bg-brand-blue text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-brand-navy transition-all shadow-xl"
          >
            Close faster, Book an intro meeting
          </Link>
        </div>
      </section>
    </main>
  );
}
