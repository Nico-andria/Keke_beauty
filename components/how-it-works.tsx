"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { UserPlus, Phone, GraduationCap } from "lucide-react";

export default function HowItWorks() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: UserPlus,
      title: "Register with Your Details",
      description:
        "Fill out the registration form with your contact information and preferred course category",
      step: "01",
    },
    {
      icon: Phone,
      title: "We Contact You",
      description:
        "Our team will reach out to you with access details and course information",
      step: "02",
    },
    {
      icon: GraduationCap,
      title: "Start Your Learning Journey",
      description:
        "Begin your professional beauty education with lifetime access to your courses",
      step: "03",
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-pink-50 to-purple-50">
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
              How It <span className="text-pink-500">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started with your beauty education journey is simple and
              straightforward
            </p>
          </div>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-pink-300 via-purple-300 to-pink-300 transform -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-4">
              {steps?.map((step, index) => (
                <motion.div
                  key={step?.title || `step-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Mobile Timeline Line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 top-24 bottom-0 w-0.5 bg-linear-to-b from-pink-300 to-purple-300 transform -translate-x-1/2"></div>
                  )}

                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-pink-500 to-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step?.step}
                    </div>

                    <div className="pt-4 space-y-4 text-center">
                      <div className="bg-linear-to-r from-pink-100 to-purple-100 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-10 h-10 text-pink-500" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-500 transition-colors">
                        {step?.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {step?.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )) || []}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Begin?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of beauty professionals who have transformed their
              careers with Keke Beauty Academy
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("registration")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
