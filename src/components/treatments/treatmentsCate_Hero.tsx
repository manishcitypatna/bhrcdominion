"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  data: {
    bgImage: string;
    modelImage: string;
    title: string;
    description: string;
  };
}

export default function TreatmentsCate_Hero({ data }: HeroProps) {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-[#F8FBFF]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.bgImage}
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-20 xl:px-[240px] flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col max-w-[600px] text-center md:text-left"
          >
            <h1 className="text-primary font-heading text-[48px] md:text-[64px] lg:text-[80px] leading-[1.1] mb-6">
              {data.title}
            </h1>
            <p className="text-primary/70 text-[16px] md:text-[18px] leading-relaxed">
              {data.description}
            </p>
          </motion.div>

          {/* Model Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] shrink-0"
          >
            <Image
              src={data.modelImage}
              alt={data.title}
              fill
              priority
              className="object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
