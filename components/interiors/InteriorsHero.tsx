"use client";

import { useEffect, useState } from "react";

export function InteriorsHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[calc(100vh-100px)] w-full overflow-hidden">
      {/* Background image — replace with real interiors photo */}
      <img
        src="https://picsum.photos/seed/interiors-hero/1920/1080"
        alt="iWoodz Creation bespoke interiors — replace with real photo"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/25 to-transparent" />

      {/* Bottom text block */}
      <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-14">
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 1s ease-out, transform 1s ease-out",
          }}
        >
          {/* Category pills */}
          <div className="flex items-center gap-5 mb-5">
            <div className="h-px w-10 bg-gold/60" />
            <span className="text-gold text-[9px] tracking-[0.5em] uppercase">01</span>
            <span className="text-white/25 text-[9px]">·</span>
            <span className="text-gold text-[9px] tracking-[0.5em] uppercase">02</span>
            <span className="text-white/25 text-[9px]">·</span>
            <span className="text-gold text-[9px] tracking-[0.5em] uppercase">03</span>
          </div>

          <h1
            className="text-white font-light italic leading-[0.9]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(4.5rem, 13vw, 12rem)",
            }}
          >
            Interiors
          </h1>

          <p
            className="text-white/45 text-[10px] tracking-[0.4em] uppercase mt-5"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 1s ease-out 300ms, transform 1s ease-out 300ms",
            }}
          >
            Kitchens &nbsp;·&nbsp; Living Spaces &nbsp;·&nbsp; Wardrobes &amp; Storage
          </p>
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
