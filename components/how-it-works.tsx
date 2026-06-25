"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { UserPlus, Phone, GraduationCap } from "lucide-react";

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

export default function HowItWorks() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-28 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-16"
        >
          {/* Section header */}
          <div className="space-y-4">
            <span className="text-sm font-medium tracking-wide text-pink-500 uppercase">
              How it works
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
              Three steps to get started
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
              Getting started with your beauty education journey is simple and
              straightforward.
            </p>
          </div>

          {/* Steps timeline */}
          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gray-200 transform -translate-y-1/2" />

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Mobile connector line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 top-24 bottom-0 w-px bg-gray-200 transform -translate-x-1/2" />
                  )}

                  <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                    {/* Step number bubble */}
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm shadow-lg shadow-pink-200">
                      {step.step}
                    </div>

                    <div className="pt-4 space-y-4 text-center">
                      <div className="bg-pink-50 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center group-hover:bg-pink-500 transition-colors duration-300">
                        <step.icon className="w-8 h-8 text-pink-500 group-hover:text-white transition-colors duration-300" />
                      </div>

                      <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                        {step.title}
                      </h3>

                      <p className="text-gray-500 font-light leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
              Ready to begin?
            </h3>
            <p className="text-gray-500 font-light mb-6">
              Join thousands of beauty professionals who have transformed their
              careers with Keke Beauty Academy.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("courses")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 cursor-pointer"
            >
              Start your journey
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
