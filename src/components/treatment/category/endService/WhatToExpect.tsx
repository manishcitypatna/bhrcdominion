export default function WhatToExpect({ data }: any) {
  return (
    <section className="py-20">
      <div className="container-custom grid md:grid-cols-2 gap-12">

        <img src={data.image} className="rounded-xl" />

        <div>
          <h2>{data.title}</h2>
          <p className="mt-2 text-gray-500">{data.description}</p>

          <div className="mt-6 space-y-4">
            {data.points.map((p: any, i: number) => (
              <div key={i}>
                <h4>{p.title}</h4>
                <p className="text-sm text-gray-500">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}