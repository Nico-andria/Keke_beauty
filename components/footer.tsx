"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (isHomepage) {
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-gray-950 dark:border-t dark:border-gray-800 text-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Top section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 grid md:grid-cols-3 gap-12"
        >
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <h3 className="text-lg font-semibold text-white">
                Keke Beauty Academy
              </h3>
            </div>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              Bringing professional beauty education to students worldwide
              through comprehensive online courses.
            </p>
            <div className="space-y-1 text-sm text-gray-500 font-light">
              <p className="text-gray-300 font-medium">Keke Beauty LLC</p>
              <p>Company No. LC014659741</p>
              <p>Registered in Missouri, USA</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@kekebevarah.com"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors text-sm font-light"
              >
                <Mail className="w-4 h-4 shrink-0" />
                contact@kekebevarah.com
              </a>
              <a
                href="https://wa.me/96566586964"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors text-sm font-light"
              >
                <Phone className="w-4 h-4 shrink-0" />
                +965 66586964
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm font-light">
                <MapPin className="w-4 h-4 shrink-0" />
                Kuwait
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Quick Access
            </h4>
            <div className="space-y-2">
              <Link
                href="/#courses"
                onClick={(e) => handleLinkClick(e, "courses")}
                className="block text-gray-400 hover:text-pink-400 transition-colors text-sm font-light text-left cursor-pointer"
              >
                Browse Courses →
              </Link>
              <Link
                href="/#featuredCourse"
                onClick={(e) => handleLinkClick(e, "featuredCourse")}
                className="block text-gray-400 hover:text-pink-400 transition-colors text-sm font-light text-left cursor-pointer"
              >
                Register for Courses →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-800 py-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm font-light">
            © {new Date().getFullYear()} Keke Beauty Academy — All rights
            reserved
          </p>
          <div className="flex items-center gap-1.5 text-gray-500 text-sm font-light">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-current" />
            <span>for beauty professionals worldwide</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
