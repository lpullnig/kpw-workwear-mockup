import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    badge: "Frühjahr / Sommer 2026",
    headline: "Leichte Übergangsjacken & Westen",
    subheadline: "Für den perfekten Start in die warme Saison.",
    cta: "Jetzt entdecken",
    products: ["Hybridjacke Classic", "Steppweste Thermo"],
  },
  {
    badge: "Neuheiten",
    headline: "Leichte Sicherheitsschuhe für jeden Einsatz",
    subheadline: "Komfort und Schutz — den ganzen Tag.",
    cta: "Zur Kollektion",
    products: ["Spirit S1PS", "Pioneer S3S"],
  },
  {
    badge: "Sommerhits",
    headline: "Arbeitsshorts für heiße Arbeitstage",
    subheadline: "Maximale Bewegungsfreiheit bei Hitze.",
    cta: "Alle Shorts ansehen",
    products: ["Shorts Classic", "Shorts Stretch"],
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

  const slide = slides[current];

  return (
    <section className="relative w-full h-[75vh] sm:h-[82vh] lg:h-[90vh] overflow-hidden">
      {/* Background images */}
      {slides.map((_, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="image-placeholder absolute inset-0" />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />

      {/* Main content - bottom left */}
      <div className="absolute bottom-0 left-0 right-0 pb-28 sm:pb-32 lg:pb-36">
        <div className="container">
          <div
            key={current}
            className="animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
              {slide.badge}
            </span>
            {/* Strauss-style separator */}
            <div className="w-12 h-[2px] bg-primary mb-5" />
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-[0.92] max-w-3xl mb-4 tracking-tight">
              {slide.headline}
            </h1>
            <p className="text-foreground/50 text-sm sm:text-base mb-7 max-w-md">
              {slide.subheadline}
            </p>
            <Button variant="brand" size="lg" className="uppercase tracking-widest text-xs px-8 rounded-full">
              {slide.cta}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating product strip at bottom-right (Strauss-inspired) */}
      <div className="absolute bottom-6 right-6 hidden lg:flex items-center gap-3 bg-card/80 backdrop-blur-xl rounded-full px-2 py-2 border border-border/50">
        {slide.products.map((name, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full image-placeholder border-2 border-border/30" />
            {i === slide.products.length - 1 && (
              <div className="pr-2">
                <p className="text-[10px] text-foreground/40 uppercase tracking-wider">Highlight</p>
                <p className="text-xs font-semibold whitespace-nowrap">{name}</p>
              </div>
            )}
          </div>
        ))}
        <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/85 transition-colors">
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Left/Right Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/30 hover:text-foreground hover:border-foreground/30 transition-all backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/30 hover:text-foreground hover:border-foreground/30 transition-all backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 lg:left-[calc(1.5rem+var(--container-padding,0px))] lg:translate-x-0 lg:bottom-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === current
                ? "bg-primary w-12"
                : "bg-foreground/15 w-6 hover:bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
