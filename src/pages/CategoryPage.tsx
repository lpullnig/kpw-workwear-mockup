import Header from "@/components/Header";
import { ArrowRight, ChevronRight, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

import heroImg from "@/assets/category-hero-shoes.jpg";
import shoeResponderMid from "@/assets/shoe-responder-mid.jpg";
import shoeSpiritMid from "@/assets/shoe-spirit-mid.jpg";
import shoeExoticMid from "@/assets/shoe-exotic-mid.jpg";
import shoePioneerMid from "@/assets/shoe-pioneer-mid.jpg";
import shoeResponderLow from "@/assets/shoe-responder-low.jpg";
import shoeSpiritLow from "@/assets/shoe-spirit-low.jpg";
import shoeExoticLow from "@/assets/shoe-exotic-low.jpg";
import shoePioneerLow from "@/assets/shoe-pioneer-low.jpg";
import shoeJourney from "@/assets/shoe-journey.jpg";
import shoeUniqueLow from "@/assets/shoe-unique-low.jpg";

const products = [
  { name: "RESPONDER MID BOOT S3S", price: "€109,95", priceNote: "exkl. MWSt.", variants: ["BLACK/BLUE"], isNew: true, image: shoeResponderMid },
  { name: "SPIRIT MID BOOT S1PS", price: "€95,95", priceNote: "exkl. MWSt.", variants: ["BLACK"], isNew: true, image: shoeSpiritMid },
  { name: "EXOTIC MID BOOT S1PS", price: "€95,95", priceNote: "exkl. MWSt.", variants: ["BLACK"], image: shoeExoticMid },
  { name: "PIONEER MID BOOT S3", price: "€95,95", priceNote: "exkl. MWSt.", variants: ["BLACK"], image: shoePioneerMid },
  { name: "RESPONDER LOW SHOE S3S", price: "€99,95", priceNote: "exkl. MWSt.", variants: ["BLACK/BLUE"], isNew: true, image: shoeResponderLow },
  { name: "SPIRIT LOW SHOE S1PS", price: "€87,95", priceNote: "exkl. MWSt.", variants: ["BLACK"], image: shoeSpiritLow },
  { name: "EXOTIC LOW SHOE S1PS", price: "€87,95", priceNote: "exkl. MWSt.", variants: ["BLACK"], image: shoeExoticLow },
  { name: "PIONEER LOW SHOE S3", price: "€87,95", priceNote: "exkl. MWSt.", variants: ["BLACK"], image: shoePioneerLow },
  { name: "JOURNEY SHOE S3S", price: "€90,95", priceNote: "exkl. MWSt.", variants: ["GREY"], image: shoeJourney },
  { name: "UNIQUE LOW SHOE S1PS", price: "€84,95", priceNote: "exkl. MWSt.", variants: ["BLACK/GREEN"], image: shoeUniqueLow },
];

const sortOptions = ["Meistverkauft", "Preis aufsteigend", "Preis absteigend", "Neueste"];

const CategoryPage = () => {
  const [sortBy, setSortBy] = useState("Meistverkauft");

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img src={heroImg} alt="Bequeme Sicherheitsschuhe" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        {/* Breadcrumb */}
        <div className="container pt-6 pb-2">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <ChevronRight className="w-3 h-3" />
            <a href="#" className="hover:text-foreground transition-colors">Schuhe</a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">Bequeme Sicherheitsschuhe</span>
          </nav>
        </div>

        {/* Title & Description */}
        <div className="container py-8">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Kollektion</p>
          <div className="w-10 h-[2px] bg-primary mb-5" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
            Bequeme Sicherheitsschuhe
          </h1>
          <p className="text-foreground/50 text-sm md:text-base max-w-3xl leading-relaxed">
            Bequeme Sicherheitsschuhe nach EN ISO 20345 für alle, die täglich viele Stunden stehen oder laufen.
            Unsere Modelle kombinieren geprüften Schutz mit ergonomischer Passform, stoßdämpfender Sohle
            und spürbarer Entlastung – für mehr Komfort im Arbeitsalltag.
          </p>
        </div>

        {/* Free Shipping Banner */}
        <div className="container pb-8">
          <div className="bg-primary/10 border border-primary/20 rounded-lg px-6 py-4 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-primary">
              Versandkostenfrei in ganz Österreich
            </p>
            <p className="text-xs text-foreground/50 mt-1">
              Alle Sicherheitsschuhe liefern wir kostenlos innerhalb Österreichs – ohne Mindestbestellwert, ohne versteckte Gebühren.
            </p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="container pb-6">
          <div className="flex items-center justify-between border-b border-border/50 pb-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{products.length}</span> Produkte
            </p>
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-sm text-foreground border border-border/50 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary/50"
              >
                {sortOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-card">{opt}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="container pb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <a key={product.name} href="#" className="group block">
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-card border border-border/50 group-hover:border-primary/20 transition-all group-hover:shadow-xl group-hover:shadow-primary/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
                      Neu
                    </span>
                  )}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="w-6 h-[1px] bg-border" />
                  <p className="text-sm font-semibold text-foreground">
                    {product.price} <span className="text-[10px] text-muted-foreground font-normal">{product.priceNote}</span>
                  </p>
                  {product.variants.length > 0 && (
                    <p className="text-[10px] uppercase tracking-widest text-foreground/30 font-medium">
                      {product.variants.join(" · ")}
                    </p>
                  )}
                  <span className="inline-flex items-center gap-1 text-xs text-primary font-semibold pt-1 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Zum Produkt <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* SEO Content */}
        <section className="border-t border-border/50 bg-card">
          <div className="container py-16 max-w-4xl">
            <h2 className="text-xl font-black uppercase tracking-tight mb-6">
              Bequeme Sicherheitsschuhe kaufen – Schutz & Komfort für lange Arbeitstage
            </h2>
            <div className="prose prose-sm prose-invert max-w-none text-foreground/60 space-y-4">
              <p>
                Bequeme Sicherheitsschuhe sind unverzichtbar für alle, die täglich viele Stunden stehen oder laufen.
                In Handwerk, Industrie, Logistik und Bauwesen müssen Schuhe nicht nur schützen, sondern auch dauerhaft entlasten.
              </p>
              <h3 className="text-foreground text-base font-bold uppercase tracking-tight !mt-8">
                Warum sind bequeme Sicherheitsschuhe so wichtig?
              </h3>
              <p>
                Wer täglich viele Stunden steht oder läuft, weiß: Unbequeme Schuhe führen schnell zu Ermüdung,
                Druckstellen und Rückenproblemen. Bequeme Sicherheitsschuhe entlasten Füße und Gelenke durch:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ergonomische Passform</li>
                <li>Stoßdämpfende Zwischensohlen</li>
                <li>Gepolsterter Fersenbereich</li>
                <li>Flexibles, anpassungsfähiges Obermaterial</li>
              </ul>
              <h3 className="text-foreground text-base font-bold uppercase tracking-tight !mt-8">
                Welche Merkmale machen einen Sicherheitsschuh wirklich bequem?
              </h3>
              <ul className="list-none pl-0 space-y-3">
                <li><strong className="text-foreground">Geringes Eigengewicht</strong><br />Weniger Belastung bei langen Laufwegen.</li>
                <li><strong className="text-foreground">Hochwertige Dämpfung</strong><br />Entlastet Ferse und Vorfuß bei hartem Untergrund.</li>
                <li><strong className="text-foreground">Anatomische Passform</strong><br />Verhindert Druckstellen und Reibung.</li>
                <li><strong className="text-foreground">Atmungsaktive Materialien</strong><br />Reduzieren Schwitzen und erhöhen den Tragekomfort.</li>
              </ul>
              <h3 className="text-foreground text-base font-bold uppercase tracking-tight !mt-8">
                Bequeme Sicherheitsschuhe in Österreich kaufen – direkt bei KPW
              </h3>
              <p>
                Wer täglich viele Stunden arbeitet, braucht Sicherheitsschuhe, die nicht nur schützen, sondern
                dauerhaft entlasten. Als österreichischer Anbieter stehen wir für persönliche Beratung,
                zuverlässige Lieferung und praxisnahe Lösungen für Profis.
              </p>
              <div className="bg-secondary/50 rounded-lg p-6 !mt-8">
                <h4 className="text-foreground text-sm font-bold uppercase tracking-wider mb-3">Für Firmenkunden bieten wir:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Attraktive Staffelpreise</li>
                  <li>Individuelle Sonderkonditionen</li>
                  <li>Persönliche Beratung</li>
                  <li>Österreichweiter Außendienst</li>
                  <li>Unterstützung bei Teamausstattungen</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border/30 text-sm">
                  <p>📞 <strong className="text-foreground">Telefon:</strong> +43 800 286796</p>
                  <p>✉ <strong className="text-foreground">E-Mail:</strong> office@kp-workwear.com</p>
                </div>
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

export default CategoryPage;
