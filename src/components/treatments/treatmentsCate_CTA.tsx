"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Treatment/Face_&_Neck/Face_&_Neck_bg.png"
          alt="CTA Background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 xl:px-[240px] relative z-10 text-center">
        <h2 className="text-white font-heading text-[40px] md:text-[56px] leading-tight mb-6">
          Ready to See the Difference?
        </h2>
        <p className="text-white/70 text-[16px] md:text-[18px] max-w-[600px] mx-auto mb-10 leading-relaxed">
          Connect with our skilled providers to explore your goals and receive a tailored treatment plan designed just for you.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/consultation" 
            className="w-full sm:w-auto bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-bg-light transition-all flex items-center justify-center gap-2 group"
          >
            Request a Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/contact" 
            className="w-full sm:w-auto border border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/5 transition-all"
          >
            Talk to an Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
