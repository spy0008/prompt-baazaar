import { PrismaClient } from "./lib/generated/prisma"
declare global {
    namespace globalThis {
        var prismadb: PrismaClient
    }
}