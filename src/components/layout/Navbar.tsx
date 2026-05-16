"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import MegaMenu from "@/components/navigation/MegaMenu";
import { LANDING_PAGE_IMAGES } from "../../../public/images/landingPageImages";

const menuItems = [
  { name: "Treatment", hasDropdown: true },
  { name: "Membership", hasDropdown: false },
  { name: "About Us", hasDropdown: false },
  { name: "Contact Us", hasDropdown: false },
];

const treatmentCategories = [
  { name: "Injectables", slug: "injectables" },
  { name: "Skin Rejuvenation", slug: "skin-rejuvenation" },
  { name: "Laser Treatments", slug: "laser-treatments" },
  { name: "Facial Services", slug: "facial-services" },
  { name: "Body Services", slug: "body-services" },
  { name: "Regenerative Therapies", slug: "regenerative-therapies" },
  { name: "Wellness Therapies", slug: "wellness-therapies" },
  { name: "Specials", slug: "specials" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isTreatmentOpen, setIsTreatmentOpen] = useState(false);

  return (
    <div className="relative" onMouseLeave={() => setActiveMenu(null)}>
      <nav
        className={cn(
          "relative w-full bg-white transition-all duration-300 flex items-center",
          "h-[72px] md:h-[88px] lg:h-[108px]"
        )}
      >
        <div className="container-custom flex items-center justify-between h-full">
          {/* LOGO */}
          <div className="flex justify-start">
            <Link href="/" className="relative flex items-center shrink-0">
              <div className="relative w-[clamp(160px,20vw,308px)] aspect-[308/48]">
                <Image
                  src={LANDING_PAGE_IMAGES.LOGOS.BLUE}
                  alt="Beverly Hills Rejuvenation Center"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center justify-center gap-10 mx-6">
            {menuItems.map((item) => {
              let href = "#";

              if (item.name === "Treatment") href = "/treatment";
              else if (item.name === "Membership") href = "/membership";
              else if (item.name === "About Us") href = "/about";
              else if (item.name === "Contact Us") href = "/contact";

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.name === "Treatment") setActiveMenu("treatment");
                    else setActiveMenu(null);
                  }}
                >
                  <Link
                    href={href}
                    className="flex items-center gap-1 text-[15px] font-medium whitespace-nowrap"
                    style={{ color: "rgba(26, 52, 77, 0.65)" }}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown size={14} className="opacity-50" />
                    )}
                  </Link>

                  {activeMenu === "treatment" && item.name === "Treatment" && (
                    <MegaMenu type="treatment" />
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-end">
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:4805550103"
                className="px-6 py-2.5 border border-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors whitespace-nowrap"
              >
                (210)-888-8889
              </a>

              <Link
                href="/consultation"
                className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 whitespace-nowrap"
              >
                Request Consultation
                <ArrowUpRight size={18} />
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="lg:hidden text-primary p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 lg:hidden flex flex-col gap-6"
            >
              {menuItems.map((item) => {
                let href = "#";
                if (item.name === "Membership") href = "/membership";
                else if (item.name === "About Us") href = "/about";
                else if (item.name === "Contact Us") href = "/contact";

                // TREATMENT (CLICKABLE + ACCORDION)
                if (item.name === "Treatment") {
                  return (
                    <div
                      key={item.name}
                      className="border-b border-gray-100 pb-2"
                    >
                      <div className="flex justify-between items-center">
                        
                        {/* CLICKABLE TEXT */}
                        <Link
                          href="/treatment"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-lg font-medium text-text-dark"
                        >
                          Treatment
                        </Link>

                        {/* TOGGLE ICON */}
                        <button
                          onClick={() =>
                            setIsTreatmentOpen(!isTreatmentOpen)
                          }
                          className="p-1"
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${
                              isTreatmentOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                      </div>

                      {/* DROPDOWN */}
                      <AnimatePresence>
                        {isTreatmentOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex flex-col gap-3 mt-3 pl-2"
                          >
                            {treatmentCategories.map((cat) => (
                              <Link
                                key={cat.slug}
                                href={`/treatment/${cat.slug}`}
                                onClick={() =>
                                  setIsMobileMenuOpen(false)
                                }
                                className="text-sm text-text-dark/70 hover:text-primary transition"
                              >
                                {cat.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // NORMAL LINKS
                return (
                  <Link
                    key={item.name}
                    href={href}
                    className="text-lg font-medium text-text-dark border-b border-gray-100 pb-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* BUTTONS */}
              <div className="flex flex-col gap-4 pt-4">
                <a
                  href="tel:4805550103"
                  className="w-full py-3 border border-primary text-primary rounded-md text-center font-medium"
                >
                  (480) 555-0103
                </a>

                <Link
                  href="/consultation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-primary text-white py-3 rounded-md font-medium flex items-center justify-center gap-2"
                >
                  Request a Consultation
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}