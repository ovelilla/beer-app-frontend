// Pages
import ErrorPage from "@/features/error/error.page";

export const publicRoutes = [
  {
    path: "/*",
    element: <ErrorPage />,
  },
];
