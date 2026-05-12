import type { Metadata } from 'next';
import HeightConverter from '@/components/HeightConverter';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/JsonLd';
import FaqSection from '@/components/FaqSection';
import RelatedLinks from '@/components/RelatedLinks';
import { faqJsonLd, webApplicationJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'CM to Feet Converter - Height Conversion Chart | ConvertEasy',
  description: 'Convert centimeters to feet and inches. Free online height converter with reference chart from 150cm to 200cm.',
  alternates: {
    canonical: '/length/cm-to-feet',
  },
};

export default function HeightPage() {
  const faqs = [
    {
      question: 'Why does height conversion need nearby values?',
      answer: 'People often compare a height range, not just one number. Nearby values help with profile forms, clothing size checks, and search comparisons.',
    },
    {
      question: 'Why is 150cm to 200cm the main range?',
      answer: 'It covers the majority of common adult height searches and gives the site a useful long-tail page cluster.',
    },
    {
      question: 'Can I use the detailed pages as bookmarks?',
      answer: 'Yes. Each detailed height page is meant to be shared, bookmarked, and indexed separately.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <JsonLd
        data={webApplicationJsonLd({
          name: 'CM to Feet Converter',
          description: 'Convert centimeters to feet and inches with detailed height reference pages.',
          path: '/length/cm-to-feet',
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <h1 className="text-3xl font-bold mb-2">CM to Feet Converter</h1>
      <p className="text-gray-500 mb-6">Convert your height between centimeters and feet/inches.</p>

      <HeightConverter />

      <AdSlot slot="result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Quick Reference</h2>
        <p className="text-gray-600 mb-4">
          Browse our detailed height conversion pages for every centimeter from 150cm to 200cm.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-2 text-sm">
          {Array.from({ length: 51 }, (_, i) => 150 + i).map((cm) => (
            <a key={cm} href={`/length/${cm}-cm-to-feet`} className="text-blue-600 hover:underline">
              {cm} cm
            </a>
          ))}
        </div>
      </div>

      <AdSlot slot="middle" />

      <RelatedLinks
        links={[
          { href: '/length/inches-to-cm', label: 'Inches to CM', description: 'Reverse length conversion.' },
          { href: '/weight/kg-to-lbs', label: 'KG to Lbs', description: 'Helpful for body weight comparisons.' },
          { href: '/clothing/size-converter', label: 'Clothing Sizes', description: 'Useful when height affects sizing.' },
        ]}
      />

      <FaqSection items={faqs} />
    </div>
  );
}
