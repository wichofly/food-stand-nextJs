'use client';

import { createOrder } from '@/actions/create-order-action';
import { useStore } from '@/src/store';
import ProductDetails from './ProductDetails';

const OrderSummary = () => {
  const order = useStore((state) => state.order);
  const total = order.reduce((total, item) => total + item.subtotal, 0);

  const handleCreateOrder = (formData: FormData) => {
    console.log(formData.get('name'));

    createOrder();
  };

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

          <form action={handleCreateOrder} className="w-full mt-5 space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="bg-white border border-gray-100 rounded p-2 w-full"
              name="name"
            />

            <input
              type="submit"
              className="w-full bg-gray-900 text-white py-2 px-4 rounded uppercase font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
              value="Confirm Order"
            />
          </form>
        </div>
      )}
    </aside>
  );
};

export default OrderSummary;
