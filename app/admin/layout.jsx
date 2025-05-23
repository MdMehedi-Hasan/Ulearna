import AdminSidebar from "@/components/admin-sidebar";
import Navbar from "@/components/common/adminNavbar";
import { SidebarProvider } from "@/components/ui/sidebar";

const AdminLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <div className="w-full">
        <Navbar />
        {children}
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
