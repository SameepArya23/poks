import Product from "@/pages/product/product";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("../components/layout/layout"));
const SignIn = lazy(() => import("../pages/auth/signIn"));
const SignUp = lazy(() => import("../pages/auth/signup"));
const Home = lazy(() => import("../pages/home/home"));
// const Product = lazy(() => import("../pages/product/product"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/products/:prod",
        element: <Product />,
      },
    ],
  },
]);

export default router;
