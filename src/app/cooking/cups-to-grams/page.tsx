import type { Metadata } from 'next';
import CookingConverter from '@/components/CookingConverter';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Cups to Grams Converter - Cooking Measurements | ConvertEasy',
  description: 'Convert cups to grams for flour, butter, sugar, milk and more. Free online cooking measurement converter with common amounts reference table.',
};

export default function CookingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Cups to Grams Converter</h1>
      <p className="text-gray-500 mb-6">Convert cooking measurements between cups and grams for different ingredients.</p>

      <CookingConverter />

      <AdSlot className="ad-slot-result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">How to Use This Converter</h2>
        <p className="text-gray-600 mb-4">
          Select your ingredient from the dropdown, then enter the amount in cups or grams.
          The converter will automatically calculate the equivalent value. Different ingredients
          have different densities, so 1 cup of flour weighs less than 1 cup of sugar.
        </p>
        <p className="text-gray-600">
          The common amounts table below shows standard recipe measurements for quick reference.
        </p>
      </div>

      <AdSlot className="ad-slot-middle" />
    </div>
  );
}
