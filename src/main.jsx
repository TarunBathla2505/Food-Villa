import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AboutUs from "./components/Header/aboutUs/AboutUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/error/Error.jsx";
import Contact from "./components/Header/contact/Contact.jsx";
import BodyComponent from "./components/body/BodyComponent.jsx";
import RestaurentDetails from "./components/body/Restaurents/details/RestaurentDetails.jsx";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
