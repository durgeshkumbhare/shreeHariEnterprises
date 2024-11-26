import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Landing from "./pages/Landing";
import Fertiliser from "./pages/Fertiliser";
import BioStimulatnt from "./pages/BioStimulatnt";
import BioPesticides from "./pages/BioPesticides";

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
          path: "/product/:productId",
          element: <About />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
        {
          path: '/fertiliser',
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
