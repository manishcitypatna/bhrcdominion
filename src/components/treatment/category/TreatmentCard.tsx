"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  description: string;
  image: string;
  link: string;
};

export default function TreatmentCard({
  name,
  description,
  image,
  link,
}: Props) {
  return (
    <div className="
      bg-white 
      rounded-[18px] 
      overflow-hidden 
      shadow-sm 
      hover:shadow-md 
      transition
      border border-gray-100
    ">

      {/* IMAGE */}
      <div className="relative w-full h-[280px] lg:h-[320px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* TEXT BOX BELOW IMAGE */}
      <div className="bg-white px-6 py-6 text-center">

        <h3 className="
          text-primary 
          font-semibold 
          text-[14px] 
          tracking-[1px] 
          uppercase 
          mb-2
        ">
          {name}
        </h3>

        <p className="
          text-primary/70 
          text-[13px] 
          leading-[150%] 
          mb-5
        ">
          {description}
        </p>

        <Link href={link}>
          <button className="
            border border-primary 
            px-5 py-2 
            text-xs font-medium 
            tracking-[0.5px]
            hover:bg-primary hover:text-white 
            transition
          ">
            READ MORE
          </button>
        </Link>

      </div>
    </div>
  );
}