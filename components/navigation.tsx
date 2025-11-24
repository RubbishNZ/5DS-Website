'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { Button } from '@/legacy/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/legacy/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';

type NavItem = {
  href: Route;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: '/' as Route, label: 'Home' },
  { href: '/services' as Route, label: 'Services' },
  { href: '/case-studies' as Route, label: 'Cases' },
  { href: '/about' as Route, label: 'About' },
  { href: '/contact' as Route, label: 'Contact' },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b-2 border-border transition-all duration-200 ${
        isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-lg' : 'bg-background'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="font-display text-2xl font-black uppercase tracking-tighter text-foreground transition-colors hover:text-accent"
        >
          5DS
        </Link>

        <nav className="hidden gap-10 text-sm font-bold uppercase tracking-wider text-foreground md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-accent ${
                  isActive ? 'text-accent underline decoration-2 underline-offset-4' : ''
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <Button
            asChild
            className="h-12 border-2 border-foreground bg-foreground px-8 font-mono text-sm uppercase tracking-wider text-background transition-colors hover:bg-background hover:text-foreground"
          >
            <Link href="/contact">Start</Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Toggle menu"
                className="flex h-10 w-10 items-center justify-center border-2 border-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <Menu size={22} />
              </button>
            </SheetTrigger>
            <SheetContent className="border-l-2 border-border">
              <nav className="mt-10 flex flex-col gap-6">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-mono uppercase tracking-wider transition-colors hover:text-accent ${
                        isActive ? 'font-bold text-accent' : 'text-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Button
                  asChild
                  className="mt-4 h-12 border-2 border-foreground bg-foreground px-8 font-mono uppercase tracking-wider text-background transition-colors hover:bg-background hover:text-foreground"
                >
                  <Link href="/contact">Start</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}