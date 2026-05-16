"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_PAGE_IMAGES } from "../../../public/images/aboutPageImages";

export default function Philosophy() {
  return (
    <section className="w-full bg-bg-light py-[80px] md:py-[100px]">
      <div className="container-custom flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-primary font-heading text-[clamp(28px,4vw,48px)] mb-6">
            Our Philosophy
          </h2>

          <p className="text-primary/80 text-[16px] md:text-[18px] leading-[1.6]">
            Everyone deserves to look young & feel even younger. We specialize in the art of beauty and 
            the science of youth, using a full-circle approach to health & beauty. We target what makes 
            you beautiful both inside and out.
          </p>

          <p className="text-primary/80 mt-4 text-[16px] md:text-[18px] leading-[1.6]">
            Our goal is to address the root of your concerns and discover opportunities that others may 
            overlook — delivering results that truly matter.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 h-[400px] relative rounded-lg overflow-hidden"
        >
          <Image
            src={ABOUT_PAGE_IMAGES.PHILOSOPHY.MAIN}
            alt="Philosophy"
            fill
            className="object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}