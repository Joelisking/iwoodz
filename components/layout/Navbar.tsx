"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Phone, Menu, X, ChevronDown } from "lucide-react";
import { NavPopover } from "./NavPopover";

type ActivePopover = "projects" | "why" | null;

const navLinks = [
  { label: "PROJECTS", key: "projects" as const },
  { label: "WHY iWOODZ CREATION", key: "why" as const },
  { label: "SHOWROOM", key: null },
  { label: "CONTACT", key: null },
];

export function Navbar() {
  const [activePopover, setActivePopover] = useState<ActivePopover>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (key: ActivePopover) => {
    if (!key) { setActivePopover(null); return; }
    setActivePopover(activePopover === key ? null : key);
  };

  return (
    <>
      {/* Overlay to close dropdowns on outside click */}
      {activePopover && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActivePopover(null)}
        />
      )}

      <nav className="sticky top-0 z-50 bg-navbar">
        {/* Main bar */}
        <div className="flex items-center justify-between px-8 h-16">
          {/* Left: Nav links (desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.key)}
                className="flex items-center gap-1 text-xs uppercase tracking-[0.15em] text-white/80 hover:text-white transition-colors"
              >
                {link.label}
                {link.key && (
                  <ChevronDown
                    size={12}
                    className={`transition-transform ${activePopover === link.key ? "rotate-180" : ""}`}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <span
              className="font-serif text-base tracking-[0.35em] font-light text-white uppercase block"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              iWOODZ CREATION
            </span>
            <div className="mt-1 mx-auto h-px w-14 bg-gold/60" />
          </div>

          {/* Right: CTA + icons (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="border-white/60 text-white bg-transparent hover:bg-white/10 hover:text-white uppercase tracking-[0.12em] text-xs"
            >
              REQUEST A CONSULTATION
            </Button>
            <button className="text-white/70 hover:text-white transition-colors" aria-label="Brochure">
              <BookOpen size={18} />
            </button>
            <button className="text-white/70 hover:text-white transition-colors" aria-label="Call us">
              <Phone size={18} />
            </button>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="lg:hidden text-white ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Dropdown panel */}
        {activePopover && (
          <div className="relative z-50">
            <NavPopover type={activePopover} />
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-navbar border-t border-white/10 px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a key={link.label} href="#" className="block text-xs uppercase tracking-[0.15em] text-white/80 hover:text-white py-1">
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button variant="outline" size="sm" className="border-white/60 text-white bg-transparent hover:bg-white/10 hover:text-white uppercase tracking-[0.12em] text-xs w-full">
                REQUEST A CONSULTATION
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
