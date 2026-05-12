import type { Metadata } from 'next';
import { kgToLbs } from '@/lib/conversions';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/JsonLd';
import RelatedLinks from '@/components/RelatedLinks';
import { weightContext } from '@/lib/content';
import { webApplicationJsonLd } from '@/lib/seo';

export async function generateStaticParams() {
  return Array.from({ length: 81 }, (_, i) => ({
    value: (40 + i).toString(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ value: string }> }): Promise<Metadata> {
  const { value } = await params;
  const num = parseInt(value);
  const lbs = kgToLbs(num);
  return {
    title: `${num} kg to lbs - ${num} kilograms in pounds | ConvertEasy`,
    description: `${num} kilograms equals ${lbs} pounds. Free weight conversion with nearby kg values and practical context.`,
    alternates: {
      canonical: `/weight/kg-to-lbs/${num}`,
    },
  };
}

export default async function DynamicWeightPage({ params }: { params: Promise<{ value: string }> }) {
  const { value } = await params;
  const num = parseInt(value);
  const lbs = kgToLbs(num);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <JsonLd
        data={webApplicationJsonLd({
          name: `${num} KG to Lbs Converter`,
          description: `${num} kilograms equals ${lbs} pounds with nearby kilogram values and practical context.`,
          path: `/weight/kg-to-lbs/${num}`,
        })}
      />
      <h1 className="text-3xl font-bold mb-2">{num} kg to lbs</h1>
      <p className="text-gray-500 mb-6">{num} kilograms converted to pounds</p>

      <div className="bg-blue-50 rounded-xl p-8 text-center mb-6">
        <div className="text-5xl font-bold text-blue-600 mb-2">{lbs} lbs</div>
        <div className="text-xl text-gray-600">{num} kg = {lbs} lbs</div>
      </div>

      <AdSlot slot="result" />

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">Conversion Details</h3>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 text-gray-600">Kilograms</td>
              <td className="py-2 font-medium">{num} kg</td>
            </tr>
            <tr>
              <td className="py-2 text-gray-600">Pounds</td>
              <td className="py-2 font-medium">{lbs} lbs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <AdSlot slot="middle" />

      <section className="mt-8 text-gray-600 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">What {num} kg Means</h2>
        <p>{weightContext(num)}</p>
        <p>
          To convert kilograms to pounds, multiply the kilogram value by 2.20462. For {num} kg,
          the result is {lbs} lbs. This conversion is common for gym tracking, medical forms,
          package labels, luggage limits, and international product specifications.
        </p>
      </section>

      <div className="mt-6">
        <h2 className="font-semibold text-gray-700 mb-3">Nearby Values</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
          {Array.from({ length: 11 }, (_, i) => num - 5 + i)
            .filter((v) => v >= 40 && v <= 120)
            .map((v) => {
              const r = kgToLbs(v);
              return (
                <a
                  key={v}
                  href={`/weight/kg-to-lbs/${v}`}
                  className={`p-2 rounded border ${v === num ? 'bg-blue-50 border-blue-300 font-bold text-blue-600' : 'text-blue-600 hover:bg-gray-50'}`}
                >
                  {v} kg = {r} lbs
                </a>
              );
            })}
        </div>
      </div>

      <RelatedLinks
        links={[
          { href: '/weight/kg-to-lbs', label: 'KG to Lbs Converter', description: 'Interactive kilogram and pound converter.' },
          { href: '/length/cm-to-feet', label: 'CM to Feet', description: 'Common height conversion.' },
          { href: '/clothing/size-converter', label: 'Clothing Sizes', description: 'International size comparison.' },
        ]}
      />
    </div>
  );
}
