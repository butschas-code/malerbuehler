"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { business } from "@/lib/data/business";

export default function KontaktPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Header */}
      <section className="py-12 lg:py-20 bg-brand-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-brand font-medium mb-3">Kontakt</p>
            <h1 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-ink mb-4">
              Gerne für Sie da
            </h1>
            <p className="text-muted text-lg">
              Bei Anfragen, Abklärungen und sonstigen Anliegen stehe ich Ihnen
              jederzeit zur Verfügung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl border border-line text-center"
            >
              <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-brand" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                Rufen Sie an
              </h3>
              <p className="text-muted text-sm mb-4">
                Während den Büroöffnungszeiten bin ich gerne für Sie da.
              </p>
              <a
                href={`tel:${business.phoneFormatted}`}
                className="text-brand-dark font-medium hover:text-brand transition-colors"
              >
                {business.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl border border-line text-center"
            >
              <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-brand" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                E-Mail
              </h3>
              <p className="text-muted text-sm mb-4">
                Offertanfragen mit Fotos und Anhängen gerne per E-Mail.
              </p>
              <a
                href={`mailto:${business.email}`}
                className="text-brand-dark font-medium hover:text-brand transition-colors"
              >
                {business.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl border border-line text-center"
            >
              <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-brand" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                Adresse
              </h3>
              <p className="text-muted text-sm mb-4">
                Maler Philipp Buehler GmbH
              </p>
              <p className="text-ink">
                {business.address.street}
                <br />
                {business.address.zip} {business.address.city}
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white p-8 lg:p-12 rounded-2xl border border-line">
              <h2 className="font-serif text-2xl font-semibold text-ink mb-2">
                Kontaktformular
              </h2>
              <p className="text-muted mb-8">
                Füllen Sie das Formular aus – ich melde mich so schnell wie möglich.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-paper border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-paper border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                      placeholder="ihre@email.ch"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-paper border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ink mb-2">
                    Betreff *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-paper border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="offerte">Offertanfrage</option>
                    <option value="beratung">Beratung</option>
                    <option value="termin">Termin vereinbaren</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-paper border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors resize-none"
                    placeholder="Ihre Nachricht..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white font-medium rounded-xl hover:bg-brand-dark transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Nachricht senden
                </button>
              </form>

              <p className="text-center text-sm text-muted mt-6">
                * Pflichtfelder
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
