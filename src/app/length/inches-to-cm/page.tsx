import type { Metadata } from 'next';
import InchesCmConverter from '@/components/InchesCmConverter';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/JsonLd';
import FaqSection from '@/components/FaqSection';
import RelatedLinks from '@/components/RelatedLinks';
import { faqJsonLd, webApplicationJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Inches to CM Converter - Length Conversion | ConvertEasy',
  description: 'Convert inches to centimeters and centimeters to inches. Free online length converter with detailed pages for 1-72 inches.',
  alternates: {
    canonical: '/length/inches-to-cm',
  },
};

export default function InchesCmPage() {
  const faqs = [
    {
      question: 'Why are there detailed pages for inches?',
      answer: 'Detailed pages let users jump directly to exact values, which is useful for bookmarking, comparison, and search traffic.',
    },
    {
      question: 'Is this useful for product dimensions?',
      answer: 'Yes. Inches are common for furniture, screens, tools, and package dimensions.',
    },
    {
      question: 'Why is this helpful for metric users?',
      answer: 'Many imported products still list inches, so a fast centimeter conversion saves time.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <JsonLd
        data={webApplicationJsonLd({
          name: 'Inches to CM Converter',
          description: 'Convert inches to centimeters with direct deep-link pages for common lengths.',
          path: '/length/inches-to-cm',
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <h1 className="text-3xl font-bold mb-2">Inches to CM Converter</h1>
      <p className="text-gray-500 mb-6">Convert between inches and centimeters instantly.</p>

      <InchesCmConverter />

      <AdSlot slot="result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Quick Reference (1-72 inches)</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2 text-sm">
          {Array.from({ length: 72 }, (_, i) => i + 1).map((inch) => (
            <a key={inch} href={`/length/inches-to-cm/${inch}`} className="text-blue-600 hover:underline">
              {inch} in
            </a>
          ))}
        </div>
      </div>

      <AdSlot slot="middle" />

      <RelatedLinks
        links={[
          { href: '/length/cm-to-feet', label: 'CM to Feet', description: 'Height conversion reference.' },
          { href: '/weight/kg-to-lbs', label: 'KG to Lbs', description: 'Useful for weight lookups.' },
          { href: '/area/sqft-to-sqm', label: 'Sq Ft to Sq M', description: 'Property and room sizing.' },
        ]}
      />

      <FaqSection items={faqs} />
    </div>
  );
}
