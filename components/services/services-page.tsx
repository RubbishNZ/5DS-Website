'use client';

import Link from 'next/link';
import type { Page } from 'contentlayer/generated';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Button } from '@/legacy/components/ui/button';
import { fadeUp, staggerContainer } from '@/legacy/lib/motion';

type ServicesPageProps = {
  page: Page;
};

export function ServicesPage({ page }: ServicesPageProps) {
  const heroLines = page.hero?.lines ?? [page.title];
  const services = [...(page.services ?? [])].sort((a, b) => {
    const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
    const orderB = b.order ?? Number.MAX_SAFE_INTEGER;
    return orderA - orderB;
  });

  return (
    <div className="flex flex-col gap-0">
      <motion.section
        className="border-b-2 border-border px-6 pb-20 pt-32 md:px-12"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="space-y-4">
            {heroLines.map((line) => (
              <motion.h1
                key={line}
                variants={fadeUp}
                className="font-display text-6xl font-black uppercase tracking-tighter text-foreground md:text-8xl lg:text-9xl"
              >
                {line}
              </motion.h1>
            ))}
          </div>

          {page.hero?.body ? (
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-3xl font-mono text-lg uppercase tracking-wide text-muted-foreground md:text-2xl"
            >
              {page.hero.body}
            </motion.p>
          ) : null}
        </div>
      </motion.section>

      {services.length > 0 ? (
        <section className="border-b-2 border-border px-6 py-20 md:px-12">
          <div className="mx-auto max-w-6xl space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                className="grid items-start gap-10 md:grid-cols-12"
              >
                <div className="md:col-span-2">
                  <span className="font-display text-5xl font-black text-muted-foreground/30">
                    {String(service.order ?? index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="md:col-span-10 space-y-8">
                  <div className="space-y-5">
                    <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
                      {service.title}
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="border border-border bg-card p-6">
                        <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                          The Problem
                        </h3>
                        <p className="mt-4 text-base text-muted-foreground md:text-lg">
                          {service.problem}
                        </p>
                      </div>
                      <div className="border border-border bg-card p-6">
                        <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                          Our Approach
                        </h3>
                        <p className="mt-4 text-base text-muted-foreground md:text-lg">
                          {service.approach}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border bg-card p-6">
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                      Tangible Outcomes
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {service.outcomes?.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                          <span className="text-sm text-muted-foreground md:text-base">
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {page.hero?.cta ? (
                    <Button asChild className="h-14 px-8 font-mono uppercase tracking-widest">
                      <Link href={page.hero.cta.href}>
                        {page.hero.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ) : null}

      {page.ctaSection ? (
        <section className="border-t-2 border-border bg-primary px-6 py-28 text-primary-foreground md:px-12">
          <div className="mx-auto max-w-6xl space-y-10">
            <h2 className="font-display text-4xl font-black uppercase tracking-tighter md:text-6xl">
              {page.ctaSection.title}
            </h2>
            <p className="max-w-2xl font-mono text-lg uppercase tracking-wide md:text-2xl">
              {page.ctaSection.body}
            </p>
            <Button
              asChild
              variant="outline"
              className="h-14 w-fit border-2 border-primary-foreground bg-transparent px-8 font-mono uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              <Link href={page.ctaSection.cta.href}>{page.ctaSection.cta.label}</Link>
            </Button>
          </div>
        </section>
      ) : null}
    </div>
  );
}