"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { services, additionalServices } from "@/lib/data/business";
import { unsplashImages } from "@/lib/images/unsplash";
import { Brush, Home, Building2, Wallpaper, HardHat, Shield, SprayCan } from "lucide-react";

const serviceIcons = [
  Brush,
  Home,
  Building2,
  Wallpaper,
  HardHat,
  Shield,
  SprayCan,
];

// Service-specific free stock images from Unsplash
const serviceImages = [
  "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80", // Malerarbeiten - painter with roller
  "/images/renovierung-wohnung.jpg", // Wohnungsrenovation - custom local image
  "/images/renovierung-fassade.jpg", // Fassadenrenovation - custom local image
  "/images/tapezieren.jpg", // Tapezieren - custom local image
  "/images/gipsarbeiten.jpg", // Gipserarbeiten - custom local image
  "/images/schimmelsanierung.jpg", // Schimmelsanierung - custom local image
  "/images/graffiti.jpg", // Graffitischutz - custom local image
];

export default function DienstleistungenPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Full Width Hero with Text Overlay */}
      <section className="relative h-[600px] lg:h-[800px] w-full -mt-[1px]">
        <Image
          src="/images/dienstleistungen-hero.jpg"
          alt="Maler bei der Arbeit"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-3xl"
            >
              <p className="text-brand font-medium mb-3">Leistungen</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                style={{
                  background: 'linear-gradient(135deg, hsl(0 0% 98%) 0%, hsl(170 80% 65%) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Unsere Dienstleistungen
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed mb-8 max-w-2xl font-normal drop-shadow-md">
                Von der Beratung bis zur Ausführung – alles aus einer Hand. 
                Hochwertige Malerarbeiten für Innen und Außen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] || Brush;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-serif text-4xl font-semibold text-brand/30">
                        {service.number}
                      </span>
                      <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-brand" />
                      </div>
                    </div>
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-white/80 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      {service.descriptionExt}
                    </p>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                      <Image
                        src={serviceImages[index] || serviceImages[0]}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Corner Frame */}
                      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-brand/40" />
                      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-brand/40" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
