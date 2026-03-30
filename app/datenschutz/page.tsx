import { business } from "@/lib/data/business";

export default function DatenschutzPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-ink mb-8">
            Datenschutzerklaerung
          </h1>

          <div className="space-y-8 text-muted">
            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                Allgemeiner Hinweis
              </h2>
              <p className="leading-relaxed">
                Gestuetzt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen 
                Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz 
                ihrer Privatsphaere sowie auf Schutz vor Missbrauch ihrer persoenlichen Daten. 
                Wir halten diese Bestimmungen streng ein.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                Verantwortliche Stelle
              </h2>
              <p className="mb-2"><strong className="text-ink">{business.name}</strong></p>
              <p>{business.address.full}</p>
              <p>E-Mail: {business.email}</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                Erhebung und Verarbeitung personenbezogener Daten
              </h2>
              <p className="leading-relaxed">
                Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies für die 
                Bereitstellung unserer Dienstleistungen erforderlich ist. Dies umfasst:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Kontaktdaten (Name, Adresse, Telefon, E-Mail)</li>
                <li>Projektbezogene Informationen</li>
                <li>Korrespondenz und Kommunikation</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                Zweck der Datenverarbeitung
              </h2>
              <p className="leading-relaxed">
                Die erhobenen Daten werden ausschliesslich für folgende Zwecke verwendet:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Abwicklung von Auftraegen und Projekten</li>
                <li>Kommunikation mit Kunden</li>
                <li>Erstellung von Offerten und Rechnungen</li>
                <li>Erfüllung gesetzlicher Aufbewahrungspflichten</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                Datenweitergabe
              </h2>
              <p className="leading-relaxed">
                Wir geben Ihre persoenlichen Daten nicht an Dritte weiter, ausser:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Sie haben ausdruecklich eingewilligt</li>
                <li>Es ist zur Erfuellung unserer Dienstleistungen erforderlich</li>
                <li>Eine gesetzliche Verpflichtung besteht</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                Aufbewahrungsdauer
              </h2>
              <p className="leading-relaxed">
                Wir bewahren personenbezogene Daten nur so lange auf, wie es für die Erfüllung der 
                genannten Zwecke oder gesetzliche Aufbewahrungspflichten erforderlich ist. 
                Geschaeftsunterlagen werden gemaess schweizerischem Recht für 10 Jahre aufbewahrt.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                Ihre Rechte
              </h2>
              <p className="leading-relaxed">
                Sie haben das Recht auf Auskunft über Ihre bei uns gespeicherten persoenlichen 
                Daten, deren Herkunft und Empfaenger und den Zweck der Datenverarbeitung. 
                Ausserdem haben Sie ein Recht auf Berichtigung, Sperrung oder Loeschung dieser Daten.
              </p>
              <p className="leading-relaxed mt-4">
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer persoenlichen Daten, 
                bei Auskunftsersuchen, Berichtigungs- oder Loeschungswuenschen wenden Sie sich 
                bitte an: {business.email}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                Cookies und Tracking
              </h2>
              <p className="leading-relaxed">
                Diese Website verwendet keine Tracking-Cookies. Wir verwenden lediglich technisch 
                notwendige Cookies für die Funktionalität der Website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
