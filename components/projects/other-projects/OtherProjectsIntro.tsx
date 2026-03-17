const imageStrip = [
  { src: "/Pergola/IMG_4850.JPEG", alt: "Garden pavilion pergola" },
  { src: "/Pergola/RAF_1412.jpg", alt: "Outdoor bar and kitchen" },
  { src: "/Pergola/IMG_2944.JPEG", alt: "Carport pergola structure" },
  { src: "/cabinet/IMG_5347.JPG", alt: "Statement wood furniture" },
];

export function OtherProjectsIntro() {
  return (
    <section className="bg-linen pt-24 pb-0">
      {/* Editorial centered text block */}
      <div className="max-w-2xl mx-auto px-8 text-center mb-16">
        <div className="flex items-center gap-5 justify-center mb-8">
          <div className="h-px w-10 bg-gold/40" />
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">01 — Beyond the Ordinary</span>
          <div className="h-px w-10 bg-gold/40" />
        </div>

        <h2
          className="font-light italic leading-tight text-ink mb-6"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
          }}
        >
          If You Can<br />Imagine It
        </h2>

        <p className="text-ink/55 text-sm leading-relaxed mb-4">
          Not every project fits a neat category. Some of our most rewarding
          work has been the briefs that break the mould — a garden pavilion,
          a statement staircase, a fully custom outdoor bar, a hand-built
          children&rsquo;s play structure.
        </p>
        <p className="text-ink/55 text-sm leading-relaxed">
          If you have an idea that doesn&rsquo;t fit elsewhere, bring it to us. Our
          team loves a challenge, and our workshop is equipped to bring almost
          any concept to life in wood, steel, or both.
        </p>
      </div>

      {/* Horizontal image strip — no padding, bleeds to edge */}
      <div className="grid grid-cols-4 gap-px">
        {imageStrip.map(({ src, alt }) => (
          <div key={src} className="overflow-hidden group">
            <img
              src={src}
              alt={alt}
              className="w-full h-52 md:h-72 object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
