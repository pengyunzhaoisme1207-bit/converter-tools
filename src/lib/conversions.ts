// Length conversions
export function cmToFeetInches(cm: number): { feet: number; inches: number } {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round((totalInches % 12) * 100) / 100;
  return { feet, inches };
}

export function feetInchesToCm(feet: number, inches: number): number {
  return Math.round((feet * 12 + inches) * 2.54 * 100) / 100;
}

export function inchesToCm(inches: number): number {
  return Math.round(inches * 2.54 * 100) / 100;
}

export function cmToInches(cm: number): number {
  return Math.round(cm / 2.54 * 100) / 100;
}

// Temperature conversions
export function celsiusToFahrenheit(c: number): number {
  return Math.round((c * 9) / 5 + 32);
}

export function fahrenheitToCelsius(f: number): number {
  return Math.round(((f - 32) * 5) / 9 * 100) / 100;
}

export function celsiusToKelvin(c: number): number {
  return Math.round((c + 273.15) * 100) / 100;
}

export function kelvinToCelsius(k: number): number {
  return Math.round((k - 273.15) * 100) / 100;
}

export function fahrenheitToKelvin(f: number): number {
  return celsiusToKelvin(fahrenheitToCelsius(f));
}

export function kelvinToFahrenheit(k: number): number {
  return celsiusToFahrenheit(kelvinToCelsius(k));
}

// Cooking conversions (cups to grams based on ingredient density)
export function cupsToGrams(cups: number, gramsPerCup: number): number {
  return Math.round(cups * gramsPerCup * 100) / 100;
}

export function gramsToCups(grams: number, gramsPerCup: number): number {
  return Math.round((grams / gramsPerCup) * 100) / 100;
}

// Cooking volume conversions
export function tablespoonsToCups(tbsp: number): number {
  return Math.round(tbsp / 16 * 100) / 100;
}

export function cupsToTablespoons(cups: number): number {
  return Math.round(cups * 16 * 100) / 100;
}

export function teaspoonsToCups(tsp: number): number {
  return Math.round(tsp / 48 * 100) / 100;
}

export function cupsToTeaspoons(cups: number): number {
  return Math.round(cups * 48 * 100) / 100;
}

export function tablespoonsToTeaspoons(tbsp: number): number {
  return Math.round(tbsp * 3 * 100) / 100;
}

// Weight conversions
export function kgToLbs(kg: number): number {
  return Math.round(kg * 2.20462 * 100) / 100;
}

export function lbsToKg(lbs: number): number {
  return Math.round(lbs / 2.20462 * 100) / 100;
}

// Speed conversions
export function mphToKmh(mph: number): number {
  return Math.round(mph * 1.60934 * 100) / 100;
}

export function kmhToMph(kmh: number): number {
  return Math.round(kmh / 1.60934 * 100) / 100;
}

// Area conversions
export function sqftToSqm(sqft: number): number {
  return Math.round(sqft * 0.092903 * 100) / 100;
}

export function sqmToSqft(sqm: number): number {
  return Math.round(sqm / 0.092903 * 100) / 100;
}
