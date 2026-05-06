import { servicesData as injectableData } from "@/data/endServiceData/injectable";
import { servicesData as skinRejuvenationData } from "@/data/endServiceData/skin-rejuvenation";
import { servicesData as laserTreatmentsData } from "@/data/endServiceData/laser-treatments";
import { servicesData as facialServicesData } from "@/data/endServiceData/facial-services";
import { servicesData as bodyServicesData } from "@/data/endServiceData/body-services";
import { servicesData as regenerativeTherapiesData } from "@/data/endServiceData/regenerative-therapies";
import { servicesData as wellnessTherapiesData } from "@/data/endServiceData/wellness-therapies";
import { servicesData as specialsData } from "@/data/endServiceData/specials";

import HeroSection from "@/components/treatment/category/endService/HeroSection";
import DurationBar from "@/components/treatment/category/endService/DurationBar";
import DetailsSection from "@/components/treatment/category/endService/DetailsSection";
import WhoIsThisFor from "@/components/treatment/category/endService/WhoIsThisFor";
import HowItWorks from "@/components/treatment/category/endService/HowItWorks";
import WhatToExpect from "@/components/treatment/category/endService/WhatToExpect";
import FAQSection from "@/components/treatment/category/endService/FAQSection";

const allServices: Record<string, Record<string, any>> = {
  "injectables": injectableData,
  "skin-rejuvenation": skinRejuvenationData,
  "laser-treatments": laserTreatmentsData,
  "facial-services": facialServicesData,
  "body-services": bodyServicesData,
  "regenerative-therapies": regenerativeTherapiesData,
  "wellness-therapies": wellnessTherapiesData,
  "specials": specialsData,
};

export default function ServicePage({ params }: any) {
  const { category, slug } = params;

  const data = allServices[category]?.[slug];

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