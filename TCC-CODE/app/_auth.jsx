import React, { useState, useEffect } from 'react';
import Login from './login';

export default function AuthWrapper({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const t = localStorage.getItem('token');
    if (t) setToken(t);
  }, []);

  if (!token) {
    return <Login onLogin={setToken} />;
  }

  return children;
}
