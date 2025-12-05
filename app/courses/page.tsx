"use client";

import { motion } from "framer-motion";
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
  GraduationCap,
  Sparkles,
  Briefcase,
  Star,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";
import { formatPrice } from "@/lib/course-utils";
import Link from "next/link";
import { courseCategories } from "@/data/courses";

// const courseCategories = [
//   {
//     title: "📚 Professional Formations (Pro-Level)",
//     description: "Advanced courses for beauty professionals",
//     icon: GraduationCap,
//     color: "bg-linear-to-br from-purple-500 to-pink-500",
//     courses: [
//       {
//         id: "pro-beauty-skills",
//         name: "PRO-BEAUTY SKILLS",
//         description:
//           "Master comprehensive beauty techniques with advanced skills",
//         duration: "8-12 weeks",
//         level: "Professional",
//         price: 89900,
//         features: [
//           "Advanced techniques",
//           "Industry certification",
//           "Lifetime access",
//         ],
//       },
//       {
//         id: "pro-eyelashes-tech",
//         name: "PRO-EYELASHES TECH",
//         description:
//           "Professional eyelash extension and enhancement techniques",
//         duration: "6-8 weeks",
//         level: "Professional",
//         price: 69900,
//         features: [
//           "Extension techniques",
//           "Safety protocols",
//           "Client consultation",
//         ],
//       },
//       {
//         id: "pro-hairstylist",
//         name: "PRO-HAIRSTYLIST",
//         description: "Complete professional hairstyling and treatment course",
//         duration: "10-12 weeks",
//         level: "Professional",
//         price: 99900,
//         features: ["Cutting techniques", "Color theory", "Styling mastery"],
//       },
//       {
//         id: "pro-makeup-artist",
//         name: "PRO-MAKEUP-ARTIST",
//         description: "Professional makeup artistry for all occasions",
//         duration: "8-10 weeks",
//         level: "Professional",
//         price: 79900,
//         features: ["Bridal makeup", "Editorial looks", "Color matching"],
//       },
//       {
//         id: "pro-nail-technician",
//         name: "PRO-NAIL-TECHNICIAN",
//         description: "Advanced nail art and care techniques",
//         duration: "6-8 weeks",
//         level: "Professional",
//         price: 69900,
//         features: ["Nail art mastery", "Health & safety", "Business skills"],
//       },
//     ],
//   },
//   {
//     title: "🎓 Basic Formations",
//     description: "Perfect starting point for beauty enthusiasts",
//     icon: Sparkles,
//     color: "bg-linear-to-br from-blue-500 to-cyan-500",
//     courses: [
//       {
//         id: "beauty-skills-basics",
//         name: "BEAUTY SKILLS BASICS FOR BEGINNER / VAOVAO",
//         description: "Fundamental beauty skills for complete beginners",
//         duration: "4-6 weeks",
//         level: "Beginner",
//         price: 29900,
//         features: [
//           "Basic techniques",
//           "Product knowledge",
//           "Practical exercises",
//         ],
//       },
//       {
//         id: "makeup-basics",
//         name: "MAKEUP-BASICS",
//         description: "Essential makeup techniques and application",
//         duration: "4-5 weeks",
//         level: "Beginner",
//         price: 19900,
//         features: ["Daily makeup", "Color basics", "Tool usage"],
//       },
//       {
//         id: "nails",
//         name: "NAILS",
//         description: "Basic nail care and simple nail art",
//         duration: "3-4 weeks",
//         level: "Beginner",
//         price: 19900,
//         features: ["Nail health", "Basic art", "Maintenance"],
//       },
//       {
//         id: "hairs",
//         name: "HAIRS",
//         description: "Basic hair care and simple styling techniques",
//         duration: "4-5 weeks",
//         level: "Beginner",
//         price: 24900,
//         features: ["Hair health", "Basic styling", "Care routines"],
//       },
//     ],
//   },
//   {
//     title: "💼 Business Formations",
//     description: "Build your beauty business empire",
//     icon: Briefcase,
//     color: "bg-linear-to-br from-green-500 to-emerald-500",
//     courses: [
//       {
//         id: "build-salon",
//         name: "BUILD YOUR OWN SALON / MANOKAFA SALON DE...",
//         description: "Complete guide to starting and running a beauty salon",
//         duration: "6-8 weeks",
//         level: "Entrepreneurial",
//         price: 59900,
//         features: [
//           "Business planning",
//           "Marketing strategies",
//           "Financial management",
//         ],
//       },
//       {
//         id: "business",
//         name: "FANOMBOHANA BUSINESS",
//         description: "Business development and growth strategies",
//         duration: "4-6 weeks",
//         level: "Entrepreneurial",
//         price: 49900,
//         features: ["Growth planning", "Client retention", "Digital marketing"],
//       },
//     ],
//   },
// ];

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
          {courseCategories.map((category, categoryIndex) => (
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
                  <category.icon className="w-8 h-8 text-white" />
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
                    key={courseIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: courseIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Link href={`/course/${course.id}`}>
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
