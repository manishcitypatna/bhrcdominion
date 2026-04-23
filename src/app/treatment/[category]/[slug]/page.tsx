"use client";

import { useParams } from "next/navigation";
import { treatments } from "@/data/treatments";
import { categories } from "@/data/categories";
import Image from "next/image";

export default function TreatmentDetailPage() {
  const params = useParams();

  const categorySlug = params.category as string;
  const treatmentSlug = params.slug as string;

  const categoryData = treatments.find(
    (cat) => cat.slug === categorySlug
  );

  const categoryInfo = categories.find(
    (cat) => cat.slug === categorySlug
  );

  const treatment = categoryData?.items.find(
    (item) => item.slug === treatmentSlug
  );

  if (!categoryData || !treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Treatment not found</p>
      </div>
    );
  }

  return (
    <div className="bg-bg-light min-h-screen pt-[103px] md:pt-[119px] lg:pt-[139px]">

      {/* HERO */}
      <section className="relative w-full aspect-[16/9] max-h-[600px] overflow-hidden">
        <Image
          src={treatment.image || categoryInfo?.heroImage || "/images/landing_page/our_service/our_service_1.png"}
          alt={treatment.name}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#1A344D]/60" />

        <div className="absolute inset-0 flex items-center px-6 md:px-20 xl:px-[240px]">
          <div className="max-w-[700px] text-white">
            <h1>{treatment.name}</h1>
            <p className="mt-4">{treatment.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container-custom py-16 md:py-20 space-y-16">
        {treatment.content?.map((block: any, index: number) => {
          if (block.type === "overview") {
            return (
              <div key={index}>
                <h2 className="mb-4">{block.title}</h2>
                <p className="body-md text-primary/70 max-w-[800px]">
                  {block.text}
                </p>
              </div>
            );
          }

          if (block.type === "benefits") {
            return (
              <div key={index}>
                <h2 className="mb-6">{block.title}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {block.items.map((item: string, i: number) => (
                    <div
                      key={i}
                      className="bg-white p-5 rounded-lg border border-gray-100"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          if (block.type === "how_it_works") {
            return (
              <div key={index}>
                <h2 className="mb-4">{block.title}</h2>
                <p className="body-md text-primary/70 max-w-[800px]">
                  {block.text}
                </p>
              </div>
            );
          }

          if (block.type === "faq") {
            return (
              <div key={index}>
                <h2 className="mb-6">FAQs</h2>
                <div className="space-y-4">
                  {block.items.map((faq: any, i: number) => (
                    <div key={i} className="bg-white border rounded-lg p-5">
                      <p className="font-medium text-primary">
                        {faq.question}
                      </p>
                      <p className="text-primary/70 mt-2">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          return null;
        })}
      </section>

      {/* CTA */}
      <section className="w-full bg-[#1A344D] py-16 text-center text-white">
        <h2 className="mb-4">Ready to Get Started?</h2>
        <p className="mb-6 text-white/80">
          Book your consultation today and start your journey.
        </p>

        <a
          href="/consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#1A344D] px-6 py-3 rounded-md font-medium"
        >
          Request Consultation
        </a>
      </section>
    </div>
  );
}