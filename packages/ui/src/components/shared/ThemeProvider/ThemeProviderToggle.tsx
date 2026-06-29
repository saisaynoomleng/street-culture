'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '#components/ui/button';
import { useEffect, useState } from 'react';

export function ThemeProviderToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);

  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  return (
    <Button onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
