import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";

const Home = lazy(() => import("../pages/Home"));
const HomeLayout = lazy(() => import("../layout/HomeLayout"));
const Signin = lazy(() => import("../pages/donordashboard/Signin"));
const Donate = lazy(() => import("../pages/donordashboard/Donate"));
const RequestFund = lazy(() => import("../pages/donordashboard/RequestFund"));
const ProjectDetails = lazy(() => import("../pages/dashboard/ProjectDetails"));
const AboutUs = lazy(() => import("../pages/About_us"));
const Dao = lazy(() => import("../pages/donordashboard/Dao"));
const DonorsDashboardLayout = lazy(() =>
  import("../layout/DonorsDashboardLayout")
);
const DonorsDashboard = lazy(() => import("../pages/donordashboard/dashboard"));
const DonorsProjects = lazy(() => import("../pages/donordashboard/Projects"));
const Organization = lazy(() => import("../pages/donordashboard/Organization"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
      </Route>
      <Route path="/dashboard" element={<DonorsDashboardLayout />}>
        <Route index element={<DonorsDashboard />} />
        <Route path="request_fund" element={<RequestFund />} />
        <Route path="projects" element={<DonorsProjects />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
        <Route path="donate" element={<Donate />} />
        <Route path="dao" element={<Dao />} />
        <Route path="organization" element={<Organization />} />
        <Route path="organization/:id" element={<ProjectDetails />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    </Route>
  )
);

const AllRoutes = () => {
  return (
    <div className="w-full mx-auto bg-white  min-h-[100vh] font-opensans max-w-[1440px]">
      <Toaster />
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default AllRoutes;
