const steps = [
  {
    number: "01",
    heading: "Brief & Design",
    body: "We meet to understand your vision, site conditions, and requirements. Our designers produce detailed drawings and material specifications tailored to your project.",
  },
  {
    number: "02",
    heading: "Container Sourcing",
    body: "We source certified, structurally sound containers — new or once-used — in the exact dimensions your project demands. Every unit is inspected before work begins.",
  },
  {
    number: "03",
    heading: "Fabrication & Fit-Out",
    body: "Cutting, cladding, insulation, joinery, glazing, and all MEP services are handled by our skilled craftsmen and trades team.",
  },
  {
    number: "04",
    heading: "Delivery & Handover",
    body: "We coordinate delivery and placement, handle all final connections, and hand over a fully finished, ready-to-use space — on time and to spec.",
  },
];

export function ContainerWorksProcess() {
  return (
    <section className="bg-linen px-8 md:px-14 pb-20">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-5 mb-14">
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">03</span>
          <div className="h-px flex-1 bg-gold/25" />
          <span className="text-ink/35 text-[9px] tracking-[0.4em] uppercase">How It Works</span>
        </div>

        {/* Large heading */}
        <h2
          className="font-light italic text-ink leading-tight mb-16"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          From Brief<br />to Handover
        </h2>

        {/* Steps: horizontal with large decorative numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-ink/8">
          {steps.map(({ number, heading, body }) => (
            <div key={number} className="relative px-0 md:px-8 first:pl-0 last:pr-0 py-8 md:py-0">
              {/* Large decorative number */}
              <p
                className="text-ink/5 font-light absolute -top-4 left-0 md:left-8 md:first:left-0 select-none pointer-events-none leading-none"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "7rem",
                }}
              >
                {number}
              </p>

              <div className="relative">
                <p className="text-gold text-[9px] tracking-[0.5em] uppercase mb-4">{number}</p>
                <div className="h-px w-8 bg-gold/35 mb-5" />
                <h3
                  className="font-light italic text-ink mb-3"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem" }}
                >
                  {heading}
                </h3>
                <p className="text-ink/50 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
