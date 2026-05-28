import { OrderWithProducts } from '@/src/types';

type OrderCardProps = {
  order: OrderWithProducts;
};

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-10 rounded-md bg-gray-50 px-4 py-6 sm:p-6 lg:mt-4 lg:p-8 space-y-4"
    >
      <p className="text-2xl font-medium text-gray-900">
        Customer: {order.name}
      </p>
      <p className="text-lg font-medium text-gray-900">Products Sorted:</p>

      <dl className="my-5 space-y-4">
        {order.orderProducts.map((product) => (
          <div
            key={product.productId}
            className="flex items-center gap-2 border-t border-gray-200 pt-4"
          >
            <dt className="flex items-center text-sm text-gray-600">
              <span className="font-semibold">
                ({product.quantity}) {''}
              </span>
            </dt>
            <dd className="text-sm font-medium text-gray-900">
              {product.product.name}
            </dd>
          </div>
        ))}

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">Total:</dt>
          <dd className="text-base font-medium text-gray-900">
            ${order.total.toFixed(2)}
          </dd>
        </div>
      </dl>

      <form>
        <input
          type="submit"
          value="Select Order completed"
          className="w-full bg-gray-900 text-white py-2 px-4 rounded uppercase font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
        />
      </form>
    </section>
  );
};

export default OrderCard;
