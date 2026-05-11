import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ConvertEasy
        </Link>
        <nav className="hidden md:flex gap-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/cooking/cups-to-grams" className="hover:text-blue-600">Cooking</Link>
          <Link href="/length/cm-to-feet" className="hover:text-blue-600">Length</Link>
          <Link href="/weight/kg-to-lbs" className="hover:text-blue-600">Weight</Link>
          <Link href="/clothing/size-converter" className="hover:text-blue-600">Clothing</Link>
          <Link href="/temperature/celsius-to-fahrenheit" className="hover:text-blue-600">Temp</Link>
          <Link href="/speed/mph-to-kmh" className="hover:text-blue-600">Speed</Link>
          <Link href="/area/sqft-to-sqm" className="hover:text-blue-600">Area</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
        </nav>
        <nav className="flex sm:hidden text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
        </nav>
      </div>
    </header>
  );
}
