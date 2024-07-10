import { PrismaClient } from '@prisma/client';
export const validateTokenData = async (tokenData) => {
    const { userId } = tokenData;
    const prisma = new PrismaClient();
    const user = await prisma.mobileNumber.findUnique({ where: { id: userId } });
    await prisma.$disconnect();
    return user;
};