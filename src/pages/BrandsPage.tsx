import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const brands = [
  { name: "Sir Safety", slug: "sir-safety", products: 24 },
  { name: "Francital", slug: "francital", products: 18 },
  { name: "Elten", slug: "elten", products: 32 },
  { name: "Uvex", slug: "uvex", products: 28 },
  { name: "Puma Safety", slug: "puma-safety", products: 15 },
  { name: "Haix", slug: "haix", products: 21 },
  { name: "Atlas", slug: "atlas", products: 19 },
  { name: "Albatros", slug: "albatros", products: 14 },
  { name: "Steitz Secura", slug: "steitz-secura", products: 11 },
  { name: "Cofra", slug: "cofra", products: 26 },
  { name: "Base Protection", slug: "base-protection", products: 17 },
  { name: "Mascot", slug: "mascot", products: 22 },
];

const BrandsPage = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <section className="container py-16 md:py-24">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">
          Unsere Partner
        </p>
        <div className="w-10 h-[2px] bg-primary mb-5" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
          Markenübersicht
        </h1>
        <p className="text-muted-foreground text-sm max-w-lg mb-12">
          Entdecken Sie die führenden Marken für Arbeitsschutz und Berufsbekleidung in unserem Sortiment.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              to={`/brands/${brand.slug}`}
              className="group relative bg-card border border-border/50 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:border-primary/40 hover:bg-card/80 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <span className="text-lg font-black text-foreground/70 group-hover:text-primary transition-colors">
                  {brand.name.split(" ").map((w) => w[0]).join("")}
                </span>
              </div>
              <h2 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {brand.name}
              </h2>
              <p className="text-[11px] text-muted-foreground">
                {brand.products} Produkte
              </p>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-lg" />
            </Link>
          ))}
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default BrandsPage;
