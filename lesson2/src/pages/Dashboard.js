// Dashboard.js
import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';

export const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Tableau de bord</h2>
      <p>Bienvenue, {user?.name}!</p>
      <p>Vous êtes connecté en tant qu'utilisateur standard.</p>
      <button onClick={logout}>Déconnexion</button>
    </div>
  );
};