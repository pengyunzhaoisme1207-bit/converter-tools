import type { Metadata } from 'next';
import AreaConverter from '@/components/AreaConverter';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Square Feet to Square Meters Converter - Area | ConvertEasy',
  description: 'Convert square feet to square meters and vice versa. Free online area converter with common room and property size references.',
};

export default function AreaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Square Feet to Square Meters</h1>
      <p className="text-gray-500 mb-6">Convert between square feet and square meters for area measurements.</p>

      <AreaConverter />

      <AdSlot className="ad-slot-result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">About Area Units</h2>
        <p className="text-gray-600 mb-4">
          Square feet (sq ft) is commonly used in the United States for measuring room and
          property sizes. Square meters (sq m or m²) is the international standard used
          in most other countries. 1 square foot equals approximately 0.093 square meters.
        </p>
      </div>

      <AdSlot className="ad-slot-middle" />
    </div>
  );
}
