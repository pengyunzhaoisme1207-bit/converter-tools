import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About ConvertEasy - Free Online Converter Tools',
  description: 'Learn about ConvertEasy, a free online unit converter tool for cooking, height, clothing sizes, temperature and more.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About ConvertEasy</h1>
      <div className="prose text-gray-600 space-y-4">
        <p>
          ConvertEasy is a free online unit converter tool designed to make everyday conversions
          quick and easy. Whether you&apos;re cooking and need to convert cups to grams, checking
          your height in different units, or comparing clothing sizes across regions, we&apos;ve
          got you covered.
        </p>
        <p>
          The site focuses on practical, repeatable conversions that people search for every day:
          recipe measurements, height and body weight conversions, product dimensions, room area,
          weather temperatures, road speeds, and international clothing sizes. Most tools run in
          the browser and are designed to work quickly on mobile devices.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mt-6">Our Tools</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Cooking Converter</strong> - Convert between cups and grams for common baking ingredients</li>
          <li><strong>Volume Converter</strong> - Convert tablespoons and teaspoons to cups for recipes</li>
          <li><strong>Height Converter</strong> - Convert centimeters to feet and inches</li>
          <li><strong>Length Converter</strong> - Convert inches to centimeters for product dimensions</li>
          <li><strong>Weight Converter</strong> - Convert kilograms to pounds for body weight and packages</li>
          <li><strong>Clothing Size Converter</strong> - Compare US, UK, EU, and Asia clothing sizes</li>
          <li><strong>Temperature Converter</strong> - Convert between Celsius, Fahrenheit, and Kelvin</li>
          <li><strong>Speed and Area Converters</strong> - Convert mph to km/h and square feet to square meters</li>
        </ul>
        <h2 className="text-xl font-semibold text-gray-800 mt-6">How We Build Conversion Pages</h2>
        <p>
          We use standard unit conversion formulas and ingredient-specific reference values where
          density matters, such as cups to grams. Dedicated pages for common height, inch, and
          kilogram values include nearby links so users can compare adjacent numbers without
          starting over.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mt-6">Why ConvertEasy?</h2>
        <p>
          ConvertEasy is fast, free, and works on any device. We optimize for mobile since most
          of our users convert on the go. No sign-up required, no limits on usage.
        </p>
        <p>
          ConvertEasy is supported by advertising. Ads help keep the tools free, but they should
          not block the converter controls or change the calculation results.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mt-6">Contact</h2>
        <p>
          If you have questions or suggestions, use the{' '}
          <Link href="/contact" className="text-blue-600 hover:underline">contact page</Link>.
        </p>
      </div>
    </div>
  );
}
