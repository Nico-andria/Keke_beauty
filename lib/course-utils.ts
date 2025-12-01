// Course prices in USD (in cents)
export const COURSE_PRICES = {
  // Professional Formations (Pro-Level)
  "pro-beauty-skills": 89900, // $899
  "pro-eyelashes-tech": 69900, // $699
  "pro-hairstylist": 99900, // $999
  "pro-makeup-artist": 79900, // $799
  "pro-nail-technician": 69900, // $699

  // Basic Formations
  "beauty-skills-basics": 29900, // $299
  "makeup-basics": 19900, // $199
  nails: 19900, // $199
  hairs: 24900, // $249

  // Business Formations
  "build-salon": 59900, // $599
  business: 49900, // $499
} as const;

export const COURSE_NAMES = {
  "pro-beauty-skills": "PRO-BEAUTY SKILLS",
  "pro-eyelashes-tech": "PRO-EYELASHES TECH",
  "pro-hairstylist": "PRO-HAIRSTYLIST",
  "pro-makeup-artist": "PRO-MAKEUP-ARTIST",
  "pro-nail-technician": "PRO-NAIL-TECHNICIAN",
  "beauty-skills-basics": "BEAUTY SKILLS BASICS FOR BEGINNER",
  "makeup-basics": "MAKEUP-BASICS",
  nails: "NAILS",
  hairs: "HAIRS",
  "build-salon": "BUILD YOUR OWN SALON",
  business: "FANOMBOHANA BUSINESS",
} as const;

export type CourseId = keyof typeof COURSE_PRICES;

export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(priceInCents);
}
