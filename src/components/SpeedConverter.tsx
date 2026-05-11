'use client';

import { useState } from 'react';
import { mphToKmh, kmhToMph } from '@/lib/conversions';
import { speedReferences } from '@/lib/speed-data';

export default function SpeedConverter() {
  const [mph, setMph] = useState('60');
  const [kmh, setKmh] = useState('');

  const handleMphChange = (value: string) => {
    setMph(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setKmh(mphToKmh(num).toString());
    } else {
      setKmh('');
    }
  };

  const handleKmhChange = (value: string) => {
    setKmh(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setMph(kmhToMph(num).toString());
    } else {
      setMph('');
    }
  };

  const num = parseFloat(mph);
  const displayKmh = isNaN(num) ? '-' : mphToKmh(num).toString();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Miles per hour (mph)</label>
          <input
            type="number"
            value={mph}
            onChange={(e) => handleMphChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-2xl font-bold"
            placeholder="Enter mph"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Kilometers per hour (km/h)</label>
          <input
            type="number"
            value={kmh}
            onChange={(e) => handleKmhChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-2xl font-bold"
            placeholder="Enter km/h"
          />
        </div>
      </div>

      {num && !isNaN(num) && (
        <div className="bg-blue-50 rounded-lg p-6 text-center mb-6">
          <div className="text-4xl font-bold text-blue-600">{displayKmh} km/h</div>
          <div className="text-gray-500 mt-2">{mph} mph = {displayKmh} km/h</div>
        </div>
      )}

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-700 mb-3">Common Speed References</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {speedReferences.map((ref) => (
            <div key={ref.label} className="bg-white rounded p-3 border text-center">
              <div className="text-xs text-gray-500 mb-1">{ref.label}</div>
              <div className="text-sm font-bold text-blue-600">{ref.mph} mph</div>
              <div className="text-xs text-gray-600">{ref.kmh} km/h</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
