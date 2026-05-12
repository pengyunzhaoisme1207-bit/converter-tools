import type { Metadata } from 'next';
import AreaConverter from '@/components/AreaConverter';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/JsonLd';
import FaqSection from '@/components/FaqSection';
import RelatedLinks from '@/components/RelatedLinks';
import { faqJsonLd, webApplicationJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Square Feet to Square Meters Converter - Area | ConvertEasy',
  description: 'Convert square feet to square meters and vice versa. Free online area converter with common room and property size references.',
  alternates: {
    canonical: '/area/sqft-to-sqm',
  },
};

export default function AreaPage() {
  const faqs = [
    {
      question: 'How do you convert square feet to square meters?',
      answer: 'Multiply square feet by 0.092903 to get square meters.',
    },
    {
      question: 'When is this converter useful?',
      answer: 'It is useful for apartments, rooms, renovation planning, real estate listings, and international property comparisons.',
    },
    {
      question: 'Why does area matter in both home and property searches?',
      answer: 'Different countries list area in different units, so a fast conversion helps compare rooms, homes, and land sizes.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <JsonLd
        data={webApplicationJsonLd({
          name: 'Square Feet to Square Meters Converter',
          description: 'Convert square feet to square meters for rooms, homes, and property comparisons.',
          path: '/area/sqft-to-sqm',
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <h1 className="text-3xl font-bold mb-2">Square Feet to Square Meters</h1>
      <p className="text-gray-500 mb-6">Convert between square feet and square meters for area measurements.</p>

      <AreaConverter />

      <AdSlot slot="result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">About Area Units</h2>
        <p className="text-gray-600 mb-4">
          Square feet (sq ft) is commonly used in the United States for measuring room and
          property sizes. Square meters (sq m or m²) is the international standard used
          in most other countries. 1 square foot equals approximately 0.093 square meters.
        </p>
      </div>

      <AdSlot slot="middle" />

      <RelatedLinks
        links={[
          { href: '/length/cm-to-feet', label: 'CM to Feet', description: 'Useful for room and height comparisons.' },
          { href: '/length/inches-to-cm', label: 'Inches to CM', description: 'Another metric conversion.' },
          { href: '/weight/kg-to-lbs', label: 'KG to Lbs', description: 'Helpful for luggage and package tracking.' },
        ]}
      />

      <FaqSection items={faqs} />
    </div>
  );
}
