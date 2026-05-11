export interface AreaReference {
  label: string;
  sqft: number;
  sqm: number;
}

export const areaReferences: AreaReference[] = [
  { label: 'Small Bedroom', sqft: 100, sqm: 9.3 },
  { label: 'Average Bedroom', sqft: 150, sqm: 13.9 },
  { label: 'Living Room', sqft: 300, sqm: 27.9 },
  { label: 'Studio Apartment', sqft: 400, sqm: 37.2 },
  { label: 'One-Bedroom Apartment', sqft: 700, sqm: 65 },
  { label: 'Two-Bedroom Apartment', sqft: 1000, sqm: 92.9 },
  { label: 'Average House (US)', sqft: 2500, sqm: 232.3 },
  { label: 'Tennis Court', sqft: 2808, sqm: 260.9 },
];
