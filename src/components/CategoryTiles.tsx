import { ArrowRight } from "lucide-react";

const categories = [
  "Forst & Schnittschutz",
  "Arbeitsschuhe",
  "Hybrid- & Übergangsjacken",
  "Shorts & Bundhosen",
];

const CategoryTiles = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <p className="section-label">Sortiment</p>
      <h2 className="section-title mb-10">Unsere Kategorien</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <a
            key={cat}
            href="#"
            className="group relative aspect-square rounded-lg overflow-hidden"
          >
            <div className="image-placeholder absolute inset-0 transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent transition-colors group-hover:from-background/90" />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
              <span className="font-semibold text-sm md:text-base leading-tight">
                {cat}
              </span>
              <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default CategoryTiles;
