"use client";

import { useEffect, useState } from "react";

export function OtherProjectsHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[calc(100vh-100px)] w-full overflow-hidden">
      {/* Background image — replace with real bespoke project photo */}
      <img
        src="https://picsum.photos/seed/other-projects-hero/1920/1080"
        alt="iWoodz bespoke projects — replace with real photo"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" />

      {/* "Other" — top left */}
      <div
        className="absolute top-8 left-8 md:top-14 md:left-14 z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateX(0)" : "translateX(-20px)",
          transition: "opacity 0.9s ease-out, transform 0.9s ease-out",
        }}
      >
        <h1
          className="text-white font-light italic leading-none"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(4rem, 14vw, 13rem)",
          }}
        >
          Other
        </h1>
      </div>

      {/* Center connecting spine */}
      <div
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
        style={{ opacity: mounted ? 1 : 0, transition: "opacity 1.4s ease-out 400ms" }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="h-12 w-px bg-gold/40" />
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">05</span>
          <div className="h-12 w-px bg-gold/40" />
        </div>
      </div>

      {/* "Projects" — bottom right */}
      <div
        className="absolute bottom-8 right-8 md:bottom-14 md:right-14 z-10 text-right"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateX(0)" : "translateX(20px)",
          transition: "opacity 0.9s ease-out 200ms, transform 0.9s ease-out 200ms",
        }}
      >
        <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase mb-3">
          Custom Commissions &nbsp;·&nbsp; Outdoor Structures &nbsp;·&nbsp; Bespoke Furniture
        </p>
        <h1
          className="text-white font-light italic leading-none"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(4rem, 14vw, 13rem)",
          }}
        >
          Projects
        </h1>
      </div>
    </section>
  );
}
