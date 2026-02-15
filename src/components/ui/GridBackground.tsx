"use client";

export default function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Radial Gradient Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#05132e 1px, transparent 1px), linear-gradient(90deg, #05132e 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Floating Orbs for depth */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px]" />
    </div>
  );
}
