import { CtaBanner } from '../components/sections/CtaBanner';
import { PageHeader } from '../components/sections/PageHeader';
import { PageTransition } from '../components/motion/PageTransition';
import { Reveal, RevealGroup, RevealItem } from '../components/motion/Reveal';
import { Section, SectionHeading } from '../components/ui/Layout';
import { Icon, type IconName } from '../components/ui/Icon';
import { cancellationPolicy, clinic, documents, examPrep } from '../data/clinic';
import { usePageTitle } from '../hooks/usePageTitle';

const essentials: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'file',
    title: 'Requisition required',
    body: 'All exams require a signed requisition from your doctor. OBSP screening mammograms are the exception — no referral is needed.',
  },
  {
    icon: 'shield',
    title: 'Bring your OHIP card',
    body: 'Most medically necessary exams are covered by OHIP with a valid requisition. Fees for uninsured services are listed in our cash fee schedule.',
  },
  {
    icon: 'calendar',
    title: 'Appointments',
    body: `X-rays are walk-in. For ultrasound, mammogram and BMD, email your phone number and requisition to ${clinic.email.display} or call ${clinic.phone.display}.`,
  },
  {
    icon: 'globe',
    title: 'Languages',
    body: `Our team provides services in ${clinic.languages.slice(0, -1).join(', ')} and ${clinic.languages.at(-1)}.`,
  },
];

export function PatientInfoPage() {
  usePageTitle('Patient Information');

  return (
    <PageTransition>
      <PageHeader
        title="Patient information"
        description="Everything you need before your visit — requisitions, preparation, forms and our appointment policy."
        crumbs={[{ label: 'Patient Info' }]}
      />

      <Section labelledBy="essentials-title">
        <SectionHeading id="essentials-title" title="Before your visit" />
        <RevealGroup className="grid gap-5 sm:grid-cols-2">
          {essentials.map((e) => (
            <RevealItem key={e.title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon name={e.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{e.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{e.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="muted" labelledBy="prep-title">
        <SectionHeading
          id="prep-title"
          title="How to prepare for your exam"
          description="Some exams need a little preparation for the clearest images. If you’re unsure, give us a call."
        />
        <RevealGroup as="ul" className="grid gap-3 lg:grid-cols-2">
          {examPrep.map((p) => (
            <RevealItem as="li" key={p.exam}>
              <details className="group rounded-xl border border-slate-200 bg-white open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl p-5 font-semibold text-slate-900 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 [&::-webkit-details-marker]:hidden">
                  {p.exam}
                  <Icon
                    name="chevronDown"
                    className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <ul className="space-y-2 px-5 pb-5">
                  {p.steps.map((step) => (
                    <li key={step} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                      {step}
                    </li>
                  ))}
                </ul>
              </details>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section labelledBy="forms-title">
        <SectionHeading
          id="forms-title"
          title="Forms & documents"
          description="Download, print or share these with your doctor. All files are PDFs."
        />
        <RevealGroup as="ul" className="grid gap-5 md:grid-cols-3">
          {documents.map((d) => (
            <RevealItem as="li" key={d.href}>
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition-[border-color,box-shadow] hover:border-brand-200 hover:shadow-lg hover:shadow-slate-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent-700">
                  <Icon name="file" className="h-6 w-6" />
                </span>
                <span className="mt-5 text-lg font-semibold text-slate-900">{d.title}</span>
                <span className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">{d.description}</span>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  <Icon name="download" className="h-4 w-4" />
                  Open PDF
                  <span className="sr-only">(opens in new tab)</span>
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="muted" labelledBy="policy-title">
        <Reveal className="mx-auto max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <div className="flex gap-4">
            <Icon name="info" className="mt-1 h-6 w-6 shrink-0 text-amber-700" />
            <div>
              <h2 id="policy-title" className="text-xl font-semibold text-slate-900">
                Missed appointment &amp; late arrival policy
              </h2>
              <p className="mt-3 leading-relaxed text-slate-700">{cancellationPolicy.notice}</p>
              <p className="mt-3 leading-relaxed text-slate-700">{cancellationPolicy.summary}</p>
              <p className="mt-3 text-sm text-slate-600">
                To reschedule, call{' '}
                <a href={clinic.phone.href} className="font-medium text-slate-900 underline underline-offset-2">
                  {clinic.phone.display}
                </a>{' '}
                or email{' '}
                <a href={clinic.email.href} className="font-medium text-slate-900 underline underline-offset-2">
                  {clinic.email.display}
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBanner />
    </PageTransition>
  );
}
