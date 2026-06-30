
'use client'

import { motion } from 'framer-motion'
import { XCircle, ArrowLeft, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col pt-16 md:pt-20">
      <Navbar />
      <div className="relative flex-1 bg-gradient-to-br from-red-50 via-white to-pink-50 dark:from-red-950/10 dark:via-gray-950 dark:to-pink-950/10 flex items-center justify-center px-4 py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
            {/* Cancel Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 dark:bg-red-500/15"
            >
              <XCircle className="w-12 h-12 text-red-500 dark:text-red-400" />
            </motion.div>

            {/* Cancel Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center space-y-6"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Payment Cancelled
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Your payment has been cancelled. No charges have been made to your account.
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-500/5 dark:to-red-500/5 rounded-2xl p-6 space-y-4 border border-orange-100/10">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Need Assistance?</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      If you encountered any issues during checkout or have questions about our courses, 
                      we're here to help!
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 dark:bg-gray-950 rounded-2xl p-6 text-left space-y-3 border border-gray-100/10">
                <h3 className="font-semibold text-gray-900 dark:text-white text-center mb-4">Contact Us</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p>
                    <span className="font-medium text-gray-900 dark:text-white">Email:</span>{' '}
                    <a href="mailto:contact@kekebevarah.com" className="text-pink-500 hover:underline">
                      contact@kekebevarah.com
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-gray-900 dark:text-white">Phone:</span>{' '}
                    <a href="tel:+96566586964" className="text-pink-500 hover:underline">
                      +965 66586964
                    </a>
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-6 space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto cursor-pointer"
                    >
                      <ArrowLeft className="mr-2 w-5 h-5" />
                      Return to Homepage
                    </Button>
                  </Link>

                  <Link href="/#courses">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-pink-500 text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-500/10 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto cursor-pointer"
                    >
                      Browse Courses
                    </Button>
                  </Link>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Don't worry, you can try again anytime! We're looking forward to having you in our academy.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-red-200 dark:bg-red-500/10 rounded-full blur-xl opacity-60 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-200 dark:bg-orange-500/10 rounded-full blur-xl opacity-60 animate-pulse"></div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
