import { Button } from "@/components/ui/button";

const LogoserviceSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <p className="section-label">Service</p>
      <h2 className="section-title mb-10">Unser neuer Logoservice</h2>
      <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
        <div className="md:col-span-3 space-y-5">
          <span className="inline-block px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded-sm">
            Neu
          </span>
          <h3 className="text-2xl md:text-3xl font-bold leading-tight">
            Deine Marke auf deiner Arbeitskleidung
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-lg">
            Mit unserem neuen Logoservice bringen wir Ihr Firmenlogo direkt auf
            Ihre Arbeitskleidung — ob Stickerei, Druck oder Lasergravur. Für
            einen professionellen Auftritt auf jeder Baustelle.
          </p>
          <Button variant="brand" size="lg">
            Produktveredler starten
          </Button>
        </div>
        <div className="md:col-span-2">
          <div className="image-placeholder aspect-[4/5] rounded-lg" />
        </div>
      </div>
    </div>
  </section>
);

export default LogoserviceSection;
