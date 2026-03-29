import Header from "@/components/Header";
import { ArrowRight, ChevronRight, Minus, Plus, Shield, Wind, Feather, Droplets } from "lucide-react";
import { useState } from "react";

import b2bImg from "@/assets/b2b-beratung.jpg";

import imgMain from "@/assets/product-fuzzy-main.jpg";
import imgSole from "@/assets/product-fuzzy-sole.jpg";
import imgTop from "@/assets/product-fuzzy-top.jpg";
import imgAngle from "@/assets/product-fuzzy-angle.jpg";

const images = [imgMain, imgAngle, imgSole, imgTop];

const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];

const features = [
  { icon: Shield, label: "S1PS SR Schutzklasse" },
  { icon: Feather, label: "Ultraleicht" },
  { icon: Wind, label: "Atmungsaktiv" },
  { icon: Droplets, label: "ESD-Schutz" },
];

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="container pt-6 pb-4">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <ChevronRight className="w-3 h-3" />
            <a href="/collections/bequeme-arbeitsschuhe" className="hover:text-foreground transition-colors">Bequeme Sicherheitsschuhe</a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">Fuzzy Low Shoe S1PS</span>
          </nav>
        </div>

        {/* Product Section */}
        <div className="container pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden bg-card border border-border/50">
                <img
                  src={images[selectedImage]}
                  alt="Fuzzy Low Shoe S1PS"
                  className="w-full h-full object-cover"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === i
                        ? "border-primary shadow-lg shadow-primary/20"
                        : "border-border/50 hover:border-primary/40"
                    }`}
                  >
                    <img src={img} alt={`Ansicht ${i + 1}`} className="w-full h-full object-cover" loading="lazy" width={256} height={256} />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2">SIR399 Series</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">
                  Fuzzy Low Shoe S1PS
                </h1>
                <p className="text-xs text-muted-foreground">MB3214 Z9-BLACK</p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <p className="text-3xl font-black text-foreground">
                  €85,95 <span className="text-sm font-normal text-muted-foreground">exkl. MWSt.</span>
                </p>
                <p className="text-xs text-primary font-semibold mt-1">✓ Versandkostenfrei in ganz Österreich</p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-card border border-border/50">
                    <f.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs font-semibold uppercase tracking-wider">{f.label}</span>
                  </div>
                ))}
              </div>

              {/* Size Selector */}
              <div className="border-t border-border/50 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  Grösse {selectedSize && <span className="text-primary">— {selectedSize}</span>}
                </p>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg text-sm font-bold transition-all ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                          : "bg-card border border-border/50 text-foreground hover:border-primary/50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="border-t border-border/50 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4">Menge</p>
                <div className="inline-flex items-center border border-border/50 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-card transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 h-12 flex items-center justify-center text-sm font-bold border-x border-border/50">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-card transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-[1.01] active:scale-[0.99]">
                In den Einkaufswagen legen
              </button>

              {/* Staffelpreise */}
              <button className="w-full py-3 border-2 border-primary/40 text-primary font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                Anfragen für Staffelpreise
              </button>

            </div>
          </div>
        </div>

        {/* Product Description */}
        <section className="border-t border-border/50 bg-card">
          <div className="container py-16 max-w-4xl">
            <h2 className="text-xl font-black uppercase tracking-tight mb-2">SIR399 Series</h2>
            <div className="w-10 h-[2px] bg-primary mb-8" />

            <div className="prose prose-sm prose-invert max-w-none text-foreground/60 space-y-6">
              <p>
                Der SIR399 SERIES ist ein robuster Arbeitsschuh, der höchste Sicherheitsstandards
                (EN ISO 20345 S1PS SR, EN 61340 ESD) erfüllt und dank ultraleichten Materialien
                optimalen Tragekomfort gewährleistet. Die Kombination aus strapazierfähigem Ripstop-Nylon,
                atmungsaktiver DRY PLUS-Fütterung und rutschfester EVA-Super-Foam-Sohle macht diesen Schuh
                zum idealen Begleiter für anspruchsvolle Arbeits- und Outdoor-Einsätze.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 !mt-10">
                {[
                  {
                    title: "Design",
                    text: "Sportlich-elegantes Profil mit ergonomisch geformter Passform, verstärkter Fersen- und Zehenpartie für sicheren Halt sowie antistatisch abgestimmten Details.",
                  },
                  {
                    title: "Material",
                    text: "Obermaterial aus widerstandsfähigem Ripstop-Nylon, Innenfutter DRY PLUS aus dicht gewebtem Polyester, Nano-Fiberglaseinsatz in der Zehenkappe und NWT-Penetrationsschutz.",
                  },
                  {
                    title: "Pflege",
                    text: "Einfach mit milder Seife und lauwarmem Wasser reinigen, an der Luft trocknen lassen. Das strapazierfähige Nylongewebe ist formbeständig und schmutzabweisend.",
                  },
                  {
                    title: "Besonderheit",
                    text: "Integrierter ESD-Schutz, ultraleichter Durchtrittsschutz (NWT) und Nano-Fiberglaskappe für hohen Zehenschutz bei minimalem Gewicht.",
                  },
                ].map((block) => (
                  <div key={block.title} className="bg-secondary/50 rounded-lg p-6">
                    <h3 className="text-foreground text-sm font-bold uppercase tracking-wider mb-3">{block.title}</h3>
                    <p className="text-foreground/50 text-sm leading-relaxed">{block.text}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* B2B CTA Section */}
        <section className="border-t border-border/50">
          <div className="container py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-border/50">
              <div className="aspect-[16/10] md:aspect-auto">
                <img src={b2bImg} alt="Persönliche Beratung vor Ort" className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
              </div>
              <div className="bg-card flex flex-col justify-center p-8 md:p-12">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">Für Firmenkunden</p>
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4">
                  Anprobe im Betrieb – einfach & unkompliziert
                </h2>
                <p className="text-sm text-foreground/50 leading-relaxed mb-6">
                  Unser österreichweiter Außendienst kommt gerne zur Anprobe in Ihr Unternehmen
                  und berät Sie persönlich zu passenden Sicherheitsschuhen. Profitieren Sie von
                  Staffelpreisen und individuellen Sonderkonditionen.
                </p>
                <a
                  href="/pages/grosskundenbetreuung"
                  className="inline-flex items-center gap-2 self-start px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-[1.02]"
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t border-border/30">
        <div className="container text-center">
          <p className="text-[11px] text-foreground/25 tracking-wide">
            © 2026 KPW — Arbeitskleidung & Sicherheitsschuhe · Klagenfurt, Kärnten
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
