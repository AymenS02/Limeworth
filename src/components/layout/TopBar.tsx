import { clinic } from '../../data/clinic';
import { useOpenStatus } from '../../hooks/useOpenStatus';
import { cn } from '../../lib/cn';
import { Container } from '../ui/Layout';
import { Icon } from '../ui/Icon';

export function TopBar() {
  const status = useOpenStatus();

  return (
    <div className="hidden border-b border-slate-200 bg-slate-50 text-sm text-slate-600 md:block">
      <Container className="flex h-10 items-center justify-between gap-6">
        <p className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn('h-2 w-2 rounded-full', status.isOpen ? 'bg-brand-600' : 'bg-slate-400')}
          />
          {status.label}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={clinic.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-brand-700"
          >
            <Icon name="mapPin" className="h-4 w-4" />
            {clinic.address.street}, {clinic.address.city}
          </a>
          <a href={clinic.email.href} className="flex items-center gap-1.5 transition-colors hover:text-brand-700">
            <Icon name="mail" className="h-4 w-4" />
            {clinic.email.display}
          </a>
        </div>
      </Container>
    </div>
  );
}
