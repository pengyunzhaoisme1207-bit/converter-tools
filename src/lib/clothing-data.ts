export interface SizeEntry {
  us: string;
  uk: string;
  eu: string;
  asia: string;
}

export const mensSizes: SizeEntry[] = [
  { us: 'XS', uk: 'XXS', eu: '42', asia: '165/80A' },
  { us: 'S', uk: 'XS', eu: '44-46', asia: '170/84A' },
  { us: 'M', uk: 'S', eu: '48', asia: '175/88A' },
  { us: 'L', uk: 'M', eu: '50-52', asia: '180/92A' },
  { us: 'XL', uk: 'L', eu: '54', asia: '185/96A' },
  { us: 'XXL', uk: 'XL', eu: '56', asia: '190/100A' },
  { us: '3XL', uk: 'XXL', eu: '58', asia: '195/104A' },
];

export const womensSizes: SizeEntry[] = [
  { us: '0', uk: '4', eu: '28', asia: '150/72A' },
  { us: '2', uk: '6', eu: '30', asia: '155/76A' },
  { us: '4', uk: '8', eu: '32', asia: '160/80A' },
  { us: '6', uk: '10', eu: '34', asia: '165/84A' },
  { us: '8', uk: '12', eu: '36', asia: '170/88A' },
  { us: '10', uk: '14', eu: '38', asia: '175/92A' },
  { us: '12', uk: '16', eu: '40', asia: '180/96A' },
  { us: '14', uk: '18', eu: '42', asia: '185/100A' },
];
