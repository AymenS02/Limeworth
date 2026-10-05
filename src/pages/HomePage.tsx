import { CtaBanner } from '../components/sections/CtaBanner';
import { Hero } from '../components/sections/Hero';
import { HowToBook } from '../components/sections/HowToBook';
import { ServiceAreas } from '../components/sections/ServiceAreas';
import { ServiceCards } from '../components/sections/ServiceCards';
import { Testimonial } from '../components/sections/Testimonial';
import { ContactDetails, HoursCard, MapEmbed } from '../components/sections/VisitInfo';
import { WhyLimeworth } from '../components/sections/WhyLimeworth';
import { PageTransition } from '../components/motion/PageTransition';
import { Reveal } from '../components/motion/Reveal';
import { ButtonLink } from '../components/ui/Button';
import { Section, SectionHeading } from '../components/ui/Layout';
import { usePageTitle } from '../hooks/usePageTitle';

export function HomePage() {
  usePageTitle();

  return (
    <PageTransition>
      <Hero />

      <Section tone="muted" labelledBy="services-title">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            id="services-title"
            eyebrow="Our services"
            title="Diagnostic imaging, close to home"
            description="Four core imaging services under one roof, with walk-in X-ray and fast appointments for everything else."
          />
          <Reveal className="mb-10 shrink-0 sm:mb-12">
            <ButtonLink to="/services" variant="secondary" iconRight="arrowRight">
              All services
            </ButtonLink>
          </Reveal>
        </div>
        <ServiceCards />
      </Section>

      <Section labelledBy="booking-title">
        <SectionHeading
          id="booking-title"
          eyebrow="How it works"
          title="Getting your exam is simple"
          description="Three steps from your doctor’s requisition to results sent back to your doctor."
        />
        <HowToBook />
      </Section>

      <Section tone="muted" labelledBy="why-title">
        <SectionHeading id="why-title" eyebrow="Why Limeworth" title="Professional care that puts patients first" />
        <WhyLimeworth />
      </Section>

      <Section labelledBy="testimonial-title">
        <h2 id="testimonial-title" className="sr-only">
          What our patients say
        </h2>
        <Testimonial />
      </Section>

      <Section tone="muted" labelledBy="visit-title">
        <SectionHeading id="visit-title" eyebrow="Visit us" title="Hours & location" />
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr_1.3fr]">
          <Reveal>
            <ContactDetails />
          </Reveal>
          <Reveal>
            <HoursCard />
          </Reveal>
          <Reveal className="flex">
            <MapEmbed className="w-full" />
          </Reveal>
        </div>
        <div className="mt-16">
          <ServiceAreas />
        </div>
      </Section>

      <CtaBanner />
    </PageTransition>
  );
}
