"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Star, Sparkles } from "lucide-react";
import { business, aboutContent, processSteps, reviews } from "@/lib/data/business";
import { unsplashImages } from "@/lib/images/unsplash";
import { MaterialSwipeCard } from "./material-swipe-card";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero-painter.jpg"
          alt="Maler bei der Arbeit - Maler Philipp Buehler GmbH"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-brand/10 blur-3xl float" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-accent-purple/10 blur-3xl float-delayed" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30"
      >
        <div className="max-w-3xl">
          {/* Artistic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            style={{
              background: 'linear-gradient(135deg, hsl(0 0% 98%) 0%, hsl(170 80% 65%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {aboutContent.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed mb-8 max-w-2xl font-normal drop-shadow-md"
          >
            Qualität und termingerechte Ausführung. Kundenzufriedenheit liegt mir besonders am Herzen, deshalb lege ich sehr viel Wert auf hohe Qualität und eine termingerechte Ausführung.
          </motion.p>

          {/* Artistic CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-primary-foreground font-semibold rounded-xl glow-hover transition-all duration-300 pulse-glow"
            >
              Offerte anfragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${business.phoneFormatted}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-foreground font-semibold rounded-xl glow-hover transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              {business.phone}
            </a>
          </motion.div>

          {/* Artistic Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 mt-10 pt-8 border-t border-border/50"
          >
            <div className="px-3 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg" style={{ backgroundColor: 'hsl(170, 90%, 18%)' }}>
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">20+</p>
              <p className="text-xs sm:text-base text-white font-medium mt-1">Jahre Erfahrung</p>
            </div>
            <div className="px-3 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg" style={{ backgroundColor: 'hsl(170, 90%, 18%)' }}>
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">2021</p>
              <p className="text-xs sm:text-base text-white font-medium mt-1">Gründung</p>
            </div>
            <div className="px-3 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg" style={{ backgroundColor: 'hsl(170, 90%, 18%)' }}>
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">100%</p>
              <p className="text-xs sm:text-base text-white font-medium mt-1">Zufriedenheit</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Artistic divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
    </section>
  );
}

export function ServicesPreview() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-brand font-medium mb-3 gradient-text-cool">Leistungen</p>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            Was wir für Sie tun
          </h2>
          <p className="text-gray-300 text-lg">
            Von der Beratung bis zur Ausführung – alles aus einer Hand.
            Hochwertige Malerarbeiten für Innen und Außen.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "01", title: "Malerarbeiten", desc: "Innen und Außen", img: unsplashImages.services.general.url },
            { num: "02", title: "Renovationen", desc: "Wohnung & Fassade", img: "/images/renovierung.png" },
            { num: "03", title: "Tapezieren", desc: "Alle Beläge", img: "/images/tapete-01.jpg" },
            { num: "04", title: "Spezialarbeiten", desc: "Schimmel & Graffiti", img: "/images/graffiti.jpg" },
          ].map((service, index) => (
            <MaterialSwipeCard
              key={service.num}
              number={service.num}
              title={service.title}
              description={service.desc}
              image={service.img}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="py-12 lg:py-16 relative overflow-hidden" style={{ background: 'linear-gradient(to right, hsl(0 0% 100%) 0%, hsl(170 60% 95%) 100%)' }}>
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="font-bold mb-2 text-sm uppercase tracking-wider" style={{ color: '#054d3d' }}>Ablauf</p>
          <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold mb-3" style={{ color: '#054d3d !important' }}>
            So arbeiten wir
          </h2>
          <p className="text-base" style={{ color: '#054d3d' }}>
            Klar und ohne Umwege. Von der ersten Begehung bis zur fertigen Ausführung.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative h-full"
            >
              <div className="bg-gray-50 rounded-xl p-6 h-full border-2 border-brand shadow-[0_0_15px_rgba(45,212,191,0.5)]">
                <span className="font-display text-4xl font-bold" style={{ color: '#054d3d' }}>
                  {step.number}
                </span>
                <h3 className="font-display text-lg font-bold mt-3 mb-2" style={{ color: '#054d3d !important' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#054d3d' }}>
                  {step.description}
                </p>
              </div>
              
              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-brand/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 pb-8 lg:pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative border-gradient">
              <Image
                src="/ueber-uns.jpg"
                alt="Über uns – Maler Philipp Bühler GmbH"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-brand font-medium mb-3 gradient-text-cool">Über uns</p>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
              Unsere Farbe. Dein Stil.
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>{aboutContent.story}</p>
              <p>{aboutContent.experience}</p>
              <p>{aboutContent.approach}</p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border/50">
              {aboutContent.values.map((value) => (
                <div key={value.title}>
                  <h4 className="font-medium text-white mb-1">{value.title}</h4>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background glow - same as About section */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-brand font-medium mb-3 gradient-text-cool"
          >
            Bewertungen
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mb-4"
          >
            Was unsere Kunden sagen
          </motion.h2>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(45, 212, 191, 0.3)",
                transition: { duration: 0.3 }
              }}
              className="glass rounded-xl p-6 cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              {/* Animated Stars */}
              <motion.div 
                className="flex gap-1 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
              >
                {Array.from({ length: review.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.15 + 0.4 + (i * 0.1),
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.3, rotate: 15 }}
                  >
                    <Star className="w-5 h-5 fill-brand text-brand" />
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                className="text-white leading-relaxed mb-4"
              >
                "{review.text}"
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.6 }}
                className="pt-4 border-t border-border/50"
              >
                <p className="font-medium text-white">{review.author}</p>
                <p className="text-sm text-gray-400">{review.date}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://www.google.com/search?q=Maler+Philipp+Buehler+GmbH+Root+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-primary-foreground font-semibold rounded-xl glow-hover transition-all duration-300 pulse-glow"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Bewertung auf Google schreiben
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(to right, hsl(0 0% 100%) 0%, hsl(170 60% 95%) 100%)' }}>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mb-6" style={{ color: '#054d3d !important' }}>
            Bereit für Ihr Projekt?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#054d3d' }}>
            Lassen Sie uns zusammen Ihre Räume neu gestalten.
            Kontaktieren Sie mich für eine unverbindliche Beratung.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-50 text-[#054d3d] font-semibold rounded-xl border-2 border-brand shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all duration-300"
            >
              Offerte anfragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${business.phoneFormatted}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-50 text-[#054d3d] font-semibold rounded-xl border-2 border-brand shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              {business.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
