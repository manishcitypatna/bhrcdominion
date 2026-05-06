"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price?: string;
  reverse?: boolean;
  link: string;
};

export default function TreatmentSectionCard({
  title,
  subtitle,
  description,
  image,
  price,
  reverse = false,
  link,
}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <div className="container-custom">
        <div
          className={`
            flex flex-col lg:flex-row 
            ${reverse ? "lg:flex-row-reverse" : ""}
            gap-[40px] lg:gap-[60px]
            bg-white rounded-[8px]
            p-[24px] md:p-[40px] lg:p-[48px]
          `}
        >
          {/* TEXT */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-primary font-heading text-[clamp(28px,3vw,40px)] leading-[120%] mb-[12px]">
              {title}
            </h2>

            <p className="text-primary/80 text-[16px] mb-[16px]">
              {subtitle}
            </p>

            <p className="text-primary/70 text-[15px] leading-[160%] mb-[24px] max-w-[520px]">
              {description}
            </p>

            <Link href={link}>
              <button className="flex items-center gap-2 text-primary font-medium group">
                Learn More
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </Link>
          </div>

          {/* IMAGE */}
          <div className="flex-1 relative">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[420px] rounded-[8px] overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {price && (
                <div className="absolute bottom-0 left-0 w-full bg-primary text-white text-center py-[12px] text-sm font-medium">
                  {price}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}