import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ConstructionsGallery() {
  return (
    <section className="bg-linen pt-0 pb-0">

      {/* Section label — padded */}
      <div className="max-w-7xl mx-auto px-8 md:px-14 pt-16">
        <div className="flex items-center gap-5 mb-10">
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">03</span>
          <div className="h-px flex-1 bg-gold/25" />
          <span className="text-ink/35 text-[9px] tracking-[0.4em] uppercase">Recent Work</span>
        </div>
      </div>

      {/* Full-width feature image with text overlay on dark panel */}
      <div className="relative overflow-hidden group">
        <img
          src="/villa%20d_tuger/IMG_2917.JPG"
          alt="Villa D'Tuger — wood-clad residential build"
          className="w-full h-[55vh] md:h-[65vh] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
        />
        {/* Dark overlay panel — left aligned */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[42%] bg-ink/80 flex flex-col justify-center px-10 md:px-16">
          <p className="text-gold text-[9px] tracking-[0.5em] uppercase mb-4">Selected Project</p>
          <h3
            className="font-light italic text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            A Complete Home,<br />Rebuilt from the Ground
          </h3>
          <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
            A full residential rebuild in East Legon — structural framing,
            custom staircase, fitted interiors, and landscaping, all delivered
            under a single iWoodz contract.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-white/30 text-white bg-transparent hover:bg-white hover:text-ink uppercase tracking-[0.18em] text-xs w-fit px-7 h-10 rounded-none"
          >
            <Link href="/design-consultation">Start Your Project</Link>
          </Button>
        </div>
      </div>

    </section>
  );
}
