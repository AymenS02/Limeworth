import { services } from '../../data/clinic';

export const primaryNav = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Patient Info', to: '/patient-info' },
  { label: 'Contact', to: '/contact' },
] as const;

export const serviceNav = services.map((s) => ({
  label: s.name,
  to: `/services/${s.slug}`,
  icon: s.icon,
  tagline: s.tagline,
}));
