import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BeratungSection = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative">
          <div className="image-placeholder aspect-video rounded-lg" />
          {/* Decorative accent corner (Strauss-inspired) */}
          <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-primary rounded-br-lg hidden md:block" />
        </div>
        <div className="space-y-6">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Persönliche Beratung
          </p>
          <div className="w-10 h-[2px] bg-primary" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[0.92] tracking-tight">
            Wir kommen zu Ihnen — österreichweit
          </h2>
          <p className="text-foreground/45 leading-relaxed text-sm sm:text-base">
            Ob Baustelle, Betrieb oder Büro — unser Team berät Sie direkt vor
            Ort. Wir bringen Musterteile mit, nehmen Maß und helfen bei der
            Auswahl der passenden Arbeitskleidung und Sicherheitsschuhe.
            Persönlich, unkompliziert und österreichweit.
          </p>
          <Button variant="brand-outline" size="lg" className="uppercase tracking-widest text-xs px-8 rounded-full">
            Beratung anfragen
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default BeratungSection;
