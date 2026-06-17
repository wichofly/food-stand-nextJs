'use server';

import { prisma } from '@/src/lib/prisma';
import { revalidatePath } from 'next/cache';

export const completeOrder = async (formData: FormData) => {
  const orderId = formData.get('order_id')!;

  try {
    await prisma.order.update({
      where: {
        id: +orderId,
      },
      data: {
        status: true,
        orderReadyAt: new Date(Date.now()),
      },
    });

    revalidatePath('/admin/orders');
    revalidatePath('/orders');
  } catch (error) {
    console.error('Error completing order:', error);
  }
};
