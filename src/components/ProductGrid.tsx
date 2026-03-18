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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {products.map((product) => (
          <a
            key={product.name}
            href="#"
            className="group block"
          >
            <div className="relative aspect-square rounded-sm overflow-hidden mb-3">
              <div className="image-placeholder absolute inset-0 transition-transform duration-500 group-hover:scale-105" />
              {product.isNew && (
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-sm">
                  Neu
                </span>
              )}
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-xs text-foreground/40">{product.category}</p>
              <span className="inline-flex items-center gap-1 text-xs text-primary font-semibold pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
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
