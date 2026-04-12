"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const services = [
 {
    title: "Injectable Services",
    subtitle: "Botox, Dysport, Juvederm, Radiesse, Restylane, and Sculptra",
    image: "/images/landing_page/our_service/our_service_1.png",
  },
  {
    title: "Facial Services",
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

// Doubled items for seamless "circle" loop
const allServices = [...services];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const speed = 0.5; // Very slow speed for continuous feel

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += speed;
        
        // Calculate the width of one complete set of items
        const firstSetWidth = scrollContainer.scrollWidth / 2;
        
        // If we reach the end of the first set, jump back to the beginning
        if (scrollContainer.scrollLeft >= firstSetWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    // Get card width dynamically based on screen size
    const isDesktop = window.innerWidth >= 1024;
    const isTablet = window.innerWidth >= 640;
    
    let cardWidth = 473; // Desktop
    if (!isDesktop && isTablet) cardWidth = 360; // Tablet
    if (!isTablet) cardWidth = 280; // Mobile
    
    const gap = isDesktop ? 24 : isTablet ? 20 : 16;
    
    // Scroll 1.5 cards as requested
    const scrollAmount = (cardWidth + gap) * 1.5;
    
    scrollContainer.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full max-w-[1920px] mx-auto py-[120px] bg-white overflow-hidden">
      {/* Header Container */}
      <div className="flex justify-between items-center px-[clamp(20px,8vw,240px)] mb-12">
        <h2 className="text-primary text-[clamp(32px,4vw,48px)] font-heading font-normal leading-tight">
          Our Services
        </h2>
        <div className="flex gap-4">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all focus:outline-none"
            aria-label="Scroll left"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all focus:outline-none"
            aria-label="Scroll right"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth px-[clamp(20px,8vw,240px)] touch-pan-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {allServices.map((service, index) => (
          <div
            key={`${service.title}-${index}`}
            className="relative flex-shrink-0 w-[280px] h-[420px] sm:w-[360px] sm:h-[520px] lg:w-[473px] lg:h-[650px] group cursor-pointer overflow-hidden rounded-lg"
          >
            {/* Background Image */}
            <div className="absolute inset-0 group-hover:scale-[1.03] transition-transform duration-700">
               <Image 
                 src={service.image} 
                 alt={service.title} 
                 fill 
                 className="object-cover" 
               />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            
            {/* Text Content Container */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[220px] lg:w-[292px] z-20 flex flex-col gap-2 text-center text-white">
              <h3 className="font-heading font-normal text-[22px] lg:text-[28px] leading-[1.2] tracking-[1px] whitespace-nowrap">
                {service.title}
              </h3>
              <p className="font-sans font-medium text-[14px] lg:text-[16px] leading-[1.1] opacity-90 max-w-[220px] lg:max-w-[292px] mx-auto">
                {service.subtitle}
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
