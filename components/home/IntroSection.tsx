import { Button } from "@/components/ui/button";

// Replace with real asset paths when available
const introImages = [
  {
    src: "https://picsum.photos/seed/kitchen-portrait/600/800",
    title: "Kitchens",
    description:
      "Custom-designed kitchens built to your exact specification — from layout planning to the final finish.",
  },
  {
    src: "https://picsum.photos/seed/living-portrait/600/800",
    title: "Living Spaces",
    description:
      "Wood joinery and fitted furniture that transforms any living area into something truly yours.",
  },
];

export function IntroSection() {
  return (
    <section className="bg-linen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading block */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">
            CRAFTED FOR YOU & YOUR HOME
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl text-ink font-light mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Wood Interiors & Builds
          </h2>
          <p className="text-ink/65 text-base leading-relaxed max-w-2xl mx-auto">
            At iWoodz Creation, every project begins with a conversation. We
            design and build wood interiors and structures — from fitted
            kitchens and wardrobes to container works and constructions — with
            craftsmanship and attention to detail at the heart of everything we
            do.
          </p>
        </div>

        {/* 2-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {introImages.map((item) => (
            <div key={item.title} className="group">
              <div className="overflow-hidden mb-5">
                {/* Replace with <Image> from next/image + real assets */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3
                className="font-serif text-2xl text-ink font-light mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {item.title}
              </h3>
              <p className="text-ink/60 text-sm leading-relaxed mb-5">
                {item.description}
              </p>
              <Button
                variant="outline"
                className="border-ink/40 text-ink bg-transparent hover:bg-ink hover:text-white uppercase tracking-[0.18em] text-xs px-6 h-10"
              >
                EXPLORE
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
