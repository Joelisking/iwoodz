import Link from "next/link";
import { Button } from "@/components/ui/button";

const galleryImages = [
  { seed: "wardrobe-1", alt: "Fitted wardrobe interior" },
  { seed: "wardrobe-2", alt: "Bespoke storage detail" },
  { seed: "wardrobe-3", alt: "Wardrobe handles and finish" },
];

export function WardobesSection() {
  return (
    <section className="bg-linen px-8 pt-20 pb-24">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-5 mb-14">
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">03</span>
          <div className="h-px flex-1 bg-gold/25" />
          <span className="text-ink/35 text-[9px] tracking-[0.4em] uppercase">Wardrobes &amp; Storage</span>
        </div>

        {/* Reverse feature: image left, text right */}
        <div className="flex flex-col lg:flex-row gap-0 mb-6">
          {/* Wide feature image */}
          <div className="flex-1 mb-10 lg:mb-0">
            <img
              src="https://picsum.photos/seed/wardrobe-feature/900/700"
              alt="iWoodz fitted wardrobe — replace with real photo"
              className="w-full aspect-4/3 lg:aspect-auto lg:h-[520px] object-cover"
            />
          </div>

          {/* Text right */}
          <div className="w-full lg:w-[38%] shrink-0 flex flex-col justify-center pl-0 lg:pl-16">
            <h2
              className="font-light italic leading-tight mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              }}
            >
              Wardrobes &amp;<br />Storage
            </h2>
            <p className="text-ink/55 text-sm leading-relaxed mb-8 max-w-xs">
              Bespoke fitted wardrobes and storage solutions that make every
              centimetre count. From walk-in dressing rooms to slimline
              alcove units — designed, crafted, and installed to perfection.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-ink/30 text-ink bg-transparent hover:bg-ink hover:text-white uppercase tracking-[0.18em] text-xs w-fit px-7 h-10 rounded-none"
            >
              <Link href="/design-consultation">Request a Design</Link>
            </Button>
          </div>
        </div>

        {/* 3-image gallery strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {galleryImages.map(({ seed, alt }) => (
            <div key={seed} className="overflow-hidden group">
              <img
                src={`https://picsum.photos/seed/${seed}/700/520`}
                alt={`${alt} — replace with real photo`}
                className="w-full aspect-4/3 object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
