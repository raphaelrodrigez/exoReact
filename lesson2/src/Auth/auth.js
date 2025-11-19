// Mock pour la démo - en réel, vous feriez des appels API
const mockUsers = [
    {
      id: 1,
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin',
      name: 'Admin'
    },
    {
      id: 2,
      email: 'user@example.com',
      password: 'user123',
      role: 'user',
      name: 'Utilisateur Standard'
    }
  ];
  
  export const auth = {
    // Simule un appel API pour le login
    login: async (email, password) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = mockUsers.find(
            u => u.email === email && u.password === password
          );
          
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            resolve(user);
          } else {
            reject(new Error('Email ou mot de passe incorrect'));
          }
        }, 500);
      });
    },
  
    // Simule la déconnexion
    logout: async () => {
      localStorage.removeItem('user');
      return new Promise(resolve => {
        setTimeout(() => resolve(), 500);
      });
    },
  
    // Écoute les changements d'état d'authentification
    onAuthStateChanged: (callback) => {
      const handleStorageChange = () => {
        const user = localStorage.getItem('user');
        callback(user ? JSON.parse(user) : null);
      };
  
      // Écouter les changements de localStorage
      window.addEventListener('storage', handleStorageChange);
  
      // Vérifier l'état initial
      handleStorageChange();
  
      // Fonction de nettoyage
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }
  };