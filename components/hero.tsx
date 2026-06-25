"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const stats = [
  { number: "500+", label: "Students Enrolled" },
  { number: "15+", label: "Expert Courses" },
  { number: "5", label: "Beauty Disciplines" },
  { number: "100%", label: "Online & Flexible" },
];

export default function Hero() {
  const scrollToRegistration = () => {
    document
      .getElementById("featuredCourse")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-pink-50/60 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 max-w-5xl text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            <Image
              src="/keke-logo.jpg"
              alt="Keke Beauty Academy Logo"
              fill
              className="object-contain rounded-full ring-4 ring-pink-100 shadow-lg"
              priority
            />
          </div>
        </motion.div>

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 text-sm font-medium px-5 py-2 rounded-full border border-pink-100">
            <Sparkles className="w-3.5 h-3.5" />
            Professional Beauty Education
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.05] mb-6"
        >
          Keke <span className="text-pink-500">Beauty Academy</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Master the art of beauty, anytime, anywhere. Professional courses led
          by certified experts.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={scrollToRegistration}
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white px-9 py-6 text-base font-medium rounded-full shadow-lg shadow-pink-100 transition-all duration-300 cursor-pointer"
          >
            Explore Courses
          </Button>
          <button
            onClick={() =>
              document
                .getElementById("courses")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors cursor-pointer inline-flex items-center gap-1.5"
          >
            Browse catalog
            <span aria-hidden className="text-pink-500">
              ›
            </span>
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-gray-900 tracking-tight">
                {stat.number}
              </p>
              <p className="text-sm text-gray-500 mt-1 font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
