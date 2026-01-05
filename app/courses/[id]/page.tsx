import { notFound } from "next/navigation";
import { courseCategories, Course, Category } from "@/data/courses";
import CourseDetailsMain from "./CourseDetailsMain";

function getCourseById(
  id: string
): { course: Course; category: Category } | null {
  for (const category of courseCategories) {
    const course = category.courses.find((c) => c.id === id);
    if (course) return { course, category };
  }
  return null;
}

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;
  const result = getCourseById(id);

  if (!result) {
    notFound();
  }

  return (
    <CourseDetailsMain course={result.course} category={result.category} />
  );
}
