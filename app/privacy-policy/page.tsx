import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Luxury Living',
  description: 'Privacy policy for our luxury real estate services.',
  openGraph: {
    title: 'Privacy Policy | Luxury Living',
    description: 'Privacy policy for our luxury real estate services.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Section 1: Legal Introduction */}
        <section>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Last Updated: January 1, 2024
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Welcome to Luxury Living. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we collect, use, and protect your information when you visit our website.
          </p>
        </section>

        {/* Section 2: Legal Content */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Information Collection and Use</h2>
          <div className="space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              We collect information you provide directly to us when you contact us, request information, schedule a viewing, or subscribe to our services. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information</li>
              <li>Property preferences and requirements</li>
              <li>Communication preferences</li>
              <li>Payment information for services</li>
            </ul>
            <p>
              We use the information we collect to provide, maintain, and improve our services, process your requests, communicate with you, and protect our rights and properties.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Data Protection</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. These measures include encryption, secure servers, and access controls.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Your Rights</h3>
            <p>
              You have the right to access, rectify, erase, or restrict the processing of your personal data, as well as the right to data portability and to object to processing. You may also withdraw consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Contact Us</h3>
            <p>
              If you have any questions about this privacy policy or our data practices, please contact us at:
            </p>
            <p>
              Email: privacy@luxuryliving.com<br />
              Phone: +1 (800) 123-4567<br />
              Address: 123 Luxury Avenue, Suite 100, New York, NY 10001
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
