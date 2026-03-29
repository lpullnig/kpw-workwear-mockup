import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Scale, Shield, FileText, RotateCcw } from "lucide-react";

const tabs = [
  { id: "impressum", label: "Impressum", icon: Scale },
  { id: "datenschutz", label: "Datenschutz", icon: Shield },
  { id: "agb", label: "AGB", icon: FileText },
  { id: "widerruf", label: "Widerrufsrecht", icon: RotateCcw },
];

/* ── Impressum ── */
const Impressum = () => (
  <div className="space-y-4 text-sm text-foreground/70 leading-relaxed">
    <p className="font-bold text-foreground">Hitid OG</p>
    <p>
      Liberogasse 7<br />
      A-9020 Klagenfurt am Wörthersee
    </p>
    <p>
      Tel:{" "}
      <a href="tel:+43800286796" className="text-primary hover:underline">
        +43 800 286796
      </a>
      <br />
      Mail:{" "}
      <a href="mailto:office@kpw-workwear.com" className="text-primary hover:underline">
        office@kpw-workwear.com
      </a>
    </p>
    <p>
      <span className="font-semibold text-foreground">Geschäftsführer:</span>
      <br />
      Hr. Maximilian Kreuzer
      <br />
      Hr. Lukas Pullnig
    </p>
    <p>
      Gerichtsstand: Landesgericht Klagenfurt
      <br />
      Firmenbuch: FN 547564 t
      <br />
      Kammer: Wirtschaftskammer Kärnten
      <br />
      Umsatzsteuer-ID: ATU 76559234
    </p>
    <p>
      <a
        href="https://firmen.wko.at/hitid-og/k%C3%A4rnten/?firmaid=d9dfd551-2378-4f2a-a318-1bf7204d9ea3"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Firmeninformation auf WKO.at gemäß ECG →
      </a>
    </p>
    <p>
      Wir weisen ausdrücklich darauf hin, dass wir keinerlei Einfluss auf die
      Gestaltung und die Inhalte von externen Internet-Angeboten haben, auf die
      wir z.B. durch einen Link verweisen. Wir können weder für den Inhalt noch
      für die Aktualität dieser Angebote Haftung übernehmen.
    </p>
    <p>
      Alle Seiten unterliegen dem Urheberschutz und dürfen nur mit schriftlicher
      Genehmigung von Hitid OG kopiert oder in eigene Angebote integriert werden.
    </p>
    <p>
      Alle Angaben sind trotz sorgfältiger Prüfung ohne Gewähr. Irrtümer und
      Änderungen vorbehalten.
    </p>
  </div>
);

/* ── Datenschutz ── */
const Datenschutz = () => (
  <div className="space-y-5 text-sm text-foreground/70 leading-relaxed">
    <p>
      Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer
      Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie
      ausführlich über den Umgang mit Ihren Daten.
    </p>

    <h3 className="font-bold text-foreground pt-2">Allgemeines</h3>
    <p>
      Der Schutz und die Sicherheit Ihrer persönlichen Daten sind uns ein
      wichtiges Anliegen. Diese Webseite speichert und verarbeitet Daten daher
      ausschließlich im Sinne der österreichischen und europäischen
      Datenschutzgrundverordnung (DSGVO). Sie als Nutzer stimmen der
      Datenverarbeitung im Sinne dieser Erklärung zu.
    </p>
    <p>
      Diese Datenschutzerklärung bezieht sich nur auf diese Webseite. Falls Sie
      über Links auf unseren Seiten auf andere Seiten weitergeleitet werden,
      informieren Sie sich direkt auf der weitergeleiteten Webseite über den
      jeweiligen Umgang mit Ihren Daten.
    </p>
    <p>
      Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der
      Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser
      Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
    </p>

    <h3 className="font-bold text-foreground pt-2">
      Welche personenbezogenen Daten werden verarbeitet?
    </h3>
    <p>
      Es werden Name, Adresse (Liefer- und Rechnungsadresse), E-Mail-Adresse,
      Ware, Preis sowie Protokolldateien (Logfiles: IP-Adresse, besuchte
      Website, Datum und Dauer des Besuches, Browser- und Betriebssystem-Version)
      verarbeitet.
    </p>

    <h3 className="font-bold text-foreground pt-2">Rechtsgrundlage</h3>
    <p>
      Die Verarbeitung erfolgt zur Vertragserfüllung gemäß Art. 6 Abs. 1 lit. b)
      DSGVO sowie aufgrund Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a) DSGVO
      und unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f) DSGVO.
    </p>

    <h3 className="font-bold text-foreground pt-2">Zwecke der Verarbeitung</h3>
    <p>
      Name, Adresse, E-Mail, Ware und Preis werden zur Vertragsabwicklung
      verarbeitet. E-Mail-Adressen werden zudem für Marketingzwecke
      (Newsletter-Versand) verwendet, sofern Sie zugestimmt haben. Die
      Protokolldateien dienen der Bereitstellung und Verbesserung der Website
      sowie der Erkennung und Verhinderung von Angriffen.
    </p>

    <h3 className="font-bold text-foreground pt-2">Speicherdauer</h3>
    <p>
      Ihre Daten werden so lange gespeichert, wie rechtliche Verpflichtungen dies
      vorschreiben – jedenfalls für eine Dauer von sieben Jahren. E-Mail-Adressen
      für Newsletter werden gespeichert, solange Sie dem Versand nicht
      widersprechen.
    </p>

    <h3 className="font-bold text-foreground pt-2">Datenübermittlung</h3>
    <p>
      Ihre Lieferadresse wird an Warenlieferanten zur Zustellung übermittelt.
      Weiters werden Daten bei Bedarf an Behörden, Gerichte und unsere
      Steuerberatung übermittelt.
    </p>

    <h3 className="font-bold text-foreground pt-2">Ihre Rechte</h3>
    <p>
      Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
      der Verarbeitung, Datenübertragbarkeit und Widerspruch. Die Einwilligung
      kann jederzeit widerrufen werden. Sie haben ein Beschwerderecht bei der
      österreichischen Datenschutzbehörde.
    </p>

    <h3 className="font-bold text-foreground pt-2">Cookies</h3>
    <p>
      Die Website verwendet Cookies, um das Angebot nutzerfreundlicher zu
      gestalten. Sie können Ihren Browser so einstellen, dass Cookies nur im
      Einzelfall erlaubt werden oder generell ausgeschlossen sind.
    </p>

    <h3 className="font-bold text-foreground pt-2">
      Webanalyse mit Google Analytics
    </h3>
    <p>
      Diese Website nutzt Google Analytics. Mehr Informationen finden Sie in der
      Datenschutzerklärung von Google. Sie können die Erfassung durch ein
      Browser-Plugin verhindern.
    </p>

    <h3 className="font-bold text-foreground pt-2">Webanalyse mit Snitcher</h3>
    <p>
      Zur Identifikation potenzieller Geschäftskunden nutzen wir Snitcher B.V.
      Dabei werden keine personenbezogenen Daten verarbeitet und keine Cookies
      eingesetzt. Die Verarbeitung erfolgt auf Grundlage unseres berechtigten
      Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO.
    </p>

    <h3 className="font-bold text-foreground pt-2">Newsletter</h3>
    <p>
      Für den Newsletter benötigen wir Ihre E-Mail-Adresse. Die Einwilligung
      können Sie jederzeit widerrufen, z.B. über den „Hier abbestellen"-Link.
    </p>

    <h3 className="font-bold text-foreground pt-2">SSL-Verschlüsselung</h3>
    <p>
      Diese Seite nutzt SSL-Verschlüsselung zum Schutz der Übertragung
      vertraulicher Inhalte.
    </p>

    <h3 className="font-bold text-foreground pt-2">
      Ansprechpartner für Datenschutz
    </h3>
    <p>
      Hitid OG
      <br />
      Liberogasse 7, A-9020 Klagenfurt am Wörthersee
      <br />
      <a href="mailto:office@kpw-workwear.com" className="text-primary hover:underline">
        office@kpw-workwear.com
      </a>
    </p>
  </div>
);

/* ── AGB ── */
const AGB = () => (
  <div className="space-y-5 text-sm text-foreground/70 leading-relaxed">
    <h3 className="font-bold text-foreground">1. Geltungsbereich</h3>
    <p>
      1.1. Unsere Lieferungen und Leistungen erfolgen ausschließlich zu den
      nachstehenden allgemeinen Liefer- und Zahlungsbedingungen, die durch die
      Auftragserteilung anerkannt und verbindlich werden.
    </p>
    <p>
      1.2. Sollte eine der Bestimmungen ungültig sein oder werden, hat dies keine
      Auswirkungen auf die übrigen Bestimmungen.
    </p>

    <h3 className="font-bold text-foreground pt-2">2. Vertragsschluss</h3>
    <p>
      2.1. Der Auftrag wird erst mit Lieferung der Ware oder schriftlicher
      Bestätigung verbindlich.
    </p>
    <p>
      2.2. Wir sind bis zum Ablauf eines Monats nach Eingang des Auftrages
      berechtigt, diesen ohne Angabe von Gründen abzulehnen.
    </p>
    <p>
      2.3. Wenn die Ware nicht lieferbar ist, behalten wir uns vor, die
      versprochene Leistung nicht zu erbringen und den Kaufpreis zurückzuerstatten.
    </p>

    <h3 className="font-bold text-foreground pt-2">3. Preise</h3>
    <p>
      3.1. Alle Preise sind exklusive Umsatzsteuer zu verstehen.
    </p>
    <p>
      3.2. Bei Veränderungen von Lohn-, Material-, Energie- oder sonstigen
      Kosten sind wir berechtigt, die Preise entsprechend anzupassen.
    </p>

    <h3 className="font-bold text-foreground pt-2">4. Lieferungen</h3>
    <p>
      4.1. Lieferfristen sind, falls nicht ausdrücklich fix vereinbart,
      freibleibend. Wir sind zu Teillieferungen berechtigt.
    </p>
    <p>
      4.3. Aus Überschreitung von Lieferfristen sind wir zu keinem
      Schadenersatz verpflichtet.
    </p>
    <p>
      4.4. Bei Betriebsstörungen, höherer Gewalt oder Streiks haben wir das
      Recht, Lieferverpflichtungen aufzuheben.
    </p>

    <h3 className="font-bold text-foreground pt-2">6. Eigentumsvorbehalt</h3>
    <p>
      Die Ware bleibt bis zur endgültigen Bezahlung Eigentum der Hitid OG.
    </p>

    <h3 className="font-bold text-foreground pt-2">7. Zahlung</h3>
    <p>
      7.1. Rechnungen sind innerhalb von 10 Tagen ab Rechnungsdatum ohne Abzug
      zahlbar.
    </p>
    <p>
      7.2. Zahlungen haben auf eines der auf der Rechnung angeführten Konten zu
      erfolgen.
    </p>
    <p>
      7.4. Bei Zahlungsverzug sind wir berechtigt, Verzugszinsen in gesetzlicher
      Höhe (9,2 % p.a. über dem Basiszinssatz) zu begehren.
    </p>

    <h3 className="font-bold text-foreground pt-2">8. Beanstandungen</h3>
    <p>
      8.1. Mängelrügen müssen schriftlich innerhalb von 8 Tagen nach Übergabe
      erfolgen. Danach gilt die Ware als unbeanstandet übernommen.
    </p>
    <p>
      8.2. Bei gerechtfertigter Mängelrüge leisten wir nach unserer Wahl
      Mängelbehebung, Ersatz oder Gutschrift. Sonstige Ansprüche, insbesondere
      Folgeschäden, sind ausgeschlossen.
    </p>

    <h3 className="font-bold text-foreground pt-2">10. Rücksendungen</h3>
    <p>
      Rücksendungen lassen wir grundsätzlich abholen. Die Annahme von „UNFREI"
      Paketen wird abgelehnt.
    </p>

    <h3 className="font-bold text-foreground pt-2">11. Veredelung</h3>
    <p>
      11.1. Bei Warnschutzbekleidung nach EN ISO 20471 kann sich durch
      Veredelung die Warnschutzklasse ändern.
    </p>
    <p>
      11.2. Vor Veredelung erhalten Sie einen Probeabzug. Produktionsbeginn
      erst nach Erhalt des unterschriebenen Probeabzuges. Für nachträglich
      beanstandete Fehler wird keine Haftung übernommen.
    </p>
    <p>
      11.3. Die Bekleidung ist nach Waschanleitung, bei Veredelung bis max.
      60 °C, zu waschen. Nicht direkt über den Druck bügeln.
    </p>

    <h3 className="font-bold text-foreground pt-2">
      12. Veredelung – Reklamation & Austausch
    </h3>
    <p>
      12.1. Eine Garantie bezüglich Haltbarkeit auf Textilien kann wegen
      unterschiedlicher Stoffqualitäten nicht übernommen werden.
    </p>
    <p>
      12.2. Reklamationen müssen schriftlich innerhalb von 8 Tagen erfolgen.
    </p>
    <p>
      12.3. Veredelte Ware ist vom Umtausch und der Rücknahme ausgeschlossen.
    </p>
  </div>
);

/* ── Widerrufsrecht ── */
const Widerrufsrecht = () => (
  <div className="space-y-5 text-sm text-foreground/70 leading-relaxed">
    <h3 className="font-bold text-foreground">30-Tage-Rückgaberecht</h3>
    <p>
      Wir gewähren ein 30-tägiges Rückgaberecht. Das bedeutet, dass Sie nach
      Erhalt Ihres Artikels 30 Tage Zeit haben, um eine Rückgabe anzufordern.
    </p>
    <p>
      Um für eine Rückgabe berechtigt zu sein, muss sich der Artikel in demselben
      Zustand befinden, in dem Sie ihn erhalten haben – ungetragen, ungenutzt,
      mit Etiketten versehen und in der Originalverpackung. Außerdem benötigen
      Sie den Beleg oder einen anderen Kaufnachweis.
    </p>
    <p>
      Um eine Rückgabe einzuleiten, kontaktieren Sie uns unter{" "}
      <a href="mailto:office@kp-workwear.com" className="text-primary hover:underline">
        office@kp-workwear.com
      </a>
      .
    </p>

    <h3 className="font-bold text-foreground pt-2">Schäden und Probleme</h3>
    <p>
      Bitte überprüfen Sie Ihre Bestellung bei Erhalt und kontaktieren Sie uns
      sofort, wenn der Artikel defekt, beschädigt ist oder Sie einen falschen
      Artikel erhalten haben.
    </p>

    <h3 className="font-bold text-foreground pt-2">Ausnahmen</h3>
    <p>
      Bestimmte Artikel können nicht zurückgegeben werden: Sonderanfertigungen,
      personalisierte Artikel und Angebotsartikel. Veredelte Ware ist
      grundsätzlich vom Umtausch und der Rücknahme ausgeschlossen.
    </p>

    <h3 className="font-bold text-foreground pt-2">Umtausch</h3>
    <p>
      Die Rückgabe des erhaltenen Artikels ist der schnellste Weg, um den
      gewünschten Artikel zu erhalten. Wenn die Rückgabe akzeptiert wird, können
      Sie den neuen Artikel in einem separaten Kauf erwerben.
    </p>

    <h3 className="font-bold text-foreground pt-2">
      EU – 14-tägige Widerrufsfrist
    </h3>
    <p>
      Sie haben das Recht, Ihre Bestellung innerhalb von 14 Tagen ohne Angabe
      von Gründen zu stornieren oder zurückzugeben. Der Artikel muss sich in
      demselben Zustand befinden, in dem Sie ihn erhalten haben.
    </p>

    <h3 className="font-bold text-foreground pt-2">Rückerstattungen</h3>
    <p>
      Im Falle einer Genehmigung erhalten Sie innerhalb von 10 Werktagen eine
      automatische Rückerstattung auf Ihre ursprüngliche Zahlungsmethode. Wenn
      mehr als 15 Werktage vergangen sind, kontaktieren Sie uns bitte unter{" "}
      <a href="mailto:office@kp-workwear.com" className="text-primary hover:underline">
        office@kp-workwear.com
      </a>
      .
    </p>
  </div>
);

const contentMap: Record<string, React.FC> = {
  impressum: Impressum,
  datenschutz: Datenschutz,
  agb: AGB,
  widerruf: Widerrufsrecht,
};

const LegalPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "impressum";

  const setTab = (id: string) => {
    setSearchParams({ tab: id });
  };

  const Content = contentMap[activeTab] || Impressum;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="container py-16 md:py-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">
            Rechtliches
          </p>
          <div className="w-10 h-[2px] bg-primary mb-5" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-10">
            {tabs.find((t) => t.id === activeTab)?.label || "Impressum"}
          </h1>

          {/* Tab bar */}
          <div className="flex gap-1 border-b border-border/50 mb-10 overflow-x-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="max-w-3xl">
            <Content />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
