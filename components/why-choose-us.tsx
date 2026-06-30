"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Clock, DollarSign, Infinity, ShoppingCart } from "lucide-react";
import { useState, useMemo } from "react";
import DialogContenu from "./dialog-content";
import { courseCategories, Course } from "@/data/courses";

interface WhyChooseUsProps {
  course?: Course;
}

export default function WhyChooseUs({ course: passedCourse }: WhyChooseUsProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const course = useMemo(() => {
    if (passedCourse) return passedCourse;
    return courseCategories
      .flatMap((category) => category.courses)
      .find((c) => c.featured === true);
  }, [passedCourse]);

  if (!course) return null;

  const features = [
    {
      icon: Award,
      title: "Certified Beauty Experts",
      description:
        "Learn from industry professionals with years of hands-on experience",
      color: "pink",
    },
    {
      icon: Clock,
      title: "Flexible Online Courses",
      description:
        "Study at your own pace, anytime, anywhere that suits your schedule",
      color: "purple",
    },
    {
      icon: DollarSign,
      title: "Affordable & Professional",
      description:
        "High-quality education at accessible prices without compromising quality",
      color: "blue",
    },
    {
      icon: Infinity,
      title: "Lifetime Access",
      description:
        "Once enrolled, access your courses forever with lifetime updates",
      color: "green",
    },
  ];

  const colorClasses = {
    pink: "bg-pink-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white",
    purple:
      "bg-purple-50 text-purple-500 group-hover:bg-purple-500 group-hover:text-white",
    blue: "bg-blue-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white",
    green:
      "bg-green-50 text-green-500 group-hover:bg-green-500 group-hover:text-white",
  };

  return (
    <section className="py-28 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="text-center space-y-4">
            <span className="text-sm font-medium tracking-wide text-pink-500 uppercase">
              Why Keke
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Designed around you
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto dark:text-gray-400">
              Discover what makes Keke Beauty Academy the perfect choice for
              your beauty education journey.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 dark:bg-gray-900 dark:border-gray-800"
              >
                <div className="space-y-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      colorClasses[feature.color as keyof typeof colorClasses]
                    }`}
                  >
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 tracking-tight dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-16 text-center px-4"
      >
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-3xl p-10 md:p-16 dark:border dark:border-gray-800">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Ready to transform your career?
          </h3>
          <p className="text-lg text-gray-400 font-light mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who started their journey with
            our{" "}
            <span className="font-medium text-white">{course.name}</span>{" "}
            program.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsDialogOpen(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-4 px-9 rounded-full transition-colors duration-300 inline-flex items-center gap-2.5 text-base cursor-pointer"
          >
            <ShoppingCart className="w-5 h-5" />
            Enroll in {course.name}
          </motion.button>
        </div>
      </motion.div>

      <DialogContenu
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        course={course}
      />
    </section>
  );
}
