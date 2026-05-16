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
          <h2 className="text-3xl md:text-4xl font-medium mb-6 uppercase tracking-tight">{data.title}</h2>
          
          <div className="space-y-6">
            {Array.isArray(data.description) ? (
              data.description.map((block: any, index: number) => {
                if (block.type === "text") {
                  return (
                    <p key={index} className="text-gray-600 leading-relaxed">
                      {block.content}
                    </p>
                  );
                }
                if (block.type === "list") {
                  return (
                    <div key={index} className="space-y-4">
                      {block.title && (
                        <p className="font-medium text-gray-800">{block.title}</p>
                      )}
                      <ul className="list-disc pl-5 space-y-2">
                        {block.items.map((item: string, i: number) => (
                          <li key={i} className="text-gray-600">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                return null;
              })
            ) : (
              <p className="text-gray-600 leading-relaxed">{data.description}</p>
            )}
          </div>

          {data.cta && (
            <a href={data.cta.link} className="link mt-8 inline-block">
              {data.cta.label}
            </a>
          )}
        </div>

      </div>
    </section>
  );
}