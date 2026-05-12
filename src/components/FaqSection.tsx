type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.question} className="rounded-lg border bg-white p-4">
            <h3 className="font-semibold text-gray-800">{item.question}</h3>
            <p className="text-gray-600 mt-2">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
