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
  <section className="py-16 md:py-24">
    <div className="container">
      <p className="section-label">{label}</p>
      <h2 className="section-title mb-10">{title}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <a
            key={product.name}
            href="#"
            className="group block rounded-lg overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors"
          >
            <div className="relative aspect-square">
              <div className="image-placeholder absolute inset-0" />
              {product.isNew && (
                <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-sm">
                  Neu
                </span>
              )}
            </div>
            <div className="p-4 space-y-1">
              <h3 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-xs text-muted-foreground">{product.category}</p>
              <span className="inline-flex items-center gap-1 text-xs text-primary font-medium pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
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
