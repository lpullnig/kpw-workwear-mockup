import { Button } from "@/components/ui/button";

const LogoserviceSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
        <div className="md:col-span-3 space-y-6">
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] bg-primary text-primary-foreground rounded-sm">
            Neu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[0.95] tracking-tight">
            Deine Marke auf deiner Arbeitskleidung
          </h2>
          <p className="text-foreground/50 leading-relaxed max-w-lg text-sm sm:text-base">
            Mit unserem neuen Logoservice bringen wir Ihr Firmenlogo direkt auf
            Ihre Arbeitskleidung — ob Stickerei, Druck oder Lasergravur. Für
            einen professionellen Auftritt auf jeder Baustelle.
          </p>
          <Button variant="brand" size="lg" className="uppercase tracking-widest text-xs px-8">
            Produktveredler starten
          </Button>
        </div>
        <div className="md:col-span-2">
          <div className="image-placeholder aspect-[4/5] rounded-sm" />
        </div>
      </div>
    </div>
  </section>
);

export default LogoserviceSection;
