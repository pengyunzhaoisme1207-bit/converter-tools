'use client';

import { useState } from 'react';
import { celsiusToFahrenheit, celsiusToKelvin } from '@/lib/conversions';

const references = [
  { label: '人体体温', celsius: 37, fahrenheit: 98.6, kelvin: 310.15 },
  { label: '舒适室温', celsius: 22, fahrenheit: 72, kelvin: 295.15 },
  { label: '冰箱冷藏', celsius: 4, fahrenheit: 39, kelvin: 277.15 },
  { label: '烤箱低温', celsius: 150, fahrenheit: 300, kelvin: 423.15 },
  { label: '烤箱中温', celsius: 180, fahrenheit: 350, kelvin: 453.15 },
  { label: '烤箱高温', celsius: 220, fahrenheit: 425, kelvin: 493.15 },
  { label: '水沸点', celsius: 100, fahrenheit: 212, kelvin: 373.15 },
  { label: '水冰点', celsius: 0, fahrenheit: 32, kelvin: 273.15 },
];

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState('25');

  const c = parseFloat(celsius);
  const f = isNaN(c) ? '-' : celsiusToFahrenheit(c).toString();
  const k = isNaN(c) ? '-' : celsiusToKelvin(c).toString();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Celsius (&deg;C)</label>
          <input
            type="number"
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
            className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-2xl font-bold"
            placeholder="Enter &deg;C"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Fahrenheit (&deg;F)</label>
          <div className="w-full px-3 py-3 bg-gray-50 rounded-lg text-2xl font-bold text-gray-700 border border-gray-200">
            {f}&deg;F
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Kelvin (K)</label>
          <div className="w-full px-3 py-3 bg-gray-50 rounded-lg text-2xl font-bold text-gray-700 border border-gray-200">
            {k}K
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-700 mb-3">Common Temperature References</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {references.map((ref) => (
            <div key={ref.label} className="bg-white rounded p-3 border text-center">
              <div className="text-xs text-gray-500 mb-1">{ref.label}</div>
              <div className="text-sm font-bold text-blue-600">{ref.celsius}&deg;C</div>
              <div className="text-xs text-gray-600">{ref.fahrenheit}&deg;F / {ref.kelvin}K</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
