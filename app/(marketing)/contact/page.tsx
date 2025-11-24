import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ContactPage } from '@/components/contact/contact-page';
import { buildPageMetadata, getPageBySlug } from '@/lib/contentlayer';

const contactPage = getPageBySlug('contact');

export const metadata: Metadata = contactPage
  ? buildPageMetadata(contactPage)
  : {};

export default function MarketingContactRoute() {
  if (!contactPage) {
    notFound();
  }

  return <ContactPage page={contactPage} />;
}