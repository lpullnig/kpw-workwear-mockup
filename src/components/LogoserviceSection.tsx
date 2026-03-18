import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LogoserviceSection = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center">
        <div className="md:col-span-3 space-y-6">
          <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] bg-primary text-primary-foreground rounded-full">
            Neu
          </span>
          <div className="w-10 h-[2px] bg-primary" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[0.92] tracking-tight">
            Deine Marke auf deiner Arbeitskleidung
          </h2>
          <p className="text-foreground/45 leading-relaxed max-w-lg text-sm sm:text-base">
            Mit unserem neuen Logoservice bringen wir Ihr Firmenlogo direkt auf
            Ihre Arbeitskleidung — ob Stickerei, Druck oder Lasergravur. Für
            einen professionellen Auftritt auf jeder Baustelle.
          </p>
          <Button variant="brand" size="lg" className="uppercase tracking-widest text-xs px-8 rounded-full">
            Produktveredler starten
            <ArrowRight className="w-4 h-4 ml-1" />
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
