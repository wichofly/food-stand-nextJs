import { Category } from '@/src/generated/prisma/client';
import Image from 'next/image';
import Link from 'next/link';

type CategoryIconProps = {
  category: Category;
};

const CategoryIcon = ({ category }: CategoryIconProps) => {
  return (
    <div
      className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b cursor-pointer hover:bg-gray-100 transition-colors`}
    >
      <div className="relative size-16">
        <Image
          src={`/icon_${category.slug}.svg`}
          alt={`Image of category: ${category.name}`}
          fill
        />
      </div>

      <Link href={`/order/${category.slug}`} className="text-lg font-medium">
        {category.name}
      </Link>
    </div>
  );
};

export default CategoryIcon;
