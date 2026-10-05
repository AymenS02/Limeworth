import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Reveal } from '../motion/Reveal';

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8', className)}>{children}</div>;
}

type Tone = 'white' | 'muted' | 'brand';

const tones: Record<Tone, string> = {
  white: 'bg-white',
  muted: 'bg-slate-50',
  brand: 'bg-brand-800 text-white',
};

export function Section({
  children,
  tone = 'white',
  className,
  id,
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn('py-16 sm:py-20 lg:py-24', tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
}) {
  return (
    <Reveal className={cn('mb-10 max-w-2xl sm:mb-12', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-700">{eyebrow}</p>}
      <h2 id={id} className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600">{description}</p>}
    </Reveal>
  );
}

export function Badge({ children, tone = 'brand' }: { children: ReactNode; tone?: 'brand' | 'accent' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        tone === 'brand' ? 'bg-brand-100 text-brand-800' : 'bg-accent-100 text-accent-800',
      )}
    >
      {children}
    </span>
  );
}
