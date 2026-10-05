import { clinic } from '../../data/clinic';
import { ButtonAnchor, ButtonLink } from '../ui/Button';
import { Container } from '../ui/Layout';
import { Reveal } from '../motion/Reveal';

export function CtaBanner({
  title = 'Have your requisition? We’re ready when you are.',
  description = 'Walk in for X-ray, or reach out to book ultrasound, mammogram and bone density appointments — same-day ultrasound is often available.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-brand-800">
      <Container className="py-16 sm:py-20">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 id="cta-title" className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-brand-100">{description}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:shrink-0">
            <ButtonLink to="/contact" variant="inverse" size="lg">
              Request an appointment
            </ButtonLink>
            <ButtonAnchor
              href={clinic.phone.href}
              size="lg"
              icon="phone"
              className="border border-white/30 bg-transparent text-white shadow-none hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-brand-800"
            >
              {clinic.phone.display}
            </ButtonAnchor>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
