import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import Home from "./Components/Home.jsx";
import Footer from "./Components/Footer.jsx";

import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index path="/" element={<Login />} />
      <Route index path="/signup" element={<Signup />} />
      <Route index path="/home" element={<Home />} />
      {/* <Route index path="/footer" element={<Footer />} /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
