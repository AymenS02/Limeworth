import { Icon, type IconName } from '../ui/Icon';
import { RevealGroup, RevealItem } from '../motion/Reveal';

const reasons: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'award',
    title: '20+ years in Hamilton',
    body: 'A trusted local diagnostic imaging clinic serving Hamilton and surrounding communities for over two decades.',
  },
  {
    icon: 'shield',
    title: 'Certified & radiologist-reviewed',
    body: 'Every exam is performed by a certified technologist and reviewed by a qualified radiologist.',
  },
  {
    icon: 'globe',
    title: 'English, Arabic & Urdu',
    body: 'Our friendly, experienced team can help you in three languages for a relaxed, efficient visit.',
  },
  {
    icon: 'calendar',
    title: 'Open six days a week',
    body: 'Weekday hours until 6 PM, plus Saturday appointments for mammograms and bone density.',
  },
];

export function WhyLimeworth() {
  return (
    <RevealGroup className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {reasons.map((r) => (
        <RevealItem key={r.title}>
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent-700">
            <Icon name={r.icon} className="h-6 w-6" />
          </span>
          <h3 className="mt-4 text-base font-semibold text-slate-900">{r.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.body}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
