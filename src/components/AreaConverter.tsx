'use client';

import { useState } from 'react';
import { sqftToSqm, sqmToSqft } from '@/lib/conversions';
import { areaReferences } from '@/lib/area-data';

export default function AreaConverter() {
  const [sqft, setSqft] = useState('500');
  const [sqm, setSqm] = useState('');

  const handleSqftChange = (value: string) => {
    setSqft(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setSqm(sqftToSqm(num).toString());
    } else {
      setSqm('');
    }
  };

  const handleSqmChange = (value: string) => {
    setSqm(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setSqft(sqmToSqft(num).toString());
    } else {
      setSqft('');
    }
  };

  const num = parseFloat(sqft);
  const displaySqm = isNaN(num) ? '-' : sqftToSqm(num).toString();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Square feet (sq ft)</label>
          <input
            type="number"
            value={sqft}
            onChange={(e) => handleSqftChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-2xl font-bold"
            placeholder="Enter sq ft"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Square meters (sq m)</label>
          <input
            type="number"
            value={sqm}
            onChange={(e) => handleSqmChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-2xl font-bold"
            placeholder="Enter sq m"
          />
        </div>
      </div>

      {num && !isNaN(num) && (
        <div className="bg-blue-50 rounded-lg p-6 text-center mb-6">
          <div className="text-4xl font-bold text-blue-600">{displaySqm} sq m</div>
          <div className="text-gray-500 mt-2">{sqft} sq ft = {displaySqm} sq m</div>
        </div>
      )}

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-700 mb-3">Common Area References</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {areaReferences.map((ref) => (
            <div key={ref.label} className="bg-white rounded p-3 border text-center">
              <div className="text-xs text-gray-500 mb-1">{ref.label}</div>
              <div className="text-sm font-bold text-blue-600">{ref.sqft} sq ft</div>
              <div className="text-xs text-gray-600">{ref.sqm} sq m</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
