import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - ConvertEasy',
  description: 'Privacy policy for ConvertEasy. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose text-gray-600 space-y-4">
        <p><strong>Last updated:</strong> May 11, 2026</p>

        <p>
          ConvertEasy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates this website.
          This page informs you of our policies regarding the collection, use, and disclosure of
          personal information when you use our service.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">1. Information We Collect</h2>
        <p>
          We do not collect any personally identifiable information about you when you use our
          converter tools. The conversions happen entirely in your browser, and we do not store
          any input data on our servers.
        </p>
        <p>
          We may use third-party advertising services (such as Google AdSense) that may collect
          information about your browsing activity to serve relevant ads.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">2. Cookies and Tracking</h2>
        <p>
          Our website may use cookies to improve user experience and for analytics purposes.
          Third-party vendors, including Google, use cookies to serve ads based on your prior
          visits to our website or other websites. You may opt out of personalized advertising
          by visiting Google&apos;s Ads Settings.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">3. Third-Party Services</h2>
        <p>
          We use the following third-party services:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Google AdSense</strong> - for displaying advertisements</li>
          <li><strong>Google Analytics</strong> - for website traffic analysis (if applicable)</li>
          <li><strong>Vercel</strong> - for website hosting and deployment</li>
        </ul>
        <p>
          These third-party services have their own privacy policies. We recommend reviewing
          each of them to understand how they handle your data.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">4. Data Security</h2>
        <p>
          We take reasonable measures to protect your information. However, no method of
          transmission over the Internet is 100% secure. We strive to protect your personal
          information but cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">5. Children&apos;s Privacy</h2>
        <p>
          Our service does not address anyone under the age of 13. We do not knowingly collect
          personal information from children under 13.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any
          changes by posting the new policy on this page. Changes are effective immediately
          upon posting.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through the
          information provided on our About page.
        </p>
      </div>
    </div>
  );
}
