"use client";

import Image from "next/image";

interface BeforeAfterData {
  title: string;
  subtitle: string;
  images: string[];
}

export default function BeforeAfterSection({ data }: { data: BeforeAfterData }) {
  if (!data || !data.images || data.images.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-primary text-[32px] md:text-[40px] font-medium uppercase tracking-widest mb-2">
            {data.title}
          </h2>
          <h3 className="text-primary text-[24px] md:text-[32px] font-light uppercase tracking-widest">
            {data.subtitle}
          </h3>
          <div className="w-12 h-[2px] bg-primary/30 mx-auto mt-6" />
        </div>

        {/* IMAGES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.images.map((img, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-[6px] group">
              <Image
                src={img}
                alt={`${data.title} before and after ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Optional: Add custom arrows or branding if needed, 
                  but keeping it clean like the reference image */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
