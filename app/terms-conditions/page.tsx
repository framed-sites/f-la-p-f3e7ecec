import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Luxury Living',
  description: 'Terms and conditions for our luxury real estate services.',
  openGraph: {
    title: 'Terms & Conditions | Luxury Living',
    description: 'Terms and conditions for our luxury real estate services.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function TermsConditionsPage() {
  return (
    <main className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Section 1: Legal Introduction */}
        <section>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Last Updated: January 1, 2024
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Please read these terms and conditions carefully before using our website and services. By accessing or using our website, you agree to be bound by these terms and all applicable laws and regulations.
          </p>
        </section>

        {/* Section 2: Legal Content */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Use License</h2>
          <div className="space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              Unless otherwise stated, Luxury Living and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            <p>
              You must not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Republish material from this website</li>
              <li>Sell, rent, or sub-license material from this website</li>
              <li>Reproduce, duplicate, or copy material from this website</li>
              <li>Redistribute content from this website</li>
            </ul>
            <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">User Representations</h3>
            <p>
              By using our website, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All information you submit is accurate, current, and complete</li>
              <li>You will maintain the accuracy of such information</li>
              <li>You are at least 18 years old or using the website with parental consent</li>
              <li>You will not use the website for any illegal or unauthorized purpose</li>
            </ul>
            <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Prohibited Activities</h3>
            <p>
              You may not access or use the website for any purpose other than its intended purpose. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the website in any way that breaches any applicable local, national, or international law</li>
              <li>Use the website in any way that is unlawful or fraudulent</li>
              <li>Transmit any material that is defamatory, offensive, or otherwise objectionable</li>
              <li>Use the website to send unsolicited commercial communications</li>
            </ul>
            <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Termination</h3>
            <p>
              We may terminate or suspend your access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms and conditions.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Changes to These Terms</h3>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last Updated" date at the top of this page. Your continued use of the website after any such changes constitutes your acceptance of the new terms.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Contact Us</h3>
            <p>
              If you have any questions about these terms and conditions, please contact us at:
            </p>
            <p>
              Email: legal@luxuryliving.com<br />
              Phone: +1 (800) 123-4567<br />
              Address: 123 Luxury Avenue, Suite 100, New York, NY 10001
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
