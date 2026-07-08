"use client";

import Navbar from "./Navbar";
import SunClearLine from "@/assets/icons/sun-line.svg";
import MoonClearLine from "@/assets/icons/moon-clear-line.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { contentPaddingX } from "@/lib/layout-padding";
import { cn } from "@/lib/utils";

const THEME_COOKIE_KEY = "theme";
const HEADER_RESET_SCROLL_Y = 80;

type HeaderProps = {
  initialIsDarkMode: boolean;
};

type ThemeToggleButtonProps = {
  isDarkMode: boolean;
  onToggle: () => void;
};

type HeaderBarProps = {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
};

function ThemeToggleButton({ isDarkMode, onToggle }: ThemeToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="bg-background p-2 px-3 ring-1 ring-zinc-900/5 backdrop-blur shadow-lg shadow-zinc-800/5 rounded-full transition-colors hover:bg-muted dark:ring-white/10 dark:shadow-black/30"
    >
      {!isDarkMode ? (
        <SunClearLine className="w-[14px] h-[14px]" />
      ) : (
        <MoonClearLine className="w-[14px] h-[14px]" />
      )}
    </button>
  );
}

function HeaderBar({ isDarkMode, onToggleDarkMode }: HeaderBarProps) {
  return (
    <>
      <Navbar />
      <ThemeToggleButton isDarkMode={isDarkMode} onToggle={onToggleDarkMode} />
    </>
  );
}

export default function Header({ initialIsDarkMode }: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(initialIsDarkMode);
  const [isFixed, setIsFixed] = useState(false);
  const prevScrollY = useRef(0);

  const toggleDarkMode = () => {
    setIsDarkMode((current) => {
      const nextIsDark = !current;

      document.documentElement.classList.toggle("dark", nextIsDark);
      document.cookie = `${THEME_COOKIE_KEY}=${
        nextIsDark ? "dark" : "light"
      }; path=/; max-age=31536000; samesite=lax`;

      return nextIsDark;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < HEADER_RESET_SCROLL_Y) {
        setIsFixed(false);
      } else if (currentScrollY < prevScrollY.current) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      prevScrollY.current = currentScrollY;
    };

    prevScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={cn("relative max-w-4xl py-8 mx-auto", contentPaddingX)}>
        <div className="flex items-center justify-between min-h-10">
          {!isFixed && (
            <HeaderBar
              isDarkMode={isDarkMode}
              onToggleDarkMode={toggleDarkMode}
            />
          )}
        </div>
        <div className="header-aurora absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl pointer-events-none sm:-top-80">
          <div
            className="header-aurora__blob relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] via-[#9089fc] to-[#60a5fa] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[62.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <AnimatePresence>
        {isFixed && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="fixed top-0 left-0 right-0 z-50"
          >
            <div
              className={cn(
                "flex items-center justify-between max-w-4xl mx-auto py-8",
                contentPaddingX,
              )}
            >
              <HeaderBar
                isDarkMode={isDarkMode}
                onToggleDarkMode={toggleDarkMode}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
