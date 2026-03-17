import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KitchenLineArt } from "@/components/shared/KitchenLineArt";

export function DualCTAPanel() {
  return (
    <section className="bg-cta-panel py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left: Brochure */}
          <div className="text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">
              BE INSPIRED
            </p>
            <h2
              className="font-serif text-3xl md:text-4xl text-ink font-light mb-4 leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Request A Brochure
            </h2>
            <p className="text-ink/60 text-sm leading-relaxed mb-8 max-w-xs mx-auto lg:mx-0">
              Browse our full portfolio of projects, materials, and finishes in
              our beautifully produced design brochure.
            </p>
            <Button asChild className="bg-ink text-white hover:bg-ink/85 uppercase tracking-[0.18em] text-xs px-8 h-11">
              <Link href="/brochure">REQUEST A BROCHURE</Link>
            </Button>
          </div>

          {/* Center: Line-art illustration */}
          <div className="flex items-center justify-center py-4">
            <KitchenLineArt />
          </div>

          {/* Right: Consultation */}
          <div className="text-center lg:text-right">
            <p className="text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">
              DESIGN YOUR SPACE
            </p>
            <h2
              className="font-serif text-3xl md:text-4xl text-ink font-light mb-4 leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Book A Design Consultation
            </h2>
            <p className="text-ink/60 text-sm leading-relaxed mb-8 max-w-xs mx-auto lg:ml-auto lg:mr-0">
              Our designers visit your site, take measurements, and prepare a
              detailed proposal. A retainer fee applies — deducted from the
              final project cost upon agreement.
            </p>
            <Button variant="outline" asChild
              className="border-ink/50 text-ink bg-transparent hover:bg-ink hover:text-white uppercase tracking-[0.18em] text-xs px-8 h-11">
              <Link href="/design-consultation">ARRANGE A CONSULTATION</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
