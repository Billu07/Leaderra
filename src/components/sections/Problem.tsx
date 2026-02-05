export default function Problem() {
  const painPoints = [
    "Sales educates instead of closing",
    "Discovery happens inside the call",
    "Decision context is missing",
    "Timelines are unclear",
    "Meetings waste time and energy",
  ];

  return (
    <section className="py-24 bg-brand-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm">
              The Problem
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Most inbound leads reach sales{" "}
              <span className="text-gray-400 text-3xl md:text-4xl block mt-2">
                too early.
              </span>
            </h3>
            <p className="mt-8 text-xl text-gray-400 leading-relaxed">
              This isn't a sales skill issue. It's a readiness and timing issue
              that drains your team's energy.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
            <p className="text-xl font-semibold mb-8 text-brand-blue">
              As a result:
            </p>
            <ul className="space-y-6">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                  <span className="text-lg md:text-xl text-gray-200">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
