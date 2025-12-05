"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Clock, DollarSign, Infinity, ShoppingCart } from "lucide-react";
import { useState } from "react";
import DialogContenu from "./dialog-content";
import { featuredCourse } from "@/data/featuredCourse";

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const course = featuredCourse[0].courses[0];

  const handleEnrollClick = () => {
    setIsDialogOpen(true);
  };

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
    pink: "bg-pink-100 text-pink-500 group-hover:bg-pink-500 group-hover:text-white",
    purple:
      "bg-purple-100 text-purple-500 group-hover:bg-purple-500 group-hover:text-white",
    blue: "bg-blue-100 text-blue-500 group-hover:bg-blue-500 group-hover:text-white",
    green:
      "bg-green-100 text-green-500 group-hover:bg-green-500 group-hover:text-white",
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-16"
        >
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose <span className="text-pink-500">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes Keke Beauty Academy the perfect choice for
              your beauty education journey
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features?.map((feature, index) => (
              <motion.div
                key={feature?.title || `feature-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      colorClasses[feature?.color as keyof typeof colorClasses]
                    }`}
                  >
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-500 transition-colors">
                    {feature?.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature?.description}
                  </p>
                </div>
              </motion.div>
            )) || []}
          </div>
        </motion.div>
      </div>

      {/* CTA Button #3 - Bottom of section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="bg-linear-to-r from-pink-100 to-purple-100 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful makeup artists who started their
            journey with us
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEnrollClick}
            className="bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-6 px-12 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 text-lg cursor-pointer"
          >
            <ShoppingCart className="w-6 h-6" />
            Enroll in PRO-MAKEUP-ARTIST Course
          </motion.button>
        </div>
      </motion.div>

      {/* Checkout Modal */}
      <DialogContenu
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        course={course}
      />
    </section>
  );
}
