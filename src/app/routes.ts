import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ContactPageRoute from "./pages/ContactPage";
import WorkDetailIBKPage from "./pages/WorkDetailIBKPage";
import WorkDetailBKPage from "./pages/WorkDetailBKPage";
import WorkDetailAMFPage from "./pages/WorkDetailAMFPage";
import WorkDetailB2GPage from "./pages/WorkDetailB2GPage";
import WorkDetailPetitElinBrandPage from "./pages/WorkDetailPetitElinBrandPage";
import WorkDetailPetitElinOnlinePage from "./pages/WorkDetailPetitElinOnlinePage";
import WorkDetailLSPage from "./pages/WorkDetailLSPage";

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
  {
    path: "/work/ibk",
    Component: WorkDetailIBKPage,
  },
  {
    path: "/work/bk",
    Component: WorkDetailBKPage,
  },
  {
    path: "/work/amf",
    Component: WorkDetailAMFPage,
  },
  {
    path: "/work/b2g",
    Component: WorkDetailB2GPage,
  },
  {
    path: "/work/petit-elin-brand",
    Component: WorkDetailPetitElinBrandPage,
  },
  {
    path: "/work/petit-elin-online",
    Component: WorkDetailPetitElinOnlinePage,
  },
  {
    path: "/work/ls",
    Component: WorkDetailLSPage,
  },
], { basename: import.meta.env.BASE_URL });
