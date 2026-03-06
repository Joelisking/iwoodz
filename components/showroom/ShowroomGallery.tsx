const galleryItems = [
  {
    seed: "showroom-gallery-1",
    label: "Handcrafted Kitchens",
    aspect: "aspect-3/4",
  },
  {
    seed: "showroom-gallery-2",
    label: "Bespoke Storage",
    aspect: "aspect-3/4",
  },
  {
    seed: "showroom-gallery-3",
    label: "Living Spaces",
    aspect: "aspect-3/4",
  },
];

export function ShowroomGallery() {
  return (
    <section className="bg-ink px-4 py-4">
      {/* Section label */}
      <div className="flex items-center gap-6 px-4 pb-4">
        <div className="h-px flex-1 bg-white/10" />
        <p className="text-white/30 text-[10px] tracking-[0.4em] uppercase shrink-0">
          Inside the Showroom
        </p>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      {/* Three-column editorial grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {galleryItems.map(({ seed, label, aspect }) => (
          <div key={seed} className="relative group overflow-hidden">
            <img
              src={`https://picsum.photos/seed/${seed}/800/1000`}
              alt={`${label} — replace with real showroom photo`}
              className={`w-full ${aspect} object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
            />
            {/* Hover reveal overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <div>
                <div className="h-px w-8 bg-gold mb-3 translate-x-[-8px] group-hover:translate-x-0 transition-transform duration-500" />
                <p className="text-white text-xs tracking-[0.3em] uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  {label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
