export interface CurrencyRate {
  code: string;
  name: string;
  symbol: string;
  toUsd: number; // 1 unit of this currency = X USD
}

export const currencies: CurrencyRate[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', toUsd: 1 },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', toUsd: 0.0067 },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', toUsd: 0.138 },
  { code: 'EUR', name: 'Euro', symbol: '€', toUsd: 1.085 },
  { code: 'GBP', name: 'British Pound', symbol: '£', toUsd: 1.27 },
];

// Fixed reference rates (as of May 2026)
export const referenceRates = {
  usdToJpy: 149.5,
  usdToCny: 7.25,
  usdToEur: 0.92,
  usdToGbp: 0.79,
  eurToGbp: 0.86,
  eurToJpy: 162.5,
};
