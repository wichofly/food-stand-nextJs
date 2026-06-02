import { prisma } from '@/src/lib/prisma';
import { notFound } from 'next/navigation';

const getProductById = async (id: number) => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) notFound();

  return product;
};

const EditProductsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params; 
  const product = await getProductById(+id); // Convert the id from string to number

  console.log(product);
  return <div>EditProductsPage</div>;
};

export default EditProductsPage;
