// Login.js
import React, { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      const { from } = location.state || { from: { pathname: '/dashboard' } };
      history.replace(from);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};