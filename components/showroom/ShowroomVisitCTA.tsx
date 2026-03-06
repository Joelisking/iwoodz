import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KitchenLineArt } from "@/components/shared/KitchenLineArt";

export function ShowroomVisitCTA() {
  return (
    <section className="bg-navbar py-24 px-8 overflow-hidden relative">
      {/* Decorative illustration — faded background */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block">
        <KitchenLineArt />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-8 bg-gold/50" />
          <p className="text-gold text-[10px] tracking-[0.45em] uppercase">The Next Step</p>
          <div className="h-px w-8 bg-gold/50" />
        </div>

        <h2
          className="text-white font-light italic leading-[1.05] mb-6"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
          }}
        >
          We'd Love to<br />See You
        </h2>

        <p className="text-white/45 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
          Whether you have a project in mind or simply want to be inspired,
          our doors — and our designers — are always open.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-white text-ink hover:bg-white/90 uppercase tracking-[0.18em] text-xs px-8 h-11 rounded-none"
          >
            <Link href="/contact">Arrange a Visit</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/25 text-white bg-transparent hover:bg-white/8 uppercase tracking-[0.18em] text-xs px-8 h-11 rounded-none"
          >
            <Link href="/design-consultation">Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
