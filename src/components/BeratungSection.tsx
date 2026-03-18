import { Button } from "@/components/ui/button";

const BeratungSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="image-placeholder aspect-video rounded-lg" />
        <div className="space-y-5">
          <p className="section-label">Persönlich</p>
          <h2 className="section-title">
            Wir kommen zu Ihnen — österreichweit
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ob Baustelle, Betrieb oder Büro — unser Team berät Sie direkt vor
            Ort. Wir bringen Musterteile mit, nehmen Maß und helfen bei der
            Auswahl der passenden Arbeitskleidung und Sicherheitsschuhe. Persönlich,
            unkompliziert und österreichweit.
          </p>
          <Button variant="brand-outline" size="lg">
            Beratung anfragen
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default BeratungSection;
