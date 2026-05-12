import type { Metadata } from 'next';
import { inchesToCm } from '@/lib/conversions';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/JsonLd';
import RelatedLinks from '@/components/RelatedLinks';
import { inchesContext } from '@/lib/content';
import { webApplicationJsonLd } from '@/lib/seo';

export async function generateStaticParams() {
  return Array.from({ length: 72 }, (_, i) => ({
    value: (i + 1).toString(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ value: string }> }): Promise<Metadata> {
  const { value } = await params;
  const num = parseInt(value);
  const cm = inchesToCm(num);
  return {
    title: `${num} inches to cm - ${num} inches in centimeters | ConvertEasy`,
    description: `${num} inches equals ${cm} centimeters. Free length conversion with nearby inch values and metric context.`,
    alternates: {
      canonical: `/length/inches-to-cm/${num}`,
    },
  };
}

export default async function DynamicInchesCmPage({ params }: { params: Promise<{ value: string }> }) {
  const { value } = await params;
  const num = parseInt(value);
  const cm = inchesToCm(num);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <JsonLd
        data={webApplicationJsonLd({
          name: `${num} Inches to CM Converter`,
          description: `${num} inches equals ${cm} centimeters with nearby inch values and metric context.`,
          path: `/length/inches-to-cm/${num}`,
        })}
      />
      <h1 className="text-3xl font-bold mb-2">{num} inches to cm</h1>
      <p className="text-gray-500 mb-6">{num} inches converted to centimeters</p>

      <div className="bg-blue-50 rounded-xl p-8 text-center mb-6">
        <div className="text-5xl font-bold text-blue-600 mb-2">{cm} cm</div>
        <div className="text-xl text-gray-600">{num} in = {cm} cm</div>
      </div>

      <AdSlot slot="result" />

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">Conversion Details</h3>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 text-gray-600">Inches</td>
              <td className="py-2 font-medium">{num} in</td>
            </tr>
            <tr>
              <td className="py-2 text-gray-600">Centimeters</td>
              <td className="py-2 font-medium">{cm} cm</td>
            </tr>
          </tbody>
        </table>
      </div>

      <AdSlot slot="middle" />

      <section className="mt-8 text-gray-600 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">What {num} Inches Means</h2>
        <p>{inchesContext(num)}</p>
        <p>
          The formula is simple: multiply inches by 2.54 to get centimeters. For {num} inches,
          the result is {cm} cm. This is especially useful when product listings, furniture
          dimensions, screen sizes, or craft instructions use inches while your measuring tape
          or local standards use centimeters.
        </p>
      </section>

      <div className="mt-6">
        <h2 className="font-semibold text-gray-700 mb-3">Nearby Values</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
          {Array.from({ length: 11 }, (_, i) => num - 5 + i)
            .filter((v) => v >= 1 && v <= 72)
            .map((v) => {
              const r = inchesToCm(v);
              return (
                <a
                  key={v}
                  href={`/length/inches-to-cm/${v}`}
                  className={`p-2 rounded border ${v === num ? 'bg-blue-50 border-blue-300 font-bold text-blue-600' : 'text-blue-600 hover:bg-gray-50'}`}
                >
                  {v} in = {r} cm
                </a>
              );
            })}
        </div>
      </div>

      <RelatedLinks
        links={[
          { href: '/length/inches-to-cm', label: 'Inches to CM Converter', description: 'Interactive inch-to-centimeter converter.' },
          { href: '/length/cm-to-feet', label: 'CM to Feet', description: 'Height conversion in feet and inches.' },
          { href: '/area/sqft-to-sqm', label: 'Sq Ft to Sq M', description: 'Convert home and room area.' },
        ]}
      />
    </div>
  );
}
