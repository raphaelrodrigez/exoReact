// AdminPanel.js
import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';

export const AdminPanel = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Panneau d'administration</h2>
      <p>Bienvenue, {user?.name}!</p>
      <p>Vous avez accès aux fonctionnalités administratives.</p>
      <button onClick={logout}>Déconnexion</button>
    </div>
  );
};