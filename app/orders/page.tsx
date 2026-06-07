import LatestOrderItem from '@/components/order/LatestOrderItem';
import Logo from '@/components/ui/Logo';
import prisma from '@/src/lib/prisma';
import { revalidatePath } from 'next/cache';

const getReadyOrders = async () => {
  const orders = await prisma.order.findMany({
    where: {
      status: true,
    },
    orderBy: [{ orderReadyAt: 'desc' }, { id: 'desc' }],
    take: 5,
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
  const orders = await getReadyOrders();

  const refreshOrders = async () => {
    'use server';

    revalidatePath('/orders');
  };

  return (
    <>
      <h1 className="text-center mt-10 text-6xl font-semibold">Ready Orders</h1>

      <Logo />

      <form
        action={refreshOrders}
        className="mt-5 w-full max-w-5xl mx-auto px-4 sm:px-0 flex justify-center"
      >
        <button
          type="submit"
          className="bg-amber-500 text-white text-center w-full sm:w-auto text-base sm:text-lg md:text-xl px-6 sm:px-10 py-3 font-medium rounded-md hover:bg-amber-600 transition cursor-pointer"
        >
          Refresh orders
        </button>
      </form>

      {orders.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 max-w-5xl mx-auto my-5 px-4 xl:px-0">
          {orders.map((order) => (
            <LatestOrderItem key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <p className="text-center my-5">No ready orders found.</p>
      )}
    </>
  );
};

export default OrdersPage;
