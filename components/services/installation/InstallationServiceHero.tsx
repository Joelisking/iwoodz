"use client";

import { useEffect, useState } from "react";

export function InstallationServiceHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[calc(100vh-100px)] w-full overflow-hidden">
      {/* Full-bleed image */}
      <img
        src="/New%20Batch%20/IMG_0870.jpg"
        alt="iWoodz precision installation finish"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient flows top-left to bottom-right — opposite of Interiors */}
      <div className="absolute inset-0 bg-linear-to-tl from-ink/88 via-ink/25 to-transparent" />

      {/* Text — bottom RIGHT */}
      <div className="absolute bottom-0 right-0 px-8 md:px-16 pb-14 text-right">
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 1s ease-out, transform 1s ease-out",
          }}
        >
          <p
            className="text-white/40 text-[10px] tracking-[0.4em] uppercase mb-5"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease-out 300ms",
            }}
          >
            Precision &nbsp;·&nbsp; Care &nbsp;·&nbsp; Finish
          </p>

          <h1
            className="text-white font-light italic leading-[0.88]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(4rem, 12vw, 11rem)",
            }}
          >
            Installation<br />Service
          </h1>

          <div className="flex items-center gap-5 justify-end mt-6">
            <div className="h-px w-10 bg-gold/60" />
            <span className="text-gold text-[9px] tracking-[0.5em] uppercase">Why iWoodz / Our Services</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator — left side for contrast */}
      <div
        className="absolute left-8 bottom-10 flex flex-col items-center gap-3"
        style={{ opacity: mounted ? 0.35 : 0, transition: "opacity 1.8s ease-out" }}
      >
        <div className="w-px h-10 bg-white/50" />
        <p className="text-white text-[9px] tracking-[0.35em] uppercase" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </p>
      </div>
    </section>
  );
}
