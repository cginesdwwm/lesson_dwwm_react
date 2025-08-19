import { Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [user, setUser] = useState(false);

  const login = () => {
    setUser(true);
  };

  return (
    <div className="h-screen flex flex-col">
      <Header userConnected={user} login={login} />
      <main className="flex-1 flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
