import Link from "next/link";
import { Button } from "@/components/ui/button";

const galleryImages = [
  { src: "/Kitchen/RAF_1434.jpg", alt: "Bespoke iWoodz kitchen" },
  { src: "/New%20Batch%20/IMG_0820.jpg", alt: "Kitchen cabinetry and marble backsplash" },
  { src: "/New%20Batch%20/IMG_0825.jpg", alt: "Kitchen cabinets detail" },
];

export function KitchensSection() {
  return (
    <section className="bg-linen px-8 pt-20 pb-16">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-5 mb-14">
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">01</span>
          <div className="h-px flex-1 bg-gold/25" />
          <span className="text-ink/35 text-[9px] tracking-[0.4em] uppercase">Kitchens</span>
        </div>

        {/* Feature row: text left, tall image right */}
        <div className="flex flex-col lg:flex-row gap-0 mb-6">
          <div className="w-full lg:w-[40%] shrink-0 flex flex-col justify-center pr-0 lg:pr-16 pb-10 lg:pb-0">
            <h2
              className="font-light italic leading-tight mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              }}
            >
              Handcrafted<br />Kitchens
            </h2>
            <p className="text-ink/55 text-sm leading-relaxed mb-8 max-w-xs">
              The heart of every home, designed entirely around you. From the
              flow of the layout to the finest material choices — every iWoodz
              kitchen is a bespoke work of craft, built to last a lifetime.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-ink/30 text-ink bg-transparent hover:bg-ink hover:text-white uppercase tracking-[0.18em] text-xs w-fit px-7 h-10 rounded-none"
            >
              <Link href="/design-consultation">Arrange a Consultation</Link>
            </Button>
          </div>

          {/* Tall hero image */}
          <div className="flex-1">
            <img
              src="/Kitchen/RAF_1422.jpg"
              alt="Bespoke iWoodz kitchen"
              className="w-full aspect-4/3 lg:aspect-auto lg:h-[520px] object-cover"
            />
          </div>
        </div>

        {/* 3-image gallery row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {galleryImages.map(({ src, alt }) => (
            <div key={src} className="overflow-hidden group">
              <img
                src={src}
                alt={alt}
                className="w-full aspect-4/3 object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
