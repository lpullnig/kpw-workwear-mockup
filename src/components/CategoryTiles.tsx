import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Forst & Schnittschutz", span: "col-span-1" },
  { name: "Arbeitsschuhe", span: "col-span-1" },
  { name: "Hybrid- & Übergangsjacken", span: "col-span-1" },
  { name: "Shorts & Bundhosen", span: "col-span-1" },
];

const CategoryTiles = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <p className="section-label">Sortiment</p>
      <h2 className="section-title mb-10">Unsere Kategorien</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href="#"
            className="group relative aspect-[3/4] sm:aspect-square rounded-sm overflow-hidden"
          >
            <div className="image-placeholder absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <h3 className="font-bold text-sm sm:text-base uppercase tracking-wide leading-tight mb-2">
                {cat.name}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                Zur Kategorie <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default CategoryTiles;
