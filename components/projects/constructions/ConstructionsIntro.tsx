import Link from "next/link";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "100%", label: "Bespoke Builds" },
];

export function ConstructionsIntro() {
  return (
    <section className="bg-linen">

      {/* Typography-led intro — generous whitespace, editorial feel */}
      <div className="max-w-5xl mx-auto px-8 pt-24 pb-16 text-center">
        <div className="flex items-center gap-5 justify-center mb-10">
          <div className="h-px w-12 bg-gold/40" />
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">01 — Our Approach</span>
          <div className="h-px w-12 bg-gold/40" />
        </div>

        <h2
          className="font-light italic leading-tight text-ink mb-8"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
          }}
        >
          Built to Endure,<br />Designed to Inspire
        </h2>

        <p className="text-ink/55 text-sm leading-relaxed max-w-xl mx-auto mb-4">
          From residential extensions to complete commercial builds, iWoodz brings
          the same rigour and craftsmanship to structural construction that defines
          every piece we create.
        </p>
        <p className="text-ink/55 text-sm leading-relaxed max-w-xl mx-auto mb-12">
          We work closely with architects, engineers, and clients directly — managing
          the full build process with transparency, precision, and a passion for
          lasting results.
        </p>

        <Button
          asChild
          variant="outline"
          className="border-ink/30 text-ink bg-transparent hover:bg-ink hover:text-white uppercase tracking-[0.18em] text-xs px-8 h-10 rounded-none"
        >
          <Link href="/design-consultation">Talk to Our Team</Link>
        </Button>
      </div>

      {/* Full-bleed edge-to-edge image — no side padding */}
      <div className="overflow-hidden group">
        <img
          src="https://picsum.photos/seed/constructions-fullbleed/1920/900"
          alt="iWoodz construction project — replace with real photo"
          className="w-full h-[50vh] md:h-[65vh] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
        />
      </div>

      {/* Stats strip below image */}
      <div className="border-b border-ink/8">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-3">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className={`py-10 text-center ${i < stats.length - 1 ? "border-r border-ink/8" : ""}`}
            >
              <p
                className="font-light italic text-ink leading-none mb-2"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                {value}
              </p>
              <p className="text-ink/45 text-[9px] tracking-[0.35em] uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
