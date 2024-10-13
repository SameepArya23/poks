import Product from "@/pages/product/product";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import SuspenseContainer from "./suspense";
const Layout = lazy(() => import("../components/layout/layout"));
const SignIn = lazy(() => import("../pages/auth/signIn"));
const SignUp = lazy(() => import("../pages/auth/signup"));
const Home = lazy(() => import("../pages/home/home"));
const Listing = lazy(() => import("../pages/listing/listing"));

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
        element: (
          <SuspenseContainer>
            <Home />
          </SuspenseContainer>
        ),
      },
      {
        path: "/products/:prod",
        element: (
          <SuspenseContainer>
            <Product />
          </SuspenseContainer>
        ),
      },
      {
        path: "/products",
        element: (
          <SuspenseContainer>
            <Listing />
          </SuspenseContainer>
        ),
      },
    ],
  },
]);

export default router;
