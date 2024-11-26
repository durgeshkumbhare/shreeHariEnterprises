import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import HomeLayout from "./pages/HomeLayout";
import About from "./pages/About";
import Landing from "./pages/Landing";
const Fertiliser = lazy(() => import("./pages/Fertiliser"));
const BioStimulatnt = lazy(()=> import ("./pages/BioStimulatnt"))
const BioPesticides = lazy(()=> import("./pages/BioPesticides"))
import BioStimulantSingleProduct from "./pages/BioStimulantSingleProduct";
import BioPesticideSingleProduct from "./pages/BioPesticideSingleProduct";
import FertiliserSingleProduct from "./pages/FertiliserSingleProduct";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/fertiliser/:productId",
          element: <FertiliserSingleProduct />,
        },
        {
          path: "/stimulant/:productId",
          element: <BioStimulantSingleProduct />,
        },
        {
          path: "/pesticide/:productId",
          element: <BioPesticideSingleProduct />,
        },
        {
          path: "/fertiliser",
          element: <Fertiliser />,
        },
        {
          path: "/biostimulant",
          element: <BioStimulatnt />,
        },
        {
          path: "/biopesticide",
          element: <BioPesticides />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
