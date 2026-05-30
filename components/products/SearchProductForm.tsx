'use client';

import { SearchProductSchema } from '@/src/zod';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const SearchProductForm = () => {
  const router = useRouter();

  const handleSearch = (formData: FormData) => {
    const data = {
      search: formData.get('search'),
    };

    const result = SearchProductSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    router.push(`/admin/products/search?query=${result.data.search}`);
  };

  return (
    <form className="flex items-center gap-4" action={handleSearch}>
      <input
        type="text"
        name="search"
        placeholder="Search products..."
        className="bg-white border border-gray-300 font-medium rounded-md px-10 py-3 w-full"
      />

      <input
        type="submit"
        value="Search"
        className="bg-amber-500 text-white w-full text-xl px-10 py-3 font-medium rounded-md hover:bg-amber-600 transition cursor-pointer"
      />
    </form>
  );
};

export default SearchProductForm;
