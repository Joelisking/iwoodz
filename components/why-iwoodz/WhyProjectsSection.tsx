import Link from "next/link";
import { Button } from "@/components/ui/button";

const wideProjects = [
  { seed: "why-project-wide-1", label: "EXPLORE INTERIORS" },
  { seed: "why-project-wide-2", label: "EXPLORE CONTAINER WORKS" },
];

const smallProjects = [
  { seed: "why-project-sm-1", label: "EXPLORE DOG KENNELS" },
  { seed: "why-project-sm-2", label: "EXPLORE CONSTRUCTIONS" },
  { seed: "why-project-sm-3", label: "EXPLORE OTHER PROJECTS" },
];

const btnClass =
  "mt-4 border-ink/30 text-ink bg-transparent hover:bg-ink hover:text-white uppercase tracking-[0.18em] text-xs px-5 h-9 rounded-none";

export function WhyProjectsSection() {
  return (
    <section className="bg-linen px-8 py-20">
      {/* Centered intro */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-[10px] tracking-[0.35em] uppercase text-ink/40 mb-3">
          Interiors, Container Works &amp; More
        </p>
        <h2
          className="font-light mb-5"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
          }}
        >
          Our Projects
        </h2>
        <p className="text-sm text-ink/60 leading-relaxed mb-8">
          From handcrafted wood works to ambitious container conversions and
          architectural constructions — every iWoodz project is designed with
          the same commitment to quality and lasting beauty.
        </p>
        <Button
          asChild
          className="bg-ink text-white hover:bg-ink/85 uppercase tracking-[0.18em] text-xs px-8 h-11 rounded-none"
        >
          <Link href="#">Explore All Projects</Link>
        </Button>
      </div>

      {/* 2-col wide images */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {wideProjects.map(({ seed, label }) => (
          <div key={seed}>
            <img
              src={`https://picsum.photos/seed/${seed}/900/540`}
              alt={label}
              className="w-full aspect-video object-cover"
            />
            <Button asChild variant="outline" className={btnClass}>
              <Link href="#">{label}</Link>
            </Button>
          </div>
        ))}
      </div>

      {/* 3-col images */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {smallProjects.map(({ seed, label }) => (
          <div key={seed}>
            <img
              src={`https://picsum.photos/seed/${seed}/600/400`}
              alt={label}
              className="w-full aspect-4/3 object-cover"
            />
            <Button asChild variant="outline" className={btnClass}>
              <Link href="#">{label}</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
