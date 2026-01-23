import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keke Beauty Academy - Professional Online Beauty Courses",
  description:
    "Master the art of beauty with professional online beauty courses in makeup, skincare, nails, hair, and aesthetics. Led by certified instructors at Keke Beauty Academy.",
  keywords:
    "online beauty academy, professional beauty courses, makeup courses online, beauty training, nail technician course, hairstylist course, skincare courses",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Keke Beauty Academy - Professional Online Beauty Courses",
    description:
      "Master the art of beauty with professional online beauty courses in makeup, skincare, nails, hair, and aesthetics.",
    type: "website",
    images: [
      {
        url: "/keke-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Keke Beauty Academy Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
