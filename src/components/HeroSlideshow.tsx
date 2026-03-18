import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

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

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative aspect-video md:aspect-[16/7]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="image-placeholder absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
            <div className="relative h-full flex items-center">
              <div className="container max-w-5xl">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded-sm mb-4">
                  {slide.badge}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-xl mb-3">
                  {slide.headline}
                </h1>
                <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-md">
                  {slide.subheadline}
                </p>
                <Button variant="brand" size="lg" className="gap-2">
                  {slide.cta}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current
                ? "bg-primary w-8"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
