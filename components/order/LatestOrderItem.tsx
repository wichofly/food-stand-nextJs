import { OrderWithProducts } from '@/src/types';

type LatestOrderItemProps = {
  order: OrderWithProducts;
};

const LatestOrderItem = ({ order }: LatestOrderItemProps) => {
  return (
    <div className="bg-white shadow p-5 space-y-5 rounded-md">
      <p className="text-lg font-semibold text-slate-600">
        Customer: {order.name}
      </p>

      <ul
        className="divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
        role="list"
      >
        {order.orderProducts.map((orderProduct) => (
          <li key={orderProduct.id} className="flex py-6 text-lg">
            <span className="font-semibold mr-1">
              ({orderProduct.quantity}) {''}
            </span>
            {orderProduct.product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestOrderItem;
