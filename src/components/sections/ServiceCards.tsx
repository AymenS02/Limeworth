import { Link } from 'react-router-dom';
import { services } from '../../data/clinic';
import { Badge } from '../ui/Layout';
import { Icon } from '../ui/Icon';
import { RevealGroup, RevealItem } from '../motion/Reveal';

export function ServiceCards() {
  return (
    <RevealGroup as="ul" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <RevealItem as="li" key={s.slug}>
          <article className="group relative flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition-[border-color,box-shadow] duration-200 hover:border-brand-200 hover:shadow-lg hover:shadow-slate-900/5 focus-within:ring-2 focus-within:ring-brand-700">
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors duration-200 group-hover:bg-brand-700 group-hover:text-white">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <Badge tone={s.booking === 'walk-in' ? 'brand' : 'accent'}>{s.highlight}</Badge>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              <Link to={`/services/${s.slug}`} className="focus:outline-none">
                <span aria-hidden="true" className="absolute inset-0 rounded-xl" />
                {s.name}
              </Link>
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.summary}</p>
            <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
              Learn more
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </p>
          </article>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
