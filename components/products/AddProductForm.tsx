'use client';

import { ProductSchema } from '@/src/zod';
import { toast } from 'react-toastify';

const AddProductForm = ({ children }: { children: React.ReactNode }) => {
  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get('name'),
      price: formData.get('price'),
      categoryId: formData.get('categoryId'),
    };

    const result = ProductSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });

      return;
    }

    console.log(result.data);
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      <form className="space-y-5" action={handleSubmit}>
        {children}

        <input
          type="submit"
          value="Create Product"
          className="bg-amber-500 text-white w-full mt-5 px-4 py-2 uppercase font-medium rounded-md hover:bg-amber-600 transition-colors cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AddProductForm;
