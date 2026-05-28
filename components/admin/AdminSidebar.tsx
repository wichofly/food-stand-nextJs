import Logo from "../ui/Logo";

const adminNavigation = [
  { url: '/admin/orders', name: 'Orders', blank: false },
  { url: '/admin/products', name: 'Products', blank: false },
  { url: '/admin/coffee', name: 'View Kiosk', blank: true },
];

const AdminSidebar = () => {
  return (
    <>
      <div className="space-y-3">
        <Logo />
        <p className="mt-5 uppercase font-semibold text-sm text-gray-600 text-center">
          Admin Panel
        </p>

        <nav className="flex flex-col"></nav>
      </div>
    </>
  );
};

export default AdminSidebar;
