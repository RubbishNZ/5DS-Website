import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";

import { HomePage as HomePageContent } from "@/components/home/home-page";

const homePageDocument = allPages.find((page) => page.slug === "home");

export const metadata: Metadata = homePageDocument
  ? {
      title: homePageDocument.title,
      description: homePageDocument.description,
      openGraph: {
        title: homePageDocument.title,
        description: homePageDocument.description,
        url: "https://aviora.ai/",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: homePageDocument.title,
        description: homePageDocument.description,
      },
    }
  : {};

export default function HomePage() {
  if (!homePageDocument) {
    notFound();
  }

  return <HomePageContent page={homePageDocument} />;
}