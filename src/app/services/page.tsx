"use client";

import Footer from "@/components/layout/Footer";
import ServiceSectionCard from "@/components/services/ServiceSectionCard";
import { servicesData } from "@/data/servicesData";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div className="bg-bg-light min-h-screen pt-[103px] md:pt-[119px] lg:pt-[139px]">

      {/* HERO SECTION */}
<section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <Image
    src="/images/landing_page/our_service/our_service_1.png"
    alt="Services Hero"
    fill
    priority
    className="object-cover"
  />

  {/* OPTIONAL OVERLAY (softens image like figma) */}
  <div className="absolute inset-0 bg-white/10" />

  {/* TEXT */}
  <div className="
    absolute inset-0 
    flex items-center 
    max-w-[1440px] mx-auto 
    px-[clamp(20px,8vw,240px)]
  ">

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        text-primary 
        font-heading 
        text-[clamp(48px,6vw,96px)] 
        leading-[120%] 
        tracking-[1px]
        max-w-[500px]
      "
    >
      Our Premier Services
    </motion.h1>

  </div>

</section>

      {/* 🔥 SERVICES LIST */}
      <div className="flex flex-col gap-[60px] md:gap-[80px] pb-[80px]">

        {servicesData.map((service, index) => (
          <ServiceSectionCard
            key={index}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            image={service.image}
            price={service.price}
            reverse={service.reverse}
          />
        ))}

      </div>

    </div>
  );
}