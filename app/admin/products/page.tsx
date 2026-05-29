import ProductTable from '@/components/products/ProductTable';
import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';

const getProducts = async () => {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });

  return products;
};

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>; // Type for products with category included

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <>
      <Heading>Manage Products</Heading>

      <ProductTable products={products} />
    </>
  );
};

export default ProductsPage;
