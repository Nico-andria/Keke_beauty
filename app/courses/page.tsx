import Navbar from "@/components/navbar";
import CourseCatalog from "@/components/course-catalog";
import Footer from "@/components/footer";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <CourseCatalog />

      <Footer />
    </div>
  );
}
