import type { Metadata } from 'next';
import TablespoonConverter from '@/components/TablespoonConverter';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/JsonLd';
import FaqSection from '@/components/FaqSection';
import RelatedLinks from '@/components/RelatedLinks';
import { faqJsonLd, webApplicationJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Tablespoons to Cups Converter - Cooking Volume | ConvertEasy',
  description: 'Convert tablespoons and teaspoons to cups. Free online cooking volume converter with common measurement reference table.',
  alternates: {
    canonical: '/cooking/tablespoons-to-cups',
  },
};

export default function TablespoonPage() {
  const faqs = [
    {
      question: 'How many tablespoons are in a cup?',
      answer: 'One cup equals 16 tablespoons. One tablespoon equals 3 teaspoons.',
    },
    {
      question: 'When should I use this converter?',
      answer: 'Use it when a recipe gives volume in tablespoons or teaspoons but your measuring tools are marked in cups.',
    },
    {
      question: 'Is this a density-based converter?',
      answer: 'No. This page converts cooking volume, so the ingredient type does not change the result.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <JsonLd
        data={webApplicationJsonLd({
          name: 'Tablespoons to Cups Converter',
          description: 'Convert tablespoons, teaspoons, and cups with a simple cooking volume reference.',
          path: '/cooking/tablespoons-to-cups',
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <h1 className="text-3xl font-bold mb-2">Tablespoons to Cups Converter</h1>
      <p className="text-gray-500 mb-6">Convert between tablespoons, teaspoons, and cups for cooking and baking.</p>

      <TablespoonConverter />

      <AdSlot slot="result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Quick Reference</h2>
        <p className="text-gray-600 mb-2">
          1 cup = 16 tablespoons = 48 teaspoons. Use the converter above to quickly convert
          between any of these cooking volume measurements.
        </p>
      </div>

      <AdSlot slot="middle" />

      <RelatedLinks
        links={[
          { href: '/cooking/cups-to-grams', label: 'Cups to Grams', description: 'Ingredient-weight conversion.' },
          { href: '/length/inches-to-cm', label: 'Inches to CM', description: 'Another common lookup page.' },
          { href: '/temperature/celsius-to-fahrenheit', label: 'Temperature Converter', description: 'Useful for baking instructions.' },
        ]}
      />

      <FaqSection items={faqs} />
    </div>
  );
}
