"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero_2() {
  return (
    <section className="relative w-full bg-[#224E76] overflow-hidden">
      <div className="container-custom py-4 md:py-8 lg:py-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-10 lg:gap-14">

          {/* TEXT CONTENT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 w-full md:max-w-[58%] lg:max-w-[720px]">
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-sm md:text-lg lg:text-xl font-medium mb-3 opacity-90"
            >
              Advanced Aesthetic Medicine & Wellness
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-[32px] md:text-[52px] lg:text-[68px] leading-[1.05] tracking-[-0.02em] mb-5 max-w-[13ch]"
            >
              Elevated Beauty Backed by Medical Expertise
            </motion.h1>

            {/* MOBILE IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] md:hidden mb-6"
            >
              <Image
                src="https://res.cloudinary.com/dcvco8nlz/image/upload/c_crop,g_north_west,h_964,w_450,x_515,y_103/2785650893665055b36de9f8b14cddf3dc6897aa_1_lst2cq.png"
                alt="Model"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed mb-7 max-w-[560px]"
            >
              From injectables and laser treatments to regenerative wellness therapies, BHRC delivers customized aesthetic care designed to help you look youthful, refreshed, and naturally radiant.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/consultation"
                className="inline-block px-8 md:px-10 py-4 bg-white text-[#224E76] rounded-lg text-base md:text-lg font-bold hover:bg-white/90 transition-all shadow-xl"
              >
                Request Consultation
              </Link>
            </motion.div>
          </div>

          {/* DESKTOP IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative w-[38%] lg:w-[42%] aspect-[3/4] max-h-[680px]"
          >
            <Image
              src="https://res.cloudinary.com/dcvco8nlz/image/upload/c_crop,g_north_west,h_964,w_450,x_515,y_103/2785650893665055b36de9f8b14cddf3dc6897aa_1_lst2cq.png"
              alt="Model"
              fill
              priority
              className="object-contain object-right-bottom"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}