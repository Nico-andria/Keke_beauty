"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Star,
  Clock,
  Users,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Briefcase,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { formatPrice } from "@/lib/course-utils";
import { courseCategories } from "@/data/courses";

/* -------------------------------------------------------------------------- */
/*                               ICON MAPPING                                 */
/* -------------------------------------------------------------------------- */

const iconMap: Record<string, LucideIcon> = {
  "graduation-cap": GraduationCap,
  sparkles: Sparkles,
  briefcase: Briefcase,
};

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Link
            href="/"
            className="inline-block mb-6 text-pink-500 hover:text-pink-600 font-semibold"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-pink-500">Course Catalog</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of beauty courses designed to
            elevate your skills and career
          </p>
        </motion.div>

        {/* Courses by Category */}
        <div className="space-y-16">
          {courseCategories.map((category, categoryIndex) => {
            const Icon = iconMap[category.icon] ?? GraduationCap;

            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="space-y-8"
              >
                {/* Category Header */}
                <div className="flex items-center justify-center mb-12">
                  <div
                    className={`${category.color} rounded-full p-4 mr-4 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.courses.map((course, courseIndex) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: courseIndex * 0.1,
                      }}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <Link href={`/courses/${course.id}`}>
                        <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm flex flex-col cursor-pointer group-hover:border-pink-300 group-hover:border-2">
                          <CardHeader className="pb-4">
                            <div className="flex items-start justify-between mb-3">
                              <Badge
                                variant={
                                  course.level === "Professional"
                                    ? "default"
                                    : course.level === "Beginner"
                                    ? "secondary"
                                    : "outline"
                                }
                                className="mb-2"
                              >
                                {course.level}
                              </Badge>

                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="w-4 h-4 mr-1" />
                                {course.duration}
                              </div>
                            </div>

                            <CardTitle className="text-lg font-bold leading-tight group-hover:text-pink-500 transition-colors">
                              {course.name}
                            </CardTitle>

                            <CardDescription className="text-gray-600 leading-relaxed">
                              {course.description}
                            </CardDescription>
                          </CardHeader>

                          <CardContent className="flex-1 flex flex-col">
                            <div className="space-y-2 flex-1">
                              {course.features.map((feature, featureIndex) => (
                                <div
                                  key={featureIndex}
                                  className="flex items-center text-sm text-gray-600"
                                >
                                  <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                                  {feature}
                                </div>
                              ))}
                            </div>

                            <div className="flex items-center mt-4 pt-4 border-t text-sm text-gray-500">
                              <Users className="w-4 h-4 mr-1" />
                              Expert instructors
                            </div>

                            {/* Price & CTA */}
                            <div className="mt-6 pt-4 border-t space-y-4">
                              <div>
                                <p className="text-sm text-gray-500">
                                  Course Price
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                  {formatPrice(course.price)}
                                </p>
                              </div>

                              <Button className="w-full bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                View Details
                                <ArrowRight className="w-5 h-5 ml-2" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 p-8 bg-linear-to-r from-pink-100 to-purple-100 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>

          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us to learn more about our courses and find the perfect fit
            for your beauty journey
          </p>

          <Link href="/#registration">
            <Button className="bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
