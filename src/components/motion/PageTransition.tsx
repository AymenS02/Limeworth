import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { page } from './variants';

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={page} initial="initial" animate="enter" exit="exit">
      {children}
    </motion.div>
  );
}
