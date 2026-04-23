"use client";

type Props = {
  title: string;
  description: string;
};

export default function CategoryHero({ title, description }: Props) {
  return (
    <section className="text-center py-[80px] md:py-[100px] px-6">
      <h1 className="text-primary font-heading text-[clamp(36px,5vw,64px)] mb-4">
        {title}
      </h1>

      <p className="text-primary/70 max-w-[720px] mx-auto text-[15px] leading-[160%]">
        {description}
      </p>
    </section>
  );
}