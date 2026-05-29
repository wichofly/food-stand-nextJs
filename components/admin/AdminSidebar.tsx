import Logo from '../ui/Logo';
import AdminRoute from './AdminRoute';

const adminNavigation = [
  { url: '/admin/orders', text: 'Orders', blank: false },
  { url: '/admin/products', text: 'Products', blank: false },
  { url: '/order/coffee', text: 'View Kiosk', blank: false },
];

const AdminSidebar = () => {
  return (
    <>
      <div className="space-y-3">
        <Logo />
        <p className="mt-5 uppercase font-semibold text-sm text-gray-600 text-center">
          Admin Panel
        </p>

        <nav className="flex flex-col">
          {adminNavigation.map((link) => (
            <AdminRoute key={link.url} link={link} />
          ))}
        </nav>
      </div>
    </>
  );
};

export default AdminSidebar;
