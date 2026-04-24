"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const treatments = [
  {
    title: "Injectable Treatment",
    subtitle: "Botox, Dysport, Juvederm, Radiesse, Restylane, and Sculptra",
    image: "/images/landing_page/our_service/our_service_1.png",
  },
  {
    title: "Facial Treatment",
    subtitle: "Hydrafacials, Microneedling, and VI Peel",
    image: "/images/landing_page/our_service/our_service_2.png",
  },
  {
    title: "Skin Rejuvenation",
    subtitle: "CO2 Laser, PDO Threads, PRP Facial, and ZO Skin Health",
    image: "/images/landing_page/our_service/our_service_3.png",
  },
  {
    title: "Laser Hair Removal",
    subtitle: "Professional Hair Removal featuring Soprano technology",
    image: "/images/landing_page/our_service/our_service_4.png",
  },
  {
    title: "Body Contouring",
    subtitle: "Sculptra Butt Lift, EmSculpt, and Kybella",
    image: "/images/landing_page/our_service/our_service_1.png",
  },
  {
    title: "Regenerative Therapies",
    subtitle: "Morpheus8, Hair Restoration, and SkinPen Microneedling",
    image: "/images/landing_page/our_service/our_service_2.png",
  },
  {
    title: "Wellness Therapies",
    subtitle: "Medical Weight Loss featuring Semaglutide and Tirzepatide",
    image: "/images/landing_page/our_service/our_service_3.png",
  },
];

// Duplicate for infinite loop feel
const allTreatments = [...treatments];

export default function Treatment() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  // ✅ AUTO SCROLL
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused && !isInteracting && container) {
        container.scrollLeft += speed;

        const halfWidth = container.scrollWidth / 2;

        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft = 0;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isInteracting]);

  // ✅ ARROW CONTROL
  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    setIsInteracting(true);

    const isDesktop = window.innerWidth >= 1024;
    const isTablet = window.innerWidth >= 640;

    let cardWidth = 473;
    if (!isDesktop && isTablet) cardWidth = 360;
    if (!isTablet) cardWidth = 220;

    const gap = isDesktop ? 24 : isTablet ? 20 : 12;

    const scrollAmount = (cardWidth + gap) * 1.5;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(() => setIsInteracting(false), 2000);
  };

  return (
    <section className="relative w-full max-w-[1920px] mx-auto py-[120px] bg-white overflow-hidden">
      
      {/* HEADER */}
      <div className="flex justify-between items-center px-[clamp(20px,8vw,240px)] mb-12">
        <h2 className="text-primary text-[clamp(32px,4vw,48px)] font-heading">
          Our Treatment
        </h2>

        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() =>
          setTimeout(() => setIsInteracting(false), 1500)
        }
        className="flex gap-3 sm:gap-5 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth overscroll-x-contain px-[clamp(20px,8vw,240px)]"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          touchAction: "auto",
        }}
      >
        {allTreatments.map((treatment, index) => (
          <div
            key={`${treatment.title}-${index}`}
            className="relative flex-shrink-0 w-[220px] h-[330px] sm:w-[360px] sm:h-[520px] lg:w-[473px] lg:h-[650px] group cursor-pointer overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 group-hover:scale-[1.03] transition-transform duration-700">
              <Image
                src={treatment.image}
                alt={treatment.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[220px] lg:w-[292px] z-20 text-center text-white">
              <h3 className="font-heading text-[22px] lg:text-[28px] whitespace-nowrap">
                {treatment.title}
              </h3>
              <p className="text-[14px] lg:text-[16px] opacity-90 mt-1">
                {treatment.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}