import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Kopfbedeckungen", href: "#" },
  { label: "Oberteile", href: "#" },
  { label: "Hosen", href: "#" },
  { label: "Schuhe", href: "#" },
  { label: "Sonstiges", href: "#" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2.5 px-4">
        <p className="text-[11px] sm:text-xs font-bold tracking-wide uppercase">
          Wir beraten Sie gerne persönlich!{" "}
          <a href="tel:+43463000000" className="underline underline-offset-2 hover:no-underline">
            Rufen Sie uns gleich an
          </a>
        </p>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-black">K</span>
            </div>
            <span className="text-xl font-black tracking-tight">
              KPW
            </span>
          </a>

          {/* Desktop Nav — Strauss-style with simple uppercase links */}
          <nav className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-5 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground/60 hover:text-foreground transition-colors group"
              >
                {item.label}
                <ChevronDown className="inline-block w-3 h-3 ml-0.5 opacity-40" />
                <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* Actions — Strauss-style minimal icons */}
          <div className="flex items-center gap-1">
            <button className="p-2.5 text-foreground/50 hover:text-foreground transition-colors">
              <User className="w-[18px] h-[18px]" />
            </button>
            <button className="p-2.5 text-foreground/50 hover:text-foreground transition-colors">
              <Search className="w-[18px] h-[18px]" />
            </button>
            <button className="p-2.5 text-foreground/50 hover:text-foreground transition-colors relative">
              <ShoppingCart className="w-[18px] h-[18px]" />
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-primary text-primary-foreground text-[8px] font-black rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="lg:hidden p-2.5 text-foreground/50 hover:text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container py-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-2 py-3.5 text-sm font-bold uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors border-b border-border/30 last:border-0"
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 opacity-30 -rotate-90" />
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
