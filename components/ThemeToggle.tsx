"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-accent-blue hover:text-accent-blue dark:border-slate-700 dark:text-slate-300 dark:hover:border-accent-cyan dark:hover:text-accent-cyan"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" strokeWidth={2} />
      ) : (
        <Sun className="h-4 w-4" strokeWidth={2} />
      )}
    </button>
  );
}
