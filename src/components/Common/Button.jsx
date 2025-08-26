/*
  Button.jsx
  - Composant bouton réutilisable.
  - `variants` fournit des classes utilitaires (ex: couleurs) définies dans
    `client/src/constants/index.js`.
  - Props:
    - color: clé pour choisir la variante de style (ex: 'primary')
    - text: texte affiché à l'intérieur du bouton
*/

import { variants } from "../../constants"; // objets de classes CSS

export default function Button({ color, text }) {
  // On compose les classes utilitaires: taille fixe + variante couleur
  return (
    <button className={`w-[200px] px-4 py-2 rounded-2xl ${variants[color]}`}>
      {text}
    </button>
  );
}
