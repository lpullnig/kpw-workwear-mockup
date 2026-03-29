import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Clock,
  Shield,
  Footprints,
  Award,
  Building2,
  Wrench,
  Factory,
  Truck,
  Sparkles,
  HardHat,
  Phone,
  Mail,
  Package,
  Users,
  BadgeCheck,
  RefreshCw,
  Stamp,
  Zap,
} from "lucide-react";

import heroImg from "@/assets/sir-safety-hero.jpg";
import brandImg from "@/assets/sir-safety-brand.jpg";

const usps = [
  {
    icon: MapPin,
    title: "Entwickelt in Italien",
    text: "Alle Produkte werden in Umbrien, im Herzen Italiens, designed.",
  },
  {
    icon: Clock,
    title: "Über 40 Jahre Erfahrung",
    text: "Seit der Gründung durch Gino Sirci steht die Marke für Innovation und Arbeitssicherheit.",
  },
  {
    icon: Award,
    title: "EN ISO 20345 zertifiziert",
    text: "Alle Sicherheitsschuhe erfüllen die europäische Norm für Fußschutz.",
  },
  {
    icon: Footprints,
    title: "Responder Sohlentechnologie",
    text: "Patentierte Dämpfung und Flexibilität bei jedem Schritt.",
  },
];

const categories = [
  {
    title: "Sicherheitsschuhe S1P",
    text: "Leicht und atmungsaktiv für Werkstatt, Lager und Montage.",
    cta: "S1P Modelle ansehen",
    href: "#",
  },
  {
    title: "Sicherheitsschuhe S3",
    text: "Wasserabweisend mit Durchtrittschutz. Der Allrounder für Baustelle und Industrie.",
    cta: "S3 Modelle ansehen",
    href: "#",
  },
  {
    title: "Bequeme Sicherheitsschuhe",
    text: "Responder-Dämpfung und ergonomische Passform für lange Arbeitstage.",
    cta: "Bequeme Modelle ansehen",
    href: "/collections/bequeme-arbeitsschuhe",
  },
];

const branches = [
  { icon: Building2, label: "Bauunternehmen" },
  { icon: Wrench, label: "Handwerk & Montage" },
  { icon: Factory, label: "Industrie & Produktion" },
  { icon: Truck, label: "Logistik & Lager" },
  { icon: Sparkles, label: "Gebäudereinigung" },
  { icon: HardHat, label: "Werkstätten" },
];

const kpwBenefits = [
  { icon: Package, text: "Versandkostenfrei in ganz Österreich" },
  { icon: Users, text: "Persönliche Beratung per Telefon und Außendienst" },
  { icon: BadgeCheck, text: "Staffelpreise für Firmenkunden" },
  { icon: RefreshCw, text: "Einfache Nachbestellung" },
  { icon: Stamp, text: "Alle Schuhe mit Firmenlogo veredelbar" },
  { icon: Zap, text: "Schnelle Lieferung aus Österreich" },
];

const SirSafetyPage = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      {/* Sektion 1: Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Sir Safety Sicherheitsschuhe"
            className="w-full h-full object-cover"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        </div>
        <div className="container relative py-24 md:py-36">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">
              Marke
            </p>
            <div className="w-10 h-[2px] bg-primary mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.1] mb-5">
              Sir Safety – Italienische Sicherheitsschuhe für Profis
            </h1>
            <p className="text-foreground/60 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Seit über 40 Jahren entwickelt Sir Safety System hochwertige
              Sicherheitsschuhe und Arbeitskleidung in Umbrien, Italien. Bei KPW
              erhalten Sie ausgewählte Modelle mit persönlicher Beratung und
              Versand in ganz Österreich.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/collections/bequeme-arbeitsschuhe"
                className="bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-primary/85 transition-colors inline-flex items-center gap-2"
              >
                Alle Sir Safety Produkte entdecken
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="#beratung"
                className="border border-border text-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-full hover:border-primary/50 hover:text-primary transition-colors"
              >
                Persönliche Beratung anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 2: USP-Leiste */}
      <section className="border-y border-border/30 bg-card">
        <div className="container py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {usps.map((usp) => (
              <div key={usp.title} className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <usp.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <h3 className="text-xs font-bold text-foreground mb-1.5">
                  {usp.title}
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {usp.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sektion 3: Markenvorstellung */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">
              Die Marke
            </p>
            <div className="w-10 h-[2px] bg-primary mb-5" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
              Über Sir Safety System
            </h2>
            <p className="text-foreground/60 text-sm leading-relaxed mb-4">
              Sir Safety System wurde in Umbrien gegründet und hat sich in über
              vier Jahrzehnten zu einem international führenden Hersteller von
              Sicherheitsschuhen, Arbeitskleidung und persönlicher
              Schutzausrüstung entwickelt. Die Philosophie: Menschliches Leben
              ist das wertvollste Gut – und der Schutz dieses Lebens die
              wichtigste Aufgabe.
            </p>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Das Sortiment umfasst Sicherheitsschuhe aller Schutzklassen von S1
              bis S5, Arbeitskleidung und Schutzhandschuhe. Alle Produkte
              zeichnen sich durch italienisches Design, höchste
              Qualitätsstandards und konsequente Innovation aus.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
              <img
                src={brandImg}
                alt="Sir Safety System – Sicherheitsschuh"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={800}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10" />
          </div>
        </div>
      </section>

      {/* Sektion 4: Produktkategorien */}
      <section className="bg-card border-y border-border/30">
        <div className="container py-16 md:py-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">
            Sortiment
          </p>
          <div className="w-10 h-[2px] bg-primary mb-5" />
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-10">
            Produktkategorien
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-background border border-border/50 rounded-lg p-7 flex flex-col hover:border-primary/30 transition-colors"
              >
                <Shield className="w-5 h-5 text-primary mb-4" />
                <h3 className="text-sm font-bold text-foreground mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6 flex-1">
                  {cat.text}
                </p>
                <Link
                  to={cat.href}
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
                >
                  {cat.cta}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sektion 5: Branchen */}
      <section className="container py-16 md:py-24">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3 text-center">
          Einsatzbereiche
        </p>
        <div className="w-10 h-[2px] bg-primary mx-auto mb-5" />
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-10 text-center">
          Bewährt in diesen Branchen
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {branches.map((b) => (
            <div
              key={b.label}
              className="bg-card border border-border/50 rounded-lg p-5 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <b.icon className="w-4 h-4 text-primary" />
              </div>
              <p className="text-[11px] font-semibold text-foreground">
                {b.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sektion 6: Vorteile bei KPW */}
      <section className="bg-card border-y border-border/30">
        <div className="container py-16 md:py-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3 text-center">
            Warum KPW
          </p>
          <div className="w-10 h-[2px] bg-primary mx-auto mb-5" />
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-10 text-center">
            Ihr Vorteil bei KPW
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {kpwBenefits.map((b) => (
              <div key={b.text} className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <b.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-[11px] text-foreground/70 leading-relaxed">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sektion 7: Beratungs-CTA */}
      <section id="beratung" className="container py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">
            Kontakt
          </p>
          <div className="w-10 h-[2px] bg-primary mx-auto mb-5" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
            Persönliche Beratung für Ihr Unternehmen
          </h2>
          <p className="text-foreground/60 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            Ob Einzelpaar oder Komplettausstattung – wir beraten Sie gerne.
            Unser Außendienst kommt direkt zu Ihnen.
          </p>
          <Link
            to="#"
            className="bg-primary text-primary-foreground px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-primary/85 transition-colors inline-flex items-center gap-2 mb-8"
          >
            Jetzt Beratung anfragen
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-foreground/50">
            <a
              href="tel:+43800286796"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              +43 800 286796
            </a>
            <a
              href="mailto:office@kp-workwear.com"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              office@kp-workwear.com
            </a>
          </div>
        </div>
      </section>

      {/* Sektion 8: SEO-Text */}
      <section className="border-t border-border/30 bg-card">
        <div className="container py-14 md:py-20 max-w-3xl">
          <h2 className="text-lg sm:text-xl font-bold text-foreground mb-5">
            Sir Safety Sicherheitsschuhe in Österreich kaufen – bei KPW
          </h2>
          <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
            <p>
              Bei KPW erhalten Sie ausgewählte Sir Safety Modelle – von leichten
              S1P-Schuhen bis zu robusten S3-Modellen für die Baustelle.
              Persönliche Beratung, versandkostenfreie Lieferung und attraktive
              Firmenkundenkonditionen inklusive.
            </p>
            <p>
              Sir Safety System steht seit über 40 Jahren für Qualität und
              Innovation aus Italien. Die patentierte Responder-Sohlentechnologie,
              ergonomische Passformen und modernes Design überzeugen in Handwerk,
              Industrie und Logistik.
            </p>
            <p>
              Alle Sir Safety Schuhe können bei KPW mit Ihrem Firmenlogo veredelt
              werden – per Stickerei oder Textildruck direkt im Haus. Kontaktieren
              Sie uns für ein unverbindliches Angebot.
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default SirSafetyPage;
