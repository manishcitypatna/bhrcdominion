"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
};

export default function CategoryHero({ title, description }: Props) {
  return (
    <section className="text-center py-[100px] md:py-[140px] px-6 bg-secondry">
      <div className="max-w-[1000px] mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-primary mb-6"
        >
          {title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="subtitle-1 max-w-[720px] mx-auto"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
