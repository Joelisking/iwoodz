const scope = [
  { number: "01", heading: "Structural Works", body: "Foundations, frames, load-bearing walls, roofing, and all primary structural elements managed by certified engineers." },
  { number: "02", heading: "Roofing & Cladding", body: "Full roof systems and external cladding in timber, composite, or mixed materials — weathertight and beautifully finished." },
  { number: "03", heading: "Fitted Interiors", body: "From kitchens and wardrobes to bespoke media walls, staircases, and storage — every interior element crafted in our workshop." },
  { number: "04", heading: "MEP Services", body: "Mechanical, electrical, and plumbing coordination with trusted specialist subcontractors, fully project-managed by iWoodz." },
  { number: "05", heading: "External Works", body: "Driveways, boundary structures, garden buildings, decking, and landscaping to complete your project from boundary to boundary." },
  { number: "06", heading: "Project Management", body: "A dedicated iWoodz project manager oversees every stage — programme, budget, quality, and communication, all in one place." },
];

export function ConstructionServiceScope() {
  return (
    <section className="bg-cta-panel px-8 md:px-14 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-5 mb-14">
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">02</span>
          <div className="h-px flex-1 bg-ink/12" />
          <span className="text-ink/35 text-[9px] tracking-[0.4em] uppercase">Scope of Works</span>
        </div>

        <h2
          className="font-light italic text-ink leading-tight mb-14"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          One Contract.<br />Everything Included.
        </h2>

        {/* 2-column grid of scope cards — gap-px gives hairline border look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/8">
          {scope.map(({ number, heading, body }) => (
            <div key={number} className="bg-cta-panel p-8">
              <p className="text-gold text-[9px] tracking-[0.5em] uppercase mb-3">{number}</p>
              <div className="h-px w-7 bg-gold/35 mb-5" />
              <h3
                className="font-light italic text-ink mb-3"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.45rem" }}
              >
                {heading}
              </h3>
              <p className="text-ink/55 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
