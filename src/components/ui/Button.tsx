import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';
import { Icon, type IconName } from './Icon';

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-[background-color,border-color,color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-700 text-white shadow-sm hover:bg-brand-800 hover:shadow-md focus-visible:ring-brand-700',
  secondary:
    'border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-brand-700',
  ghost: 'text-brand-700 hover:bg-brand-50 hover:text-brand-800 focus-visible:ring-brand-700',
  inverse:
    'bg-white text-brand-800 shadow-sm hover:bg-brand-50 focus-visible:ring-white focus-visible:ring-offset-brand-800',
};

const sizes: Record<Size, string> = {
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconRight?: IconName;
  children: ReactNode;
  className?: string;
}

const content = ({ icon, iconRight, children }: CommonProps) => (
  <>
    {icon && <Icon name={icon} className="h-4 w-4 shrink-0" />}
    {children}
    {iconRight && <Icon name={iconRight} className="h-4 w-4 shrink-0" />}
  </>
);

/** Internal route link styled as a button. */
export function ButtonLink({
  to,
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: CommonProps & { to: string }) {
  return (
    <Link to={to} className={cn(base, variants[variant], sizes[size], className)}>
      {content(rest)}
    </Link>
  );
}

/** External / tel: / mailto: / file link styled as a button. */
export function ButtonAnchor({
  variant = 'primary',
  size = 'md',
  className,
  icon,
  iconRight,
  children,
  ...anchor
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...anchor}>
      {content({ icon, iconRight, children })}
    </a>
  );
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  icon,
  iconRight,
  children,
  type = 'button',
  ...button
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={cn(base, variants[variant], sizes[size], className)} {...button}>
      {content({ icon, iconRight, children })}
    </button>
  );
}
