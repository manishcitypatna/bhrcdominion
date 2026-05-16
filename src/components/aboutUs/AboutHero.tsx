"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_PAGE_IMAGES } from "../../../public/images/aboutPageImages";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] bg-white overflow-hidden">
      
      <Image
        src={ABOUT_PAGE_IMAGES.HERO.BANNER}
        alt="About Hero"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/10 z-[5]" />

      <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white drop-shadow-lg"
        >
          About Us
        </motion.h1>
      </div>

    </section>
  );
}
