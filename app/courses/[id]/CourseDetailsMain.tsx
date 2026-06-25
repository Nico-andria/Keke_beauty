"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Clock,
  Award,
  Infinity as InfinityIcon,
  ShieldCheck,
  ShoppingCart,
  GraduationCap,
  Sparkles,
  Briefcase,
  ArrowRight,
} from "lucide-react";

import { formatPrice } from "@/lib/course-utils";
import DialogContenu from "@/components/dialog-content";
import Footer from "@/components/footer";
import ThemeToggle from "@/components/theme-toggle";
import { Course, Category } from "@/data/courses";

const categoryIcons = {
  GraduationCap,
  Sparkles,
  Briefcase,
} as const;

const levelColors: Record<string, string> = {
  Beginner:
    "bg-green-50 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-300 dark:border-green-500/20",
  Professional:
    "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/20",
  Entrepreneurial:
    "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-500/20",
};

function cleanTitle(title: string) {
  return title.replace(/^[^\p{L}\p{N}]+/u, "").trim();
}

type CourseDetailClientProps = {
  course: Course;
  category: Category;
};

export default function CourseDetailsMain({
  course,
  category,
}: CourseDetailClientProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const Icon = categoryIcons[category.icon] ?? GraduationCap;
  const levelClass =
    levelColors[course.level] ??
    "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700";

  const openDialog = () => setIsDialogOpen(true);

  return (
    <>
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
              <ThemeToggle />
              <button
                onClick={openDialog}
                className="hidden items-center gap-2 rounded-full bg-pink-500 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-pink-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 glow-pink-soft sm:inline-flex cursor-pointer"
              >
                <ShoppingCart className="h-4 w-4" />
                Enroll Now
              </button>
            </div>
          </div>
        </header>

        {/* Course hero */}
        <section className="container mx-auto max-w-6xl px-6 pt-10 md:pt-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#courses"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400"
            >
              <ArrowLeft className="h-4 w-4" />
              All courses
            </Link>

            <div className="mt-6 inline-flex items-center gap-2">
              <Icon className="h-4 w-4 text-pink-500" />
              <span className="text-sm font-medium uppercase tracking-wide text-pink-500">
                {cleanTitle(category.title)}
              </span>
            </div>

            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl dark:text-white">
              {course.fullName ?? course.name}
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-gray-500 dark:text-gray-400">
              {course.description}
            </p>

            {/* Meta chips */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              <span
                className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm font-medium ${levelClass}`}
              >
                {course.level}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3.5 py-1.5 text-sm font-medium text-gray-600 dark:border-gray-800 dark:text-gray-300">
                <Clock className="h-3.5 w-3.5 text-pink-500" />
                {course.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3.5 py-1.5 text-sm font-medium text-gray-600 dark:border-gray-800 dark:text-gray-300">
                <InfinityIcon className="h-3.5 w-3.5 text-purple-500" />
                {course.access}
              </span>
            </div>
          </motion.div>
        </section>

        {/* Body */}
        <section className="container mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="grid items-start gap-10 lg:grid-cols-3">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6 lg:col-span-2"
            >
              {/* About */}
              {course.longDescription && (
                <div className="rounded-2xl border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-900 md:p-8">
                  <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    About this course
                  </h2>
                  <p className="mt-4 font-light leading-relaxed text-gray-600 dark:text-gray-300">
                    {course.longDescription}
                  </p>
                </div>
              )}

              {/* What you'll learn */}
              <div className="rounded-2xl border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-900 md:p-8">
                <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  What you will learn
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {course.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-50 dark:bg-green-500/10">
                        <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                      </span>
                      <span className="text-sm font-light text-gray-700 dark:text-gray-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What you'll gain */}
              {course.benefits && course.benefits.length > 0 && (
                <div className="rounded-2xl border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-900 md:p-8">
                  <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    What you will gain
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {course.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-pink-500" />
                        <span className="text-sm font-light text-gray-700 dark:text-gray-200">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            {/* Sticky pricing card */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <div className="border-b border-gray-100 p-8 text-center dark:border-gray-800">
                  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    One-time Investment
                  </p>
                  <p className="mb-1 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {formatPrice(course.price)}
                  </p>
                  <p className="text-sm font-light text-gray-400 dark:text-gray-500">
                    One-time payment · {course.access}
                  </p>
                </div>

                <div className="space-y-3 border-b border-gray-100 px-8 py-6 dark:border-gray-800">
                  {[
                    { icon: ShieldCheck, text: "Secure payment via Stripe" },
                    { icon: Sparkles, text: "Instant access after payment" },
                    { icon: Award, text: "Certificate on completion" },
                    { icon: InfinityIcon, text: "Lifetime access & updates" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4 shrink-0 text-green-500" />
                      <span className="text-sm font-light text-gray-600 dark:text-gray-300">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={openDialog}
                    className="flex w-full items-center justify-center gap-2.5 rounded-full bg-pink-500 px-8 py-4 text-base font-medium text-white transition-colors duration-300 hover:bg-pink-600 glow-pink-soft cursor-pointer"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Enroll Now
                  </motion.button>
                  <p className="mt-4 text-center text-xs font-light text-gray-400 dark:text-gray-500">
                    Questions first? We will guide you after sign-up.
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        <Footer />
      </div>

      <DialogContenu
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        course={course}
      />
    </>
  );
}
