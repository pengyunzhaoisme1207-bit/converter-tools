import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ConvertEasy - Free Online Converter Tools',
  description: 'Learn about ConvertEasy, a free online unit converter tool for cooking, height, clothing sizes, temperature and more.',
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
        <h2 className="text-xl font-semibold text-gray-800 mt-6">Our Tools</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Cooking Converter</strong> - Convert between cups and grams for common baking ingredients</li>
          <li><strong>Height Converter</strong> - Convert centimeters to feet and inches</li>
          <li><strong>Clothing Size Converter</strong> - Compare US, UK, EU, and Asia clothing sizes</li>
          <li><strong>Temperature Converter</strong> - Convert between Celsius, Fahrenheit, and Kelvin</li>
        </ul>
        <h2 className="text-xl font-semibold text-gray-800 mt-6">Why ConvertEasy?</h2>
        <p>
          ConvertEasy is fast, free, and works on any device. We optimize for mobile since most
          of our users convert on the go. No sign-up required, no limits on usage.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mt-6">Contact</h2>
        <p>
          If you have questions or suggestions, feel free to reach out to us.
        </p>
      </div>
    </div>
  );
}
