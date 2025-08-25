import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LikesProvider } from "./context/LikesContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LikesProvider>
      <RouterProvider router={router}></RouterProvider>
    </LikesProvider>
  </StrictMode>
);
