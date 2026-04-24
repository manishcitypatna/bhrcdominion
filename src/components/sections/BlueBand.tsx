"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlueBand() {
  return (
    <section className="
      relative w-full max-w-[1920px] mx-auto 
      bg-[#224E76]
      
      py-14 px-4
      md:px-[clamp(20px,6vw,80px)]
      lg:px-[clamp(20px,8vw,160px)]
      lg:h-[467px]
      
      flex flex-col items-center justify-center 
      overflow-hidden
    ">
      {/* Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none">
        <span className="text-[32vw] md:text-[25vw] font-bold text-white uppercase tracking-tighter">
          BHRC
        </span>
      </div>

      <div className="w-full max-w-[1100px] mx-auto relative z-10 flex flex-col items-center">

        {/* Title */}
        <h3 className="
          text-white 
          text-sm md:text-[20px] 
          text-center 
          mb-8 md:mb-12 
          opacity-80
        ">
          Elevate Your Confidence
        </h3>

        {/* Content */}
        <div className="w-full flex flex-col gap-12 md:gap-16">

          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-5 md:gap-[28px] w-full"
          >
            {/* Image */}
            <div className="w-20 h-20 md:w-[100px] md:h-[100px] lg:w-[129px] lg:h-[129px] rounded-lg overflow-hidden relative flex-shrink-0">
              <Image 
                src="/images/landing_page/elevate_your_confidence/section2_1.jpg" 
                alt="" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Text */}
            <h2 className="
              text-white font-heading leading-[1.1] tracking-tight
                
              text-[4.8vw] 
              max-w-[300px]

              md:max-w-none
              md:text-[clamp(32px,4vw,64px)]

              !text-white   /* override global */
            ">
              Elevate Your Confidence
            </h2>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-5 md:gap-[28px] w-full"
          >
            {/* Text */}
            <h2 className="
              text-white font-heading leading-[1.1] tracking-tight
              
              text-[4.8vw] 
              max-w-[300px]

              md:ml-auto   /* push to right cleanly */
              md:max-w-none
              md:text-[clamp(32px,4vw,64px)]

              text-left md:text-right
            ">
              Experience the Difference
            </h2>

            {/* Image */}
            <div className="w-20 h-20 md:w-[100px] md:h-[100px] lg:w-[129px] lg:h-[129px] rounded-lg overflow-hidden relative flex-shrink-0">
              <Image 
                src="/images/landing_page/elevate_your_confidence/section2_2.jpg" 
                alt="" 
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