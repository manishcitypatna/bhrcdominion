"use client";

import Image from "next/image";

export default function HeroSection({ data }: any) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.bgImage}
          alt="background"
          fill
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY (luxury feel) */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container-custom flex flex-col justify-center py-20 md:py-32">

        {/* BREADCRUMB */}
        <div className="text-white/70 text-sm mb-6">
          {data.breadcrumb.map((item: string, index: number) => (
            <span key={index}>
              {item}
              {index !== data.breadcrumb.length - 1 && " / "}
            </span>
          ))}
        </div>

        {/* TITLE */}
        <h1 className="text-white max-w-2xl">
          {data.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-white/80 max-w-xl mt-6 leading-relaxed">
          {data.description}
        </p>

        {/* CTA BUTTON */}
        {data.cta && (
          <button className="mt-8 w-fit px-6 py-3 bg-white text-primary rounded-lg text-sm font-medium hover:bg-white/90 transition">
            {data.cta}
          </button>
        )}

      </div>

      {/* MODEL IMAGE */}
      <div className="absolute right-0 bottom-0 h-[60%] md:h-[80%] w-[50%] md:w-[40%] block">
        <Image
          src={data.modelImage}
          alt="model"
          fill
          className="object-contain object-bottom"
        />
      </div>

    </section>
  );
}