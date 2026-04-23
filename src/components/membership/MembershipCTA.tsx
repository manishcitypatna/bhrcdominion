"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const CTA_BG = "/images/landing_page/seeTheDifference/seeTheDifference_bg.png";

export default function CTA() {
  return (
    <section className="relative w-full h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden">

      {/* Background */}
      <Image
        src={CTA_BG}
        alt="CTA Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay (for readability like your design) */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        {/* Logo */}
        {/* Logo */}
<div className="mb-4 relative w-8 h-8 md:w-10 md:h-10">
  <Image
    src="/images/landing_page/logo/logo_icon.png"
    alt="BHRC Logo"
    fill
    className="object-contain"
    priority
  />
</div>

        {/* Heading */}
        <h2 className="
          text-[#1A344D] 
          text-[24px] md:text-[42px] lg:text-[56px] 
          leading-[120%]
        ">
          See The Difference
        </h2>

        {/* Description */}
        <p className="
          mt-3 
          text-[#1A344D]/80 
          text-[13px] md:text-[16px] lg:text-[18px] 
          max-w-[700px]
        ">
          Connect with a skilled Provider to explore your skin goals.
          Receive a tailored treatment plan designed just for you.
          Start your journey to healthier skin today.
        </p>

        {/* Button */}
        <a
          href="/consultation"
          className="
            mt-6 
            bg-[#1A344D] text-white 
            px-5 md:px-6 
            h-[44px] md:h-[52px] 
            rounded-md 
            text-sm md:text-base 
            flex items-center gap-2
          "
        >
          Request a Consultation
          <ArrowUpRight size={16} />
        </a>

      </div>
    </section>
  );
}