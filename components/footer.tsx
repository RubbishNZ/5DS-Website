'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { motion } from 'framer-motion';

type NavItem = {
  href: Route;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: '/' as Route, label: 'Home' },
  { href: '/services' as Route, label: 'Services' },
  { href: '/case-studies' as Route, label: 'Cases' },
  { href: '/about' as Route, label: 'About' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4"
        >
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-4xl font-black uppercase tracking-tighter text-foreground">
              5DS
            </h3>
            <p className="mt-6 max-w-md font-mono leading-relaxed text-muted-foreground">
              Systems. Automation. Training. Real work that delivers results.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="mt-6 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-mono text-sm uppercase tracking-wide text-muted-foreground transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-black uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="font-mono text-sm uppercase tracking-wide text-muted-foreground transition-colors hover:text-accent"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t-2 border-border pt-8">
          <p className="text-center font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">
            © {currentYear} 5DS
          </p>
        </div>
      </div>
    </footer>
  );
}