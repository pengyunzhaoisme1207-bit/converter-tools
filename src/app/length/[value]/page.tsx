import type { Metadata } from 'next';
import { cmToFeetInches } from '@/lib/conversions';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/JsonLd';
import RelatedLinks from '@/components/RelatedLinks';
import { heightContext } from '@/lib/content';
import { webApplicationJsonLd } from '@/lib/seo';

export async function generateStaticParams() {
  return Array.from({ length: 51 }, (_, i) => ({
    value: `${150 + i}-cm-to-feet`,
  }));
}

export function generateMetadata({ params }: { params: { value: string } }): Metadata {
  const num = parseInt(params.value.split('-')[0]);
  const { feet, inches } = cmToFeetInches(num);
  return {
    title: `${num} cm in Feet and Inches | ConvertEasy`,
    description: `${num} centimeters equals ${feet} feet and ${inches} inches. Free height conversion with nearby cm values and total inches.`,
    alternates: {
      canonical: `/length/${num}-cm-to-feet`,
    },
  };
}

export default function DynamicHeightPage({ params }: { params: { value: string } }) {
  const num = parseInt(params.value.split('-')[0]);
  const { feet, inches } = cmToFeetInches(num);
  const totalInches = Math.round((num / 2.54) * 100) / 100;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <JsonLd
        data={webApplicationJsonLd({
          name: `${num} cm in Feet and Inches`,
          description: `${num} centimeters equals ${feet} feet and ${inches} inches with total inches and nearby height values.`,
          path: `/length/${num}-cm-to-feet`,
        })}
      />
      <h1 className="text-3xl font-bold mb-2">{num} cm in Feet and Inches</h1>
      <p className="text-gray-500 mb-6">Height conversion for {num} centimeters</p>

      <div className="bg-blue-50 rounded-xl p-8 text-center mb-6">
        <div className="text-5xl font-bold text-blue-600 mb-2">
          {feet}&apos;{inches}&quot;
        </div>
        <div className="text-xl text-gray-600">
          {num} cm = {feet} ft {inches} in
        </div>
        <div className="text-sm text-gray-400 mt-2">
          or {totalInches} inches total
        </div>
      </div>

      <AdSlot slot="result" />

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">Conversion Details</h3>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 text-gray-600">Centimeters</td>
              <td className="py-2 font-medium">{num} cm</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 text-gray-600">Total Inches</td>
              <td className="py-2 font-medium">{totalInches}&quot;</td>
            </tr>
            <tr>
              <td className="py-2 text-gray-600">Feet + Inches</td>
              <td className="py-2 font-medium">{feet}&apos;{inches}&quot;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <AdSlot slot="middle" />

      <section className="mt-8 text-gray-600 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">What {num} cm Means</h2>
        <p>{heightContext(num)}</p>
        <p>
          To convert centimeters to feet and inches, divide the centimeter value by 2.54 to get
          total inches, then divide by 12 to separate full feet from the remaining inches. For
          {` ${num} cm`}, the total is {totalInches} inches, which rounds to {feet} feet and {inches} inches.
        </p>
        <p>
          This page is useful for international forms, dating profiles, sports rosters, medical
          records, clothing size checks, and travel documents where height may be requested in
          either metric or imperial units.
        </p>
      </section>

      <div className="mt-6">
        <h2 className="font-semibold text-gray-700 mb-3">Nearby Values</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
          {Array.from({ length: 11 }, (_, i) => num - 5 + i)
            .filter((v) => v >= 150 && v <= 200)
            .map((v) => {
              const r = cmToFeetInches(v);
              return (
                <a
                  key={v}
                  href={`/length/${v}-cm-to-feet`}
                  className={`p-2 rounded border ${v === num ? 'bg-blue-50 border-blue-300 font-bold text-blue-600' : 'text-blue-600 hover:bg-gray-50'}`}
                >
                  {v} cm = {r.feet}&apos;{r.inches}&quot;
                </a>
              );
            })}
        </div>
      </div>

      <RelatedLinks
        links={[
          { href: '/length/cm-to-feet', label: 'CM to Feet Converter', description: 'Interactive height converter and chart.' },
          { href: '/length/inches-to-cm', label: 'Inches to CM', description: 'Convert imperial length back to metric.' },
          { href: '/weight/kg-to-lbs', label: 'KG to Lbs', description: 'Common body weight conversion.' },
        ]}
      />
    </div>
  );
}
