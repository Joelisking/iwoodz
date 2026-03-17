"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Replace these with real asset paths when available
const SLIDES = [
  { id: 1, src: "/villa%20d_tuger/DJI_0225.JPG" },
  { id: 2, src: "/Pergola/RAF_1376.jpg" },
  { id: 3, src: "/Pergola/RAF_1412.jpg" },
  { id: 4, src: "/villa%20d_tuger/IMG_2917.JPG" },
];

const N = SLIDES.length;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % N);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((i) => (i - 1 + N) % N);
  const next = () => setCurrent((i) => (i + 1) % N);

  return (
    <section className="relative h-[calc(100vh-100px)] w-full overflow-hidden">
      {/* Sliding image track */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{
          width: `${N * 100}%`,
          transform: `translateX(-${(current * 100) / N}%)`,
        }}
      >
        {SLIDES.map((slide) => (
          <div
            key={slide.id}
            className="relative h-full"
            style={{ width: `${100 / N}%` }}
          >
            {/* Replace with <Image> from next/image + real assets */}
            <img
              src={slide.src}
              alt="iWoodz Creation project"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Static gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent pointer-events-none" />

      {/* Static text overlay */}
      <div className="absolute bottom-20 left-8 md:left-16 z-10 max-w-lg">
        <p className="text-xs uppercase tracking-[0.25em] text-white/70 mb-3">
          WOODWORK
        </p>
        <h1
          className="font-serif text-4xl md:text-6xl text-white font-light leading-tight mb-5"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Crafted For
          <br />
          Every Space
        </h1>
        <p className="text-white/75 text-sm md:text-base max-w-sm mb-8 leading-relaxed">
          From wood kitchens to container builds, iWoodz Creation brings
          your vision to life.
        </p>
        <Button
          variant="outline"
          className="border-white text-white bg-transparent hover:bg-white hover:text-ink uppercase tracking-[0.18em] text-xs px-8 h-12"
        >
          EXPLORE OUR PROJECTS
        </Button>
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors p-2"
        aria-label="Previous slide"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors p-2"
        aria-label="Next slide"
      >
        <ChevronRight size={30} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
