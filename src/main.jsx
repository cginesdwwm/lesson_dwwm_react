/*
  Fichier d'entrée de l'application React.
  - createRoot: point d'attache de l'application dans le DOM (élément #root).
  - StrictMode: mode de développement React qui active des vérifications supplémentaires.
  - RouterProvider: fournis les routes (react-router) à l'application.

  Commentaires: ce fichier ne contient pas de logique métier, il assemble simplement
  les fournisseurs (providers) et le routeur pour rendre l'application.
*/

import { StrictMode } from "react"; // Utilisé pour activer des contrôles en dev
import { createRoot } from "react-dom/client"; // API d'attachement pour React 18+
import "./index.css"; // Styles globaux de l'application
import { RouterProvider } from "react-router-dom"; // Fournit le router créé dans router.jsx
import { router } from "./router"; // Définition des routes de l'app

// createRoot attache l'application à l'élément DOM avec l'id 'root'
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  // </StrictMode>
);
