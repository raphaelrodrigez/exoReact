import React, { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const authorizedUsers = [
    { name: "Admin", mail: "admin@example.com", role: "admin" },
    { name: "User", mail: "user@example.com", role: "user" },
  ];

  const login = (credentials) => {
    const foundUser = authorizedUsers.find(
      u => u.mail === credentials.mail && u.name === credentials.name
    );
    
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Créez un hook personnalisé pour utiliser le contexte
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé dans un AuthProvider");
  }
  return context;
}




























// import "./style.css"
// import React, {useState, createContext} from 'react'

// export const AuthContext = createContext();


// export function AuthProvider({children}){
//   const [user, setUser] = useState(null)
//   const login = (e) => setUser(e)
//   const logout = () => setUser(null)

//   return (
//     <AuthContext.Provider value={{user, login, logout}}>
//       {children}
//     </AuthContext.Provider>
//   )
// }