"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const awards = [
  { name: "Aspire Presidential Champion", logo: "/images/landing_page/Awards_&_Recognition/Awards_&_Recognition_1.png" },
  { name: "Inc 500", logo: "/images/landing_page/Awards_&_Recognition/Awards_&_Recognition_2.png" },
  { name: "Top 500 Proud Member", logo: "/images/landing_page/Awards_&_Recognition/Awards_&_Recognition_3.png" },
  { name: "Award 4", logo: "/images/landing_page/Awards_&_Recognition/Awards_&_Recognition_4.png" },
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

        <div className="mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-[38px] max-w-[692px]">
          {awards.map((award, index) => (
            <motion.div
              key={award.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-24 h-24 md:w-[108px] md:h-[108px] relative shrink-0"
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