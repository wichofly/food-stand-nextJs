import { Product } from '@/src/generated/prisma/client';
import Image from 'next/image';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border bg-white rounded-md shadow-sm hover:shadow-md transition-shadow">
      <Image
        src={`/products/${product.image}.jpg`}
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
        <button className="mt-5 bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 w-full transition-colors cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
