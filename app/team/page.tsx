'use client';

import { Metadata } from 'next';
import LuxuryHero from '@/components/luxury-hero';
import TeamMemberCard from '@/components/team-member-card';

,
};

export default function TeamPage() {
  return (
    <main>
      {/* Section 1: Team Introduction */}
      <LuxuryHero
        title="Our Leadership"
        subtitle="A team dedicated to personalized service and local expertise"
        image="https://picsum.photos/seed/team-intro/1920/1080"
      />

      {/* Section 2: Staff Grid */}
      <section id="team-grid" className="py-16 md:py-24 bg-muted">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="luxury-font text-3xl md:text-4xl font-bold text-foreground mb-4">Our Dedicated Team</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced team combines local knowledge with professional expertise to create unforgettable experiences for every guest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard
              name="Elena Thompson"
              role="Director of Guest Experience"
              bio="With over 15 years in luxury hospitality, Elena ensures every guest receives personalized attention and unforgettable moments."
              image="https://picsum.photos/seed/elena/400/500"
            />

            <TeamMemberCard
              name="Marcus Chen"
              role="Head Concierge"
              bio="Marcus brings a wealth of local knowledge and world-class service expertise to connect guests with authentic regional experiences."
              image="https://picsum.photos/seed/marcus/400/500"
            />

            <TeamMemberCard
              name="Isabella Santos"
              role="Wellness Director"
              bio="Isabella curates transformative wellness experiences that harmonize with nature and promote holistic rejuvenation."
              image="https://picsum.photos/seed/isabella/400/500"
            />

            <TeamMemberCard
              name="James Whitaker"
              role="Culinary Director"
              bio="James creates exquisite culinary experiences using locally sourced ingredients and innovative techniques."
              image="https://picsum.photos/seed/james/400/500"
            />

            <TeamMemberCard
              name="Sophia Müller"
              role="Operations Manager"
              bio="Sophia ensures seamless operations with meticulous attention to detail and a commitment to excellence in every aspect."
              image="https://picsum.photos/seed/sophia/400/500"
            />

            <TeamMemberCard
              name="David Okonjo"
              role="Experience Curator"
              bio="David designs bespoke journeys that connect guests with the rich cultural heritage and natural beauty of our surroundings."
              image="https://picsum.photos/seed/david/400/500"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
