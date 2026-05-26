'use client';

import { useStore } from '@/src/store';

const OrderSummary = () => {
  const order = useStore((state) => state.order);

  return (
    <aside className="md:h-screen md:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-semibold">My Order</h1>

      {order.length === 0 ? (
        <p className="text-center mt-5 text-gray-500">Empty order.</p>
      ) : (
        <ul>
          {order.map((item, index) => (
            <li key={index} className="flex justify-between mt-2">
              <span>{item.name}</span>
              <span>{item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default OrderSummary;
