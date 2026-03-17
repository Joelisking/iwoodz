import Link from "next/link";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "Zero", label: "Damage Guarantee" },
  { value: "Day 1", label: "Ready to Use" },
  { value: "Full", label: "Site Clean-Up" },
];

export function InstallationServiceIntro() {
  return (
    <section className="bg-linen">

      {/* Text block */}
      <div className="max-w-7xl mx-auto px-8 md:px-14 pt-20 pb-14">
        <div className="flex items-center gap-5 mb-14">
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">01</span>
          <div className="h-px flex-1 bg-gold/25" />
          <span className="text-ink/35 text-[9px] tracking-[0.4em] uppercase">The Commitment</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-end">
          <div className="flex-1">
            <h2
              className="font-light italic text-ink leading-tight mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
              }}
            >
              Fitted with the<br />Same Care It<br />Was Designed
            </h2>
          </div>
          <div className="lg:w-[42%] shrink-0">
            <p className="text-ink/55 text-sm leading-relaxed mb-4">
              Great design deserves great installation. Our skilled fitting
              teams work with the same precision and care that goes into
              every piece we make — arriving prepared, working cleanly,
              and leaving your home exactly as they found it.
            </p>
            <p className="text-ink/55 text-sm leading-relaxed mb-8">
              Every installation is managed by a dedicated project coordinator
              who keeps you informed at every stage, from delivery scheduling
              to final snagging sign-off.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-ink/30 text-ink bg-transparent hover:bg-ink hover:text-white uppercase tracking-[0.18em] text-xs px-7 h-10 rounded-none"
            >
              <Link href="/design-consultation">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-t border-ink/8">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-3">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className={`py-10 text-center ${i < stats.length - 1 ? "border-r border-ink/8" : ""}`}
            >
              <p
                className="font-light italic text-ink leading-none mb-2"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                {value}
              </p>
              <p className="text-ink/45 text-[9px] tracking-[0.35em] uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
