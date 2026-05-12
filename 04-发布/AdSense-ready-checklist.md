# ConvertEasy AdSense-ready Checklist

Last checked: 2026-05-12

## Site

- Production domain: `https://converter.next-happy.com`
- Sitemap: `https://converter.next-happy.com/sitemap.xml`
- Robots: `https://converter.next-happy.com/robots.txt`
- Ads.txt: `https://converter.next-happy.com/ads.txt`
- Publisher ID: `pub-7338826858147459`

## Completed

- [x] Global AdSense script installed in `src/app/layout.tsx`
- [x] `ads.txt` includes `google.com, pub-7338826858147459, DIRECT, f08c47fec0942fa0`
- [x] `robots.txt` points to `converter.next-happy.com`
- [x] `sitemap.ts` generates production-domain URLs
- [x] `/about` exists and describes the site
- [x] `/contact` exists with contact email
- [x] `/privacy` includes Google AdSense, cookies, third-party ads, third-party links, and contact info
- [x] Core converter pages include canonical metadata
- [x] Core converter pages include WebApplication JSON-LD
- [x] Core converter pages include FAQ content and FAQPage JSON-LD where applicable
- [x] Ad placeholders use stable heights and `Advertisement` labeling
- [x] Internal links connect converter categories and batch pages
- [x] `npm run build` passes and generates 221 static pages

## Before submitting in AdSense

- [ ] Deploy the latest build to Vercel
- [ ] Open `https://converter.next-happy.com/ads.txt` and confirm the publisher line is visible
- [ ] Open `https://converter.next-happy.com/sitemap.xml` and confirm URLs use `converter.next-happy.com`
- [ ] Submit or resubmit sitemap in Google Search Console
- [ ] Request indexing for homepage and 5-10 core converter pages
- [ ] Confirm AdSense site entry uses `converter.next-happy.com`

## Core pages to request indexing first

- `/`
- `/cooking/cups-to-grams`
- `/length/cm-to-feet`
- `/length/170-cm-to-feet`
- `/length/inches-to-cm`
- `/weight/kg-to-lbs`
- `/weight/kg-to-lbs/70`
- `/area/sqft-to-sqm`
- `/about`
- `/privacy`
- `/contact`
