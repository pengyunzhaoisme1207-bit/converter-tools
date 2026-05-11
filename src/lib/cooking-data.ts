export interface Ingredient {
  id: string;
  name: string;
  gramsPerCup: number;
  commonAmounts: { cups: number; grams: number }[];
}

export const ingredients: Ingredient[] = [
  {
    id: 'flour',
    name: '面粉 (All-Purpose Flour)',
    gramsPerCup: 125,
    commonAmounts: [
      { cups: 0.25, grams: 31 },
      { cups: 0.5, grams: 63 },
      { cups: 1, grams: 125 },
      { cups: 2, grams: 250 },
      { cups: 3, grams: 375 },
    ],
  },
  {
    id: 'butter',
    name: '黄油 (Butter)',
    gramsPerCup: 227,
    commonAmounts: [
      { cups: 0.25, grams: 57 },
      { cups: 0.5, grams: 114 },
      { cups: 1, grams: 227 },
      { cups: 2, grams: 454 },
      { cups: 3, grams: 681 },
    ],
  },
  {
    id: 'sugar',
    name: '糖 (Sugar)',
    gramsPerCup: 200,
    commonAmounts: [
      { cups: 0.25, grams: 50 },
      { cups: 0.5, grams: 100 },
      { cups: 1, grams: 200 },
      { cups: 2, grams: 400 },
      { cups: 3, grams: 600 },
    ],
  },
  {
    id: 'milk',
    name: '牛奶 (Milk)',
    gramsPerCup: 245,
    commonAmounts: [
      { cups: 0.25, grams: 61 },
      { cups: 0.5, grams: 123 },
      { cups: 1, grams: 245 },
      { cups: 2, grams: 490 },
      { cups: 3, grams: 735 },
    ],
  },
];

export function getIngredient(id: string): Ingredient | undefined {
  return ingredients.find((i) => i.id === id);
}
