import { Link, useParams } from 'react-router-dom';
import { CtaBanner } from '../components/sections/CtaBanner';
import { PageHeader } from '../components/sections/PageHeader';
import { HoursCard } from '../components/sections/VisitInfo';
import { PageTransition } from '../components/motion/PageTransition';
import { Reveal, RevealGroup, RevealItem } from '../components/motion/Reveal';
import { ButtonAnchor, ButtonLink } from '../components/ui/Button';
import { Section } from '../components/ui/Layout';
import { Icon } from '../components/ui/Icon';
import { clinic, documents, getService, services } from '../data/clinic';
import { usePageTitle } from '../hooks/usePageTitle';
import { NotFoundPage } from './NotFoundPage';

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getService(slug);
  usePageTitle(service?.name);

  if (!service) return <NotFoundPage />;

  const isWalkIn = service.booking === 'walk-in';
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <PageTransition>
      <PageHeader
        title={service.name}
        description={service.intro}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.shortName }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          {isWalkIn ? (
            <ButtonAnchor href={clinic.directionsUrl} target="_blank" rel="noopener noreferrer" size="lg" icon="mapPin">
              Get directions
            </ButtonAnchor>
          ) : (
            <ButtonLink to="/contact" size="lg" iconRight="arrowRight">
              Book an appointment
            </ButtonLink>
          )}
          <ButtonAnchor href={clinic.phone.href} variant="secondary" size="lg" icon="phone">
            Call {clinic.phone.display}
          </ButtonAnchor>
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div className="min-w-0 space-y-14">
            <Reveal className="flex gap-4 rounded-xl border border-brand-200 bg-brand-50 p-5">
              <Icon name={isWalkIn ? 'check' : 'calendar'} className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
              <div>
                <p className="font-semibold text-brand-900">{service.tagline}</p>
                <p className="mt-1 text-sm leading-relaxed text-brand-900/80">{service.bookingNote}</p>
              </div>
            </Reveal>

            {service.list && (
              <Reveal>
                <h2 className="text-2xl font-semibold text-slate-900">{service.list.title}</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.list.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                        <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                {service.list.footnote && (
                  <p className="mt-5 text-sm leading-relaxed text-slate-600">{service.list.footnote}</p>
                )}
              </Reveal>
            )}

            <div>
              <Reveal>
                <h2 className="text-2xl font-semibold text-slate-900">What to expect</h2>
                <p className="mt-2 flex items-center gap-2 text-slate-600">
                  <Icon name="clock" className="h-4 w-4 text-slate-400" />
                  {service.duration}
                </p>
              </Reveal>
              <RevealGroup as="ol" className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {service.steps.map((step, i) => (
                  <RevealItem as="li" key={step.title} className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">Step {i + 1}</p>
                    <h3 className="mt-1.5 text-lg font-semibold text-slate-900">{step.title}</h3>
                    <ul className="mt-3 space-y-2">
                      {step.items.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            <RevealGroup className="grid gap-5 sm:grid-cols-2">
              {service.facts.map((fact) => (
                <RevealItem key={fact.title} className="rounded-xl bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-900">{fact.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{fact.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start" aria-label="Visit information">
            <HoursCard />
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-slate-900">Helpful forms</h2>
              <ul className="mt-4 space-y-3">
                {documents.map((d) => (
                  <li key={d.href}>
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-sm font-medium text-slate-800 transition-colors hover:text-brand-700"
                    >
                      <Icon name="download" className="h-4 w-4 text-slate-400 group-hover:text-brand-700" />
                      {d.title}
                      <span className="sr-only">(PDF, opens in new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="muted" labelledBy="other-services">
        <h2 id="other-services" className="text-2xl font-semibold text-slate-900">
          Other services
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                to={`/services/${s.slug}`}
                className="group flex h-full items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-[border-color,box-shadow] hover:border-brand-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon name={s.icon} />
                </span>
                <span className="flex-1">
                  <span className="block font-semibold text-slate-900">{s.name}</span>
                  <span className="block text-sm text-slate-600">{s.tagline}</span>
                </span>
                <Icon
                  name="arrowRight"
                  className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-700"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner />
    </PageTransition>
  );
}
