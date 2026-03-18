import Header from "@/components/Header";
import HeroSlideshow from "@/components/HeroSlideshow";
import CategoryTiles from "@/components/CategoryTiles";
import LogoserviceSection from "@/components/LogoserviceSection";
import ProductGrid from "@/components/ProductGrid";
import BeratungSection from "@/components/BeratungSection";
import { ArrowRight } from "lucide-react";

const schnittschutzProducts = [
  { name: "Francital Booster Hose", category: "Schnittschutzhose Sommer", isNew: true },
  { name: "Booster KI Schnittschutzschuh", category: "Schnittschutzschuhe", isNew: true },
  { name: "Nebias Schnittschutzjacke", category: "Schnittschutzjacken", isNew: true },
  { name: "Forstshirt", category: "Forstbekleidung" },
];

const sicherheitsschuheProducts = [
  { name: "Sir Safety Spirit S1PS", category: "Sicherheitsschuhe S1", isNew: true },
  { name: "Sir Safety Pioneer S3S", category: "Sicherheitsschuhe S3", isNew: true },
  { name: "Sir Safety Exotic", category: "Sicherheitsschuhe", isNew: true },
  { name: "Sir Safety Unique", category: "Sicherheitsschuhe" },
];

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <HeroSlideshow />
      <CategoryTiles />
      <LogoserviceSection />
      <ProductGrid
        label="Im Fokus"
        title="Schnittschutz im Fokus"
        products={schnittschutzProducts}
      />
      <BeratungSection />
      <ProductGrid
        label="Im Fokus"
        title="Sicherheitsschuhe im Fokus"
        products={sicherheitsschuheProducts}
      />
    </main>

    {/* Newsletter - Strauss-inspired with accent separator */}
    <section className="py-20 bg-card border-t border-border/50">
      <div className="container text-center max-w-xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">
          Immer informiert
        </p>
        <div className="w-10 h-[2px] bg-primary mx-auto mb-5" />
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3">
          Newsletter abonnieren
        </h2>
        <p className="text-foreground/40 text-sm mb-8">
          Erhalten Sie regelmäßig Informationen zu neuen Produkten und attraktiven Angeboten.
        </p>
        <form className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Ihre E-Mail-Adresse"
            className="flex-1 bg-background border border-border rounded-full px-5 py-3 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-primary/85 transition-colors flex items-center gap-2"
          >
            Abonnieren
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </section>

    <footer className="py-6 border-t border-border/30">
      <div className="container text-center">
        <p className="text-[11px] text-foreground/25 tracking-wide">
          © 2026 KPW — Arbeitskleidung & Sicherheitsschuhe · Klagenfurt, Kärnten
        </p>
      </div>
    </footer>
  </div>
);

export default Index;
