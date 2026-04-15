import AboutHero from "@/components/aboutUs/AboutHero";
import AboutIntro from "@/components/aboutUs/AboutIntro";
import WhyChooseUs from "@/components/aboutUs/WhyChooseUs";
import Philosophy from "@/components/aboutUs/Philosophy";
import TeamSection from "@/components/aboutUs/TeamSection";
import NewsSection from "@/components/aboutUs/NewsSection";

// 👇 reuse this from homepage
import Awards from "@/components/sections/Awards";

import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden pt-[140px]">
      <AboutHero />
      <AboutIntro />
      <WhyChooseUs />
      <Philosophy />
      <Awards />
      <TeamSection />
      <NewsSection />
    </main>
  );
}