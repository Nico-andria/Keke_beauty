"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Clock,
  Users,
  Award,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { formatPrice } from "@/lib/course-utils";
import DialogContenu from "./dialog-content";
import { featuredCourse } from "@/data/featuredCourse";

export default function FeaturedCourse() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const course = featuredCourse[0].courses[0];

  const openDialog = () => setIsDialogOpen(true);

  return (
    <>
      <section
        className="py-20 bg-linear-to-b from-white via-pink-50 to-white overflow-hidden"
        id="featuredCourse"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-pink-100 to-purple-100 px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-pink-500" />
              <span className="font-semibold text-pink-600">
                FEATURED COURSE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {course.fullName}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {course.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left Content */}
            <div className="space-y-8">
              {/* Image */}
              <div className="relative aspect-video bg-linear-to-br from-pink-200 via-purple-200 to-pink-300 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <Award className="w-24 h-24 text-white mx-auto" />
                  <h3 className="text-3xl font-bold text-white">
                    Professional Certification
                  </h3>
                </div>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-4">
                <CourseMeta
                  icon={<Clock className="w-5 h-5 text-pink-500" />}
                  text={course.duration}
                />
                <CourseMeta
                  icon={<Users className="w-5 h-5 text-purple-500" />}
                  text="Expert Instructors"
                />
                <CourseMeta
                  icon={<Award className="w-5 h-5 text-pink-500" />}
                  text={course.level}
                />
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  What You’ll Learn
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.longDescription}
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA #1 */}
              <CTAButton onClick={openDialog}>
                Enroll Now for {formatPrice(course.price)}
              </CTAButton>
            </div>

            {/* Right Column */}
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Pricing Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-pink-200"
              >
                <div className="text-center mb-6">
                  <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">
                    Course Investment
                  </p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-gray-900">
                      {formatPrice(course.price)}
                    </span>
                  </div>
                  <p className="text-gray-500 mt-2">
                    One-time payment • Lifetime access
                  </p>
                </div>

                {/* CTA #2 */}
                <CTAButton onClick={openDialog}>
                  Start Your Journey Today
                </CTAButton>

                <BenefitsList />
              </motion.div>

              {/* Guarantee */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl p-6 text-center"
              >
                <Award className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">
                  Quality Guaranteed
                </h4>
                <p className="text-sm text-gray-600">
                  Learn from certified professionals with years of industry
                  experience
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Checkout Modal */}
      <DialogContenu
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        course={course}
      />
    </>
  );
}

/* Small Reusable Components */

function CourseMeta({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-md">
      {icon}
      <span className="font-semibold text-gray-700">{text}</span>
    </div>
  );
}

function CTAButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="w-full bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-6 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg cursor-pointer"
    >
      <ShoppingCart className="w-6 h-6" />
      {children}
    </motion.button>
  );
}

function BenefitsList() {
  const items = [
    "Secure payment via Stripe",
    "Instant course access after payment",
    "Certificate upon completion",
    "24/7 student support",
  ];

  return (
    <div className="space-y-4 mb-6">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
          <span className="text-gray-700 text-sm">{item}</span>
        </div>
      ))}
    </div>
  );
}
