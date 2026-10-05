import { Link } from 'react-router-dom';
import { clinic, documents, hours } from '../../data/clinic';
import { formatRange } from '../../lib/hours';
import { Container } from '../ui/Layout';
import { Icon } from '../ui/Icon';
import { primaryNav, serviceNav } from './navigation';

const linkClass = 'text-slate-300 transition-colors hover:text-white';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-sm text-slate-300">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <p className="text-lg font-semibold text-white">{clinic.name}</p>
          <p className="mt-3 max-w-xs leading-relaxed">
            Caring, professional diagnostic imaging in Hamilton for over 20 years. Walk-in X-ray, same-day
            ultrasound, OBSP mammography and bone density testing.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {serviceNav.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className={linkClass}>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-8 font-semibold text-white">Clinic</h2>
          <ul className="mt-4 space-y-2.5">
            {primaryNav
              .filter((item) => item.to !== '/services')
              .map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-semibold text-white">Contact</h2>
          <address className="mt-4 space-y-3 not-italic">
            <p className="flex gap-2.5">
              <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <span>
                {clinic.address.suite}, {clinic.address.street}
                <br />
                {clinic.address.city}, {clinic.address.province} {clinic.address.postal}
              </span>
            </p>
            <p className="flex gap-2.5">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <a href={clinic.phone.href} className={linkClass}>
                {clinic.phone.display}
              </a>
            </p>
            <p className="flex gap-2.5">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <a href={clinic.email.href} className={linkClass}>
                {clinic.email.display}
              </a>
            </p>
            <p className="flex gap-2.5">
              <Icon name="fax" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <span>Fax {clinic.fax.display}</span>
            </p>
          </address>
        </div>

        <div>
          <h2 className="font-semibold text-white">Hours</h2>
          <dl className="mt-4 space-y-2.5">
            {hours.map((h) => (
              <div key={h.label} className="flex justify-between gap-4">
                <dt>{h.label}</dt>
                <dd className="tabular-nums text-white">{formatRange(h)}</dd>
              </div>
            ))}
          </dl>
          <h2 className="mt-8 font-semibold text-white">Forms</h2>
          <ul className="mt-4 space-y-2.5">
            {documents.map((d) => (
              <li key={d.href}>
                <a href={d.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {d.title} <span className="text-slate-500">(PDF)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-slate-800">
        <Container className="flex flex-col gap-2 py-6 text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.legalName} All rights reserved.
          </p>
          <p>Services in English, Arabic and Urdu.</p>
        </Container>
      </div>
    </footer>
  );
}
