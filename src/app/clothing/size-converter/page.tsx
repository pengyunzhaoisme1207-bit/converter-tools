import type { Metadata } from 'next';
import ClothingConverter from '@/components/ClothingConverter';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/JsonLd';
import FaqSection from '@/components/FaqSection';
import RelatedLinks from '@/components/RelatedLinks';
import { faqJsonLd, webApplicationJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Clothing Size Converter - US UK EU Asia | ConvertEasy',
  description: 'Convert clothing sizes between US, UK, EU and Asia standards. Separate charts for men and women.',
  alternates: {
    canonical: '/clothing/size-converter',
  },
};

export default function ClothingPage() {
  const faqs = [
    {
      question: 'Why do clothing sizes vary by region?',
      answer: 'Different countries and brands use different sizing systems, so a direct comparison is helpful when shopping internationally.',
    },
    {
      question: 'Is this useful for travel shopping?',
      answer: 'Yes. It helps when buying clothes overseas or comparing online stores that use different regional size labels.',
    },
    {
      question: 'Does the chart cover both men and women?',
      answer: 'Yes. Separate charts are included for men and women to make comparisons clearer.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <JsonLd
        data={webApplicationJsonLd({
          name: 'Clothing Size Converter',
          description: 'Compare US, UK, EU, and Asia clothing sizes for men and women.',
          path: '/clothing/size-converter',
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <h1 className="text-3xl font-bold mb-2">Clothing Size Converter</h1>
      <p className="text-gray-500 mb-6">Compare clothing sizes across US, UK, EU, and Asia standards.</p>

      <ClothingConverter />

      <AdSlot slot="result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">About Clothing Sizes</h2>
        <p className="text-gray-600 mb-4">
          Clothing sizes vary significantly between regions. A US Medium may correspond to an EU 48,
          a UK Small, or an Asian 175/88A. Use the converter above to find the equivalent sizes
          for both men&apos;s and women&apos;s clothing.
        </p>
      </div>

      <AdSlot slot="middle" />

      <RelatedLinks
        links={[
          { href: '/length/cm-to-feet', label: 'CM to Feet', description: 'Useful when height relates to sizing.' },
          { href: '/weight/kg-to-lbs', label: 'KG to Lbs', description: 'Useful for body measurement comparisons.' },
          { href: '/length/inches-to-cm', label: 'Inches to CM', description: 'Common apparel dimension conversion.' },
        ]}
      />

      <FaqSection items={faqs} />
    </div>
  );
}
