"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Clock,
  Award,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { formatPrice } from "@/lib/course-utils";
import DialogContenu from "./dialog-content";
import { courseCategories, Course } from "@/data/courses";

interface FeaturedCourseProps {
  course?: Course;
}

export default function FeaturedCourse({
  course: passedCourse,
}: FeaturedCourseProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const course = useMemo(() => {
    if (passedCourse) return passedCourse;
    return courseCategories
      .flatMap((category) => category.courses)
      .find((c) => c.featured === true);
  }, [passedCourse]);

  if (!course) return null;

  return (
    <>
      <section
        className="py-28 bg-white dark:bg-gray-950 overflow-hidden scroll-mt-24"
        id="featuredCourse"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-5">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium tracking-wide text-pink-500 uppercase">
                {passedCourse ? "Course details" : "Featured course"}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5">
              {course.fullName ?? course.name}
            </h2>

            <p className="text-xl text-gray-500 dark:text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              {course.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-10 items-start"
          >
            {/* Left column */}
            <div className="space-y-6">
              {/* Visual card */}
              <div className="relative aspect-video bg-gray-900 rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-linear-to-br from-gray-800 to-gray-950" />
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-pink-500/12 rounded-full blur-[80px]" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px]" />

                <div className="relative z-10 text-center px-8 space-y-5">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
                    <Award className="w-7 h-7 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-pink-400 text-xs font-medium uppercase tracking-widest mb-2">
                      Professional Certification
                    </p>
                    <h3 className="text-xl font-semibold text-white tracking-tight">
                      {course.fullName ?? course.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {course.features.map((f) => (
                      <span
                        key={f}
                        className="bg-white/8 text-white/80 text-xs px-3 py-1.5 rounded-full border border-white/15 backdrop-blur-sm"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Meta chips */}
              <div className="flex flex-wrap gap-3">
                <MetaChip
                  icon={<Clock className="w-4 h-4 text-pink-500" />}
                  text={course.duration}
                />
                <MetaChip
                  icon={<Award className="w-4 h-4 text-purple-500" />}
                  text={course.level}
                />
                <MetaChip
                  icon={<CheckCircle className="w-4 h-4 text-green-500" />}
                  text={course.access}
                />
              </div>

              {/* What you'll learn */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
                  What you will learn
                </h3>

                {course.longDescription && (
                  <p className="text-gray-500 dark:text-gray-400 font-light text-sm mb-6 leading-relaxed">
                    {course.longDescription}
                  </p>
                )}

                <div className="grid sm:grid-cols-2 gap-3">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-200 text-sm font-light">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="lg:hidden">
                <EnrollButton onClick={() => setIsDialogOpen(true)}>
                  Enroll Now — {formatPrice(course.price)}
                </EnrollButton>
              </div>
            </div>

            {/* Right column — sticky pricing card */}
            <div className="lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                {/* Price header */}
                <div className="p-8 border-b border-gray-100 dark:border-gray-800 text-center">
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                    One-time Investment
                  </p>
                  <p className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">
                    {formatPrice(course.price)}
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 font-light">
                    One-time payment · {course.access}
                  </p>
                </div>

                {/* Benefits */}
                <div className="px-8 py-6 space-y-3 border-b border-gray-100 dark:border-gray-800">
                  {[
                    "Secure payment via Stripe",
                    "Instant course access after payment",
                    "Certificate upon completion",
                    "24/7 student support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm font-light">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="p-8">
                  <EnrollButton onClick={() => setIsDialogOpen(true)}>
                    Start Your Journey Today
                  </EnrollButton>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <DialogContenu
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        course={course}
      />
    </>
  );
}

function MetaChip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-full px-4 py-2 shadow-sm">
      {icon}
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{text}</span>
    </div>
  );
}

function EnrollButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-4 px-8 rounded-full glow-pink-soft transition-colors duration-300 flex items-center justify-center gap-2.5 text-base cursor-pointer"
    >
      <ShoppingCart className="w-5 h-5" />
      {children}
      <ArrowRight className="w-4 h-4 ml-auto" />
    </motion.button>
  );
}
