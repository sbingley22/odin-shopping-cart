import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Shop from "./Shop"

const Router = () => {
    const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { 
          path: "shop", 
          element: <Shop />,
        },
      ]
    },
  ])

  return <RouterProvider router={router} />;
};

export default Router;