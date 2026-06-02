import EditProductForm from '@/components/products/EditProductForm';
import ProductForm from '@/components/products/ProductForm';
import GoBackButton from '@/components/ui/GoBackButton';
import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';
import Link from 'next/link';
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
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <Heading>Edit Product: {product.name}</Heading>

        <GoBackButton />
      </div>

      <EditProductForm>
        <ProductForm product={product} />
      </EditProductForm>
    </>
  );
};

export default EditProductsPage;
