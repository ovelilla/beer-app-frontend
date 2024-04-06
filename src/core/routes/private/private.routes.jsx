// Pages
import BeersPage from "@/features/private/beers/beers.page";
import FinderPage from "@/features/private/finder/finder.page";
import LogoutPage from "@/features/auth/logout/logout.page";

export const privateRoutes = [
  {
    path: "/logout",
    element: <LogoutPage />,
  },
  {
    path: "/buscador",
    element: <FinderPage />,
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
