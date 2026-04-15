"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    icon: "/images/aboutUs/whyChooseUs_01.png",
    title: "World’s Best Treatment",
    desc: "We provide all the latest and most advanced procedures and programs.",
  },
  {
    icon: "/images/aboutUs/whyChooseUs_02.png",
    title: "Privacy and Discretion",
    desc: "All treatments take place in a comfortable, supportive, and discreet environment.",
  },
  {
    icon: "/images/aboutUs/whyChooseUs_03.png",
    title: "Highest Quality Service",
    desc: "We use licensed, qualified medical providers to perform procedures.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-[80px] md:py-[100px]">
      <div className="container-custom flex flex-col items-center">

        {/* HEADING */}
        <h2 className="text-primary font-heading text-[clamp(28px,4vw,48px)] mb-[48px] text-center">
          Why Choose Us?
        </h2>

        {/* ITEMS */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-[36px]">

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-[8px] w-[223px]"
            >

              {/* ICON (REAL IMAGE) */}
              <div className="w-[64px] h-[64px] relative">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-[#1A344D] text-[20px] font-medium leading-[120%] tracking-[0.4px]">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#2B5C8A] text-[16px] leading-[110%] max-w-[215px]">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}