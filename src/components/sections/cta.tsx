"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CTA_IMAGES = {
  bg: "/images/landing_page/seeTheDifference/seeTheDifference_bg.png",
  model: "/images/landing_page/seeTheDifference/seeTheDifference_model.png",
  logo: "/images/landing_page/logo/logo_blue.png",
};

export default function CTA() {
  return (
    <section
      className="relative w-full 
      min-h-[320px] 
      md:min-h-[400px] 
      lg:min-h-[460px] 
      py-[40px] md:py-[60px] lg:py-[70px] 
      overflow-hidden"
    >

      {/* BACKGROUND → ONLY DESKTOP */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src={CTA_IMAGES.bg}
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* MODEL IMAGE → ALWAYS VISIBLE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
          absolute right-0 top-0 h-full 
          w-full 
          md:w-[50%] 
          lg:w-[45%]"
      >
        <Image
          src={CTA_IMAGES.model}
          alt="Model"
          fill
          className="object-cover object-left"
          priority
        />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-8 flex items-center h-full">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 md:gap-6 
                     max-w-full 
                     sm:max-w-[520px] 
                     md:max-w-[600px]"
        >

          {/* LOGO */}
          <div className="w-[90px] h-[120px] 
                          sm:w-[110px] sm:h-[140px] 
                          md:w-[140px] md:h-[180px] 
                          lg:w-[160px] lg:h-[210px] 
                          relative">
            <Image
              src={CTA_IMAGES.logo}
              alt="logo"
              fill
              className="object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col gap-2">
            <h2 className="text-primary text-[clamp(22px,5vw,56px)] leading-[1.2] font-heading">
              See The Difference
            </h2>

            <p className="text-primary/80 
                          text-[13px] 
                          sm:text-[14px] 
                          md:text-[16px] 
                          lg:text-[18px] 
                          leading-[1.5]">
              Connect with a skilled Provider to explore your skin goals.
              Receive a tailored treatment plan designed just for you.
              Start your journey to healthier skin today.
            </p>
          </div>

          {/* BUTTON */}
          <button className="mt-2 w-fit bg-primary text-white 
                             px-4 md:px-5 
                             py-2 md:py-2.5 
                             rounded-[8px] 
                             text-xs md:text-sm 
                             font-medium 
                             flex items-center gap-2 
                             hover:opacity-90 transition">
            Request a Consultation
            <ArrowUpRight size={14} />
          </button>

        </motion.div>
      </div>
    </section>
  );
}