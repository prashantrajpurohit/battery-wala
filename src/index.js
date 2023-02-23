import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Finder } from "./finder";
import { About } from "./About";
import { Products } from "./ourproduct";
import Bdealer from "./dealer";
import { UserLogin } from "./login";
import { Support } from "./support";
import { UserRegister } from "./Register";
import { Body } from "./body";

const root = ReactDOM.createRoot(document.getElementById("root"));

const routing=createBrowserRouter([
  {
    path: "/",
    element: <App />,
  
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/batteryFinder",
        element: <Finder />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/dealer",
        element: <Bdealer />,
      },
      {
        path: "/login",
        element: <UserLogin />,
      },
      {
        path: "/help",
        element: <Support />,
      },
      {
        path: "/register",
        element: <UserRegister />,
      },
    ],
  },
]);

root.render(
    <RouterProvider router={routing} />
);

