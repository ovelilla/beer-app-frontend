// Icons
import {
  LuBeer,
  LuBookOpen,
  LuLogOut,
  LuLogIn,
  LuUserPlus2,
} from "react-icons/lu";

const loggedInNavigationMenuItems = [
  {
    icon: LuBeer,
    label: "Cervezas",
    path: "/cervezas",
    admin: true,
  },
  {
    icon: LuBookOpen,
    label: "Beerpedia",
    path: "/beerpedia",
    admin: false,
  },
  {
    icon: LuLogOut,
    label: "Logout",
    path: "/logout",
    admin: false,
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
