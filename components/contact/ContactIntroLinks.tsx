import Link from "next/link";
import { Button } from "@/components/ui/button";

const quickLinks = [
  {
    src: "/Kitchen/RAF_1434.jpg",
    alt: "Request a Brochure",
    label: "REQUEST A BROCHURE",
    href: "/brochure",
  },
  {
    src: "/New%20Batch%20/IMG_0841.jpg",
    alt: "Design Consultation",
    label: "ARRANGE A DESIGN CONSULTATION",
    href: "/design-consultation",
  },
  {
    src: "/Pergola/RAF_1412.jpg",
    alt: "Visit a Showroom",
    label: "VISIT A SHOWROOM",
    href: "/showroom",
  },
];

export function ContactIntroLinks() {
  return (
    <section className="bg-linen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1
          className="font-serif text-4xl md:text-5xl text-ink font-light mb-5"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Contact Us
        </h1>
        <p className="text-ink/60 text-sm leading-relaxed mb-14 max-w-xl">
          Whether you have a project in mind, a question about our work, or simply want to
          explore what's possible — our team is here to help. Get in touch using any of the
          options below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickLinks.map((card) => (
            <div key={card.label} className="group">
              <div className="overflow-hidden mb-5">
                {/* Replace with real assets */}
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <Button
                variant="outline"
                className="border-ink/40 text-ink bg-transparent hover:bg-ink hover:text-white uppercase tracking-[0.18em] text-xs w-full h-10"
                asChild
              >
                <Link href={card.href}>{card.label}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
