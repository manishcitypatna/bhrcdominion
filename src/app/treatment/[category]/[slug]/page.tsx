import { servicesData } from "@/data/endServiceData/injectable";

import HeroSection from "@/components/treatment/category/endService/HeroSection";
import DurationBar from "@/components/treatment/category/endService/DurationBar";
import DetailsSection from "@/components/treatment/category/endService/DetailsSection";
import WhoIsThisFor from "@/components/treatment/category/endService/WhoIsThisFor";
import HowItWorks from "@/components/treatment/category/endService/HowItWorks";
import WhatToExpect from "@/components/treatment/category/endService/WhatToExpect";
import FAQSection from "@/components/treatment/category/endService/FAQSection";

export default function ServicePage({ params }: any) {
  const { slug } = params;

  const data = servicesData[slug];

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center">
        Service not found
      </div>
    );
  }

  return (
    <main>

      <HeroSection data={data.hero} />
      <DurationBar data={data.durationBar} />
      <DetailsSection data={data.details} />
      <WhoIsThisFor data={data.whoIsThisFor} />
      <HowItWorks data={data.howItWorks} />
      <WhatToExpect data={data.whatToExpect} />
      <FAQSection data={data.faq} />

    </main>
  );
}