"use client";

export default function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Subtle Blue Glow in the Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[100px]" />
      
      {/* Vignette / Fade edges to blend with section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
    </div>
  );
}
