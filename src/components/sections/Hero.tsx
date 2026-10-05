import { motion } from 'framer-motion';
import { clinic } from '../../data/clinic';
import { useOpenStatus } from '../../hooks/useOpenStatus';
import { cn } from '../../lib/cn';
import { ButtonAnchor, ButtonLink } from '../ui/Button';
import { Container } from '../ui/Layout';
import { Icon } from '../ui/Icon';
import { ease, fadeUp, stagger } from '../motion/variants';

const highlights = ['Walk-in X-ray', 'Same-day ultrasound', 'OBSP mammograms 40+', 'Saturday appointments'];

export function Hero() {
  const status = useOpenStatus();

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-0 h-full bg-gradient-to-b from-brand-50/70 via-white to-white"
      />
      <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-24">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-sm font-medium text-brand-800"
          >
            <Icon name="award" className="h-4 w-4" />
            Serving Hamilton for over 20 years
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={fadeUp}
            className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
          >
            Hamilton’s top-rated X-ray, ultrasound, mammography &amp; BMD clinic
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-600">
            Caring and professional staff who always prioritize patient care and quality imaging for better
            diagnosis and treatment — conveniently located at Upper Wentworth and Mohawk.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/contact" size="lg" iconRight="arrowRight">
              Book an appointment
            </ButtonLink>
            <ButtonAnchor href={clinic.phone.href} variant="secondary" size="lg" icon="phone">
              Call {clinic.phone.display}
            </ButtonAnchor>
          </motion.div>
          <motion.ul variants={fadeUp} className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-700">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: 0.15 } }}
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/5">
            <img
              src="/building.jpg"
              alt={`${clinic.building}, home of Limeworth X-Ray & Ultrasound at 849 Upper Wentworth St`}
              width={1600}
              height={1067}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5 sm:absolute sm:-bottom-6 sm:-left-6 sm:mt-0 sm:max-w-xs">
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <span
                aria-hidden="true"
                className={cn('h-2.5 w-2.5 rounded-full', status.isOpen ? 'bg-brand-600' : 'bg-slate-400')}
              />
              {status.label}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              {clinic.address.suite}, {clinic.address.street}
              <br />
              {clinic.address.city}, {clinic.address.province} {clinic.address.postal}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
