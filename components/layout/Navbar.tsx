"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Phone, Menu, X, ChevronDown } from "lucide-react";
import { NavPopover } from "./NavPopover";

type ActivePopover = "projects" | "why" | null;

const navLinks = [
  { label: "PROJECTS", key: "projects" as const, href: null },
  { label: "WHY iWOODZ CREATION", key: "why" as const, href: null },
  { label: "SHOWROOM", key: null, href: "/showroom" },
  { label: "CONTACT", key: null, href: "/contact" },
];

const linkClass =
  "flex items-center gap-1 text-xs uppercase tracking-[0.15em] text-white/80 hover:text-white transition-colors";

export function Navbar() {
  const [activePopover, setActivePopover] = useState<ActivePopover>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (key: ActivePopover) => {
    setActivePopover(activePopover === key ? null : key);
  };

  return (
    <>
      {activePopover && (
        <div className="fixed inset-0 z-40" onClick={() => setActivePopover(null)} />
      )}

      <nav className="sticky top-0 z-50 bg-navbar relative">
        <div className="flex items-center justify-between px-8 h-16">
          {/* Left: nav links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.href ? (
                <Link key={link.label} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.key)}
                  className={linkClass}
                >
                  {link.label}
                  <ChevronDown
                    size={12}
                    className={`transition-transform ${activePopover === link.key ? "rotate-180" : ""}`}
                  />
                </button>
              )
            )}
          </div>

          {/* Center: logo → home */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-center">
            <span
              className="font-serif text-base tracking-[0.35em] font-light text-white uppercase block"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              iWOODZ CREATION
            </span>
            <div className="mt-1 mx-auto h-px w-14 bg-gold/60" />
          </Link>

          {/* Right: icons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/brochure" className="text-white/70 hover:text-white transition-colors" aria-label="Brochure">
              <BookOpen size={18} />
            </Link>
            <a href="tel:+233000000000" className="text-white/70 hover:text-white transition-colors" aria-label="Call us">
              <Phone size={18} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Dropdown panel — left-aligned, auto-width */}
        {activePopover && (
          <div className="absolute left-8 top-full z-50">
            <NavPopover type={activePopover} />
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-navbar border-t border-white/10 px-6 py-4 space-y-3">
            {navLinks.map((link) => {
              const mobileHref = link.href ?? (link.key === "projects" ? "/interiors" : "/why-iwoodz");
              return (
                <Link key={link.label} href={mobileHref}
                  onClick={() => setMobileOpen(false)}
                  className="block text-xs uppercase tracking-[0.15em] text-white/80 hover:text-white py-1">
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
}
