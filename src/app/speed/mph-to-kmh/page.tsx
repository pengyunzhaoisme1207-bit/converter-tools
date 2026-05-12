import type { Metadata } from 'next';
import SpeedConverter from '@/components/SpeedConverter';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/JsonLd';
import FaqSection from '@/components/FaqSection';
import RelatedLinks from '@/components/RelatedLinks';
import { faqJsonLd, webApplicationJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'MPH to KM/H Converter - Speed Conversion | ConvertEasy',
  description: 'Convert miles per hour to kilometers per hour. Free online speed converter with common speed references.',
  alternates: {
    canonical: '/speed/mph-to-kmh',
  },
};

export default function SpeedPage() {
  const faqs = [
    {
      question: 'How do you convert mph to km/h?',
      answer: 'Multiply miles per hour by 1.60934 to get kilometers per hour.',
    },
    {
      question: 'Where is mph used?',
      answer: 'Miles per hour is mainly used on roads in the United States and the United Kingdom.',
    },
    {
      question: 'Where is km/h used?',
      answer: 'Kilometers per hour is used in most countries for road speed, travel, cycling, and weather reports.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <JsonLd
        data={webApplicationJsonLd({
          name: 'MPH to KM/H Converter',
          description: 'Convert miles per hour to kilometers per hour with common speed context.',
          path: '/speed/mph-to-kmh',
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <h1 className="text-3xl font-bold mb-2">MPH to KM/H Converter</h1>
      <p className="text-gray-500 mb-6">Convert between miles per hour and kilometers per hour.</p>

      <SpeedConverter />

      <AdSlot slot="result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">About Speed Units</h2>
        <p className="text-gray-600 mb-4">
          Miles per hour (mph) is used primarily in the United States and the United Kingdom.
          Kilometers per hour (km/h) is the standard speed unit in most countries worldwide.
          1 mph equals approximately 1.609 km/h.
        </p>
      </div>

      <AdSlot slot="middle" />

      <RelatedLinks
        links={[
          { href: '/length/inches-to-cm', label: 'Inches to CM', description: 'Length conversion for products and travel.' },
          { href: '/area/sqft-to-sqm', label: 'Sq Ft to Sq M', description: 'Property and room sizing.' },
          { href: '/temperature/celsius-to-fahrenheit', label: 'Temperature Converter', description: 'Weather and cooking temperatures.' },
        ]}
      />

      <FaqSection items={faqs} />
    </div>
  );
}
