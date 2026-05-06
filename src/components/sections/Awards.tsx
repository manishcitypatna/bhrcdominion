"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LANDING_PAGE_IMAGES } from "../../../public/images/landingPageImages";

const awards = [
  { name: "Aspire Presidential Champion", logo: LANDING_PAGE_IMAGES.AWARDS.AWARD_1 },
  { name: "Inc 500", logo: LANDING_PAGE_IMAGES.AWARDS.AWARD_2 },
  { name: "Top 500 Proud Member", logo: LANDING_PAGE_IMAGES.AWARDS.AWARD_3 },
  { name: "Award 4", logo: LANDING_PAGE_IMAGES.AWARDS.AWARD_4 },
];

export default function Awards() {
  return (
    <section className="py-[80px] bg-white">
      <div className="container-custom text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary text-3xl font-heading mb-16"
        >
          Awards & Recognition
        </motion.h2>

        <div className="mx-auto flex flex-nowrap justify-center items-center gap-4 md:gap-[38px] max-w-[692px] overflow-x-auto no-scrollbar pb-4 md:pb-0">
          {awards.map((award, index) => (
            <motion.div
              key={award.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-20 h-20 md:w-[108px] md:h-[108px] relative shrink-0"
            >
              <Image 
                src={award.logo} 
                alt={award.name} 
                fill 
                className="object-contain" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}