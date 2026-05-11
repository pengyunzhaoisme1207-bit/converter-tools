import type { Metadata } from 'next';
import TemperatureConverter from '@/components/TemperatureConverter';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Temperature Converter - Celsius to Fahrenheit | ConvertEasy',
  description: 'Convert between Celsius, Fahrenheit and Kelvin temperature scales. Includes common temperature references for daily life.',
};

export default function TemperaturePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Temperature Converter</h1>
      <p className="text-gray-500 mb-6">Convert between Celsius, Fahrenheit, and Kelvin temperature scales.</p>

      <TemperatureConverter />

      <AdSlot className="ad-slot-result" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Temperature Scales</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            <strong>Celsius (&deg;C)</strong> is the most widely used temperature scale worldwide.
            Water freezes at 0&deg;C and boils at 100&deg;C.
          </p>
          <p>
            <strong>Fahrenheit (&deg;F)</strong> is primarily used in the United States.
            Water freezes at 32&deg;F and boils at 212&deg;F.
          </p>
          <p>
            <strong>Kelvin (K)</strong> is the scientific standard used in physics and chemistry.
            Absolute zero is 0K, which equals -273.15&deg;C.
          </p>
        </div>
      </div>

      <AdSlot className="ad-slot-middle" />
    </div>
  );
}
