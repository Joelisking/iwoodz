import { Separator } from "@/components/ui/separator";
import { InstagramIcon } from "@/components/shared/icons/InstagramIcon";
import { TikTokIcon } from "@/components/shared/icons/TikTokIcon";
import { FacebookIcon } from "@/components/shared/icons/FacebookIcon";

export function ContactDetails() {
  return (
    <div>
      <h2
        className="font-serif text-3xl md:text-4xl text-ink font-light mb-2"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Head Office
      </h2>
      <p className="text-ink/50 text-sm mb-8">Open Monday – Saturday, 8am – 5pm</p>

      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink/40 mb-1">CALL US</p>
          <a href="tel:+233000000000" className="text-ink hover:text-gold transition-colors text-sm">
            +233 (0) 00 000 0000
          </a>
        </div>

        <Separator className="bg-gold/20" />

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink/40 mb-1">EMAIL US</p>
          <a href="mailto:hello@iwoodz.co.za" className="text-ink hover:text-gold transition-colors text-sm">
            hello@iwoodz.co.za
          </a>
        </div>

        <Separator className="bg-gold/20" />

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink/40 mb-1">VISIT A SHOWROOM</p>
          <p className="text-ink/70 text-sm">Accra, Ghana</p>
        </div>

        <Separator className="bg-gold/20" />

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink/40 mb-3">MORE INSPIRATION</p>
          <p className="text-xs uppercase tracking-[0.2em] text-ink/40 mb-3">FOLLOW US</p>
          <div className="flex gap-4 text-ink/50">
            <a href="#" className="hover:text-gold transition-colors" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" className="hover:text-gold transition-colors" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" className="hover:text-gold transition-colors" aria-label="TikTok"><TikTokIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
