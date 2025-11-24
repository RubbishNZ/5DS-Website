'use client';

import type { ComponentType } from 'react';

import Link from 'next/link';
import type { Page } from 'contentlayer/generated';
import { motion } from 'framer-motion';
import { Calendar, Clock, Mail, MapPin, PhoneCall } from 'lucide-react';

import { Button } from '@/legacy/components/ui/button';
import { fadeUp, staggerContainer } from '@/legacy/lib/motion';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Calendar,
  Clock,
  Mail,
  MapPin,
  PhoneCall,
};

type ContactPageProps = {
  page: Page;
};

export function ContactPage({ page }: ContactPageProps) {
  const heroLines = page.hero?.lines ?? [page.title];
  const contactMethods = page.contactMethods ?? [];
  const faqs = page.faqs ?? [];
  const ctaSection = page.ctaSection;

  return (
    <div className="flex flex-col gap-0">
      <motion.section
        className="border-b-2 border-border px-6 pb-20 pt-32 md:px-12"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="mx-auto w-full max-w-5xl">
          <div className="space-y-4">
            {heroLines.map((line) => (
              <motion.h1
                key={line}
                variants={fadeUp}
                className="font-display text-6xl font-black uppercase tracking-tighter text-foreground md:text-8xl"
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

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-lg border border-border bg-card p-10 shadow-sm"
            >
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Book a Discovery Meeting
              </h2>
              <p className="mt-4 font-mono text-sm uppercase tracking-wide text-muted-foreground md:text-base">
                30 minutes to understand your goals and outline the fastest path to value.
              </p>
              {page.calendlyUrl ? (
                <Button asChild size="lg" className="mt-8 w-full">
                  <a href={page.calendlyUrl} target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" /> Schedule on Calendly
                  </a>
                </Button>
              ) : null}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground">
                Direct Contact
              </h3>

              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const Icon = iconMap[method.icon] ?? Mail;
                  const content = method.href ? (
                    <a
                      href={method.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{method.value}</span>
                  );

                  return (
                    <div key={`${method.title}-${method.value}`} className="flex gap-4">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{method.title}</p>
                        {content}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-lg border border-border bg-card p-10 shadow-sm"
          >
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground">
              Quick Questions
            </h3>
            <div className="mt-6 space-y-5">
              {faqs.map((faq) => (
                <div key={faq.question} className="space-y-2">
                  <p className="font-semibold text-foreground">{faq.question}</p>
                  <p className="text-sm text-muted-foreground md:text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {ctaSection ? (
        <section className="border-t-2 border-border bg-primary px-6 py-28 text-primary-foreground md:px-12">
          <div className="mx-auto max-w-6xl space-y-10">
            <h2 className="font-display text-5xl font-black uppercase tracking-tighter md:text-7xl">
              {ctaSection.title}
            </h2>
            <p className="max-w-2xl font-mono text-lg uppercase tracking-wide md:text-2xl">
              {ctaSection.body}
            </p>
            <Button
              asChild
              variant="outline"
              className="h-14 w-fit border-2 border-primary-foreground bg-transparent px-10 font-mono uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              <Link href={ctaSection.cta.href}>{ctaSection.cta.label}</Link>
            </Button>
          </div>
        </section>
      ) : null}
    </div>
  );
}