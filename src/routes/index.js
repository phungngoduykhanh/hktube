import { HeaderOnly } from "~/layouts";

import Home from "~/pages/Home";
import Subscriptions from "~/pages/Subscriptions";
import Shorts from "~/pages/Shorts";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import Profile from "~/pages/Profile";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Subscriptions", component: Subscriptions },
  { path: "/@:id", component: Profile },
  { path: "/Shorts", component: Shorts },
  { path: "/Upload", component: Upload, layout: HeaderOnly },
  { path: "/Search", component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
