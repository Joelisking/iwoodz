import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ConsultationBanner() {
  return (
    <section className="relative h-[55vh] min-h-[400px] w-full overflow-hidden">
      {/* Background image — replace with real workshop/wood-grain asset */}
      <img
        src="/New%20Batch%20/IMG_0879.jpg"
        alt="iWoodz container works project"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ink/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-6 md:px-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3 md:mb-4">
            TALK TO AN EXPERT
          </p>
          <h2
            className="font-serif text-3xl md:text-5xl text-white font-light leading-tight mb-4 md:mb-5"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Book A Design
            <br />
            Consultation
          </h2>
          <p className="hidden sm:block text-white/65 text-sm leading-relaxed mb-6 md:mb-8 max-w-md">
            Our design team visits your site to understand your vision, take
            measurements, and prepare a detailed proposal. A retainer fee
            applies — deducted in full from the final project cost upon
            agreement.
          </p>
          <Button variant="outline" asChild
            className="border-white text-white bg-transparent hover:bg-white hover:text-ink uppercase tracking-[0.18em] text-xs px-6 md:px-8 h-10 md:h-12">
            <Link href="/design-consultation">ARRANGE A CONSULTATION</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
