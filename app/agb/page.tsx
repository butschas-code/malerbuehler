import { business } from "@/lib/data/business";

export default function AgbPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-ink mb-8">
            Allgemeine Geschaeftsbedingungen (AGB)
          </h1>

          <div className="space-y-8 text-muted">
            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                1. Geltungsbereich
              </h2>
              <p className="leading-relaxed">
                Diese Allgemeinen Geschaeftsbedingungen gelten für alle Vertraege zwischen 
                {business.name} (nachfolgend "Auftragnehmer") und ihren Kunden 
                (nachfolgend "Auftraggeber") ueber die Erbringung von Maler- und 
                Gipserdienstleistungen.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                2. Vertragsschluss
              </h2>
              <p className="leading-relaxed">
                Ein Vertrag kommt zustande durch Annahme eines schriftlichen oder muendlichen 
                Auftrags durch den Auftragnehmer. Die Annahme kann durch schriftliche 
                Auftragsbestaetigung, Ausfuehrung der Arbeiten oder Rechnungsstellung erfolgen.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                3. Leistungsumfang
              </h2>
              <p className="leading-relaxed">
                Der Leistungsumfang ergibt sich aus der vereinbarten Offerte oder dem 
                Auftragsformular. Zusaetzliche Arbeiten, die waehrend der Ausfuehrung 
                notwendig werden, sind schriftlich zu vereinbaren.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                4. Preise und Zahlungsbedingungen
              </h2>
              <p className="leading-relaxed">
                Die Preise verstehen sich in Schweizer Franken (CHF) zuzueglich der 
                gesetzlichen Mehrwertsteuer (sofern anwendbar). Die Zahlung ist wie folgt 
                faellig:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Bei Privatkunden: Innerhalb von 30 Tagen nach Rechnungsstellung</li>
                <li>Bei gewerblichen Kunden: Innerhalb von 30 Tagen nach Rechnungsstellung</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Bei Groessprojekten kann eine Abschlagszahlung vereinbart werden.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                5. Ausfuehrungstermine
              </h2>
              <p className="leading-relaxed">
                Ausfuehrungstermine sind unverbindlich, sofern nicht ausdruecklich schriftlich 
                als verbindlich vereinbart. Verzoegerungen aufgrund von unvorhersehbaren 
                Umstaenden (Wetter, Zulieferprobleme, etc.) berechtigen nicht zu Schadenersatzforderungen.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                6. Gewaehrleistung
              </h2>
              <p className="leading-relaxed">
                Der Auftragnehmer gewaehrleistet die fachgerechte Ausfuehrung der vereinbarten 
                Arbeiten. Die Gewaehrleistungsfrist betraegt 2 Jahre ab Abnahme der Arbeiten. 
                Maengel muessen schriftlich innerhalb von 10 Tagen nach Abnahfe gemeldet werden.
              </p>
              <p className="leading-relaxed mt-4">
                Ausgeschlossen von der Gewaehrleistung sind Maengel, die auf ungeeignete 
                Untergruende, natuerliche Abnutzung oder unsachgemaesse Nachbehandlung durch 
                den Auftraggeber zurueckzufuehren sind.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                7. Haftung
              </h2>
              <p className="leading-relaxed">
                Die Haftung des Auftragnehmers ist auf Vorsatz und grobe Fahrlaessigkeit 
                beschraenkt. Bei leichter Fahrlaessigkeit haftet der Auftragnehmer nur 
                bei Verletzung wesentlicher Vertragspflichten.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                8. Kuendigung
              </h2>
              <p className="leading-relaxed">
                Beide Parteien koennen den Vertrag unter Einhaltung einer Frist von 
                7 Tagen kuendigen. Bereits erbrachte Leistungen sind zu vergueten. 
                Bei Kuendigung durch den Auftraggeber sind die angefallenen Materialkosten 
                zu uebernehmen.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                9. Gerichtsstand
              </h2>
              <p className="leading-relaxed">
                Gerichtsstand ist Root, Schweiz. Es gilt schweizerisches Recht unter 
                Ausschluss der Kollisionsnormen.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                10. Salvatorische Klausel
              </h2>
              <p className="leading-relaxed">
                Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein 
                oder werden, bleibt der Vertrag im Uebrigen wirksam. Anstelle der unwirksamen 
                Bestimmung tritt eine wirksame Regelung, die der gewollten wirtschaftlich 
                am naechsten kommt.
              </p>
            </div>

            <div className="pt-8 border-t border-line">
              <p className="text-sm">
                Stand: Januar 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
