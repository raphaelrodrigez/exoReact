// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";
// import { AuthProvider } from "./AuthContext";

// export default function Login() {
//   const [formData, setFormData] = useState({
//     name: "",
//     mail: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const { user, login, logout } = useAuth();

//   function handleSubmit(e) {
//     e.preventDefault();
//     setError("");

//     if (!formData.name || !formData.mail) {
//       setError("Veuillez compléter tous les champs");
//       return;
//     }

//     const loginSuccess = login(formData);
    
//     if (loginSuccess) {
//       // Redirection différente selon le rôle
//       const redirectPath = formData.mail === "admin@example.com" 
//         ? "/admin" 
//         : "/dashboard";
//       navigate(redirectPath);
//     } else {
//       setError("Identifiants incorrects");
//     }
//   }

//   return (
//     <div>
//       <h2>Connexion</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Votre nom"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Votre email"
//           value={formData.mail}
//           onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
//         />
//         <button type="submit">Se connecter</button>
//       </form>
//     </div>
//   );
// }



import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";


export default function Login(){
    const [formData, setFormData] = useState({
        name: "",
        mail: "" 
    })
    const navigate = useNavigate()
    const {login} = useContext(AuthContext)
    function soumettre(e){
        e.preventDefault()
        if(formData.name === "" && formData.mail === ""){
            alert('veiller completer tout les champs')
            return
        }
        login(formData)
        navigate('/dashboard')
    }
    return(
        <div>
            <h2 >Formulaire</h2>
           <form onSubmit={soumettre}>
           <input type="text" placeholder="votre nom" onChange={(e)=>setFormData({name:e.target.value})}/>
            <input type="text" placeholder="votre mail" onChange={(e)=>setFormData({mail:e.target.value})}/>
            <button type="submit">Se connecter</button>
            </form>
        </div>
    )
}






































// import { useContext, useState } from "react";
// import { AuthContext } from "./AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: ""
//     })
//     const navigate = useNavigate()//optention de useNavigate
//    const { login } = useContext(AuthContext)
//    //ou soit ce code
// //    const authContext = useContext(AuthContext);
// //    const login = authContext.login;
   
//    const handleclick = (e) => {
//         e.preventDefault()
//         if(formData.name === "" && formData.email === ""){
//             alert('veiller completer tout les champs')
//             return
//         }
//         login(formData)
//         navigate("/dashboard")//redirection vers une route relative
//     }
//     return (
//         <div>
//             <h2>Connexion</h2>
//             <form onSubmit={handleclick}>
//                 <input type="texe" placeholder="votre nom" onChange={(e) => setFormData({ name: e.target.value })} />
//                 <input type="texe" placeholder="votre email" onChange={(e) => setFormData({ email: e.target.value })} />
//                 <button type="submit">connexion</button>
//             </form>
//         </div>
//     )
// }