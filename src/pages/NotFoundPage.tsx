import { PageTransition } from '../components/motion/PageTransition';
import { ButtonAnchor, ButtonLink } from '../components/ui/Button';
import { Container } from '../components/ui/Layout';
import { clinic } from '../data/clinic';
import { usePageTitle } from '../hooks/usePageTitle';

export function NotFoundPage() {
  usePageTitle('Page not found');

  return (
    <PageTransition>
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-md text-lg text-slate-600">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/">Back to home</ButtonLink>
          <ButtonAnchor href={clinic.phone.href} variant="secondary" icon="phone">
            Call {clinic.phone.display}
          </ButtonAnchor>
        </div>
      </Container>
    </PageTransition>
  );
}
