// import React,{useContext} from 'react'
// import {userContext } from "../content/ContextProvider";
// import { Navigate } from 'react-router-dom';
// export default function ProtecteRoute({children, roles}){
//     const {role, authenticated} = useContext(userContext)
//     if(!authenticated){
//         return <Navigate to = '/login'/>
//     }
//     if(!roles.includes(role)){
//         return <Navigate to = "/unauthorized"/>
//     }
//     return children
// }

// import React, { useContext } from "react";
// import { UserContext } from "../context/AuthContext";
// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children, roles }) {
//   const { user } = useContext(UserContext);

//   if (!user || !user.authenticated) {
//     return <Navigate to="/login" />;
//   }
//   if (roles && !roles.includes(user.role)) {
//     return <Navigate to="/unauthorized" />;
//   }
//   return children;
// }

import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />;

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}


