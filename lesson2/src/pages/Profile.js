// Profile.js
import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';

export const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Profil</h2>
      <p>Nom: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Rôle: {user?.role}</p>
    </div>
  );
};