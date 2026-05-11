'use client';

import { useState } from 'react';
import { inchesToCm, cmToInches } from '@/lib/conversions';

export default function InchesCmConverter() {
  const [inches, setInches] = useState('');
  const [cm, setCm] = useState('');

  const handleInchesChange = (value: string) => {
    setInches(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setCm(inchesToCm(num).toString());
    } else {
      setCm('');
    }
  };

  const handleCmChange = (value: string) => {
    setCm(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setInches(cmToInches(num).toString());
    } else {
      setInches('');
    }
  };

  const num = parseFloat(inches);
  const displayCm = isNaN(num) ? '-' : inchesToCm(num).toString();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Inches (in)</label>
          <input
            type="number"
            value={inches}
            onChange={(e) => handleInchesChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-2xl font-bold"
            placeholder="Enter inches"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Centimeters (cm)</label>
          <input
            type="number"
            value={cm}
            onChange={(e) => handleCmChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-2xl font-bold"
            placeholder="Enter cm"
          />
        </div>
      </div>

      {num && !isNaN(num) && (
        <div className="bg-blue-50 rounded-lg p-6 text-center mb-6">
          <div className="text-4xl font-bold text-blue-600">{displayCm} cm</div>
          <div className="text-gray-500 mt-2">{inches} in = {displayCm} cm</div>
        </div>
      )}
    </div>
  );
}
