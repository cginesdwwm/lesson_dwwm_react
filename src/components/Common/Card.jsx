import React, { useContext } from "react";
import { LikesContext } from "../../context/LikesContext";

export default function Card({ post }) {
  const { likedIds, toggleLike } = useContext(LikesContext);
  const liked = likedIds.includes(post.id);

  return (
    <article className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        src={post.image}
        alt={post.titre}
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post.titre}</div>
        <p className="text-gray-700 text-base">{post.texte}</p>
      </div>
      <div className="px-6 pb-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">{post.date}</span>
        <button
          onClick={() => toggleLike(post.id)}
          className={`px-3 py-1 rounded ${
            liked ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
        >
          {liked ? "♥" : "♡"}
        </button>
      </div>
    </article>
  );
}
