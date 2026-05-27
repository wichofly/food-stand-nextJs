import { create } from 'zustand';
import { Product } from './generated/prisma/client';
import { OrderItem } from './types';

interface Store {
  order: OrderItem[];
  addToOrder: (product: Product) => void;
}

export const useStore = create<Store>((set, get) => ({
  order: [],
  addToOrder: (product) => {
    const { categoryId, image, description, ...data } = product; // Exclude categoryId, image and description from the order item

    let order: OrderItem[] = [];

    if (get().order.find((item) => item.id === data.id)) {
      order = get().order.map((item) =>
        item.id === data.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: (item.quantity + 1) * product.price,
            }
          : item,
      );
    } else {
      order = [
        ...get().order,
        { ...data, quantity: 1, subtotal: 1 * product.price },
      ];
    }

    set(() => ({
      order,
    }));
  },
}));
