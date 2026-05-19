import { Product } from '@/src/generated/prisma/client';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border bg-white rounded-md shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="p-5">
        <h3 className="text-2xl font-medium">{product.name}</h3>
        <p className="mt-5 font-medium text-4xl text-amber-500">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
