'use client';

import { useStore } from '@/src/store';
import ProductDetails from './ProductDetails';

const OrderSummary = () => {
  const order = useStore((state) => state.order);
  const total = order.reduce((total, item) => total + item.subtotal, 0);

  return (
    <aside className="md:h-screen md:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-semibold">My Order</h1>

      {order.length === 0 ? (
        <p className="text-center mt-5 text-gray-500">Empty order.</p>
      ) : (
        <div className="mt-5">
          {order.map((item) => (
            <ProductDetails key={item.id} item={item} />
          ))}

          <p className="text-2xl mt-10 text-center">
            Total:{' '}
            <span className="font-semibold text-gray-800">
              ${total.toFixed(2)}
            </span>
          </p>
        </div>
      )}
    </aside>
  );
};

export default OrderSummary;
