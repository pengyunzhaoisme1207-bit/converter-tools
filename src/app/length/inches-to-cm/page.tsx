import type { Metadata } from 'next';
import InchesCmConverter from '@/components/InchesCmConverter';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Inches to CM Converter - Length Conversion | ConvertEasy',
  description: 'Convert inches to centimeters and centimeters to inches. Free online length converter with detailed pages for 1-72 inches.',
};

export default function InchesCmPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Inches to CM Converter</h1>
      <p className="text-gray-500 mb-6">Convert between inches and centimeters instantly.</p>

      <InchesCmConverter />

      <AdSlot className="ad-slot-result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Quick Reference (1-72 inches)</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2 text-sm">
          {Array.from({ length: 72 }, (_, i) => i + 1).map((inch) => (
            <a key={inch} href={`/length/inches-to-cm/${inch}`} className="text-blue-600 hover:underline">
              {inch} in
            </a>
          ))}
        </div>
      </div>

      <AdSlot className="ad-slot-middle" />
    </div>
  );
}
