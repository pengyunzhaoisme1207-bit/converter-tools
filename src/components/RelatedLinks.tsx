import Link from 'next/link';

type RelatedLink = {
  href: string;
  label: string;
  description?: string;
};

export default function RelatedLinks({ links }: { links: RelatedLink[] }) {
  return (
    <section className="mt-8 rounded-lg border bg-gray-50 p-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Converters</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-md bg-white p-3 border hover:border-blue-300 transition">
            <span className="font-medium text-blue-600">{link.label}</span>
            {link.description ? <p className="text-sm text-gray-500 mt-1">{link.description}</p> : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
