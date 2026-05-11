'use client';

import { useState } from 'react';
import { cupsToGrams, gramsToCups } from '@/lib/conversions';
import { ingredients } from '@/lib/cooking-data';

export default function CookingConverter() {
  const [ingredientId, setIngredientId] = useState('flour');
  const [cups, setCups] = useState('1');
  const [grams, setGrams] = useState('');

  const ingredient = ingredients.find((i) => i.id === ingredientId)!;

  const handleCupsChange = (value: string) => {
    setCups(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setGrams(cupsToGrams(num, ingredient.gramsPerCup).toString());
    } else {
      setGrams('');
    }
  };

  const handleGramsChange = (value: string) => {
    setGrams(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setCups(gramsToCups(num, ingredient.gramsPerCup).toString());
    } else {
      setCups('');
    }
  };

  const handleIngredientChange = (id: string) => {
    setIngredientId(id);
    const newIngredient = ingredients.find((i) => i.id === id)!;
    const cupsNum = parseFloat(cups);
    if (!isNaN(cupsNum) && cups) {
      setGrams(cupsToGrams(cupsNum, newIngredient.gramsPerCup).toString());
    }
  };

  return (
    <div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Ingredient</label>
        <select
          value={ingredientId}
          onChange={(e) => handleIngredientChange(e.target.value)}
          className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {ingredients.map((i) => (
            <option key={i.id} value={i.id}>
              {i.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Cups</label>
          <input
            type="number"
            value={cups}
            onChange={(e) => handleCupsChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter cups"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Grams</label>
          <input
            type="number"
            value={grams}
            onChange={(e) => handleGramsChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter grams"
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-700 mb-3">Common Amounts for {ingredient.name}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {ingredient.commonAmounts.map((a) => (
            <div key={a.cups} className="bg-white rounded p-3 text-center border">
              <div className="text-lg font-bold text-blue-600">{a.cups} cup{a.cups !== 1 ? 's' : ''}</div>
              <div className="text-sm text-gray-500">= {a.grams}g</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
