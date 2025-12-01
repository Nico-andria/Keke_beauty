"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Heart, Users } from "lucide-react";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-linear-to-b from-white to-pink-50">
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
              About the <span className="text-pink-500">Academy</span>
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-left"
            >
              <div className="flex items-center space-x-3">
                <Sparkles className="w-8 h-8 text-pink-500" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  Educational Excellence
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Keke Beauty Academy is the educational branch of the renowned
                Keke Beauty Salon. We have transformed our years of hands-on
                expertise into comprehensive online courses that empower beauty
                professionals worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                At Keke, we believe that{" "}
                <span className="font-semibold text-pink-500">
                  beauty is confidence made visible
                </span>
                . Our experienced team is dedicated to enhancing your natural
                beauty with care, precision, and passion.
              </p>
            </motion.div>

            {/* Stats/Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Passion-Driven
                    </h4>
                    <p className="text-gray-600">
                      Every course crafted with love and expertise
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Global Reach
                    </h4>
                    <p className="text-gray-600">
                      Empowering beauty professionals worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-r from-pink-500 to-purple-500 p-6 rounded-2xl text-white">
                <h4 className="font-bold text-xl mb-2">Our Mission</h4>
                <p className="opacity-90">
                  To make professional beauty education accessible, affordable,
                  and transformative for everyone, everywhere.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
