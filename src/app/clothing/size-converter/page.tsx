import type { Metadata } from 'next';
import ClothingConverter from '@/components/ClothingConverter';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Clothing Size Converter - US UK EU Asia | ConvertEasy',
  description: 'Convert clothing sizes between US, UK, EU and Asia standards. Separate charts for men and women.',
};

export default function ClothingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Clothing Size Converter</h1>
      <p className="text-gray-500 mb-6">Compare clothing sizes across US, UK, EU, and Asia standards.</p>

      <ClothingConverter />

      <AdSlot className="ad-slot-result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">About Clothing Sizes</h2>
        <p className="text-gray-600 mb-4">
          Clothing sizes vary significantly between regions. A US Medium may correspond to an EU 48,
          a UK Small, or an Asian 175/88A. Use the converter above to find the equivalent sizes
          for both men&apos;s and women&apos;s clothing.
        </p>
      </div>

      <AdSlot className="ad-slot-middle" />
    </div>
  );
}
