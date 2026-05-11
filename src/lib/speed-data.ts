export interface SpeedReference {
  label: string;
  mph: number;
  kmh: number;
}

export const speedReferences: SpeedReference[] = [
  { label: 'Walking Speed', mph: 3, kmh: 4.8 },
  { label: 'Jogging', mph: 5, kmh: 8 },
  { label: 'Running', mph: 8, kmh: 12.9 },
  { label: 'Cycling (Casual)', mph: 12, kmh: 19.3 },
  { label: 'Cycling (Racing)', mph: 25, kmh: 40.2 },
  { label: 'City Speed Limit', mph: 30, kmh: 48.3 },
  { label: 'Highway Speed Limit (US)', mph: 65, kmh: 104.6 },
  { label: 'Highway Speed Limit (EU)', mph: 75, kmh: 120.7 },
  { label: 'Usain Bolt Top Speed', mph: 27.8, kmh: 44.7 },
];
