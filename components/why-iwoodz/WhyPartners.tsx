const partners = [
  "Premium Hardwoods",
  "Quality Hardware",
  "Trusted Fabricators",
  "Certified Installers",
  "Local Craftsmen",
];

export function WhyPartners() {
  return (
    <section className="py-16 px-8 mb-6" style={{ backgroundColor: "#E5E2DA" }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.35em] uppercase text-ink/40 text-center mb-3">
          Materials &amp; Partners
        </p>
        <h2
          className="text-center font-light mb-10"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2rem, 3vw, 2.8rem)",
          }}
        >
          Trusted Quality Throughout
        </h2>

        <div className="flex gap-3 overflow-x-auto pb-2 justify-center flex-wrap">
          {partners.map((name) => (
            <div
              key={name}
              className="bg-white flex items-center justify-center px-8 py-6 min-w-[180px] shrink-0"
            >
              <p className="text-xs tracking-[0.15em] uppercase text-ink/50 text-center">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
