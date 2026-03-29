import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

    <Footer />
  </div>
);

export default Index;
