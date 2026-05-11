import type { Metadata } from 'next';
import TablespoonConverter from '@/components/TablespoonConverter';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Tablespoons to Cups Converter - Cooking Volume | ConvertEasy',
  description: 'Convert tablespoons and teaspoons to cups. Free online cooking volume converter with common measurement reference table.',
};

export default function TablespoonPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Tablespoons to Cups Converter</h1>
      <p className="text-gray-500 mb-6">Convert between tablespoons, teaspoons, and cups for cooking and baking.</p>

      <TablespoonConverter />

      <AdSlot className="ad-slot-result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Quick Reference</h2>
        <p className="text-gray-600 mb-2">
          1 cup = 16 tablespoons = 48 teaspoons. Use the converter above to quickly convert
          between any of these cooking volume measurements.
        </p>
      </div>

      <AdSlot className="ad-slot-middle" />
    </div>
  );
}
