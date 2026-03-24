import { useState, useRef, useEffect } from "react";
import { Search, ShoppingCart, User, Menu, X, Plus, Minus } from "lucide-react";

const navCategories = [
  {
    label: "Kopfbedeckungen",
    href: "#",
    subcategories: ["Helme", "Kappen", "Mützen", "Stirnbänder"],
  },
  {
    label: "Oberteile",
    href: "#",
    subcategories: ["T-Shirts", "Poloshirts", "Hemden", "Jacken", "Westen", "Pullover"],
  },
  {
    label: "Hosen",
    href: "#",
    subcategories: ["Bundhosen", "Latzhosen", "Shorts", "Schnittschutzhosen"],
  },
  {
    label: "Schuhe",
    href: "#",
    subcategories: ["Sicherheitsschuhe S1", "Sicherheitsschuhe S3", "Schnittschutzschuhe", "Berufsschuhe"],
  },
  {
    label: "Handschutz",
    href: "#",
    subcategories: ["Arbeitshandschuhe", "Schnittschutzhandschuhe", "Winterhandschuhe"],
  },
  {
    label: "Zubehör",
    href: "#",
    subcategories: ["Gürtel", "Knieschoner", "Socken", "Taschen"],
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setActiveCategory(null);
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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

      {/* Main Header — Strauss-inspired minimal bar */}
      <header className="sticky top-0 z-50 bg-background border-b border-border/40">
        <div className="h-14 lg:h-16 flex items-center px-4 lg:px-8">
          {/* Left: Menu trigger + Logo */}
          <div className="flex items-center gap-3 lg:gap-5 flex-shrink-0">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2.5 text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Menü öffnen"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
              <span className="hidden sm:inline text-[11px] font-bold uppercase tracking-[0.15em]">
                Produkte
              </span>
            </button>

            <div className="w-px h-6 bg-border/60 hidden sm:block" />

            <a href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground text-[10px] font-black leading-none">K</span>
              </div>
              <span className="text-lg font-black tracking-tight hidden sm:inline">
                KPW
              </span>
            </a>
          </div>

          {/* Center: Search bar (desktop) */}
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

          {/* Right: Action icons */}
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

        {/* Mobile Search (expandable) */}
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

      {/* Full-screen navigation overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex" style={{ top: "calc(3.5rem + 33px)" }}>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Nav panel — single list with hover/click expand */}
          <div className="relative w-full max-w-sm bg-background border-r border-border/40 h-full overflow-y-auto animate-in slide-in-from-left-4 duration-300">
            <nav className="py-2">
              <div className="px-5 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/30">
                  Kategorien
                </p>
              </div>

              {navCategories.map((cat, i) => (
                <CategoryItem
                  key={cat.label}
                  category={cat}
                  isOpen={activeCategory === i}
                  onToggle={() => setActiveCategory(activeCategory === i ? null : i)}
                  onHover={() => setActiveCategory(i)}
                />
              ))}

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
        </div>
      )}
    </>
  );
};

export default Header;
