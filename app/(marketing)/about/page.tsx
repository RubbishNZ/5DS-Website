import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { AboutPage } from '@/components/about/about-page';
import { buildPageMetadata, getPageBySlug } from '@/lib/contentlayer';

const aboutPage = getPageBySlug('about');

export const metadata: Metadata = aboutPage
  ? buildPageMetadata(aboutPage)
  : {};

export default function MarketingAboutRoute() {
  if (!aboutPage) {
    notFound();
  }

  return <AboutPage page={aboutPage} />;
}