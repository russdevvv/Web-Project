import { lazy } from "react";
import type { RouteObject } from "react-router";
const NoAccess = lazy(() => import("@/pages/NoAccess"));
const LandingLayout = lazy(() => import("@/layouts/LandingLayout"));
const LoginPage = lazy(() => import("@/pages/LandingPages/LoginPage"));
const ForgotPasswordPage = lazy(
  () => import("@/pages/LandingPages/ForgotPasswordPage"),
);

const DashboardLayout = lazy(() => import("@/layouts/DashboardLayout"));
const DashboardPage = lazy(
  () => import("@/pages/DashboardPages/DashboardPage"),
);
const RoleManagementPage = lazy(
  () => import("@/pages/UserManagementPages/RolesManagementPage"),
);
const UserManagementPage = lazy(
  () => import("@/pages/UserManagementPages/UserManagementPage"),
);
export const routers: RouteObject[] = [
  {
    path: "*",
    element: <NoAccess />,
  },

  {
    element: <LandingLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/forgot-password-page",
        element: <ForgotPasswordPage />,
      },
    ],
  },

  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard-page",
        element: <DashboardPage />,
      },
      {
        path: "/role-management-page",
        element: <RoleManagementPage />,
      },
      {
        path: "/user-management-page",
        element: <UserManagementPage />,
      },
    ],
  },
];
