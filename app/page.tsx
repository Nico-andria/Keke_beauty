import Hero from "@/components/hero";
import About from "@/components/about";
// import Courses from "@/components/courses";
import WhyChooseUs from "@/components/why-choose-us";
import HowItWorks from "@/components/how-it-works";
// import RegistrationForm from "@/components/registration-form";
import Footer from "@/components/footer";
import FeaturedCourse from "@/components/featured-course";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-pink-50">
      {/* Page Frame */}
      <div className="relative min-h-screen">
        {/* Decorative Border Frame */}
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute inset-2 border-4 border-pink-200 rounded-3xl opacity-30 shadow-lg"></div>
          <div className="absolute inset-4 border-2 border-purple-100 rounded-2xl opacity-50"></div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="fixed top-4 left-4 w-16 h-16 bg-linear-to-br from-pink-300 to-purple-300 rounded-full opacity-20 z-40"></div>
        <div className="fixed top-4 right-4 w-12 h-12 bg-linear-to-bl from-purple-300 to-pink-300 rounded-full opacity-20 z-40"></div>
        <div className="fixed bottom-4 left-4 w-12 h-12 bg-linear-to-tr from-pink-300 to-purple-300 rounded-full opacity-20 z-40"></div>
        <div className="fixed bottom-4 right-4 w-16 h-16 bg-linear-to-tl from-purple-300 to-pink-300 rounded-full opacity-20 z-40"></div>

        {/* Main Content */}
        <main className="relative z-10 bg-white/90 backdrop-blur-sm mx-2 md:mx-6 rounded-3xl shadow-2xl overflow-hidden">
          <Hero />
          <About />
          {/* <Courses /> */}
          <FeaturedCourse />
          <WhyChooseUs />
          <HowItWorks />
          {/* <RegistrationForm /> */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
