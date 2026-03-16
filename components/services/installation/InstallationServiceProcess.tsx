const steps = [
  {
    number: "01",
    heading: "Pre-Installation Survey",
    body: "Before delivery, our team visits your site to measure, assess access, and confirm all services are ready. Nothing is left to chance.",
  },
  {
    number: "02",
    heading: "Delivery & Protection",
    body: "All pieces arrive wrapped and protected. We lay floor protection throughout and take every precaution to keep your home in pristine condition.",
  },
  {
    number: "03",
    heading: "Expert Fitting",
    body: "Our fitters are specialists in iWoodz pieces — they work to our exact manufacturing tolerances and will not leave until every detail is perfect.",
  },
  {
    number: "04",
    heading: "Snagging & Handover",
    body: "We conduct a thorough snagging check with you before signing off. Any issues are resolved immediately. Your space is clean, complete, and ready to enjoy.",
  },
];

export function InstallationServiceProcess() {
  return (
    <section className="bg-ink px-8 md:px-14 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-5 mb-14">
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">02</span>
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-white/25 text-[9px] tracking-[0.4em] uppercase">The Process</span>
        </div>

        <h2
          className="font-light italic text-white leading-tight mb-16"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          Every Step,<br />Handled with Care
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {steps.map(({ number, heading, body }) => (
            <div key={number} className="bg-ink p-10">
              <p className="text-gold text-[9px] tracking-[0.5em] uppercase mb-4">{number}</p>
              <div className="h-px w-8 bg-gold/35 mb-6" />
              <h3
                className="font-light italic text-white mb-3"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem" }}
              >
                {heading}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
