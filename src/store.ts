import { create } from 'zustand';
import { OrderItem } from './types';

interface Store {
  orders: OrderItem[];
}

export const useStore = create<Store>((set) => ({
  orders: [],
}));
