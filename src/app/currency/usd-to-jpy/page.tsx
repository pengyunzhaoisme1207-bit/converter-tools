import type { Metadata } from 'next';
import CurrencyConverter from '@/components/CurrencyConverter';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Currency Converter - USD JPY CNY EUR GBP | ConvertEasy',
  description: 'Convert between US Dollar, Japanese Yen, Chinese Yuan, Euro, and British Pound. Free online currency converter with reference rates.',
};

export default function CurrencyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Currency Converter</h1>
      <p className="text-gray-500 mb-6">Convert between major world currencies using reference exchange rates.</p>

      <CurrencyConverter />

      <AdSlot className="ad-slot-result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">About Exchange Rates</h2>
        <p className="text-gray-600 mb-4">
          The exchange rates shown on this page are fixed reference values and may not reflect
          current market rates. Currency exchange rates fluctuate constantly based on global
          financial markets. For actual transactions, please consult your bank or a live
          exchange rate service.
        </p>
        <p className="text-sm text-gray-500 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <strong>Disclaimer:</strong> These rates are for reference only. They are not intended
          for financial transactions or investment decisions.
        </p>
      </div>

      <AdSlot className="ad-slot-middle" />
    </div>
  );
}
