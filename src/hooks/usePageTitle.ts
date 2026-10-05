import { useEffect } from 'react';

const SUFFIX = 'Limeworth X-Ray & Ultrasound';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${SUFFIX}` : `${SUFFIX} | Hamilton, ON`;
  }, [title]);
}
