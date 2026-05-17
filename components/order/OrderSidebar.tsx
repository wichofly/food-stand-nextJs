import { prisma } from '@/src/lib/prisma';

const getCategories = async () => {
  return await prisma.category.findMany();
};

const OrderSidebar = () => {
  const categories = getCategories();
  console.log(categories);

  return (
    <aside className="md:w-72 md:h-screen p-5 bg-white">OrderSidebar</aside>
  );
};

export default OrderSidebar;
