'use client';

import { LuxuryHero } from '@/components/luxury-hero';
import { CTASection } from '@/components/cta-section';
import { GalleryGrid } from '@/components/gallery-grid';

export default function HomePage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <LuxuryHero
        title="Exquisite Architecture, Unparalleled Elegance"
        subtitle="Discover a world where timeless design meets modern luxury in our curated selection of exceptional properties."
        ctaLabel="Explore Properties"
        ctaHref="/portfolio"
        imageUrl="https://picsum.photos/seed/luxury-hero-1/1920/1080"
      />

      {/* Section 2: Features */}
      <section id="features" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Curated Excellence</h2>
          <GalleryGrid
            images={[
              { id: 1, src: 'https://picsum.photos/seed/feature1/600/400', alt: 'Luxury living room' },
              { id: 2, src: 'https://picsum.photos/seed/feature2/600/400', alt: 'Modern kitchen' },
              { id: 3, src: 'https://picsum.photos/seed/feature3/600/400', alt: 'Private terrace' },
              { id: 4, src: 'https://picsum.photos/seed/feature4/600/400', alt: 'Infinity pool' },
              { id: 5, src: 'https://picsum.photos/seed/feature5/600/400', alt: 'Luxury bedroom' },
              { id: 6, src: 'https://picsum.photos/seed/feature6/600/400', alt: 'Garden oasis' },
            ]}
          />
        </div>
      </section>

      {/* Section 3: CTA */}
      <section className="py-16 md:py-24">
        <CTASection
          title="Begin Your Journey to Luxury Living"
          subtitle="Our exclusive properties offer unparalleled comfort, sophistication, and privacy. Contact us today to schedule a private viewing."
          ctaLabel="Contact Us"
          ctaHref="/contact"
          imageUrl="https://picsum.photos/seed/luxury-cta/1920/1080"
        />
      </section>

      {/* Section 4: Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
              Elevate Your Lifestyle
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-10 text-center max-w-2xl">
              Our portfolio represents the finest real estate investments across the globe, combining architectural mastery with meticulous attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View Portfolio
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium transition-colors hover:bg-muted"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
