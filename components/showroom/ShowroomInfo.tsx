import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const details = [
  {
    icon: MapPin,
    label: "Location",
    lines: ["Accra, Ghana"],
  },
  {
    icon: Clock,
    label: "Opening Hours",
    lines: ["Monday – Friday, 9am – 5pm", "Saturday by appointment"],
  },
  {
    icon: Phone,
    label: "Call Ahead",
    lines: ["+233 (0) 00 000 0000"],
    href: "tel:+233000000000",
  },
];

export function ShowroomInfo() {
  return (
    <section className="bg-linen py-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left: portrait image with gold offset frame */}
        <div className="relative order-2 lg:order-1">
          {/* Gold decorative border, offset behind */}
          <div className="absolute -bottom-5 -right-5 w-full h-full border border-gold/35 pointer-events-none" />
          <img
            src="https://picsum.photos/seed/showroom-interior/800/1000"
            alt="iWoodz Creation Showroom Interior — replace with real photo"
            className="relative w-full aspect-4/5 object-cover"
          />
        </div>

        {/* Right: editorial copy + details */}
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold/60" />
            <p className="text-gold text-[10px] tracking-[0.45em] uppercase">Visit Us</p>
          </div>

          <h2
            className="font-light italic leading-[1.1] mb-7"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
            }}
          >
            Experience Bespoke<br />in Person
          </h2>

          <p className="text-ink/55 text-sm leading-relaxed mb-10 max-w-md">
            Our Accra showroom is a curated space where you can touch, feel, and
            truly live alongside our finest work. Every finish, every joint, every
            considered detail — experienced properly for the first time.
          </p>

          <div className="space-y-6 mb-11">
            {details.map(({ icon: Icon, label, lines, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 w-8 h-8 border border-gold/30 flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.25em] text-ink/35 uppercase mb-1">{label}</p>
                  {lines.map((line, i) =>
                    href && i === 0 ? (
                      <a
                        key={line}
                        href={href}
                        className="block text-sm text-ink/75 hover:text-gold transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className={`text-sm ${i === 0 ? "text-ink/75" : "text-ink/40"}`}>
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <Button
            asChild
            className="bg-ink text-white hover:bg-ink/85 uppercase tracking-[0.18em] text-xs px-8 py-3 h-auto rounded-none"
          >
            <Link href="/contact">Arrange a Visit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
