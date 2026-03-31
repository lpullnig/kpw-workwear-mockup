import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight, Minus, Plus, Shield, Wind, Feather, Droplets, ChevronDown, Paintbrush, Layers, Sparkles, Wrench, CheckCircle2 } from "lucide-react";
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

const detailBlocks = [
  { title: "Design", icon: Paintbrush, text: "Sportlich-elegantes Profil mit ergonomisch geformter Passform, verstärkter Fersen- und Zehenpartie für sicheren Halt sowie antistatisch abgestimmten Details. Die klare Linienführung und das moderne Außenmaterial harmonieren mit robusten Schutzfunktionen." },
  { title: "Material", icon: Layers, text: "Obermaterial aus widerstandsfähigem Ripstop-Nylon, Innenfutter DRY PLUS aus dicht gewebtem Polyester mit zusätzlichem Fersenschutz, Nano-Fiberglaseinsatz in der Zehenkappe und NWT-Penetrationsschutz aus ultraleichtem Vliesstoff." },
  { title: "Pflege", icon: Wrench, text: "Einfach mit milder Seife und lauwarmem Wasser reinigen, an der Luft trocknen lassen. Das strapazierfähige Nylongewebe ist formbeständig und behält auch nach längerer Nutzung seine schmutzabweisenden Eigenschaften." },
  { title: "Besonderheit", icon: Sparkles, text: "Integrierter ESD-Schutz für elektrische Entladungssicherheit, ultraleichter Durchtrittsschutz (NWT) und Nano-Fiberglaskappe für hohen Zehenschutz bei minimalem Gewicht. Die rutschfeste Sohle bietet optimalen Grip auf nassen und öligen Untergründen." },
];

const ProductDetailTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ActiveIcon = detailBlocks[activeTab].icon;

  return (
    <div className="!mt-10">
      <div className="flex border-b border-border/50">
        {detailBlocks.map((block, i) => {
          const Icon = block.icon;
          const isActive = activeTab === i;
          return (
            <button
              key={block.title}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors relative ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{block.title}</span>
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
              )}
            </button>
          );
        })}
      </div>
      <div className="py-6">
        <p className="text-foreground/50 text-sm leading-relaxed">{detailBlocks[activeTab].text}</p>
      </div>
    </div>
  );
};

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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-card border border-border/50">
                <img
                  src={images[selectedImage]}
                  alt="Fuzzy Low Shoe S1PS"
                  className="w-full h-full object-cover"
                  width={1024}
                  height={1024}
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-destructive text-destructive-foreground rounded-full">
                  Sale
                </span>
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
                  <span className="line-through text-muted-foreground font-normal text-xl mr-2">€99,95</span>
                  <span className="text-destructive">€85,95</span>
                  {" "}<span className="text-sm font-normal text-muted-foreground">exkl. MWSt.</span>
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-500">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Auf Lager – Sofort versandbereit
                  </span>
                </div>
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

        {/* Vorteile Icons */}
        <section className="border-t border-border/50">
          <div className="container py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "↩️", label: "Kostenloser Rückversand" },
                { icon: "🚚", label: "Gratis Versand in AT" },
                { icon: "🛡️", label: "Sichere Bezahlung" },
                { icon: "📞", label: "Persönliche Beratung" },
              ].map((v) => (
                <div key={v.label} className="flex items-center gap-3 justify-center text-sm text-muted-foreground">
                  <span className="text-xl">{v.icon}</span>
                  <span className="font-semibold">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

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

              <ProductDetailTabs />

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
        {/* Produktvorschläge */}
        <section className="border-t border-border/50">
          <div className="container py-16 md:py-20">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">Empfehlungen</p>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-10">
              Das könnte Sie auch interessieren
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { name: "Endurance Pro S3", price: "€109,95", img: imgMain },
                { name: "AirStep Light S1P", price: "€79,95", img: imgAngle },
                { name: "TerraForce Mid S3", price: "€124,95", img: imgSole },
                { name: "ComfortWalk S1PS", price: "€89,95", img: imgTop },
              ].map((item) => (
                <a key={item.name} href="#" className="group block rounded-xl overflow-hidden border border-border/50 bg-card hover:shadow-lg hover:shadow-primary/10 transition-all">
                  <div className="aspect-square overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={512} height={512} />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-sm font-black text-foreground">{item.price}</p>
                    <p className="text-[10px] text-primary font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Zum Produkt →</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
