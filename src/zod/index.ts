import { z } from 'zod';

export const OrderSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  total: z.number().min(1, 'Error in total'),
  order: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      price: z.number(),
      quantity: z.number(),
      subtotal: z.number(),
    }),
  ),
});

export const SearchProductSchema = z.object({
  search: z.string().trim().min(1, 'Search query is required'),
});

export const ProductSchema = z.object({
  name: z.string().trim().min(1, 'Product name is required'),
  price: z
    .string()
    .trim()
    .transform((value) => parseFloat(value))
    .refine((value) => value > 0, 'Price must be a positive number'),
  categoryId: z
    .string()
    .trim()
    .transform((value) => parseFloat(value))
    .refine((value) => value > 0, 'Category is required'),
});
