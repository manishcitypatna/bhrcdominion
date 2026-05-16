"use client";

import { Phone, MapPin } from "lucide-react";

export default function TopStrip() {
  return (
    <div className="h-[31px] bg-primary">
      <div className="container-custom flex items-center justify-between h-full text-[12px] text-bg-light">
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-secondary" />
          <a href="tel:2108888889" className="hover:text-white transition-colors font-body">
            210 888 8889
          </a>
        </div>
        
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-secondary" />
          <span className="font-body">Dominion Creek</span>
        </div>
      </div>
    </div>
  );
}
