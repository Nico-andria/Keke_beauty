"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Mail,
  ArrowRight,
  Clock,
  Star,
  Users,
} from "lucide-react";
import { GraduationCap, Sparkles, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { formatPrice } from "@/lib/course-utils";
import { courseCategories } from "@/data/courses";

/* ---------------- ICON MAP ---------------- */

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Sparkles,
  Briefcase,
};

/* ---------------- CONTENT ---------------- */

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get("session_id");

  return (
    <>
      {/* ================= SUCCESS SECTION ================= */}
      <div className="bg-linear-to-br from-green-50 via-white to-pink-50 flex items-start justify-center px-4 pt-2 pb-2 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mt-1 mb-1"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-green-500" />
            </motion.div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Payment Successful!
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Thank you for enrolling at{" "}
              <span className="font-semibold text-pink-500">
                Keke Beauty Academy
              </span>
              !
            </p>

            <Link href="/">
              <Button
                size="lg"
                className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl"
              >
                Return to Homepage
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <p className="text-sm text-gray-500 mt-6">
              Need help? Contact us at{" "}
              <a
                href="mailto:kekebevarah@gmail.com"
                className="text-pink-500 hover:underline"
              >
                kekebevarah@gmail.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Decorative blobs */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full blur-xl opacity-60" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200 rounded-full blur-xl opacity-60" />
      </div>

      {/* ================= TRANSITION ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mt-6 mb-4"
      >
        <span className="text-gray-400 text-sm mb-4">
          Continue exploring our courses
        </span>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowRight className="rotate-90 w-6 h-6 text-pink-400" />
        </motion.div>
      </motion.div>

      {/* ================= COURSES ================= */}
      <div className="space-y-20 px-4 md:px-6 lg:px-12 xl:px-24 pb-32">
        {courseCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Category header */}
            <div className="flex items-center justify-center">
              <div
                className={`${category.color} rounded-full p-4 mr-4 shadow-lg`}
              >
                {(() => {
                  const Icon = iconMap[category.icon];
                  return <Icon className="w-8 h-8 text-white" />;
                })()}
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {category.title}
                </h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>

            {/* Courses grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/courses/${course.id}`}>
                    <Card className="h-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition">
                      <CardHeader>
                        <div className="flex justify-between mb-3">
                          <Badge>{course.level}</Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </div>
                        </div>

                        <CardTitle className="group-hover:text-pink-500">
                          {course.name}
                        </CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {course.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                            {feature}
                          </div>
                        ))}

                        <div className="pt-4 border-t">
                          <p className="text-sm text-gray-500">Course price</p>
                          <p className="text-2xl font-bold">
                            {formatPrice(course.price)}
                          </p>
                        </div>

                        <Button className="w-full bg-linear-to-r from-pink-500 to-purple-500 text-white">
                          View Details
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

/* ---------------- PAGE ---------------- */

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col pt-16 md:pt-20">
      <Navbar />
      <div className="flex-1">
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <SuccessContent />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
