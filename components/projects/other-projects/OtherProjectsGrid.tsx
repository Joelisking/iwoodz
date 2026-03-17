import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    src: "/Pergola/IMG_4850.JPEG",
    title: "Garden Pavilion",
    category: "Outdoor Structures",
    description: "A timber-framed garden pavilion with cedar cladding, built-in bench seating, and a planted living roof.",
  },
  {
    src: "/Pergola/RAF_1412.jpg",
    title: "Outdoor Bar & Kitchen",
    category: "Entertainment Spaces",
    description: "A fully fitted outdoor kitchen and bar, weatherproofed with tropical hardwood and integrated appliances.",
  },
  {
    src: "/cabinet/IMG_5347.JPG",
    title: "Statement Console",
    category: "Bespoke Joinery",
    description: "A solid wood console table with natural live-edge grain — a one-of-a-kind centrepiece crafted for a contemporary home.",
  },
  {
    src: "/Pergola/IMG_2944.JPEG",
    title: "Carport Pergola",
    category: "Outdoor Structures",
    description: "A cantilevered wood pergola canopy with tensile fabric — providing shade and style over a residential driveway.",
  },
  {
    src: "/Pergola/RAF_1376.jpg",
    title: "Rooftop Bar",
    category: "Entertainment Spaces",
    description: "A rooftop timber bar and kiosk structure with full kitchen fit-out — designed for entertaining with style.",
  },
];

export function OtherProjectsGrid() {
  return (
    <section className="bg-linen pt-1 pb-0">

      {/* Section label */}
      <div className="max-w-7xl mx-auto px-8 md:px-14 pt-16">
        <div className="flex items-center gap-5 mb-14">
          <span className="text-gold text-[9px] tracking-[0.5em] uppercase">02</span>
          <div className="h-px flex-1 bg-gold/25" />
          <span className="text-ink/35 text-[9px] tracking-[0.4em] uppercase">Selected Work</span>
        </div>
      </div>

      {/* Row 1: dark CTA card + wide image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
        {/* Dark CTA card */}
        <div className="bg-ink flex flex-col justify-between p-10 md:p-12 min-h-[320px] md:min-h-0">
          <div>
            <p className="text-gold text-[9px] tracking-[0.5em] uppercase mb-4">Have a unique brief?</p>
            <h3
              className="font-light italic text-white leading-tight mb-5"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Let&rsquo;s Build<br />Something New
            </h3>
            <p className="text-white/45 text-sm leading-relaxed">
              No two commissions are the same. Tell us what you&rsquo;re imagining and we&rsquo;ll make it real.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-white/30 text-white bg-transparent hover:bg-white hover:text-ink uppercase tracking-[0.18em] text-xs w-fit px-6 h-10 rounded-none mt-8"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Wide project image */}
        <div className="md:col-span-2 overflow-hidden group">
          <img
            src={projects[0].src}
            alt={projects[0].title}
            className="w-full h-64 md:h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* Row 2: three equal images with caption on hover-feel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-px">
        {projects.slice(1, 4).map(({ src, title, category, description }) => (
          <div key={title} className="group relative overflow-hidden">
            <img
              src={src}
              alt={title}
              className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            {/* Metadata strip below image */}
            <div className="bg-linen px-5 py-4 border-t border-ink/8">
              <p className="text-gold text-[9px] tracking-[0.4em] uppercase mb-0.5">{category}</p>
              <h3
                className="font-light italic text-ink leading-tight"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem" }}
              >
                {title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Row 3: wide image + description card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-px mb-0">
        <div className="md:col-span-2 overflow-hidden group">
          <img
            src={projects[4].src}
            alt={projects[4].title}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
          />
        </div>
        {/* Description card */}
        <div className="bg-cta-panel flex flex-col justify-center px-10 py-10 md:py-0">
          <p className="text-gold text-[9px] tracking-[0.4em] uppercase mb-3">{projects[4].category}</p>
          <h3
            className="font-light italic text-ink leading-tight mb-4"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
          >
            {projects[4].title}
          </h3>
          <p className="text-ink/55 text-sm leading-relaxed">{projects[4].description}</p>
        </div>
      </div>
    </section>
  );
}
