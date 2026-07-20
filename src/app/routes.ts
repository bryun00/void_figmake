import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ContactPageRoute from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/work",
    Component: WorkPage,
  },
  {
    path: "/contact",
    Component: ContactPageRoute,
  },
]);
