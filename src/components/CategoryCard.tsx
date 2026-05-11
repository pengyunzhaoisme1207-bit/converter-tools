import Link from 'next/link';

interface CategoryCardProps {
  href: string;
  icon: string;
  title: string;
  description: string;
}

export default function CategoryCard({ href, icon, title, description }: CategoryCardProps) {
  return (
    <Link href={href} className="block p-6 bg-white rounded-lg shadow hover:shadow-md border border-gray-100 transition-shadow">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </Link>
  );
}
