import type { Metadata } from 'next';
import HeightConverter from '@/components/HeightConverter';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'CM to Feet Converter - Height Conversion Chart | ConvertEasy',
  description: 'Convert centimeters to feet and inches. Free online height converter with reference chart from 150cm to 200cm.',
};

export default function HeightPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">CM to Feet Converter</h1>
      <p className="text-gray-500 mb-6">Convert your height between centimeters and feet/inches.</p>

      <HeightConverter />

      <AdSlot className="ad-slot-result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Quick Reference</h2>
        <p className="text-gray-600 mb-4">
          Browse our detailed height conversion pages for every centimeter from 150cm to 200cm.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-2 text-sm">
          {Array.from({ length: 51 }, (_, i) => 150 + i).map((cm) => (
            <a key={cm} href={`/length/${cm}-cm-to-feet`} className="text-blue-600 hover:underline">
              {cm} cm
            </a>
          ))}
        </div>
      </div>

      <AdSlot className="ad-slot-middle" />
    </div>
  );
}
