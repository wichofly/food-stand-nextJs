import ProductCard from '@/components/products/ProductCard';
import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';

const getProducts = async (category: string) => {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });

  return products;
};

const OrderPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1); // Capitalize the first letter for display purposes
  const products = await getProducts(category);

  return (
    <>
      <Heading>Menu: {formattedCategory}</Heading>

      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default OrderPage;
