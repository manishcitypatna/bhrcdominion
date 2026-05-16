"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LANDING_PAGE_IMAGES } from "../../../public/images/landingPageImages";

export default function Hero() {
  return (
    <section className="
relative 
w-full 
h-[50vw] md:h-[90vh]
flex items-end justify-center 
overflow-hidden 
pb-2 md:pb-12
">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 44%, rgba(235,245,255,0.5) 91%)"
          }}
        />
        <Image
          src={LANDING_PAGE_IMAGES.HERO.BANNER}
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center">

        {/* ✅ FULL-WIDTH HEADING (NO CONTAINER) */}
        <h1 className="hero-title text-primary">
          Experience the Difference
        </h1>

        {/* ✅ BUTTON IN CONTAINER */}
        <div className="w-full md:container-custom flex justify-center mt-1 md:mt-6">
          <Link href="/consultation">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                group flex items-center gap-2 
                font-medium 
                text-primary
                text-[3vw] md:text-lg
                transition-all
              "
            >
              <span>Request a Consultation</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
}
