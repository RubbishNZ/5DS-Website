import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ServicesPage } from '@/components/services/services-page';
import { buildPageMetadata, getPageBySlug } from '@/lib/contentlayer';

const servicesPage = getPageBySlug('services');

export const metadata: Metadata = servicesPage
  ? buildPageMetadata(servicesPage)
  : {};

export default function MarketingServicesRoute() {
  if (!servicesPage) {
    notFound();
  }

  return <ServicesPage page={servicesPage} />;
}