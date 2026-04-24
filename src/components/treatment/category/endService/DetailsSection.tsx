import Image from "next/image";
export default function DetailsSection({ data }: any) {
  return (
    <section className="py-20">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

        <Image
  src={data.image}
  alt="image"
  width={600}
  height={400}
  className="rounded-xl"
/>

        <div>
          <h2>{data.title}</h2>
          <p className="mt-4 text-gray-600">{data.description}</p>

          <a href={data.cta.link} className="link mt-6 inline-block">
            {data.cta.label}
          </a>
        </div>

      </div>
    </section>
  );
}