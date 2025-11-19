import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function AdminPage() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Panneau d'administration</h1>
      <p>Connecté en tant qu'admin: {user.mail}</p>
      <button onClick={logout}>Déconnexion</button>
      {/* Contenu admin ici */}
    </div>
  );
}

