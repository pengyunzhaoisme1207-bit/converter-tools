import type { Metadata } from 'next';
import WeightConverter from '@/components/WeightConverter';
import AdSlot from '@/components/AdSlot';
import { weightReferences } from '@/lib/weight-data';
import JsonLd from '@/components/JsonLd';
import FaqSection from '@/components/FaqSection';
import RelatedLinks from '@/components/RelatedLinks';
import { faqJsonLd, webApplicationJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'KG to Lbs Converter - Weight Conversion | ConvertEasy',
  description: 'Convert kilograms to pounds and pounds to kilograms. Free online weight converter with reference chart for common body weights.',
  alternates: {
    canonical: '/weight/kg-to-lbs',
  },
};

export default function WeightPage() {
  const faqs = [
    {
      question: 'How do you convert kg to lbs?',
      answer: 'Multiply kilograms by 2.20462 to get pounds. For quick everyday use, 1 kg is about 2.2 lbs.',
    },
    {
      question: 'What is this converter best for?',
      answer: 'It is useful for body weight, gym records, luggage limits, shipping labels, and product specifications.',
    },
    {
      question: 'Can I open a specific kilogram value directly?',
      answer: 'Yes. Values from 40 kg to 120 kg have dedicated pages with nearby values and context.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <JsonLd
        data={webApplicationJsonLd({
          name: 'KG to Lbs Converter',
          description: 'Convert kilograms to pounds with reference values and dedicated weight pages.',
          path: '/weight/kg-to-lbs',
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <h1 className="text-3xl font-bold mb-2">KG to Lbs Converter</h1>
      <p className="text-gray-500 mb-6">Convert between kilograms and pounds instantly.</p>

      <WeightConverter />

      <AdSlot slot="result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Weight References</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {weightReferences.map((ref) => (
            <div key={ref.label} className="bg-gray-50 rounded p-3 border text-center">
              <div className="text-xs text-gray-500 mb-1">{ref.label}</div>
              <div className="text-sm font-bold text-blue-600">{ref.kg} kg</div>
              <div className="text-xs text-gray-600">{ref.lbs} lbs</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-gray-700 mb-3">Quick Links (40-120 kg)</h3>
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2 text-sm">
          {Array.from({ length: 81 }, (_, i) => 40 + i).map((kg) => (
            <a key={kg} href={`/weight/kg-to-lbs/${kg}`} className="text-blue-600 hover:underline">
              {kg} kg
            </a>
          ))}
        </div>
      </div>

      <AdSlot slot="middle" />

      <RelatedLinks
        links={[
          { href: '/length/cm-to-feet', label: 'CM to Feet', description: 'Common height conversion.' },
          { href: '/length/inches-to-cm', label: 'Inches to CM', description: 'Product and body measurement conversion.' },
          { href: '/clothing/size-converter', label: 'Clothing Sizes', description: 'International clothing size comparison.' },
        ]}
      />

      <FaqSection items={faqs} />
    </div>
  );
}
