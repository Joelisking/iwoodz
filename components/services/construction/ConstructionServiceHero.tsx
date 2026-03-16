"use client";

import { useEffect, useState } from "react";

export function ConstructionServiceHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="h-[calc(100vh-100px)] w-full bg-navbar flex flex-col items-center justify-center px-8 relative overflow-hidden">
      {/* Subtle background texture — faint large letter */}
      <span
        className="absolute select-none pointer-events-none font-light italic text-white/[0.03] leading-none"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(20rem, 55vw, 60rem)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        aria-hidden
      >
        C
      </span>

      <div
        className="relative z-10 text-center"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1.1s ease-out, transform 1.1s ease-out",
        }}
      >
        {/* Top rule */}
        <div className="flex items-center gap-6 justify-center mb-10">
          <div className="h-px w-16 bg-gold/35" />
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">Why iWoodz / Our Services</span>
          <div className="h-px w-16 bg-gold/35" />
        </div>

        <h1
          className="text-white font-light italic leading-[0.88]"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(4rem, 11vw, 11rem)",
          }}
        >
          Construction<br />Service
        </h1>

        {/* Bottom rule */}
        <div
          className="flex items-center gap-6 justify-center mt-10"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 1s ease-out 350ms",
          }}
        >
          <div className="h-px w-16 bg-gold/35" />
          <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase">
            Residential &nbsp;·&nbsp; Commercial &nbsp;·&nbsp; Structural
          </p>
          <div className="h-px w-16 bg-gold/35" />
        </div>
      </div>

      {/* Scroll cue at bottom */}
      <div
        className="absolute bottom-10 flex flex-col items-center gap-3"
        style={{ opacity: mounted ? 0.3 : 0, transition: "opacity 1.8s ease-out" }}
      >
        <div className="w-px h-10 bg-white/30" />
        <p className="text-white text-[9px] tracking-[0.35em] uppercase">Scroll</p>
      </div>
    </section>
  );
}
