'use client';

import { useState } from 'react';
import { currencies, referenceRates } from '@/lib/currency-data';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('JPY');

  const fromCurr = currencies.find((c) => c.code === fromCurrency)!;
  const toCurr = currencies.find((c) => c.code === toCurrency)!;
  const num = parseFloat(amount);
  const result = isNaN(num) ? '-' : ((num * fromCurr.toUsd) / toCurr.toUsd).toFixed(2);

  return (
    <div>
      <p className="text-sm text-gray-500 bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6">
        ⚠️ These rates are for reference only and may not reflect current market rates. Always check a live exchange rate source for actual transactions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-2xl font-bold"
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {currencies.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code} - {c.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {currencies.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code} - {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {num && !isNaN(num) && (
        <div className="bg-blue-50 rounded-lg p-6 text-center mb-6">
          <div className="text-4xl font-bold text-blue-600">
            {toCurr.symbol}{result}
          </div>
          <div className="text-gray-500 mt-2">
            {amount} {fromCurr.code} = {result} {toCurr.code}
          </div>
        </div>
      )}

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-700 mb-3">Exchange Rate Reference Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-semibold text-gray-600">Currency</th>
                <th className="text-left py-2 px-3 font-semibold text-gray-600">1 USD =</th>
                <th className="text-left py-2 px-3 font-semibold text-gray-600">1 Unit = USD</th>
              </tr>
            </thead>
            <tbody>
              {currencies.map((c) => (
                <tr key={c.code} className="border-b border-gray-100">
                  <td className="py-2 px-3 font-medium">{c.symbol} {c.code} - {c.name}</td>
                  <td className="py-2 px-3 text-blue-600">
                    {c.code === 'USD' ? '-' : (1 / c.toUsd).toFixed(2)}
                  </td>
                  <td className="py-2 px-3">{c.toUsd.toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
