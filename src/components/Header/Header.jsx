import { NavLink, useNavigate } from "react-router-dom";

export default function Header({ userConnected, login, logout }) {
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow-md p-4 flex flex-row justify-between items-center">
      <NavLink to="/">
        <span className="text-xl font-bold text-blue-500">BLOG 3000</span>
      </NavLink>
      {userConnected ? (
        <nav className="flex space-x-6 items-center">
          <NavLink
            to="/"
            onClick={logout}
            className="text-gray-600 hover:text-black font-semibold"
          >
            Déconnexion
          </NavLink>
          <a href="#">Profil</a>
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
