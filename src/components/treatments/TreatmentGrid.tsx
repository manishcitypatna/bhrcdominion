"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const treatments = [
  {
    title: "Face & Neck Treatments",
    desc: "Botox, Neuromodulators and Dermal Fillers",
    image: "/images/Treatment/01.png",
  },
  {
    title: "Skin Rejuvenation",
    desc: "Advanced skin renewal and resurfacing",
    image: "/images/Treatment/02.png",
  },
  {
    title: "Laser Treatments",
    desc: "Precision-based skin and hair solutions",
    image: "/images/Treatment/03.png",
  },
  {
    title: "Body Contouring",
    desc: "Shape and sculpt your body effectively",
    image: "/images/Treatment/04.png",
  },
  {
    title: "Regenerative Therapies",
    desc: "Natural healing and rejuvenation",
    image: "/images/Treatment/05.png",
  },
  {
    title: "Wellness Therapies",
    desc: "Internal balance and vitality treatments",
    image: "/images/Treatment/06.png",
  },
];

export default function TreatmentGrid() {
  return (
    <section className="w-full bg-bg-light py-[80px]">

      <div className="max-w-[1440px] mx-auto px-[clamp(20px,8vw,240px)]">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">

          {treatments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="group"
            >

              <div className="
                w-full h-[650px] 
                bg-[#2B5C8A] 
                rounded-[8px] 
                overflow-hidden 
                relative 
                transition-all duration-300
                group-hover:-translate-y-2
                group-hover:shadow-xl
              ">

                {/* IMAGE */}
                <div className="relative w-full h-[474px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                      object-cover 
                      transition-transform duration-700 
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="
                  absolute bottom-0 left-0 w-full h-[184px] 
                  bg-white 
                  flex items-center justify-center
                ">

                  <div className="flex flex-col items-center gap-[8px] text-center px-[20px]">

                    <h3 className="text-primary text-[28px] leading-[120%] tracking-[1px]">
                      {item.title}
                    </h3>

                    <p className="text-[16px] text-primary/80">
                      {item.desc}
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}