"use client";

import { useEffect, useState } from "react";

export function ContainerWorksHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="h-[calc(100vh-100px)] w-full overflow-hidden flex flex-col lg:flex-row">
      {/* Left: dark ink panel */}
      <div
        className="w-full lg:w-[42%] bg-ink flex flex-col justify-between px-10 md:px-14 py-14 shrink-0"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateX(0)" : "translateX(-24px)",
          transition: "opacity 0.9s ease-out, transform 0.9s ease-out",
        }}
      >
        {/* Top: breadcrumb */}
        <div className="flex items-center gap-4">
          <div className="h-px w-8 bg-gold/50" />
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">Projects</span>
          <span className="text-white/20 text-[9px]">/</span>
          <span className="text-white/35 text-[9px] tracking-[0.4em] uppercase">Container Works</span>
        </div>

        {/* Center: title block */}
        <div>
          <h1
            className="text-white font-light italic leading-[0.88] mb-6"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3.5rem, 7vw, 7.5rem)",
            }}
          >
            Container<br />Works
          </h1>
          <div className="h-px w-14 bg-gold/45 mb-5" />
          <p className="text-white/40 text-[10px] tracking-[0.35em] uppercase leading-loose">
            Custom Conversions<br />Mobile Units &nbsp;·&nbsp; Pop-Up Spaces
          </p>
        </div>

        {/* Bottom: scroll cue */}
        <div className="flex items-center gap-4">
          <div className="w-px h-10 bg-white/25" />
          <p className="text-white/35 text-[9px] tracking-[0.35em] uppercase">Scroll to Explore</p>
        </div>
      </div>

      {/* Right: photo */}
      <div
        className="flex-1 relative min-h-[50vh] lg:min-h-0"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s ease-out 200ms",
        }}
      >
        <img
          src="/New%20Batch%20/IMG_0879.jpg"
          alt="iWoodz container works exterior"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
