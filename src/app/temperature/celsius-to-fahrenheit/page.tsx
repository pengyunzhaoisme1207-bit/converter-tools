import type { Metadata } from 'next';
import TemperatureConverter from '@/components/TemperatureConverter';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/JsonLd';
import FaqSection from '@/components/FaqSection';
import RelatedLinks from '@/components/RelatedLinks';
import { faqJsonLd, webApplicationJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Temperature Converter - Celsius to Fahrenheit | ConvertEasy',
  description: 'Convert between Celsius, Fahrenheit and Kelvin temperature scales. Includes common temperature references for daily life.',
  alternates: {
    canonical: '/temperature/celsius-to-fahrenheit',
  },
};

export default function TemperaturePage() {
  const faqs = [
    {
      question: 'How do you convert Celsius to Fahrenheit?',
      answer: 'Multiply Celsius by 9/5, then add 32. For example, 20°C equals 68°F.',
    },
    {
      question: 'When should I use Kelvin?',
      answer: 'Kelvin is mostly used in science, physics, chemistry, and engineering contexts.',
    },
    {
      question: 'Is Fahrenheit still commonly used?',
      answer: 'Yes. Fahrenheit is still common in the United States for weather, cooking, and household temperatures.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <JsonLd
        data={webApplicationJsonLd({
          name: 'Temperature Converter',
          description: 'Convert Celsius, Fahrenheit, and Kelvin for weather, cooking, and science contexts.',
          path: '/temperature/celsius-to-fahrenheit',
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <h1 className="text-3xl font-bold mb-2">Temperature Converter</h1>
      <p className="text-gray-500 mb-6">Convert between Celsius, Fahrenheit, and Kelvin temperature scales.</p>

      <TemperatureConverter />

      <AdSlot slot="result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Temperature Scales</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            <strong>Celsius (&deg;C)</strong> is the most widely used temperature scale worldwide.
            Water freezes at 0&deg;C and boils at 100&deg;C.
          </p>
          <p>
            <strong>Fahrenheit (&deg;F)</strong> is primarily used in the United States.
            Water freezes at 32&deg;F and boils at 212&deg;F.
          </p>
          <p>
            <strong>Kelvin (K)</strong> is the scientific standard used in physics and chemistry.
            Absolute zero is 0K, which equals -273.15&deg;C.
          </p>
        </div>
      </div>

      <AdSlot slot="middle" />

      <RelatedLinks
        links={[
          { href: '/cooking/cups-to-grams', label: 'Cups to Grams', description: 'Useful for recipes and baking.' },
          { href: '/cooking/tablespoons-to-cups', label: 'Tablespoons to Cups', description: 'Cooking volume conversion.' },
          { href: '/speed/mph-to-kmh', label: 'MPH to KM/H', description: 'Another everyday unit conversion.' },
        ]}
      />

      <FaqSection items={faqs} />
    </div>
  );
}
