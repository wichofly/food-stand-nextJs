'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type AdminRouteProps = {
  link: {
    url: string;
    text: string;
    blank: boolean;
  };
};

const AdminRoute = ({ link }: AdminRouteProps) => {
  const pathname = usePathname();
  const isActive = pathname === link.url || pathname.startsWith(`${link.url}/`);

  return (
    <Link
      href={link.url}
      target={link.blank ? '_blank' : undefined}
      className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b cursor-pointer hover:bg-gray-100 transition-colors ${
        isActive ? 'bg-gray-100' : ''
      }`}
    >
      {link.text}
    </Link>
  );
};

export default AdminRoute;
