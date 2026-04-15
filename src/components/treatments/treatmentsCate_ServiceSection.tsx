"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Service {
  name: string;
  description: string;
  image: string;
  type: string[];
}

interface ServiceSectionProps {
  services: Service[];
}

export default function ServiceSection({ services }: ServiceSectionProps) {
  if (!services.length) {
    return (
      <div className="w-full py-20 text-center">
        <p className="text-primary/40 font-medium italic">
          No treatments match your current selection.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full bg-[#F8FBFF] py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 xl:px-[240px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {services.map((service) => (
              <motion.div
                key={service.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col sm:flex-row"
              >
                {/* Image Container */}
                <div className="relative w-full sm:w-[200px] h-[240px] sm:h-auto overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Container */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-2 mb-3">
                      {service.type.map(t => (
                        <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-secondary bg-secondary/5 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-primary font-heading text-[22px] leading-tight mb-3">
                      {service.name}
                    </h3>
                    <p className="text-primary/60 text-[14px] leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <button className="text-[13px] font-semibold text-primary hover:text-secondary transition-colors underline underline-offset-4">
                      Learn More
                    </button>
                    <Link href="/consultation" className="bg-primary text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-all">
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
