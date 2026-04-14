"use client";

import { MapPin, Phone } from "lucide-react";

type Props = {
  title: string;
  mapEmbedUrl: string;
  mapLink: string;
  address: string;
  phone: string;
  timing: string;
};

export default function LocationCard({
  title,
  mapEmbedUrl,
  mapLink,
  address,
  phone,
  timing,
}: Props) {
  return (
    <div className="flex flex-col items-center text-center">

      {/* MAP */}
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <iframe
          src={mapEmbedUrl}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* CONTENT */}
      <div className="mt-6 flex flex-col items-center gap-3">

        <h3 className="text-primary text-[28px] md:text-[32px] font-heading">
          {title}
        </h3>

        <p className="text-primary/80 text-sm max-w-[320px] flex items-start gap-1">
          <MapPin size={14} className="mt-[2px]" />
          {address}
        </p>

        <div className="flex items-center gap-2 text-primary text-sm">
          <Phone size={14} />
          {phone}
        </div>

        <p className="text-primary/70 text-sm whitespace-pre-line">
          {timing}
        </p>

        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-2 px-4 py-2 
            border border-primary/30 
            rounded-md text-sm 
            text-primary 
            hover:bg-primary hover:text-white 
            transition
          "
        >
          Get Direction →
        </a>

      </div>
    </div>
  );
}