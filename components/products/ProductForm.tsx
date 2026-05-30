const ProductForm = () => {
  return (
    <>
      <div className="space-y-2">
        <label htmlFor="name" className="text-slate-800">
          Name:
        </label>
        <input
          id="name"
          type="text"
          placeholder="Product Name"
          className="block w-full mt-1 px-4 py-2 bg-slate-100 border border-slate-300 rounded-md"
        />
      </div>

      <div className="space-y-2 mt-4">
        <label htmlFor="price" className="text-slate-800">
          Price:
        </label>
        <input
          id="price"
          type="text"
          placeholder="Product Price"
          className="block w-full mt-1 px-4 py-2 bg-slate-100 border border-slate-300 rounded-md"
        />
      </div>

      <div className="space-y-2 mt-4">
        <label htmlFor="category" className="text-slate-800">
          Category:
        </label>
        <select
          id="category"
          className="block w-full mt-1 px-4 py-2 bg-slate-100 border border-slate-300 rounded-md"
        >
          <option value="">Select a category</option>
        </select>
      </div>
    </>
  );
};

export default ProductForm;
