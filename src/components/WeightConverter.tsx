'use client';

import { useState } from 'react';
import { kgToLbs, lbsToKg } from '@/lib/conversions';

export default function WeightConverter() {
  const [kg, setKg] = useState('70');
  const [lbs, setLbs] = useState('');

  const handleKgChange = (value: string) => {
    setKg(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setLbs(kgToLbs(num).toString());
    } else {
      setLbs('');
    }
  };

  const handleLbsChange = (value: string) => {
    setLbs(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setKg(lbsToKg(num).toString());
    } else {
      setKg('');
    }
  };

  const num = parseFloat(kg);
  const displayLbs = isNaN(num) ? '-' : kgToLbs(num).toString();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Kilograms (kg)</label>
          <input
            type="number"
            value={kg}
            onChange={(e) => handleKgChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-2xl font-bold"
            placeholder="Enter kg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Pounds (lbs)</label>
          <input
            type="number"
            value={lbs}
            onChange={(e) => handleLbsChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-2xl font-bold"
            placeholder="Enter lbs"
          />
        </div>
      </div>

      {num && !isNaN(num) && (
        <div className="bg-blue-50 rounded-lg p-6 text-center mb-6">
          <div className="text-4xl font-bold text-blue-600">{displayLbs} lbs</div>
          <div className="text-gray-500 mt-2">{kg} kg = {displayLbs} lbs</div>
        </div>
      )}
    </div>
  );
}
