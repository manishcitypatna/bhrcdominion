"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LANDING_PAGE_IMAGES } from "../../../public/images/landingPageImages";

const highlights = [
  {
    title: "Become More Energetic And Full of Life",
    image: LANDING_PAGE_IMAGES.FEATURE_HIGHLIGHTS.ABOUT_1,
  },
  {
    title: "Personalized facial care designed just for you",
    image: LANDING_PAGE_IMAGES.FEATURE_HIGHLIGHTS.ABOUT_2,
  },
  {
    title: "Results-driven age management",
    image: LANDING_PAGE_IMAGES.FEATURE_HIGHLIGHTS.ABOUT_3,
  },
];

export default function FeatureHighlights() {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto py-[60px] md:py-[120px] bg-bg-light overflow-hidden">
      

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center container-custom">
        
        {/* Title + Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[879px] flex flex-col gap-6 items-center mb-12"
        >
          <h2 className="font-heading font-normal text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] text-primary">
            About Beverly Hills
          </h2>

          <p className="font-sans font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[1.2] tracking-[0.4px] text-text-muted max-w-[879px]">
            Beverly Hills Rejuvenation Center is well known for transforming the medical spa industry and 
            is associated with wellness and effective age management. Whether you are looking for skin 
            rejuvenation or body contouring, the med spa in San Antonio, TX provides advanced 
            treatments to help you reach your aesthetic goals.
          </p>
        </motion.div>

        {/* Highlights Row */}
        <div className="w-full max-w-[1083px] flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-9">
          
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex items-center gap-3 md:gap-4 max-w-[344px] justify-center md:justify-start text-center md:text-left flex-col md:flex-row"
            >
              
              {/* Icon Image */}
              <div className="w-[48px] h-[48px] relative shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <p className="font-sans font-medium text-[14px] md:text-[16px] leading-[1.1] text-primary max-w-[290px]">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Logo at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 md:mt-32 w-full flex justify-center"
        >
          <div className="relative w-full h-[15vw] md:h-[12vw] min-h-[100px] max-h-[300px] opacity-50">
            <Image
              src={LANDING_PAGE_IMAGES.FEATURE_HIGHLIGHTS.LOGO_BLACK}
              alt="Beverly Hills Logo"
              fill
              className="object-contain object-center"
            />
          </div>
        </motion.div>
      </div>


      {/* Hide scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}