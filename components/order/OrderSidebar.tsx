import { prisma } from '@/src/lib/prisma';
import CategoryIcon from '../ui/CategoryIcon';

const getCategories = async () => {
  return await prisma.category.findMany();
};

const OrderSidebar = async () => {
  const categories = await getCategories();

  return (
    <aside className="md:w-72 md:h-screen p-5 bg-white">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <nav>
        {categories.map((category) => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>
    </aside>
  );
};

export default OrderSidebar;
