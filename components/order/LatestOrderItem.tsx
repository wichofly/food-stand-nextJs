import { OrderWithProducts } from '@/src/types';

type LatestOrderItemProps = {
  order: OrderWithProducts;
};

const LatestOrderItem = ({ order }: LatestOrderItemProps) => {
  return (
    <div className="bg-white shadow p-4 sm:p-5 space-y-4 sm:space-y-5 rounded-md">
      <p className="text-base sm:text-lg font-semibold text-slate-600 wrap-break-word">
        Customer: {order.name}
      </p>

      <ul
        className="divide-y divide-gray-200 border-t border-gray-200 text-sm sm:text-base font-medium text-gray-500"
        role="list"
      >
        {order.orderProducts.map((orderProduct) => (
          <li
            key={orderProduct.id}
            className="flex flex-wrap items-start gap-x-1 gap-y-1 py-4 sm:py-6 text-base sm:text-lg"
          >
            <span className="font-semibold mr-1 shrink-0">
              ({orderProduct.quantity}) {''}
            </span>
            <span className="wrap-break-word">{orderProduct.product.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestOrderItem;
