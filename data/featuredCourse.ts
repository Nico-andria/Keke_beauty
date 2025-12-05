// /data/courses.ts
import { GraduationCap, Sparkles, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CourseFeatured = {
  id: string;
  name: string;
  fullName: string;
  description: string;
  longDescription: string;
  duration: string;
  level: string;
  price: number;
  features: string[];
  benefits: string[];
};

export type Category = {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
  courses: CourseFeatured[];
};

export const featuredCourse: Category[] = [
  {
    title: "📚 Professional Formations (Pro-Level)",
    description: "Advanced courses for beauty professionals",
    icon: GraduationCap,
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    courses: [
      {
        id: "pro-makeup-artist",
        name: "PRO-MAKEUP-ARTIST",
        fullName: "Professional Makeup Artistry Certification",
        description:
          "Master the art of professional makeup with our comprehensive certification program.",
        longDescription:
          "This intensive professional makeup artistry course covers everything from basic application techniques to advanced editorial and bridal makeup.",
        duration: "8-10 weeks",
        level: "Professional",
        price: 150,
        features: [
          "Professional bridal makeup techniques",
          "Editorial and fashion makeup",
          "Color theory and matching",
          "Skin preparation and foundation",
          "Contouring and highlighting mastery",
          "Industry-standard tools training",
          "Business setup guidance",
          "Lifetime course access",
        ],
        benefits: [
          "Launch your makeup artistry career",
          "Work with brides and special events",
          "Build a professional portfolio",
          "Get certified by industry experts",
        ],
      },
    ],
  },
];
