"use client";

import { useEffect, useState } from "react";

export function ConstructionsHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[calc(100vh-100px)] w-full overflow-hidden flex items-center justify-center">
      {/* Background image — replace with real construction photo */}
      <img
        src="https://picsum.photos/seed/constructions-hero/1920/1080"
        alt="iWoodz constructions — replace with real photo"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/58" />

      {/* Centered title block */}
      <div
        className="relative z-10 text-center px-8 max-w-5xl w-full"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease-out, transform 1s ease-out",
        }}
      >
        {/* Top ruled line + label */}
        <div className="flex items-center gap-6 justify-center mb-10">
          <div className="h-px flex-1 max-w-24 bg-white/20" />
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">Projects / 04</span>
          <div className="h-px flex-1 max-w-24 bg-white/20" />
        </div>

        <h1
          className="text-white font-light italic leading-[0.88]"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(4.5rem, 12vw, 12rem)",
          }}
        >
          Constructions
        </h1>

        {/* Bottom ruled line + subtitle */}
        <div
          className="flex items-center gap-6 justify-center mt-10"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 1s ease-out 350ms",
          }}
        >
          <div className="h-px flex-1 max-w-24 bg-white/20" />
          <p className="text-white/45 text-[10px] tracking-[0.4em] uppercase">
            Residential &nbsp;·&nbsp; Commercial &nbsp;·&nbsp; Structural
          </p>
          <div className="h-px flex-1 max-w-24 bg-white/20" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute right-8 bottom-10 flex flex-col items-center gap-3"
        style={{ opacity: mounted ? 0.35 : 0, transition: "opacity 1.8s ease-out" }}
      >
        <p className="text-white text-[9px] tracking-[0.35em] uppercase" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </p>
        <div className="w-px h-10 bg-white/50" />
      </div>
    </section>
  );
}
