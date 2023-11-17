import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Auth, Main } from "./pages";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/auth", element: <Auth /> },
    ],
  },
]);

export default router;
