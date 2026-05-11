import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryCard from '@/components/CategoryCard';

export const metadata: Metadata = {
  title: 'ConvertEasy - Free Online Unit Converter Tools',
  description: 'Free online unit converter tools for cooking measurements, height conversion, clothing sizes, temperature and more. Fast and mobile-friendly.',
};

const categories = [
  { href: '/cooking/cups-to-grams', icon: '🍳', title: 'Cooking Converter', description: 'Cups to grams for flour, butter, sugar, milk' },
  { href: '/length/cm-to-feet', icon: '📏', title: 'Height Converter', description: 'Centimeters to feet and inches conversion' },
  { href: '/clothing/size-converter', icon: '👕', title: 'Clothing Sizes', description: 'US, UK, EU, Asia size comparison' },
  { href: '/temperature/celsius-to-fahrenheit', icon: '🌡️', title: 'Temperature', description: 'Celsius, Fahrenheit, Kelvin converter' },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">ConvertEasy</h1>
        <p className="text-lg text-gray-500">Free online unit converter tools</p>
      </div>

      <div className="bg-blue-50 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">Quick Convert</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/cooking/cups-to-grams" className="px-4 py-2 bg-white rounded-lg shadow text-sm text-gray-700 hover:text-blue-600 hover:shadow-md transition">Cups to Grams</Link>
          <Link href="/length/cm-to-feet" className="px-4 py-2 bg-white rounded-lg shadow text-sm text-gray-700 hover:text-blue-600 hover:shadow-md transition">CM to Feet</Link>
          <Link href="/clothing/size-converter" className="px-4 py-2 bg-white rounded-lg shadow text-sm text-gray-700 hover:text-blue-600 hover:shadow-md transition">Clothing Sizes</Link>
          <Link href="/temperature/celsius-to-fahrenheit" className="px-4 py-2 bg-white rounded-lg shadow text-sm text-gray-700 hover:text-blue-600 hover:shadow-md transition">Temperature</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.href} {...cat} />
        ))}
      </div>
    </div>
  );
}
