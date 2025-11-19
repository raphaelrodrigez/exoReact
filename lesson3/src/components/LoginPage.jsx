// export default function LoginPage(){
//     <h1 className="text-4xl">Login Page</h1>
// }
// import React, { useState, useContext } from "react";
// import { UserContext } from "../context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";

// export default function LoginPage() {
//   const { login } = useContext(UserContext);
//   const [form, setForm] = useState({ username: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (login(form)) {
//       navigate("/"); // Redirige vers la page d'accueil
//     } else {
//       setError("Identifiants invalides !");
//     }
//   };

//   return (
//     <div>
//       <h1>Connexion</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="username"
//           placeholder="Nom d'utilisateur"
//           value={form.username}
//           onChange={handleChange}
//         />
//         <input
//           name="password"
//           type="password"
//           placeholder="Mot de passe"
//           value={form.password}
//           onChange={handleChange}
//         />
//         <button type="submit">Se connecter</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <p>
//         Pas de compte ? <Link to="/register">Inscrivez-vous</Link>
//       </p>
//     </div>
//   );
// }

import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      if (username === "admin") navigate("/admin");
      else navigate("/user");
    } else {
      setError("Nom d’utilisateur ou mot de passe incorrect");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Connexion</h2>
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
          Se connecter
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <p>
        Pas de compte ? <Link to="/register">Inscrivez-vous</Link>
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

// import React, { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { Navigate } from "react-router-dom";

// export default function LoginPage(){
//   const {login} = useContext(AuthContext)
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const [msg, setMsg] = useState(null)

//   const handleSubmit =(e)=>{
//      e.preventDefault()
//      if(login(username, password)){
//       if(username === "admin")return <Navigate to = "/admin"/>
//       else <Navigate to= "/user"/>
//      }else{
//       return setMsg("le mot de passe ou le nom de l'utilisateur est incorrecte")
//      }
//   }

//   return (
//     <div>
//       <h2>Connexion</h2>
//       <p>{msg}</p>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="votre nom d'utilisateur" value={username} onChange={(e)=>setUsername(e.target.value)} />
//         <input type="password" placeholder="votre password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//         <button>Connexion</button>

//       </form>
//     </div>
//   )
// }