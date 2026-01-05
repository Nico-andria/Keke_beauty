"use client";

import { useState } from "react";
import DialogContenu from "@/components/dialog-content";
import Hero from "@/components/hero";
import About from "@/components/about";
import WhyChooseUs from "@/components/why-choose-us";
import HowItWorks from "@/components/how-it-works";
import Footer from "@/components/footer";
import FeaturedCourse from "@/components/featured-course";
import { Course, Category } from "@/data/courses";

type CourseDetailClientProps = {
  course: Course;
  category: Category;
};

export default function CourseDetailsMain({
  course,
  category,
}: CourseDetailClientProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-pink-50">
        <div className="relative min-h-screen">
          {/* Cadre décoratif */}
          <div className="fixed inset-0 pointer-events-none z-50">
            <div className="absolute inset-2 border-4 border-pink-200 rounded-3xl opacity-30 shadow-lg"></div>
            <div className="absolute inset-4 border-2 border-purple-100 rounded-2xl opacity-50"></div>
          </div>

          <main className="relative z-10 bg-white/90 backdrop-blur-sm mx-2 md:mx-6 rounded-3xl shadow-2xl overflow-hidden">
            <Hero />
            <About />

            {/* ICI : On passe l'objet 'course' spécifique à FeaturedCourse */}
            <FeaturedCourse course={course} />

            <WhyChooseUs course={course} />
            <HowItWorks />
            <Footer />
          </main>
        </div>
      </div>

      <DialogContenu
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        course={course}
      />
    </>
  );
}
