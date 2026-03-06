"use client";

import { useEffect, useState } from "react";

export function ShowroomHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image — replace src with real showroom photo */}
      <img
        src="https://picsum.photos/seed/showroom-hero/1920/1080"
        alt="iWoodz Creation Showroom — replace with real showroom photo"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Layered gradient: heavy at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />

      {/* Bottom-left text block */}
      <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-14">
        <div
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-10 bg-gold/70" />
            <p className="text-gold text-[10px] tracking-[0.45em] uppercase">
              Accra, Ghana
            </p>
          </div>

          <h1
            className="text-white font-light leading-[0.9] tracking-tight italic"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(4rem, 12vw, 11rem)",
            }}
          >
            Showroom
          </h1>

          <p
            className="text-white/50 text-xs tracking-[0.3em] uppercase mt-5"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 1s ease-out 300ms, transform 1s ease-out 300ms",
            }}
          >
            Experience bespoke craftsmanship in person
          </p>
        </div>
      </div>

      {/* Scroll indicator — right edge */}
      <div
        className="absolute right-8 bottom-10 flex flex-col items-center gap-3"
        style={{
          opacity: mounted ? 0.4 : 0,
          transition: "opacity 1.8s ease-out",
        }}
      >
        <p
          className="text-white text-[9px] tracking-[0.35em] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </p>
        <div className="w-px h-10 bg-white/50" />
      </div>
    </section>
  );
}
