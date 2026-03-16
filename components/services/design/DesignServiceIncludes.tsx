const includes = [
  "In-home or showroom design consultation",
  "Mood boards and material samples",
  "Full 3D visualisation of your space",
  "Detailed technical drawings",
  "Material and finish specification sheets",
  "Itemised quote with no hidden costs",
  "Dedicated designer from brief to sign-off",
];

export function DesignServiceIncludes() {
  return (
    <section className="bg-linen px-8 md:px-14 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-5 mb-14">
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">03</span>
          <div className="h-px flex-1 bg-gold/25" />
          <span className="text-ink/35 text-[9px] tracking-[0.4em] uppercase">What&rsquo;s Included</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: list */}
          <div>
            <h2
              className="font-light italic text-ink leading-tight mb-10"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              }}
            >
              Everything You Need<br />to Design with Confidence
            </h2>

            <ul className="space-y-0 divide-y divide-ink/8">
              {includes.map((item, i) => (
                <li key={item} className="flex items-center gap-5 py-4">
                  <span className="text-gold text-[9px] tracking-[0.4em] tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: image */}
          <div className="overflow-hidden group">
            <img
              src="https://picsum.photos/seed/design-includes/700/900"
              alt="iWoodz design process — replace with real photo"
              className="w-full lg:h-[580px] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
