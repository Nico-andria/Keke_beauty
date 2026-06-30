import Stripe from 'stripe'
import { courseCategories, Category, Course } from '@/data/courses'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'placeholder_key', {
  apiVersion: '2025-11-17.clover',
})

export type CourseId = string

export const COURSE_PRICES: Record<string, number> = {}
export const COURSE_NAMES: Record<string, string> = {}

courseCategories.forEach((category: Category) => {
  category.courses.forEach((course: Course) => {
    COURSE_PRICES[course.id] = course.price
    COURSE_NAMES[course.id] = course.name
  })
})
