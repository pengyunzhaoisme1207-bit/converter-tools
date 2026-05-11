'use client';

import { useState } from 'react';
import { cmToFeetInches, feetInchesToCm } from '@/lib/conversions';

export default function HeightConverter() {
  const [cm, setCm] = useState('170');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');

  const handleCmChange = (value: string) => {
    setCm(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      const result = cmToFeetInches(num);
      setFeet(result.feet.toString());
      setInches(result.inches.toString());
    }
  };

  const handleFeetInchesChange = (f: string, i: string) => {
    setFeet(f);
    setInches(i);
    const fNum = parseFloat(f);
    const iNum = parseFloat(i);
    if (!isNaN(fNum) && !isNaN(iNum)) {
      setCm(feetInchesToCm(fNum, iNum).toString());
    }
  };

  const result = cm ? cmToFeetInches(parseFloat(cm)) : null;
  const displayFeet = result?.feet ?? '-';
  const displayInches = result?.inches ?? '-';

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Feet &amp; Inches</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={feet}
              onChange={(e) => handleFeetInchesChange(e.target.value, inches)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Feet"
            />
            <input
              type="number"
              value={inches}
              onChange={(e) => handleFeetInchesChange(feet, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Inches"
            />
          </div>
        </div>
      </div>

      {result && (
        <div className="bg-blue-50 rounded-lg p-6 text-center mb-6">
          <div className="text-4xl font-bold text-blue-600">
            {displayFeet}&apos;{displayInches}&quot;
          </div>
          <div className="text-gray-500 mt-2">{cm} cm = {displayFeet} ft {displayInches} in</div>
        </div>
      )}
    </div>
  );
}
