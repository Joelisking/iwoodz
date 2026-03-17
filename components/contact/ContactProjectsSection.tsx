import Link from "next/link";
import { Button } from "@/components/ui/button";

// Replace with real assets
const wideProjects = [
  {
    src: "/New%20Batch%20/IMG_0884.jpg",
    label: "EXPLORE CONTAINER WORKS",
    href: "/projects/container-works",
  },
  {
    src: "/New%20Batch%20/IMG_0823.jpg",
    label: "EXPLORE INTERIORS",
    href: "/interiors",
  },
];

const gridProjects = [
  {
    src: "/Kennel_new/ba7aab6e-8226-4391-b101-791a51bf3112%202.JPG",
    label: "EXPLORE DOG KENNELS",
    href: "/order/kennels",
  },
  {
    src: "/villa%20d_tuger/DJI_0226.JPG",
    label: "EXPLORE CONSTRUCTIONS",
    href: "/projects/constructions",
  },
  {
    src: "/New%20Batch%20/IMG_0826.jpg",
    label: "EXPLORE SHOWROOMS",
    href: "/showroom",
  },
];

export function ContactProjectsSection() {
  return (
    <section className="bg-linen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">
            WHERE CRAFTSMANSHIP MEETS VISION
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl text-ink font-light mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Our Projects
          </h2>
          <p className="text-ink/60 text-sm leading-relaxed max-w-2xl mx-auto mb-8">
            From kitchen interiors to full container conversions and custom constructions,
            every iWoodz Creation project is built with precision, passion, and an unwavering
            commitment to quality.
          </p>
          <Button asChild className="bg-ink text-white hover:bg-ink/85 uppercase tracking-[0.18em] text-xs px-8 h-11">
            <Link href="/projects/container-works">EXPLORE ALL PROJECTS</Link>
          </Button>
        </div>

        {/* 2-column wide landscape grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {wideProjects.map((p) => (
            <div key={p.label} className="group">
              <div className="overflow-hidden mb-4">
                <img
                  src={p.src}
                  alt={p.label}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <Button
                asChild
                variant="outline"
                className="border-ink/40 text-ink bg-transparent hover:bg-ink hover:text-white uppercase tracking-[0.18em] text-xs w-full h-10"
              >
                <Link href={p.href}>{p.label}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gridProjects.map((p) => (
            <div key={p.label} className="group">
              <div className="overflow-hidden mb-4">
                <img
                  src={p.src}
                  alt={p.label}
                  className="w-full aspect-4/3 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <Button
                asChild
                variant="outline"
                className="border-ink/40 text-ink bg-transparent hover:bg-ink hover:text-white uppercase tracking-[0.18em] text-xs w-full h-10"
              >
                <Link href={p.href}>{p.label}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
