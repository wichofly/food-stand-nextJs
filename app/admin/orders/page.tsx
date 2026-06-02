import OrderCard from '@/components/order/OrderCard';
import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';
import { revalidatePath } from 'next/cache';

const getPendingOrders = async () => {
  const orders = await prisma.order.findMany({
    where: {
      status: false,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return orders;
};

const OrdersPage = async () => {
  const orders = await getPendingOrders();

  const refreshOrders = async () => {
    'use server';

    revalidatePath('/admin/orders');
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <Heading>Manage Orders</Heading>

        <form action={refreshOrders}>
          <input
            type="submit"
            value="Update Orders"
            className="bg-amber-500 text-white text-center w-full lg:w-auto text-xl px-10 py-3 font-medium rounded-md hover:bg-amber-600 transition cursor-pointer"
          />
        </form>
      </div>

      {orders.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <p className="text-center">No pending orders</p>
      )}
    </>
  );
};

export default OrdersPage;
