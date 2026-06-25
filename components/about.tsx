"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Heart, Users, BookOpen } from "lucide-react";

const stats = [
  { number: "500+", label: "Students Worldwide" },
  { number: "15+", label: "Expert Courses" },
  { number: "5", label: "Beauty Disciplines" },
];

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-28 bg-gray-50 scroll-mt-24">
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
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
              Beauty is confidence made visible
            </h2>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-left"
            >
              <div className="flex items-center space-x-3">
                <Sparkles className="w-8 h-8 text-pink-500" />
                <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                  Educational Excellence
                </h3>
              </div>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                Keke Beauty Academy is the educational branch of the renowned
                Keke Beauty Salon. We have transformed our years of hands-on
                expertise into comprehensive online courses that empower beauty
                professionals worldwide.
              </p>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                At Keke, we believe that{" "}
                <span className="font-semibold text-pink-500">
                  beauty is confidence made visible
                </span>
                . Our experienced team is dedicated to enhancing your natural
                beauty with care, precision, and passion.
              </p>
            </motion.div>

            {/* Cards column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-50 p-3 rounded-full">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Passion-Driven
                    </h4>
                    <p className="text-gray-500 text-sm font-light">
                      Every course crafted with love and expertise
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-50 p-3 rounded-full">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Global Reach
                    </h4>
                    <p className="text-gray-500 text-sm font-light">
                      Empowering beauty professionals worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <BookOpen className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Lifetime Access
                    </h4>
                    <p className="text-gray-500 text-sm font-light">
                      Learn at your own pace, forever
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-2xl text-white">
                <h4 className="font-semibold text-lg mb-2">Our Mission</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  To make professional beauty education accessible, affordable,
                  and transformative for everyone, everywhere.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-12"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold tracking-tight text-gray-900">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-500 font-light mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
