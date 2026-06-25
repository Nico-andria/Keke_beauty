import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import CourseCatalog from "@/components/course-catalog";
import WhyChooseUs from "@/components/why-choose-us";
import HowItWorks from "@/components/how-it-works";
// import RegistrationForm from "@/components/registration-form";
import Footer from "@/components/footer";
import FeaturedCourse from "@/components/featured-course";

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <FeaturedCourse />
      <CourseCatalog />
      <WhyChooseUs />
      <HowItWorks />
      {/* <RegistrationForm /> */}
      <Footer />
    </main>
  );
}
