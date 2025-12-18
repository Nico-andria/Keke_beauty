"use client";

import { useState } from "react";
import Link from "next/link";
import DialogContenu from "@/components/dialog-content";
import { formatPrice } from "@/lib/course-utils";
import {
  ArrowLeft,
  Check,
  Clock,
  GraduationCap,
  Sparkles,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export type Course = {
  id: string;
  name: string;
  price: number;
  duration: string;
  level: string;
  features: string[];
  description: string;
};

export type Category = {
  title: string;
  icon: string; // 🔑 clé string venant du Server Component
  courses: Course[];
};

type CourseDetailClientProps = {
  course: Course;
  category: Category;
};

/* -------------------------------------------------------------------------- */
/*                              ICON MAPPING (CLIENT)                          */
/* -------------------------------------------------------------------------- */

const iconMap: Record<string, LucideIcon> = {
  "graduation-cap": GraduationCap,
  sparkles: Sparkles,
  briefcase: Briefcase,
};

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function CourseDetails({
  course,
  category,
}: CourseDetailClientProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const Icon = iconMap[category.icon] ?? GraduationCap;

  return (
    <>
      <main className="min-h-screen bg-linear-to-br from-gray-50 via-white to-pink-50 py-16 px-4">
        <div className="mx-auto max-w-6xl">
          {/* Back link */}
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-pink-500 font-semibold mb-8 hover:text-pink-600"
          >
            <ArrowLeft size={18} />
            Back to Courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div className="rounded-2xl bg-white/90 backdrop-blur shadow-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-pink-500" />
                  <span className="text-sm font-medium text-gray-500">
                    {category.title}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  {course.name}
                </h1>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1 text-sm text-pink-700">
                    <Clock size={16} />
                    {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1 text-sm text-purple-700">
                    {course.level}
                  </span>
                </div>
              </div>

              {/* What you'll learn */}
              <div className="rounded-2xl bg-white/90 backdrop-blur shadow-xl p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  What You’ll Learn
                </h2>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <Check className="text-green-500 mt-1" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why choose us */}
              <div className="rounded-2xl bg-white/90 backdrop-blur shadow-xl p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Why Choose This Course
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Expert Instructors",
                      text: "Learn directly from certified professionals with real-world experience.",
                    },
                    {
                      title: "Flexible Learning",
                      text: "Online access allowing you to learn at your own pace.",
                    },
                    {
                      title: "Professional Certificate",
                      text: "Receive a certificate upon successful completion.",
                    },
                    {
                      title: "Lifetime Access",
                      text: "Unlimited access including future updates.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="p-5 rounded-xl bg-gray-50">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="space-y-6">
              <div className="rounded-2xl bg-white shadow-2xl p-8 sticky top-24">
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500">Course Investment</p>
                  <p className="text-4xl font-bold text-gray-900">
                    {formatPrice(course.price)}
                  </p>
                  <p className="text-sm text-gray-500">
                    One-time payment • Lifetime access
                  </p>
                </div>

                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="w-full rounded-xl bg-linear-to-r from-pink-500 to-purple-500 text-white py-4 font-semibold cursor-pointer"
                >
                  Enroll Now
                </button>

                <ul className="mt-6 space-y-3 text-sm text-gray-600">
                  {[
                    "Secure payment",
                    "Instant access",
                    "Certificate included",
                    "Student support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <ShieldCheck size={16} className="text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <DialogContenu
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        course={course}
      />
    </>
  );
}
