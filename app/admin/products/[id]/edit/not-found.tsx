import Heading from '@/components/ui/Heading';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="text-center">
      <Heading>Product not found</Heading>

      <Link
        href="/admin/products"
        className="bg-amber-500 text-xl text-center text-white px-4 py-2 rounded w-full lg:w-auto hover:bg-amber-600 transition-colors inline-block mt-4 cursor-pointer"
      >
        Go back to products
      </Link>
    </div>
  );
};

export default NotFound;
