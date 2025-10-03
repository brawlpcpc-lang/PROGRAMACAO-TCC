import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const url = isRegister ? 'http://localhost:3001/register' : 'http://localhost:3001/login';
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erro desconhecido');
      if (isRegister) {
        setIsRegister(false);
        setError('Cadastro realizado! Faça login.');
      } else {
        localStorage.setItem('token', data.token);
        onLogin(data.token);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: '40px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>{isRegister ? 'Cadastro' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 10 }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 10 }}
        />
        <button type="submit" style={{ width: '100%' }}>
          {isRegister ? 'Cadastrar' : 'Entrar'}
        </button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)} style={{ marginTop: 10, width: '100%' }}>
        {isRegister ? 'Já tenho conta' : 'Quero me cadastrar'}
      </button>
      {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
    </div>
  );
}
