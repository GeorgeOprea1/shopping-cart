import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import HomeComponent from "./HomeComponent";
import SignUpComponent from "./SignUpComponent";
import AboutComponent from "./AboutComponent";

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
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
