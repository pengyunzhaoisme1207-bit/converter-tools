export const siteConfig = {
  name: 'ConvertEasy',
  url: 'https://converter.next-happy.com',
  description:
    'Free online unit converter tools for cooking, height, weight, length, clothing sizes, temperature, speed, and area.',
  contactEmail: 'hello@next-happy.com',
};

export function absoluteUrl(path = '') {
  if (!path || path === '/') return siteConfig.url;
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
}
