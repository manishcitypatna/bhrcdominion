import Hero_2 from "@/components/sections/Hero_2";
import Hero from "@/components/sections/Hero";
import BlueBand from "@/components/sections/BlueBand";
import Treatment from "@/components/sections/Treatment";
import FeatureHighlights from "@/components/sections/FeatureHighlights";
import LookFeelYounger from "@/components/sections/LookFeelYounger";
import TrustedByCelebs from "@/components/sections/TrustedByCelebs";
import RealResults from "@/components/sections/RealResults";
import WhatToExpect from "@/components/sections/WhatToExpect";
import LedBySpecialists from "@/components/sections/LedBySpecialists";
import Awards from "@/components/sections/Awards";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Hero_2 is new hero section */}
      {/*<Hero_2 />*/}
      <Hero />
      <BlueBand />
      <Treatment />
      <FeatureHighlights />
      <LookFeelYounger />
      <TrustedByCelebs />
      <RealResults />
      <WhatToExpect />
      <LedBySpecialists />
      <Awards />
      <Testimonials />
      <CTA />
    </main>
  );
}
