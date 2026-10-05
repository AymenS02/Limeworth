import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Layout';
import { Icon } from '../ui/Icon';
import { fadeUp, stagger } from '../motion/variants';

interface Crumb {
  label: string;
  to?: string;
}

export function PageHeader({
  title,
  description,
  crumbs = [],
  children,
}: {
  title: string;
  description?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white">
      <Container className="py-12 sm:py-16">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
          {crumbs.length > 0 && (
            <motion.nav variants={fadeUp} aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
                <li>
                  <Link to="/" className="transition-colors hover:text-brand-700">
                    Home
                  </Link>
                </li>
                {crumbs.map((c) => (
                  <li key={c.label} className="flex items-center gap-1.5">
                    <Icon name="chevronDown" className="h-3.5 w-3.5 -rotate-90 text-slate-400" />
                    {c.to ? (
                      <Link to={c.to} className="transition-colors hover:text-brand-700">
                        {c.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-slate-700">
                        {c.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </motion.nav>
          )}
          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p variants={fadeUp} className="mt-5 text-pretty text-lg leading-relaxed text-slate-600">
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div variants={fadeUp} className="mt-8">
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
