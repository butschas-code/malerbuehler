"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "necessary");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-16 lg:bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-[#0d1f1c] border border-brand/30 rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-center">
        <div className="flex-1 text-sm text-gray-300 leading-relaxed">
          Diese Website verwendet Cookies, um die Nutzerfreundlichkeit zu verbessern.
          Gemäss{" "}
          <span className="text-white font-medium">nDSG</span>{" "}
          informieren wir Sie über die Verwendung von Cookies.{" "}
          <Link href="/datenschutz" className="text-brand underline underline-offset-2 hover:text-brand/80 transition-colors">
            Datenschutzerklärung
          </Link>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-3 py-2"
          >
            Nur notwendige
          </button>
          <button
            onClick={accept}
            className="text-sm font-semibold px-5 py-2.5 bg-brand text-primary-foreground rounded-lg glow-hover transition-all duration-300"
          >
            Akzeptieren
          </button>
          <button
            onClick={decline}
            aria-label="Schliessen"
            className="text-gray-500 hover:text-white transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
