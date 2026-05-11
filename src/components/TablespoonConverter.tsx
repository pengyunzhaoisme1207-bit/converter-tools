'use client';

import { useState } from 'react';
import { tablespoonsToCups, cupsToTablespoons, teaspoonsToCups, cupsToTeaspoons, tablespoonsToTeaspoons } from '@/lib/conversions';

const commonTable = [
  { tbsp: 1, tsp: 3, cups: '1/16' },
  { tbsp: 2, tsp: 6, cups: '1/8' },
  { tbsp: 4, tsp: 12, cups: '1/4' },
  { tbsp: 5, tsp: 15, cups: '1/3' },
  { tbsp: 8, tsp: 24, cups: '1/2' },
  { tbsp: 12, tsp: 36, cups: '3/4' },
  { tbsp: 16, tsp: 48, cups: '1' },
];

export default function TablespoonConverter() {
  const [tbsp, setTbsp] = useState('1');
  const [tsp, setTsp] = useState('');
  const [cups, setCups] = useState('');

  const handleTbspChange = (value: string) => {
    setTbsp(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setTsp(tablespoonsToTeaspoons(num).toString());
      setCups(tablespoonsToCups(num).toString());
    }
  };

  const handleTspChange = (value: string) => {
    setTsp(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setTbsp((num / 3).toString());
      setCups(teaspoonsToCups(num).toString());
    }
  };

  const handleCupsChange = (value: string) => {
    setCups(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setTbsp(cupsToTablespoons(num).toString());
      setTsp(cupsToTeaspoons(num).toString());
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tablespoons (tbsp)</label>
          <input
            type="number"
            value={tbsp}
            onChange={(e) => handleTbspChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xl font-bold"
            placeholder="tbsp"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Teaspoons (tsp)</label>
          <input
            type="number"
            value={tsp}
            onChange={(e) => handleTspChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xl font-bold"
            placeholder="tsp"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Cups</label>
          <input
            type="number"
            value={cups}
            onChange={(e) => handleCupsChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xl font-bold"
            placeholder="cups"
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-700 mb-3">Common Cooking Measurements</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-semibold text-gray-600">Tablespoons</th>
                <th className="text-left py-2 px-3 font-semibold text-gray-600">Teaspoons</th>
                <th className="text-left py-2 px-3 font-semibold text-gray-600">Cups</th>
              </tr>
            </thead>
            <tbody>
              {commonTable.map((row) => (
                <tr key={row.tbsp} className="border-b border-gray-100">
                  <td className="py-2 px-3 font-medium text-blue-600">{row.tbsp} tbsp</td>
                  <td className="py-2 px-3">{row.tsp} tsp</td>
                  <td className="py-2 px-3">{row.cups} cup</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
