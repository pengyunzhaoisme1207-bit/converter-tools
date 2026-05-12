import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact ConvertEasy | Unit Converter Support',
  description:
    'Contact ConvertEasy with questions, correction requests, converter suggestions, or privacy inquiries.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Contact ConvertEasy</h1>
      <p className="text-gray-600 mb-6">
        Have a question, correction request, or idea for a new converter? Send a message to{' '}
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue-600 hover:underline">
          {siteConfig.contactEmail}
        </a>
        . We review suggestions for new everyday conversion tools, clearer explanations, and
        missing reference tables.
      </p>
      <p className="text-gray-600 mb-6">
        ConvertEasy is a small independent utility site. We do not provide professional, medical,
        legal, or engineering advice, but we do welcome corrections for conversion formulas,
        ingredient references, and unclear explanations.
      </p>

      <div className="grid gap-4">
        <section className="rounded-lg border bg-gray-50 p-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">What to Include</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>The converter page URL you are asking about.</li>
            <li>The value you entered and the result you expected.</li>
            <li>The source or context if you are reporting a measurement standard.</li>
          </ul>
        </section>

        <section className="rounded-lg border bg-gray-50 p-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Useful Links</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/about" className="text-blue-600 hover:underline">About ConvertEasy</Link>
            <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            <Link href="/cooking/cups-to-grams" className="text-blue-600 hover:underline">Cups to Grams</Link>
            <Link href="/length/cm-to-feet" className="text-blue-600 hover:underline">CM to Feet</Link>
            <Link href="/weight/kg-to-lbs" className="text-blue-600 hover:underline">KG to Lbs</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
