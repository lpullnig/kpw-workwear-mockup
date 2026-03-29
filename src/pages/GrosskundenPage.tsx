import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Users, Package, CreditCard, Shirt, ShieldCheck, Phone, Mail, Star, Truck, Factory, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "3.000+", label: "Zufriedene Kunden", sub: "in der DACH-Region" },
  { value: "250K+", label: "Ausgelieferte Textilien", sub: "pro Jahr" },
  { value: "4,8/5,0", label: "Sterne bei Google", sub: "Rezensionen" },
];

const benefits = [
  {
    icon: CreditCard,
    title: "Stabile Preise",
    text: "Transparente und planbare Preisgestaltung. Durch Kalkulation auf Basis der Jahresmenge sichern wir stabile Konditionen.",
  },
  {
    icon: Users,
    title: "Persönliche Betreuung",
    text: "Jeder Firmenkunde erhält eine direkte Ansprechperson, die Ihre Anforderungen kennt und Sie vom Angebot bis zur Auslieferung begleitet.",
  },
  {
    icon: Package,
    title: "Reibungsloser Ablauf",
    text: "Von der Bestellung bis zur Lieferung alles aus einer Hand. Eigene Produktion in Stick & Druck ohne unnötige Zwischenstationen.",
  },
  {
    icon: Handshake,
    title: "Verbesserte Zahlungsbedingungen",
    text: "Flexible und faire Zahlungsbedingungen, die auf Ihre Bedürfnisse abgestimmt sind.",
  },
  {
    icon: Shirt,
    title: "Einheitliche Veredelung",
    text: "Mit eigener Stickerei und Druckerei sorgen wir für ein klares und professionelles Erscheinungsbild Ihrer Arbeitskleidung.",
  },
  {
    icon: ShieldCheck,
    title: "Priority Kundensupport",
    text: "Firmenkunden erhalten bevorzugten Support und schnelle Reaktionszeiten bei allen Anliegen.",
  },
];

const features = [
  {
    icon: Factory,
    title: "Eigene Produktion & Lager",
    text: "Produktion und Lager direkt in Österreich für schnelle Verfügbarkeit.",
  },
  {
    icon: Shirt,
    title: "Modernste Druck- & Sticktechnologie",
    text: "Hochwertige Veredelung mit neuester Technik direkt im Haus.",
  },
  {
    icon: Truck,
    title: "Priority Kundensupport",
    text: "Persönliche Betreuung und schnelle Bearbeitung für Firmenkunden.",
  },
];

const GrosskundenPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Großkundenbetreuung
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Professionelle Arbeitskleidung –{" "}
            <span className="text-primary">maßgeschneidert für Ihr Unternehmen</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Von 10 bis 10.000 Stück – schnell, persönlich & zuverlässig. Exklusive Vorteile für Geschäftskunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:office@kp-workwear.com?subject=Anfrage%20Großkunden">
                Firmenangebot anfordern
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+43800286796">
                <Phone className="w-4 h-4 mr-2" />
                Jetzt anrufen
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why KPW - Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Warum wir Ihr <span className="text-primary">Partner</span> sein sollten?
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Eigene Produktion, modernste Technologie und persönliche Betreuung aus Österreich.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/40 transition-colors"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Warum KPW für <span className="text-primary">Firmenaufträge?</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Alles was Sie für eine professionelle Firmenausstattung brauchen – aus einer Hand.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Vertrauen aus der gesamten <span className="text-primary">DACH-Region</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Zahlreiche Unternehmen aus Deutschland, Österreich und der Schweiz setzen auf KPW für hochwertige Arbeitskleidung und individuelle Textilveredelung.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div
                key={s.value}
                className="text-center bg-card border border-border rounded-xl p-8"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{s.value}</div>
                <div className="font-medium">{s.label}</div>
                <div className="text-sm text-muted-foreground">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Bereit, den Auftritt Ihres Teams aufzuwerten?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Lassen Sie uns darüber sprechen, wie wir Sie unterstützen können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="mailto:office@kp-workwear.com?subject=Anfrage%20Großkunden">
                <Mail className="w-4 h-4 mr-2" />
                Firmenangebot anfordern
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="tel:+43800286796">
                <Phone className="w-4 h-4 mr-2" />
                +43 800 286796
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GrosskundenPage;
