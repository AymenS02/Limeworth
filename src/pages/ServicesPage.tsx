import { Link } from 'react-router-dom';
import { CtaBanner } from '../components/sections/CtaBanner';
import { PageHeader } from '../components/sections/PageHeader';
import { PageTransition } from '../components/motion/PageTransition';
import { RevealGroup, RevealItem } from '../components/motion/Reveal';
import { ButtonLink } from '../components/ui/Button';
import { Badge, Section } from '../components/ui/Layout';
import { Icon } from '../components/ui/Icon';
import { services } from '../data/clinic';
import { usePageTitle } from '../hooks/usePageTitle';

export function ServicesPage() {
  usePageTitle('Services');

  return (
    <PageTransition>
      <PageHeader
        title="Our services"
        description="Walk-in X-ray, same-day ultrasound, OBSP and diagnostic mammography, and bone mineral density testing — performed by certified technologists and reviewed by qualified radiologists."
        crumbs={[{ label: 'Services' }]}
      />

      <Section>
        <RevealGroup as="ul" className="space-y-6">
          {services.map((s) => (
            <RevealItem as="li" key={s.slug}>
              <article className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-semibold text-slate-900">
                      <Link to={`/services/${s.slug}`} className="transition-colors hover:text-brand-700">
                        {s.name}
                      </Link>
                    </h2>
                    <Badge tone={s.booking === 'walk-in' ? 'brand' : 'accent'}>
                      {s.booking === 'walk-in' ? 'No appointment needed' : 'By appointment'}
                    </Badge>
                  </div>
                  <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">{s.summary}</p>
                  <p className="mt-3 flex items-start gap-2 text-sm font-medium text-slate-800">
                    <Icon name="info" className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" />
                    {s.bookingNote}
                  </p>
                </div>
                <ButtonLink to={`/services/${s.slug}`} variant="secondary" iconRight="arrowRight" className="justify-self-start">
                  Details
                </ButtonLink>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CtaBanner />
    </PageTransition>
  );
}
