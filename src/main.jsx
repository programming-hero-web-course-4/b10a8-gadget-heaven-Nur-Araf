import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import AllProducts from "./components/products/AllProducts.jsx";
import Laptop from "./components/products/Laptop.jsx";
import Phone from "./components/products/Phone.jsx";
import Accessories from "./components/products/Accessories.jsx";
import Watches from "./components/products/Watches.jsx";
import Macbooks from "./components/products/Macbook.jsx";
import Iphone from "./components/products/Iphone.jsx";
import Details from "./components/Details.jsx";
import Statistics from "./components/statistics/Statistics.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Cart from "./components/dashboard/Cart.jsx";
import WiseList from "./components/dashboard/WiseList.jsx";
import AssetsProvider from "./components/store/Provider.jsx";
import Discount from "./components/discount/Discount.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AllProducts />,
      },
      {
        path: "Laptop",
        element: <Laptop />,
      },
      {
        path: "Phone",
        element: <Phone />,
      },
      {
        path: "Accessories",
        element: <Accessories />,
      },
      {
        path: "Smart-Watches",
        element: <Watches />,
      },
      {
        path: "MacBook",
        element: <Macbooks />,
      },
      {
        path: "iPhone",
        element: <Iphone />,
      },
    ],
  },
  {
    path: "/product-details/:id",
    element: <Details />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Navigate to="/dashboard/cart" replace /> },
      {
        path: "/dashboard/cart",
        element: <Cart />,
      },
      {
        path: "/dashboard/wishlist",
        element: <WiseList />,
      },
    ],
  },
  {
    path: "/statistics",
    element: <Statistics />,
  },
  {
    path: "/discount",
    element: <Discount />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AssetsProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AssetsProvider>
  </StrictMode>
);
