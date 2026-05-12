import type { Metadata } from 'next';
import CookingConverter from '@/components/CookingConverter';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/JsonLd';
import FaqSection from '@/components/FaqSection';
import RelatedLinks from '@/components/RelatedLinks';
import { faqJsonLd, webApplicationJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Cups to Grams Converter - Cooking Measurements | ConvertEasy',
  description: 'Convert cups to grams for flour, butter, sugar, milk and more. Free online cooking measurement converter with common amounts reference table.',
  alternates: {
    canonical: '/cooking/cups-to-grams',
  },
};

export default function CookingPage() {
  const faqs = [
    {
      question: 'Why are cups to grams different for each ingredient?',
      answer: 'A cup measures volume, but grams measure weight. Flour, sugar, butter, milk, and oil all have different densities, so each ingredient needs its own conversion factor.',
    },
    {
      question: 'Is this converter useful for baking?',
      answer: 'Yes. Baking often needs exact weights, and this page helps translate common cup-based recipes into grams.',
    },
    {
      question: 'Does the table help with recipe scaling?',
      answer: 'Yes. The reference table is useful when doubling recipes, matching international recipes, or checking packaged ingredient amounts.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <JsonLd
        data={webApplicationJsonLd({
          name: 'Cups to Grams Converter',
          description: 'Convert cups to grams for common cooking ingredients with clear reference guidance.',
          path: '/cooking/cups-to-grams',
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <h1 className="text-3xl font-bold mb-2">Cups to Grams Converter</h1>
      <p className="text-gray-500 mb-6">Convert cooking measurements between cups and grams for different ingredients.</p>

      <CookingConverter />

      <AdSlot slot="result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">How to Use This Converter</h2>
        <p className="text-gray-600 mb-4">
          Select your ingredient from the dropdown, then enter the amount in cups or grams.
          The converter will automatically calculate the equivalent value. Different ingredients
          have different densities, so 1 cup of flour weighs less than 1 cup of sugar.
        </p>
        <p className="text-gray-600">
          The common amounts table below shows standard recipe measurements for quick reference.
        </p>
      </div>

      <AdSlot slot="middle" />

      <RelatedLinks
        links={[
          { href: '/cooking/tablespoons-to-cups', label: 'Tablespoons to Cups', description: 'Another cooking volume conversion.' },
          { href: '/length/cm-to-feet', label: 'CM to Feet', description: 'Common height and profile conversion.' },
          { href: '/temperature/celsius-to-fahrenheit', label: 'Temperature Converter', description: 'Useful for oven and food prep temperatures.' },
        ]}
      />

      <FaqSection items={faqs} />
    </div>
  );
}
