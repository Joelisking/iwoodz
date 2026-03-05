import { Separator } from "@/components/ui/separator";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.93a8.26 8.26 0 004.83 1.54V7.01a4.85 4.85 0 01-1.06-.32z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div>
            <p
              className="font-serif text-lg tracking-[0.3em] font-light uppercase mb-1"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              iWOODZ CREATION
            </p>
            <div className="h-px w-12 bg-gold/60 mb-6" />
            <address className="not-italic text-sm text-white/60 space-y-1 leading-relaxed mb-6">
              <p>123 Woodcraft Lane</p>
              <p>Johannesburg, South Africa</p>
              <p className="mt-3">
                <a href="mailto:hello@iwoodz.co.za" className="hover:text-gold transition-colors">
                  hello@iwoodz.co.za
                </a>
              </p>
              <p>
                <a href="tel:+27000000000" className="hover:text-gold transition-colors">
                  +27 (0) 00 000 0000
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
              {["PROJECTS", "SHOWROOM", "WHY iWOODZ CREATION", "DESIGN CONSULTATION", "BROCHURE REQUEST"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors tracking-wide">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal / Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Legal</p>
            <ul className="space-y-2">
              {["CONTACT US", "TERMS & CONDITIONS", "PRIVACY POLICY", "WARRANTY"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors tracking-wide">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Tagline */}
          <div className="hidden lg:block">
            <p
              className="font-serif text-2xl text-white/20 leading-snug italic"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              "Crafted with intention. Built to last."
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
