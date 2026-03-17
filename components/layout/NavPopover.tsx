import Link from "next/link";
import { InstagramIcon } from "@/components/shared/icons/InstagramIcon";
import { TikTokIcon } from "@/components/shared/icons/TikTokIcon";
import { FacebookIcon } from "@/components/shared/icons/FacebookIcon";

const projectsColumns = [
  {
    heading: "PROJECTS",
    links: [
      { label: "Interiors", href: "/interiors" },
      { label: "Dog Kennels", href: "/order/kennels" },
      { label: "Handwash Stations", href: "/order/handwash-station" },
      { label: "Container Works", href: "/projects/container-works" },
      { label: "Constructions", href: "/projects/constructions" },
      { label: "Other Projects", href: "/projects/other-projects" },
    ],
  },
];

const whyColumns = [
  {
    heading: "WHY iWOODZ CREATION?",
    links: [
      { label: "Why Choose Us?", href: "/why-iwoodz" },
      { label: "Our Design Service", href: "/services/design" },
      { label: "Our Installation Service", href: "/services/installation" },
      { label: "Our Construction Service", href: "/services/construction" },
    ],
  },
];

const journeyLinks = [
  { label: "Our Brochure", href: "/brochure" },
  { label: "Design Consultation", href: "/design-consultation" },
  { label: "Contact Us", href: "/contact" },
];

interface NavPopoverProps {
  type: "projects" | "why";
}

export function NavPopover({ type }: NavPopoverProps) {
  const columns = type === "projects" ? projectsColumns : whyColumns;

  return (
    <div className="bg-linen shadow-2xl border-t-2 border-gold/30 flex">
      {/* Main link columns */}
      <div className="flex gap-10 px-10 py-8">
        {columns.map((col) => (
          <div key={col.heading} className="min-w-[155px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink mb-3">
              {col.heading}
            </p>
            <div className="h-px bg-ink/12 mb-3" />
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink/60 hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Vertical divider */}
      <div className="w-px bg-ink/10 my-5" />

      {/* Start Your Journey column */}
      <div className="px-8 py-8 min-w-[185px]">
        <p
          className="italic text-ink/40 mb-3"
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.05rem" }}
        >
          Start Your Journey
        </p>
        <div className="h-px bg-ink/12 mb-3" />
        <ul className="space-y-2 mb-7">
          {journeyLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-ink/60 hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 text-ink/35">
          <a href="#" className="hover:text-ink transition-colors" aria-label="Instagram">
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-ink transition-colors" aria-label="TikTok">
            <TikTokIcon className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-ink transition-colors" aria-label="Facebook">
            <FacebookIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Image panel — projects dropdown only */}
      {type === "projects" && (
        <>
          <div className="w-px bg-ink/10 my-5" />
          <div className="w-44 shrink-0 overflow-hidden">
            {/* Replace with real project image */}
            <img
              src="/Pergola/RAF_1376.jpg"
              alt="iWoodz Creation — rooftop bar project"
              className="w-full h-full object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
}
