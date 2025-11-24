'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Page } from 'contentlayer/generated';

import { Button } from '@/legacy/components/ui/button';
import { fadeUp, lineStagger, staggerContainer } from '@/legacy/lib/motion';

type HomePageProps = {
  page: Page;
};

export function HomePage({ page }: HomePageProps) {
  const heroLines = page.hero?.lines ?? [];
  const pillars = page.pillars ?? [];
  const proofPoints = page.proofPoints ?? [];
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
          <div className="space-y-0 md:space-y-2">
            {heroLines.map((line, index) => (
              <motion.h1
                key={line}
                variants={lineStagger}
                className="font-display text-7xl font-black uppercase tracking-tighter text-foreground md:text-9xl lg:text-[12rem] lg:leading-[0.85]"
              >
                {line}
              </motion.h1>
            ))}
          </div>

          {page.hero?.body ? (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-16 max-w-2xl font-mono text-lg uppercase tracking-wide text-muted-foreground md:text-xl"
            >
              {page.hero.body}
            </motion.p>
          ) : null}

          {page.hero?.cta ? (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
            >
              <Link href={page.hero.cta.href}>
                <Button
                  size="lg"
                  className="mt-16 h-16 border-2 border-foreground px-12 font-mono text-lg uppercase tracking-wider"
                >
                  {page.hero.cta.label}
                </Button>
              </Link>
            </motion.div>
          ) : null}
        </div>
      </motion.section>

      {pillars.length > 0 ? (
        <motion.section
          className="border-y-2 border-border px-6 py-24 md:px-12 md:py-32"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="mx-auto max-w-7xl">
            <motion.div variants={fadeUp} className="mb-16 border-b-2 border-border pb-8 md:mb-24">
              <h2 className="font-display text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl lg:text-8xl">
                Work
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 border-2 border-border md:grid-cols-2">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  variants={fadeUp}
                  className="group border-b-2 border-r-2 border-border bg-background p-10 transition-all duration-200 hover:bg-foreground hover:text-background md:p-14 md:[&:nth-child(2n)]:border-r-0"
                >
                  <div className="mb-8 font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-background">
                    [{String(index + 1).padStart(2, '0')}]
                  </div>
                  <h3 className="font-display text-2xl font-black uppercase tracking-tight text-foreground group-hover:text-background md:text-4xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-6 font-mono text-base leading-relaxed text-muted-foreground group-hover:text-background/80">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      ) : null}

      {proofPoints.length > 0 ? (
        <motion.section
          className="border-y-2 border-border px-6 py-24 md:px-12 md:py-32"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="mx-auto max-w-7xl">
            <motion.div variants={fadeUp} className="mb-16 border-b-2 border-border pb-8 md:mb-24">
              <h2 className="font-display text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl lg:text-8xl">
                Results
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 border-2 border-border md:grid-cols-3">
              {proofPoints.map((proof, index) => (
                <motion.div
                  key={proof.title}
                  variants={fadeUp}
                  className="group border-r-2 border-border bg-background p-10 transition-all duration-200 hover:bg-foreground hover:text-background md:p-12 md:[&:nth-child(3n)]:border-r-0"
                >
                  <div className="mb-8 font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-background">
                    [{String(index + 1).padStart(2, '0')}]
                  </div>
                  <h3 className="font-display text-3xl font-black leading-tight text-foreground group-hover:text-background md:text-4xl">
                    {proof.title}
                  </h3>
                  <p className="mt-6 font-mono text-sm text-muted-foreground group-hover:text-background/80 md:text-base">
                    {proof.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-16 text-center">
              <Link href="/case-studies">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 border-2 border-foreground px-12 font-mono text-lg uppercase tracking-wider"
                >
                  Case Studies
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      ) : null}

      {ctaSection ? (
        <motion.section
          className="border-t-2 border-border bg-primary px-6 py-32 text-primary-foreground md:px-12 md:py-48"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="mx-auto max-w-6xl">
            <motion.h2
              variants={fadeUp}
              className="font-display text-6xl font-black uppercase tracking-tighter md:mb-16 md:text-8xl lg:text-9xl"
            >
              {ctaSection.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mb-16 max-w-2xl font-mono text-lg uppercase tracking-wide md:text-2xl"
            >
              {ctaSection.body}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href={ctaSection.cta.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 border-2 border-primary-foreground bg-transparent px-12 font-mono text-lg uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  {ctaSection.cta.label}
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      ) : null}
    </div>
  );
}