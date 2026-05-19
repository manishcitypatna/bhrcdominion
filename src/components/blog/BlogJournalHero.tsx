"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogJournalHero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dcvco8nlz/image/upload/v1779192203/BHRC-DOMINION-PICS-05-scaled_dbqbos.jpg" // Using an existing blog image as placeholder
        alt="The Med Spa Journal Hero"
        fill
        className="object-cover"
        priority
      />
      
      {/* Semi-transparent Primary Color Overlay */}
      <div className="absolute inset-0 bg-primary/0" />

      {/* Content Container */}
      <div className="absolute inset-0 flex items-end md:items-center justify-start md:px-[clamp(20px,8vw,120px)]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-primary/100 border-t md:border border-white/20 p-6 md:p-12 text-center md:text-left w-full md:w-auto md:max-w-[700px] backdrop-blur-md"
        >
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-heading mb-3 tracking-wider uppercase">
            The Med Spa Journal
          </h1>
          <p className="text-white/90 text-[10px] md:text-sm tracking-[0.2em] uppercase font-light italic leading-relaxed">
            Elevated beauty insights, wellness tips, and expert aesthetic advice.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
