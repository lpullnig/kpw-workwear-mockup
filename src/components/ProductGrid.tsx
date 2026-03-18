import { ArrowRight } from "lucide-react";

interface Product {
  name: string;
  category: string;
  isNew?: boolean;
}

interface ProductGridProps {
  label: string;
  title: string;
  products: Product[];
}

const ProductGrid = ({ label, title, products }: ProductGridProps) => (
  <section className="py-20 md:py-28">
    <div className="container">
      {/* Strauss-style header */}
      <div className="mb-12">
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
          {label}
        </p>
        <div className="w-10 h-[2px] bg-primary mb-5" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <a
            key={product.name}
            href="#"
            className="group block"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-card border border-border/50 group-hover:border-primary/20 transition-all group-hover:shadow-xl group-hover:shadow-primary/5">
              <div className="image-placeholder absolute inset-0 transition-transform duration-500 group-hover:scale-105" />
              {product.isNew && (
                <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
                  Neu
                </span>
              )}
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] uppercase tracking-widest text-foreground/30 font-medium">
                {product.category}
              </p>
              <div className="w-6 h-[1px] bg-border" />
              <h3 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <span className="inline-flex items-center gap-1 text-xs text-primary font-semibold pt-1 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Zum Produkt <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ProductGrid;
