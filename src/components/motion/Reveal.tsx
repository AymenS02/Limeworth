import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, stagger } from './variants';

type Tag = 'div' | 'ul' | 'ol' | 'li' | 'section' | 'article';

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: Tag;
}

/** Fades content up once when it scrolls into view. */
export function Reveal({ children, className, as = 'div' }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </Component>
  );
}

/** Staggers its RevealItem children into view. */
export function RevealGroup({ children, className, as = 'div' }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </Component>
  );
}

export function RevealItem({ children, className, as = 'div' }: RevealProps) {
  const Component = motion[as];
  return (
    <Component className={className} variants={fadeUp}>
      {children}
    </Component>
  );
}
