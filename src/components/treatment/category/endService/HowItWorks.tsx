export default function WhoIsThisFor({ data }: any) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">

        <h2>{data.title}</h2>
        <p className="mt-2 text-gray-500">{data.description}</p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {data.steps.map((item: any, i: number) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <img src={item.image} className="rounded-lg mb-4"/>
              <h3>{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}