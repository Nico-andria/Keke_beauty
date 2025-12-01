// /data/courses.ts
import { GraduationCap, Sparkles, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Course = {
  id: string;
  name: string;
  price: number;
  duration: string;
  level: string;
  features: string[];
  description: string;
};

export type Category = {
  title: string;
  description: string;
  icon?: LucideIcon;
  color?: string;
  courses: Course[];
};

export const courseCategories: Category[] = [
  {
    title: "📚 Professional Formations (Pro-Level)",
    description: "Advanced courses for beauty professionals",
    icon: GraduationCap,
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    courses: [
      {
        id: "pro-beauty-skills",
        name: "PRO-BEAUTY SKILLS",
        description:
          "Master comprehensive beauty techniques with advanced skills",
        duration: "8-12 weeks",
        level: "Professional",
        price: 900,
        features: [
          "Advanced techniques",
          "Industry certification",
          "Lifetime access",
        ],
      },
      {
        id: "pro-eyelashes-tech",
        name: "PRO-EYELASHES TECH",
        description:
          "Professional eyelash extension and enhancement techniques",
        duration: "6-8 weeks",
        level: "Professional",
        price: 150,
        features: [
          "Extension techniques",
          "Safety protocols",
          "Client consultation",
        ],
      },
      {
        id: "pro-hairstylist",
        name: "PRO-HAIRSTYLIST",
        description: "Complete professional hairstyling and treatment course",
        duration: "10-12 weeks",
        level: "Professional",
        price: 450,
        features: ["Cutting techniques", "Color theory", "Styling mastery"],
      },
      {
        id: "pro-makeup-artist",
        name: "PRO-MAKEUP-ARTIST",
        description: "Professional makeup artistry for all occasions",
        duration: "8-10 weeks",
        level: "Professional",
        price: 150,
        features: ["Bridal makeup", "Editorial looks", "Color matching"],
      },
      {
        id: "pro-nail-technician",
        name: "PRO-NAIL-TECHNICIAN",
        description: "Advanced nail art and care techniques",
        duration: "6-8 weeks",
        level: "Professional",
        price: 300,
        features: ["Nail art mastery", "Health & safety", "Business skills"],
      },
    ],
  },
  {
    title: "🎓 Basic Formations",
    description: "Perfect starting point for beauty enthusiasts",
    icon: Sparkles,
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    courses: [
      {
        id: "beauty-skills-basics",
        name: "BEAUTY SKILLS BASICS FOR BEGINNER",
        description: "Fundamental beauty skills for complete beginners",
        duration: "4-6 weeks",
        level: "Beginner",
        price: 120,
        features: [
          "Basic techniques",
          "Product knowledge",
          "Practical exercises",
        ],
      },
      // {
      //   id: "makeup-basics",
      //   name: "MAKEUP-BASICS",
      //   description: "Essential makeup techniques and application",
      //   duration: "4-5 weeks",
      //   level: "Beginner",
      //   price: 199,
      //   features: ["Daily makeup", "Color basics", "Tool usage"],
      // },
      // {
      //   id: "nails",
      //   name: "NAILS",
      //   description: "Basic nail care and simple nail art",
      //   duration: "3-4 weeks",
      //   level: "Beginner",
      //   price: 199,
      //   features: ["Nail health", "Basic art", "Maintenance"],
      // },
      // {
      //   id: "hairs",
      //   name: "HAIRS",
      //   description: "Basic hair care and simple styling techniques",
      //   duration: "4-5 weeks",
      //   level: "Beginner",
      //   price: 249,
      //   features: ["Hair health", "Basic styling", "Care routines"],
      // },
    ],
  },
  {
    title: "💼 Business Formations",
    description: "Build your beauty business empire",
    icon: Briefcase,
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
    courses: [
      {
        id: "build-salon",
        name: "BUILD YOUR OWN SALON",
        description: "Complete guide to starting and running a beauty salon",
        duration: "6-8 weeks",
        level: "Entrepreneurial",
        price: 150,
        features: [
          "Business planning",
          "Marketing strategies",
          "Financial management",
        ],
      },
      // {
      //   id: "business",
      //   name: "FANOMBOHANA BUSINESS",
      //   description: "Business development and growth strategies",
      //   duration: "4-6 weeks",
      //   level: "Entrepreneurial",
      //   price: 499,
      //   features: ["Growth planning", "Client retention", "Digital marketing"],
      // },
    ],
  },
];
