"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Mail,
  ArrowRight,
  Badge as LucideBadge,
  Clock,
  Star,
  Users,
} from "lucide-react";
import { GraduationCap, Sparkles, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { formatPrice } from "@/lib/course-utils";
import { courseCategories } from "@/data/courses";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Sparkles,
  Briefcase,
};

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get("session_id");
  const [orderDetails, setOrderDetails] = useState<unknown>(null);
  // const [loading, setLoading] = useState(true);

  const loading = !sessionId;

  // useEffect(() => {
  //   if (sessionId) {
  //     // In a real implementation, you would fetch order details from your API
  //     // For now, we'll just show a success message
  //     setLoading(false);
  //   }
  // }, [sessionId]);

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-pink-50 flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-green-500" />
            </motion.div>

            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center space-y-6"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Payment Successful! 🎉
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Thank you for enrolling at{" "}
                <span className="font-semibold text-pink-500">
                  Keke Beauty Academy
                </span>
                !
              </p>

              <div className="bg-linear-to-r from-pink-50 to-purple-50 rounded-2xl p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-6 h-6 text-pink-500 shrink-0 mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      What happens next?
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        <span>
                          You will receive a confirmation email shortly
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        <span>
                          Our team will contact you within 24 hours with your
                          course access details
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        <span>
                          Check your email for learning materials and resources
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* {sessionId && (
              <div className="text-sm text-gray-500 font-mono bg-gray-50 rounded-lg p-3">
                Order Reference: {sessionId}
              </div>
            )} */}

              {/* Call to Action */}
              <div className="pt-6 space-y-4">
                <Link href="/">
                  <Button
                    size="lg"
                    className="bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  >
                    Return to Homepage
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>

                <p className="text-sm text-gray-500 mt-5">
                  Need help? Contact us at{" "}
                  <a
                    href="mailto:contact@kekebevarah.com"
                    className="text-pink-500 hover:underline"
                  >
                    kekebevarah@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>

            {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/courses">
            <Button
            variant="outline"
            className="w-full border-2 border-pink-300 hover:bg-pink-50 text-pink-600 font-semibold py-6"
              >
                Browse All Courses →
              </Button>
            </Link>
          </motion.div> */}
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full blur-xl opacity-60 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200 rounded-full blur-xl opacity-60 animate-pulse"></div>
        </motion.div>
      </div>

      {/* Courses by Category */}
      <div className="space-y-16 mt-5 px-4 md:px-6 lg:px-12 xl:px-24">
        {courseCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            className="space-y-8"
          >
            {/* Category Header */}
            {/* Category Header */}
            <div className="flex items-center justify-center mb-12">
              <div
                className={`${category.color} rounded-full p-4 mr-4 shadow-lg`}
              >
                {(() => {
                  const Icon = iconMap[category.icon];
                  return <Icon className="w-8 h-8 text-white" />;
                })()}
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-8 lg:mx-0">
              {category.courses.map((course, courseIndex) => (
                <motion.div
                  key={courseIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: courseIndex * 0.1 }}
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
                          <span>Expert instructors</span>
                        </div>

                        {/* Price and View Details Button */}
                        <div className="mt-6 pt-4 border-t space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-500">
                                Course Price
                              </p>
                              <p className="text-2xl font-bold text-gray-900">
                                {formatPrice(course.price)}
                              </p>
                            </div>
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
        ))}
      </div>
    </>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-pink-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
