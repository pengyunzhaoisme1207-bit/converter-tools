export interface WeightReference {
  label: string;
  kg: number;
  lbs: number;
}

export const weightReferences: WeightReference[] = [
  { label: 'Average Adult Woman', kg: 62, lbs: 137 },
  { label: 'Average Adult Man', kg: 70, lbs: 154 },
  { label: 'Olympic Sprinter (Female)', kg: 58, lbs: 128 },
  { label: 'Olympic Sprinter (Male)', kg: 78, lbs: 172 },
  { label: 'Marathon Runner (Female)', kg: 52, lbs: 115 },
  { label: 'Marathon Runner (Male)', kg: 60, lbs: 132 },
  { label: 'Sumo Wrestler', kg: 150, lbs: 331 },
  { label: 'Newborn Baby', kg: 3.5, lbs: 7.7 },
];
