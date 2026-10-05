import { clinic, hours } from '../../data/clinic';
import { useOpenStatus } from '../../hooks/useOpenStatus';
import { formatRange } from '../../lib/hours';
import { cn } from '../../lib/cn';
import { ButtonAnchor } from '../ui/Button';
import { Icon, type IconName } from '../ui/Icon';

export function HoursCard({ className }: { className?: string }) {
  const status = useOpenStatus();

  return (
    <div className={cn('rounded-xl border border-slate-200 bg-white p-6', className)}>
      <div className="flex items-center justify-between gap-4">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
          <Icon name="clock" className="h-5 w-5 text-brand-700" />
          Hours
        </h3>
        <span
          className={cn(
            'rounded-full px-2.5 py-0.5 text-xs font-semibold',
            status.isOpen ? 'bg-brand-100 text-brand-800' : 'bg-slate-100 text-slate-600',
          )}
        >
          {status.isOpen ? 'Open now' : 'Closed'}
        </span>
      </div>
      <dl className="mt-5 divide-y divide-slate-100">
        {hours.map((h) => {
          const isToday = h.days.includes(status.today);
          return (
            <div
              key={h.label}
              className={cn('flex justify-between gap-4 py-3 text-sm', isToday && 'font-semibold text-slate-900')}
            >
              <dt className={isToday ? '' : 'text-slate-600'}>
                {h.label}
                {isToday && <span className="sr-only"> (today)</span>}
              </dt>
              <dd className="tabular-nums">{formatRange(h)}</dd>
            </div>
          );
        })}
      </dl>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        X-rays are walk-in. Ultrasound, mammogram and BMD are by appointment.
      </p>
    </div>
  );
}

function DetailRow({ icon, label, children }: { icon: IconName; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
        <Icon name={icon} />
      </span>
      <div>
        <dt className="text-sm font-medium text-slate-500">{label}</dt>
        <dd className="mt-0.5 text-slate-900">{children}</dd>
      </div>
    </div>
  );
}

const inlineLink = 'font-medium text-slate-900 transition-colors hover:text-brand-700';

export function ContactDetails() {
  return (
    <dl className="space-y-6">
      <DetailRow icon="mapPin" label="Address">
        <address className="not-italic">
          {clinic.address.suite}, {clinic.address.street}
          <br />
          {clinic.address.city}, {clinic.address.province} {clinic.address.postal}
        </address>
        <p className="mt-1 text-sm text-slate-600">{clinic.landmark}</p>
      </DetailRow>
      <DetailRow icon="phone" label="Phone">
        <a href={clinic.phone.href} className={inlineLink}>
          {clinic.phone.display}
        </a>
      </DetailRow>
      <DetailRow icon="mail" label="Email">
        <a href={clinic.email.href} className={inlineLink}>
          {clinic.email.display}
        </a>
      </DetailRow>
      <DetailRow icon="fax" label="Fax">
        {clinic.fax.display}
      </DetailRow>
    </dl>
  );
}

export function MapEmbed({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-100', className)}>
      <iframe
        title={`Map showing ${clinic.name} at ${clinic.address.street}, ${clinic.address.city}`}
        src={clinic.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="min-h-[18rem] w-full flex-1 border-0"
      />
      <div className="flex items-center justify-between gap-4 border-t border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-600">{clinic.building}</p>
        <ButtonAnchor
          href={clinic.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          iconRight="external"
        >
          Directions
        </ButtonAnchor>
      </div>
    </div>
  );
}
