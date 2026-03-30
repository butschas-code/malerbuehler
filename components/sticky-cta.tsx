"use client";

import { Phone, Mail, FileText } from "lucide-react";
import { business } from "@/lib/data/business";

export function StickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-paper border-t border-line lg:hidden">
      <div className="grid grid-cols-3 divide-x divide-line">
        <a
          href={`tel:${business.phoneFormatted}`}
          className="flex flex-col items-center justify-center py-3 text-brand-dark hover:bg-brand-light/50 transition-colors"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Anrufen</span>
        </a>
        <a
          href={`mailto:${business.email}`}
          className="flex flex-col items-center justify-center py-3 text-brand-dark hover:bg-brand-light/50 transition-colors"
        >
          <Mail className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">E-Mail</span>
        </a>
        <a
          href="/kontakt"
          className="flex flex-col items-center justify-center py-3 bg-brand text-white hover:bg-brand-dark transition-colors"
        >
          <FileText className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Offerte</span>
        </a>
      </div>
    </div>
  );
}
