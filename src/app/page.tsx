import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryCard from '@/components/CategoryCard';

export const metadata: Metadata = {
  title: 'ConvertEasy - Free Online Unit Converter Tools',
  description: 'Free online unit converter tools for cooking, height, weight, clothing sizes, temperature, speed, and area. Fast, accurate conversions on any device.',
};

const categories = [
  { href: '/cooking/cups-to-grams', icon: '🍳', title: 'Cooking - Cups to Grams', description: '20+ ingredients including flours, sugars, fats, and more' },
  { href: '/cooking/tablespoons-to-cups', icon: '🥄', title: 'Cooking - Volume', description: 'Tablespoons, teaspoons to cups converter' },
  { href: '/length/cm-to-feet', icon: '📏', title: 'Height - CM to Feet', description: 'Centimeters to feet and inches conversion' },
  { href: '/length/inches-to-cm', icon: '📐', title: 'Length - Inches to CM', description: 'Inches to centimeters converter' },
  { href: '/weight/kg-to-lbs', icon: '⚖️', title: 'Weight - KG to Lbs', description: 'Kilograms to pounds with body weight references' },
  { href: '/clothing/size-converter', icon: '👕', title: 'Clothing Sizes', description: 'US, UK, EU, Asia size comparison' },
  { href: '/temperature/celsius-to-fahrenheit', icon: '🌡️', title: 'Temperature', description: 'Celsius, Fahrenheit, Kelvin converter' },
  { href: '/speed/mph-to-kmh', icon: '🚗', title: 'Speed - MPH to KM/H', description: 'Miles per hour to kilometers per hour' },
  { href: '/area/sqft-to-sqm', icon: '🏠', title: 'Area - Sq Ft to Sq M', description: 'Square feet to square meters converter' },
];

const quickLinks = [
  { href: '/cooking/cups-to-grams', label: 'Cups to Grams' },
  { href: '/cooking/tablespoons-to-cups', label: 'Tbsp to Cups' },
  { href: '/length/cm-to-feet', label: 'CM to Feet' },
  { href: '/length/inches-to-cm', label: 'Inches to CM' },
  { href: '/weight/kg-to-lbs', label: 'KG to Lbs' },
  { href: '/clothing/size-converter', label: 'Clothing Sizes' },
  { href: '/temperature/celsius-to-fahrenheit', label: 'Temperature' },
  { href: '/speed/mph-to-kmh', label: 'MPH to KM/H' },
  { href: '/area/sqft-to-sqm', label: 'Sq Ft to Sq M' },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">ConvertEasy</h1>
        <p className="text-lg text-gray-500 mb-6">Free online unit converter tools</p>
        <p className="max-w-2xl mx-auto text-gray-600 text-sm leading-relaxed">
          ConvertEasy is a free online unit converter that helps you quickly convert cooking measurements,
          height, weight, length, clothing sizes, temperature, speed, and area. Whether you're following
          a recipe, checking your height in different units, or comparing international clothing sizes,
          our fast and mobile-friendly tools make every conversion easy. No sign-up required — just pick
          a category and start converting.
        </p>
      </div>

      <div className="bg-blue-50 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">Quick Convert</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 bg-white rounded-lg shadow text-sm text-gray-700 hover:text-blue-600 hover:shadow-md transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.href} {...cat} />
        ))}
      </div>
    </div>
  );
}
