import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { InstagramIcon } from "@/components/shared/icons/InstagramIcon";
import { TikTokIcon } from "@/components/shared/icons/TikTokIcon";
import { FacebookIcon } from "@/components/shared/icons/FacebookIcon";

const navLinks = [
  { label: "PROJECTS", href: "#" },
  { label: "SHOWROOM", href: "/showroom" },
  { label: "WHY iWOODZ CREATION", href: "#" },
  { label: "DESIGN CONSULTATION", href: "/design-consultation" },
  { label: "BROCHURE REQUEST", href: "/brochure" },
];

const legalLinks = [
  { label: "CONTACT US", href: "/contact" },
  { label: "TERMS & CONDITIONS", href: "#" },
  { label: "PRIVACY POLICY", href: "#" },
  { label: "WARRANTY", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div>
            <Link href="/">
              <p className="font-serif text-lg tracking-[0.3em] font-light uppercase mb-1"
                style={{ fontFamily: "var(--font-cormorant)" }}>
                iWOODZ CREATION
              </p>
            </Link>
            <div className="h-px w-12 bg-gold/60 mb-6" />
            <address className="not-italic text-sm text-white/60 space-y-1 leading-relaxed mb-6">
              <p>Accra, Ghana</p>
              <p className="mt-3">
                <a href="mailto:hello@iwoodz.com" className="hover:text-gold transition-colors">
                  hello@iwoodz.com
                </a>
              </p>
              <p>
                <a href="tel:+233000000000" className="hover:text-gold transition-colors">
                  +233 (0) 00 000 0000
                </a>
              </p>
            </address>
            <div className="flex gap-4 text-white/50">
              <a href="#" className="hover:text-gold transition-colors" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="TikTok"><TikTokIcon /></a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="Facebook"><FacebookIcon /></a>
            </div>
          </div>

          {/* Col 2: Main nav */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Navigate</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors tracking-wide">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal / Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Legal</p>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors tracking-wide">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Tagline */}
          <div className="hidden lg:block">
            <p className="font-serif text-2xl text-white/20 leading-snug italic"
              style={{ fontFamily: "var(--font-cormorant)" }}>
              "innovative woodworks."
            </p>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />
        <p className="text-center text-xs text-white/30 tracking-widest">
          © 2026 iWoodz Creation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
