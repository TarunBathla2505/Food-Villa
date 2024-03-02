import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AboutUs from "./components/Header/aboutUs/AboutUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/error/Error.jsx";
import Contact from "./components/Header/contact/Contact.jsx";
import BodyComponent from "./components/body/BodyComponent.jsx";
import RestaurentDetails from "./components/body/Restaurents/details/RestaurentDetails.jsx";

//lazyloading, chunking,code splitting, dynamic building,onDemand loading, dynamic import
const Instamart = lazy(() => import("./components/Instamart.jsx"));
//upon on demand loading -> upon render ->suspence loading

//configuring router for react
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:id",
        element: <RestaurentDetails />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
