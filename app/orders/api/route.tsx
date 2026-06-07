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

/**
 * With the actual state of the project it is not necessary to have this API route, but I will keep it here for future reference in case I need to fetch the orders from the client side.
 * Data is obtained directly from the Server Component at app/orders/page.tsx.
 */
