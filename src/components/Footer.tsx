import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Cooking</h3>
            <ul className="space-y-1">
              <li><Link href="/cooking/cups-to-grams" className="text-gray-500 hover:text-blue-600">Cups to Grams</Link></li>
              <li><Link href="/cooking/tablespoons-to-cups" className="text-gray-500 hover:text-blue-600">Tbsp to Cups</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Converters</h3>
            <ul className="space-y-1">
              <li><Link href="/length/cm-to-feet" className="text-gray-500 hover:text-blue-600">CM to Feet</Link></li>
              <li><Link href="/length/inches-to-cm" className="text-gray-500 hover:text-blue-600">Inches to CM</Link></li>
              <li><Link href="/weight/kg-to-lbs" className="text-gray-500 hover:text-blue-600">KG to Lbs</Link></li>
              <li><Link href="/temperature/celsius-to-fahrenheit" className="text-gray-500 hover:text-blue-600">Temperature</Link></li>
              <li><Link href="/speed/mph-to-kmh" className="text-gray-500 hover:text-blue-600">Speed</Link></li>
              <li><Link href="/area/sqft-to-sqm" className="text-gray-500 hover:text-blue-600">Area</Link></li>
              <li><Link href="/clothing/size-converter" className="text-gray-500 hover:text-blue-600">Clothing Sizes</Link></li>
              <li><Link href="/currency/usd-to-jpy" className="text-gray-500 hover:text-blue-600">Currency</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Height Charts</h3>
            <ul className="space-y-1">
              <li><Link href="/length/150-cm-to-feet" className="text-gray-500 hover:text-blue-600">150 cm</Link></li>
              <li><Link href="/length/160-cm-to-feet" className="text-gray-500 hover:text-blue-600">160 cm</Link></li>
              <li><Link href="/length/170-cm-to-feet" className="text-gray-500 hover:text-blue-600">170 cm</Link></li>
              <li><Link href="/length/180-cm-to-feet" className="text-gray-500 hover:text-blue-600">180 cm</Link></li>
              <li><Link href="/length/190-cm-to-feet" className="text-gray-500 hover:text-blue-600">190 cm</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Info</h3>
            <ul className="space-y-1">
              <li><Link href="/about" className="text-gray-500 hover:text-blue-600">About</Link></li>
              <li><Link href="/privacy" className="text-gray-500 hover:text-blue-600">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs mt-8">
          &copy; {new Date().getFullYear()} ConvertEasy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
