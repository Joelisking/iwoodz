import Link from "next/link";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    heading: "Free Consultation",
    body: "We begin with a complimentary in-home or showroom visit. No brief is too big or too small — we want to understand your space, your lifestyle, and your aspirations before anything else.",
  },
  {
    number: "02",
    heading: "Concept Design",
    body: "Our designers produce detailed mood boards, sketches, and 3D visualisations tailored to your brief. You see exactly how your finished space will look before any commitment is made.",
  },
  {
    number: "03",
    heading: "Material Selection",
    body: "We guide you through our full range of materials, finishes, and hardware — presenting samples in person so every choice reflects your taste and the quality you expect.",
  },
  {
    number: "04",
    heading: "Design Sign-Off",
    body: "Once every detail is agreed and signed off, your project moves seamlessly into production. No surprises, no changes without consent — just the space you designed, delivered.",
  },
];

export function DesignServiceProcess() {
  return (
    <section className="bg-cta-panel px-8 md:px-14 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-5 mb-14">
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">02</span>
          <div className="h-px flex-1 bg-ink/12" />
          <span className="text-ink/35 text-[9px] tracking-[0.4em] uppercase">How It Works</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading + CTA */}
          <div className="lg:sticky lg:top-32">
            <h2
              className="font-light italic text-ink leading-tight mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              From First Meeting<br />to Final Drawing
            </h2>
            <p className="text-ink/55 text-sm leading-relaxed mb-8 max-w-sm">
              Our four-step design process ensures that by the time your
              project moves into production, every detail has been considered,
              agreed, and signed off.
            </p>
            <Button
              asChild
              className="bg-ink text-white hover:bg-ink/85 uppercase tracking-[0.18em] text-xs px-8 h-11 rounded-none"
            >
              <Link href="/design-consultation">Book a Free Consultation</Link>
            </Button>
          </div>

          {/* Right: numbered steps */}
          <div className="space-y-0 divide-y divide-ink/10">
            {steps.map(({ number, heading, body }) => (
              <div key={number} className="py-8 flex gap-7">
                <span className="text-gold text-[9px] tracking-[0.5em] uppercase shrink-0 mt-1">{number}</span>
                <div>
                  <h3
                    className="font-light italic text-ink mb-2"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem" }}
                  >
                    {heading}
                  </h3>
                  <p className="text-ink/55 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
