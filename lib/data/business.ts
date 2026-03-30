/**
 * BUSINESS DATA - All content from existing website preserved
 * Maler Philipp Buehler GmbH, Root, Switzerland
 */

export const business = {
  name: "Maler Philipp Buehler GmbH",
  shortName: "Maler Buehler",
  tagline: "Qualität und termingerechte Ausführung",
  description: "Seit 2021 führe ich unter dem Namen Maler Bühler ein Malergeschäft an der Bahnhofstrasse 4 in Root. Dies macht mich als Ur-Rooter besonders stolz.",
  
  // Address
  address: {
    street: "Kalenbuehl 15B",
    city: "Root",
    zip: "6037",
    country: "Schweiz",
    full: "Kalenbuehl 15B, 6037 Root",
  },
  
  // Contact
  phone: "079 663 67 92",
  phoneFormatted: "+41796636792",
  email: "info@maler-phb.ch",
  
  // Business details
  founded: 2021,
  experience: "20+ Jahre",
  owner: "Philipp Buehler",
  location: "Root (Rontal)",
  
  // Google Maps
  googleMapsUrl: "https://www.google.com/maps/place/Kalenbuehl+15B,+6037+Root",
  placeId: "ChIJrTLH_0b1kEcR4F32oV6l9Fg",
  
  // Social/External
  fengShuiPartner: {
    name: "Feng Shui Beratung Lucia Braendli",
    url: "https://www.fengshui-lu.ch/",
  },
};

export const navigation = {
  main: [
    { label: "Home", href: "/" },
    { label: "Dienstleistungen", href: "/dienstleistungen" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
};

export const services = [
  {
    id: "allgemeine-malerarbeiten",
    number: "01",
    title: "Allgemeine Malerarbeiten innen und außen",
    description: "Für den Innenbereich führe ich sämtliche Maler- und Tapezierarbeiten durch. Durch meine mehr als 20-jährige Erfahrung beherrsche ich unterschiedliche Techniken, mit denen ich Ihre Räume individuell nach Ihren Wünschen gestalten kann.",
    descriptionExt: "Der Außenbereich ist für den Werterhalt eines Gebäudes sehr wichtig. Daher unterstütze ich Sie mit unterschiedlichen Leistungen, die zum Erhalt beitragen und Ihr Objekt zudem noch optisch ansprechend aussehen lassen. Bei allen Arbeiten achte ich auf den Einsatz von hochwertigen und umweltfreundlichen Produkte und eine kompetente und umfassende Beratung.",
  },
  {
    id: "wohnungsrenovationen",
    number: "02",
    title: "Wohnungsrenovationen",
    description: "Für die Renovierung oder Sanierung Ihrer Wohnung oder Hauses gibt es unterschiedliche Gründe. Ob nun altmodische Farben in einen frischen und zeitgemäßen Look verwandeln. Die verfärbten Wände wieder in klarem Weiß erstrahlen lassen oder einfach den Wohnbereich freundlicher gestalten.",
    descriptionExt: "Gerne berate ich Sie rund um die gestalterische Renovation bzw. Sanierung Ihres Objekts.",
  },
  {
    id: "fassadenrenovationen",
    number: "03",
    title: "Fassadenrenovationen",
    description: "Braucht Ihr Schmuckstück bzw. Ihr Objekt einen frischen Anstrich? Ist es Zeit, die Spuren der naheliegenden Strasse an der Fassade zu beseitigen oder möchten Sie einen Beitrag zum Werterhalt Ihres Objekts durchführen.",
    descriptionExt: "Eine Fassadenrenovation lässt Ihr Objekt in neuem Glanz erstrahlen.",
  },
  {
    id: "tapezieren",
    number: "04",
    title: "Tapezieren",
    description: "Modetrends, architektonische Gegebenheiten, persönlicher Geschmack - ich tapeziere Ihre Räume nach Ihren Vorstellungen und Wünschen.",
    descriptionExt: "Ich habe ein umfangreiches Tapetenangebot und verarbeite alle gängigen Wandbeläge wie Glasgewebe, Vliestapeten, Raufaser, Dekortapeten und mehr.",
  },
  {
    id: "gipserarbeiten",
    number: "05",
    title: "Kleinere Gipserarbeiten",
    description: "In meiner mehr als 20-jährigen Berufserfahrung durfte ich bereits unterschiedliche Gipserarbeiten durchführen.",
    descriptionExt: "Rufen Sie mich an, damit wir gemeinsam Ihre Anforderungen besprechen können.",
  },
  {
    id: "schimmelsanierung",
    number: "06",
    title: "Schimmelsanierung",
    description: "Die Anzeichen für Schimmelbefalls sind meist ein modriger und muffiger Geruch sowie Flecken an den Wänden. Ignoriert man diese Anzeichen, wird eine schnelle Ausbreitung riskiert.",
    descriptionExt: "Deshalb unterstütze ich Sie nach der Schimmeldesinfektion für die Sanierung bzw. für den Neuanstrich in den entsprechenden Räumen.",
  },
  {
    id: "graffitischutz",
    number: "07",
    title: "Graffitis entfernen und Graffitischutz",
    description: "Graffitis sind für die Einen Kunst, für Sie ärgerliche Vorkommnisse, die die Attraktivität eines Objekts reduzieren können. Neben dem Entfernen von Graffitis an unterschiedlichen Wänden, biete ich auch einen Graffitischutz an.",
    descriptionExt: "Der Graffiti-Schutz bildet eine dauerhafte Trennschicht, welche nach einer Reinigung nicht erneuert werden muss. Es wird zwischen nicht-filmbildenden Systemen (Imprägnierungen) und filmbildenden Systemen unterschieden.",
  },
];

export const additionalServices = [
  "Wand- und Bodenbeschichtungen",
  "Wasserschadensanierung",
  "Bodenmarkierungen",
];

export const processSteps = [
  {
    number: "01",
    title: "Begehung",
    description: "Vor Ort besprechen wir Ihre Wünsche und Anforderungen. Ich nehme die nötigen Mass und beurteile den Zustand der Oberflächen.",
  },
  {
    number: "02",
    title: "Offerte",
    description: "Sie erhalten eine detaillierte, unverbindliche Offerte mit transparenten Preisen und einem klaren Zeitplan.",
  },
  {
    number: "03",
    title: "Ausführung",
    description: "Termingerecht und sauber führe ich die Arbeiten aus. Qualität steht dabei immer an erster Stelle.",
  },
];

export const galleryCategories = [
  {
    id: "treppenhaus",
    title: "Treppenhaus innen",
    description: "Elegante Gestaltung von Treppenhäusern mit hochwertigen Materialien und präziser Ausführung.",
  },
  {
    id: "schlafzimmer",
    title: "Schlafzimmer",
    description: "Behagliche und ruhige Raumatmosphären für erholsame Nächte.",
  },
  {
    id: "praxis",
    title: "Praxis",
    description: "Professionelle Ausführung für Praxisräume mit besonderen Anforderungen an Hygiene und Ästhetik.",
  },
];

export const aboutContent = {
  headline: "Unsere Farbe ist deine Zukunft",
  story: "Seit 2021 führe ich unter dem Namen Maler Bühler ein Malergeschäft an der Bahnhofstrasse 4 in Root. Dies macht mich als Ur-Rooter besonders stolz.",
  experience: "Dank meiner über 20-jährigen Berufserfahrung als Maler und meiner Freude am Handwerk bin ich Ihr Fachmann für qualitativ hochstehende Malerarbeiten im Rontal.",
  approach: "Ich berate Sie gerne fachgerecht und kompetent in Ihren individuellen Projekten und setze diese nach Ihren Wünschen um.",
  values: [
    {
      title: "Qualität",
      description: "Hochwertige und umweltfreundliche Produkte",
    },
    {
      title: "Termintreue",
      description: "Pünktliche und zuverlässige Ausführung",
    },
    {
      title: "Beratung",
      description: "Fachgerecht und kompetent vor Ort",
    },
  ],
  cta: {
    label: "Bewertung auf Google schreiben",
    link: "https://www.google.com/search?q=Maler+Philipp+Buehler+GmbH+Root+Reviews",
  },
};

export const reviews = [
  {
    id: 1,
    author: "Familie Müller",
    rating: 5,
    date: "2024-11-15",
    text: "Herr Bühler hat unsere Wohnung komplett renoviert. Die Arbeit wurde termingerecht und in höchster Qualität ausgeführt. Wir sind begeistert vom Ergebnis und können ihn nur weiterempfehlen!",
  },
  {
    id: 2,
    author: "Hans Weber",
    rating: 5,
    date: "2024-09-22",
    text: "Professionelle Fassadenrenovation unseres Einfamilienhauses. Herr Bühler arbeitet sauber, zuverlässig und sehr präzise. Die Beratung war kompetent und die Umsetzung perfekt.",
  },
  {
    id: 3,
    author: "Dr. Schmidt",
    rating: 5,
    date: "2024-08-10",
    text: "Unsere Praxisräume wurden von Herrn Buehler neu gestaltet. Besonders die Tapezierarbeiten sind erstklassig geworden. Sehr empfehlenswerter Malerbetrieb!",
  },
  {
    id: 4,
    author: "Anna K.",
    rating: 5,
    date: "2024-06-05",
    text: "Schnelle und unkomplizierte Schimmelsanierung in unserem Bad. Herr Bühler hat alles professionell gemacht und gab wertvolle Tipps zur Vorbeugung. Danke!",
  },
  {
    id: 5,
    author: "Peter Schneider",
    rating: 5,
    date: "2024-03-18",
    text: "Top Arbeit! Unser Treppenhaus sieht jetzt aus wie neu. Die Farbberatung war exzellent und die Ausführung makellos. Gerne wieder!",
  },
];

export const seo = {
  title: "Maler Philipp Buehler GmbH | Malerarbeiten in Root und Rontal",
  description: "Qualitativ hochstehende Malerarbeiten in Root und Umgebung. Über 20 Jahre Erfahrung. Termingerechte Ausführung. Fachgerechte Beratung.",
  keywords: "Maler Root, Maler Rontal, Malerarbeiten, Fassadenrenovation, Wohnungsrenovation, Tapezieren, Schimmelsanierung, Philipp Buehler",
};
