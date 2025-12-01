"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart, Loader2, Users, Star, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/course-utils";
import { courseCategories } from "@/data/courses";
import type { Course } from "@/data/courses";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleEnrollClick = (course: Course) => {
    setSelectedCourse(course);
    setIsDialogOpen(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse || !formData.name || !formData.email) return;
    setIsLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: selectedCourse.id,
          customerName: formData.name,
          customerEmail: formData.email,
          customerPhone: formData.phone,
        }),
      });

      const data = await response.json();
      if (response.ok && data.url) window.location.href = data.url;
      else {
        console.error("Error creating checkout session:", data.error);
        alert("An error occurred. Please try again.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <section
        id="courses"
        className="py-20 bg-linear-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-pink-500">Courses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty courses designed to
              elevate your skills and career
            </p>
          </motion.div>

          <div className="space-y-16">
            {courseCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-center mb-8">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.courses.map((course) => (
                    <Card
                      className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm flex flex-col"
                      key={course.id}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-3">
                          <Badge
                            variant={
                              course.level === "Professional"
                                ? "default"
                                : course.level === "Beginner"
                                ? "secondary"
                                : "outline"
                            }
                            className="mb-2"
                          >
                            {course.level}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </div>
                        </div>
                        <CardTitle className="text-lg font-bold leading-tight group-hover:text-pink-500 transition-colors">
                          {course.name}
                        </CardTitle>
                        <CardDescription className="text-gray-600 leading-relaxed">
                          {course.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <div className="space-y-2 flex-1">
                          {course.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center mt-4 pt-4 border-t text-sm text-gray-500">
                          <Users className="w-4 h-4 mr-1" />
                          <span>Expert instructors</span>
                        </div>

                        {/* Price and Enroll Button */}
                        <div className="mt-6 pt-4 border-t space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-500">
                                Course Price
                              </p>
                              <p className="text-2xl font-bold text-gray-900">
                                {formatPrice(course.price)}
                              </p>
                            </div>
                          </div>
                          <Button
                            onClick={() => handleEnrollClick(course)}
                            className="w-full bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <ShoppingCart className="w-5 h-5 mr-2" />
                            Enroll Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkout Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Enroll in Course
            </DialogTitle>
          </DialogHeader>

          {selectedCourse && (
            <div className="bg-linear-to-r from-pink-50 to-purple-50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-gray-900">
                {selectedCourse.name}
              </h3>
              <p className="text-2xl font-bold text-pink-600">
                {formatPrice(selectedCourse.price)}
              </p>
            </div>
          )}

          <form onSubmit={handleCheckout} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                disabled={isLoading}
              />
            </div>

            <DialogFooter className="flex flex-col sm:flex-row gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-linear-to-r from-pink-500 to-purple-500 text-white"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2 inline-block" />
                ) : (
                  <ShoppingCart className="w-5 h-5 mr-2 inline-block" />
                )}
                {isLoading ? "Processing..." : "Proceed to Payment"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
