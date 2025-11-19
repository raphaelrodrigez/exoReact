// import {createContext} from "react";
// import React from "react";

// export const userContext = createContext()

// const ContextProvider = ({Children}) =>{
//     const role = 'admin'
//     const authenticated = true
//     return(
//         <userContext.Provider value={{role, authenticated}}>
//             {Children}
//         </userContext.Provider>
//     )
// }
// export default ContextProvider

// import React, { createContext, useState } from "react";

// export const UserContext = createContext();

// export default function UserProvider({ children }) {
//   const [user, setUser] = useState(null);

//   // Simule une authentification
//   const login = ({ username, password }) => {
//     // Pour la démo, si username contient "admin", il est admin, sinon user
//     if (username && password) {
//       setUser({
//         username,
//         role: username.includes("admin") ? "admin" : "user",
//         authenticated: true,
//       });
//       return true;
//     }
//     return false;
//   };

//   const register = ({ username, password }) => {
//     // Ici tu pourrais ajouter une logique d'inscription
//     // Pour la démo, on fait comme pour login
//     return login({ username, password });
//   };

//   const logout = () => setUser(null);

//   return (
//     <UserContext.Provider value={{ user, login, register, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// import React, {createContext, useEffect, useState } from 'react'
// export const userContext = createContext
// export function AuthProvider({Children}){
//   const initialUser = [
//     {username: 'admin' , password: "admin123"},
//     {username: 'user' , password: "user123"},
//   ]
//   const [user, setUser] = useState("")
//   const [users, setUsers] = useState(()=>{
//     const stored = localStorage.getItem("user")
//     return stored ? JSON.parse(stored) : initialUser
//   })

//   useEffect(()=>{
//     localStorage.getItem("users", JSON.stringify(users))
//   },[users])

//   useEffect(()=>{
//     const stockUser = localStorage.getItem("newUser")
//     if(stockUser) setUser(JSON.stringify(stockUser))
//   })

//   const register =(username, password)=>{
//     if(users.find((u)=>
//     (u.username === username))){
//       alert('utilisateur existe deja ')
//       return false
//     }
//     const rNew = {username, password, role : "user"}
//     setUsers ([...users, ...rNew])
//     setUser(rNew)
//     localStorage.setItem("newUser", JSON.stringify(rNew))
//     return true
//   }

//   const login = (username, password)=>{
//     const found = users.find((u)=>u.username === username && u.password === password)
//     if(found){
//       setUser(found)
//       localStorage.setItem("newUser", JSON.stringify(found))
//       return true
//     }
//     return false
//   }
//   const logout =()=>{
//     setUser(null)
//     localStorage.removeItem('newUser')
//   }
//   return(
//     <userContext.Provider value={{user, login, logout, register}}>
//       {Children}
//     </userContext.Provider>
//   )
// }































import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const initialUsers = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user", password: "user123", role: "user" }
];

// Stockage des produits simulé
const initialProducts = [
  {
    id: 1,
    name: "Produit 1",
    description: "Description du produit 1",
    price: 100,
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Produit 2",
    description: "Description du produit 2",
    price: 200,
    imageUrl: "https://via.placeholder.com/150"
  }
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : initialUsers;
  });
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("products");
    return stored ? JSON.parse(stored) : initialProducts;
  });

  // Sauvegarde users et products dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (username, password) => {
    const found = users.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      setUser(found);
      localStorage.setItem("loggedUser", JSON.stringify(found));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedUser");
  };

  const register = (username, password) => {
    if (users.find((u) => u.username === username)) {
      alert('utilisateur existe deja !!!')
      return false; // utilisateur existe déjà
    }
    const newUser = { username, password, role: "user" };
    setUsers([...users, newUser]);
    setUser(newUser);
    localStorage.setItem("loggedUser", JSON.stringify(newUser));
    return true;
  };

  // CRUD produits (admin uniquement)
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p))
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        products,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
