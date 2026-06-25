"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Briefcase,
  Clock,
  ArrowRight,
  Star,
} from "lucide-react";
import { formatPrice } from "@/lib/course-utils";
import { courseCategories, Course, Category } from "@/data/courses";

const categoryIcons = {
  GraduationCap,
  Sparkles,
  Briefcase,
} as const;

const categorySchemes = [
  {
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-100",
    accent: "bg-purple-500",
    chip: "bg-purple-50 text-purple-600",
  },
  {
    bg: "bg-pink-50",
    text: "text-pink-600",
    border: "border-pink-100",
    accent: "bg-pink-500",
    chip: "bg-pink-50 text-pink-600",
  },
  {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    accent: "bg-blue-500",
    chip: "bg-blue-50 text-blue-600",
  },
  {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    accent: "bg-emerald-500",
    chip: "bg-emerald-50 text-emerald-600",
  },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-green-50 text-green-700 border-green-200",
  Professional: "bg-purple-50 text-purple-700 border-purple-200",
  Entrepreneurial: "bg-orange-50 text-orange-700 border-orange-200",
};

const LEVEL_ORDER = ["Beginner", "Professional", "Entrepreneurial"];

function cleanTitle(title: string) {
  return title.replace(/^[^\p{L}\p{N}]+/u, "").trim();
}

export default function CourseCatalog() {
  const [activeLevel, setActiveLevel] = useState<string>("All");

  const allCourses = useMemo(
    () => courseCategories.flatMap((c) => c.courses),
    []
  );

  // Build the filter list from the data, in a stable, sensible order.
  const filters = useMemo(() => {
    const present = new Set(allCourses.map((c) => c.level));
    const ordered = LEVEL_ORDER.filter((l) => present.has(l));
    const extras = [...present].filter((l) => !LEVEL_ORDER.includes(l));
    return ["All", ...ordered, ...extras];
  }, [allCourses]);

  // Keep each category's original index so its color scheme never shifts
  // when the list is filtered.
  const visibleCategories = useMemo(
    () =>
      courseCategories
        .map((category, idx) => ({ category, idx }))
        .map(({ category, idx }) => ({
          idx,
          category: {
            ...category,
            courses:
              activeLevel === "All"
                ? category.courses
                : category.courses.filter((c) => c.level === activeLevel),
          },
        }))
        .filter(({ category }) => category.courses.length > 0),
    [activeLevel]
  );

  const shownCount = visibleCategories.reduce(
    (n, { category }) => n + category.courses.length,
    0
  );

  return (
    <section id="courses" className="py-28 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-pink-500 uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            Course Catalog
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
            All our courses
          </h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            From your first steps to professional mastery — find the program
            that fits your beauty journey.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mb-16"
        >
          <div
            role="tablist"
            aria-label="Filter courses by level"
            className="flex flex-wrap justify-center gap-2"
          >
            {filters.map((level) => {
              const active = activeLevel === level;
              return (
                <button
                  key={level}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveLevel(level)}
                  className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 cursor-pointer ${
                    active
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900 bg-white border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="active-filter-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-pink-500 shadow-lg shadow-pink-100"
                    />
                  )}
                  <span className="relative z-10">{level}</span>
                </button>
              );
            })}
          </div>
          <p className="text-sm text-gray-400 font-light">
            Showing{" "}
            <span className="font-medium text-gray-600">{shownCount}</span> of{" "}
            {allCourses.length} courses
          </p>
        </motion.div>

        {/* Category sections */}
        <motion.div layout className="space-y-24">
          <AnimatePresence mode="popLayout">
            {visibleCategories.map(({ category, idx }) => (
              <CategoryBlock
                key={category.title}
                category={category}
                schemeIndex={idx}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function CategoryBlock({
  category,
  schemeIndex,
}: {
  category: Category;
  schemeIndex: number;
}) {
  const Icon = categoryIcons[category.icon] ?? GraduationCap;
  const scheme = categorySchemes[schemeIndex % categorySchemes.length];
  const count = category.courses.length;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.5 }}
    >
      {/* Category header */}
      <div className="flex items-center gap-4 mb-10">
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-2xl ${scheme.bg} ${scheme.text} shrink-0`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              {cleanTitle(category.title)}
            </h3>
            <span
              className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${scheme.chip}`}
            >
              {count} {count === 1 ? "course" : "courses"}
            </span>
          </div>
          <p className="text-gray-500 text-sm font-light mt-0.5">
            {category.description}
          </p>
        </div>
        <div
          className={`hidden md:block h-px flex-1 border-t ${scheme.border}`}
        />
      </div>

      {/* Course grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {category.courses.map((course, i) => (
            <CourseCard
              key={course.id}
              course={course}
              index={i}
              scheme={scheme}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

function CourseCard({
  course,
  index,
  scheme,
}: {
  course: Course;
  index: number;
  scheme: (typeof categorySchemes)[0];
}) {
  const levelClass =
    levelColors[course.level] ?? "bg-gray-50 text-gray-700 border-gray-200";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="h-full"
    >
      <Link
        href={`/courses/${course.id}`}
        className="group relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-xl"
      >
        {/* Top accent line on hover (rounded to match the card corners) */}
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl ${scheme.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        />

        {course.featured && (
          <span className="absolute -top-3 right-6 z-10 inline-flex items-center gap-1 rounded-full bg-linear-to-r from-pink-500 to-purple-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </span>
        )}

        {/* Meta row */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${levelClass}`}
          >
            {course.level}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-gray-400">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-base font-semibold text-gray-900 leading-snug mb-2 group-hover:text-pink-500 transition-colors">
          {course.fullName ?? course.name}
        </h4>

        {/* Description */}
        <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-3 flex-1">
          {course.description}
        </p>

        {/* Feature pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {course.features.slice(0, 2).map((f) => (
            <span
              key={f}
              className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-400">From</p>
            <p className="text-xl font-bold text-gray-900 tracking-tight">
              {formatPrice(course.price)}
            </p>
          </div>
          <span
            className={`inline-flex items-center gap-1.5 text-sm font-medium ${scheme.text} transition-transform group-hover:translate-x-1`}
          >
            View course
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
