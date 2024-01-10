import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import HomeComponent from "./HomeComponent";
import SignUpComponent from "./SignUpComponent";
import AboutComponent from "./AboutComponent";
import ProductsComponent from "./ProductsComponent";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/home",
      element: <HomeComponent />,
    },
    {
      path: "/sign",
      element: <SignUpComponent />,
    },
    {
      path: "/about",
      element: <AboutComponent />,
    },
    {
      path: "/products",
      element: <ProductsComponent />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
