import { serviceAreas } from '../../data/clinic';
import { Reveal } from '../motion/Reveal';

export function ServiceAreas() {
  return (
    <Reveal className="text-center">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Proudly serving</h2>
      <ul className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-2">
        {serviceAreas.map((area) => (
          <li key={area} className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm text-slate-700">
            {area}
          </li>
        ))}
        <li className="px-2 py-1.5 text-sm text-slate-500">and surrounding areas</li>
      </ul>
    </Reveal>
  );
}
