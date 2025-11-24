'use client';

import Link from 'next/link';
import type { Page } from 'contentlayer/generated';
import { motion } from 'framer-motion';

import { Button } from '@/legacy/components/ui/button';
import { fadeUp, staggerContainer } from '@/legacy/lib/motion';

type AboutPageProps = {
  page: Page;
};

export function AboutPage({ page }: AboutPageProps) {
  const heroLines = page.hero?.lines ?? [page.title];
  const infoCards = page.infoCards ?? [];
  const story = page.story ?? [];
  const principles = page.principles ?? [];
  const ctaSection = page.ctaSection;

  return (
    <div className="flex flex-col gap-0">
      <motion.section
        className="border-b-2 border-border px-6 pb-24 pt-32 md:px-12 md:pb-32"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="space-y-4">
            {heroLines.map((line) => (
              <motion.h1
                key={line}
                variants={fadeUp}
                className="font-display text-6xl font-black uppercase tracking-tighter text-foreground md:text-[10rem]"
              >
                {line}
              </motion.h1>
            ))}
          </div>

          {page.hero?.body ? (
            <motion.p
              variants={fadeUp}
              className="mt-12 max-w-3xl font-mono text-lg uppercase tracking-wide text-muted-foreground md:text-2xl"
            >
              {page.hero.body}
            </motion.p>
          ) : null}
        </div>
      </motion.section>

      {infoCards.length > 0 ? (
        <section className="border-b-2 border-border px-6 py-20 md:px-12 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 border-2 border-border md:grid-cols-4">
              {infoCards.map((card, index) => (
                <div
                  key={`${card.label}-${card.value}`}
                  className="border-b-2 border-r-2 border-border bg-background p-10 last:border-r-0 md:border-b-0 md:[&:nth-child(4n)]:border-r-0"
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    [{String(index + 1).padStart(2, '0')}] {card.label}
                  </div>
                  <div className="mt-6 font-display text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl">
                    {card.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {story.length > 0 ? (
        <section className="border-b-2 border-border px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-5xl space-y-16">
            <div>
              <h2 className="font-display text-5xl font-black uppercase tracking-tighter text-foreground md:text-6xl">
                Mission
              </h2>
              {page.description ? (
                <p className="mt-10 font-light text-2xl leading-tight text-foreground md:text-3xl">
                  {page.description}
                </p>
              ) : null}
            </div>

            <div className="space-y-7 border-l-4 border-border pl-8 font-mono text-base leading-relaxed text-muted-foreground md:text-lg">
              {story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {principles.length > 0 ? (
        <section className="border-b-2 border-border px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20">
              <h2 className="font-display text-5xl font-black uppercase tracking-tighter text-foreground md:text-6xl">
                Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 border-2 border-border md:grid-cols-2">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="group border-b-2 border-r-2 border-border bg-background p-12 transition-all duration-200 hover:bg-foreground hover:text-background md:[&:nth-child(2n)]:border-r-0"
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-background">
                    [{String(index + 1).padStart(2, '0')}]
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-black uppercase tracking-tight text-foreground group-hover:text-background md:text-4xl">
                    {principle.title}
                  </h3>
                  <p className="mt-4 font-mono text-sm text-muted-foreground group-hover:text-background/80 md:text-base">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {ctaSection ? (
        <section className="border-t-2 border-border bg-primary px-6 py-32 text-primary-foreground md:px-12 md:py-48">
          <div className="mx-auto max-w-6xl space-y-10">
            <h2 className="font-display text-6xl font-black uppercase tracking-tighter md:text-8xl">
              {ctaSection.title}
            </h2>
            <p className="max-w-2xl font-mono text-lg uppercase tracking-wide md:text-2xl">
              {ctaSection.body}
            </p>
            <Button
              asChild
              variant="outline"
              className="h-16 w-fit border-2 border-primary-foreground bg-transparent px-12 font-mono text-lg uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              <Link href={ctaSection.cta.href}>{ctaSection.cta.label}</Link>
            </Button>
          </div>
        </section>
      ) : null}
    </div>
  );
}