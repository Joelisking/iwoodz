import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContainerWorksIntro() {
  return (
    <section className="bg-navbar px-8 md:px-14 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-5 mb-14">
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">01</span>
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-white/25 text-[9px] tracking-[0.4em] uppercase">The Concept</span>
        </div>

        {/* Two images + text overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-14">
          {/* Tall left image */}
          <div className="lg:col-span-3 overflow-hidden group">
            <img
              src="https://picsum.photos/seed/container-intro-left/900/700"
              alt="Container conversion exterior — replace with real photo"
              className="w-full h-64 lg:h-[480px] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
            />
          </div>

          {/* Right: shorter image + text below */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="overflow-hidden group flex-1">
              <img
                src="https://picsum.photos/seed/container-intro-right/600/500"
                alt="Container interior fitout — replace with real photo"
                className="w-full h-52 lg:h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
              />
            </div>
            {/* Pull quote card */}
            <div className="bg-gold/15 border border-gold/20 p-6">
              <p
                className="text-white/80 font-light italic leading-snug mb-0"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.35rem" }}
              >
                &ldquo;Raw steel transformed into spaces as refined as any fitted interior.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Text + CTA row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <h2
              className="font-light italic leading-tight text-white mb-5"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              }}
            >
              Spaces Born<br />from Steel
            </h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              Shipping containers are our canvas. We transform raw steel into
              beautifully finished spaces — from pop-up retail units and mobile
              offices to permanent garden studios and hospitality venues. Every
              conversion is fully bespoke: custom cladding, fitted interiors,
              electrical and plumbing integration.
            </p>
          </div>
          <div className="lg:text-right">
            <Button
              asChild
              variant="outline"
              className="border-white/30 text-white bg-transparent hover:bg-white hover:text-ink uppercase tracking-[0.18em] text-xs px-7 h-10 rounded-none"
            >
              <Link href="/design-consultation">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
