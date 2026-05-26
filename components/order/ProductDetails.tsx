import { OrderItem } from '@/src/types';
import { MinusIcon, PlusIcon, XCircleIcon } from '@heroicons/react/24/outline';

type ProductDetailsProps = {
  item: OrderItem;
};

const ProductDetails = ({ item }: ProductDetailsProps) => {
  console.log(item);

  return (
    <div className="shadow space-y-1 p-4 bg-white border-t border-gray-200 rounded">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium">{item.name}</p>

          <button type="button" onClick={() => console.log('Button clicked')}>
            <XCircleIcon className="h-6 w-6 text-red-500" />
          </button>
        </div>
      </div>

      <p className="text-lg font-semibold text-amber-500">
        ${item.price.toFixed(2)}
      </p>

      <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-md">
        <button type="button" onClick={() => console.log('Button clicked')}>
          <MinusIcon className="h-6 w-6" />
        </button>

        <p className="text-lg font-medium ">{item.quantity}</p>

        <button type="button" onClick={() => console.log('Button clicked')}>
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>

      <div>
        <p className="text-lg font-semibold text-gray-700">
          Subtotal:{' '}
          <span className="font-medium">${item.subtotal.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
