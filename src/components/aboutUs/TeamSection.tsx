"use client";

import Image from "next/image";
import { teamMembers } from "@/data/about_TeamSection";

export default function TeamSection() {
  return (
    <section className="w-full bg-bg-light py-[80px] md:py-[100px]">
      <div className="container-custom text-center">

        {/* HEADING */}
        <h2 className="text-primary font-heading text-[clamp(28px,4vw,48px)] mb-6">
          Meet Our Team
        </h2>

        <p className="text-primary/80 max-w-[800px] mx-auto mb-12 text-[16px] md:text-[18px]">
          Our experienced team is committed to enhancing your natural beauty and well-being with the 
          highest standards of care.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="relative rounded-[8px] overflow-hidden shadow-md group"
            >

              {/* IMAGE */}
              <div className="relative h-[420px] w-full overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* WHITE INFO BOX */}
              <div className="absolute bottom-0 left-0 w-full bg-white px-6 py-4 flex flex-col items-center text-center shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">

                {/* NAME */}
                <h3 className="text-accent font-semibold text-[18px] leading-[110%]">
                  {member.name}
                </h3>

                {/* ROLE */}
                <p className="text-accent text-[14px] leading-[110%] mt-1">
                  {member.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}