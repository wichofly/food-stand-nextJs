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
  const products = await getProducts(category);
  console.log(products);

  return <div>OrderPage: {category}</div>;
};

export default OrderPage;
