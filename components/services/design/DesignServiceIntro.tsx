export function DesignServiceIntro() {
  return (
    <section className="bg-linen pt-24 pb-0">
      {/* Centered editorial block */}
      <div className="max-w-2xl mx-auto px-8 text-center mb-20">
        <div className="flex items-center gap-5 justify-center mb-8">
          <div className="h-px w-10 bg-gold/40" />
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">01 — The Approach</span>
          <div className="h-px w-10 bg-gold/40" />
        </div>

        <h2
          className="font-light italic leading-tight text-ink mb-8"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
          }}
        >
          Your Vision,<br />Made Tangible
        </h2>

        <p className="text-ink/55 text-sm leading-relaxed mb-4">
          Great spaces begin with great conversations. Our design service
          starts not with drawings, but with listening — understanding how
          you live, what you love, and how a space should make you feel.
        </p>
        <p className="text-ink/55 text-sm leading-relaxed">
          From that foundation, our designers craft detailed concepts that
          bring your vision to life before a single piece of wood is cut.
          Every decision is yours to make; we&rsquo;re here to guide, inspire,
          and execute with precision.
        </p>
      </div>

    </section>
  );
}
