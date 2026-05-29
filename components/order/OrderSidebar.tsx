import { prisma } from '@/src/lib/prisma';
import CategoryIcon from '../ui/CategoryIcon';
import Logo from '../ui/Logo';

const getCategories = async () => {
  return await prisma.category.findMany();
};

const OrderSidebar = async () => {
  const categories = await getCategories();

  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <Logo />

      <p className="my-5 uppercase font-semibold text-sm text-gray-600 text-center">
        Categories
      </p>

      <nav>
        {categories.map((category) => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>
    </aside>
  );
};

export default OrderSidebar;
