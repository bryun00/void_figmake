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
import WorkDetailNhPayPage from "./pages/WorkDetailNhPayPage";
import WorkDetailHanaBankPage from "./pages/WorkDetailHanaBankPage";
import WorkDetailIpnosPage from "./pages/WorkDetailIpnosPage";
import WorkDetailPetitElinWarmerPage from "./pages/WorkDetailPetitElinWarmerPage";
import WorkDetailPetitElinEclaveCushionPage from "./pages/WorkDetailPetitElinEclaveCushionPage";
import WorkDetailPetitElinSuperleavesPage from "./pages/WorkDetailPetitElinSuperleavesPage";
import WorkDetailPetitElinMobileAppEventPage from "./pages/WorkDetailPetitElinMobileAppEventPage";
import WorkDetailPetitElinLunarEventPage from "./pages/WorkDetailPetitElinLunarEventPage";
import WorkDetailPetitElinFrodogiPage from "./pages/WorkDetailPetitElinFrodogiPage";
import WorkDetailPetitElinEtudePage from "./pages/WorkDetailPetitElinEtudePage";
import WorkDetailPetitElinEvavivaPage from "./pages/WorkDetailPetitElinEvavivaPage";
import WorkDetailPetitElinMontraumPage from "./pages/WorkDetailPetitElinMontraumPage";

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
    path: "/work/all",
    Component: WorkPage,
  },
  {
    path: "/work/marketing",
    Component: WorkPage,
  },
  {
    path: "/work/etc",
    Component: WorkPage,
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
  {
    path: "/work/nh-pay",
    Component: WorkDetailNhPayPage,
  },
  {
    path: "/work/hana-bank",
    Component: WorkDetailHanaBankPage,
  },
  {
    path: "/work/ipnos",
    Component: WorkDetailIpnosPage,
  },
  {
    path: "/work/petit-elin-warmer",
    Component: WorkDetailPetitElinWarmerPage,
  },
  {
    path: "/work/petit-elin-eclave-cushion",
    Component: WorkDetailPetitElinEclaveCushionPage,
  },
  {
    path: "/work/petit-elin-superleaves",
    Component: WorkDetailPetitElinSuperleavesPage,
  },
  {
    path: "/work/petit-elin-mobile-app-event",
    Component: WorkDetailPetitElinMobileAppEventPage,
  },
  {
    path: "/work/petit-elin-lunar-event",
    Component: WorkDetailPetitElinLunarEventPage,
  },
  {
    path: "/work/petit-elin-frodogi",
    Component: WorkDetailPetitElinFrodogiPage,
  },
  {
    path: "/work/petit-elin-etude",
    Component: WorkDetailPetitElinEtudePage,
  },
  {
    path: "/work/petit-elin-evaviva",
    Component: WorkDetailPetitElinEvavivaPage,
  },
  {
    path: "/work/petit-elin-montraum",
    Component: WorkDetailPetitElinMontraumPage,
  },
], { basename: import.meta.env.BASE_URL });
