import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { register } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register(username, password)) {
      navigate("/user");
    } else {
      setError("Ce nom d'utilisateur est déjà pris");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button style={styles.button} type="submit">
          S'inscrire
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <p>
        Déjà un compte ? <Link to="/login">Connectez-vous</Link>
      </p>
    </div>
  );
}

const styles = {
  container: { maxWidth: 400, margin: "auto", padding: 20, textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: 10 },
  input: { padding: 10, fontSize: 16 },
  button: { padding: 10, fontSize: 16, cursor: "pointer" },
};
