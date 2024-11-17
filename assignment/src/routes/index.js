/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Using self-closing tag
    children: [
      {
        path: "",
        element: <HomePage /> // Using self-closing tag
      }
    ]
  }
]);

export default router;
