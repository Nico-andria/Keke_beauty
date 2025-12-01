"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pink-400 shrink-0" />
                  <a
                    href="mailto:contact@kekebevarah.com"
                    className="text-gray-300 hover:text-pink-400 transition-colors"
                  >
                    contact@kekebevarah.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-pink-400 shrink-0" />
                  <a
                    href="tel:+96566586964"
                    className="text-gray-300 hover:text-pink-400 transition-colors"
                  >
                    +965 66586964
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                  <div className="text-gray-300">
                    <p>Kuwait</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Academy Info */}
            <div>
              <h3 className="text-xl font-semibold text-pink-400 mb-3">
                About Keke Beauty Academy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Keke Beauty Academy is part of Keke Beauty Salon, bringing
                professional beauty education to students worldwide through
                comprehensive online courses.
              </p>
            </div>
          </div>

          {/* Company Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4">
                Company Information
              </h3>
              <div className="space-y-3 text-gray-300">
                <p className="font-semibold text-white">Keke Beauty LLC</p>
                <p>Company Number: LC014659741</p>
                <p>Registered in Missouri, USA</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-pink-400 mb-3">
                Quick Access
              </h3>
              <div className="space-y-2">
                <a
                  href="https://hotmart.com/en/club/rabevason-hantahariniaina-prisca/products/6237641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-pink-400 transition-colors"
                >
                  Learning Platform →
                </a>
                <button
                  onClick={() =>
                    document
                      .getElementById("registration")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-gray-300 hover:text-pink-400 transition-colors text-left"
                >
                  Register for Courses →
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2 text-gray-400">
            <span>
              © {new Date().getFullYear()} Keke Beauty Academy – All rights
              reserved
            </span>
            <span className="hidden md:inline">•</span>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-500 fill-current" />
              <span>for beauty professionals worldwide</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
