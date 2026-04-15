"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const treatments = [
  {
    title: "Face & Neck Treatments",
    desc: "Botox, Neuromodulators and Dermal Fillers",
    image: "/images/Treatment/01.png",
    slug: "face-neck",
  },
  {
    title: "Skin Treatment",
    desc: "Advanced skin renewal and resurfacing",
    image: "/images/Treatment/02.png",
    slug: "skin-rejuvenation", // Separate page as requested
  },
  {
    title: "Body Treatments",
    desc: "Precision-based skin and hair solutions",
    image: "/images/Treatment/03.png",
    slug: "laser-treatments", // Separate page as requested
  },
  {
    title: "Internal Wellness",
    desc: "Internal balance and vitality treatments",
    image: "/images/Treatment/06.png",
    slug: "internal-wellness",
  },
  {
    title: "Rejuvenation",
    desc: "Natural healing and rejuvenation",
    image: "/images/Treatment/05.png",
    slug: "rejuvenation",
  },
  {
    title: "Symptoms",
    desc: "Targeted solutions for common concerns",
    image: "/images/Treatment/04.png",
    slug: "symptoms",
  },
];

export default function TreatmentGrid() {
  return (
    <section className="w-full bg-bg-light py-[80px]">

      <div className="max-w-[1440px] mx-auto px-[clamp(20px,8vw,240px)]">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">

          {treatments.map((item, index) => {
            // Determine the correct path
            const isSeparatePage = item.slug === "skin-rejuvenation" || item.slug === "laser-treatments";
            const href = isSeparatePage ? `/treatments/${item.slug}` : `/treatments/${item.slug}`; 
            // The request says "We will build different page for Skin Rejuvenation and Laser Treatments"
            // For now, I'll keep them pointing to the same dynamic structure or specialized paths if they exist.
            // Actually, the prompt says "map this treatment ... [slug]/page.tsx ... make sure if user click ... it should show"
            
            return (
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
                <Link href={href}>
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
                </Link>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}