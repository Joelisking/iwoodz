"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  { src: "/New%20Batch%20/IMG_0831.jpg" },
  { src: "/wardrope/IMG_5292.JPG" },
  { src: "/Pergola/RAF_1412.jpg" },
];

const N = galleryItems.length;

export function ShowroomGallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % N);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((i) => (i - 1 + N) % N);
  const next = () => setCurrent((i) => (i + 1) % N);

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

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {galleryItems.map(({ src }) => (
            <div key={src} className="w-full shrink-0">
              <img
                src={src}
                alt="iWoodz Creation showroom"
                className="w-full aspect-video object-cover"
              />
            </div>
          ))}
        </div>

        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {galleryItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-white" : "w-1.5 bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
