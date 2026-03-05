import { Button } from "@/components/ui/button";

const KitchenLineArt = () => (
  <svg
    viewBox="0 0 240 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-[220px] mx-auto opacity-70"
    aria-hidden="true"
  >
    {/* Upper cabinets */}
    <rect x="20" y="30" width="85" height="70" rx="1" stroke="#B8976A" strokeWidth="1.2" />
    <rect x="29" y="39" width="67" height="52" rx="1" stroke="#B8976A" strokeWidth="0.8" />
    <line x1="52" y1="65" x2="66" y2="65" stroke="#B8976A" strokeWidth="1.2" strokeLinecap="round" />

    <rect x="135" y="30" width="85" height="70" rx="1" stroke="#B8976A" strokeWidth="1.2" />
    <rect x="144" y="39" width="67" height="52" rx="1" stroke="#B8976A" strokeWidth="0.8" />
    <line x1="168" y1="65" x2="182" y2="65" stroke="#B8976A" strokeWidth="1.2" strokeLinecap="round" />

    {/* Gap / window between upper cabinets */}
    <line x1="108" y1="30" x2="132" y2="30" stroke="#B8976A" strokeWidth="0.5" strokeDasharray="3 3" />

    {/* Counter / island */}
    <rect x="20" y="170" width="200" height="8" rx="1" fill="#B8976A" fillOpacity="0.2" stroke="#B8976A" strokeWidth="1.2" />

    {/* Lower cabinets */}
    <rect x="20" y="178" width="90" height="62" rx="1" stroke="#B8976A" strokeWidth="1.2" />
    <rect x="29" y="187" width="72" height="44" rx="1" stroke="#B8976A" strokeWidth="0.8" />
    <line x1="52" y1="209" x2="66" y2="209" stroke="#B8976A" strokeWidth="1.2" strokeLinecap="round" />

    <rect x="130" y="178" width="90" height="62" rx="1" stroke="#B8976A" strokeWidth="1.2" />
    <rect x="139" y="187" width="72" height="44" rx="1" stroke="#B8976A" strokeWidth="0.8" />
    <line x1="162" y1="209" x2="176" y2="209" stroke="#B8976A" strokeWidth="1.2" strokeLinecap="round" />

    {/* Sink */}
    <rect x="98" y="178" width="44" height="32" rx="1" stroke="#B8976A" strokeWidth="1" />
    <line x1="120" y1="178" x2="120" y2="170" stroke="#B8976A" strokeWidth="1" />
    <path d="M120 170 Q120 158 130 158" stroke="#B8976A" strokeWidth="1.2" strokeLinecap="round" />

    {/* Floor line */}
    <line x1="10" y1="240" x2="230" y2="240" stroke="#B8976A" strokeWidth="0.8" strokeOpacity="0.4" />
  </svg>
);

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
            {/* Dark filled button */}
            <Button className="bg-ink text-white hover:bg-ink/85 uppercase tracking-[0.18em] text-xs px-8 h-11">
              REQUEST A BROCHURE
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
              Free Design Consultation
            </h2>
            <p className="text-ink/60 text-sm leading-relaxed mb-8 max-w-xs mx-auto lg:ml-auto lg:mr-0">
              Meet with one of our expert designers to explore your project and
              receive a personalised proposal — completely free.
            </p>
            <Button
              variant="outline"
              className="border-ink/50 text-ink bg-transparent hover:bg-ink hover:text-white uppercase tracking-[0.18em] text-xs px-8 h-11"
            >
              ARRANGE A CONSULTATION
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
