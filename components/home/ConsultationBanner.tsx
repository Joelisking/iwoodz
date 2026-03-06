import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ConsultationBanner() {
  return (
    <section className="relative h-[55vh] min-h-[400px] w-full overflow-hidden">
      {/* Background image — replace with real workshop/wood-grain asset */}
      <img
        src="https://picsum.photos/seed/woodworkshop/1920/800"
        alt="Workshop"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ink/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-8 md:px-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">
            TALK TO AN EXPERT
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl text-white font-light leading-tight mb-5"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Arrange A Design
            <br />
            Consultation
          </h2>
          <p className="text-white/65 text-sm leading-relaxed mb-8 max-w-md">
            Our design team offers a free, no-obligation consultation to
            understand your vision and explore how iWoodz Creation can bring it
            to life — from first sketch to final installation.
          </p>
          <Button variant="outline" asChild
            className="border-white text-white bg-transparent hover:bg-white hover:text-ink uppercase tracking-[0.18em] text-xs px-8 h-12">
            <Link href="/design-consultation">ARRANGE A DESIGN CONSULTATION</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
