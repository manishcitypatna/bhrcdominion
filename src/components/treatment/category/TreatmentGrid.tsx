"use client";

import TreatmentCard from "./TreatmentCard";

type Props = {
  items: any[];
  categorySlug: string;
};

export default function TreatmentGrid({ items, categorySlug }: Props) {
  return (
    <section className="container-custom pb-[80px]">

      <div className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-3 
  xl:grid-cols-3
  gap-10
  max-w-[1400px] 
  mx-auto
">

        {items.map((item) => (
          <TreatmentCard
            key={item.slug}
            name={item.name}
            description={item.shortDescription}
            image={item.image}
            link={`/treatment/${categorySlug}/${item.slug}`}
          />
        ))}

      </div>

    </section>
  );
}