interface PageHeroProps {
  /** Image source — replace with real asset path */
  src: string;
  alt: string;
  /** "60vh" (default) for interior pages, "screen" for full-viewport showroom hero */
  height?: "60vh" | "screen";
  /** Show a subtle bottom gradient — useful for full-screen hero */
  showGradient?: boolean;
  /** Tailwind object-position class, e.g. "object-top", "object-bottom" */
  objectPosition?: string;
}

export function PageHero({ src, alt, height = "60vh", showGradient = false, objectPosition = "object-center" }: PageHeroProps) {
  const heightClass = height === "screen" ? "h-[calc(100vh-100px)]" : "h-[45vh] sm:h-[55vh] md:h-[60vh]";

  return (
    <section className={`relative ${heightClass} w-full overflow-hidden`}>
      {/* Replace with <Image> from next/image and real asset */}
      <img src={src} alt={alt} className={`absolute inset-0 w-full h-full object-cover ${objectPosition}`} />
      {showGradient && (
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      )}
    </section>
  );
}
