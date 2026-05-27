'use server';

import { OrderSchema } from '@/src/zod';

export const createOrder = async (data: unknown) => {
  const result = OrderSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.issues,
    };
  }
};
