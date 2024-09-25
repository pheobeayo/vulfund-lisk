import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";









const Home = lazy(() => import("../pages/Home"));
const HomeLayout = lazy(() => import('../layout/HomeLayout'));
const Signin = lazy(() => import('../pages/Signin'))
const DashboardLayout = lazy(() => import('../layout/DashboardLayout'));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Projects = lazy(() => import("../pages/dashboard/Projects"));
const Donate = lazy(() => import("../pages/donordashboard/Donate"));
const RequestFund = lazy(() => import("../pages/dashboard/RequestFund"));
const ProjectDetails = lazy(() => import("../pages/dashboard/ProjectDetails"));
const AboutUs = lazy(() => import("../pages/About_us"));
const Dao = lazy(() => import("../pages/donordashboard/Dao"));
const DonorsDashboardLayout = lazy(() => import('../layout/DonorsDashboardLayout'));
const DonorsDashboard = lazy(() => import('../pages/donordashboard/dashboard'));
const DonorsProjects = lazy(() => import('../pages/donordashboard/Projects'));


const router = createBrowserRouter(createRoutesFromElements(

  <Route>
    <Route path="/" element={<HomeLayout />} >
      <Route index element={<Home />} />
      <Route path='/about_us' element={<AboutUs />} />
      <Route path='/sign_in' element={<Signin />} />
    </Route>
    <Route path='/dashboard' element={<DashboardLayout />} >
      <Route index element={<Dashboard />} />
      <Route path='projects' element={<Projects />} />
      <Route path='request_fund' element={<RequestFund />} />
      <Route path="project-details" element={<ProjectDetails />} />
    </Route>
    
    <Route path='/donorsdashboard' element={<DonorsDashboardLayout />} >
      <Route index element={<DonorsDashboard />} />
      <Route path='projects' element={<DonorsProjects />} />
      <Route path='donate' element={<Donate />} />
      <Route path='dao' element={<Dao />} />
    </Route>
  </Route>

))



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