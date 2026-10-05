import { clinic, documents } from '../../data/clinic';
import { Icon, type IconName } from '../ui/Icon';
import { RevealGroup, RevealItem } from '../motion/Reveal';

const steps: { icon: IconName; title: string; body: React.ReactNode }[] = [
  {
    icon: 'file',
    title: 'Get a requisition',
    body: (
      <>
        All exams need a signed requisition from your doctor.{' '}
        <a
          href={documents[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand-700 underline decoration-brand-200 underline-offset-2 hover:decoration-brand-700"
        >
          Download our requisition form
        </a>
        . OBSP screening mammograms don’t need a referral.
      </>
    ),
  },
  {
    icon: 'calendar',
    title: 'Walk in or book',
    body: (
      <>
        X-rays are walk-in. For ultrasound, mammogram or BMD, email your phone number and requisition to{' '}
        <a
          href={clinic.email.href}
          className="font-medium text-brand-700 underline decoration-brand-200 underline-offset-2 hover:decoration-brand-700"
        >
          {clinic.email.display}
        </a>{' '}
        or call {clinic.phone.display}.
      </>
    ),
  },
  {
    icon: 'shield',
    title: 'Bring your OHIP card',
    body: 'Bring your OHIP card and requisition to your visit. Your results are sent directly to your doctor.',
  },
];

export function HowToBook() {
  return (
    <RevealGroup as="ol" className="grid gap-6 md:grid-cols-3">
      {steps.map((step, i) => (
        <RevealItem as="li" key={step.title} className="relative rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
              {i + 1}
            </span>
            <Icon name={step.icon} className="h-5 w-5 text-slate-400" />
          </div>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
