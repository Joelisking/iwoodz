import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Replace with real asset paths when available
const mainProjects = [
  {
    src: "/New%20Batch%20/IMG_0883.jpg",
    title: "Container Works",
    href: "/projects/container-works",
    description:
      "Innovative container conversions — from layout planning and windows to full interior finishing.",
  },
  {
    src: "/villa%20d_tuger/DJI_0214.JPG",
    title: "Constructions",
    href: "/projects/constructions",
    description:
      "Full-scale construction projects including villas, outbuildings, and custom structures.",
  },
  {
    src: "/wardrope/IMG_5292.JPG",
    title: "Interiors",
    href: "/interiors",
    description:
      "Bespoke fitted kitchens, living spaces, and wardrobes crafted with precision and care.",
  },
];

const secondaryProjects = [
  {
    src: "/Kennel_new/ba7aab6e-8226-4391-b101-791a51bf3112%202.JPG",
    title: "Dog Kennels",
    href: "/order/kennels",
    description:
      "Single and double kennels built to the highest standard — comfortable and durable.",
  },
  {
    src: "/Pergola/IMG_4850.JPEG",
    title: "Other Projects",
    href: "/projects/other-projects",
    description:
      "Pergolas, hand-wash stations, and more — no project is too unique.",
  },
];

function ProjectCard({
  src,
  title,
  href,
  description,
}: {
  src: string;
  title: string;
  href: string;
  description: string;
}) {
  return (
    <div className="group">
      <div className="overflow-hidden mb-5">
        <img
          src={src}
          alt={title}
          className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <h3
        className="font-serif text-2xl text-ink font-light mb-2"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        {title}
      </h3>
      <p className="text-ink/60 text-sm leading-relaxed mb-5">{description}</p>
      <Button
        asChild
        variant="outline"
        className="border-ink/40 text-ink bg-transparent hover:bg-ink hover:text-white uppercase tracking-[0.18em] text-xs px-6 h-10"
      >
        <Link href={href}>EXPLORE {title.toUpperCase()}</Link>
      </Button>
    </div>
  );
}

export function ProjectsGrid() {
  return (
    <section className="bg-linen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">
            OUR WORK
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl text-ink font-light"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Our Projects
          </h2>
        </div>

        {/* First row: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mainProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <Separator className="bg-gold/20 mb-12" />

        {/* Second row: 2 columns offset */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {secondaryProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
