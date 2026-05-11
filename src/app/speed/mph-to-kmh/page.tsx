import type { Metadata } from 'next';
import SpeedConverter from '@/components/SpeedConverter';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'MPH to KM/H Converter - Speed Conversion | ConvertEasy',
  description: 'Convert miles per hour to kilometers per hour. Free online speed converter with common speed references.',
};

export default function SpeedPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">MPH to KM/H Converter</h1>
      <p className="text-gray-500 mb-6">Convert between miles per hour and kilometers per hour.</p>

      <SpeedConverter />

      <AdSlot className="ad-slot-result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">About Speed Units</h2>
        <p className="text-gray-600 mb-4">
          Miles per hour (mph) is used primarily in the United States and the United Kingdom.
          Kilometers per hour (km/h) is the standard speed unit in most countries worldwide.
          1 mph equals approximately 1.609 km/h.
        </p>
      </div>

      <AdSlot className="ad-slot-middle" />
    </div>
  );
}
