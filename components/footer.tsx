"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { business, navigation } from "@/lib/data/business";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-white pb-16 lg:pb-0">
      
      {/* Map Section */}
      <div className="relative w-full h-[300px] lg:h-[400px]">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1234567890123!2d8.3904!3d47.1914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(business.address.full)}!5e0!3m2!1sde!2sch!4v1234567890`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Standort Maler Philipp Buehler GmbH"
          className="w-full h-full"
        />
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4" style={{ color: '#054d3d' }}>
              {business.name}
            </h3>
            <p className="mb-6 max-w-md leading-relaxed" style={{ color: '#054d3d' }}>
              {business.description}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4" style={{ color: '#054d3d' }}>Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-brand transition-colors group"
                  style={{ color: '#054d3d' }}
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#054d3d' }} />
                  <span>
                    {business.address.street}
                    <br />
                    {business.address.zip} {business.address.city}
                  </span>
                  <ArrowRight className="w-4 h-4 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${business.phoneFormatted}`}
                  className="flex items-center gap-3 hover:text-brand transition-colors"
                  style={{ color: '#054d3d' }}
                >
                  <Phone className="w-5 h-5" style={{ color: '#054d3d' }} />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-3 hover:text-brand transition-colors"
                  style={{ color: '#054d3d' }}
                >
                  <Mail className="w-5 h-5" style={{ color: '#054d3d' }} />
                  {business.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4" style={{ color: '#054d3d' }}>Links</h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-brand transition-colors artistic-underline"
                    style={{ color: '#054d3d' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Route Planning CTA */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center gap-4">
            <MapPin className="w-6 h-6" style={{ color: '#054d3d' }} />
            <div className="text-center">
              <p className="font-medium" style={{ color: '#054d3d' }}>{business.address.full}</p>
              <p className="text-sm" style={{ color: '#054d3d' }}>
                {business.phone} · {business.email}
              </p>
            </div>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm" style={{ color: '#054d3d' }}>
              © {currentYear} {business.name}. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6">
              {navigation.legal.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm hover:text-brand transition-colors"
                  style={{ color: '#054d3d' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
