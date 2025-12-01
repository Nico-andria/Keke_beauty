"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, Mail, Phone, BookOpen, Send, CheckCircle } from "lucide-react";

export default function RegistrationForm() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courseCategories = [
    { value: "pro-beauty-skills", label: "📚 PRO-BEAUTY SKILLS" },
    { value: "pro-eyelashes-tech", label: "📚 PRO-EYELASHES TECH" },
    { value: "pro-hairstylist", label: "📚 PRO-HAIRSTYLIST" },
    { value: "pro-makeup-artist", label: "📚 PRO-MAKEUP-ARTIST" },
    { value: "pro-nail-technician", label: "📚 PRO-NAIL-TECHNICIAN" },
    {
      value: "beauty-skills-basics",
      label: "🎓 BEAUTY SKILLS BASICS FOR BEGINNER / VAOVAO",
    },
    { value: "makeup-basics", label: "🎓 MAKEUP-BASICS" },
    { value: "nails", label: "🎓 NAILS" },
    { value: "hairs", label: "🎓 HAIRS" },
    {
      value: "build-salon",
      label: "💼 BUILD YOUR OWN SALON / MANOKAFA SALON DE...",
    },
    { value: "business", label: "💼 FANOMBOHANA BUSINESS" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.course
    ) {
      return;
    }

    setIsSubmitting(true);

    const selectedCourse =
      courseCategories.find((c) => c.value === formData.course)?.label ||
      formData.course;
    const emailSubject = encodeURIComponent(
      "New Registration - Keke Beauty Academy"
    );
    const emailBody = encodeURIComponent(`
New Registration Details:

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Course: ${selectedCourse}

Please contact this student with access details.

Best regards,
Keke Beauty Academy Registration System
    `);

    const mailtoLink = `mailto:contact@kekebevarah.com?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section
        id="registration"
        className="py-20 bg-linear-to-b from-white to-pink-50"
      >
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-12 rounded-2xl shadow-xl text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Registration Successful!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Your registration is successful. You will be contacted shortly
              with your course access details.
            </p>
            <p className="text-pink-500 font-semibold">
              Welcome to Keke Beauty Academy family! 💄✨
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="registration"
      className="py-20 bg-linear-to-b from-white to-pink-50"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Start Your <span className="text-pink-500">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Register now to begin your professional beauty education with Keke
              Beauty Academy
            </p>
          </div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="fullName"
                    className="text-gray-700 font-semibold"
                  >
                    Full Name *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="pl-12 h-12 border-gray-200 focus:border-pink-500 focus:ring-pink-500"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-gray-700 font-semibold"
                  >
                    Email Address *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="pl-12 h-12 border-gray-200 focus:border-pink-500 focus:ring-pink-500"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-gray-700 font-semibold"
                  >
                    Phone Number *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="pl-12 h-12 border-gray-200 focus:border-pink-500 focus:ring-pink-500"
                      required
                    />
                  </div>
                </div>

                {/* Course Selection */}
                <div className="space-y-2">
                  <Label
                    htmlFor="course"
                    className="text-gray-700 font-semibold"
                  >
                    Preferred Course Category *
                  </Label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                    <Select
                      value={formData.course || "select-course"}
                      onValueChange={(value) =>
                        handleInputChange("course", value)
                      }
                    >
                      <SelectTrigger className="pl-12 h-12 border-gray-200 focus:border-pink-500 focus:ring-pink-500">
                        <SelectValue placeholder="Select your preferred course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="select-course" disabled>
                          Select your preferred course
                        </SelectItem>
                        {courseCategories.map((category) => (
                          <SelectItem
                            key={category.value}
                            value={category.value}
                          >
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-6"
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Submit Registration</span>
                    </div>
                  )}
                </Button>
              </motion.div>
            </form>

            {/* Privacy Notice */}
            <p className="text-sm text-gray-500 text-center mt-6">
              By submitting this form, you agree to be contacted by our team
              regarding your course enrollment. Your information will be kept
              secure and confidential.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
