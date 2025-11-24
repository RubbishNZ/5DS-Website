'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  const handleToggle = () => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme ?? 'light');
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex h-10 w-10 items-center justify-center border-2 border-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
      aria-label="Toggle theme"
    >
      {mounted ? (
        currentTheme === 'light' ? <Moon size={18} /> : <Sun size={18} />
      ) : (
        <Moon size={18} className="opacity-0" />
      )}
    </button>
  );
}