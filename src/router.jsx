/*
  router.jsx
  - Définit les routes de l'application à l'aide de createBrowserRouter.
  - Chaque route a un `path` (URL) et un `element` (composant React à afficher).
  - Important pour débutant : les chemins de route sont sensibles à la casse par
    défaut dans react-router v6+ (donc `/blog` != `/Blog`).
    Pour que l'URL `/Blog` fonctionne aussi, on ajoute un alias avec le même composant.
*/

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Blog from "./pages/Blog/Blog";
import Register from "./pages/Forms/Register";
import Login from "./pages/Forms/Login";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // Composant affiché si une route n'existe pas ou erreur
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      // Alias pour permettre d'accéder à la page via '/Blog' (majuscules)
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
