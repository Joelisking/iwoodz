const projects = [
  {
    seed: "container-proj-1",
    title: "Garden Studio",
    location: "East Legon, Accra",
    description: "A 20ft container transformed into a private garden studio — timber cladding, full glazing, and bespoke fitted joinery.",
  },
  {
    seed: "container-proj-2",
    title: "Pop-Up Retail Unit",
    location: "Osu, Accra",
    description: "Custom retail space with folding serving hatch, brand graphics, and solar-ready roof integration.",
  },
  {
    seed: "container-proj-3",
    title: "Mobile Office",
    location: "Airport Residential",
    description: "Twin 40ft containers joined to create an open-plan office with meeting room, kitchenette, and full AC.",
  },
];

export function ContainerWorksGallery() {
  return (
    <section className="bg-linen px-8 md:px-14 pt-20 pb-20">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-5 mb-14">
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">02</span>
          <div className="h-px flex-1 bg-gold/25" />
          <span className="text-ink/35 text-[9px] tracking-[0.4em] uppercase">Featured Projects</span>
        </div>

        {/* Asymmetric hero image row: wide left + two stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mb-14">
          <div className="lg:col-span-2 overflow-hidden group">
            <img
              src="https://picsum.photos/seed/container-wide/900/600"
              alt="Container project exterior — replace with real photo"
              className="w-full h-64 lg:h-[420px] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="overflow-hidden group flex-1">
              <img
                src="https://picsum.photos/seed/container-stack-1/500/400"
                alt="Container detail — replace with real photo"
                className="w-full h-48 lg:h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="overflow-hidden group flex-1">
              <img
                src="https://picsum.photos/seed/container-stack-2/500/400"
                alt="Container interior — replace with real photo"
                className="w-full h-48 lg:h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>

        {/* Project cards as horizontal bordered list */}
        <div className="divide-y divide-ink/8">
          {projects.map(({ seed, title, location, description }, i) => (
            <div key={seed} className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 items-start">
              <span className="text-gold text-[9px] tracking-[0.5em] uppercase shrink-0 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="shrink-0 w-full md:w-32">
                <img
                  src={`https://picsum.photos/seed/${seed}/300/220`}
                  alt={`${title} — replace with real photo`}
                  className="w-full md:w-32 h-24 object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-[9px] tracking-[0.4em] uppercase text-gold mb-1">{location}</p>
                <h3
                  className="font-light italic leading-tight mb-2"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.4rem" }}
                >
                  {title}
                </h3>
                <p className="text-ink/55 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
