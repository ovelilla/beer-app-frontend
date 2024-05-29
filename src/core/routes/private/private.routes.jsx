// Pages
import BeerPage from "@/features/private/beer/beer.page";
import BeersPage from "@/features/private/beers/beers.page";
import BeertionaryPage from "@/features/private/beertionary/beertionary.page";
import BeertionaryAdminPage from "@/features/private/beertionary-admin/beertionary-admin.page";
import EntryPage from "@/features/private/entry/entry.page";
import FavoritePage from "@/features/private/favorite/favorite.page";
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
    path: "/beertionary",
    element: <BeertionaryPage />,
  },
  {
    path: "/beertionary/:word",
    element: <EntryPage />,
  },
  {
    path: "/beertionary-admin",
    element: <BeertionaryAdminPage />,
    admin: true,
  },
  {
    path: "/cervezas-admin",
    element: <BeersPage />,
    admin: true,
  },
  {
    path: "/favoritos",
    element: <FavoritePage />,
  },
  {
    path: "/beer/:id",
    element: <BeerPage />,
  },
];
