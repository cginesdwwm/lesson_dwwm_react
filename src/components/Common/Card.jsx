/*
  Card.jsx
  - Affiche un article (image, titre, texte, date) et un bouton "like".
  - Utilise LikesContext pour partager l'état des likes entre les composants.
  - Props:
    - post: objet article { id, titre, texte, image, date }
*/

import React, { useContext } from "react";
import { LikesContext } from "../../context/LikesContext"; // contexte centralisé pour les likes

export default function Card({ post }) {
  // on récupère les ids likés et la fonction toggle depuis le contexte
  const { likedIds, toggleLike } = useContext(LikesContext);
  const liked = likedIds.includes(post.id); // true si l'utilisateur a liké cet article

  return (
    <article className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      {/* Image de l'article */}
      <img
        src={post.image}
        alt={post.titre}
        className="w-full h-48 object-cover"
      />

      {/* Titre et texte */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post.titre}</div>
        <p className="text-gray-700 text-base">{post.texte}</p>
      </div>

      {/* Footer de la carte: date + bouton like */}
      <div className="px-6 pb-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">{post.date}</span>

        {/* Le bouton appelle toggleLike(post.id) pour basculer l'état */}
        <button
          onClick={() => toggleLike(post.id)}
          className={`px-3 py-1 rounded ${
            liked ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
        >
          {/* coeur rempli ou vide selon l'état */}
          {liked ? "♥" : "♡"}
        </button>
      </div>
    </article>
  );
}
