// Icons
import {
  LuBeer,
  LuBookOpen,
  LuLogIn,
  LuSearch,
  LuUserPlus2,
} from "react-icons/lu";

const loggedInNavigationMenuItems = [
  {
    icon: LuSearch,
    label: "Buscador",
    path: "/buscador",
    admin: false,
  },
  {
    icon: LuBeer,
    label: "Cervezas Admin",
    path: "/cervezas-admin",
    admin: true,
  },
  {
    icon: LuBookOpen,
    label: "Beertionary",
    path: "/beertionary",
    admin: false,
  },
  {
    icon: LuBookOpen,
    label: "Beertionary Admin",
    path: "/beertionary-admin",
    admin: true,
  },
];

const loggedOutNavigationMenuItems = [
  {
    icon: LuLogIn,
    label: "Login",
    path: "/login",
    admin: false,
  },
  {
    icon: LuUserPlus2,
    label: "Registro",
    path: "/registro",
    admin: false,
  },
];

const constants = {
  LOGGED_IN_NAVIGATION_MENU_ITEMS: loggedInNavigationMenuItems,
  LOGGED_OUT_NAVIGATION_MENU_ITEMS: loggedOutNavigationMenuItems,
  NAVIGATION_MENU_DESKTOP_PROPS: {
    fullWidth: false,
    itemsAlignment: "left",
    className: "hidden md:flex",
    orientation: "horizontal",
  },
  NAVIGATION_MENU_MOBILE_PROPS: {
    fullWidth: true,
    itemsAlignment: "left",
    orientation: "vertical",
  },
};

export default constants;
