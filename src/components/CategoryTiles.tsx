import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Forst & Schnittschutz" },
  { name: "Arbeitsschuhe" },
  { name: "Hybrid- & Übergangsjacken" },
  { name: "Shorts & Bundhosen" },
];

const CategoryTiles = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      {/* Strauss-style header with separator */}
      <div className="mb-12">
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
          Sortiment
        </p>
        <div className="w-10 h-[2px] bg-primary mb-5" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
          Unsere Kategorien
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href="#"
            className="group relative aspect-[3/4] rounded-lg overflow-hidden"
          >
            <div className="image-placeholder absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <div className="w-8 h-[2px] bg-primary mb-3 transition-all group-hover:w-12" />
              <h3 className="font-bold text-sm sm:text-base uppercase tracking-wide leading-tight mb-3">
                {cat.name}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
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
