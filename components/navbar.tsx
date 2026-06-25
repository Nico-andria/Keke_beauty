"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Menu, X, Sparkles } from "lucide-react";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Featured", href: "#featuredCourse" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToFeatured = () => {
    setMenuOpen(false);
    document
      .getElementById("featuredCourse")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-b border-gray-100 bg-white/80 backdrop-blur-md shadow-sm dark:border-gray-800 dark:bg-gray-950/80"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-6 max-w-6xl md:h-20">
          {/* Brand */}
          <a
            href="#top"
            className="flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2"
            aria-label="Keke Beauty Academy — back to top"
          >
            <span className="relative block h-9 w-9 shrink-0 md:h-10 md:w-10">
              <Image
                src="/keke-logo.jpg"
                alt=""
                fill
                className="rounded-full object-contain ring-2 ring-pink-100"
              />
            </span>
            <span className="text-base font-semibold tracking-tight text-gray-900 md:text-lg dark:text-white">
              Keke <span className="text-pink-500">Beauty</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-pink-500 focus-visible:outline-none focus-visible:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-1.5 md:gap-3">
            <ThemeToggle />

            {/* Desktop CTA */}
            <button
              onClick={scrollToFeatured}
              className="hidden items-center gap-2 rounded-full bg-pink-500 px-6 py-2.5 text-sm font-medium text-white glow-pink-soft transition-all duration-300 hover:bg-pink-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 md:inline-flex cursor-pointer"
            >
              <Sparkles className="h-4 w-4" />
              Enroll Now
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 dark:text-gray-200 dark:hover:bg-gray-800 md:hidden cursor-pointer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-gray-100 bg-white/95 backdrop-blur-md md:hidden dark:border-gray-800 dark:bg-gray-950/95"
          >
            <div className="container mx-auto flex flex-col gap-1 px-6 py-4 max-w-6xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-pink-50 hover:text-pink-500 dark:text-gray-200 dark:hover:bg-pink-500/10 dark:hover:text-pink-400"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={scrollToFeatured}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-base font-medium text-white glow-pink-soft transition-colors hover:bg-pink-600 cursor-pointer"
              >
                <Sparkles className="h-4 w-4" />
                Enroll Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
