import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { CookieBanner } from "@/components/cookie-banner";
import { generateLocalBusinessJsonLd } from "@/lib/seo/jsonld";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maler Philipp Buehler GmbH | Modern & Artistic",
  description: "Qualitativ hochstehende Malerarbeiten mit modernem künstlerischem Anspruch. Über 20 Jahre Erfahrung in Root und Umgebung.",
  keywords: ["Maler Root", "Maler Rontal", "Malerarbeiten", "Fassadenrenovation", "Wohnungsrenovation", "Tapezieren"],
  authors: [{ name: "Philipp Buehler" }],
  creator: "Maler Philipp Buehler GmbH",
  metadataBase: new URL("https://maler-phb.ch"),
  openGraph: {
    title: "Maler Philipp Buehler GmbH | Modern & Artistic",
    description: "Qualitativ hochstehende Malerarbeiten mit modernem künstlerischem Anspruch.",
    url: "https://maler-phb.ch",
    siteName: "Maler Philipp Buehler GmbH",
    locale: "de_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateLocalBusinessJsonLd();

  return (
    <html lang="de-CH" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased mesh-gradient`}>
        <Navigation />
        <main className="noise">{children}</main>
        <Footer />
        <StickyCta />
        <CookieBanner />
      </body>
    </html>
  );
}
