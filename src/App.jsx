import { Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";

function App() {
  const [user, setUser] = useState(false);

  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(false);
  };

  return (
    <div className="h-screen flex flex-col">
      <Header userConnected={user} login={login} logout={logout} />
      <main className="flex-1 flex items-center justify-center">
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
}

export default App;
