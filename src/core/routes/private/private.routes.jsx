// Pages
import BeersPage from "@/features/private/beers/beers.page";
import LogoutPage from "@/features/auth/logout/logout.page";

export const privateRoutes = [
  {
    path: "/logout",
    element: <LogoutPage />,
  },
  {
    path: "/dashboard",
    element: <div>Dashboard</div>,
  },
  {
    path: "/beerpedia",
    element: <div>Beerpedia</div>,
  },
  {
    path: "/cervezas",
    element: <BeersPage />,
  },
];
