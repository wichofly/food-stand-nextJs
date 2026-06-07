import { prisma } from '@/src/lib/prisma';

export async function GET() {
  const orders = await prisma.order.findMany({
    take: 5,
    where: {
      orderReadyAt: {
        not: null,
      },
    },
    orderBy: {
      orderReadyAt: 'desc', // get the most recent orders first
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return Response.json(orders);
}
