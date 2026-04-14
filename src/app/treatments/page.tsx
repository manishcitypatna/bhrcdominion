"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TreatmentGrid from "@/components/treatments/TreatmentGrid";
import { motion } from "framer-motion";

export default function TreatmentsPage() {
  return (
    <div className="bg-bg-light min-h-screen">

      <Navbar />

      {/* 🔥 HEADER (FIXED ANIMATION) */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full pt-[140px] md:pt-[180px] pb-[64px] md:pb-[80px]"
      >
        <div className="max-w-[1440px] mx-auto px-[clamp(20px,8vw,240px)]">

          <div className="flex justify-center text-center">
            <h1 className="
              text-primary 
              font-heading
              text-[clamp(48px,6vw,96px)] 
              leading-[1.05] 
              tracking-[1px]
            ">
              Treatment Categories
            </h1>
          </div>

        </div>
      </motion.section>

      {/* GRID */}
      <TreatmentGrid />

      <Footer />

    </div>
  );
}