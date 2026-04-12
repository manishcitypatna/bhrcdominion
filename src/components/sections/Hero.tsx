"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[1105px] w-full flex items-end justify-center overflow-hidden pt-[139px] pb-[100px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-[#EBF5FF]/50 z-10" 
             style={{ 
               background: "linear-gradient(180deg, rgba(255,255,255,0) 44%, rgba(235,245,255,0.5) 91%)" 
             }} 
        />
        <Image 
          src="/images/landing_page/hero_banner/hero_banner.png" 
          alt="Beverly Hills Rejuvenation Center Hero" 
          fill 
          className="object-cover" 
          priority 
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center mb-[150px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-primary mb-12 tracking-tight">
            Experience the Difference
          </h1>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 text-primary font-medium text-lg transition-all"
          >
            <span className="link border-none">
              Request a Consultation
            </span>
            <ArrowUpRight size={20} className="text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
