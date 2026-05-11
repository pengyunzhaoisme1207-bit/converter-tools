'use client';

import { useState } from 'react';
import { mensSizes, womensSizes, SizeEntry } from '@/lib/clothing-data';

export default function ClothingConverter() {
  const [tab, setTab] = useState<'men' | 'women'>('men');
  const sizes: SizeEntry[] = tab === 'men' ? mensSizes : womensSizes;

  return (
    <div>
      <div className="flex gap-4 mb-6 border-b">
        <button
          onClick={() => setTab('men')}
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${
            tab === 'men'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Men
        </button>
        <button
          onClick={() => setTab('women')}
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${
            tab === 'women'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Women
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">US</th>
              <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">UK</th>
              <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">EU</th>
              <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">Asia</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((entry, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-200 px-4 py-3 font-medium text-blue-600">{entry.us}</td>
                <td className="border border-gray-200 px-4 py-3">{entry.uk}</td>
                <td className="border border-gray-200 px-4 py-3">{entry.eu}</td>
                <td className="border border-gray-200 px-4 py-3">{entry.asia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
