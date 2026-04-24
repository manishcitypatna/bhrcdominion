export default function FAQSection({ data }: any) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom max-w-3xl">

        <h2>{data.title}</h2>
        <p className="text-gray-500 mt-2">{data.description}</p>

        <div className="mt-8 space-y-4">
          {data.items.map((faq: any, i: number) => (
            <div key={i} className="border-b pb-4">
              <h4 className="font-medium">{faq.question}</h4>
              <p className="text-sm text-gray-500 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}