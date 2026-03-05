import { Separator } from "@/components/ui/separator";

const projectsColumns = [
  {
    heading: "INTERIORS",
    links: ["Kitchens", "Living Spaces", "Wardrobes & Storage"],
  },
  {
    heading: "DOG KENNELS",
    links: ["Single Kennel", "Double Kennel", "Feeding Dishes"],
  },
  {
    heading: "CONTAINER WORKS",
    links: [
      "Explore all container works",
      "Layout Planning",
      "Windows & Doors",
      "Roofing & Exterior",
      "Electrical & Plumbing",
      "Finishing Touches",
    ],
  },
  {
    heading: "CONSTRUCTIONS",
    links: ["Explore all constructions", "Villa D'Tuger"],
  },
  {
    heading: "OTHER PROJECTS",
    links: ["Pergola", "Hand-Wash Stations"],
  },
];

const whyColumns = [
  {
    heading: "WHY iWOODZ CREATION",
    links: [
      "Why choose us?",
      "Our design service",
      "Our installation service",
      "Our construction service",
    ],
  },
];

interface NavPopoverProps {
  type: "projects" | "why";
}

export function NavPopover({ type }: NavPopoverProps) {
  const columns = type === "projects" ? projectsColumns : whyColumns;

  return (
    <div className="bg-linen border-t border-gold/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
        >
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs uppercase tracking-[0.2em] text-ink font-semibold mb-4">
                {col.heading}
              </p>
              <Separator className="mb-4 bg-gold/30" />
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink/70 hover:text-ink hover:translate-x-1 transition-all inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
