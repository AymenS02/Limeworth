import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { clinic } from '../../data/clinic';
import { useOpenStatus } from '../../hooks/useOpenStatus';
import { cn } from '../../lib/cn';
import { ButtonAnchor, ButtonLink } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { ease } from '../motion/variants';
import { primaryNav, serviceNav } from './navigation';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const status = useOpenStatus();

  // Close on navigation.
  useEffect(() => onClose(), [pathname, onClose]);

  // Lock scroll, trap focus, close on Escape; restore focus on close.
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLElement>('button, a')?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose();
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'block rounded-lg px-3 py-3 text-base font-medium transition-colors',
      isActive ? 'bg-brand-50 text-brand-800' : 'text-slate-800 hover:bg-slate-50',
    );

  // Portal out of the header: its backdrop-filter would otherwise contain `fixed` children.
  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <motion.div
            className="absolute inset-0 bg-slate-900/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto overscroll-contain bg-white shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0, transition: { duration: 0.3, ease } }}
            exit={{ x: '100%', transition: { duration: 0.2, ease } }}
          >
            <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
              <p className="flex items-center gap-2 text-sm text-slate-600">
                <span
                  aria-hidden="true"
                  className={cn('h-2 w-2 rounded-full', status.isOpen ? 'bg-brand-600' : 'bg-slate-400')}
                />
                {status.label}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
              >
                <Icon name="close" className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 px-4 py-4">
              <ul className="space-y-1">
                {primaryNav.map((item) => (
                  <li key={item.to}>
                    <NavLink to={item.to} end className={linkClass}>
                      {item.label}
                    </NavLink>
                    {item.to === '/services' && (
                      <ul className="mb-2 ml-3 space-y-1 border-l border-slate-200 pl-3">
                        {serviceNav.map((s) => (
                          <li key={s.to}>
                            <NavLink
                              to={s.to}
                              className={({ isActive }) =>
                                cn(
                                  'flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors',
                                  isActive ? 'bg-brand-50 text-brand-800' : 'text-slate-600 hover:bg-slate-50',
                                )
                              }
                            >
                              <Icon name={s.icon} className="h-4 w-4 text-brand-700" />
                              {s.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-3 border-t border-slate-200 p-4">
              <ButtonLink to="/contact" size="lg" className="w-full">
                Book an appointment
              </ButtonLink>
              <ButtonAnchor href={clinic.phone.href} variant="secondary" size="lg" icon="phone" className="w-full">
                Call {clinic.phone.display}
              </ButtonAnchor>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
