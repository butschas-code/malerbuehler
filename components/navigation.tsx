"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navigation, business } from "@/lib/data/business";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border/20 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-3xl lg:text-4xl font-bold gradient-text-cool">
              Maler Bühler
            </span>
          </Link>

          {/* Desktop Navigation + CTA */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-black hover:text-brand transition-colors duration-200 artistic-underline"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${business.phoneFormatted}`}
              className="flex items-center gap-2 text-base font-medium text-black hover:text-brand transition-colors"
            >
              <Phone className="w-4 h-4" />
              {business.phone}
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-brand text-primary-foreground text-sm font-semibold rounded-lg glow-hover transition-all duration-300"
            >
              Offerte anfragen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-black hover:text-brand transition-colors"
            aria-label={isOpen ? "Menü schliessen" : "Menü öffnen"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-border/20"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-lg font-medium text-black hover:text-brand transition-colors artistic-underline"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/50 space-y-3">
                <a
                  href={`tel:${business.phoneFormatted}`}
                  className="flex items-center gap-2 text-brand font-medium"
                >
                  <Phone className="w-5 h-5" />
                  {business.phone}
                </a>
                <Link
                  href="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-brand text-primary-foreground font-semibold rounded-lg glow-hover transition-all duration-300"
                >
                  Offerte anfragen
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
