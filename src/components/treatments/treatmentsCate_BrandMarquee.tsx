"use client";

import Image from "next/image";

interface BrandMarqueeProps {
  brands: string[];
}

export default function BrandMarquee({ brands }: BrandMarqueeProps) {
  // Triple the brands to ensure seamless loop even on ultra-wide screens
  const marqueeBrands = [...brands, ...brands, ...brands];

  return (
    <section className="w-full bg-white py-10 border-y border-gray-100 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {marqueeBrands.map((src, index) => (
          <div 
            key={`${src}-${index}`} 
            className="flex-shrink-0 mx-12 w-[120px] h-[40px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
          >
            <Image
              src={src}
              alt="Brand Logo"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
