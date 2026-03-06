import DashboardHeader from "@/components/DashboardComponents/DashboardHeader";
import { DashboardNavUsers } from "@/components/DashboardComponents/DashboardNavUsers";
import { DashboardNavMain } from "@/components/DashboardComponents/DashboardNavMain";
import { DashboardNavSecondary } from "@/components/DashboardComponents/DashboardNavSecondary";
import { DashboardNavUserInfo } from "@/components/DashboardComponents/DashboardNavUserInfo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconUser,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import { Outlet } from "react-router";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      name: "Dashboard",
      url: "/dashboard-page",
      icon: IconDashboard,
    },
    {
      name: "Lifecycle",
      url: "#",
      icon: IconListDetails,
    },
    {
      name: "Analytics",
      url: "#",
      icon: IconChartBar,
    },
    {
      name: "Projects",
      url: "#",
      icon: IconFolder,
    },
    {
      name: "Team",
      url: "#",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],

  documents: [
    {
      name: "Role Management",
      url: "/role-management-page",
      icon: IconUsers,
    },
    {
      name: "User Management",
      url: "/user-management-page",
      icon: IconUser,
    },
  ],

  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
  ],
};
const DashboardLayout = () => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      {/* <AppSidebar variant="inset" /> */}
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <Sidebar collapsible="offcanvas">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <IconInnerShadowTop />
                    <span className="text-base font-semibold">
                      BNB Inc. BackOffice
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <DashboardNavMain items={data.navMain} />
            <DashboardNavUsers items={data.documents} />
            <DashboardNavSecondary
              items={data.navSecondary}
              className="mt-auto"
            />
          </SidebarContent>
          <SidebarFooter>
            <DashboardNavUserInfo user={data.user} />
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <SidebarInset>
          <DashboardHeader />
          <Outlet />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
