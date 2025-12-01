import { PrismaClient } from '@prisma/client'

// Pour dev, on attache Prisma au global pour éviter les multiples instances
declare global {
   
  var prisma: PrismaClient | undefined
}

export const db =
  global.prisma ??
  new PrismaClient({
    log: ['query', 'error'],
    errorFormat: 'pretty',
  })

if (process.env.NODE_ENV !== 'production') global.prisma = db
