"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[700px] bg-white overflow-hidden">
      
      <Image
        src="/images/aboutUs/0001.png"
        alt="About Hero"
        fill
        priority
        className="object-cover object-center -mt-[1px]"
      />

      <div className="absolute top-[64px] left-1/2 -translate-x-1/2 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-heading text-[64px] leading-[120%]"
        >
          About Us
        </motion.h1>
      </div>

    </section>
  );
}