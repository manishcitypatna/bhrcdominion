"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function TrustedByCelebs() {
  return (
    <section className="w-full bg-bg-light py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 md:gap-8 mb-10 md:mb-14">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <h2 className="text-primary text-[clamp(28px,4vw,48px)] leading-[1.2] font-heading">
              Trusted by Celebrities
            </h2>

            <p className="text-primary/70 text-sm md:text-[15px] leading-relaxed max-w-[600px]">
              Beverly Hills Rejuvenation Center has received praise from celebrities and media insiders alike. 
              Industry insiders continue to look towards us for their expert's insight on topical items, 
              as well as to introduce the latest in advanced healing technologies.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-transparent border border-accent/40 text-accent-blue px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-accent/5 transition-all"
          >
            Learn More
            <ArrowUpRight size={16} />
          </motion.button>
        </div>

        {/* Images - LEFT RIGHT ALIGN FIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20 mt-8 md:mt-12">
          
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -4 }}
            whileInView={{ opacity: 1, x: 0, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-[400px] md:max-w-[460px] aspect-[1.4] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden">
              <Image
                src="/images/landing_page/trusted_by_celeb/trustedByCeleb_1.png"
                alt="Celebrity Ribbon Cutting"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 4 }}
            whileInView={{ opacity: 1, x: 0, rotate: 8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[280px] md:max-w-[340px] aspect-[1.4] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden">
              <Image
                src="/images/landing_page/trusted_by_celeb/trustedByCeleb_2.png"
                alt="Celebrity Testimonial"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}