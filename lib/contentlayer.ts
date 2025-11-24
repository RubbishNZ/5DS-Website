import type { Metadata } from 'next';

import { allPages } from 'contentlayer/generated';

export function getPageBySlug(slug: string) {
  return allPages.find((page) => page.slug === slug);
}

export function getAllMarketingPages() {
  return allPages.filter((page) => !page.slug.startsWith('case-studies/'));
}

export function buildPageMetadata(page: (typeof allPages)[number]): Metadata {
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.url,
      type: 'website',
    },
  };
}
