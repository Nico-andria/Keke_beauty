"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  const scrollToRegistration = () => {
    document
      .getElementById("registration")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // const goToPlatform = () => {
  //   window.open(
  //     "https://hotmart.com/en/club/rabevason-hantahariniaina-prisca/products/6237641",
  //     "_blank"
  //   );
  // };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-pink-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo and Brand */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image
                src="/keke-logo.jpg"
                alt="Keke Beauty Academy Logo"
                fill
                className="object-contain rounded-full shadow-lg"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Keke - <span className="text-pink-500">Beauty Academy</span>
            </h1>
          </div>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto"
          >
            Master the Art of Beauty, Anytime, Anywhere
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Professional online beauty courses in makeup, skincare, nails, hair,
            and aesthetics – led by certified instructors.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              onClick={scrollToRegistration}
              size="lg"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Register Now
            </Button>
            {/* <Button
              onClick={goToPlatform}
              variant="outline"
              size="lg"
              className="border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Go to Platform
            </Button> */}
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl opacity-60 animate-pulse"></div>
      </div>
    </section>
  );
}
