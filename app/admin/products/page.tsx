import ProductsPagination from '@/components/products/ProductsPagination';
import ProductTable from '@/components/products/ProductTable';
import SearchProductForm from '@/components/products/SearchProductForm';
import Heading from '@/components/ui/Heading';
import { prisma } from '@/src/lib/prisma';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const productCount = async () => {
  const count = await prisma.product.count();
  return count;
};

const getProducts = async (page: number, pageSize: number) => {
  const skip = (page - 1) * pageSize; // Calculate how many products to skip based on the current page

  const products = await prisma.product.findMany({
    take: pageSize,
    skip,
    include: {
      category: true,
    },
  });

  return products;
};

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>; // Type for products with category included

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {
  const params = await searchParams;
  const currentPage = Number.parseInt(params.page ?? '1', 10) || 1;
  const page = Math.max(1, currentPage);
  const pageSize = 10;

  if (page < 1) redirect('/admin/products');

  const productsData = getProducts(page, pageSize);
  const totalProductsData = productCount();
  const [products, totalProducts] = await Promise.all([
    productsData,
    totalProductsData,
  ]);
  const totalPages = Math.ceil(totalProducts / pageSize); // Calculate total pages based on total products and page size

  if (page > totalPages) redirect('/admin/products');

  return (
    <>
      <Heading>Manage Products</Heading>

      <div className="mt-10 flex flex-col lg:flex-row lg:justify-between gap-5">
        <Link
          href={'/admin/products/new'}
          className="bg-amber-500 text-white text-center w-full lg:w-auto text-xl px-10 py-3 font-medium rounded-md hover:bg-amber-600 transition"
        >
          Create a New Product
        </Link>

        <SearchProductForm />
      </div>

      <ProductTable products={products} />

      <ProductsPagination page={page} totalPages={totalPages} />
    </>
  );
};

export default ProductsPage;
