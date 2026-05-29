import AdminSidebar from '@/components/admin/AdminSidebar';
import ToastNotification from '@/components/ui/ToastNotification';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="md:flex">
        <aside className="md:w-72 md:h-screen bg-white">
          <AdminSidebar />
        </aside>

        <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
          {children}
        </main>
      </div>

      <ToastNotification />
    </>
  );
};  

export default AdminLayout;
