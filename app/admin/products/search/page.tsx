import ProductTable from '@/components/products/ProductTable';
import SearchProductForm from '@/components/products/SearchProductForm';
import Heading from '@/components/ui/Heading';
import prisma from '@/src/lib/prisma';

type SearchPageProps = {
  searchParams: Promise<{ query?: string }>;
};

const searchProducts = async (query: string) => {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive',
      },
    },
    include: {
      category: true,
    },
  });

  return products;
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const params = await searchParams;
  const query = params.query?.trim() ?? '';

  if (!query) {
    return (
      <>
        <Heading>Search Results</Heading>
        <p className="mt-4 text-lg text-gray-700">
          Type a search term to see results.
        </p>
      </>
    );
  }

  const products = await searchProducts(query);

  return (
    <>
      <Heading>Search Results: {query}</Heading>

      <div className="mt-10 flex flex-col lg:flex-row lg:justify-end gap-5">
        <SearchProductForm />
      </div>

      {products.length ? (
        <ProductTable products={products} />
      ) : (
        <p className="mt-8 text-lg text-center text-gray-700">
          No products found.
        </p>
      )}
    </>
  );
};

export default SearchPage;
