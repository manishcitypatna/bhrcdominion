"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_PAGE_IMAGES } from "../../../public/images/aboutPageImages";

export default function AboutIntro() {
  return (
    <section className="w-full bg-bg-light py-[100px]">
      <div className="container-custom flex flex-col lg:flex-row items-center gap-12">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 h-[400px] relative rounded-lg overflow-hidden"
        >
          <Image
            src={ABOUT_PAGE_IMAGES.INTRO.MAIN}
            alt="About"
            fill
            className="object-cover"
          /> 
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          <h2 className="text-primary font-heading text-[clamp(28px,4vw,48px)]">
            About Beverly Hills Rejuvenation Center
          </h2>

          <p className="text-primary/80 text-[16px] md:text-[18px] leading-[1.6]">
            At Beverly Hills Rejuvenation Center, we believe true beauty is not created — it is revealed.
            Our approach combines advanced medical expertise with a deep understanding of aesthetics,
            helping you achieve results that feel natural, refined, and uniquely yours.
          </p>

          <p className="text-primary/80 text-[16px] md:text-[18px] leading-[1.6]">
            From skin rejuvenation to body contouring, every treatment is thoughtfully designed to enhance
            your confidence while maintaining balance and harmony. We focus on personalized care, ensuring
            every individual receives a tailored experience aligned with their goals.
          </p>
        </motion.div>

      </div>
    </section>
  );
}