"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { LANDING_PAGE_IMAGES } from "../../../public/images/landingPageImages";

export default function LedBySpecialists() {
  return (
    <section className="w-full bg-[#EBF5FF] py-[70px] md:py-[90px] lg:py-[100px]">
      <div className="container-custom">

        {/* Title */}
        <h2 className="text-primary text-[clamp(28px,4vw,48px)] text-center mb-10 md:mb-12 font-heading">
          Led by Specialists
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 md:gap-10 lg:gap-12 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full 
              h-[280px] 
              sm:h-[360px] 
              md:h-[440px] 
              lg:h-[520px] 
              rounded-[8px] overflow-hidden"
          >
            <Image
              src={LANDING_PAGE_IMAGES.LED_BY_SPECIALISTS.SPECIALIST}
              alt="Our Specialists"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 968px"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 md:gap-8 max-w-[520px] lg:max-w-[440px] mx-auto lg:mx-0"
          >

            {/* TEXT */}
            <div className="flex flex-col gap-4 md:gap-5 text-[15px] md:text-[17px] lg:text-[18px] leading-[1.6] text-primary/80">
              <p>
                Welcome to Beverly Hills Rejuvenation Center at Dominion Creek, where our team is committed to enhancing your natural beauty and well-being. Led by our experienced Medical Director, our experts prioritize providing the highest standard of care.
              </p>

              <p>
                Our Nurse Injector & Aesthetic Specialist brings years of expertise in injectable treatments and aesthetic procedures, ensuring stunning, natural-looking results.
              </p>

              <p>
                Our Licensed Esthetician has a deep understanding of skincare and customizes treatments to reveal your most radiant complexion. Our Patient Coordinator and Office Manager work tirelessly to ensure your experience is seamless and exceptional.
              </p>
            </div>

            {/* BUTTON */}
            <button className="w-fit border border-[#2B5C8A] text-[#2B5C8A] px-5 md:px-6 py-2 md:py-2.5 rounded-[8px] text-[13px] md:text-[14px] font-medium flex items-center gap-2 hover:bg-[#2B5C8A] hover:text-white transition-all">
              Learn More
              <ArrowUpRight size={16} />
            </button>

          </motion.div>

        </div>
      </div>
    </section>
  );
}