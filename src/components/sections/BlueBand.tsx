"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LANDING_PAGE_IMAGES } from "../../../public/images/landingPageImages";

export default function BlueBand() {
  return (
    <section className="
      relative w-full max-w-[1920px] mx-auto 
      bg-[#224E76]
      
      py-16 px-6
      md:px-[clamp(20px,6vw,80px)]
      lg:px-[clamp(20px,8vw,160px)]
      lg:h-[467px]
      
      flex flex-col items-center justify-center 
      overflow-hidden
    ">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] md:opacity-[0.05] pointer-events-none select-none z-0">
        <span className="text-[40vw] md:text-[25vw] font-bold text-white uppercase tracking-tighter">
          BHRC
        </span>
      </div>

      <div className="w-full max-w-[1100px] mx-auto relative z-10 flex flex-col items-center">

        {/* Title / Eyebrow (Hidden on mobile to avoid redundancy) */}
        <h3 className="
          hidden md:block
          text-white 
          text-sm md:text-[20px] 
          text-center 
          mb-8 md:mb-12 
          opacity-80
        ">
          Elevate Your Confidence
        </h3>

        {/* Content */}
        <div className="w-full flex flex-col gap-16 md:gap-16">

          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-[28px] w-full"
          >
            {/* Image */}
            <div className="w-24 h-24 md:w-[100px] md:h-[100px] lg:w-[129px] lg:h-[129px] rounded-xl overflow-hidden relative flex-shrink-0 shadow-2xl">
              <Image 
                src={LANDING_PAGE_IMAGES.BLUE_BAND.SECTION_1} 
                alt="Wellness Treatment" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Text */}
            <h2 className="
              text-white font-heading leading-[1.1] tracking-tight
              text-[32px] sm:text-[40px] md:text-[clamp(32px,4vw,64px)]
              text-center md:text-left
              max-w-[400px] md:max-w-none
              !text-white
            ">
              Elevate Your Confidence
            </h2>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-[28px] w-full"
          >
            {/* Text */}
            <h2 className="
              text-white font-heading leading-[1.1] tracking-tight
              text-[32px] sm:text-[40px] md:text-[clamp(32px,4vw,64px)]
              text-center md:text-right
              max-w-[400px] md:max-w-none
              md:ml-auto
            ">
              Experience the Difference
            </h2>

            {/* Image */}
            <div className="w-24 h-24 md:w-[100px] md:h-[100px] lg:w-[129px] lg:h-[129px] rounded-xl overflow-hidden relative flex-shrink-0 shadow-2xl">
              <Image 
                src={LANDING_PAGE_IMAGES.BLUE_BAND.SECTION_2} 
                alt="Rejuvenation Result" 
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