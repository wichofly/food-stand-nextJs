'use client';

import { Product } from '@/src/generated/prisma/client';
import { useStore } from '@/src/store';

type AddProductButtonProps = {
  product: Product;
};

const AddProductButton = ({ product }: AddProductButtonProps) => {
  const addToOrder = useStore((state) => state.addToOrder);

  return (
    <button
      className="mt-5 bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 w-full transition-colors cursor-pointer"
      onClick={() => addToOrder(product)}
    >
      Add to Order
    </button>
  );
};

export default AddProductButton;
