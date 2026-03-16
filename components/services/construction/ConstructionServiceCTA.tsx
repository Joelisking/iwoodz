import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ConstructionServiceCTA() {
  return (
    <section className="bg-ink px-8 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center gap-5 justify-center mb-10">
          <div className="h-px w-12 bg-gold/35" />
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">03 — Start Here</span>
          <div className="h-px w-12 bg-gold/35" />
        </div>

        <h2
          className="font-light italic text-white leading-tight mb-6"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
          }}
        >
          Ready to Build<br />Something Lasting?
        </h2>

        <p className="text-white/45 text-sm leading-relaxed max-w-xl mx-auto mb-12">
          Every iWoodz construction project begins with a single conversation.
          Tell us what you&rsquo;re building — and we&rsquo;ll show you how we&rsquo;ll bring it to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-gold text-white hover:bg-gold/85 uppercase tracking-[0.18em] text-xs px-10 h-12 rounded-none"
          >
            <Link href="/design-consultation">Book a Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/30 text-white bg-transparent hover:bg-white hover:text-ink uppercase tracking-[0.18em] text-xs px-10 h-12 rounded-none"
          >
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
