export type Course = {
  id: string;
  name: string;
  fullName?: string;
  description: string;
  longDescription?: string;
  duration: string;
  access: string;
  level: string;
  price: number;
  features: string[];
  benefits?: string[];
  featured?: boolean;
};

export type Category = {
  title: string;
  description: string;
  icon: "GraduationCap" | "Sparkles" | "Briefcase";
  // icon: LucideIcon;
  color?: string;
  courses: Course[];
};

export const courseCategories: Category[] = [
  {
    title: "📚 Membership Access",
    description: "Access to ongoing beauty trainings",
    icon: "GraduationCap",
    // icon: GraduationCap,
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    courses: [
      {
        id: "membership-access",
        name: "MEMBERSHIP ACCESS",
        description:
          "Access to Keke Beauty Academy online trainings (Nails, Hair, Eyelashes, Makeup). Learn, grow, and get your certificate.Vocational training at Keke Beauty Academy (nails, hair, eyelashes, makeup, and so on...)",
        longDescription:
          "The Membership Access program provides continuous access to Keke Beauty Academy’s online vocational trainings, covering nails, hair, eyelashes, makeup, and more. This flexible learning model allows students to progress at their own pace and receive certification every two months.",
        duration: "Every two months",
        access: "Every two months",
        level: "Beginner",
        price: 30,
        featured: false,
        features: [
          "Basic techniques",
          "Product knowledge",
          "Practical exercises",
        ],
        benefits: [
          "Affordable access to multiple beauty disciplines",
          "Learn at your own pace with online content",
          "Receive certificates for completed trainings",
          "Continuously upgrade your beauty skills",
        ],
      },
    ],
  },
  {
    title: "📚 Professional Formations (Pro-Level)",
    description: "Advanced courses for beauty professionals",
    icon: "GraduationCap",
    // icon: GraduationCap,
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    courses: [
      {
        id: "pro-makeup-artist",
        name: "PRO-MAKEUP-ARTIST",
        fullName: "Professional Makeup Artistry Certification",
        description: "Professional makeup artistry for all occasions",
        longDescription:
          "This intensive professional makeup artistry course covers everything from basic application techniques to advanced editorial and bridal makeup.",
        duration: "8-10 weeks",
        access: "Lifetime access",
        level: "Professional",
        price: 150,
        featured: true,
        features: [
          "Professional bridal makeup techniques",
          "Editorial and fashion makeup",
          "Color theory and matching",
        ],
        benefits: [
          "Launch your makeup artistry career",
          "Build a professional portfolio",
          "Get certified by industry experts",
        ],
      },
      {
        id: "pro-beauty-skills",
        name: "PRO-BEAUTY SKILLS",
        description:
          "Master comprehensive beauty techniques with advanced skills",
        longDescription:
          "The PRO-BEAUTY SKILLS program is an intensive professional training designed for beauty practitioners who want to master advanced techniques across multiple beauty disciplines...",
        duration: "8-12 weeks",
        access: "Lifetime access",
        level: "Professional",
        price: 900,
        featured: false,
        features: [
          "Advanced techniques",
          "Industry certification",
          "Lifetime access",
        ],
        benefits: [
          "Develop high-level professional beauty skills",
          "Gain credibility with an industry-recognized certification",
          "Increase your service value and pricing potential",
          "Access training materials anytime for continuous improvement",
        ],
      },

      {
        id: "pro-eyelashes-tech",
        name: "PRO-EYELASHES TECH",
        description:
          "Professional eyelash extension and enhancement techniques",
        longDescription:
          "This professional eyelash training covers classic, hybrid, and volume extension techniques with a strong emphasis on safety, hygiene, and client consultation. You will learn how to customize lash sets based on eye shape and client preferences while maintaining high professional standards.",
        duration: "6-8 weeks",
        access: "Lifetime access",
        level: "Professional",
        price: 150,
        featured: false,
        features: [
          "Extension techniques",
          "Safety protocols",
          "Client consultation",
        ],
        benefits: [
          "Master professional eyelash extension methods",
          "Reduce risks through proper safety and hygiene practices",
          "Build client trust with effective consultations",
          "Expand your beauty service offerings",
        ],
      },
      {
        id: "pro-hairstylist",
        name: "PRO-HAIRSTYLIST",
        description: "Complete professional hairstyling and treatment course",
        longDescription:
          "The PRO-HAIRSTYLIST course provides a comprehensive approach to professional hair care, cutting, coloring, and styling. Designed for aspiring and practicing hairstylists, this program combines theory with hands-on techniques to meet salon-level expectations.",
        duration: "10-12 weeks",
        access: "Lifetime access",
        level: "Professional",
        price: 450,
        featured: false,
        features: ["Cutting techniques", "Color theory", "Styling mastery"],
        benefits: [
          "Perform professional haircuts and styles with confidence",
          "Understand color theory for accurate and creative results",
          "Offer complete hairstyling services in a salon environment",
          "Increase employability or freelance opportunities",
        ],
      },
      {
        id: "pro-makeup-artist1",
        name: "PRO-MAKEUP-ARTIST",
        description: "Professional makeup artistry for all occasions",
        longDescription:
          "This professional makeup artistry course trains you to create flawless looks for weddings, photoshoots, events, and editorial projects. You will master skin preparation, color matching, and advanced makeup techniques suitable for diverse clients and occasions.",
        duration: "8-10 weeks",
        access: "Lifetime access",
        level: "Professional",
        price: 150,
        featured: false,
        features: ["Bridal makeup", "Editorial looks", "Color matching"],
        benefits: [
          "Create professional makeup looks for multiple contexts",
          "Improve skin tone analysis and color selection",
          "Build a strong professional makeup portfolio",
          "Attract high-value clients and events",
        ],
      },
      {
        id: "pro-nail-technician",
        name: "PRO-NAIL-TECHNICIAN",
        description: "Advanced nail art and care techniques",
        longDescription:
          "The PRO-NAIL-TECHNICIAN program focuses on advanced nail care, creative nail art, and professional hygiene standards. It also introduces essential business skills to help you manage clients and grow your nail services professionally.",
        duration: "6-8 weeks",
        access: "Lifetime access",
        level: "Professional",
        price: 300,
        featured: false,
        features: ["Nail art mastery", "Health & safety", "Business skills"],
        benefits: [
          "Deliver high-quality and creative nail services",
          "Ensure client safety with proper hygiene practices",
          "Differentiate yourself with advanced nail art techniques",
          "Gain basic business skills to grow your client base",
        ],
      },
    ],
  },
  {
    title: "🎓 Basic Formations",
    description: "Perfect starting point for beauty enthusiasts",
    icon: "Sparkles",
    // icon: Sparkles,
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    courses: [
      {
        id: "beauty-skills-basics",
        name: "BEAUTY SKILLS BASICS FOR BEGINNER",
        description: "Fundamental beauty skills for complete beginners",
        longDescription:
          "This beginner-friendly course introduces essential beauty techniques for those with no prior experience. It provides a solid foundation in basic practices, product knowledge, and hands-on exercises to build confidence and prepare learners for advanced training.",
        duration: "4-6 weeks",
        access: "Lifetime access",
        level: "Beginner",
        price: 120,
        featured: false,
        features: [
          "Basic techniques",
          "Product knowledge",
          "Practical exercises",
        ],
        benefits: [
          "Learn beauty fundamentals step by step",
          "Build confidence through guided practice",
          "Understand basic tools and products",
          "Prepare for professional or advanced courses",
        ],
      },
    ],
  },
  {
    title: "💼 Business Formations",
    description: "Build your beauty business empire",
    icon: "Briefcase",
    // icon: Briefcase,
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
    courses: [
      {
        id: "build-salon",
        name: "BUILD YOUR OWN SALON",
        description: "Complete guide to starting and running a beauty salon",
        longDescription:
          "This business-focused course guides you through every step of launching and managing a successful beauty salon. From business planning and branding to marketing and financial management, you will gain practical knowledge to turn your beauty skills into a profitable enterprise.",
        duration: "6-8 weeks",
        access: "Lifetime access",
        level: "Entrepreneurial",
        price: 150,
        featured: false,
        features: [
          "Business planning",
          "Marketing strategies",
          "Financial management",
        ],
        benefits: [
          "Learn how to legally and strategically launch a salon",
          "Attract and retain clients through effective marketing",
          "Manage finances and pricing with confidence",
          "Build a sustainable and scalable beauty business",
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
