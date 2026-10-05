import { ContactForm } from '../components/sections/ContactForm';
import { PageHeader } from '../components/sections/PageHeader';
import { ContactDetails, HoursCard, MapEmbed } from '../components/sections/VisitInfo';
import { PageTransition } from '../components/motion/PageTransition';
import { Reveal } from '../components/motion/Reveal';
import { Section } from '../components/ui/Layout';
import { usePageTitle } from '../hooks/usePageTitle';

export function ContactPage() {
  usePageTitle('Contact & Booking');

  return (
    <PageTransition>
      <PageHeader
        title="Contact & booking"
        description="Walk in for X-ray during clinic hours. For ultrasound, mammogram or bone density, request an appointment below or give us a call."
        crumbs={[{ label: 'Contact' }]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal className="space-y-8">
            <ContactDetails />
            <HoursCard />
          </Reveal>
        </div>
        <Reveal className="mt-14">
          <MapEmbed className="h-[28rem]" />
        </Reveal>
      </Section>
    </PageTransition>
  );
}
