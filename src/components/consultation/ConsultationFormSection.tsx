"use client";

import Image from "next/image";
import { useState } from "react";

export default function ConsultationFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    location: "",
    message: "",
    agree: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Treatment dropdown options (alphabetical)
  const treatmentOptions = [
    "Abdomen",
    "Arms",
    "Back",
    "Buttocks",
    "Chest",
    "Chin",
    "Ears",
    "Eyes",
    "Face",
    "Forehead",
    "Full Body",
    "Hands",
    "Jawline",
    "Legs",
    "Lips",
    "Neck",
    "Nose",
    "Shoulders",
    "Thighs",
    "Under Eyes",
  ];

  return (
    <section className="w-full bg-white py-[60px] md:py-[80px]">

      <div className="flex justify-center">
        <div className="container-custom flex flex-col lg:flex-row items-stretch gap-[32px] lg:gap-[27px]">

          {/* IMAGE */}
          <div className="w-full lg:w-[781px] h-[300px] md:h-[500px] lg:h-auto relative rounded-[8px] overflow-hidden flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/dcvco8nlz/image/upload/v1777923465/Consultation_Form_y9uccm.png"
              alt="Consultation"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* FORM */}
          <div className="w-full lg:w-[632px] border border-[#7899AD] rounded-[8px] p-[20px] md:p-[28px] lg:p-[32px] flex flex-col">

            <div className="flex flex-col h-full justify-between gap-[32px]">

              {/* HEADER */}
              <div className="flex flex-col gap-[8px]">
                <h2 className="text-primary text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2]">
                  Get in Touch
                </h2>

                <p className="text-[14px] text-primary">
                  No Obligation**, 100% Confidential
                </p>
              </div>

              {/* FORM FIELDS */}
              <div className="flex flex-col gap-[20px] md:gap-[24px]">

                {/* Full Name */}
                <div className="flex flex-col gap-[6px] md:gap-[8px]">
                  <label className="text-[14px] md:text-[16px] font-medium text-primary">
                    Full Name*
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full h-[52px] md:h-[58px] px-[16px] md:px-[24px] border border-[#2B5C8A]/80 rounded-[8px] outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-[6px] md:gap-[8px]">
                  <label className="text-[14px] md:text-[16px] font-medium text-primary">
                    Email
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full h-[52px] md:h-[58px] px-[16px] md:px-[24px] border border-[#2B5C8A]/80 rounded-[8px] outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-[6px] md:gap-[8px]">
                  <label className="text-[14px] md:text-[16px] font-medium text-primary">
                    Phone Number*
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full h-[52px] md:h-[58px] px-[16px] md:px-[24px] border border-[#2B5C8A]/80 rounded-[8px] outline-none"
                  />
                </div>

                {/* ✅ Treatment Dropdown */}
                <div className="flex flex-col gap-[6px] md:gap-[8px]">
                  <label className="text-[14px] md:text-[16px] font-medium text-primary">
                    Treatment of Interest*
                  </label>

                  <select
                    name="treatment"
                    value={form.treatment}
                    onChange={handleChange}
                    className="w-full h-[52px] md:h-[58px] px-[16px] md:px-[24px] border border-[#2B5C8A]/80 rounded-[8px] outline-none bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Select Treatment</option>
                    {treatmentOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div className="flex flex-col gap-[6px] md:gap-[8px]">
                  <label className="text-[14px] md:text-[16px] font-medium text-primary">
                    Location*
                  </label>
                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className="w-full h-[52px] md:h-[58px] px-[16px] md:px-[24px] border border-[#2B5C8A]/80 rounded-[8px] outline-none"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-[6px] md:gap-[8px]">
                  <label className="text-[14px] md:text-[16px] font-medium text-primary">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full h-[72px] md:h-[82px] px-[16px] md:px-[24px] py-[12px] md:py-[16px] border border-[#2B5C8A]/80 rounded-[8px] outline-none resize-none"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-[8px]">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={handleChange}
                    className="mt-[3px] w-[20px] h-[20px]"
                  />

                  <p className="text-[13px] md:text-[16px] text-primary/70 leading-[1.4]">
                    I have read and accepted the{" "}
                    <a href="/terms" className="underline hover:text-primary">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy-policy" className="underline hover:text-primary">
                      Privacy Policy
                    </a>
                    *
                  </p>
                </div>

              </div>

              {/* BUTTON */}
              <button className="w-full h-[56px] md:h-[64px] bg-primary text-white rounded-[8px] text-[14px] md:text-[16px] font-medium tracking-[0.02em] hover:bg-[#14293d] transition-all">
                Request a Consultation →
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}