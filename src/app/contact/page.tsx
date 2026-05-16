"use client";

import Footer from "@/components/layout/Footer";
import ConsultationFormSection from "@/components/consultation/ConsultationFormSection";
import LocationCard from "@/components/contact/LocationCard";
import { Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative bg-bg-light min-h-screen overflow-x-hidden">

      {/* 🔹 HEADER */}
      <section className="w-full bg-white py-[80px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(20px,8vw,240px)]">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* LEFT - TITLE */}
            <h1 className="
              text-primary 
              font-heading
              text-[clamp(48px,6vw,96px)] 
              leading-[1.05] 
              tracking-[1px]
              text-center md:text-left
            ">
              Contact Us
            </h1>

            {/* RIGHT - CONTACT INFO */}
            <div className="
              flex flex-col sm:flex-row 
              items-center md:items-end 
              justify-center md:justify-end 
              gap-4 sm:gap-6 
              text-primary
              text-center md:text-right
              md:border-l md:pl-6
            ">

              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>(210) 888 8889</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>hills.beverly@info.com</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 🔹 LOCATIONS */}
      <section className="w-full bg-white pb-[80px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(20px,8vw,240px)]">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Location 1 */}
            <LocationCard
              title="Dominion Creek"
              mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13868.644276135961!2d-98.6249438!3d29.6571001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c6530221204c9%3A0x8c6ec3d13e3021f8!2sBeverly%20Hills%20Rejuvenation%20Center%20Dominion%20Creek!5e0!3m2!1sen!2sin!4v1776125597045!5m2!1sen!2sin"
              mapLink="https://www.google.com/maps/place/Beverly+Hills+Rejuvenation+Center+Dominion+Creek"
              address="23110 W I-10 Ste #203, San Antonio, TX 78257"
              phone=" (210)-888-8889"
              timing="Monday – Friday: 09:00 AM – 06:00 PM"
            />

            {/* Location 2 */}
            <LocationCard
              title="Alamo Quarry Market"
              mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13890.732001688306!2d-98.49030437139652!3d29.49644486094265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c893caf4323ef%3A0xe8d09a6ac7398340!2sBeverly%20Hills%20Rejuvenation%20Center%20-%20Quarry!5e0!3m2!1sen!2sin!4v1776125765219!5m2!1sen!2sin"
              mapLink="https://www.google.com/maps/place/Beverly+Hills+Rejuvenation+Center+-+Quarry"
              address="7322 Jones Maltsberger Rd #144, San Antonio, TX 78209"
              phone=" (210)-888-8889"
              timing="Monday – Saturday: 10:00 AM – 06:00 PM"
            />

          </div>

        </div>
      </section>

      {/* REUSED CONSULTATION FORM */}
      <ConsultationFormSection />
    </main>
  );
}