'use server';

import prisma from '@/src/lib/prisma';
import { ProductSchema } from '@/src/zod';
import { revalidatePath } from 'next/cache';

export const createProduct = async (data: unknown) => {
  const result = ProductSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.issues,
    };
  }

  try {
    await prisma.product.create({
      data: {
        name: result.data.name,
        description: result.data.description,
        price: result.data.price,
        image: result.data.image,
        categoryId: result.data.categoryId,
      },
    });

    revalidatePath('/admin/products');
  } catch (error) {
    console.log(error);
    return {
      errors: [{ message: 'Could not create product. Please try again.' }],
    };
  }
};
