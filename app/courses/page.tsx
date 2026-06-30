import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import CourseCatalog from "@/components/course-catalog";
import Footer from "@/components/footer";
import ThemeToggle from "@/components/theme-toggle";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Slim sticky header */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2"
            aria-label="Keke Beauty Academy — home"
          >
            <span className="relative block h-9 w-9 shrink-0">
              <Image
                src="/keke-logo.jpg"
                alt=""
                fill
                className="rounded-full object-contain ring-2 ring-pink-100"
              />
            </span>
            <span className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
              Keke <span className="text-pink-500">Beauty</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
            <Link
              href="/"
              className="hidden items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400 sm:inline-flex"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <CourseCatalog />

      <Footer />
    </div>
  );
}
