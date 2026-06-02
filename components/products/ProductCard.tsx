import { Product } from '@/src/generated/prisma/client';
import Image from 'next/image';
import AddProductButton from './AddProductButton';
import { getImagePath } from '@/src/utils';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const imagePath = getImagePath(product.image);
  
  return (
    <div className="border border-gray-200 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow">
      <Image
        src={imagePath}
        alt={product.name}
        width={400}
        height={500}
      />

      <div className="p-5">
        <h3 className="text-2xl font-medium">{product.name}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        <p className="mt-5 font-medium text-4xl text-amber-500">
          ${product.price.toFixed(2)}
        </p>

        <AddProductButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
