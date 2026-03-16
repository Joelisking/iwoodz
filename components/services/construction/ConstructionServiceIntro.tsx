import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ConstructionServiceIntro() {
  return (
    <section className="bg-linen px-8 md:px-14 pt-20 pb-20">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-5 mb-14">
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">01</span>
          <div className="h-px flex-1 bg-gold/25" />
          <span className="text-ink/35 text-[9px] tracking-[0.4em] uppercase">The Service</span>
        </div>

        {/* Asymmetric two-column layout */}
        <div className="flex flex-col lg:flex-row gap-0 mb-1">
          {/* Left: tall image */}
          <div className="w-full lg:w-[55%] shrink-0 overflow-hidden group mb-10 lg:mb-0">
            <img
              src="https://picsum.photos/seed/construction-service-intro/900/800"
              alt="iWoodz construction service — replace with real photo"
              className="w-full h-72 lg:h-[580px] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
            />
          </div>

          {/* Right: text, offset lower */}
          <div className="flex-1 flex flex-col justify-end pl-0 lg:pl-14 pb-0 lg:pb-8">
            <h2
              className="font-light italic text-ink leading-tight mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              }}
            >
              We Build What<br />Others Imagine
            </h2>
            <p className="text-ink/55 text-sm leading-relaxed mb-4 max-w-sm">
              iWoodz provides a complete construction service — from initial
              structural work and roofing through to bespoke joinery, fitted
              interiors, and final finishes, all under one contract.
            </p>
            <p className="text-ink/55 text-sm leading-relaxed mb-8 max-w-sm">
              Whether you are extending an existing home, building from the
              ground up, or fitting out a commercial space, our team manages
              every aspect of the build with the same care and craftsmanship
              that defines all iWoodz work.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-ink/30 text-ink bg-transparent hover:bg-ink hover:text-white uppercase tracking-[0.18em] text-xs w-fit px-7 h-10 rounded-none"
            >
              <Link href="/design-consultation">Discuss Your Build</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
