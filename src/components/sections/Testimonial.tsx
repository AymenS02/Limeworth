import { clinic, testimonial } from '../../data/clinic';
import { ButtonAnchor } from '../ui/Button';
import { Reveal } from '../motion/Reveal';

export function Testimonial() {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="mx-auto h-10 w-10 text-brand-200"
        fill="currentColor"
      >
        <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm18 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
      </svg>
      <figure className="mt-6">
        <blockquote className="text-pretty text-lg leading-relaxed text-slate-700 sm:text-xl sm:leading-relaxed">
          <p>“{testimonial.quote}”</p>
        </blockquote>
        <figcaption className="mt-8">
          <p className="font-semibold text-slate-900">{testimonial.author}</p>
          <p className="text-sm text-slate-500">{testimonial.source}</p>
        </figcaption>
      </figure>
      <ButtonAnchor
        href={clinic.reviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        iconRight="external"
        className="mt-8"
      >
        Read our Google reviews
      </ButtonAnchor>
    </Reveal>
  );
}
