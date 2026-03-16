"use client";

import { useEffect, useState } from "react";

export function DesignServiceHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[calc(100vh-100px)] w-full overflow-hidden">
      {/* Full-bleed image */}
      <img
        src="https://picsum.photos/seed/design-service-hero/1920/1080"
        alt="iWoodz design service — replace with real photo"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay — left half only */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[52%] bg-ink/82" />

      {/* Text — centered vertically inside left half */}
      <div
        className="absolute inset-y-0 left-0 w-full lg:w-[52%] flex flex-col justify-center px-10 md:px-16"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(18px)",
          transition: "opacity 1s ease-out, transform 1s ease-out",
        }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-8 bg-gold/50" />
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">Why iWoodz</span>
          <span className="text-white/20 text-[9px]">/</span>
          <span className="text-white/35 text-[9px] tracking-[0.4em] uppercase">Our Services</span>
        </div>

        <h1
          className="text-white font-light italic leading-[0.88] mb-6"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3.5rem, 7vw, 7rem)",
          }}
        >
          Design<br />Service
        </h1>

        <div className="h-px w-14 bg-gold/40 mb-6" />

        <p
          className="text-white/40 text-[10px] tracking-[0.35em] uppercase"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 1s ease-out 300ms",
          }}
        >
          Consultation &nbsp;·&nbsp; Concept &nbsp;·&nbsp; Design &nbsp;·&nbsp; Approval
        </p>
      </div>
    </section>
  );
}
