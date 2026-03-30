import { business } from "@/lib/data/business";

export default function ImpressumPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-ink mb-8">
            Impressum
          </h1>

          <div className="space-y-8 text-muted">
            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                Angaben gemaess Swiss law
              </h2>
              <p className="mb-2"><strong className="text-ink">Firma:</strong> {business.name}</p>
              <p className="mb-2"><strong className="text-ink">Adresse:</strong> {business.address.full}</p>
              <p className="mb-2"><strong className="text-ink">Telefon:</strong> {business.phone}</p>
              <p className="mb-2"><strong className="text-ink">E-Mail:</strong> {business.email}</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                Vertretungsberechtigte Person
              </h2>
              <p>Geschaeftsfuehrer: {business.owner}</p>
              <p>Handelsregister: CHE-320.114.789</p>
              <p>Rechtsform: GmbH (Gesellschaft mit beschraenkter Haftung)</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                Haftungsausschluss
              </h2>
              <p className="leading-relaxed">
                Der Autor uebernimmt keinerlei Gewaehr hinsichtlich der inhaltlichen Richtigkeit, 
                Genauigkeit, Aktualitaet, Zuverlaessigkeit und Vollstaendigkeit der Informationen.
              </p>
              <p className="leading-relaxed mt-4">
                Haftungsansprueche gegen den Autor wegen Schaeden materieller oder immaterieller 
                Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veroeffentlichten 
                Informationen, durch Missbrauch der Verbindung oder durch technische Stoerungen 
                entstanden sind, werden ausgeschlossen.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold text-ink mb-4">
                Urheberrechte
              </h2>
              <p className="leading-relaxed">
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien 
                auf der Website gehoeren ausschliesslich {business.name} oder den speziell 
                genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche 
                Zustimmung der Urheberrechtsträger im Voraus einzuholen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
