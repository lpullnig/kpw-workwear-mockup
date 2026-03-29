import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const footerLinks = {
  sortiment: [
    { label: "Kopfbedeckungen", href: "#" },
    { label: "Oberteile", href: "#" },
    { label: "Hosen", href: "#" },
    { label: "Schuhe", href: "/collections/bequeme-arbeitsschuhe" },
    { label: "Forst & Schnittschutz", href: "#" },
    { label: "Sonstiges", href: "#" },
  ],
  service: [
    { label: "Logoservice", href: "#" },
    { label: "Großkundenbetreuung", href: "#" },
    { label: "Beratung vor Ort", href: "#" },
    { label: "Marken", href: "/brands" },
  ],
  unternehmen: [
    { label: "Über uns", href: "#" },
    { label: "Store in Klagenfurt", href: "#" },
    { label: "Kontakt", href: "#" },
  ],
  rechtliches: [
    { label: "Impressum", href: "#" },
    { label: "Datenschutz", href: "#" },
    { label: "AGB", href: "#" },
    { label: "Widerrufsrecht", href: "#" },
    { label: "Versand & Lieferung", href: "#" },
  ],
};

const Footer = () => (
  <footer className="bg-card border-t border-border/50">
    {/* Main footer */}
    <div className="container py-14 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
        {/* Brand / Contact column */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="inline-block mb-5">
            <span className="text-xl font-black tracking-tight text-primary">KPW</span>
          </Link>
          <p className="text-muted-foreground text-xs leading-relaxed mb-6">
            Hochwertige Arbeitskleidung & Sicherheitsschuhe mit persönlicher Beratung aus Kärnten.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-xs text-foreground/60">
              <MapPin className="w-3.5 h-3.5 mt-0.5 text-primary shrink-0" />
              <span>Klagenfurt, Kärnten<br />Österreich</span>
            </li>
            <li className="flex items-center gap-2.5 text-xs text-foreground/60">
              <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
              <a href="tel:+4346312345" className="hover:text-primary transition-colors">
                +43 463 12345
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-xs text-foreground/60">
              <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
              <a href="mailto:info@kp-workwear.com" className="hover:text-primary transition-colors">
                info@kp-workwear.com
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-xs text-foreground/60">
              <Clock className="w-3.5 h-3.5 mt-0.5 text-primary shrink-0" />
              <span>Mo–Fr: 08:00–17:00</span>
            </li>
          </ul>
        </div>

        {/* Sortiment */}
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-4">
            Sortiment
          </h3>
          <ul className="space-y-2.5">
            {footerLinks.sortiment.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service */}
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-4">
            Service
          </h3>
          <ul className="space-y-2.5">
            {footerLinks.service.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Unternehmen */}
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-4">
            Unternehmen
          </h3>
          <ul className="space-y-2.5">
            {footerLinks.unternehmen.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Rechtliches */}
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-4">
            Rechtliches
          </h3>
          <ul className="space-y-2.5">
            {footerLinks.rechtliches.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Newsletter bar */}
    <div className="border-t border-border/30">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold text-foreground">Newsletter abonnieren</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Neue Produkte & Angebote direkt in Ihr Postfach.
          </p>
        </div>
        <form className="flex gap-2 w-full sm:w-auto">
          <input
            type="email"
            placeholder="Ihre E-Mail-Adresse"
            className="flex-1 sm:w-64 bg-background border border-border rounded-full px-4 py-2.5 text-xs text-foreground placeholder:text-foreground/25 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-primary/85 transition-colors flex items-center gap-1.5 shrink-0"
          >
            OK
            <ArrowRight className="w-3 h-3" />
          </button>
        </form>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-border/20">
      <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[10px] text-foreground/25 tracking-wide">
          © {new Date().getFullYear()} KP Workwear — Arbeitskleidung & Sicherheitsschuhe · Klagenfurt, Kärnten
        </p>
        <div className="flex items-center gap-4 text-[10px] text-foreground/25">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>PayPal</span>
          <span>Klarna</span>
          <span>EPS</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
