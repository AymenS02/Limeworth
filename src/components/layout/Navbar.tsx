import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { clinic } from '../../data/clinic';
import { cn } from '../../lib/cn';
import { ButtonAnchor, ButtonLink } from '../ui/Button';
import { Container } from '../ui/Layout';
import { Icon } from '../ui/Icon';
import { ease } from '../motion/variants';
import { MobileMenu } from './MobileMenu';
import { primaryNav, serviceNav } from './navigation';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700',
    isActive ? 'text-brand-700' : 'text-slate-700 hover:text-brand-700',
  );

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-[border-color,box-shadow] duration-200 supports-[backdrop-filter]:bg-white/85',
        scrolled ? 'border-slate-200 shadow-sm' : 'border-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link
          to="/"
          className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
        >
          <img
            src="/limeworth-logo.png"
            alt="Limeworth X-Ray & Ultrasound — home"
            width={1030}
            height={300}
            className="h-9 w-auto lg:h-11"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) =>
            item.to === '/services' ? (
              <ServicesMenu key={item.to} />
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonAnchor href={clinic.phone.href} variant="ghost" icon="phone">
            {clinic.phone.display}
          </ButtonAnchor>
          <ButtonLink to="/contact">Book an appointment</ButtonLink>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={clinic.phone.href}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-brand-700 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
          >
            <Icon name="phone" />
            <span className="sr-only">Call {clinic.phone.display}</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
          >
            <Icon name="menu" className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </Container>

      <MobileMenu open={mobileOpen} onClose={closeMobile} />
    </header>
  );
}

function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const { pathname } = useLocation();
  const isActive = pathname.startsWith('/services');

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        ref.current?.querySelector('button')?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        className={cn(linkClass({ isActive }), 'inline-flex items-center gap-1')}
      >
        Services
        <Icon
          name="chevronDown"
          className={cn('h-4 w-4 transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.18, ease } }}
            exit={{ opacity: 0, y: -4, transition: { duration: 0.12 } }}
            className="absolute left-1/2 top-full mt-2 w-[22rem] -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
          >
            <ul>
              {serviceNav.map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-none"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                      <Icon name={s.icon} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-slate-900">{s.label}</span>
                      <span className="block text-sm text-slate-600">{s.tagline}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-1 border-t border-slate-100 pt-1">
              <Link
                to="/services"
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50 focus-visible:bg-brand-50 focus-visible:outline-none"
              >
                View all services
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
