import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LivingSpacesSection() {
  return (
    <section className="bg-linen px-8 pt-20 pb-16">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-5 mb-14">
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">02</span>
          <div className="h-px flex-1 bg-gold/25" />
          <span className="text-ink/35 text-[9px] tracking-[0.4em] uppercase">Living Spaces</span>
        </div>

        {/* Full-width lead image */}
        <div className="overflow-hidden group mb-6">
          <img
            src="/New%20Batch%20/IMG_0812.jpg"
            alt="iWoodz bespoke living space interior"
            className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
          />
        </div>

        {/* Text + two-image split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Text block */}
          <div className="pt-4">
            <h2
              className="font-light italic leading-tight mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              }}
            >
              Spaces Designed<br />for Living
            </h2>
            <p className="text-ink/55 text-sm leading-relaxed mb-8 max-w-sm">
              Beyond the kitchen, iWoodz brings the same obsessive craftsmanship
              to every corner of your home. Custom shelving, media units, reading
              nooks — each piece designed to complement the way you live.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-ink/30 text-ink bg-transparent hover:bg-ink hover:text-white uppercase tracking-[0.18em] text-xs w-fit px-7 h-10 rounded-none"
            >
              <Link href="/design-consultation">Talk to a Designer</Link>
            </Button>
          </div>

          {/* Two stacked images */}
          <div className="grid grid-cols-2 gap-2">
            <div className="overflow-hidden group">
              <img
                src="/New%20Batch%20/IMG_0816.jpg"
                alt="Living space with wood details"
                className="w-full aspect-3/4 object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="overflow-hidden group mt-8">
              <img
                src="/villa%20d_tuger/IMG_2932.JPG"
                alt="Villa D'Tuger living room interior"
                className="w-full aspect-3/4 object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
