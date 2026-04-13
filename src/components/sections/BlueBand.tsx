"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlueBand() {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto lg:h-[467px] bg-[#224E76] py-16 lg:py-[64px] px-5 md:px-[clamp(20px,6vw,80px)] lg:px-[clamp(20px,8vw,160px)] flex flex-col items-center overflow-hidden">
      {/* Background large logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none">
        <span className="text-[25vw] font-bold text-white uppercase tracking-tighter">BHRC</span>
      </div>

      <div className="w-full relative z-10 flex flex-col items-center">
        {/* Section Title (Small) */}
        <h3 className="text-white text-[16px] md:text-[20px] font-heading font-normal leading-[1.2] text-center mb-12 opacity-80">
          Elevate Your Confidence
        </h3>

        {/* Content Layout - Vertical Stack of Rows */}
        <div className="w-full flex flex-col gap-12 lg:gap-16">
          
          {/* Item 1 - Top Row (Left Aligned) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center sm:items-center gap-[16px] md:gap-[28px] w-full justify-start"
          >
            <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[129px] lg:h-[129px] rounded-lg overflow-hidden flex-shrink-0 relative shadow-xl">
              <Image 
                src="/images/landing_page/elevate_your_confidence/section2_1.jpg" 
                alt="Confidence Icon 1" 
                fill 
                className="object-cover" 
              />
            </div>
            <h2 className="text-white text-[clamp(24px,5vw,64px)] leading-[1.1] font-heading font-normal tracking-tight text-center sm:text-left">
              Elevate Your Confidence
            </h2>
          </motion.div>

          {/* Item 2 - Bottom Row (Right Aligned) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center sm:items-center gap-[16px] md:gap-[28px] w-full justify-end"
          >
            <h2 className="text-white text-[clamp(24px,5vw,64px)] leading-[1.1] font-heading font-normal tracking-tight sm:whitespace-nowrap text-center sm:text-right">
              Experience the Difference
            </h2>
            <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[129px] lg:h-[129px] rounded-lg overflow-hidden flex-shrink-0 relative shadow-xl">
              <Image 
                src="/images/landing_page/elevate_your_confidence/section2_2.jpg" 
                alt="Confidence Icon 2" 
                fill 
                className="object-cover" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
