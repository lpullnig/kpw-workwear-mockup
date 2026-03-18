import { Button } from "@/components/ui/button";

const BeratungSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="image-placeholder aspect-video rounded-sm" />
        <div className="space-y-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
            Persönliche Beratung
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[0.95] tracking-tight">
            Wir kommen zu Ihnen — österreichweit
          </h2>
          <p className="text-foreground/50 leading-relaxed text-sm sm:text-base">
            Ob Baustelle, Betrieb oder Büro — unser Team berät Sie direkt vor
            Ort. Wir bringen Musterteile mit, nehmen Maß und helfen bei der
            Auswahl der passenden Arbeitskleidung und Sicherheitsschuhe.
            Persönlich, unkompliziert und österreichweit.
          </p>
          <Button variant="brand-outline" size="lg" className="uppercase tracking-widest text-xs px-8">
            Beratung anfragen
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default BeratungSection;
