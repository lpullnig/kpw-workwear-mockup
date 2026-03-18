import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    badge: "Frühjahr / Sommer 2026",
    headline: "Leichte Übergangsjacken & Westen",
    subheadline: "Für den perfekten Start in die warme Saison.",
    cta: "Jetzt entdecken",
  },
  {
    badge: "Neuheiten",
    headline: "Leichte Sicherheitsschuhe für jeden Einsatz",
    subheadline: "Komfort und Schutz — den ganzen Tag.",
    cta: "Zur Kollektion",
  },
  {
    badge: "Sommerhits",
    headline: "Arbeitsshorts für heiße Arbeitstage",
    subheadline: "Maximale Bewegungsfreiheit bei Hitze.",
    cta: "Alle Shorts ansehen",
  },
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[85vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="image-placeholder absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
        </div>
      ))}

      {/* Content - bottom left, matching original */}
      <div className="absolute bottom-0 left-0 right-0 pb-16 sm:pb-20 lg:pb-24">
        <div className="container">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                i === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute pointer-events-none"
              }`}
            >
              {i === current && (
                <>
                  <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">
                    {slide.badge}
                  </span>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-[0.95] max-w-3xl mb-4 tracking-tight">
                    {slide.headline}
                  </h1>
                  <p className="text-foreground/60 text-sm sm:text-base mb-6 max-w-md">
                    {slide.subheadline}
                  </p>
                  <Button variant="brand" size="lg" className="uppercase tracking-widest text-xs px-8">
                    {slide.cta}
                  </Button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Left/Right Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-foreground/40 hover:text-foreground transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-foreground/40 hover:text-foreground transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-primary w-10"
                : "bg-foreground/20 w-6 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
