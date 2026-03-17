import { Button } from "@/components/ui/button";

// Replace with real asset paths when available
const cards = [
  {
    src: "/Kitchen/RAF_1434.jpg",
    title: "Our Design Service",
    description:
      "Every build starts with a design process. We listen, sketch, and refine until the vision is exactly right.",
  },
  {
    src: "/wardrope/IMG_5283.JPG",
    title: "Expert Craftsmanship",
    description:
      "Our skilled craftsmen bring decades of woodworking expertise to every joint, panel, and finish.",
  },
  {
    src: "/cabinet/IMG_5347.JPG",
    title: "Wood Works",
    description:
      "From custom hardware to hand-applied finishes, every detail is considered and crafted with care.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-linen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading block */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">
            THOUGHTFUL DESIGN & EXPERT CRAFTSMANSHIP
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl text-ink font-light mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Why Choose iWoodz Creation?
          </h2>
          <p className="text-ink/60 text-base leading-relaxed max-w-2xl mx-auto mb-8">
            We combine thoughtful design, skilled craftsmanship, and a genuine
            passion for woodwork to deliver results that exceed expectations —
            every time.
          </p>
          {/* Dark filled button — one of the few exceptions to the ghost style */}
          <Button className="bg-ink text-white hover:bg-ink/85 uppercase tracking-[0.18em] text-xs px-8 h-11">
            WHY CHOOSE iWOODZ?
          </Button>
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {cards.map((card) => (
            <div key={card.title} className="group">
              <div className="overflow-hidden mb-5">
                {/* Replace with <Image> from next/image + real assets */}
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3
                className="font-serif text-xl text-ink font-light mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {card.title}
              </h3>
              <p className="text-ink/60 text-sm leading-relaxed mb-5">
                {card.description}
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
