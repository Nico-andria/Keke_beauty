"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get("session_id");
  const [orderDetails, setOrderDetails] = useState<unknown>(null);
  // const [loading, setLoading] = useState(true);

  const loading = !sessionId;

  // useEffect(() => {
  //   if (sessionId) {
  //     // In a real implementation, you would fetch order details from your API
  //     // For now, we'll just show a success message
  //     setLoading(false);
  //   }
  // }, [sessionId]);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-pink-50 flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-green-500" />
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center space-y-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Payment Successful! 🎉
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Thank you for enrolling at{" "}
              <span className="font-semibold text-pink-500">
                Keke Beauty Academy
              </span>
              !
            </p>

            <div className="bg-linear-to-r from-pink-50 to-purple-50 rounded-2xl p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-6 h-6 text-pink-500 shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    What happens next?
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">✓</span>
                      <span>You will receive a confirmation email shortly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">✓</span>
                      <span>
                        Our team will contact you within 24 hours with your
                        course access details
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">✓</span>
                      <span>
                        Check your email for learning materials and resources
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {sessionId && (
              <div className="text-sm text-gray-500 font-mono bg-gray-50 rounded-lg p-3">
                Order Reference: {sessionId}
              </div>
            )}

            {/* Call to Action */}
            <div className="pt-6 space-y-4">
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  Return to Homepage
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <p className="text-sm text-gray-500">
                Need help? Contact us at{" "}
                <a
                  href="mailto:contact@kekebevarah.com"
                  className="text-pink-500 hover:underline"
                >
                  kekebevarah@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200 rounded-full blur-xl opacity-60 animate-pulse"></div>
      </motion.div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-pink-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
