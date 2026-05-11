import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://converteasy.com';

  // Static pages
  const pages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    // Cooking
    { url: `${baseUrl}/cooking/cups-to-grams`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/cooking/tablespoons-to-cups`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    // Length
    { url: `${baseUrl}/length/cm-to-feet`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/length/inches-to-cm`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    // Weight
    { url: `${baseUrl}/weight/kg-to-lbs`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    // Clothing
    { url: `${baseUrl}/clothing/size-converter`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    // Temperature
    { url: `${baseUrl}/temperature/celsius-to-fahrenheit`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    // Speed
    { url: `${baseUrl}/speed/mph-to-kmh`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    // Area
    { url: `${baseUrl}/area/sqft-to-sqm`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    // Currency
    { url: `${baseUrl}/currency/usd-to-jpy`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  // Batch height pages (150cm to 200cm)
  const heightPages = Array.from({ length: 51 }, (_, i) => 150 + i).map((cm) => ({
    url: `${baseUrl}/length/${cm}-cm-to-feet`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  // Batch inches to cm pages (1-72 inches)
  const inchesPages = Array.from({ length: 72 }, (_, i) => i + 1).map((inch) => ({
    url: `${baseUrl}/length/inches-to-cm/${inch}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  // Batch weight pages (40-120 kg)
  const weightPages = Array.from({ length: 81 }, (_, i) => 40 + i).map((kg) => ({
    url: `${baseUrl}/weight/kg-to-lbs/${kg}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...pages, ...heightPages, ...inchesPages, ...weightPages];
}
