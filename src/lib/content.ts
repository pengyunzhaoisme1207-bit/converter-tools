export const commonRelatedConverters = [
  {
    href: '/cooking/cups-to-grams',
    label: 'Cups to Grams',
    description: 'Convert recipe ingredients by density.',
  },
  {
    href: '/length/cm-to-feet',
    label: 'CM to Feet',
    description: 'Convert height from metric to feet and inches.',
  },
  {
    href: '/length/inches-to-cm',
    label: 'Inches to CM',
    description: 'Convert inches to centimeters instantly.',
  },
  {
    href: '/weight/kg-to-lbs',
    label: 'KG to Lbs',
    description: 'Convert body weight and package weight.',
  },
];

export function heightContext(cm: number) {
  if (cm < 160) {
    return `${cm} cm is a shorter adult height and is often checked for clothing sizing, travel forms, sports profiles, and international height comparisons.`;
  }
  if (cm < 170) {
    return `${cm} cm sits in a common everyday height range for adults, so it is useful for profile forms, health calculators, clothing guides, and travel documents.`;
  }
  if (cm < 180) {
    return `${cm} cm is a frequently searched height because it is close to many average adult height references across Europe, North America, and Asia.`;
  }
  if (cm < 190) {
    return `${cm} cm is a tall adult height, commonly converted for sports rosters, modeling profiles, medical records, and international introductions.`;
  }
  return `${cm} cm is a very tall adult height, often converted when comparing basketball, volleyball, modeling, and other height-sensitive profiles.`;
}

export function weightContext(kg: number) {
  if (kg < 55) {
    return `${kg} kg is commonly converted for lightweight body weight records, luggage checks, fitness tracking, and medical forms that use pounds.`;
  }
  if (kg < 75) {
    return `${kg} kg falls in a common adult body weight range, making the kilogram-to-pound conversion useful for gym plans, health apps, and travel documents.`;
  }
  if (kg < 95) {
    return `${kg} kg is often checked for fitness goals, strength training records, body weight references, and shipping labels in countries that use pounds.`;
  }
  return `${kg} kg is a heavier weight value often converted for fitness tracking, medical records, freight estimates, and equipment capacity checks.`;
}

export function inchesContext(inches: number) {
  if (inches <= 12) {
    return `${inches} inches is a small length often used for screens, craft projects, tools, packaging, and household measurements.`;
  }
  if (inches <= 36) {
    return `${inches} inches is a common product and furniture measurement, useful when comparing U.S. dimensions with metric centimeter listings.`;
  }
  if (inches <= 60) {
    return `${inches} inches is frequently used for tables, TVs, shelves, and room items where metric buyers need a fast centimeter equivalent.`;
  }
  return `${inches} inches is a larger length often used for height, furniture, curtains, and home improvement measurements.`;
}
