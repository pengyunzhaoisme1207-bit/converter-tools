import type { Metadata } from 'next';
import WeightConverter from '@/components/WeightConverter';
import AdSlot from '@/components/AdSlot';
import { weightReferences } from '@/lib/weight-data';

export const metadata: Metadata = {
  title: 'KG to Lbs Converter - Weight Conversion | ConvertEasy',
  description: 'Convert kilograms to pounds and pounds to kilograms. Free online weight converter with reference chart for common body weights.',
};

export default function WeightPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">KG to Lbs Converter</h1>
      <p className="text-gray-500 mb-6">Convert between kilograms and pounds instantly.</p>

      <WeightConverter />

      <AdSlot className="ad-slot-result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Weight References</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {weightReferences.map((ref) => (
            <div key={ref.label} className="bg-gray-50 rounded p-3 border text-center">
              <div className="text-xs text-gray-500 mb-1">{ref.label}</div>
              <div className="text-sm font-bold text-blue-600">{ref.kg} kg</div>
              <div className="text-xs text-gray-600">{ref.lbs} lbs</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-gray-700 mb-3">Quick Links (40-120 kg)</h3>
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2 text-sm">
          {Array.from({ length: 81 }, (_, i) => 40 + i).map((kg) => (
            <a key={kg} href={`/weight/kg-to-lbs/${kg}`} className="text-blue-600 hover:underline">
              {kg} kg
            </a>
          ))}
        </div>
      </div>

      <AdSlot className="ad-slot-middle" />
    </div>
  );
}
