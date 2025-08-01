import { PrismaClient } from "./generated/prisma"

const prisma = global.prismadb || new PrismaClient()

if(process.env.NODE_ENV === "production") global.prismadb = prisma

export default prisma