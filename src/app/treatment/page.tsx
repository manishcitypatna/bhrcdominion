"use client";

import TreatmentSectionCard from "@/components/treatment/TreatmentSectionCard";
import { treatmentsData } from "@/data/treatmentData";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TreatmentPage() {
  return (
    <main className="relative bg-bg-light min-h-screen overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">

        <Image
          src="https://res.cloudinary.com/dcvco8nlz/image/upload/v1778163419/14deb129f3636ef89d24a69d079753a7ddc4bc88_uqnpiy.png"
          alt="Treatment Hero"
          fill
          priority
          className="object-cover"
        /> 

        <div className="absolute inset-0 bg-white/10" />

        <div className="
          absolute inset-0 
          flex items-center 
          max-w-full mx-auto 
          px-6 md:px-20 xl:px-[240px]
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
            Our Premier Treatment
          </motion.h1>
        </div>

      </section>

      {/* ================= TREATMENT LIST ================= */}
      <section className="flex flex-col gap-[32px] md:gap-[40px] pb-[80px]">

        {treatmentsData.map((treatment: any, index: number) => (
          <TreatmentSectionCard
            key={index}
            title={treatment.title}
            subtitle={treatment.subtitle}
            description={treatment.description}
            image={treatment.image}
            price={treatment.price}
            reverse={treatment.reverse}
            link={treatment.link}
          />
        ))}

      </section>

    </main>
  );
}