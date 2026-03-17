const standards = [
  { label: "Dedicated project coordinator assigned to every job" },
  { label: "Full floor and surface protection throughout" },
  { label: "Background-checked, trained fitting specialists" },
  { label: "Delivery managed in-house, never outsourced" },
  { label: "Same-day snag resolution policy" },
  { label: "Site left clean and clear upon completion" },
];

export function InstallationServiceStandards() {
  return (
    <section className="bg-cta-panel px-8 md:px-14 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-5 mb-14">
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">03</span>
          <div className="h-px flex-1 bg-ink/12" />
          <span className="text-ink/35 text-[9px] tracking-[0.4em] uppercase">Our Standards</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: image */}
          <div className="overflow-hidden group order-2 lg:order-1">
            <img
              src="/Kitchen/RAF_1434.jpg"
              alt="iWoodz precision-fitted kitchen"
              className="w-full lg:h-[540px] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
            />
          </div>

          {/* Right: standards list */}
          <div className="order-1 lg:order-2">
            <h2
              className="font-light italic text-ink leading-tight mb-10"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              }}
            >
              The iWoodz<br />Installation Promise
            </h2>

            <ul className="space-y-0 divide-y divide-ink/8">
              {standards.map((item, i) => (
                <li key={item.label} className="flex items-start gap-5 py-4">
                  <span className="text-gold text-[9px] tracking-[0.4em] tabular-nums shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink/70 text-sm leading-snug">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
