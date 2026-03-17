const capabilities = [
  { label: "Residential Extensions & Renovations" },
  { label: "New Build Residential Homes" },
  { label: "Commercial & Retail Fit-Outs" },
  { label: "Structural Timber Framing" },
  { label: "Roofing & Cladding Systems" },
  { label: "Bespoke Staircases" },
  { label: "Decking & Outdoor Structures" },
  { label: "Full Project Management" },
];

export function ConstructionsCapabilities() {
  return (
    <section className="bg-cta-panel px-8 md:px-14 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-5 mb-14">
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">02</span>
          <div className="h-px flex-1 bg-ink/12" />
          <span className="text-ink/35 text-[9px] tracking-[0.4em] uppercase">What We Build</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading + capabilities grid */}
          <div>
            <h2
              className="font-light italic text-ink leading-tight mb-10"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              }}
            >
              Every Scale,<br />Every Challenge
            </h2>

            {/* 2-column capability card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink/8">
              {capabilities.map(({ label }, i) => (
                <div key={label} className="bg-cta-panel p-5 flex items-start gap-4">
                  <span className="text-gold text-[9px] tracking-[0.4em] tabular-nums shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink/70 text-sm leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: tall image */}
          <div className="overflow-hidden group">
            <img
              src="/villa%20d_tuger/IMG_2921.JPG"
              alt="Villa D'Tuger wood-clad exterior"
              className="w-full lg:h-[580px] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
