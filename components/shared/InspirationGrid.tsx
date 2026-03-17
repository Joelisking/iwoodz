import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/shared/icons/InstagramIcon";
import { TikTokIcon } from "@/components/shared/icons/TikTokIcon";
import { FacebookIcon } from "@/components/shared/icons/FacebookIcon";

export interface InspirationCard {
  src: string;
  label: string;
  href?: string;
}

const DEFAULT_CARDS: InspirationCard[] = [
  { src: "/villa%20d_tuger/DJI_0214.JPG", label: "OUR PROJECTS", href: "/projects/container-works" },
  { src: "/wardrope/IMG_5283.JPG", label: "OUR WOOD WORKS", href: "/interiors" },
  { src: "/Pergola/IMG_4850.JPEG", label: "OUR SERVICES", href: "/services/design" },
];

interface InspirationGridProps {
  cards?: InspirationCard[];
}

export function InspirationGrid({ cards = DEFAULT_CARDS }: InspirationGridProps) {
  return (
    <section className="bg-linen pt-4 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-serif text-3xl md:text-4xl text-ink font-light mb-3"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          More Inspiration
        </h2>
        <div className="flex items-center gap-4 mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">FOLLOW US</p>
          <div className="flex gap-3 text-ink/50">
            <a href="https://www.facebook.com/iwoodzcreation" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Facebook"><FacebookIcon className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/iwoodzcreation" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Instagram"><InstagramIcon className="w-4 h-4" /></a>
            <a href="https://www.tiktok.com/@iwoodzcreation" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="TikTok"><TikTokIcon className="w-4 h-4" /></a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.label} className="group">
              <div className="overflow-hidden mb-4">
                <img
                  src={card.src}
                  alt={card.label}
                  className="w-full aspect-3/4 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <Button
                asChild
                variant="outline"
                className="border-ink/40 text-ink bg-transparent hover:bg-ink hover:text-white uppercase tracking-[0.18em] text-xs w-full h-10"
              >
                {card.href ? <Link href={card.href}>{card.label}</Link> : <span>{card.label}</span>}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
