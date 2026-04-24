export default function DurationBar({ data }: any) {
  const items = [
    { label: "Duration", value: data.duration },
    { label: "Downtime", value: data.downtime },
    { label: "Results", value: data.results },
    { label: "Area", value: data.area },
  ];

  return (
    <section className="bg-primary text-white py-6">
      <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((item, i) => (
          <div key={i}>
            <p className="text-sm opacity-70">{item.label}</p>
            <p className="font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}