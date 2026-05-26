import { create } from 'zustand';
import { OrderItem } from './types';
import { Product } from './generated/prisma/client';

interface Store {
  order: OrderItem[];
  addToOrder: (product: Product) => void;
}

export const useStore = create<Store>((set) => ({
  order: [],
  addToOrder: (product) => {
    const { categoryId, image, description, ...data } = product; // Exclude categoryId, image and description from the order item

    set((state) => ({
      order: [
        ...state.order,
        { ...data, quantity: 1, subtotal: 1 * product.price },
      ],
    }));
  },
}));
