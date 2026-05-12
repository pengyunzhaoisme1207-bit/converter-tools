import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/cooking/cups-to-grams', label: 'Cooking' },
  { href: '/length/cm-to-feet', label: 'Length' },
  { href: '/weight/kg-to-lbs', label: 'Weight' },
  { href: '/clothing/size-converter', label: 'Clothing' },
  { href: '/temperature/celsius-to-fahrenheit', label: 'Temp' },
  { href: '/speed/mph-to-kmh', label: 'Speed' },
  { href: '/area/sqft-to-sqm', label: 'Area' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ConvertEasy
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
