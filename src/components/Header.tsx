import { useState, useRef, useEffect } from "react";
import { Search, ShoppingCart, User, Menu, X, Plus, Minus, ArrowRight } from "lucide-react";

const navCategories = [
  {
    label: "Kopfbedeckungen",
    href: "#",
    count: 48,
    subcategories: [
      { label: "Helme", count: 12 },
      { label: "Kappen", count: 18 },
      { label: "Mützen", count: 10 },
      { label: "Stirnbänder", count: 8 },
    ],
    promoTitle: "Kopfschutz für jeden Einsatz",
    promoText: "Sicherheit beginnt am Kopf — entdecken Sie unsere Auswahl.",
  },
  {
    label: "Oberteile",
    href: "#",
    count: 156,
    subcategories: [
      { label: "T-Shirts", count: 34 },
      { label: "Poloshirts", count: 22 },
      { label: "Hemden", count: 18 },
      { label: "Jacken", count: 40 },
      { label: "Westen", count: 24 },
      { label: "Pullover", count: 18 },
    ],
    promoTitle: "Neue Kollektion Frühjahr/Sommer",
    promoText: "Leichte Oberteile für warme Arbeitstage — jetzt entdecken.",
  },
  {
    label: "Hosen",
    href: "#",
    count: 94,
    subcategories: [
      { label: "Bundhosen", count: 32 },
      { label: "Latzhosen", count: 14 },
      { label: "Shorts", count: 20 },
      { label: "Schnittschutzhosen", count: 8 },
      { label: "Regenhosen", count: 6 },
      { label: "Zunfthosen", count: 14 },
    ],
    promoTitle: "Arbeitshosen für Profis",
    promoText: "Von der Baustelle bis zum Forst — die richtige Hose für jeden Job.",
  },
  {
    label: "Schuhe",
    href: "#",
    count: 72,
    subcategories: [
      { label: "Sicherheitsschuhe S1", count: 24 },
      { label: "Sicherheitsschuhe S3", count: 20 },
      { label: "Schnittschutzschuhe", count: 8 },
      { label: "Berufsschuhe", count: 12 },
      { label: "Gummistiefel", count: 8 },
    ],
    promoTitle: "Neue Sicherheitsschuhe",
    promoText: "Komfort trifft Schutz — leichte Modelle für den ganzen Tag.",
  },
  {
    label: "Handschutz",
    href: "#",
    count: 36,
    subcategories: [
      { label: "Arbeitshandschuhe", count: 14 },
      { label: "Schnittschutzhandschuhe", count: 10 },
      { label: "Winterhandschuhe", count: 12 },
    ],
    promoTitle: "Handschutz Neuheiten",
    promoText: "Maximaler Grip, maximaler Schutz.",
  },
  {
    label: "Zubehör",
    href: "#",
    count: 44,
    subcategories: [
      { label: "Gürtel", count: 8 },
      { label: "Knieschoner", count: 10 },
      { label: "Socken", count: 14 },
      { label: "Taschen", count: 12 },
    ],
    promoTitle: "Praktisches Zubehör",
    promoText: "Details, die den Unterschied machen.",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setHoveredCategory(null);
      setExpandedCategories(new Set());
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleExpand = (i: number) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const activeCat = hoveredCategory !== null ? navCategories[hoveredCategory] : null;

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4">
        <p className="text-[11px] font-bold tracking-wide uppercase">
          Kostenlose Beratung vor Ort —{" "}
          <a href="tel:+43463000000" className="underline underline-offset-2 hover:no-underline">
            Jetzt Termin vereinbaren
          </a>
        </p>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border/40">
        <div className="h-14 lg:h-16 flex items-center px-4 lg:px-8">
          <div className="flex items-center gap-3 lg:gap-5 flex-shrink-0">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2.5 text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Menü öffnen"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="hidden sm:inline text-[11px] font-bold uppercase tracking-[0.15em]">
                Produkte
              </span>
            </button>
            <div className="w-px h-6 bg-border/60 hidden sm:block" />
            <a href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground text-[10px] font-black leading-none">K</span>
              </div>
              <span className="text-lg font-black tracking-tight hidden sm:inline">KPW</span>
            </a>
          </div>

          <div className="flex-1 flex justify-center px-6 max-w-xl mx-auto hidden lg:flex">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
              <input
                type="text"
                placeholder="Artikelsuche"
                className="w-full bg-card border border-border/60 rounded-sm pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-0.5 ml-auto flex-shrink-0">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="lg:hidden p-2.5 text-foreground/50 hover:text-foreground transition-colors"
              aria-label="Suche"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>
            <button className="p-2.5 text-foreground/50 hover:text-foreground transition-colors" aria-label="Konto">
              <User className="w-[18px] h-[18px]" />
            </button>
            <button className="p-2.5 text-foreground/50 hover:text-foreground transition-colors relative" aria-label="Warenkorb">
              <ShoppingCart className="w-[18px] h-[18px]" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-primary-foreground text-[9px] font-black rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="lg:hidden border-t border-border/40 px-4 py-3 bg-background">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Artikelsuche"
                className="w-full bg-card border border-border/60 rounded-sm pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
        )}
      </header>

      {/* Mega Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex" style={{ top: "calc(3.5rem + 33px)" }}>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Left: Category list */}
          <div
            className="relative w-72 bg-background border-r border-border/40 h-full overflow-y-auto animate-in slide-in-from-left-4 duration-300 flex-shrink-0"
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <nav className="py-2">
              <div className="px-5 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/30">
                  Kategorien
                </p>
              </div>

              {navCategories.map((cat, i) => {
                const isHovered = hoveredCategory === i;
                const isExpanded = expandedCategories.has(i);

                return (
                  <div key={cat.label} onMouseEnter={() => setHoveredCategory(i)}>
                    <div
                      className={`flex items-center px-5 py-3 transition-colors cursor-pointer ${
                        isHovered ? "bg-card text-foreground" : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      {cat.subcategories.length > 0 && (
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleExpand(i); }}
                          className="mr-2 text-foreground/40 hover:text-foreground transition-colors"
                        >
                          {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </button>
                      )}
                      <a href={cat.href} className="flex-1 text-[13px] font-bold uppercase tracking-wide">
                        {cat.label}
                      </a>
                      <span className="text-[11px] text-foreground/25 ml-1">{cat.count}</span>
                    </div>

                    {/* Inline subcategory expand (mobile-style / click toggle) */}
                    {isExpanded && (
                      <div className="pb-1">
                        {cat.subcategories.map((sub) => (
                          <a
                            key={sub.label}
                            href="#"
                            className="flex items-center justify-between pl-11 pr-5 py-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
                          >
                            <span>{sub.label}</span>
                            <span className="text-[11px] text-foreground/20">{sub.count}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="mx-5 my-4 h-px bg-border/40" />

              <a href="#" className="block px-5 py-3 text-[13px] font-semibold uppercase tracking-wide text-primary hover:text-primary/80 transition-colors">
                Alle Produkte
              </a>
              <a href="#" className="block px-5 py-3 text-[13px] font-semibold uppercase tracking-wide text-foreground/50 hover:text-foreground transition-colors">
                Neuheiten
              </a>
              <a href="#" className="block px-5 py-3 text-[13px] font-semibold uppercase tracking-wide text-foreground/50 hover:text-foreground transition-colors">
                Sale
              </a>
            </nav>
          </div>

          {/* Right: Flyout detail panel (appears on hover) */}
          {activeCat && (
            <div
              className="relative bg-background border-r border-border/40 h-full overflow-y-auto animate-in slide-in-from-left-4 duration-200 flex-shrink-0"
              style={{ width: "calc(100vw - 18rem)", maxWidth: "56rem" }}
              onMouseEnter={() => {/* keep hovered */}}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="p-8 h-full flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-1">
                    {activeCat.label}
                  </h3>
                  <div className="w-10 h-[2px] bg-primary mb-3" />
                  <a href={activeCat.href} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                    Alle {activeCat.label} anzeigen
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Subcategories in columns */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1 mb-8">
                  {activeCat.subcategories.map((sub) => (
                    <a
                      key={sub.label}
                      href="#"
                      className="flex items-center justify-between py-2.5 text-sm text-foreground/60 hover:text-foreground border-b border-border/20 transition-colors group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{sub.label}</span>
                      <span className="text-[11px] text-foreground/20">{sub.count}</span>
                    </a>
                  ))}
                </div>

                {/* Promo area at bottom — image + text like Strauss */}
                <div className="mt-auto grid grid-cols-2 gap-4">
                  {/* Promo image card */}
                  <a href="#" className="group relative rounded-lg overflow-hidden aspect-[16/9]">
                    <div className="image-placeholder absolute inset-0 transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">
                        Highlights
                      </p>
                      <p className="text-sm font-bold leading-snug">
                        {activeCat.promoTitle}
                      </p>
                    </div>
                  </a>

                  {/* Promo text card */}
                  <div className="bg-card rounded-lg p-5 flex flex-col justify-between border border-border/30">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">
                        Empfehlung
                      </p>
                      <p className="text-sm font-bold mb-2">{activeCat.promoTitle}</p>
                      <p className="text-xs text-foreground/40 leading-relaxed">
                        {activeCat.promoText}
                      </p>
                    </div>
                    <a href="#" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mt-4 hover:text-primary/80 transition-colors">
                      Jetzt entdecken
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
