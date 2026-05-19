'use client';

import type { Category } from '@/src/generated/prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type CategoryIconProps = {
  category: Category;
};

const CategoryIcon = ({ category }: CategoryIconProps) => {
  const params = useParams<{ category: string }>();
  const href = `/order/${category.slug}`;
  const isActive = params.category === category.slug;

  return (
    <Link
      href={href}
      className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b cursor-pointer hover:bg-gray-100 transition-colors ${
        isActive ? 'bg-gray-100' : ''
      }`}
    >
      <div className="relative size-16">
        <Image
          src={`/icon_${category.slug}.svg`}
          alt={`Image of category: ${category.name}`}
          fill
        />
      </div>

      <span className="text-lg font-medium">{category.name}</span>
    </Link>
  );
};

export default CategoryIcon;
