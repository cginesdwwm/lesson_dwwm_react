import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LikesContext } from "../../context/LikesContext";

export default function Header({ userConnected, login, logout }) {
  const navigate = useNavigate();
  const { likedCount } = useContext(LikesContext);
  return (
    <header className="bg-white shadow-md p-4 flex flex-row justify-between items-center">
      <NavLink to="/">
        <span className="text-xl font-bold text-blue-500">BLOG 3000</span>
      </NavLink>
      {userConnected ? (
        <nav className="flex space-x-6 items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (logout) logout();
              navigate("/");
            }}
            className="text-gray-600 hover:text-black font-semibold"
          >
            Déconnexion
          </a>
          <a href="#">Profil</a>
          <div className="ml-2 text-sm text-gray-700">Likes: {likedCount}</div>
        </nav>
      ) : (
        <nav className="flex space-x-6">
          <NavLink
            to="/login"
            onClick={login}
            className="text-gray-600 hover:text-black font-semibold"
          >
            Connexion
          </NavLink>
          <NavLink
            to="/register"
            className="text-gray-600 hover:text-black font-semibold"
          >
            Inscription
          </NavLink>
        </nav>
      )}
    </header>
  );
}
