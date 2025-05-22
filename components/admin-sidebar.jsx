import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { CiSquarePlus } from "react-icons/ci";

const AdminSidebar = () => {
  const routes = [
    {
      title: "Dashboard",
      url: "/admin",
      icon: RiDashboardFill,
    },
    {
      title: "Posts",
      url: "/admin/posts",
      icon: BsFillJournalBookmarkFill,
    },
    {
      title: "Add Post",
      url: "/admin/add-post",
      icon: CiSquarePlus,
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Hello Admin</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes?.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AdminSidebar;
