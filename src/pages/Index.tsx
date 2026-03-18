import Header from "@/components/Header";
import HeroSlideshow from "@/components/HeroSlideshow";
import CategoryTiles from "@/components/CategoryTiles";
import LogoserviceSection from "@/components/LogoserviceSection";
import ProductGrid from "@/components/ProductGrid";
import BeratungSection from "@/components/BeratungSection";

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

    {/* Newsletter & Footer */}
    <section className="py-16 bg-card border-t border-border">
      <div className="container text-center max-w-lg">
        <h2 className="text-xl font-bold uppercase tracking-wide mb-3">Newsletter abonnieren</h2>
        <p className="text-foreground/50 text-sm mb-6">
          Erhalten Sie regelmäßig Informationen zu neuen Produkten und attraktiven Angeboten.
        </p>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Ihre E-Mail-Adresse"
            className="flex-1 bg-background border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-primary/85 transition-colors"
          >
            Abonnieren
          </button>
        </form>
      </div>
    </section>

    <footer className="py-6 border-t border-border">
      <div className="container text-center">
        <p className="text-xs text-foreground/30">
          © 2026 KPW — Arbeitskleidung & Sicherheitsschuhe · Klagenfurt, Kärnten
        </p>
      </div>
    </footer>
  </div>
);

export default Index;
