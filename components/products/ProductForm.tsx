import { prisma } from '@/src/lib/prisma';
import ImageUpload from './ImageUpload';

const getCategories = async () => {
  return await prisma.category.findMany();
};

const ProductForm = async () => {
  const categories = await getCategories();

  return (
    <>
      <div className="space-y-2">
        <label htmlFor="name" className="text-slate-800">
          Name:
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Product Name"
          className="block w-full px-4 py-2 bg-slate-100 border border-slate-300 rounded-md"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="price" className="text-slate-800">
          Price:
        </label>
        <input
          id="price"
          name="price"
          type="text"
          placeholder="Product Price"
          className="block w-full px-4 py-2 bg-slate-100 border border-slate-300 rounded-md"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="text-slate-800">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Product Description"
          className="block w-full px-4 py-2 bg-slate-100 border border-slate-300 rounded-md"
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="categoryId" className="text-slate-800">
          Category:
        </label>
        <select
          id="categoryId"
          name="categoryId"
          className="block w-full px-4 py-2 bg-slate-100 border border-slate-300 rounded-md"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <ImageUpload />
    </>
  );
};

export default ProductForm;
