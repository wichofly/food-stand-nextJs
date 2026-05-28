'use server';

import { prisma } from '@/src/lib/prisma';

export const completeOrder = async (formData: FormData) => {
  const orderId = formData.get('order_id')!;

  try {
    await prisma.order.updateMany({
      where: {
        id: +orderId,
      },
      data: {
        status: true,
        orderReadyAt: new Date(Date.now()),
      },
    });
  } catch (error) {
    console.error('Error completing order:', error);
  }
};
